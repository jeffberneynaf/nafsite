import { getAllArticles } from '@/lib/articles'

export async function getStaticPaths() {
  const articles = await getAllArticles()

  return {
    paths: articles.articles.map((article) => ({
      params: {
        id: article.value,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allArticles = await getAllArticles()

  return {
    props: {
      id: params.id,
      article: allArticles.articles?.find((x) => params.id === x.value),
    },
  }
}

export default function Article({ article, id }) {
  // Capitalize first letter and convert space to dash
  return (
    <>
      <div>Id: {article.id}</div>
      <div>Key: {article.key}</div>
      <div>Value: {article.value}</div>
      <div>Display: {article.display}</div>
      <div>Sequence: {article.seq}</div>
      <div>Created By: {article.createdBy}</div>
      <div>Created: {article.created}</div>
      <div>Last Updated By: {article.updatedBy}</div>
      <div>Last Updated: {article.updated}</div>
    </>
  )
}

import Link from '@/components/Link'
import { getAllArticles } from '@/lib/articles'

export async function getStaticProps() {
  const articles = await getAllArticles()

  return { props: { articles: articles } }
}

export default function Articles({ articles }) {
  const sortedArticles = articles.articles.sort((a, b) => ('' + a.display).localeCompare(b.display))
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Articles
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {articles.articles.length === 0 && 'No articles found.'}
          <ul>
            {sortedArticles.map((t) => {
              return (
                <li key={t.key}>
                  <div key={t.key} className="mt-2 mb-2 mr-5">
                    <Link
                      href={`/articles/${t.value}`}
                      className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    >
                      {t.display}
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

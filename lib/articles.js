import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export async function getLookup(lookupId) {
  //const url = `${publicRuntimeConfig.apiServer}/Lookup/${lookupId}`
  const url = `${publicRuntimeConfig.apiServer}/components/getslugs`
  return fetch(url).then((response) => response.json())
}

export async function getAllArticles(type) {
  const url = `${publicRuntimeConfig.apiServer}/components/getslugs`

  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      if (response && Array.isArray(response) && response.length) {
        return {
          articles: response,
          displays: response.map((x) => x.value),
          keys: response.map((x) => x.key),
          msg: `Found ${response.length} posts.`,
          randomArticle: response[Math.floor(Math.random() * response.length)],
        }
      }

      return {
        displays: [],
        msg: 'No posts found.',
      }
    })
}

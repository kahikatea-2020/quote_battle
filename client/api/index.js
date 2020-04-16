import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
  baseURL: "https://api.kanye.rest",
  baseURL: "https://docs.tronalddump.io"
})


// Retrieve a random chuck joke in JSON format.
export const getChuckNorisRandomJoke = () => {
  return api.get("/random")
}

// Retrieve a list of available categories.
export const getChuckNorisCategories = () => {
  return api.get("/categories")
}

// Retrieve a random chuck norris joke from a given category.
export const getChuckNorisRandomCategory = (category) => {
  return api.get(`/random?category=${category}`)
}

// Free text search.
export const getChuckNorisFreeTextSearch = (query) => {
  return api.get(`/search?query=${query}`)
}

// Random Kanye West Quote
export const getKanyeWestQuote = () => {
  return api.get('/')
}

// https://www.tronalddump.io/random/quote
export const getTonaldRandomQuote = () => {
  return api.get('/random/quote')
}

export default api
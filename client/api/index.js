import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
  baseURL: "https://api.kanye.rest",
  baseURL: "https://docs.tronalddump.io",
  baseURL: "https://ron-swanson-quotes.herokuapp.com/v2"
})


// Random Chuck Norris Quote
// JSON.value
export const getChuckRandomJoke = () => {
  return api.get("/random")
}

// Random Kanye West Quote
// JSON.quote
export const getKanyeQuote = () => {
  return api.get('/')
}

// Random Donald Trump Quote
// JSON.value
export const getTonaldRandomQuote = () => {
  return api.get('/random/quote')
}

// Random Ron Swanson Quote
// JSON[0]
export const getRonRandomQuote = () => {
  return api.get('/quotes')
}

export default api
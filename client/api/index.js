import axios from 'axios'

// Random Chuck Norris Quote
// JSON.value
export const getChuckRandomJoke = () => {
  return axios.get("https://api.chucknorris.io/jokes/random")
  .then(res => res.data.value )
}

// Random Kanye West Quote
// JSON.quote
export const getKanyeQuote = () => {
  return axios.get('https://api.kanye.rest')
  .then(res => res.data.quote)
}

// Random Donald Trump Quote
// JSON.value
export const getTonaldRandomQuote = () => {
  return axios.get('https://tronalddump.io/random/quote')
  .then(res => res.data.value)
}

// Random Ron Swanson Quote
// JSON[0]
export const getRonRandomQuote = () => {
  return axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(res => res.data[0])
}
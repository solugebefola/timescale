const API_URL = process.env.REACT_APP_API_DOMAIN
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY

const headers = {
  'Content-Type': 'application/json'
}

const get = url => fetch(`${API_URL}/${url}&api_key=${API_KEY}&language=en-US`, { headers })
    .then(res => res.json())

const api = {
  getRecentMovies: () => get('movie/now_playing?').then(response => response.results)
}

export default api;

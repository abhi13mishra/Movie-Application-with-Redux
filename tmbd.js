import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your key
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return res.data.results;
  } catch (err) {
    throw new Error('Failed to fetch movies');
  }
};
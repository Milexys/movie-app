const API = process.env.REACT_APP_PUBLIC_URL;
const key = process.env.REACT_APP_API_KEY;

const endpoints = {
  movies: {
    getMovies: (s) => `${API}/?s=${s}&type=movie&apikey=${key}`,
  },
};

export default endpoints;
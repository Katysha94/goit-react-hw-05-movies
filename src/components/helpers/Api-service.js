import axios from 'axios'; 

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=fda13f01e3f3a3fa81420b836d301e2c';

export const getTrendingMovies = async () => {
       const response = await axios.get(`${BASE_URL}/trending/movie/day${API_KEY}&language=en-US`)
        return response.data.results;  
}

export const getMovieDetails = async movieId => {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}${API_KEY}&language=en-US`);
        return response.data
}

export const getMovie = async query => {
        const response = await axios.get(`${BASE_URL}/search/movie${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`);
        return response.data.results;
}

export const movieCast = async movieId => {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits${API_KEY}&language=en-US`);
        return response.data.cast
}

export const movieReviews = async movieId => {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews${API_KEY}&language=en-US&page=1`);
        return response.data.results
}
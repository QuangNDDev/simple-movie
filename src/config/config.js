export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "e050194db86d849bf31a7f92702a922e";
const baseURL = "https://api.themoviedb.org/3/movie";
const baseURLSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${baseURL}/${type}?api_key=${apiKey}&${page}`,
  getMovieDetails: (movieId) => `${baseURL}/${movieId}?api_key=${apiKey}`,
  getMovieCredit: (movieId) =>
    `${baseURL}/${movieId}/credits?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${baseURL}/${movieId}/${type}?api_key=${apiKey}`,
  getmovieSearch: (query, page) =>
    `${baseURLSearch}?query=${query}&api_key=${apiKey}&page=${page}`,
};
export const tmdbImage = {
  imageMeta: (wild = "w500" || "original", url) =>
    `https://image.tmdb.org/t/p/${wild}/${url}`,
};
// `https://image.tmdb.org/t/p/w500/${poster_path}`

const API_KEY = `api_key=${process.env.REACT_APP_TMDB_KEY}`;

const endpoint = [
  {
    id: 1,
    title: 'Netflix Originals',
    url: `/discover/tv?${API_KEY}&with_networks=213`,
  },
  {
    id: 2,
    title: 'Trending Now',
    url: `/trending/all/week?${API_KEY}&language=en-US`,
  },
  {
    id: 3,
    title: 'Top Rated',
    url: `/movie/top_rated?${API_KEY}&language=en-US`,
  },
  {
    id: 4,
    title: 'Action Movies',
    url: `/discover/movie?${API_KEY}&with_genres=28`,
  },
  {
    id: 5,
    title: 'Comeddy Movies',
    url: `/discover/movie?${API_KEY}&with_genres=35`,
  },
  {
    id: 6,
    title: 'Horror Movies',
    url: `/discover/movie?${API_KEY}&with_genres=27`,
  },
  {
    id: 7,
    title: 'Romance Movies',
    url: `/discover/movie?${API_KEY}&with_genres=10749`,
  },
  {
    id: 8,
    title: 'Documentaries Movies',
    url: `/discover/movie?${API_KEY}&with_genres=99`,
  },
];

export const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';

export default endpoint;

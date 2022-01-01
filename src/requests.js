const APIKEY = "bfdc691c98a1584fcf6f769c65d2c0de";
const requests = {
  fetchTrending:
    "/trending/all/week?api_key=bfdc691c98a1584fcf6f769c65d2c0de&language=en-us",
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_network=213`,
  fetchTopRated: `/top_rated?api_key=${APIKEY}&language=en-us&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&language=en_US&sort_by=popularity.desc&include_adult=false&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&language=en_US&sort_by=popularity.desc&include_adult=false&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&language=en_US&sort_by=popularity.desc&include_adult=false&with_genres=27`,
  fetchLoveMovies: `/discover/movie?api_key=${APIKEY}&language=en_US&sort_by=popularity.desc&include_adult=false&with_genres=10749`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${APIKEY}&language=en_US&sort_by=popularity.desc&include_adult=false&with_genres=99`,
};
export default requests;

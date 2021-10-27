// {
// "type" : "INCREASE_COUNT"
// }
// action types
const ADD_MOVIES = "ADD_MOVIES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
// action creators
function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
function addFavorites(movie) {
  return {
    type: ADD_TO_FAVORITES,
    movie,
  };
}
function removeFavorites(movie) {
  return {
    type: REMOVE_FROM_FAVORITES,
    movie,
  };
}
export {
  ADD_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  addMovies,
  addFavorites,
  removeFavorites,
};
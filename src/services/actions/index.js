// {
// "type" : "INCREASE_COUNT"
// }
// action types
const ADD_MOVIES = "ADD_MOVIES";
// action creators
function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export { ADD_MOVIES, addMovies };

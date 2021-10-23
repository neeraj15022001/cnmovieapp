import { ADD_MOVIES } from "../actions/index";
const initialMoviesState = {
  list: [],
  favorites: [],
};
export default function addMovies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}

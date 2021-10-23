import {
  ADD_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/index";
const initialMoviesState = {
  list: [],
  favorites: [],
};
export default function addMovies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case REMOVE_FROM_FAVORITES:
      const filteredArray = state.favorites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favorites: filteredArray,
      };
    default:
      return state;
  }
}

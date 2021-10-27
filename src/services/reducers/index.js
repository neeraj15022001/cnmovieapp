import {combineReducers} from "redux";
import {
    ADD_MOVIES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
} from "../actions/index";

const initialMoviesState = {
    list: [],
    favorites: [],
};

export function addMovies(state = initialMoviesState, action) {
    console.log("MOVIES REDUCER")
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

const initialSearchState = {
    result: {}
};

export function search(state = initialSearchState, action) {
    console.log("SEARCH REDUCER")
    return state;
}

// const initialRootState = {
//     movies: initialMoviesState,
//     search: initialSearchState
// };
// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies: addMovies(state.movies, action),
//         search: search(state.search, action)
//     }
// }
export default combineReducers({movies: addMovies, search})

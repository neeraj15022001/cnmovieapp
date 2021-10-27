// {
// "type" : "INCREASE_COUNT"
// }
// action types
const ADD_MOVIES = "ADD_MOVIES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT"

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

function handleMovieSearch(movie) {
    console.log("handleMovieSearch ", movie)
    const url = `https://www.omdbapi.com/?apikey=43032393&s=${movie}&page=1&type=movie`;
    return function (dispatch) {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.Response === "True") {
                    dispatch(handleSearchedMovieResult(res.Search, true))
                } else {
                    dispatch(handleSearchedMovieResult([], false))
                }
            })
    }

}

function handleSearchedMovieResult(movies, showResultsContainer) {
    return {
        type: ADD_SEARCH_RESULT,
        movies,
        showResultsContainer
    }
}

export {
    ADD_MOVIES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    ADD_SEARCH_RESULT,
    addMovies,
    addFavorites,
    removeFavorites,
    handleMovieSearch,
    handleSearchedMovieResult
};
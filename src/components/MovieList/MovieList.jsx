import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { data } from "../../data.js";
import { addMovies } from "../../services/actions/index";

class MovieList extends React.Component {
  constructor() {
    super();
    this.unsubscribe = null;
  }
  componentDidMount() {
    const store = this.props.store;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
    !this.props.favoritesTab && store.dispatch(addMovies(data));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  isMovieFavorite = (movie) => {
    const state = this.props.store.getState();
    const movies = state.favorites;
    const index = movies.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  render() {
    const movieData = this.props.favoritesTab
      ? this.props.store.getState().favorites
      : this.props.store.getState().list;
    return (
      <Box>
        <Grid container spacing={8}>
          {movieData.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              dispatch={this.props.store.dispatch}
              isMovieFavorite={this.isMovieFavorite(movie)}
            />
          ))}
        </Grid>
      </Box>
    );
  }
}

export default MovieList;

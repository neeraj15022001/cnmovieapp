import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { data } from "../../data.js";
import { addMovies } from "../../services/actions/index";

class MovieList extends React.Component {
  componentDidMount() {
    const store = this.props.store;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("State", store.getState());
  }
  render() {
    const { list, favorites } = this.props.store.getState();
    return (
      <Box>
        <Grid container spacing={8}>
          {list.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.Title}
              plot={movie.Plot}
              poster={movie.Poster}
              imdBRating={movie.imdbRating}
            />
          ))}
        </Grid>
      </Box>
    );
  }
}

export default MovieList;

import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { data } from "../../data.js";

class MovieList extends React.Component {
  componentDidMount() {
    const store = this.props.store;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log("State", store.getState());
  }
  render() {
    const data = this.props.store.getState();
    return (
      <Box>
        <Grid container spacing={8}>
          {data.map((movie) => (
            <MovieCard
              title={movie.Title}
              plot={movie.Plot}
              poster={movie.Poster}
              imdBRating={movie.imdbRating}
              key={movie.imdbID}
            />
          ))}
        </Grid>
      </Box>
    );
  }
}

export default MovieList;

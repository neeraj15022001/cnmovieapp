import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { data } from "../../data";
import MovieCard from "../MovieCard/MovieCard";

function MovieList() {
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

export default MovieList;

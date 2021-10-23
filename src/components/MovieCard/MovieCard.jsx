import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FavoriteBorder } from "@mui/icons-material";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Rating,
} from "@mui/material";
import { addFavorites, removeFavorites } from "../../services/actions";

export default function MultiActionAreaCard(props) {
  const handleUnFavoriteClick = () => {
    const movie = props.movie;
    props.dispatch(removeFavorites(movie));
  };
  const handleFavoriteClick = () => { 
    const movie = props.movie;
    props.dispatch(addFavorites(movie));
  };
  const { Title, Plot, imdBRating, Poster } = props.movie;
  const isMovieFavorite = props.isMovieFavorite;
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Poster}
              alt={Title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Plot}
              </Typography>
              <Typography
                variant="subtitle2"
                component="legend"
                color="text.secondary"
                sx={{ margin: "16px 0 0 0" }}
              >
                Rating
              </Typography>
              <Rating name="read-only" value={imdBRating / 2} readOnly />
            </CardContent>
          </CardActionArea>
          <CardActions>
            {isMovieFavorite ? (
              <Button
                size="large"
                variant="contained"
                color="error"
                startIcon={<FavoriteBorder />}
                fullWidth={true}
                onClick={handleUnFavoriteClick}
              >
                Remove From Favorites
              </Button>
            ) : (
              <Button
                size="large"
                variant="contained"
                color="primary"
                startIcon={<FavoriteBorder />}
                fullWidth={true}
                onClick={handleFavoriteClick}
              >
                Add To Favorites
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

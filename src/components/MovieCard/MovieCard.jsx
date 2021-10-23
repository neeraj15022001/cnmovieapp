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

export default function MultiActionAreaCard({
  title,
  plot,
  imdBRating,
  poster,
}) {
  return (
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
          <CardMedia component="img" height="140" image={poster} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {plot}
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
          <Button
            size="large"
            variant="contained"
            color="error"
            startIcon={<FavoriteBorder />}
            fullWidth={true}
          >
            Add To Favorites
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

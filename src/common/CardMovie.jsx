import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import Spinner from "./Spinner";


const CardMovie = ({ movies }) => {
  const defaultImage =
    "https://www.universia.net/etc.clientlibs/universia/clientlibs/clientlib-angular/resources/assets/img/default-image.png";

  return (
    <Box sx={{ flexGrow: 1 }}>
      {movies.loading ? (
        <Spinner />
      ) : (
        <Grid container spacing={2}>
          {movies?.data?.Search?.map((movie) => (
            <Grid key={movie.imdbID} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="420"
                    image={
                      movie?.Poster !== "N/A" ? movie.Poster : defaultImage
                    }
                    alt={movie?.Title}
                  />
                  <CardContent sx={{ minHeight: 95 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {movie?.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Year: {movie.Year}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardMovie;

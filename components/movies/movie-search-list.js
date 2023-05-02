import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";
import { Box } from "@mui/joy";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
export default function MoiveSearchList(props) {
  const { movies } = props;
  console.log(movies);
  return (
    <ImageList
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {movies.map((movie) => (
        <ImageListItem key={movie.id} dense>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            {movie.poster_path ? (
              <Image
                alt=""
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                width={400}
                height={600}
              />
            ) : (
              <BrokenImageIcon sx={{ width: 400, height: 600 }} />
            )}
          </Box>

          <ImageListItemBar
            title={movie.title}
            subtitle={movie.vote_average.toFixed(1)}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${movie.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

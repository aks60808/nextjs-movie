import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Rating,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function DetailMoviePage() {
  const router = useRouter();

  const [movie, setMovie] = useState();
  const { movieID } = router.query;
  console.log(movieID);
  useEffect(() => {
    if (movieID) {
      fetch(`/api/get-movie?query=${movieID}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    }
  }, [setMovie, movieID]);

  if (!movie) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress
            size={100}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Box>
      </>
    );
  }
  console.log(movie);
  return (
    <>
      <Box sx={{ display: "flex", m: 1 }}>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Image
            alt=""
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={300}
            height={450}
          />
          <Container sx={{ padding: 1 }}>
            <Typography variant="h3" sx={{ mt: 1, ml: 1, flexGrow: 1 }}>
              {movie.original_title}
            </Typography>

            <Container sx={{ display: "inline-flex" }}>
              <Rating
                name="size-small"
                defaultValue={5 * (movie.vote_average / 10)}
                readOnly
                precision={0.1}
                sx={{ mb: 1 }}
              />
              {movie.genres.map((genre) => (
                <Typography key={genre.id} sx={{ textAlign: "center" }}>
                  {genre.name}
                </Typography>
              ))}
            </Container>

            <Typography>{movie.overview}</Typography>
            <></>
          </Container>
        </Box>

        {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Image
            alt=""
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={150}
            height={225}
          />
          <Container sx={{ padding: 1 }}>
            <Typography
              variant="h3"
              sx={{ mt: 1, mb: 2, flexGrow: 1, fontSize: 30 }}
            >
              {movie.original_title}
            </Typography>
            <Typography>{movie.overview}</Typography>
            <></>
          </Container>
        </Box> */}
      </Box>
      {/* cast */}
      {/* <Box sx={{ display: "flex", m: 1 }}>
        <ImageList
          spacing={8}
          sx={{
            gridAutoFlow: flowDirection || "column",

            columnGap: "8px",
          }}
        >
          {movie.results.map((media) => (
            <ImageListItem sx={{ maxWidth: 200 }}>
              <Image
                alt=""
                src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
                width={200}
                height={300}
              />
              <Typography
                paragraph
                variant="h5"
                textAlign="center"
                sx={{ m: 1, color: "yellowgreen" }}
              >
                <span>
                  <StarsIcon className="icon" />
                  {(5 * (media.vote_average / 10)).toFixed(1)}
                </span>
              </Typography>
              <ImageListItemBar
                style={{ color: "#c5c6c7" }}
                title={
                  <>
                    {" "}
                    <Typography
                      variant="h5"
                      style={{
                        display: "block",
                        whiteSpace: "pre-line",
                      }}
                      textAlign="center"
                    >
                      {media.title || media.name}
                    </Typography>
                    <Typography
                      variant="h7"
                      style={{
                        display: "block",
                        whiteSpace: "pre-line",
                        fontStyle: "italic",
                      }}
                      textAlign="center"
                    >
                      {media.release_date}
                    </Typography>
                  </>
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box> */}
    </>
  );
}

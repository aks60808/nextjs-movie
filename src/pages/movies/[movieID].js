import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Rating,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CreditList from "../../../components/movies/credit-list";
export default function DetailMoviePage() {
  const router = useRouter();

  const [movie, setMovie] = useState();
  const [credit, setCredit] = useState();
  const { movieID } = router.query;
  useEffect(() => {
    if (movieID) {
      fetch(`/api/get-movie?query=${movieID}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    }
  }, [setMovie, movieID]);

  useEffect(() => {
    if (movieID) {
      fetch(`/api/get-credit?query=${movieID}`)
        .then((res) => res.json())
        .then((data) => {
          setCredit(data);
        });
    }
  }, [setCredit, movieID]);

  if (!movie || !credit) {
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
  console.log(credit);
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

            <Container
              sx={{ display: "inline-flex", justifyContent: "space-evenly" }}
            >
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                Rating:
              </Typography>
              <Rating
                name="size-small"
                defaultValue={5 * (movie.vote_average / 10)}
                readOnly
                precision={0.1}
                sx={{ display: "flex", alignItems: "center" }}
              />
              <Typography sx={{ display: "flex", alignItems: "center", m: 1 }}>
                Time: {movie.runtime} min
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", m: 1 }}>
                Release Date: {movie.release_date}
              </Typography>
            </Container>

            <Typography>{movie.overview}</Typography>
            <></>
          </Container>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              m: 1,
              display: "flex",

              justifyContent: "center",
            }}
          >
            <Image
              alt=""
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              width={300}
              height={450}
            />
          </Box>
          <Box>
            <Container sx={{ padding: 1, flexGrow: 1 }}>
              <Typography
                variant="h3"
                sx={{ mt: 1, mb: 2, flexGrow: 1, fontSize: 30 }}
              >
                {movie.original_title}
              </Typography>
              <Container
                sx={{ display: "inline-flex", justifyContent: "space-evenly" }}
              >
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  Rating:
                </Typography>
                <Rating
                  name="size-small"
                  defaultValue={5 * (movie.vote_average / 10)}
                  readOnly
                  precision={0.1}
                  sx={{ display: "flex", alignItems: "center" }}
                />
                <Typography
                  sx={{ display: "flex", alignItems: "center", m: 1 }}
                >
                  Time: {movie.runtime} min
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", m: 1 }}
                >
                  Release Date: {movie.release_date}
                </Typography>
              </Container>
              <Typography variant="h4" sx={{ fontSize: 25 }}>
                Overview
              </Typography>
              <Typography variant="p" sx={{ padding: 1, m: 1 }}>
                {movie.overview}
              </Typography>
              <></>
            </Container>
          </Box>
        </Box>
      </Box>
      {/* cast */}

      <Box sx={{ display: "flex", m: 1, flexDirection: "column" }}>
        <Typography variant="h3">The Cast</Typography>
        <CreditList credit={credit.cast} />
      </Box>
    </>
  );
}

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/joy/Stack";
import { Typography } from "@mui/joy";
import MediaList from "../../../components/utils/media-list";
import MoiveSearchList from "../../../components/movies/movie-search-list";
export default function SearchPage() {
  const router = useRouter();
  const { query } = router.query;
  const [movieList, setMovielist] = useState();
  useEffect(() => {
    if (query) {
      fetch(`/api/search-movie?query=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setMovielist(data);
        });
    }
  }, [setMovielist, query]);

  if (!movieList) {
    return (
      <>
        <Typography variant="h1">Searching</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress
            size={100}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Box>
      </>
    );
  }
  return (
    <>
      <MoiveSearchList movies={movieList.results} />
    </>
  );
}

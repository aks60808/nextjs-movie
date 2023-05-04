import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
export default function BackgroundMovieCarousel(props) {
  const { data } = props;
  return (
    <>
      <Box
        sx={{
          zIndex: 9,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel sx={{ width: 400, height: 600 }}>
          {data.results.map((movie) => (
            <Image
              key={movie.id}
              alt=""
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              width={400}
              height={600}
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
}

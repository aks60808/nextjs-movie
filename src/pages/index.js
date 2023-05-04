import TrendingMovieBar from "../../components/movies/trending-movie-bar";
import PopularMovieBar from "../../components/movies/popular-movie-bar";
import { useState, useEffect } from "react";
import BackgroundMovieCarousel from "../../components/movies/bg-movie-carousel";
import { Box, Typography } from "@mui/material";
export default function HomePage(props) {
  const [clickPageNumButton, setclickPageNumButton] = useState(false);
  const [popularMoviePageNum, setPopularMoviePageNUm] = useState(1);
  const [popularMovieContent, setPopularMovieContent] = useState(
    props.popular.prefetchedUpcomingMovieData
  );
  useEffect(() => {
    if (clickPageNumButton) {
      fetch(`/api/popular-movie?page=${popularMoviePageNum}`)
        .then((res) => res.json())
        .then((data) => {
          setPopularMovieContent(data);
          setclickPageNumButton(false);
        });
    }
  }, [popularMoviePageNum, clickPageNumButton]);

  function clickPageNumHandler(action) {
    setclickPageNumButton(true);

    if (action === "next") {
      setPopularMoviePageNUm(popularMoviePageNum + 1);
    } else {
      setPopularMoviePageNUm(popularMoviePageNum - 1);
    }
  }
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <BackgroundMovieCarousel data={props.carousel.carouselMovieData} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            left: 0,
            top: 0,
            position: "absolute",
            width: "100%",
            height: 600,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Typography
            textAlign={"center"}
            variant="h1"
            color="white"
            sx={{ display: "block" }}
          >
            Movie Rack
          </Typography>
          <Typography
            textAlign={"center"}
            variant="h3"
            fontStyle="italic"
            color="white"
          >
            a place you can put your fav movies on.
          </Typography>
        </Box>
      </Box>

      <TrendingMovieBar
        data={{ sectionTitle: "Trending", ...props.trending }}
      />
      <PopularMovieBar
        data={{
          sectionTitle: "Popular",
          pageNum: popularMoviePageNum,
          onClickPageNum: clickPageNumHandler,
          ...popularMovieContent,
        }}
      />
    </>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export async function getStaticProps() {
  const carouselMovieRes = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&page=1`
  );
  const carouselMovieData = await carouselMovieRes.json();
  const trendingMovieDayRes = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
  );
  const trendingMovieDayData = await trendingMovieDayRes.json();

  const trendingMovieWeekRes = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
  );
  const trendingMovieWeekData = await trendingMovieWeekRes.json();

  const upcomingRes = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=1`
  );
  const upcomingMovieData = await upcomingRes.json();

  return {
    // using Incremental Static Rendering (ISR)
    props: {
      carousel: { carouselMovieData: carouselMovieData },
      trending: {
        prefetchedTrendingDayMovieData: trendingMovieDayData,
        prefetchedTrendingWeekMovieData: trendingMovieWeekData,
      },
      popular: {
        prefetchedUpcomingMovieData: upcomingMovieData,
      },
    },
    revalidate: 86400,
  };
}

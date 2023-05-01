import TrendingMovieBar from "../../components/movies/trending-movie-bar";
import PopularMovieBar from "../../components/movies/popular-movie-bar";
import { useState, useEffect } from "react";
function TrendingPage(props) {
  const [clickPageNumButton, setclickPageNumButton] = useState(false);
  const [popularMoviePageNum, setPopularMoviePageNUm] = useState(1);
  const [popularMovieContent, setPopularMovieContent] = useState(
    props.popular.prefetchedUpcomingMovieData
  );
  useEffect(() => {
    // If searchCity is 2 letters or more
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
    console.log("im clicked");
    if (action === "next") {
      setPopularMoviePageNUm(popularMoviePageNum + 1);
    } else {
      setPopularMoviePageNUm(popularMoviePageNum - 1);
    }
  }
  return (
    <>
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

export default TrendingPage;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export async function getStaticProps() {
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

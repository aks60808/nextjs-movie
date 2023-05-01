import TrendingMovieBar from "../../components/movies/trending-movie-bar";
import TrendingTvBar from "../../components/movies/trending-tv-bar";
function TrendingPage(props) {
  return (
    <>
      <TrendingMovieBar data={props.movie} />
      <TrendingTvBar data={props.tv} />
    </>
  );
}

export default TrendingPage;

export async function getStaticProps() {
  const movieDayRes = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
  );
  const movieDayData = await movieDayRes.json();

  const tvDayRes = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_API_KEY}`
  );
  const tvDayData = await tvDayRes.json();

  const movieWeekRes = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
  );
  const movieWeekData = await movieWeekRes.json();

  const tvWeekRes = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API_KEY}`
  );
  const tvWeekData = await tvWeekRes.json();

  return {
    // using Incremental Static Rendering (ISR)
    props: {
      movie: {
        prefetchedDayMovieData: movieDayData,
        prefetchedWeekMovieData: movieWeekData,
      },
      tv: { prefetchedDayTvData: tvDayData, prefetchedWeekTvData: tvWeekData },
    },
    revalidate: 86400,
  };
}

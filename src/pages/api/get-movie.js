export default async function handler(req, res) {
  const { query } = req.query;
  console.log(query);
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await movieRes.json();
  res.status(200).json(data);
}

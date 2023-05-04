export default async function handler(req, res) {
  const { query } = req.query;
  const searchMovierRes = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
  );
  const data = await searchMovierRes.json();
  res.status(200).json(data);
}

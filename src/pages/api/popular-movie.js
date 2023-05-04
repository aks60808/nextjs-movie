export default async function handler(req, res) {
  // if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
  //   return res.status(401).send("You are not authorized to call this api");
  // }
  const { page } = req.query;
  const popularMovierRes = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`
  );
  const data = await popularMovierRes.json();
  res.status(200).json(data);
}

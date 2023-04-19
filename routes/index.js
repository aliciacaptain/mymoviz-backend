var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;

router.get("/movies", async (req, res) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  );
  const apiData = await response.json();
  res.json({ movies: apiData.results });
});

module.exports = router;

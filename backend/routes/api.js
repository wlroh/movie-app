var express = require("express");
var router = express.Router();

var axios = require("axios");

const KEY = {
  ID: "f2Lm26yvksVAlhD296kc",
  SECRET: "ZtIMmz_Vqf",
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/search", async function (req, res, next) {
  const movies = await getMovies();
  res.json(movies.data);
});

getMovies = async () => {
  let movies = [];
  const config = {
    headers: {
      "X-Naver-Client-Id": KEY.ID,
      "X-Naver-Client-Secret": KEY.SECRET,
    },
    params: {
      query: "어벤저스",
      display: 5,
    },
  };

  try {
    movies = await axios.get(
      "https://openapi.naver.com/v1/search/movie.json",
      config
    );
  } catch (err) {
    console.log(err);
  }

  return movies;
};

module.exports = router;

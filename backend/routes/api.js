var express = require("express");
var router = express.Router();

var axios = require("axios");

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
  const ID_KEY = "f2Lm26yvksVAlhD296kc";
  const SECRET_KEY = "ZtIMmz_Vqf";
  const config = {
    headers: {
      "X-Naver-Client-Id": ID_KEY,
      "X-Naver-Client-Secret": SECRET_KEY,
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

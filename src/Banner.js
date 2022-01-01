import React, { useEffect, useState } from "react";
import instancess from "./axios.js";
import requests from "./requests.js";
import "./banner.css";
// import axios from "axios";
// import movieTrailer from "movie-trailer";
// import YouTube from "react-youtube";
function Banner() {
  const [movie, setMovie] = useState([]);
  // const [searchText, setSearchText] = useState("");
  // const [trailerurl, settrailerurl] = useState("");
  // const fetchSearchs = async () => {
  //   const data = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=bfdc691c98a1584fcf6f769c65d2c0de&language=en_US&query=spiderman&include_adult=false`
  //   );
  //   console.log(data);
  // };
  useEffect(() => {
    async function fetchData() {
      const reqforamovie = await instancess.get(requests.fetchTrending);
      setMovie(
        reqforamovie.data.results[
          Math.floor(Math.random() * reqforamovie.data.results.length)
        ]
      );
      return reqforamovie;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="contents">
        <h1 className="bannertitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerbuttons">
          <button className="bannerbutton">Play</button>
          <button className="bannerbutton">MyList</button>
        </div>
        <h1 className="bannerdesc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="bannerfade"></div>
    </header>
  );
}

export default Banner;

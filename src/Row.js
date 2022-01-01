import React, { useState, useEffect } from "react";
import instancess from "./axios.js";
import YouTube from "react-youtube";
import "./row.css";
import movieTrailer from "movie-trailer";
const imgurl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, islarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerurl, settrailerurl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const req = await instancess.get(fetchURL);
      setMovies(req.data.results);
      console.log(req);
      return req;
    }
    fetchData();
  }, [fetchURL]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleclicks = (movie) => {
    if (trailerurl) {
      settrailerurl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const URLParams = new URLSearchParams(new URL(url).search);
          settrailerurl(URLParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="rowimages">
        {movies.map((abc) => {
          return (
            <img
              onClick={() => handleclicks(abc)}
              key={movies.id}
              src={`${imgurl}${islarge ? abc.poster_path : abc.backdrop_path}`}
              alt="abc"
              className={`imgposter ${islarge && "img_large"}`}
            ></img>
          );
        })}
      </div>
      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  );
}
export default Row;

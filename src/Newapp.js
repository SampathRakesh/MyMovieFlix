import "./newapp.css";
import Row from "./Row.js";
import requests from "./requests";
import Banner from "./Banner.js";
import Navbar from "./Navbar";
function Newapp() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NetflixOriginals"
        fetchURL={requests.fetchNetflixOriginals}
        islarge
      />
      <Row title="TrendingNow" fetchURL={requests.fetchTrending} />
      <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="LOve Movies" fetchURL={requests.fetchLoveMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row
        title="Documentary Movies"
        fetchURL={requests.fetchDocumentaryMovies}
      />
    </div>
  );
}

export default Newapp;

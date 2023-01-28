import React, { Component } from "react";
import axios from "axios";
import config from "./config";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    const api_key = "d11c7095060ddaadd75da2cbe88db14d";
    // this is tmdb endpoint for JSON
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;

    // axios return a promise in JSON response
    axios.get(nowPlayingUrl).then((response) => {
      // console.log(response.data);

      // tapping into JSON result
      const movieData = response.data.results;

      // store the movie list in state
      this.setState({
        movieList: movieData,
      });
    });
  }
  render() {
    // console.log(this.state.movieList);

    // poster endpoint
    const imageUrl = "http://image.tmdb.org/t/p/w300";

    // generate markup in array using map method
    const movieGrid = this.state.movieList.map((movie, index) => {
      return (
        <div className="col s3" key={index}>
          <Link to={`/movie/${movie.id}`}>
            {/* create poster path */}
            <img src={`${imageUrl}${movie.poster_path}`} />
          </Link>
        </div>
      );
    });

    return <div className="row">{movieGrid}</div>;
  }
}

export default Home;

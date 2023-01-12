import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Headers from "./Headers";
import Modal from "./Modal";

class App extends Component {
  constructor() {
    super();

    // initialize weather related stuff here
    this.state = {
      temp: "",
      cityName: "",
      weather: "",
      high: "",
      low: "",
      icon: "",
      isRaining: "",
      showModal: true,
    };
  }

  componentDidMount() {
    this.getCityWeather("London");

    // initialize google materialize modal variable
    var elems = document.querySelectorAll(".modal");
    var instances = window.M.Modal.init(elems);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes("rain");
      if (isRaining) {
        this.setState({
          isRaining: "Rain rain go away!!!",
        });
      }
    }
  }

  // form event function
  searchCity = (e) => {
    // do not move to next page
    e.preventDefault();

    // get the city value from form-input
    const city = document.getElementById("city").value;
    this.getCityWeather(city);
  };

  // code refactored
  getCityWeather = (city) => {
    // open weather map url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;
    axios.get(url).then((resp) => {
      // updating weather related stuff
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name,
      });
    });
  };

  // remove modal -button event
  removeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    // making image-url dynamic
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;

    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <button onClick={this.removeModal} className="btn">
              Remove from DOM!!
            </button>

            {/* How to pass state as props in header component */}
            <Headers temp={this.state.temp} isRaining={this.state.isRaining} />
            <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
            >
              Details
            </a>
            <form onSubmit={this.searchCity}>
              <input type="text" id="city" placeholder="Enter a City Name" />
            </form>
          </div>
        </div>

        {/* how to pass state as props in Modal component */}
        {this.state.showModal ? (
          <Modal
            iconUrl={iconUrl}
            weather={this.state.weather}
            cityName={this.state.cityName}
            low={this.state.low}
            high={this.state.high}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;

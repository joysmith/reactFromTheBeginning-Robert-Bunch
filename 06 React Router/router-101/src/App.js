import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home";
import Help from "./Help";

// these are simple functional-components, fastes way for testing
const Host = () => <h1>Become a host</h1>;
const Login = () => <h1>Login</h1>;
const Signup = () => <h1>Sign in</h1>;

function App() {
  return (
    <Router>
      {/* Whenever we need to display component in all path -DON'T put "exact" props  */}
      <Route path="/" component={NavBar} />

      {/* conditional rendering based on what's in URL */}
      {/* Whenever we need to pass props through Component we use "render-prop" instead of "component-prop" */}
      <Route
        exact
        path="/"
        render={(props) => {
          return (
            <Home title="Hello" history={props.history} match={props.match} />
          );
        }}
      />
      <Route exact path="/host" component={Host} />

      {/* Nested route feature: dont put "exact" */}
      <Route path="/help" component={Help} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;

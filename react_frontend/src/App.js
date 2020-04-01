import React from "react";
// import logo from './logo.svg';
// import { Provider } from "react-redux";
// import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom"; //HashRouter
// import './App.css';
import Main from "./shared/Main";

function App() {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
  const pathAddress = process.env.PUBLIC_URL + "/";
  return (
    <BrowserRouter basename={pathAddress}>
      <Main />
    </BrowserRouter>
  );
}

export default App;

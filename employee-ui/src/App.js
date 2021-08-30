import React, { Fragment } from "react";
import logo from './logo.svg';
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    </div>
  );
}

export default App;

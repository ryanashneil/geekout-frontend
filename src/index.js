import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Results from "./components/Results";
import Footer from "./components/Footer";

import "./styles.css";

const App = () => (
  <div>
    <Navbar />
    <Intro />
    <Results />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

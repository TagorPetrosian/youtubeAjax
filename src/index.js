import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search-bar";
import keys from "../config/keys";

const API_KEY = keys.YOUTUBE_API_KEY;

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));

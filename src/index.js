import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar"

const API_KEY = "AIzaSyA-ogQBTivY9Hy7VcweFw_nQWgHPdQAWgs";

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>)
;
}

ReactDOM.render(<App />, document.querySelector(".container"));
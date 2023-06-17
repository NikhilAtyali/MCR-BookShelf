import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

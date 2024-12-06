/* eslint-disable react/jsx-filename-extension */
import "./style.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavMenu from "./components/Navbar";
import Home from "./pages/Home";
import APIData from "./pages/SearchByState";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import GraphPage from "./pages/GraphPage";
import CollegePage from "./pages/CollegePage";
import GraphPage from "./pages/GraphPage";

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/searchByState" element={<APIData />} />
        <Route path="/graphPage" element={<GraphPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
        <Route path="/college/:name" element={<CollegePage />} />
        <Route path="/college/:id/:name" element={<CollegePage />} />
=======
>>>>>>> a55aeaf (update)
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </Router>
  );
}
export default App;

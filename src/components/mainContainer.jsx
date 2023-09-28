import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Red from "./red";
import Blue from "./blue";

export default function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
    </div>
  );
}
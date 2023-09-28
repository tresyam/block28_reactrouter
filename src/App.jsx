import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import MainContainer from "./components/mainContainer";

function App() {
  return (
    <div id="container">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
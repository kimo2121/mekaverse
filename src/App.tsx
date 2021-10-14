import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Home />
      <Community />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";

import SiteHeader from "./components/SiteHeader/SiteHeader.component";
import Hero from "./components/HeroSection/HeroSection.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SiteHeader />
      <Hero />
    </div>
  );
};

export default App;

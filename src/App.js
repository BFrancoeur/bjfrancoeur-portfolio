import React from "react";

import SiteHeader from "./components/SiteHeader/SiteHeader.component";
import Hero from "./components/HeroSection/HeroSection.component";
import AboutMeSection from "./components/AboutMe/AboutMe.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SiteHeader />
      <Hero />
      <AboutMeSection />
    </div>
  );
};

export default App;

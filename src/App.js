import React from "react";
import Header from "./Portfolio/Header";
import Home from "./Portfolio/Home";
import About from "./Portfolio/About";
import Projects from "./Portfolio/Projects";
import Contact from "./Portfolio/Contact";
import Footer from "./Portfolio/Footer";
import HomePage from "./Portfolio/HomePage";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <HomePage />
      {/* <Home /> */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

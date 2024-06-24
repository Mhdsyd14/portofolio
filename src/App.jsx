import React from "react";
import Navbar from "./component/Navbar";
import Jumbotron from "./component/Jumbotron";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Skill />
      <Project />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import Navbar from "./component/Navbar";
import Jumbotron from "./component/Jumbotron";
import Skill from "./component/Skill";
import Project from "./component/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Skill />
      <Project />
    </>
  );
};

export default App;

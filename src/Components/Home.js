import React from "react";
import { About } from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Cerificate from "./Cerificate";
import Skills from "./Skills";
function Home() {
  return (
    <div>
      <About />
      <Experience />
      <Projects />
      <Cerificate />
      <Skills />
    </div>
  );
}

export default Home;

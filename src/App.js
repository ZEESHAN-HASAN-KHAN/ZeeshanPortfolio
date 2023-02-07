import Navbar1 from "./Components/Navbar1.js";
import Home from "./Components/Home.js";
import { About } from "./Components/About.js";
import Cerificate from "./Components/Cerificate.js";
import Experience from "./Components/Experience.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";
import Footer from "./Components/Footer.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificate" element={<Cerificate />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import React from "react";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden">David's Portfolio Page</h1>
      <Router style={{ height: "100%" }}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

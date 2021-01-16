import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import Aboutme from "./components/Aboutme";

const App = () => {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 900 } },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <Aboutme />
    </>
  );
};

export default App;

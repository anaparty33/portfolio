import React from "react";
import Typed from "react-typed";
const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        {/* <h1>Full Stack Developer</h1> */}
        <Typed
          className="typed-text"
          strings={[
            "Hi! ",
            "I am Bharadwaja",
            "Full Stack Web Developer",
            "FrontEnd Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;

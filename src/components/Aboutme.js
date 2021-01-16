import React from "react";
import myImage from "../circle-cropped.png";

const Aboutme = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img
                className="profile-img"
                src={myImage}
                alt="profile img"
                width="400px"
                height="500px"
              ></img>
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h2 className="about-heading">About Me</h2>
            <p>
              Solution-driven developer adept at contributing to highly
              collaborative work environment, finding solutions and determining
              customer satisfaction. Proven experience developing
              consumer-focused websites using HTML, CSS, React and JavaScript.
              Built products for desktop and mobile app users over 2+ years,
              meeting highest standards for web design, user experience, best
              practices and speed. Designed and developed web applications
              across multiple APIs, third-party integrations and databases. In
              addition to these, my skillset also includes Front-End development
              with Bootstrap, Jquery, React with Redux. My backend knowledge
              also includes Node.js, Express.js, APIs, RESTful APIs with NoSQL
              database MongoDB. My passion tends to land on progressive
              application development using React and other advanced JavaScript
              frameworks. I also take great care & interest in creating APIs and
              take a position in back-end development with my strong experience
              with Node.JS and NoSQL or relational databases with complex
              taxonomies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;

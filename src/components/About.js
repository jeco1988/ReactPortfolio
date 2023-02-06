// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/headshot.jpg'} alt="Jack Economos"/>
      <p className="content is-italic mt-4">
        My name is Jack Economos, I am currently studying a full stack coding bootcamp to futher my skills in web development.
      </p>
      <p className="content">
        Using the skills I have learned throughout the bootcamp,
        I should be able to utilise many front and back end 
        technologies in order to build a full stack web app.
      </p>
    </div>
  );
}

export default About;
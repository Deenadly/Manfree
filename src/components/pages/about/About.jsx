import React from "react";
import "./about.css";
import coffee from "../../assets/coffee.webp";

const About = () => {
  return (
    <div name="about" className="about-container">
      <div>
        <p className="about-title">
          About us <b>Who we are</b>
        </p>
      </div>
      <div className="about-content-parent">
        <div className="about-content">
          <p>
            Founded in 2018, we are a team of passionate UI/UX designers and
            full stack developers helping businesses to launch their ideas
            online.
          </p>
          <p>
            We pride ourselves on our ability to build great user experiences.
            We are passionate about the websites and apps we do, just the same
            as our clients . It creates a unique relationship with our clients
            and helps us go above and beyond.
          </p>
          <p>
            We’ll build you an amazing website or a mobile app, so you can focus
            on what matters: keeping your users happy and growing your business.
          </p>
          <p>
            Through the years we have been shaped and learned by both successes
            and failures. Learning through doing keeps us sharp.
          </p>
          <p>
            Backed by modern technologies - We build products that improve
            usability, functionality, stay reliable, and evolve with time. We’re
            proud to say we worked with clients all around the world.
          </p>
          <p>
            We translate your ideas into solutions, crafting web and mobile
            applications.
          </p>
        </div>
        <div className="about-image-parent">
          <img className="about-image" src={coffee} alt="coffee" />
        </div>
      </div>
    </div>
  );
};

export default About;

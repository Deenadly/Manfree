import React from "react";
import "./work.css";
import img1 from "../../assets/stepthroughrehab.webp";
import img2 from "../../assets/manfreetechnologies.webp";
import img3 from "../../assets/klugparking.webp";

const Work = () => {
  return (
    <div name="work" className="work-container">
      <div>
        <p className="work-title">
          Work <b>What we have done</b>
        </p>
      </div>
      <div className="work-content-parent">
        <div className="work-single-parent">
          <img className="work-image" src={img1} alt="img1" />
          <ul className="service-list">
            <li>React Js</li>
            <li>Next Js</li>
            <li>Tailwind</li>
            <li>Framer Motion</li>
            <li>UI</li>
            <li>UX</li>
            <li>Micro Interactions</li>
          </ul>
        </div>
        <div className="work-single-parent">
          <img className="work-image" src={img2} alt="img2" />
          <ul className="service-list">
            <li>React Js</li>
            <li>Next Js</li>
            <li>UI</li>
            <li>UX</li>
            <li>Micro Interactions</li>
            <li>Node Js</li>
            <li>Web Apps</li>
            <li>Dashboard</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="work-single-parent">
          <img className="work-image" src={img3} alt="img3" />
          <ul className="service-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>UI</li>
            <li>UX</li>
            <li>Micro Interactions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;

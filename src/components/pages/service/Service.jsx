import React from "react";
import "./service.css";
import brand from "../../assets/branding.webp";
import ui from "../../assets/ux.webp";
import web from "../../assets/web-design.webp";
import app from "../../assets/ui.webp";

const Service = () => {
  return (
    <div name="service" className="service-container">
      <div>
        <p className="service-title">
          Services <b>What we do</b>
        </p>
      </div>
      <div className="service">
        <div className="service-parent">
          <img src={brand} alt="brand" />
          <p className="service-sub-title">Branding</p>
          <ul className="service-list">
            <li>Brand Identity</li>
            <li>Visual Identity</li>
            <li>Logo Design</li>
            <li>Brand Guidelines</li>
            <li>Rebranding</li>
          </ul>
        </div>
        <div className="service-parent">
          <img src={ui} alt="ui" />
          <p className="service-sub-title">UI/UX</p>
          <ul className="service-list">
            <li>Wireframes</li>
            <li>Product Design</li>
            <li>Web Design</li>
            <li>UI Design</li>
            <li>UX</li>
            <li>Prototyping</li>
          </ul>
        </div>
        <div className="service-parent">
          <img src={web} alt="web" />
          <p className="service-sub-title">Web</p>
          <ul className="service-list">
            <li>Front-end development</li>
            <li>Back-end development</li>
            <li>Landing Page</li>
            <li>E-Commerce</li>
            <li>Dashboard</li>
            <li>Web APP</li>
            <li>Headless Wordpress</li>
            <li>Wireframes</li>
            <li>User Testing</li>
            <li>Responsive web design</li>
            <li>Micro Interactions</li>
          </ul>
        </div>
        <div className="service-parent">
          <img src={app} alt="app" />
          <p className="service-sub-title">Apps</p>
          <ul className="service-list">
            <li>React Native</li>
            <li>Cordova</li>
            <li>Cross Platform</li>
            <li>Android</li>
            <li>iOS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;

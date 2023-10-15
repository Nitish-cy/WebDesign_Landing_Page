import React from "react";
import "./features.css";
import m1 from '../../assets/house1.jpg'
import m2 from '../../assets/bed2.jpg'
import m3 from '../../assets/bed1.jpg'
import m4 from '../../assets/kitchen.jpg'
import m5 from '../../assets/bath1.jpg'
const Features = () => {
  return (
    <div className="features">
      <h1>Top Featured Listings</h1>
      <p>Selected lighting by City , State & Zip based on views </p>
        <div className="featuresList">
            <img src={m1} className="sidebar"></img>
            <img src={m3}></img>
            <img src={m2}></img>
            <img src={m4}></img>
            <img src={m5}></img>
        </div>
    </div>
  );
};

export default Features;

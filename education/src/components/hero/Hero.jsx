import React from "react";
import "./hero.css";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find The Perfect Place</h1>
        <p className="text">
          Search the largest selection of luxury high-rise apartments,
          multi-faimily, and singly faimily homes in any area nation wide.
        </p>
        <form className="search">
          <div>
            <input
              type="search"
              placeholder="Enter Keyword..."
              className="fields"
            ></input>
          </div>
          <div className="radio">
            <div>
            <input type="radio" checked></input>
            <label>buy</label>
            </div>
            <div>
            <input type="radio"></input>
            <label>Rent</label>
            </div>
            <button type="submit" className="search-icon">
            <FaSearch></FaSearch>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Description = ({ element }) => {
  return (
    <div className="movie-description-section">
      <div className="movie-description-header-section">
      <h1 className="desc-title">Movie Title {element.title} - {element.year}</h1> <span className="desc-title" > <Rating  starIndex={() => {}} rate={element.rate} /></span>
      </div>
      <div className="movie-content" >
        <img src={element.img} className="movie-image" alt="..." />
      <span className="movie-desc">{element.desc}</span>
      </div>
      <Link to="/" >
      <span className ="home-page">Home Page</span>
      </Link>
    </div>
  );
};

export default Description;

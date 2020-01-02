import React from "react";

const Rating = ({ starIndex, rate }) => {
  const stars = StarNumber => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < StarNumber) {
        star.push(
          <span className="star" onClick={() => starIndex(i + 1)}>
            ★
          </span>
        );
      } else {
        star.push(
          <span className="stars" onClick={() => starIndex(i + 1)}>
            ☆
          </span>
        );
      }
    }
    return star;
  };
  return <div className="rater">{stars(rate)}</div>;
};

export default Rating;

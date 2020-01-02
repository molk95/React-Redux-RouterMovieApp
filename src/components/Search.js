import React, { Component } from "react";
import Rating from "./Rating";
import { connect } from "react-redux";
import { searchMovie, ratingMovie } from "../actions/action";

const Search = ({ rate, ratingMovie, searchMovie }) => {
  return (
    <div class="name-filter">
      <input
        type="text"
        placeholder="Search...."
        className="name-filter-text"
        onChange={e => {
          searchMovie(e.target.value);
        }}
      />
      <div className="rating-filter">
        <div>
          <span className="new-rating-filter">
            <span className="rating-filter-text">Minimum rating</span>
          </span>
          <Rating starIndex={ratingMovie} rate={rate} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  rate: state.ratingMovie
});
const mapDispatchToProps = dispatch => {
  return {
    searchMovie: payload => {
      dispatch(searchMovie(payload));
    },
    ratingMovie: payload => {
      dispatch(ratingMovie(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";

const MovieList = props => {
  const { movies, ratingMovie, searchMovie } = props;
  return (
    <div className="movie-list">
      {movies
        .filter(
          e =>
            e.title.toLowerCase().includes(searchMovie.toLowerCase()) &&
            e.rate >= ratingMovie
        )
        .map(e => (
          <MovieCard element={e} />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(MovieList);

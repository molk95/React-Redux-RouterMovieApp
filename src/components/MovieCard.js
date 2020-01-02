import React from "react";
import Rating from "./Rating";
import EditMovie from "./EditMovie";
import { deleteMovie } from "../actions/action";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

function MovieCard({ element, deleteMovie }) {
  return (
    <div className="movie-card-bordor">
      <div className="movie-card">
        <div className="movie-rating">
          <Rating starIndex={() => {}} rate={element.rate} />
        </div>
        <img src={element.img} className="movie-image" alt="..." />
        <div className="movie-description">
          <div className="movie-title-date"></div>
          {element.title} - {element.year}
          <button
            className="btn-icon"
            onClick={()=>deleteMovie(element.id)}
          >
            <img
              className="delete-icon"
              alt="delete"
              src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png"
            />
          </button>
          <Link to={"/"+element.id} >
          <button className="btn-icon">
            <img
              className="desc-icon"
              alt="description"
              src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/TaskStroke-512.png"
            />
          </button>
          </Link>
          <EditMovie movie={element} />
        </div>
      </div>
    </div>
  );
}
const mapStatetoProps = state =>({
  movies: state.movies
});
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: payload => {
      dispatch(deleteMovie(payload));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(MovieCard);

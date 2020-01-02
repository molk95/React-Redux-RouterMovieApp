import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH,
  RATING
} from "../constants/actionTypes";
import { movies } from "../data";

const initialState = {
  movies,
  searchMovie: "",
  ratingMovie: 0,
  loading: false
};

const MovieAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(e => e.id !== action.payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.id ? { ...el, ...action.payload } : el
        )
      };
    case SEARCH:
      return {
        ...state,
        searchMovie: action.payload
      };
    case RATING:
      return {
        ...state,
        ratingMovie: action.payload
      };
    default:
      return state;
  }
};

export default MovieAppReducer;

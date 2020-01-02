import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH,
  RATING
} from "../constants/actionTypes";

export const addMovie = payload => {
  return { type: ADD_MOVIE, payload };
};
export const deleteMovie = payload => {
  return { type: DELETE_MOVIE, payload };
};
export const editMovie = (payload, id) => {
  return { type: EDIT_MOVIE, id, payload };
};
export const searchMovie = payload => {
  return { type: SEARCH, payload };
};
export const ratingMovie = payload => {
  return { type: RATING, payload };
};

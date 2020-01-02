import React, { Component } from "react";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import Search from "./Search";
import Spinner from "./Spinner";
import Description from "./Description";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";

class MovieApp extends Component {
  state = {};
  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      2000
    );
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="movie-app">
              <div className="movie-app-header">
                <Search />
              </div>
              <main className="movie-app-main">
                <MovieList />
                <AddMovie />
              </main>
            </div>
          )}
        />
        {this.props.movies.map(element => (
          <Route
            path={"/" + element.id}
            render={() => <Description element={element} />}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies
});
export default connect(mapStateToProps)(MovieApp);

import React from "react";
import "../App.css";

const Movie = (props) => {
  return (
    <div
      className="movie-container"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {props.movies.map((movie, index) => (
        <div className="movie-content">
          <img src={movie.Poster} alt="movie-poster"></img>
          <div className="movie-info" >
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;

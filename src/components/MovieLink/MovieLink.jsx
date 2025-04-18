import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieLink = ({ movie }) => {
  const location = useLocation();

  return (
    <Link
      to={`/movies/${movie.id}`}
      state={location.pathname + location.search}
    >
      {movie.title}
    </Link>
  );
};

export default MovieLink;

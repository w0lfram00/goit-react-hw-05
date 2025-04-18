import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../api";
import createImgSrc from "../../createImgSrc";
import s from "./MoviesDetailsPage.module.css";

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const goBackLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      const response = await fetchMovieById(movieId);
      setMovie(response);
    };
    getData();
  }, []);

  if (!movie) return;
  return (
    <div>
      <Link to={goBackLinkRef.current}>Go back</Link>
      <div className={s.details}>
        <img src={createImgSrc(movie.poster_path)} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>User score {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((item) => item.name).join(" / ")}</p>
        </div>
      </div>
      <div className={s.additionalInfo}>
        <p>Additional info</p>
        <ul>
          <li>
            <Link to="cast" movie={movie}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" movie={movie}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MoviesDetailsPage;

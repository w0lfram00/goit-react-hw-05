import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api";
import MovieLink from "../../components/MovieLink/MovieLink";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetchTrendingMovies();
      setMovies(response.results);
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieLink movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

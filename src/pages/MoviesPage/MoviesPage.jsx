import React, { useEffect, useState } from "react";
import { fetchMovieSearch } from "../../api";
import MovieLink from "../../components/MovieLink/MovieLink";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchMovieSearch(query);
      setMovies(response.results);
    };
    if (query) getData();
  }, [query]);

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.search.value.toLowerCase());
    updateSearchParams("query", e.target.elements.search.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          defaultValue={searchParams.get("query")}
        />
        <button>Search</button>
      </form>

      {movies ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieLink movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        "Start searching for your favorit movie!"
      )}
    </div>
  );
};

export default MoviesPage;

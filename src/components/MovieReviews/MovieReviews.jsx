import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewsById } from "../../api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchMovieReviewsById(movieId);
      setReviews(response.results);
    };
    getData();
  }, [movieId]);
  if (!reviews) return;
  return reviews.length != 0 ? (
    <ul className={s.reviews}>
      {reviews.map((item) => (
        <li key={item.id}>
          <h4>{item.author_details.username}</h4>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    "No reviews yet ("
  );
};

export default MovieReviews;

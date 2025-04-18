import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastById } from "../../api";
import createImgSrc from "../../createImgSrc";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchMovieCastById(movieId);
      setCast(response.cast);
    };
    getData();
  }, []);

  if (!cast) return;
  return (
    <ul className={s.cast}>
      {cast.map((item) => (
        <li key={item.id}>
          <img
            src={
              item.profile_path
                ? createImgSrc(item.profile_path)
                : "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
            }
            alt="item.name"
          />
          <p>
            {item.name} as {item.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;

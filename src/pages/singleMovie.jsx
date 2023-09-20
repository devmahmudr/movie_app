import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../coomponents/maincard/moviecard";
import "./singleMovie.scss";

const SingleMovie = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({
    isFatched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "932f84b33b3cebc5e96f7f570a44337f",
        },
      })
      .then((res) => {
        setInfo({
          isFatched: true,
          data: res,
          err: false,
        });
      })
      .catch((err) => {
        setInfo({
          isFatched: true,
          data: false,
          err: err,
        });
      });
  }, [id]);
  console.log(info);
  return (
    <div>
      {info.isFatched && info.data ? (
        <div className="single-card">
          <MovieCard
            title={info.data.data.title}
            imgLink={`https://image.tmdb.org/t/p/w500/${info.data.data.poster_path}`}
          />
          ;
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Page not found</h1>
      )}
    </div>
  );
};

export default SingleMovie;

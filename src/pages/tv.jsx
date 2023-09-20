import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../coomponents/maincard/moviecard";
import './movie.scss'
import TvCard from "../coomponents/tvcard/tvcard"
const Tv = () => {
  const [data, setData] = useState({
    isFatched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
          api_key: "932f84b33b3cebc5e96f7f570a44337f",
        },
      })
      .then((res) => {
        setData({
          isFatched: true,
          data: res.data,
          err: false,
        });
      })
      .catch((err) => {
        setData({
          isFatched: true,
          data: null,
          err: err.message,
        });
      });
  }, []);
  
  return (
    <div className="main-div">
      {data.isFatched && data.data ? (
        <div className="card-wrapper">
          {data.data.results.map((movie, index) => [
            <TvCard
              key={index}
              id={movie.id}
              title={movie.name}
              rating={movie.vote_average}
              relaseDate={movie.first_air_date}
              imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ])}
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Tv;

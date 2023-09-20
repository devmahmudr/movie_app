import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import './movie.scss'
import MovieCard from "../coomponents/maincard/moviecard";

const Search = () => {
  const { searchQuary } = useParams();
  const [ searchInfo, setSearchInfo ] = useState({
    isFatched: false,
    data: [],
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchQuary}`, {
        params: {
          api_key: "932f84b33b3cebc5e96f7f570a44337f",
        },
      })
      .then((res) => {
        setSearchInfo({
          isFatched: true,
          data: res.data,
          err: false,
        });
      })
      .catch((error) => {
        setSearchInfo({
          isFatched: true,
          data: [],
          err: error,
        });
      });
  }, [searchQuary]);
  console.log();
  return (
    <div className="main-div">
      {searchInfo.isFatched  ? (
        <div className="card-wrapper">
          {searchInfo.data.results.map((movie, index) => [
            <MovieCard
              key={index}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              relaseDate={movie.release_date}
              imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />,
          ])}
        </div>
      ) : (
        <h1 class="not-found">Film is not found</h1>
      )}
    </div>
  );
};
export default Search;

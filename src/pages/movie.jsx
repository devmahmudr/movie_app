import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../coomponents/maincard/moviecard";
import PaginationComp from "../coomponents/paginationComp/paginationComp";
import "./movie.scss";
const Movie = () => {
  const nav = useNavigate();
  const [changePage, setChangePage] = useState(1);
  const [dt, setDt] = useState({
    isFatched: false,
    data: {},
    totalPage: 1,
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "932f84b33b3cebc5e96f7f570a44337f",
          page: changePage,
        },
      })
      .then((res) => {
        setDt({
          isFatched: true,
          data: res.data,
          totalPage: res.data.total_pages,
          err: false,
        });
      })
      .catch((err) => {
        setDt({
          isFatched: true,
          data: {},
          totalPage: [],
          err: err,
        });
      });
  }, [changePage]);
  const handleChange = (page) => {
    // if (page >= 1) {
    setChangePage(page);
    // nav(`${page}`);
    // } else nav(`/`);
    // console.log(page);
  };
  return (
    <>
      <div className="main-div">
        {dt.isFatched && dt.data ? (
          <div className="card-wrapper">
            {dt.data.results.map((movie, index) => [
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
          <div id="page">
            <div id="container">
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="h3">loading</div>
            </div>
          </div>
        )}
        <PaginationComp
          page={changePage}
          setPage={handleChange}
          totalPage={dt.totalPage}
        />
        <footer>
          <p className="footer-title">
            Filmagnet is an online movie streaming platform that offers pirated
            content that is not released. It has a huge collection of latest
            movies and films that still not available on the market and YouTube.
            You can watch and download all contents free of costs, but they are
            illegal, so you have to take some precautions. It is not available
            in all countries so you can use VPN and choose a location with
            access to Filmagnet. Here, we will discuss the Filmagnet.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Movie;

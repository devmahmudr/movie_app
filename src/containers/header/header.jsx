import "./header.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import logo from '../../assets/images/icons/logo.svg'
const Header = () => {
  const nav = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.length > 0) {
      nav(`/search/${searchValue}`);
    } else {
      nav(`/`);
    }
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/search/${searchValue}`);
  };
  return (
    <header>
      <div className="container">
        <div className="header__block">
          <div className="header__left">
            <Link to="/"className="site_logo"><img src={logo} alt="" />Movie</Link>
          </div>
          <div className="header__center">
            <nav>
              <ul className="header__title">
                <li>
                  <Link to="/" className="header__link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/tv" className="header__link">
                    Tv
                  </Link>
                </li>
                <li>
                  <Link to="/movie" className="header__link">
                    Movie
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Input Here"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
              <Link to='/signin'>
                <button className="signin_btn">Signin</button>
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

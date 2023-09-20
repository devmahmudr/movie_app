import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/header/header";
import { Home, Tv, SingleMovie, SingleTv, Movie, Search } from "./pages/index";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          {/* <Route path="/movie/:pagination" element={<Movie />} /> */}
          <Route path="/tv" element={<Tv />} />
          <Route path="/single-movie/:id" element={<SingleMovie />} />
          <Route path="/tv/:id" element={<SingleTv />} />
          <Route path="/search/:searchQuary" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

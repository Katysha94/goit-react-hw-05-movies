import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies"
import { NavLink, Route, Routes } from "react-router-dom";
import { MovieDetails } from "pages/MovieDetails/MovieDetails"

export const App = () => {
  return (
    <div>
        <header className="header">
            <NavLink className="header-link" to="/">Home</NavLink>
            <NavLink className="header-link" to="/movies">Movies</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};

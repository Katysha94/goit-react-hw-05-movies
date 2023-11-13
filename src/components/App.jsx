import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies"
import { Navigate, Route, Routes } from "react-router-dom";
import { MovieDetails } from "pages/MovieDetails/MovieDetails"
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
     </Layout>
  );
};

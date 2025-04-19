import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";

// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MoviesDetailsPage from "./pages/MoviesDetailsPage/MoviesDetailsPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesDetailsPage = lazy(() =>
  import("./pages/MoviesDetailsPage/MoviesDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home-page";
import "swiper/scss";
import "swiper/scss/autoplay";
import Movies from "./components/movies";
import MovieDetail from "./pages/movie-details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/movies/:movieId",
          element: <MovieDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

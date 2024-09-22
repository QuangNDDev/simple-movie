import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import "swiper/scss";
import "swiper/scss/autoplay";
import { lazy, Suspense } from "react";

function App() {
  const HomePage = lazy(() => import("./pages/home-page"));
  const Movies = lazy(() => import("./components/movies"));
  const MovieDetail = lazy(() => import("./pages/movie-details"));
  // Dung de splitting Routes khi vao trong trang nao thi no chi load trang do thoi no khong load tat ca
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
      {/* Khi su dung splitting Routes thi phai co suppend bao cai routerProvider lai  */}
      {/* fallback trong Suspense giong nhu loading, khi mang yeu hay no chua load data liep thi no se hien lai fallback ra */}
      <Suspense fallback={<p></p>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;

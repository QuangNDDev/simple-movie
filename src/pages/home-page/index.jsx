import Banner from "../../components/banner";
import MoviesList from "../../components/movie-list";

function HomePage() {
  return (
    <>
      <Banner />
      <MoviesList />
      <MoviesList type="top_rated" text="top rated" />
      <MoviesList type="popular" text="popular" />
    </>
  );
}

export default HomePage;

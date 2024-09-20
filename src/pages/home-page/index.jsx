import BannerList from "../../components/banner-list";
import MoviesList from "../../components/movie-list";

function HomePage() {
  return (
    <>
      <BannerList />
      <MoviesList />
      <MoviesList type="top_rated" text="top rated" />
      <MoviesList type="popular" text="popular" />
    </>
  );
}

export default HomePage;

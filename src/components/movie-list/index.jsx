import MovieCard from "../movie-card";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss"; // Import CSS mặc định của Swiper
import "swiper/scss/autoplay"; // CSS cho autoplay, nếu cần
import useSWR from "swr";
import { fetcher } from "../../config/config";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

function MoviesList({ type = "now_playing", text = "now playing" }) {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=e050194db86d849bf31a7f92702a922e`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]); // Khi API phản hồi và data được cập nhật từ undefined sang dữ liệu thật, useEffect sẽ được kích hoạt lại.

  return (
    <section className="page-container pb-20">
      <h2 className="capitalize text-white font-bold text-3xl mb-10">{text}</h2>
      <div className="movie-list">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={40}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MoviesList;

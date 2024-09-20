import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import MovieCard from "../movie-card";
import { Swiper, SwiperSlide } from "swiper/react"; // Import đúng từ 'swiper/react'
import { Autoplay } from "swiper/modules"; // Import module Autoplay
import "swiper/scss"; // Đảm bảo rằng bạn đã import CSS của Swiper

function SimilarMovie() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=e050194db86d849bf31a7f92702a922e`,
    fetcher
  );

  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="movie-list">
      <Swiper
        modules={[Autoplay]} // Sử dụng module Autoplay
        grabCursor={true}
        spaceBetween={40}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {results.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SimilarMovie;

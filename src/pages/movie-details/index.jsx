import { useParams } from "react-router-dom";
import useSWR from "swr";
import MovieCredit from "../../components/movie-credit";
import { fetcher, tmdbAPI, tmdbImage } from "../../config/config";
import MovieVideo from "./../../components/movie-video/index";
import SimilarMovie from "./../../components/semilar-movie/index";

function MovieDetail() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  const backgroundImg = `url(${tmdbImage.imageMeta(
    "original",
    backdrop_path
  )})`;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: backgroundImg,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={tmdbImage.imageMeta("w500", poster_path)}
          className="object-cover w-full h-full rounded-xl"
          alt=""
        />
      </div>
      <h1 className="mb-10 text-4xl font-bold text-center text-white">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span
              className="px-4 py-2 border rounded border-primary text-primary"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed mx-auto max-w-[600px] mb-10">
        {overview}
      </p>
      <MovieCredit />
      <h2 className="mb-10 text-4xl font-bold text-center">Trailler</h2>
      <MovieVideo />
      <h2 className="mb-10 text-4xl font-bold text-center">Similar Movie</h2>
      <SimilarMovie />
    </div>
  );
}

export default MovieDetail;

import { useParams } from "react-router-dom";
import { fetcher } from "../../config/config";
import useSWR from "swr";
import MovieCastitem from "../movie-cast-item";

function MovieCredit() {
  //https://api.themoviedb.org/3/movie/movie_id/credits?api_key=e050194db86d849bf31a7f92702a922e
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e050194db86d849bf31a7f92702a922e`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  console.log(data);
  if (!cast && cast.length <= 0) return null;
  return (
    <>
      <h2 className="mb-10 text-3xl text-center">Cast</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <MovieCastitem key={item.id} castItem={item} />
        ))}
      </div>
    </>
  );
}

export default MovieCredit;

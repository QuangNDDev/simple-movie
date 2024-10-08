import { useNavigate } from "react-router-dom";
import Button from "../button";
import { tmdbImage } from "../../config/config";

function MovieCard({ movie }) {
  const { title, release_date, poster_path, vote_average, id } = movie;
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
        <img
          src={tmdbImage.imageMeta("w500", poster_path)}
          alt=""
          className="w-full h-[250px] object-cover rounded-lg mb-5"
        />
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-xl font-bold">{title}</h3>
          <div className="flex items-center justify-between mb-10 text-sm opacity-50">
            <span>{new Date(release_date).getFullYear()}</span>
            <span>{vote_average}</span>
          </div>
          <Button onClick={() => navigate(`/movies/${id}`)}>Watch now</Button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;

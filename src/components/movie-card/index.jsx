function MovieCard({ movie }) {
  const { title, release_date, poster_path, vote_average } = movie;
  return (
    <>
      <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-[250px] object-cover rounded-lg mb-5"
        />
        <div className="flex flex-col flex-1">
          <h3 className="text-xl mb-3 font-bold">{title}</h3>
          <div className="flex items-center justify-between text-sm opacity-50 mb-10">
            <span>{new Date(release_date).getFullYear()}</span>
            <span>{vote_average}</span>
          </div>
          <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto">
            watch now
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;

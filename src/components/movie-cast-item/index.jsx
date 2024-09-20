function MovieCastitem({ castItem }) {
  const { profile_path, name } = castItem;
  return (
    <div className="pb-10 cast-item">
      <img
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        alt=""
        className="w-full  h-[350px] object-cover rounded-lg"
      />
      <h3 className="text-xl text-center">{name}</h3>
    </div>
  );
}

export default MovieCastitem;

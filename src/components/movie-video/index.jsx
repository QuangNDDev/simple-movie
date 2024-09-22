import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config/config";
function MovieVideo() {
  // https://api.themoviedb.org/3/movie/movie_id/videos?api_key=e050194db86d849bf31a7f92702a922e
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieMeta(movieId, "videos"),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <div className="flex flex-col gap-5">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="inline-block p-3 mb-5 text-xl font-medium bg-secondary">
              {item.name}
            </h3>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                width="1296"
                height="729"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.title} // JSX không cần dấu ngoặc kép cho giá trị biến
                frameBorder="0" // frameBorder cần được viết dưới dạng camelCase
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" // referrerpolicy cần được viết thành referrerPolicy (camelCase)
                allowFullScreen={true} // allowFullscreen phải là một boolean, không phải chuỗi
                className="object-fill w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieVideo;

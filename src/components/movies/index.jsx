import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import MovieCard from "../movie-card";
//  'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=e050194db86d849bf31a7f92702a922e'

function Movies() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=e050194db86d849bf31a7f92702a922e`,
    fetcher
  );
  const { data: dataSearch } = useSWR(
    query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=e050194db86d849bf31a7f92702a922e`
      : null,
    fetcher
  );
  console.log(query);
  useEffect(() => {
    if (dataSearch && dataSearch.results) {
      setMovies(dataSearch.results);
    } else if (data && data.results) {
      setMovies(data.results);
    }
  }, [data, dataSearch]);
  return (
    <div className="py-10 text-white page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 border-gray-300 outline-none bg-slate-800"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <button
          className="p-4 font-semibold text-white bg-primary"
          onClick={() => setQuery(inputValue)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Movies;

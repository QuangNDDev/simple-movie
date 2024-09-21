import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import MovieCard from "../movie-card";
import ReactPaginate from "react-paginate";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=e050194db86d849bf31a7f92702a922e&page=${page}`,
    fetcher
  );

  const { isLoading, data: dataSearch } = useSWR(
    query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=e050194db86d849bf31a7f92702a922e&page=${page}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (dataSearch && dataSearch.results) {
      setMovies(dataSearch.results);
    } else if (data && data.results) {
      setMovies(data.results);
    }
  }, [data, dataSearch, page]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1); // ReactPaginate gives zero-based index, so add 1
  };

  if (!data) return null;
  const { total_pages } = data;

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

      {isLoading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}

      <div className="grid grid-cols-4 gap-10">
        {!isLoading &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      <div className="flex items-center justify-center mt-10 gap-x-5">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={total_pages} // Total number of pages
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick} // Handle page change
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Movies;

import React from "react";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { tmdbImage } from "../../config/config";

function BannerItem({ bannerItem }) {
  const { title, poster_path, id } = bannerItem;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
      <img
        src={tmdbImage.imageMeta("w500", poster_path)}
        alt=""
        className="object-cover object-top w-full h-full rounded-lg"
      />
      <div className="absolute w-full mb-5 text-white left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>

        <div className="flex items-center mb-5 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md">
            Comedy
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Anime
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <Button
          className="bg-primary"
          onClick={() => navigate(`/movies/${id}`)}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
}

export default BannerItem;

import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {
const trailorVideo=useSelector(store=>store.movies.trailorVideo)

  //fetch trailer video
  useMovieTrailor(movieId);
  return (
    <div>
      <iframe className="w-screen aspect-video"
       
        src={"https://www.youtube.com/embed/"+trailorVideo?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

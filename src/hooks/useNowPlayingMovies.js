import React from 'react';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
const useNowPlayingMovies = () => {
    const dispatch=useDispatch();
  const getNowPlayngMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
const json=await data.json();
console.log(json.results);
dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(()=>{
getNowPlayngMovies();
  },[])
  return (
    <div>useNowPlayingMovies</div>
  )
}

export default useNowPlayingMovies
import React, { useEffect, useState } from 'react'
import './Banner.css';
import tmdbAxiosInstance from '../instance';

function Banner({fetchUrl}) {
  const base_url = "https://image.tmdb.org/t/p/original/";

    const [movie,setMovies]=useState([])

    const fetchData=async()=>{
        const {data}= await tmdbAxiosInstance.get(fetchUrl)
      
        // console.log(data.results);
        setMovies(data.results[Math.floor(Math.random()*data.results.length)])
        
    }
    // console.log(movie);
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div style={{height:'600px', width:'100%',backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
    backgroundSize:'cover',backgroundAttachment:'fixed'}}>
          <div className='banner-content'>
               <h2>{movie?.name}</h2>
               <h4>{movie?.overview?.slice(0,250)}...</h4>
          </div>
    </div>
  )
}

export default Banner
import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../instance';
import './Row.css';

function Row({title,fetchUrl,isPoster}) { 
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies,setMovies]= useState([])
    // console.log(fetchUrl);
    const fetchData=async()=>{
        const {data}= await tmdbAxiosInstance.get(fetchUrl)
      
        // console.log(data.results);
        setMovies(data.results)
        
    }
    // console.log(movies);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='row'>
        <h3>{title}</h3>
        <div className="movie-row">
          {
            movies.map(item=>(
              <img className={`${isPoster && 'movie_Large'} movie`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
            ))
          }

        </div>
        </div>
  )
}

export default Row
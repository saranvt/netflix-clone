import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from "./requests";
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      }
      fetchData();
    }, []);console.log(movie);
    function truncate(str,n){
        return str && str.length>n ? str && str.substr(0,n-1)+"...":str;
    }
   
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}")`,
                backgrounPosition: "center center",
        }}
        >
            <div className="banner__contents">
                <h1 className="banner_title">{movie && movie.title || movie && movie.name || movie && movie.name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                    <h1 className="banner_discription">
                        {movie && movie.overview}
                        {
                            truncate(movie && movie.overview, 150)
                        }

                    </h1>

                
                </div>
            </div>
            <div className="banner__bottom"></div>
            
        </header>
    )
}

export default Banner;

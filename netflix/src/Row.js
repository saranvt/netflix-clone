import React, {useState,useEffect,} from 'react';
import axios from './axios';
import "./Row.css";
import movieTrailer from 'movie-trailer';
import YouTube from "react-youtube";



const baseurl="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLargeRow}) {
    const [ movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect (() => { 
        
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;

        }
        fetchData();
    },[fetchUrl]);
    console.table(movies);
    const opts= {
        height:"390",
        width:"100%",
        playerVars: {
            atoplay: 1,
        }
        
    };
    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl('');
        
        } else{
          movieTrailer( movie.name || "")
          .then(url => {
            const urlParams = new  URLSearchParams (new URL(url).search);
            setTrailerUrl(urlParams.get("v"));

          }).catch(error => console.log(error));
        }

        
            
        

        };
        
    return(
        
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {}
                {movies && movies.map(

                    (movie) => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow &&"row__posterLarge"}`}
                    src={`${baseurl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`
                } alt={movie.name}
               
                ></img>
                
                
            
            )
        )}
               
    
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}


        </div>

    )
}
export default Row
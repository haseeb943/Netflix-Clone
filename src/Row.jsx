import React, { useState, useEffect } from 'react';
import axios from './axios'; //default hai to koi bhin askta
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const image_Url = "https://image.tmdb.org/t/p/original/";
const Row = ({title, fetchUrl , isLargeRow})=>{
    const [movie,setMovie]=useState([]); //empty movie array
  //  console.log(movie);
    //jab to yay row load ho reauest ay every load
    const [trailerUrl, setTrailerUrl]=useState("");
   
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get(fetchUrl);
           // console.log(req);
            setMovie(req.data.results);
            return req;
        }
        fetchData();

    },[fetchUrl]);//jb bhi fetch change hpga update hota rahay ga

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick = (movies)=>{
          if(trailerUrl){
              setTrailerUrl("");
          }else{
              movieTrailer(movies?.name || "")
              .then((url)=>{
               // https://www.youtube.com/watch?v=XtMThy8QKqU&t=9742s
               const urlParams = new URLSearchParams(new URL(url).search); //iss sy yay ay ga XtMThy8QKqU&t phr urlsearch params me wrap kr gy
               setTrailerUrl(urlParams.get('v'));  //v=XtMThy8QKqU  v ki value ay gi
            }).catch((error)=>console.log(error));
          }

      };

    return(
        <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
            {
                movie.map(movies=>(
                    <img key={movies.id} 
                    onClick={()=>handleClick(movies)}
                    className={`row_image ${isLargeRow?"row_large":null}`} 
                    src={`${image_Url}${isLargeRow? movies.poster_path:movies.backdrop_path}`} 
                    alt={movie.name}/>
                ))
            }
        </div>
        {/* XtMThy8QKqU */}
        {trailerUrl?<YouTube videoId={trailerUrl} opts={opts}/>:null}
        </div>
    );
};
export default Row;
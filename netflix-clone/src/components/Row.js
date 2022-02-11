import React, { useState,useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube  from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}){
	const [movies,setMovies]=useState([]);
	const [trailerUrl, setTrailerUrl]=useState("");
	// when you use anything inside of useEffect 
	useEffect(() => {
		async function fetchData(){
			const request=await axios.get(fetchUrl);
			// console.log(request.data.results);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl])
	// console.table(movies);
	const opts = {
        height: "390",
        width: "100%",
        playvars: {
            autoplay: 1,
        },
    }
	const handleClick=(movie)=>{
		if(trailerUrl){
			setTrailerUrl("");
		}else{
			/*npm module*/
			movieTrailer(movie?.name||"")
				.then(url=>{
					const urlParams=new URLSearchParams(new URL(url).search); /*new URL(url).search:basically this will give us everything after ? int the url*/
					/**urlParams.get('v'):Returns the first value associated with the given search parameter.*/
					setTrailerUrl(urlParams.get('v'));
				}).catch((error)=> console.log(error));
		}
	};
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row_posters">
				{movies.map(movie=>(
					<img 
					 key={movie.id}
					 onClick={()=>handleClick(movie)}
					 className={`row_poster ${isLargeRow&& "row_posterLarge"}`}
					 src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}` }
					 alt={movie.name}

					 />
				))}
			</div>

			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

		</div>
	)
}
export default Row;
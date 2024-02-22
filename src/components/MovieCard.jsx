import React, { useEffect, useState } from "react";
import { getMovies } from "../api/Api";

const MovieCard = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getMovies().then((result)=>{setMovies(result)})
    },[])

    const MoviesCardList = () => {
        return movies.map((movie)=>{
            return(
                <div className="flex">
                    <article className="w-36 p-2 bg-white rounded-xl transform transition-all hover:-translate-y=2 duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                        <img src={movie.image_url} className="w- object-cover rounded-xl"/>
                        <div className="p-1">
                            <h3 className="font-bold text-sm truncate">{movie.title}</h3>
                            <p className="text-xs">{movie.year}</p>
                        </div>
                    </article>  
                </div>
            );
        })
        
    }

    return(
        <div className="flex flex-wrap mx-20 gap-x-3 gap-y-5">
            <MoviesCardList/>
        </div>
    );
}

export default MovieCard;
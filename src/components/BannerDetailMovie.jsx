import React, { useState, useEffect } from "react";
import { getMovieById } from "../api/Api";

const BannerDetailMovie = ({ id }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieById(id)
            .then(result => {
                setMovie(result);
            })
            .catch(error => {
                console.error("Error fetching movie:", error);
            });
    }, [id]);

    return (
        <div>
            <h1>BannerDetailMovie</h1>
            {movie && (
                <div>
                    <img src={movie.image_url} alt={movie.title} className="w-40"/>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <p>Genre: {movie.genre}</p>
                    <p>Duration: {movie.duration} minutes</p>
                    <p>Year: {movie.year}</p>
                    <p>Rating: {movie.rating}</p>
                </div>
            )}
        </div>
    );
};

export default BannerDetailMovie;

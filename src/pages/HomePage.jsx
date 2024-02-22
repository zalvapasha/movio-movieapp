import React from "react";
import MovieCard from "../components/MovieCard";
import GameCard from "../components/GameCard"

const HomePage = () => {
    return(
        <div className="bg-gray-200 w-full min-h-screen z-30">
            <h1>Movie</h1>
            <div className="mt-5"><MovieCard/></div>
            <h1>Game</h1>
            <div className="mt-5"><GameCard/></div>
            
        </div>
    );
}

export default HomePage;
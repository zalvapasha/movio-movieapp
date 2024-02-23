import React, {useState, useEffect } from "react";
import { getGameById } from "../api/Api";


const BannerGameDetail = ({id}) => {
    const [game, setGame] = useState(null);

    useEffect(() => {
        getGameById(id)
            .then(result => {
                setGame(result);
        })
        .catch(error => {
            console.error("Error fetching game:", error);
        })
    })

    return (
        <div>
            <h1>BannerDetailMovie</h1>
            {game && (
                <div>
                    <img src={game.image_url} alt={game.name} className="w-40"/>
                    <h2>{game.name}</h2>
                    <p>Genre: {game.genre}</p>
                    <p>Platform: {game.platform}</p>
                    <p>Release: {game.release} minutes</p>
                    <p>{game.singlePlayer}</p>
                    <p>{game.multiplayer}</p>
                </div>
            )}
        </div>
    );
}

export default BannerGameDetail
import React from "react";
import GameForm from "../components/GameForm";
import { useParams } from "react-router-dom";

const GameFormPage = () => {
    const { id } = useParams();

    return(
        <div>
            <GameForm id={id} />
        </div>
    )
}

export default GameFormPage
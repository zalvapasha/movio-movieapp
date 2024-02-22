import React from "react";
import MovieForm from "../components/MovieForm";
import { useParams } from "react-router-dom";

const MovieFormPage = () => {
    const { id } = useParams();

    return(
        <div>
            <MovieForm id={id} />
        </div>
    )
}

export default MovieFormPage
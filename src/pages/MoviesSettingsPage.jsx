import React from "react";
import TableMovies from "../components/TableMovies";
import { useNavigate } from "react-router-dom";

const MoviesSettingsPage = () => {
    const navigate = useNavigate();

    const handleAddMovieClick = () => {
        navigate('/mastermovies/add');
    }

    return(
    <div>
        <button 
            className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            onClick={handleAddMovieClick}
        >Add</button>
        <TableMovies/>
    </div>
    )
}

export default MoviesSettingsPage
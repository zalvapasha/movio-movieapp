import React from "react";
import TableGames from "../components/TableGames";
import { useNavigate } from "react-router-dom";

const GamesSettingsPage = () => {
    const navigate = useNavigate();

    const handleAddGameClick = () => {
        navigate('/mastergames/add');
    }

    return(
        <div>
            <button 
            className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            onClick={handleAddGameClick}
            >Add</button>
            <TableGames/>
        </div>
    )
}

export default GamesSettingsPage
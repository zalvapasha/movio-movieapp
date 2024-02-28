import React, { useContext, useEffect, useState } from "react";
import { deleteGame, getGames } from "../api/Api";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const TableGames = () => {
    const {user} = useContext(UserContext)
    const [games, setGames] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        getGames().then((result)=>{setGames(result)})
    },[])

    const renderCheckmark = (value) => {
        return value ? "✓" : "❌";
    };

    const handleDelete = (id) => {
        deleteGame(id, user.token)
        // .then((result)=>{
            
        // }).catch((error)=>{
        //     console.log(error)
        // })
    }

    const handleDetail = (id) => {
        navigate(`/gamedetail/${id}`)
    }

    const handleEdit = (id) => {
        navigate(`/mastergames/edit/${id}`)
    }

    const TableBody = () => {
        return games.map((game)=>{
            return(
            <tbody key={game.id} className="divide-y divide-gray-200">
                <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <img className="w-20 rounded-md" src={game.image_url}/>
                    </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><p className="w-32 text-wrap">{game.name}</p></td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><p className="w-32 truncate">{game.genre}</p></td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><p className="w-32 text-wrap">{game.platform}</p></td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{game.release}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{renderCheckmark(game.singlePlayer)}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{renderCheckmark(game.multiplayer)}</td>
                <td className="whitespace-nowrap px-4 py-2">
                    <button
                    className="inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    onClick={()=>handleDetail(game.id)}
                    >
                    Detail
                    </button>
                    <button
                    className="inline-block rounded bg-yellow-400 px-4 py-2 text-xs font-medium text-black hover:bg-indigo-700"
                    onClick={()=>handleEdit(game.id)}
                    >
                    Edit
                    </button>
                    <button
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    onClick={()=>handleDelete(game.id)}
                    >
                    Delete
                    </button>
                </td>
                </tr>
            </tbody>
            )
        })
    }

    return(
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
                <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Genre</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Platform</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Release</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Singleplayer</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Multiplayer</th>
                <th className="px-4 py-2"></th>
                </tr>
            </thead>
        
            <TableBody/>
            </table>
        </div>
    )
}

export default TableGames
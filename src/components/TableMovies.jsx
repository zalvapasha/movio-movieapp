import React, { useContext, useEffect, useState } from "react";
import { getMovies } from "../api/Api";
import { deleteMovie } from "../api/Api";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const TableMovies = () => {
    const [movies, setMovies] = useState([])
    const { user } = useContext(UserContext)
    const [isUpToDate, setIsUpToDate] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        if(isUpToDate===false){
            getMovies().then((result)=>{setMovies(result)})
            setIsUpToDate(true)
        }
    },[isUpToDate])

    const handleDelete = (id) => {
        deleteMovie(id, user.token).then((result)=>{
            setIsUpToDate(false)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleEdit = (id) => {
        navigate(`/mastermovies/edit/${id}`)
    }

    const TableBody = () => {
        return movies.map((movie)=>{
            return(
            <tbody key={movie.id} className="divide-y divide-gray-200">
                <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <img className="w-20 rounded-md" src={movie.image_url}/>
                    </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><p className="w-32 text-wrap">{movie.title}</p></td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><p className="w-32 truncate">{movie.description}</p></td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><p className="w-32 text-wrap">{movie.genre}</p></td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{movie.year}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{movie.duration}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{movie.rating}</td>
                <td className="whitespace-nowrap px-4 py-2">
                    <button
                    className="inline-block rounded bg-yellow-400 px-4 py-2 text-xs font-medium text-black hover:bg-indigo-700"
                    onClick={()=>handleEdit(movie.id)}
                    >
                    Edit
                    </button>
                    <button
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    onClick={()=>handleDelete(movie.id)}
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
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Genre</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Year</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Duration</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rating</th>
                <th className="px-4 py-2"></th>
                </tr>
            </thead>
        
            <TableBody/>
            </table>
        </div>
    )
        
}

export default TableMovies;
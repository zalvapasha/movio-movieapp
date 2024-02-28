import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { addGame, getGameById, editGame } from "../api/Api";

const GameForm = ({id}) => {
    const {user} = useContext(UserContext)

    const [input, setInput] = useState({
        name : "",
        genre : "",
        platform : "",
        release : "",
        singlePlayer : false,
        multiplayer : false,
        image_url : ""
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        let inputValue = type === 'checkbox' ? (checked ? true : false) : value;
    
        setInput(input => ({
            ...input,
            [name]: inputValue
        }));
    }
    
    
    useEffect(()=>{
        if (id) {
            // Get movie by id
            getGameById(id)
                .then(result => {
                    setInput(result)
                }).catch(error => {
                    console.log(error)
                })
        }
    },[id])
    const handleSubmit = (event) => {
        event.preventDefault();

        const gameData = { ...input };

        if (id) {
            // Editing mode
            editGame(id, gameData, user.token)
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.error("Error editing game:", error);
                });
        } else {
            // Adding mode
            addGame(gameData, user.token)
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.error("Error adding movie:", error);
                })
        }
    }


    return(
        <form onSubmit={handleSubmit} className="w-1/4 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Game Form</p>

            <div>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm"
                        placeholder="Enter Name"
                        name="name"
                        value={input.name || ''}
                        onChange={handleChange}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    </span>
                </div>
            </div>

            <div>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm"
                        placeholder="Enter Genre"
                        name="genre"
                        value={input.genre}
                        onChange={handleChange}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    </span>
                </div>
            </div>

            <div>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm"
                        placeholder="Enter Platform"
                        name="platform"
                        value={input.platform}
                        onChange={handleChange}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    </span>
                </div>
            </div>

            <div>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm"
                        placeholder="Enter Release Date"
                        name="release"
                        value={input.release}
                        onChange={handleChange}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    </span>
                </div>
            </div>

            <div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className="rounded border-gray-200 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="singlePlayer"
                        checked={input.singlePlayer}
                        onChange={handleChange}
                    />
                    <label className="ml-2">Singleplayer</label>
                </div>
            </div>

            <div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className="rounded border-gray-200 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="multiplayer"
                        checked={input.multiplayer}
                        onChange={handleChange}
                    />
                    <label className="ml-2">Multiplayer</label>
                </div>
            </div>

            <div>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm"
                        placeholder="Enter Image URL"
                        name="image_url"
                        value={input.image_url}
                        onChange={handleChange}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-end gap-2 py-3">
                <button
                    type="button"
                    className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                >
                    Clear
                </button>

                <button
                    type="submit"
                    className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                    {id ? "Save Changes" : "Add Game"}
                </button>
            </div>
        </form>

    )
}

export default GameForm
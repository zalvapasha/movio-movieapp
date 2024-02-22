import React, { useContext, useEffect, useState } from "react";
import { addMovie, getMovieById } from "../api/Api";
import { UserContext } from "../context/UserContext";
import { editMovie } from "../api/Api";
import { useNavigate } from "react-router-dom";

const AddMovieForm = ({id}) => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate();

    const [input, setInput] = useState({
        title : "",
        genre : "",
        rating : "",
        duration : "",
        year : "",
        description : "",
        image_url : ""
    })

    const handleInput = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput((input) => ({ ...input, [name]: value }));
      };

    useEffect(() => {
        if (id) {
            getMovieById(id)
                .then(result => {
                    setInput(result)
                }).catch(error => {
                    console.log(error)
                })
        }
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const movieData = { ...input };

        if (id) {
            // Editing mode
            editMovie(id, movieData, user.token)
                .then(result => {
                    navigate('/mastermovies');
                    console.log(result);

                })
                .catch(error => {
                    console.error("Error editing movie:", error);
                });
        } else {
            // Adding mode
            addMovie(movieData, user.token)
                .then(result => {
                    console.log(result);
                    // Handle success
                })
                .catch(error => {
                    console.error("Error adding movie:", error);
                    // Handle error
                });
        }
    };

    return(
        <form onSubmit={handleSubmit} className="w-1/4 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">

            <p className="text-center text-lg font-medium">Movie Form</p>
            
            <div>
                <div className="relative">
                <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm"
                    placeholder="Enter Title"
                    name="title"
                    value={input.title || ''}
                    onChange={handleInput}
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
                    onChange={handleInput}
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
                    placeholder="Enter Rating"
                    name="rating"
                    value={input.rating}
                    onChange={handleInput}
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
                    placeholder="Enter Duration"
                    name="duration"
                    value={input.duration}
                    onChange={handleInput}
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
                    placeholder="Enter Release Year"
                    name="year"
                    value={input.year}
                    onChange={handleInput}
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
                    placeholder="Enter Description"
                    name="description"
                    value={input.description}
                    onChange={handleInput}
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
                    placeholder="Enter Image URL"
                    name="image_url"
                    value={input.image_url}
                    onChange={handleInput}
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
                    {id ? "Save Changes" : "Add Movie"}
                </button>
            </div>
        </form>
    )
}

export default AddMovieForm;
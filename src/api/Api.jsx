import axios from "axios";

const baseURL = 'https://backendexample.sanbersy.com/api';

export const loginUser = async (input) => {
    try{
        const login = await axios.post(`${baseURL}/user-login`, {
            email : input.email,
            password : input.password
        })
        return login.data
    }catch(error){
        throw error
    }   
}

export const registerUser= async (input) => {
    try{
        const register = await axios.post(`${baseURL}/register`, {
            name : input.name,
            email : input.email,
            password : input.password
        })
        return register.data
    } catch(error){
        throw error
    }
} 

export const getMovies = async () => {
    const movie = await axios.get(`${baseURL}/data-movie`)
    return movie.data
}

export const getMovieById = async (id) => {
    const moviebyid = await axios.get(`${baseURL}/data-movie/${id}`)
    return moviebyid.data
}

export const addMovie = async (input, token) => {
    const movie = await axios.post(`${baseURL}/data-movie`, {
        title : input.title,
        genre : input.genre,
        rating : input.rating,
        duration : input.duration,
        year : input.year,
        description : input.description,
        image_url : input.image_url
    }, {headers: {"Authorization" : "Bearer "+ token}})
    return movie
}

export const editMovie = async (id, input, token) => {
    const movie = await axios.put(`${baseURL}/data-movie/${id}`, {
        title : input.title,
        genre : input.genre,
        rating : input.rating,
        duration : input.duration,
        year : input.year,
        description : input.description,
        image_url : input.image_url
    },{headers: {"Authorization" : "Bearer "+ token}} )
}

export const deleteMovie = async (id, token) => {
    const movie = await axios.delete(`${baseURL}/data-movie/${id}` 
    ,{headers: {"Authorization" : "Bearer "+ token}})
    return movie
}

export const getGames = async () => {
    const game = await axios.get(`${baseURL}/data-game`)
    return game.data
}


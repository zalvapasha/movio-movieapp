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

export const changePassUser = async (input, token) => {
    try{
        const changePass = await axios.post(`${baseURL}/change-password`, {
            current_password : input.current_password,
            new_password : input.new_password,
            new_confirm_password : input.new_confirm_password
        },{headers: {"Authorization" : "Bearer "+ token}})
        return changePass.data
    }catch(error){
        throw error
    }
}

// Movie
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
    return movie
}

export const deleteMovie = async (id, token) => {
    const movie = await axios.delete(`${baseURL}/data-movie/${id}` 
    ,{headers: {"Authorization" : "Bearer "+ token}})
    return movie
}

// Game
export const getGames = async () => {
    const game = await axios.get(`${baseURL}/data-game`)
    return game.data
}

export const getGameById = async (id) => {
    const gamebyid = await axios.get(`${baseURL}/data-game/${id}`)
    return gamebyid.data
}

export const addGame = async (input, token) => {
    const game = await axios.post(`${baseURL}/data-game`, {
        name : input.name,
        genre : input.genre,
        platform : input.platform,
        release : input.release,
        singlePlayer : input.singlePlayer,
        multiplayer : input.multiplayer,
        image_url : input.image_url
    }, {headers: {"Authorization" : "Bearer "+ token}})
    return game
}

export const editGame = async (id, input, token) => {
    const game = await axios.put(`${baseURL}/data-game/${id}`, {
        name : input.name,
        genre : input.genre,
        platform : input.platform,
        release : input.release,
        singlePlayer : input.singlePlayer,
        multiplayer : input.multiplayer,
        image_url : input.image_url
    },{headers: {"Authorization" : "Bearer "+ token}} )
    return game
}

export const deleteGame = async (id, token) => {
    const game = await axios.delete(`${baseURL}/data-game/${id}` 
    ,{headers: {"Authorization" : "Bearer "+ token}})
    return game
}


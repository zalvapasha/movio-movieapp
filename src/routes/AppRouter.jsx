import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../pages/HomePage';
import MoviesListPage from '../pages/MoviesListPage';
import GamesListPage from '../pages/GamesListPage';
import MoviesSettingsPage from '../pages/MoviesSettingsPage';
import MovieFormPage from '../pages/MovieFormPage'

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                    <MainLayout>
                        <HomePage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/movieslist'
                    element={
                    <MainLayout>
                        <MoviesListPage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/gameslist'
                    element={
                    <MainLayout>
                        <GamesListPage/>
                    </MainLayout>
                    }                
                />
                <Route
                    path='/mastermovies'
                    element={
                    <MainLayout>
                        <MoviesSettingsPage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/mastermovies/add'
                    element={
                    <MainLayout>
                        <MovieFormPage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/mastermovies/edit/:id'
                    element={
                    <MainLayout>
                        <MovieFormPage/>
                    </MainLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
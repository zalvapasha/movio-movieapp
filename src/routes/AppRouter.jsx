import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../pages/HomePage';
import MoviesListPage from '../pages/MoviesListPage';
import GamesListPage from '../pages/GamesListPage';
import MoviesSettingsPage from '../pages/MoviesSettingsPage';
import MovieFormPage from '../pages/MovieFormPage'
import MovieDetailPage from '../pages/MovieDetailPage'
import GamesSettingsPage from '../pages/GamesSettingsPage';
import GameFormPage from '../pages/GameFormPage';
import GameDetailPage from '../pages/GameDetailPage';

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

                {/* Movie */}
                <Route
                    path='/movieslist'
                    element={
                    <MainLayout>
                        <MoviesListPage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/moviesdetail/:id'
                    element={
                    <MainLayout>
                        <MovieDetailPage/>
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

                {/* Game */}
                <Route
                    path='/gameslist'
                    element={
                    <MainLayout>
                        <GamesListPage/>
                    </MainLayout>
                    }                
                />
                <Route
                    path='/gamedetail/:id'
                    element={
                    <MainLayout>
                        <GameDetailPage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/mastergames'
                    element={
                    <MainLayout>
                        <GamesSettingsPage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/mastergames/add'
                    element={
                    <MainLayout>
                        <GameFormPage/>
                    </MainLayout>
                    }
                />
                <Route
                    path='/mastergames/edit/:id'
                    element={
                    <MainLayout>
                        <GameFormPage/>
                    </MainLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
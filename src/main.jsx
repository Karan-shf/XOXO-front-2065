import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../components/login.jsx';
import TopScores from '../components/scores.jsx';
import Game from '../components/game.jsx';

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<MainPage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/scores" element={<TopScores/>} />
                <Route path="/play" element={<Game/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

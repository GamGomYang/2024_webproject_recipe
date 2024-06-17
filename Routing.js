import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage';
import RecipeMenubar from './RecipeMenubar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Fridge from './Fridge';
import Magazine from './MagazinePage';
import Ranking from './Ranking';
import Recipe from './Recipe';
import Recipe_Select from './Recipe_Select';

function Routing() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/home' element={<MainPage />} />
                    <Route path="/fridge" element={<Fridge/>} />
                    <Route path="/magazine" element={<Magazine/>} />
                    <Route path="/ranking" element={<Ranking/>} />
                    <Route path="/recipe" element={<Recipe/>} />
                    <Route path="/recipe_select" element={<Recipe_Select/>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
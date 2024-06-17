import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from './Routing';
import RecipeMenubar from './RecipeMenubar';
import LowBanner from './Lowbanner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeMenubar/>
    <Routing/>
    <LowBanner/>
  </React.StrictMode>


);

reportWebVitals();

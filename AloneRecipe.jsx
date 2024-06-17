import React from 'react';
import './AloneRecipe.css';
import bibimbap from './images/image/food_image/멍게비빔밥.jpeg';
import tortilla from './images/image/food_image/치킨또띠아.jpeg';
import sandwich from './images/image/food_image/샌드위치.jpeg';
import garlic from './images/image/food_image/통마늘버터구이.jpeg';
import kare from './images/image/recipe/카레주먹밥.jpeg';

const aloneRecipes = [
  {
    title: '바다 향 가득 멍게비빔밥',
    image: bibimbap
  },
  {
    title: '치킨 또띠아',
    image: tortilla
  },
  {
    title: '누구나 좋아하는 샌드위치',
    image: sandwich
  },
  {
    title: '고소한 풍미 통마늘 버터구이',
    image: garlic
  },
  {
    title: '카레주먹밥',
    image: kare
  }
];

const AloneRecipe = () => {
  return (
    <div className="alone-recipe-app">
      <h4><strong>혼먹 자취생 레시피</strong></h4>
      <h4 className="alone-recipe-subtitle">자취생이 해먹을 수 있는 새로운 추천 레시피들</h4>
      <div className="alone-recipe-grid">
        {aloneRecipes.map((recipe, index) => (
          <div key={index} className="alone-recipe-card">
            <img src={recipe.image} alt={recipe.title} className="alone-recipe-image" />
            <div className="alone-recipe-card-title">{recipe.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AloneRecipe;

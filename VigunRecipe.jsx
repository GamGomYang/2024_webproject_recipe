import React from 'react';
import './VigunRecipe.css';
import tofuInariSushi from './images/image/vigun_food/두부유부초밥.jpeg';
import abcJuice from './images/image/vigun_food/건강주스1.png'; 
import salmonOrangeSalad from './images/image/vigun_food/연어오렌지.jpg'; 

const recipes = [
  {
    title: '두부유부초밥',
    author: '관리자',
    image: tofuInariSushi,

  },
  {
    title: 'ABC 주스 건강 챙기자',
    author: '관리자',
    image: abcJuice,

  },
  {
    title: '연어오렌지샐러드',
    author: '관리자',
    image: salmonOrangeSalad,

  },
];

const VigunRecipe = () => {
  return (
    <div className="vigun-app">
      <div className="vigun-header">
        <div>
          <h2><strong>채식러들을 위한 초록레시피</strong></h2>
          <h6>건강과 환경을 생각하는 채식 레시피로 맛있는 변화를 경험하세요</h6>
        </div>
      </div>
      <div className="vigun-recipes">
        {recipes.map((recipe, index) => (
          <div key={index} className="vigun-recipe">
            <div className="vigun-recipe-image">
              <img src={recipe.image} alt="게시물 썸네일 이미지" />
            </div>
            <div className="vigun-recipe-info">
              <h2 className="vigun-recipe-title">{recipe.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VigunRecipe;

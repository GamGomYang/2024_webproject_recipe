import React, { useState } from 'react';
import './IngredientRecipe.css';
import egg from './images/category/egg.png';
import cheese from './images/category/cheese.png';
import potato from './images/category/potato.png';
import mushroom from './images/category/mushroom.png';
import onion from './images/category/onion.png';
import kimchi from './images/category/kimchi.png';
import rice from './images/category/rice.png';

const recipes = [
  {
    title: '스윗프레시 단호박 샐러드 피자',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230613153642296_%E1%84%83%E1%85%A2%E1%84%91%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg',

    ingredients: ['감자','계란'],
  },
  {
    title: '가정식 두부볶음',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230610144150486_%EA%B0%80%EC%A0%95%EC%8B%9D_%EB%91%90%EB%B6%80%EB%B3%B6%EC%9D%8C_thumb.jpg',

    ingredients: ['김치'],
  },
  {
    title: '달콤크리미한 복숭아 치즈 케이크',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230613153642296_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%A1%20%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3.jpeg',

    ingredients: ['치즈'],
  },
  {
    title: '시금치 통닭',
    author: '관리자',
    likes: 0,
    comments: 0,
    image: 'https://eliceproject.s3.amazonaws.com/20230610021336257_8c5f0778-3f18-429a-81fb-d451325f4e57.jpg',
    ingredients: ['감자','양파'],
  },
  {
    title: '양갈비 구이',
    author:'관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230615173828127_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-06-16%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.38.17.png',
    ingredients: ['버섯'],
  },
  {
    title: '호호 후후 감자 피자',
    author:'관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230609141332629_%EA%B0%90%EC%9E%90%ED%94%BC%EC%9E%90.jpg',
    ingredients: ['감자','양파'],
  }, 
  {
    title: '해장 짬뽕',
    author:'관리자',
 
    image: 'https://eliceproject.s3.amazonaws.com/20230608112250781_0.jpeg',
    ingredients: ['양파'],
  },
  {
    title: '와인과 찰떡! 브라운 양송이버섯 볶음',
    author: '관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230608185011398_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-06-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.55.48.png',
    ingredients: ['버섯'],
  },
  {
    title: '튀김덮밥(텐동)',
    author: '관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230617030526422_23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg',
    ingredients: ['밥'],
  },
  {
    title: '깊은 맛이 일품인 김치찜 만드는 방법',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230607125739511_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8E%E1%85%B5%E1%84%8D%E1%85%B5%E1%86%B71.png',
    ingredients: ['김치'],
  },
  {
    title: '치즈 돈가스 김치나베',
    author: '관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230610124113864_85a000b8-320b-4fee-acbc-a9c2ebfd4865.jpeg',
    ingredients: ['김치', '치즈'],
  },
  {
    title: '오징어가 들어간 김치전',
    author: '관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230616023709922_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-06-16%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.36.50.png',
    ingredients: ['김치'],
  },
  {
    title: '라자냐',
    author:'관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230610014500252_245a1c29-917e-4540-8846-c90bf4f60cc6.jpg',
    ingredients: ['치즈'],
  },
  {
    title: '단호박 에그 슬럿',
    author: '관리자',

    image: 'https://eliceproject.s3.amazonaws.com/20230623044842707_%E1%84%8B%E1%85%A6%E1%84%80%E1%85%B3%20%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%86%BA.jpeg',
    ingredients: ['치즈', '계란'],
  },
  {
    title: '녹차핫케이크와 딸기콩피',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230617020934639_%E1%84%83%E1%85%A2%E1%84%91%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg',

    ingredients: ['계란', '딸기'],
  },
   {
    title: '단백질 만땅! 닭가슴살 볶음밥',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230608091439015_%E1%84%83%E1%85%A2%E1%84%91%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpeg',

    ingredients: ['밥', ],
  },
  {
    title: '꼬막비빔밥',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230610013659545_40e27117-2727-4677-a7bd-1bc6abccf3bb.jpg',

    ingredients: ['밥', '버섯'],
  },
  {
    title: '두부 유부초밥',
    author: '관리자',
    image: 'https://eliceproject.s3.amazonaws.com/20230609125321359_d5d4386f-bc57-4e21-a637-8c804b73e772.jpeg',
  
    ingredients: ['두부', '밥'],
  },

];

const ingredients = [
  { id: '계란', name: '계란', image: egg },
  { id: '치즈', name: '치즈', image: cheese },
  { id: '감자', name: '감자', image: potato },
  { id: '버섯', name: '버섯', image: mushroom },
  { id: '양파', name: '양파', image: onion },
  { id: '김치', name: '김치', image: kimchi },
  { id: '밥', name: '밥', image: rice },
];

const IngredientRecipe = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  const filteredRecipes = selectedIngredient
    ? recipes.filter(recipe => recipe.ingredients.includes(selectedIngredient.name)).slice(0, 3)
    : recipes.slice(0, 3);

  return (
    <div className="app">
      <div className="header">
        <div>
          <h2><strong>당신을 위한 재료 레시피</strong></h2>
          <h5>냉장고 속 재료로 손쉽게 훌륭한 요리를 선보이세요</h5>
        </div>
      </div>
      <div className="ingredients">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient.id}
            type="button"
            onClick={() => handleIngredientClick(ingredient)}
            className="ingredient-button"
          >
            <div className="ingredient-image">
              <img src={ingredient.image} alt={ingredient.name} />
            </div>
            <p>{ingredient.name}</p>
          </button>
        ))}
      </div>
      {selectedIngredient && (
        <div className="selected-ingredient">
          <h4>선택된 재료: {selectedIngredient.name}</h4>
        </div>
      )}
      <div className="recipes">
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <div className="recipe-image">
              <img src={recipe.image} alt="게시물 썸네일 이미지" />
            </div>
            <div className="recipe-info">
              <h2 className="recipe-title">{recipe.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientRecipe;

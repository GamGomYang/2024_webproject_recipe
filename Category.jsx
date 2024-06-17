import React from 'react';
import './category.css'; 
import korean from './images/category/korean.svg';
import chinese from './images/category/chinese.svg';
import japanese from './images/category/japanese.svg';
import western from './images/category/western.svg';
import vegetarian from './images/category/vegetarian.svg';
import newest from './images/category/newest.svg';
import best from './images/category/best.svg';
import alone from './images/category/alone.svg';

const FoodCategoryModel = () => {
  const foodCategoriesData = [
    {
      category: '한식',
      imageUrl: korean,
      link: 'https://example.com/korean',
    },
    {
      category: '중식',
      imageUrl: chinese,
      link: 'https://example.com/chinese',
    },
    {
      category: '일식',
      imageUrl: japanese,
      link: 'https://example.com/japanese',
    },
    {
      category: '양식',
      imageUrl: western,
      link: 'https://example.com/western',
    },
    {
      category: '채식',
      imageUrl: vegetarian,
      link: 'https://example.com/vegetarian',
    },
    {
      category: '혼밥',
      imageUrl: alone,
      link: 'https://example.com/alone',
    },
    {
      category: 'BEST',
      imageUrl: best,
      link: 'https://example.com/best',
    },
    {
      category: 'NEWEST',
      imageUrl: newest,
      link: 'https://example.com/newest',
    },
  ];

  return (
    <div>
      <h3 className="CategoryBanner-title"><strong> 어떤 요리를 만들어 볼까요?</strong></h3>
      <ul className="CategoryBanner-container">
        {foodCategoriesData.map((category, index) => (
          <li key={index} className="CategoryBanner-item">
            <div className="CategoryBanner-card">
              <a href={"http://localhost:3000/recipe_select"}>
                <div className="CategoryBanner-image-container">
                  <img
                    src={category.imageUrl}
                    alt={category.category}
                    className="CategoryBanner-image"
                  />
                </div>
                <div className="CategoryBanner-details-container">
                  <p className="CategoryBanner-name"><strong>{category.category}</strong></p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodCategoryModel;

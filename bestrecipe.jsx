import React, { useEffect, useState } from 'react';
import './bestrecipe.css'; 

const bestrecipes = [
  {
    id: '1',
    title: '복숭아 치즈 케이크',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230613153642296_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%A1%20%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3.jpeg',
  },
  {
    id: '2',
    title: '비건 부대찌개',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610124113864_fc570c14-75c0-47af-97a2-08b751ca4716.jpeg',
  },
  {
    id: '3',
    title: '반려견 케이크',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230616151048692_e79a3dbe-28fb-4643-a22c-2a2205973afa.jpg',
  },
  {
    id: '4',
    title: '누구나 좋아하는 길거리토스트',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230614130517935_f5ec9d7f-c85d-4ed2-8070-2e566c3a080a.jpeg',
  },
  {
    id: '5',
    title: '구운 채소 샌드위치',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230615174651351_111.jpeg',
  },
  {
    id: '6',
    title: '비건 시나몬 파운드케이크',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610021709782_a973b116-1352-482d-8ca4-42151fa4a220.jpg',
  },
  {
    id: '7',
    title: '키위마말랭 토스트',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230615175838884_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-06-16%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.58.57.png',
  },
  {
    id: '8',
    title: '감자들의 반란, 감자전!',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610105032273_%E1%84%83%E1%85%A2%E1%84%91%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg',
  }
];

function getViewsFromLocalStorage(recipeId) {
  const views = localStorage.getItem(`recipe_${recipeId}_views`);
  return views ? parseInt(views, 10) : 0;
}

function saveViewsToLocalStorage(recipeId, views) {
  localStorage.setItem(`recipe_${recipeId}_views`, views);
}

function sortRecipesByViews(recipes) {
  return recipes.sort((a, b) => {
    const viewsA = getViewsFromLocalStorage(a.id);
    const viewsB = getViewsFromLocalStorage(b.id);
    return viewsB - viewsA;
  });
}

const RecipeCard = ({ id, title, author, imageUrl, views, incrementViews }) => (
  <div className="recipe-card">
    <div className="recipe-image-wrapper" onClick={() => incrementViews(id)}>
      <img alt="게시물 썸네일 이미지" loading="lazy" decoding="async" src={imageUrl} />
    </div>
    <h4 className="recipe-title">{title}</h4>
    <div className="recipe-info">
      <div className="recipe-author">{author}</div>
      <div className="recipe-views">조회수: {views}</div>
    </div>
  </div>
);

const BestRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipesWithViews = bestrecipes.map(recipe => ({
      ...recipe,
      views: getViewsFromLocalStorage(recipe.id)
    }));
    const sortedRecipes = sortRecipesByViews(recipesWithViews);
    setRecipes(sortedRecipes);
  }, []);

  const incrementViews = (recipeId) => {
    const newViews = getViewsFromLocalStorage(recipeId) + 1;
    saveViewsToLocalStorage(recipeId, newViews);

    const updatedRecipes = recipes.map(recipe => 
      recipe.id === recipeId ? { ...recipe, views: newViews } : recipe
    );
    const sortedRecipes = sortRecipesByViews(updatedRecipes);
    setRecipes([...sortedRecipes]);
  };

  return (
    <div className="best-recipes-container">
      <div className="best-recipes-header">
        <div className="best-recipes-title">베스트 레시피</div>
      </div>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} incrementViews={incrementViews} />
        ))}
      </div>
    </div>
  );
};

export default BestRecipes;

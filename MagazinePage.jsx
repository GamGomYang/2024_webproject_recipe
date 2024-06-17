import React, { useState, useEffect } from 'react';
import './MagazinePage.css';
import Banner_magazine from './Banner_magazine';

const magazineData = [
  {
    "title": "말차파우더 레몬에이드에 넣어보세요, 말차레몬에이드",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/06/14/503280bcd30452133117afa3d0bbb3c31_s.jpg",
    "link": "/recipe/7028289",
    "id": "1"
  },
  {
    "title": "염증 줄여주는 다이어트 반찬 양배추당근볶음",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/06/14/28702ff369e3f992f8cb3a9cc75f30af1_s.jpg",
    "link": "/recipe/7028288",
    "id": "2"
  },
  {
    "title": "당충전이 하고싶을때 한번 만들어보세요. 미니구운도넛",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/06/11/04b62e370aa830551ced30b4c0ce374b1_s.jpg",
    "link": "/recipe/7028060",
    "id": "3"
  },
  {
    "title": "우유 대신 오트밀크를 넣어서 아침에 먹어도 속 편한 한잔",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/06/11/c2761def117c9e89493c18d941e65d0b1_s.jpg",
    "link": "/recipe/7028059",
    "id": "4"
  },
  {
    "title": "감자와 베이컨도 넣어 더 든든한 에그 핫도그",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/06/04/d2b7091b5bfa6c3a630d365ffae34fbb1_s.jpg",
    "link": "/recipe/7027575",
    "id": "5"
  },
  {
    "title": "볶지 않고 건강하게 데쳐서 만든 어묵무침",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/09/89f9bbdafe125e1f4bfb689768f849201_s.jpg",
    "link": "/recipe/7027574",
    "id": "6"
  },
  {
    "title": "고추장 대신 된장소스 곁들인 감칠맛 가득 부추비빔밥",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/24/4c28d87dbd0ad39f7793f43d1f7500ab1_s.jpg",
    "link": "/recipe/7027008",
    "id": "7"
  },
  {
    "title": "[만개편한끼] 그릇 하나로 3분만에 완성하는 계란찜밥",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/24/ae1f16b40e33fa648c45204a43822f3a1_s.jpg",
    "link": "/recipe/7027006",
    "id": "8"
  },
  {
    "title": "상투과자와 비슷한 감자팝콘 만들어 봤어요.",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/23/f6621d43ebe55928767529dad90b5eff1_s.jpg",
    "link": "/recipe/7026873",
    "id": "9"
  },
  {
    "title": "입맛 돌아오는 달래부추무침",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/23/9b8d0ba633143e869ba015b5bf2e5b931_s.jpg",
    "link": "/recipe/7026932",
    "id": "10"
  },
  {
    "title": "[만만셰] 우렁 대신 골뱅이를 넣어 만든 골뱅이강된장 by.초록쿠킹",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/22/16740cb372bbe88a4c9c6b9297cbf6771_s.jpg",
    "link": "/recipe/7026873",
    "id": "11"
  },
  {
    "title": "상큼한 레몬맥주 간단하게 만들어보기~",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/21/b6f07445d8e35305228ddfcafca442ac1_s.jpg",
    "link": "/recipe/7026780",
    "id": "12"
  },
  {
    "title": "바나나우유로 간단하게 바닐라라떼 만들어보세요",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/21/4b6a00051113114d900ba0805dfc0de11_s.jpg",
    "link": "/recipe/7026779",
    "id": "13"
  },
  {
    "title": "[전자레인지요리] 재료만 있으면 초간단 요리 완성, 명란찜덮밥",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/20/f5a2633e31bc6340be9359d0d40c51741_s.jpg",
    "link": "/recipe/7026659",
    "id": "14"
  },
  {
    "title": "[만개편한끼] 해장각 편의점 초간단 레시피, 짬뽕어묵탕",
    "author": "요리보고조리보고",
    "imageUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2024/05/20/06a57fbdca274a318496ad00acb8e2931_s.jpg",
    "link": "/recipe/7026658",
    "id": "15"
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
  return recipes.sort((a, b) => b.views - a.views);
}

const Magazine = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipesWithViews = magazineData.map(recipe => ({
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
    <div>
      <Banner_magazine />
      <ul className="Guide-list">
        {recipes.map((item, index) => (
          <li key={index} className="Guide-item">
            <div className="Guide-card" onClick={() => incrementViews(item.id)}>
              <a href={item.link}>
                <div className="Guide-image-container">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="Guide-image"
                  />
                </div>
                <div className="Guide-details">
                  <p className="Guide-title"><strong>{item.title}</strong></p>
                  <div className="Guide-info">
                    <p className="Guide-author">{item.author}</p>
                    <p className="Guide-views">조회수: {item.views}</p>
                  </div>
                  </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Magazine;

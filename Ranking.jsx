import React, { useEffect, useState } from 'react';
import './Ranking.css';
import Banner_Ranking from './Banner_Ranking';

const rankingData = [
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
    id: '9',
    title: '채끝살 스테이크',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230617023552880_e18c1734-72ea-42d5-8139-3f0cae13d18c.jpg',
  },
  {
    id: '10',
    title: '튀김덮밥(텐동)',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230617030526422_23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg',
  },
  {
    id: '11',
    title: '꼬막비빔밥',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610013659545_40e27117-2727-4677-a7bd-1bc6abccf3bb.jpg',
  },
  {
    id: '12',
    title: '라자냐',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610014500252_245a1c29-917e-4540-8846-c90bf4f60cc6.jpg',
  },
  {
    id: '13',
    title: '솜사탕 딸기 스무디',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610020423540_1cb4caf4-f31c-4d23-a4c3-89adb5618726.jpg',
  },
  {
    id: '14',
    title: '슬플 땐 활짝 치즈~버거',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610100124366_%E1%84%83%E1%85%A2%E1%84%91%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg',
  },
  {
    id: '15',
    title: '버섯과 굴의 환상적인 조화, 버섯굴전골!',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610135205176_e24aa0b1-b25d-4bc2-a093-8309330b1509.jpg',
  },
  {
    id: '16',
    title: '비스큐 크림 꼰길리에 파스타',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610140622855_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-06-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.34.34.png',
  },
  {
    id: '17',
    title: '비엔나 만두 강정',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610124113864_5fd696e17dfedf4958e0ac0cedcf6bc71.jpeg',
  },
  {
    id: '18',
    title: '완두콩 수프',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230610133131447_3c84b440-5b9f-4523-a658-0e88cda95332.jpg',
  },
  {
    id: '19',
    title: '속이 편안한 전복죽',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230611104131390_75c3329e-7421-41ea-9fca-5a2fcf9aacb2.jpeg',
  },
  {
    id: '20',
    title: '연어 그락브락스 오픈 샌드위치',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230611105429630_7c85b0d8-062a-4aef-8aa4-19b2dba89cad.jpeg',
  },

  {
    id: '22',
    title: '쫀득한 아메리칸 초코칩 쿠키 만들기',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230611110418725_9e986100212ee10b8c45c28640d61aa31.jpeg',
  },
  {
    id: '23',
    title: '소떡소떡 만들기, 달콤 & 매콤',
    author: '관리자',
    imageUrl: 'https://eliceproject.s3.amazonaws.com/20230611111914698_%E1%84%89%E1%85%A9%E1%84%84%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A9%E1%84%84%E1%85%A5%E1%86%A8.jpeg',
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

const Ranking = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipesWithViews = rankingData.map(recipe => ({
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
      <Banner_Ranking />
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

export default Ranking;

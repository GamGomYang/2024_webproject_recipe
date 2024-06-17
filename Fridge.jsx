import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Fridge.css';

import 가지Img from './images/fridge/가지.png';
import 감자Img from './images/fridge/감자.png';
import 고구마Img from './images/fridge/고구마.png';
import 고등어Img from './images/fridge/고등어.png';
import 고수Img from './images/fridge/고수.png';
import 고추Img from './images/fridge/고추.png';
import 김Img from './images/fridge/김.png';
import 김치Img from './images/fridge/김치.png';
import 깨Img from './images/fridge/깨.png';
import 깻잎Img from './images/fridge/깻잎.png';
import 달걀Img from './images/fridge/달걀.png';
import 당근Img from './images/fridge/당근.png';
import 닭고기Img from './images/fridge/닭고기.png';
import 돼지고기Img from './images/fridge/돼지고기.png';
import 대파Img from './images/fridge/대파.png';
import 두부Img from './images/fridge/두부.png';
import 떡Img from './images/fridge/떡.png';
import 레몬Img from './images/fridge/레몬.png';
import 마늘Img from './images/fridge/마늘.png';
import 메추리알Img from './images/fridge/메추리알.png';
import 무Img from './images/fridge/무.png';
import 미역Img from './images/fridge/미역.png';
import 밥Img from './images/fridge/밥.png';
import 배추Img from './images/fridge/배추.png';
import 버섯Img from './images/fridge/버섯.png';
import 베이컨Img from './images/fridge/베이컨.png';
import 부추Img from './images/fridge/부추.png';
import 브로콜리Img from './images/fridge/브로콜리.png';
import 상추Img from './images/fridge/상추.png';
import 생강Img from './images/fridge/생강.png';
import 소고기Img from './images/fridge/소고기.png';
import 소면Img from './images/fridge/소면.PNG';
import 시금치Img from './images/fridge/시금치.png';
import 애호박Img from './images/fridge/애호박.png';
import 연어Img from './images/fridge/연어.png';
import 열무Img from './images/fridge/열무.png';
import 양배추Img from './images/fridge/양배추.png';
import 양상추Img from './images/fridge/양상추.png';
import 양파Img from './images/fridge/양파.png';
import 오이Img from './images/fridge/오이.png';
import 옥수수Img from './images/fridge/옥수수.png';
import 오징어Img from './images/fridge/오징어.png';
import 우엉Img from './images/fridge/우엉.png';
import 우유Img from './images/fridge/우유.png';
import 새우Img from './images/fridge/새우.png';
import 조개Img from './images/fridge/조개.png';
import 참치Img from './images/fridge/참치.png';
import 치즈Img from './images/fridge/치즈.png';
import 카레Img from './images/fridge/카레.png';
import 콩나물Img from './images/fridge/콩나물.png';
import 파스타면Img from './images/fridge/파스타면.png';
import 파슬리Img from './images/fridge/파슬리.png';
import 파프리카Img from './images/fridge/파프리카.png';
import 피망Img from './images/fridge/피망.png';
import 햄Img from './images/fridge/햄.png';
import 간장Img from './images/fridge/간장.png';
import 고추장Img from './images/fridge/고추장.png';
import 굴소스Img from './images/fridge/굴소스.png';
import 꿀Img from './images/fridge/꿀.png';
import 된장Img from './images/fridge/된장.png';
import 땅콩소스Img from './images/fridge/땅콩소스.png';
import 마요네즈Img from './images/fridge/마요네즈.png';
import 맛술Img from './images/fridge/맛술.png';
import 머스타드Img from './images/fridge/머스타드.png';
import 물엿Img from './images/fridge/물엿.PNG';
import 새우젓Img from './images/fridge/새우젓.PNG';
import 설탕Img from './images/fridge/설탕.png';
import 소금Img from './images/fridge/소금.png';
import 식용유Img from './images/fridge/식용유.png';
import 식초Img from './images/fridge/식초.png';
import 올리고당Img from './images/fridge/올리고당.png';
import 올리브유Img from './images/fridge/올리브유.png';
import 참기름Img from './images/fridge/참기름.png';
import 청주Img from './images/fridge/청주.png';
import 케첩Img from './images/fridge/케첩.png';
import 후추Img from './images/fridge/후추.png';

const Fridge = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes] = useState([
        {
            name: '가지 볶음',
            ingredients: ['가지', '간장', '마늘'],
            img: 가지Img
        },
        {
            name: '감자 조림',
            ingredients: ['감자', '간장', '설탕'],
            img: 감자Img
        },
    ]);

    const ingredients = [
        { name: '가지', img: 가지Img },
        { name: '감자', img: 감자Img },
        { name: '고구마', img: 고구마Img },
        { name: '고등어', img: 고등어Img },
        { name: '고수', img: 고수Img },
        { name: '고추', img: 고추Img },
        { name: '김', img: 김Img },
        { name: '김치', img: 김치Img },
        { name: '깨', img: 깨Img },
        { name: '깻잎', img: 깻잎Img },
        { name: '달걀', img: 달걀Img },
        { name: '당근', img: 당근Img },
        { name: '닭고기', img: 닭고기Img },
        { name: '돼지고기', img: 돼지고기Img },
        { name: '대파', img: 대파Img },
        { name: '두부', img: 두부Img },
        { name: '떡', img: 떡Img },
        { name: '레몬', img: 레몬Img },
        { name: '마늘', img: 마늘Img },
        { name: '메추리알', img: 메추리알Img },
        { name: '무', img: 무Img },
        { name: '미역', img: 미역Img },
        { name: '밥', img: 밥Img },
        { name: '배추', img: 배추Img },
        { name: '버섯', img: 버섯Img },
        { name: '베이컨', img: 베이컨Img },
        { name: '부추', img: 부추Img },
        { name: '브로콜리', img: 브로콜리Img },
        { name: '상추', img: 상추Img },
        { name: '생강', img: 생강Img },
        { name: '소고기', img: 소고기Img },
        { name: '소면', img: 소면Img },
        { name: '시금치', img: 시금치Img },
        { name: '애호박', img: 애호박Img },
        { name: '연어', img: 연어Img },
        { name: '열무', img: 열무Img },
        { name: '양배추', img: 양배추Img },
        { name: '양상추', img: 양상추Img },
        { name: '양파', img: 양파Img },
        { name: '오이', img: 오이Img },
        { name: '옥수수', img: 옥수수Img },
        { name: '오징어', img: 오징어Img },
        { name: '우엉', img: 우엉Img },
        { name: '우유', img: 우유Img },
        { name: '새우', img: 새우Img },
        { name: '조개', img: 조개Img },
        { name: '참치', img: 참치Img },
        { name: '치즈', img: 치즈Img },
        { name: '카레', img: 카레Img },
        { name: '콩나물', img: 콩나물Img },
        { name: '파스타면', img: 파스타면Img },
        { name: '파슬리', img: 파슬리Img },
        { name: '파프리카', img: 파프리카Img },
        { name: '피망', img: 피망Img },
        { name: '햄', img: 햄Img },
        { name: '간장', img: 간장Img },
        { name: '고추장', img: 고추장Img },
        { name: '굴소스', img: 굴소스Img },
        { name: '꿀', img: 꿀Img },
        { name: '된장', img: 된장Img },
        { name: '땅콩소스', img: 땅콩소스Img },
        { name: '마요네즈', img: 마요네즈Img },
        { name: '맛술', img: 맛술Img },
        { name: '머스타드', img: 머스타드Img },
        { name: '물엿', img: 물엿Img },
        { name: '새우젓', img: 새우젓Img },
        { name: '설탕', img: 설탕Img },
        { name: '소금', img: 소금Img },
        { name: '식용유', img: 식용유Img },
        { name: '식초', img: 식초Img },
        { name: '올리고당', img: 올리고당Img },
        { name: '올리브유', img: 올리브유Img },
        { name: '참기름', img: 참기름Img },
        { name: '청주', img: 청주Img },
        { name: '케첩', img: 케첩Img },
        { name: '후추', img: 후추Img },
    ];

    const selectIngredient = (ingredient) => {
        const updatedSelectedIngredients = [...selectedIngredients];
        const index = updatedSelectedIngredients.indexOf(ingredient.name);

        if (index === -1) {
            updatedSelectedIngredients.push(ingredient.name);
        } else {
            updatedSelectedIngredients.splice(index, 1);
        }

        setSelectedIngredients(updatedSelectedIngredients);
    };

    const renderSelectedIngredients = () => {
        return selectedIngredients.map((ingredientName, index) => {
            const ingredient = ingredients.find(ing => ing.name === ingredientName);
            return (
                <div key={index} className="selected-ingredient">
                    <img src={ingredient.img} alt={ingredient.name} style={{ width: '50px', height: '50px' }} />
                    <p>{ingredient.name}</p>
                </div>
            );
        });
    };

    const searchRecipes = () => {
        const matchingRecipes = recipes.filter(recipe =>
            selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
        );

        if (matchingRecipes.length > 0) {
            return matchingRecipes.map((recipe, index) => (
                <div key={index} className="recipe">
                    <img src={recipe.img} alt={recipe.name} />
                    <p>{recipe.name}</p>
                </div>
            ));
        } else {
            return <p>레시피 검색 결과가 없습니다.</p>;
        }
    };

    const resetSelection = () => {
        setSelectedIngredients([]);
    };

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
    };

    return (
        <div className="container">
            <h1 className="text-center mt-4">냉장고 털기</h1><br />
            <div className="row">
                <div className="col-md-6">
                    <div className="ingredient-list">
                        <h2>재료 리스트</h2>
                        <Slider {...settings}>
                            <div className="slide">
                                {ingredients.slice(0, Math.ceil(ingredients.length / 2)).map((ingredient, index) => (
                                    <div
                                        key={index}
                                        className="ingredient"
                                        onClick={() => selectIngredient(ingredient)}
                                    >
                                        <img src={ingredient.img} alt={ingredient.name} />
                                        <p>{ingredient.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="slide">
                                {ingredients.slice(Math.ceil(ingredients.length / 2)).map((ingredient, index) => (
                                    <div
                                        key={index}
                                        className="ingredient"
                                        onClick={() => selectIngredient(ingredient)}
                                    >
                                        <img src={ingredient.img} alt={ingredient.name} />
                                        <p>{ingredient.name}</p>
                                    </div>
                                ))}
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="selected-ingredients">
                        <h2>선택한 재료</h2>
                        <div id="selected-ingredients">
                            {renderSelectedIngredients()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="actions">
                        <button id="reset-selection" className="btn btn-outline-warning me-2" onClick={resetSelection}>초기화</button>
                        <button id="search-recipes" className="btn btn-outline-warning me-2" onClick={searchRecipes}>레시피 검색</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="recipe-results">
                        <h2>레시피 검색 결과</h2>
                        <div id="recipes">
                            {searchRecipes()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fridge;
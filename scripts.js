document.addEventListener('DOMContentLoaded', function() {
    const ingredients = [
        { name: '가지', img: 'img/가지.png' },
        { name: '감자', img: 'img/감자.png' },
        { name: '고구마', img: 'img/고구마.png' },
        { name: '고등어', img: 'img/고등어.png' },
        { name: '고수', img: 'img/고수.png' },
        { name: '고추', img: 'img/고추.png' },
        { name: '김', img: 'img/김.png' },
        { name: '김치', img: 'img/김치.png' },
        { name: '깨', img: 'img/깨.png' },
        { name: '깻잎', img: 'img/깻잎.png' },
        { name: '달걀', img: 'img/달걀.png' },
        { name: '당근', img: 'img/당근.png' },
        { name: '닭고기', img: 'img/닭고기.png' },
        { name: '돼지고기', img: 'img/돼지고기.png' },
        { name: '대파', img: 'img/대파.png' },
        { name: '두부', img: 'img/두부.png' },
        { name: '떡', img: 'img/떡.png' },
        { name: '레몬', img: 'img/레몬.png' },
        { name: '마늘', img: 'img/마늘.png' },
        { name: '마늘쫑', img: 'img/마늘쫑.png' },
        { name: '메추리알', img: 'img/메추리알.png' },
        { name: '무', img: 'img/무.png' },
        { name: '미역', img: 'img/미역.png' },
        { name: '밥', img: 'img/밥.png' },
        { name: '배추', img: 'img/배추.png' },
        { name: '버섯', img: 'img/버섯.png' },
        { name: '베이컨', img: 'img/베이컨.png' },
        { name: '부추', img: 'img/부추.png' },
        { name: '브로콜리', img: 'img/브로콜리.png' },
        { name: '상추', img: 'img/상추.png' },
        { name: '생강', img: 'img/생강.png' },
        { name: '소고기', img: 'img/소고기.png' },
        { name: '소면', img: 'img/소면.png' },
        { name: '시금치', img: 'img/시금치.png' },
        { name: '애호박', img: 'img/애호박.png' },
        { name: '연어', img: 'img/연어.png' },
        { name: '열무', img: 'img/열무.png' },
        { name: '양배추', img: 'img/양배추.png' },
        { name: '양상추', img: 'img/양상추.png' },
        { name: '양파', img: 'img/양파.png' },
        { name: '오이', img: 'img/오이.png' },
        { name: '옥수수', img: 'img/옥수수.png' },
        { name: '오징어', img: 'img/오징어.png' },
        { name: '우엉', img: 'img/우엉.png' },
        { name: '우유', img: 'img/우유.png' },
        { name: '새우', img: 'img/새우.png' },
        { name: '조개', img: 'img/조개.png' },
        { name: '참치', img: 'img/참치.png' },
        { name: '치즈', img: 'img/치즈.png' },
        { name: '카레', img: 'img/카레.png' },
        { name: '콩나물', img: 'img/콩나물.png' },
        { name: '파스타면', img: 'img/파스타면.png' },
        { name: '파슬리', img: 'img/파슬리.png' },
        { name: '파프리카', img: 'img/파프리카.png' },
        { name: '피망', img: 'img/피망.png' },
        { name: '햄', img: 'img/햄.png' },

        { name: '간장', img: 'img/간장.png' },
        { name: '고추장', img: 'img/고추장.png' },
        { name: '굴소스', img: 'img/굴소스.png' },
        { name: '꿀', img: 'img/꿀.png' },
        { name: '된장', img: 'img/된장.png' },
        { name: '땅콩소스', img: 'img/땅콩소스.png' },
        { name: '마요네즈', img: 'img/마요네즈.png' },
        { name: '맛술', img: 'img/맛술.png' },
        { name: '머스타드', img: 'img/머스타드.png' },
        { name: '물엿', img: 'img/물엿.png' },
        { name: '새우젓', img: 'img/새우젓.png' },
        { name: '설탕', img: 'img/설탕.png' },
        { name: '소금', img: 'img/소금.png' },
        { name: '식용유', img: 'img/식용유.png' },
        { name: '식초', img: 'img/식초.png' },
        { name: '올리고당', img: 'img/올리고당.png' },
        { name: '올리브유', img: 'img/올리브유.png' },
        { name: '참기름', img: 'img/참기름.png' },
        { name: '청주', img: 'img/청주.png' },
        { name: '케첩', img: 'img/케첩.png' },
        { name: '후추', img: 'img/후추.png' },
    ];
    const recipes = [
        {
            name: '가지 볶음',
            ingredients: ['가지', '간장', '마늘'],
            img: 'img/가지.png'
        },
        {
            name: '감자 조림',
            ingredients: ['감자', '간장', '설탕'],
            img: 'img/감자.png'
        },
        {
            name: '김밥',
            ingredients: ['김','밥', '당근','오이', '단무지',
                '계란',
                '시금치',
                '햄',
                '참기름',
                '소금',
                '깨소금'
            ],
            img: 'images/kimbab.jpg'
        },
        {
            name: '순두부찌개',
            ingredients: ['순두부', '돼지고기 다짐육', '대파', '양파', '고추', '마늘', '고추기름', '고춧가루', '간장', '물', '참기름', '소금'],
            img: 'img/sundubu.png'
        }
    ];

    
    const ingredientContainer = document.getElementById('ingredients');
    ingredientContainer.innerHTML = '';
    
    //슬라이드 생성
    const slide1Container = document.createElement('div');
    slide1Container.classList.add('slide');
    const slide2Container = document.createElement('div');
    slide2Container.classList.add('slide');
    
    const selectedIngredientContainer = document.getElementById('selected-ingredients');
    const recipeResultsContainer = document.getElementById('recipes');

    const firstHalf = ingredients.slice(0, ingredients.findIndex(ing => ing.name === '햄') + 1);
    const secondHalf = ingredients.slice(ingredients.findIndex(ing => ing.name === '햄') + 1);
    
    //첫 번째 슬라이드(재료 목록)
    firstHalf.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.style.border = '3px dotted #ffffff';
        ingredientDiv.style.margin = '3px';
        ingredientDiv.classList.add('ingredient');
        ingredientDiv.innerHTML = `
            <img src="${ingredient.img}" alt="${ingredient.name}">
            <p>${ingredient.name}</p>
        `;
        ingredientDiv.addEventListener('click', () => {
            selectIngredient(ingredient, ingredientDiv);
        });
        slide1Container.appendChild(ingredientDiv);
    });

    //두 번째 슬라이드(소스 목록)
    secondHalf.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.style.border = '3px dotted #ffffff';
        ingredientDiv.style.margin = '3px';
        ingredientDiv.classList.add('ingredient');
        ingredientDiv.innerHTML = `
            <img src="${ingredient.img}" alt="${ingredient.name}">
            <p>${ingredient.name}</p>
        `;
        ingredientDiv.addEventListener('click', () => {
            selectIngredient(ingredient, ingredientDiv);
        });
        slide2Container.appendChild(ingredientDiv);
    });
    
    ingredientContainer.appendChild(slide1Container);
    ingredientContainer.appendChild(slide2Container);

    //슬라이드 설정
    $(ingredientContainer).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false
    });

    const selectedIngredients = [];

    //선택한 재료 추가/삭제
    function selectIngredient(ingredient, element) {
        const index = selectedIngredients.indexOf(ingredient.name);
        if (index === -1) {
            selectedIngredients.push(ingredient.name);
            element.style.border = '3px dotted #ffcf10';
        } else {
            selectedIngredients.splice(index, 1);
            element.style.border = '3px dotted #ffffff';
        }
        renderSelectedIngredients();
    }

    //선택한 재료 출력
    function renderSelectedIngredients() {
        selectedIngredientContainer.innerHTML = '';
        selectedIngredients.forEach(ingredientName => {
            const ingredient = ingredients.find(ing => ing.name === ingredientName);
            const selectedDiv = document.createElement('div');
            selectedDiv.classList.add('selected-ingredient');
            const imgElement = document.createElement('img');
            imgElement.src = ingredient.img;
            imgElement.alt = ingredient.name;
            imgElement.style.width = '50px'; // 이미지 크기 변경
            imgElement.style.height = '50px'; // 이미지 크기 변경
            selectedDiv.appendChild(imgElement);
            selectedDiv.innerHTML += `<p>${ingredient.name}</p>`;
            selectedDiv.addEventListener('click', () => {
                const originalElement = document.querySelector(`.ingredient img[alt="${ingredient.name}"]`).parentNode;
                selectIngredient(ingredient, originalElement);
            });
            selectedIngredientContainer.appendChild(selectedDiv);
        });
    }

    document.getElementById('search-recipes').addEventListener('click', searchRecipes);
    document.getElementById('reset-selection').addEventListener('click', resetSelection);

    //레시피 검색
    function searchRecipes() {
        recipeResultsContainer.innerHTML = '<h5>레시피를 검색하는 중...</h5>';
    
        //선택된 재료가 없는 경우
        if (selectedIngredients.length === 0) {
            recipeResultsContainer.innerHTML = '<h5>선택된 재료가 없습니다.</h5>';
            window.alert('선택된 재료가 없습니다.');
            return;
        }
        
        //레시피 출력
        setTimeout(() => {
            const matchingRecipes = recipes.filter(recipe =>
                selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
            );
    
            if (matchingRecipes.length > 0) {
                recipeResultsContainer.innerHTML = matchingRecipes.map(recipe => `
                    <a href="recipe.html?name=${encodeURIComponent(recipe.name)}" class="recipe-link">
                        <div class="recipe" data-name="${recipe.name}">
                            <img src="${recipe.img}" alt="${recipe.name}">
                            <p>${recipe.name}</p>
                        </div>
                    </a>
                `).join('');
    
            } else {
                recipeResultsContainer.innerHTML = '<h5>레시피 검색 결과가 없습니다.</h5>';
            }
        }, 1000);
    }    

    //초기화
    function resetSelection() {
        selectedIngredients.length = 0;
        renderSelectedIngredients();
        document.querySelectorAll('.ingredient').forEach(ingredientDiv => {
            ingredientDiv.style.border = '3px dotted #ffffff';
        });
        recipeResultsContainer.innerHTML = '';
    }
});
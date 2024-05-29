document.addEventListener('DOMContentLoaded', function() {
    const ingredients = [
        { name: '가지', img: 'img/가지.png' },
        { name: '감자', img: 'img/감자.png' },
        { name: '고구마', img: 'img/고구마.png' },
        { name: '고등어', img: 'img/고등어.png' },
        { name: '고추', img: 'img/고추.png' },
        { name: '김치', img: 'img/김치.png' },
        { name: '달걀', img: 'img/달걀.png' },
        { name: '당근', img: 'img/당근.png' },
        { name: '닭고기', img: 'img/닭고기.png' },
        { name: '돼지고기', img: 'img/돼지고기.png' },
        { name: '대파', img: 'img/대파.png' },
        { name: '두부', img: 'img/두부.png' },
        { name: '마늘', img: 'img/마늘.png' },
        { name: '무', img: 'img/무.png' },
        { name: '미역', img: 'img/미역.png' },
        { name: '배추', img: 'img/배추.png' },
        { name: '버섯', img: 'img/버섯.png' },
        { name: '베이컨', img: 'img/베이컨.png' },
        { name: '브로콜리', img: 'img/브로콜리.png' },
        { name: '소고기', img: 'img/소고기.png' },
        { name: '소면', img: 'img/소면.png' },
        { name: '시금치', img: 'img/시금치.png' },
        { name: '애호박', img: 'img/애호박.png' },
        { name: '양배추', img: 'img/양배추.png' },
        { name: '양상추', img: 'img/양상추.png' },
        { name: '양파', img: 'img/양파.png' },
        { name: '오이', img: 'img/오이.png' },
        { name: '옥수수', img: 'img/옥수수.png' },
        { name: '오징어', img: 'img/오징어.png' },
        { name: '우엉', img: 'img/우엉.png' },
        { name: '우유', img: 'img/우유.png' },
        { name: '조개', img: 'img/조개.png' },
        { name: '참치', img: 'img/참치.png' },
        { name: '치즈', img: 'img/치즈.png' },
        { name: '콩나물', img: 'img/콩나물.png' },
        { name: '파스타면', img: 'img/파스타면.png' },
        { name: '파프리카', img: 'img/파프리카.png' },
        { name: '피망', img: 'img/피망.png' },
        { name: '햄', img: 'img/햄.png' },

        { name: '간장', img: 'img/간장.png' },
        { name: '고추장', img: 'img/고추장.png' },
        { name: '꿀', img: 'img/꿀.png' },
        { name: '된장', img: 'img/된장.png' },
        { name: '마요네즈', img: 'img/마요네즈.png' },
        { name: '머스타드', img: 'img/머스타드.png' },
        { name: '물엿', img: 'img/물엿.png' },
        { name: '새우젓', img: 'img/새우젓.png' },
        { name: '설탕', img: 'img/설탕.png' },
        { name: '소금', img: 'img/소금.png' },
        { name: '식용유', img: 'img/식용유.png' },
        { name: '식초', img: 'img/식초.png' },
        { name: '참기름', img: 'img/참기름.png' },
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
    ];

    const ingredientContainer = document.getElementById('ingredients');
    const selectedIngredientContainer = document.getElementById('selected-ingredients');
    const recipeResultsContainer = document.getElementById('recipes');

    ingredients.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('ingredient');
        ingredientDiv.innerHTML = `
            <img src="${ingredient.img}" alt="${ingredient.name}">
            <p>${ingredient.name}</p>
        `;
        ingredientDiv.addEventListener('click', () => selectIngredient(ingredient));
        ingredientContainer.appendChild(ingredientDiv);
    });

    const selectedIngredients = [];

    function selectIngredient(ingredient) {
        if (!selectedIngredients.includes(ingredient.name)) {
            selectedIngredients.push(ingredient.name);
            renderSelectedIngredients();
        }
    }

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
            selectedIngredientContainer.appendChild(selectedDiv);
        });
    }

    document.getElementById('search-recipes').addEventListener('click', searchRecipes);
    document.getElementById('reset-selection').addEventListener('click', resetSelection);

    function searchRecipes() {
        recipeResultsContainer.innerHTML = '<p>레시피를 검색하는 중...</p>';
        setTimeout(() => {
            const matchingRecipes = recipes.filter(recipe => 
                recipe.ingredients.some(ingredient => selectedIngredients.includes(ingredient))
            );

            if (matchingRecipes.length > 0) {
                recipeResultsContainer.innerHTML = matchingRecipes.map(recipes => `
                    <div class="recipes">
                        <img src="${recipes.img}" alt="${recipes.name}">
                        <p>${recipes.name}</p>
                    </div>
                `).join('');
            } else {
                recipeResultsContainer.innerHTML = '<p>레시피 검색 결과가 없습니다.</p>';
            }
        }, 1000);
    }

    function resetSelection() {
        selectedIngredients.length = 0;
        renderSelectedIngredients();
        recipeResultsContainer.innerHTML = '';
    }
});

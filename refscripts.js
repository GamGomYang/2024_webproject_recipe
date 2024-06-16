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
        { name: '라면사리', img: 'img/라면사리.png' },
        { name: '레몬', img: 'img/레몬.png' },
        { name: '마늘', img: 'img/마늘.png' },
        { name: '마늘쫑', img: 'img/마늘쫑.png' },
        { name: '메추리알', img: 'img/메추리알.png' },
        { name: '멸치', img: 'img/멸치.png' },
        { name: '무', img: 'img/무.png' },
        { name: '미역', img: 'img/미역.png' },
        { name: '밥', img: 'img/밥.png' },
        { name: '배추', img: 'img/배추.png' },
        { name: '버섯', img: 'img/버섯.png' },
        { name: '베이컨', img: 'img/베이컨.png' },
        { name: '부추', img: 'img/부추.png' },
        { name: '부침가루', img: 'img/부침가루.png' },
        { name: '브로콜리', img: 'img/브로콜리.png' },
        { name: '상추', img: 'img/상추.png' },
        { name: '생강', img: 'img/생강.png' },
        { name: '소고기', img: 'img/소고기.png' },
        { name: '소면', img: 'img/소면.png' },
        { name: '소시지', img: 'img/소시지.png' },
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
        { name: '쪽파', img: 'img/쪽파.png' },
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
        { name: '고춧가루', img: 'img/고춧가루.png' },
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
        { name: '액젓', img: 'img/액젓.png' },
        { name: '올리고당', img: 'img/올리고당.png' },
        { name: '올리브유', img: 'img/올리브유.png' },
        { name: '참기름', img: 'img/참기름.png' },
        { name: '청주', img: 'img/청주.png' },
        { name: '케첩', img: 'img/케첩.png' },
        { name: '후추', img: 'img/후추.png' },
    ];
    
    const recipes = [//이미지 링크 수정 필요
        {
            name: '가지 볶음',
            ingredients: ['가지', '고추', '마늘', '양파', '대파', '참기름', '깨', '간장', '굴소스','설탕','고춧가루'],
            img: 'recimg/가지볶음.jpg'
        },
        {
            name: "무생채",
            ingredients: ["무", "고춧가루", "마늘", "설탕", "식초", "액젓", "소금", "통깨", "대파"],
            img: "recimg/무생채.jpg"
        },
        {
            name: "마늘쫑",
            ingredients: ["마늘쫑", "마늘",'간장','고추장','고춧가루','올리고당'],
            img: "recimg/마늘쫑.jpg"
        },
        {
            name: "부추무침",
            ingredients: ["부추", "양파",'간장','고춧가루','식초','참기름','깨', '올리고당', '마늘'],
            img: "recimg/부추무침.jpg"
        },
        {
            name: "부추전",
            ingredients: ["부추", "양파", "부침가루", "식용유", "당근", "고추"],
            img: "recimg/부추전.jpg"
        },
        {
            name: "잔치국수",
            ingredients: ["멸치", "양파", "당근", "소면", "달걀", "대파", "애호박", "마늘", "버섯", "고추", '간장', '깨', '설탕', '고춧가루'],
            img: "recimg/잔치국수.jpg"
        },
        {
            name: "진미채볶음",
            ingredients: ["진미채", '마요네즈', '고추장', '고춧가루', '간장', '마늘', '참기름', '설탕', '올리고당', '소금'],
            img: "recimg/진미채볶음.jpg"
        },
        {
            name: "계란국",
            ingredients: ["달걀", "대파", "소금", "액젓"],
            img: "recimg/계란국.jpg"
        },
        {
            name: "소불고기",
            ingredients: ["소고기", "양파", "당근", "대파", '간장', '설탕', '물엿', '맛술', '마늘', '참기름', '후추'],
            img: "recimg/소불고기.jpg"
        },
        {
            name: "닭갈비",
            ingredients: ["닭고기", "양배추", "양파", "고구마", "깻잎", "떡", "대파, '고추장", '고춧가루', '간장', '설탕', '참기름', '마늘', '맛술', '후추', '소금', '치즈'],
            img: "recimg/닭갈비.jpg"
        },
        {
            name: "카레",
            ingredients: ["감자", "양파", "당근", "소고기", "카레", "식용유"],
            img: "recimg/카레.jpg"
        },
        {
            name: "고등어조림",
            ingredients: ["고등어", "무", "고추", "대파", '간장', '고춧가루', '고추장', '마늘', '설탕', '후추'],
            img: "recimg/고등어조림.jpg"
        },
        {
            name: "감자채볶음",
            ingredients: ["감자", "당근", "양파", "천일염", "식용유"],
            img: "recimg/감자채볶음.jpg"
        },
        {
            name: '김밥',
            ingredients: ['김','밥', '당근','오이', '달걀', '시금치', '햄','참기름','소금'],
            img: 'images/kimbab.jpg'
        },
        {
            name: '순두부찌개',
            ingredients: ['두부', '돼지고기', '대파', '양파', '고추', '마늘', '고춧가루', '간장', '참기름', '소금'],
            img: 'img/sundubu.png'
        },
        {
            name: '비빔밥',
            ingredients: ['밥','시금치','콩나물','애호박','당근','소고기','달걀','고추장','참기름','간장','마늘','설탕','소금'],
            img: 'img/.png'
        },
        {
            name: "갈비찜",
            ingredients: ["소고기", "당근", "무", "버섯", "양파", "대파", "마늘", "간장", "설탕", "참기름", "후추", "소금"],
            img: "recimg/갈비찜.jpg"
        },
        {
            name: "김치찌개",
            ingredients: ["김치", "돼지고기", "두부", "양파", "대파", "고춧가루", "마늘", "된장", "고추장", "소금", "참기름"],
            img: "recimg/김치찌개.jpg"
        },
        {
            name: "된장찌개",
            ingredients: ["된장", "대파", "무", "양파", "고추", "마늘", "고춧가루", "참기름", "소금"],
            img: "recimg/된장찌개.jpg"
        },
        {
            name: "두루치기",
            ingredients: ["돼지고기", "양파", "당근", "대파", "마늘", "고추", "고추장", "고추가루", "간장", "청주", "설탕"],
            img: "recimg/두루치기.jpg"
        },
        {
            name: "라볶이",
            ingredients: ["라면사리", "떡", "어묵", "양배추", "대파", "고추장", "고춧가루", "간장", "설탕", "마늘", "소금", "후추"],
            img: "recimg/라볶이.jpg"
        },
        {
            name: "샤브샤브",
            ingredients: ["소고기", "배추", "시금치", "버섯", "당근", "무", "두부", "간장", "마늘", "참기름", "소금", "후추"],
            img: "recimg/샤브샤브.jpg"
        },
        {
            name: "연어 스테이크",
            ingredients: ["연어", "올리브유", "레몬", "마늘", "양파", "파슬리", "소금", "후추"],
            img: "recimg/연어스테이크.jpg"
        },
        {
            name: "월남쌈",
            ingredients: ["새우", "돼지고기", "당근", "오이", "상추", "깻잎", "고수", "땅콩소스"],
            img: "recimg/월남쌈.jpg"
        },
        {
            name: "찹스테이크",
            ingredients: ["소고기", "양파", "파프리카", "마요네즈", "올리브유", "소금", "후추"],
            img: "recimg/찹스테이크.jpg"
        },
        {
            name: "치킨",
            ingredients: ["닭고기", "올리브유", "마늘", "양파", "파프리카", "고추", "간장", "설탕", "후추"],
            img: "recimg/치킨.jpg"
        },
        {
            name: "오이무침",
            ingredients: ["오이", "소금", "마늘", "고춧가루", "식초", "설탕", "참기름", "소금", "대파"],
            img: "recimg/오이무침.jpg"
        },
        {
            name: "두부조림",
            ingredients: ["두부", "간장", "설탕", "마늘", "참기름", "고춧가루", "대파"],
            img: "recimg/두부조림.jpg"
        },
        {
            name: "닭볶음탕",
            ingredients: ["닭고기", "감자", "당근", "양파", "대파", "고추장", "고춧가루", "간장", "설탕", "마늘", "생강"],
            img: "recimg/닭볶음탕.jpg"
        },
        {
            name: "제육볶음",
            ingredients: ["돼지고기", "양파", "대파", "고추장", "고춧가루", "간장", "설탕", "마늘", "참기름", "소금"],
            img: "recimg/제육볶음.jpg"
        },
        {
            name: "오이소박이",
            ingredients: ["오이", "부추", "당근", "양파", "소금", "고춧가루", "마늘", "생강", "새우젓", "설탕", "참기름", "깨"],
            img: "recimg/오이소박이.jpg"
        },
        {
            name: "오징어볶음",
            ingredients: ["오징어", "양파", "당근", "대파", "고추", "마늘", "고춧가루", "간장", "설탕", "참기름", "깨", "식용유"],
            img: "recimg/오징어볶음.jpg"
        },
        {
            name: "비빔국수",
            ingredients: ["소면", "오이", "당근", "상추", "계란", "김", "깨"],
            img: "recimg/비빔국수.jpg"
        },
        {
            name: "콩나물국",
            ingredients: ["콩나물", "대파", "고추", "마늘", "소금", "간장"],
            img: "recimg/콩나물국.jpg"
        },
        {
            name: "멸치볶음",
            ingredients: ["멸치", "식용유", "설탕", "간장", "물엿", "마늘", "고추장", "깨"],
            img: "recimg/멸치볶음.jpg"
        },
        {
            name: "어묵볶음",
            ingredients: ["어묵", "양파", "당근", "대파", "식용유", "간장", "설탕", "물엿", "마늘", "참기름", "깨"],
            img: "recimg/어묵볶음.jpg"
        },
        {
            name: "미역국",
            ingredients: ["미역", "소고기", "간장", "참기름", "마늘", "소금"],
            img: "recimg/미역국.jpg"
        },
        {
            name: "잡채",
            ingredients: ["당면", "소고기", "시금치", "당근", "양파", "버섯", "대파", "간장", "설탕", "참기름", "마늘", "깨", "식용유"],
            img: "recimg/잡채.jpg"
        },
        {
            name: "상추겉절이",
            ingredients: ["상추", "대파", "고추장", "고춧가루", "간장", "설탕", "식초", "마늘", "참기름", "깨"],
            img: "recimg/상추겉절이.jpg"
        },
        {
            name: "열무김치",
            ingredients: ["열무", "소금", "고춧가루", "마늘", "생강", "액젓", "설탕", "쪽파"],
            img: "recimg/열무김치.jpg"
        },
        {
            name: "계란찜",
            ingredients: ["계란", "소금", "참기름", "대파", "당근", "새우젓"],
            img: "recimg/계란찜.jpg"
        },
        {
            name: "소고기무국",
            ingredients: ["소고기", "무", "대파", "간장", "마늘", "소금", "후추", "참기름"],
            img: "recimg/소고기무국.jpg"
        },
        {
            name: "부대찌개",
            ingredients: ["소시지", "햄", "두부", "김치", "양파", "대파", "떡", "라면사리", "고추장", "고춧가루", "마늘", "간장"],
            img: "recimg/부대찌개.jpg"
        },
        {
            name: "메추리알 장조림",
            ingredients: ["메추리알", "소고기", "간장", "설탕", "맛술", "마늘", "깨"],
            img: "recimg/메추리알장조림.jpg"
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

        // 레시피 검색
        function searchRecipes() {
            recipeResultsContainer.innerHTML = '<h5>레시피를 검색하는 중...</h5>';
        
            // 선택된 재료가 없는 경우
            if (selectedIngredients.length === 0) {
                recipeResultsContainer.innerHTML = '<h5>선택된 재료가 없습니다.</h5>';
                window.alert('선택된 재료가 없습니다.');
                return;
            }
            
            // 레시피 출력
            setTimeout(() => {
                const matchingRecipes = recipes.filter(recipe =>
                    selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
                );
        
                if (matchingRecipes.length > 0) {
                    recipeResultsContainer.innerHTML = matchingRecipes.map(recipe => `
                        <a href="recipe.html?name=${encodeURIComponent(recipe.name)}" class="recipe-link">
                            <div class="recipe" data-name="${recipe.name}">
                                <img src="${recipe.img}" alt="${recipe.name}" class="recipe-img">
                                <p>${recipe.name}</p>
                            </div>
                        </a>
                    `).join('');
        
                } else {
                    recipeResultsContainer.innerHTML = '<h5>레시피 검색 결과가 없습니다.</h5>';
                }
            }, 1000);
        }    
    
        // 초기화
        function resetSelection() {
            selectedIngredients.length = 0;
            renderSelectedIngredients();
            document.querySelectorAll('.ingredient').forEach(ingredientDiv => {
                ingredientDiv.style.border = '3px dotted #ffffff';
            });
            recipeResultsContainer.innerHTML = '';
        }
    });
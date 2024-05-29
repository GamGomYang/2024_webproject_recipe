document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        {
            id: 1,
            title: "오이 소박이 무침 황금 레시피/오이 김치 담그는 법/오이 부추 무침",
            link: "/recipe/6881934",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/08/1d1056ca6d99e84dd84e97f36dd0ad841_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1"
        },
        {
            id: 2,
            title: "마늘쫑고추장무침 만드는 법 : 10분만에 완성되는 간단한 밑반찬 ♩",
            link: "/recipe/6870562",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/31/0995721c55330ff87ca6dacdd0c51ccd1_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1"
        },
        {
            id: 3,
            title: "오이 소박이 무침 황금 레시피/오이 김치 담그는 법/오이 부추 무침",
            link: "/recipe/6881934",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/08/1d1056ca6d99e84dd84e97f36dd0ad841_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1"
        },
        {
            id: 4,
            title: "마늘쫑고추장무침 만드는 법 : 10분만에 완성되는 간단한 밑반찬 ♩",
            link: "/recipe/6870562",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/31/0995721c55330ff87ca6dacdd0c51ccd1_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1"
        },
        {
            id: 5,
            title: "오이 소박이 무침 황금 레시피/오이 김치 담그는 법/오이 부추 무침",
            link: "/recipe/6881934",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/08/1d1056ca6d99e84dd84e97f36dd0ad841_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1"
        },
        {
            id: 6,
            title: "마늘쫑고추장무침 만드는 법 : 10분만에 완성되는 간단한 밑반찬 ♩",
            link: "/recipe/6870562",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/31/0995721c55330ff87ca6dacdd0c51ccd1_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1138000"
        },
        {
            id: 7,
            title: "오이 소박이 무침 황금 레시피/오이 김치 담그는 법/오이 부추 무침",
            link: "/recipe/6881934",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/08/1d1056ca6d99e84dd84e97f36dd0ad841_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1030000"
        },
        {
            id: 8,
            title: "마늘쫑고추장무침 만드는 법 : 10분만에 완성되는 간단한 밑반찬 ♩",
            link: "/recipe/6870562",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/31/0995721c55330ff87ca6dacdd0c51ccd1_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1138000"
        },
        {
            id: 9,
            title: "오이 소박이 무침 황금 레시피/오이 김치 담그는 법/오이 부추 무침",
            link: "/recipe/6881934",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/08/1d1056ca6d99e84dd84e97f36dd0ad841_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1030000"
        },
        {
            id: 10,
            title: "마늘쫑고추장무침 만드는 법 : 10분만에 완성되는 간단한 밑반찬 ♩",
            link: "/recipe/6870562",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/31/0995721c55330ff87ca6dacdd0c51ccd1_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1138000"
        },
        {
            id: 11,
            title: "오이 소박이 무침 황금 레시피/오이 김치 담그는 법/오이 부추 무침",
            link: "/recipe/6881934",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/08/1d1056ca6d99e84dd84e97f36dd0ad841_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1030000"
        },
        {
            id: 12,
            title: "마늘쫑고추장무침 만드는 법 : 10분만에 완성되는 간단한 밑반찬 ♩",
            link: "/recipe/6870562",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/31/0995721c55330ff87ca6dacdd0c51ccd1_m.jpg",
            author: "관리자",
            authorImg: "../image/profileImage.png",
            rating: 5,
            reviews: 1,
            views: "1138000"
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
            const viewsA = getViewsFromLocalStorage(a.id) || parseInt(a.views, 10);
            const viewsB = getViewsFromLocalStorage(b.id) || parseInt(b.views, 10);
            return viewsB - viewsA;
        });
    }

    const recipeList = document.getElementById('recipeList');
    const loadMoreButton = document.getElementById('loadMore');

    let displayedRecipes = 12;

    function renderRecipes(recipes) {
        recipes.forEach((recipe, index) => {
            recipe.views = getViewsFromLocalStorage(recipe.id) || recipe.views;

            const col = document.createElement('div');
            col.classList.add('col-md-2', 'common_sp_list_li');
            col.style.flex = "0 0 calc(100% / 5)";

            col.innerHTML = `
                <div class="ranking-icon">${index + 1}</div>
                <div class="common_sp_thumb">
                    <a href="${recipe.link}" class="common_sp_link">
                        <img src="${recipe.image}" alt="${recipe.title}">
                    </a>
                </div>
                <div class="common_sp_caption">
                    <div class="common_sp_caption_tit line2">${recipe.title}</div>
                    <div class="common_sp_caption_rv_name">
                        <a href="#">
                            <img src="${recipe.authorImg}" alt="${recipe.author}">${recipe.author}
                        </a>
                    </div>
                    <div class="common_sp_caption_rv">
                        <span class="common_sp_caption_rv_star">
                            ${'<img src="https://recipe1.ezmember.co.kr/img/mobile/icon_star2_on.png" alt="Star">'.repeat(recipe.rating)}
                        </span>
                        <span class="common_sp_caption_rv_ea">(${recipe.reviews})</span>
                        <br>
                        <span class="common_sp_caption_buyer">조회수 <span class="views-count">${parseInt(recipe.views).toLocaleString()}</span></span>
                    </div>
                </div>
            `;

            const link = col.querySelector('.common_sp_link');
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const newViews = parseInt(recipe.views) + 1;
                recipe.views = newViews.toString();
                col.querySelector('.views-count').textContent = newViews.toLocaleString();
                saveViewsToLocalStorage(recipe.id, newViews);
                window.location.href = recipe.link; 
            });

            recipeList.appendChild(col);
        });
    }

    function loadMoreRecipes() {
        renderRecipes(recipes.slice(displayedRecipes, displayedRecipes + 10)); 
        displayedRecipes += 10;

        if (displayedRecipes >= recipes.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    loadMoreButton.addEventListener('click', function (event) {
        event.preventDefault();
        loadMoreRecipes();
    });


    const sortedRecipes = sortRecipesByViews(recipes);
    renderRecipes(sortedRecipes.slice(0, 12));
});
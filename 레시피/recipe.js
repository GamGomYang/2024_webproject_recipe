const recipes = [
    {
        id: 1,
        title: "오이무침",
        link: "/recipe/oi_muchim",
        image: "path_to_oi_muchim_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "오이", amount: "2개" },
            { name: "소금", amount: "1큰술" },
            { name: "다진 마늘", amount: "1작은술" },
            { name: "고춧가루", amount: "1큰술" },
            { name: "식초", amount: "1큰술" },
            { name: "설탕", amount: "1작은술" },
            { name: "참기름", amount: "1작은술" },
            { name: "깨소금", amount: "1작은술" },
            { name: "대파", amount: "1대 (다진 것)" }
        ],
        steps: [
            "오이는 깨끗이 씻어 길쭉하게 반으로 자른 후, 반달 모양으로 얇게 썰어줍니다.",
            "썬 오이에 소금 1큰술을 넣고 잘 섞은 후, 10분 정도 절여줍니다.",
            "10분 후 오이에서 나온 물기를 손으로 꼭 짜서 제거합니다.",
            "큰 볼에 다진 마늘, 고춧가루, 식초, 설탕, 참기름, 깨소금, 다진 대파를 넣고 잘 섞어 양념장을 만듭니다.",
            "물기를 뺀 오이를 양념장에 넣고 잘 버무립니다.",
            "모든 재료가 고루 섞이도록 가볍게 무쳐줍니다.",
            "무친 오이를 그릇에 담고, 필요시 위에 참깨를 추가로 뿌려줍니다."
        ]
    },
    {
        id: 2,
        title: "두부조림",
        link: "/recipe/dubu_jorim",
        image: "path_to_dubu_jorim_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "두부", amount: "1모" },
            { name: "간장", amount: "3큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "다진 마늘", amount: "1작은술" },
            { name: "참기름", amount: "1작은술" },
            { name: "물", amount: "1/2컵" },
            { name: "고춧가루", amount: "1작은술" },
            { name: "파", amount: "1대 (다진 것)" }
        ],
        steps: [
            "두부는 먹기 좋은 크기로 잘라줍니다.",
            "팬에 기름을 두르고 두부를 노릇하게 구워줍니다.",
            "간장, 설탕, 다진 마늘, 참기름, 물, 고춧가루를 섞어 양념장을 만듭니다.",
            "구운 두부에 양념장을 붓고 조려줍니다.",
            "다진 파를 넣고 한소끔 끓여 완성합니다."
        ]
    },
    {
        id: 3,
        title: "닭볶음탕",
        link: "/recipe/dak_bokkeumtang",
        image: "path_to_dak_bokkeumtang_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "닭", amount: "1마리 (작은 크기)" },
            { name: "감자", amount: "2개" },
            { name: "당근", amount: "1개" },
            { name: "양파", amount: "1개" },
            { name: "대파", amount: "1대" },
            { name: "고추장", amount: "2큰술" },
            { name: "고춧가루", amount: "2큰술" },
            { name: "간장", amount: "3큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "생강", amount: "약간" },
            { name: "물", amount: "3컵" }
        ],
        steps: [
            "닭은 먹기 좋은 크기로 잘라 깨끗이 씻어줍니다.",
            "감자, 당근, 양파는 큼직하게 썰어줍니다.",
            "냄비에 닭과 물을 넣고 끓여줍니다.",
            "끓어오르면 거품을 걷어내고, 고추장, 고춧가루, 간장, 설탕, 다진 마늘, 생강을 넣어줍니다.",
            "중불로 줄이고 감자, 당근을 넣고 익혀줍니다.",
            "야채가 익으면 양파와 대파를 넣고 한소끔 끓여 완성합니다."
        ]
    },
    {
        id: 4,
        title: "제육볶음",
        link: "/recipe/jeyuk_bokkeum",
        image: "path_to_jeyuk_bokkeum_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "돼지고기 (목살)", amount: "400g" },
            { name: "양파", amount: "1개" },
            { name: "대파", amount: "1대" },
            { name: "고추장", amount: "2큰술" },
            { name: "고춧가루", amount: "1큰술" },
            { name: "간장", amount: "2큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "참기름", amount: "1큰술" }
        ],
        steps: [
            "돼지고기는 먹기 좋은 크기로 썰어줍니다.",
            "양파와 대파는 채썰어줍니다.",
            "큰 볼에 고추장, 고춧가루, 간장, 설탕, 다진 마늘, 참기름을 넣고 양념장을 만듭니다.",
            "돼지고기를 양념장에 넣고 잘 버무려줍니다.",
            "팬에 기름을 두르고 돼지고기를 볶아줍니다.",
            "고기가 반쯤 익으면 양파와 대파를 넣고 함께 볶아줍니다.",
            "모든 재료가 잘 익고 양념이 고루 배이면 완성입니다."
        ]
    },
    {
        id: 5,
        title: "오이소박이",
        link: "/recipe/oisobagi",
        image: "path_to_oisobagi_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "오이", amount: "4개" },
            { name: "부추", amount: "1줌" },
            { name: "당근", amount: "1/4개" },
            { name: "양파", amount: "1/2개" },
            { name: "소금", amount: "2큰술" },
            { name: "고춧가루", amount: "3큰술" },
            { name: "마늘", amount: "5쪽" },
            { name: "생강", amount: "1톨" },
            { name: "새우젓", amount: "2큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "참기름", amount: "1큰술" },
            { name: "통깨", amount: "약간" }
        ],
        steps: [
            "오이는 깨끗이 씻어 3등분으로 자른 뒤, 각 부분을 십자 모양으로 칼집을 내줍니다.",
            "칼집 낸 오이에 소금을 뿌려 30분 정도 절입니다.",
            "절인 오이는 물에 헹궈 물기를 빼줍니다.",
            "부추, 당근, 양파는 채썰어 준비합니다.",
            "마늘과 생강은 다져줍니다.",
            "큰 볼에 채썬 부추, 당근, 양파를 넣고 고춧가루, 다진 마늘, 생강, 새우젓, 설탕, 참기름, 통깨를 넣고 잘 섞어 양념을 만듭니다.",
            "절인 오이에 양념을 채워줍니다.",
            "완성된 오이소박이는 하루 정도 실온에 두어 숙성시킨 후 냉장 보관합니다."
        ]
    },
    {
        id: 6,
        title: "오징어볶음",
        link: "/recipe/ojingeo_bokkeum",
        image: "path_to_ojingeo_bokkeum_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "오징어", amount: "2마리" },
            { name: "양파", amount: "1개" },
            { name: "당근", amount: "1/2개" },
            { name: "대파", amount: "1대" },
            { name: "고추", amount: "1개" },
            { name: "마늘", amount: "3쪽" },
            { name: "고춧가루", amount: "2큰술" },
            { name: "간장", amount: "2큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "참기름", amount: "1큰술" },
            { name: "깨", amount: "약간" },
            { name: "식용유", amount: "약간" }
        ],
        steps: [
            "오징어는 깨끗이 손질하여 먹기 좋은 크기로 썰어줍니다.",
            "양파, 당근, 대파, 고추는 채썰고, 마늘은 다져줍니다.",
            "팬에 식용유를 두르고 다진 마늘을 볶아 향을 냅니다.",
            "오징어를 넣고 볶다가 양파, 당근, 대파, 고추를 넣어줍니다.",
            "고춧가루, 간장, 설탕을 넣고 잘 섞어가며 볶습니다.",
            "마지막에 참기름과 깨를 뿌려 완성합니다."
        ]
    },
    {
        id: 7,
        title: "비빔국수",
        link: "/recipe/bibim_guksu",
        image: "path_to_bibim_guksu_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "소면", amount: "200g" },
            { name: "오이", amount: "1/2개" },
            { name: "당근", amount: "1/4개" },
            { name: "상추", amount: "2장" },
            { name: "삶은 계란", amount: "1개" },
            { name: "김가루", amount: "약간" },
            { name: "깨", amount: "약간" }
        ],
        sauce: [
            { name: "고추장", amount: "2큰술" },
            { name: "간장", amount: "1큰술" },
            { name: "식초", amount: "2큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "다진 마늘", amount: "1작은술" },
            { name: "참기름", amount: "1큰술" }
        ],
        steps: [
            "소면은 끓는 물에 삶아 찬물에 헹궈 물기를 빼줍니다.",
            "오이, 당근, 상추는 채썰어 준비합니다.",
            "양념장 재료를 모두 섞어 양념장을 만듭니다.",
            "삶은 소면에 양념장을 넣고 잘 버무립니다.",
            "그릇에 소면을 담고 채썬 오이, 당근, 상추를 올립니다.",
            "삶은 계란 반쪽과 김가루, 깨를 뿌려 완성합니다."
        ]
    },
    {
        id: 8,
        title: "콩나물국",
        link: "/recipe/kongnamul_guk",
        image: "path_to_kongnamul_guk_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "콩나물", amount: "300g" },
            { name: "대파", amount: "1대" },
            { name: "청양고추", amount: "1개" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "소금", amount: "1작은술" },
            { name: "국간장", amount: "1큰술" },
            { name: "물", amount: "1.5리터" }
        ],
        steps: [
            "콩나물은 깨끗이 씻어 준비합니다.",
            "대파는 어슷썰고, 청양고추는 잘게 썰어줍니다.",
            "냄비에 물을 넣고 끓입니다.",
            "물이 끓으면 콩나물을 넣고 5분 정도 끓입니다.",
            "다진 마늘, 소금, 국간장을 넣고 간을 맞춥니다.",
            "마지막에 대파와 청양고추를 넣고 한소끔 더 끓입니다.",
            "그릇에 담아 완성합니다."
        ]
    },
    {
        id: 9,
        title: "멸치볶음",
        link: "/recipe/myeolchi_bokkeum",
        image: "path_to_myeolchi_bokkeum_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "멸치 (잔멸치)", amount: "100g" },
            { name: "식용유", amount: "2큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "간장", amount: "1큰술" },
            { name: "물엿", amount: "1큰술" },
            { name: "다진 마늘", amount: "1작은술" },
            { name: "고추장", amount: "1작은술 (선택사항)" },
            { name: "통깨", amount: "약간" }
        ],
        steps: [
            "멸치는 기름을 두르지 않은 마른 팬에 살짝 볶아 비린내를 제거합니다.",
            "팬에 식용유를 두르고 다진 마늘을 넣어 볶아 향을 냅니다.",
            "볶아둔 멸치를 팬에 넣고 설탕과 간장을 넣어 볶습니다.",
            "물엿을 넣고 잘 섞어줍니다.",
            "고추장을 넣고 매콤하게 만들고 싶다면 이 단계에서 추가합니다.",
            "마지막으로 통깨를 뿌려 완성합니다."
        ]
    },
    {
        id: 10,
        title: "어묵볶음",
        link: "/recipe/eomuk_bokkeum",
        image: "path_to_eomuk_bokkeum_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "어묵", amount: "300g" },
            { name: "양파", amount: "1개" },
            { name: "당근", amount: "1/2개" },
            { name: "대파", amount: "1대" },
            { name: "식용유", amount: "2큰술" },
            { name: "간장", amount: "2큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "물엿", amount: "1큰술" },
            { name: "다진 마늘", amount: "1작은술" },
            { name: "참기름", amount: "1큰술" },
            { name: "깨", amount: "약간" }
        ],
        steps: [
            "어묵은 먹기 좋은 크기로 썰어줍니다.",
            "양파, 당근은 채썰고, 대파는 어슷썰어줍니다.",
            "팬에 식용유를 두르고 다진 마늘을 볶아 향을 냅니다.",
            "어묵을 넣고 볶다가 양파와 당근을 추가합니다.",
            "간장, 설탕, 물엿을 넣고 잘 섞어줍니다.",
            "마지막에 대파와 참기름을 넣고 볶아줍니다.",
            "깨를 뿌려 완성합니다."
        ]
    },
    {
        id: 11,
        title: "미역국",
        link: "/recipe/miyeok_guk",
        image: "path_to_miyeok_guk_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "마른 미역", amount: "20g" },
            { name: "소고기", amount: "150g" },
            { name: "간장", amount: "2큰술" },
            { name: "참기름", amount: "1큰술" },
            { name: "물", amount: "8컵" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "소금", amount: "약간" }
        ],
        steps: [
            "마른 미역을 물에 불려 부드럽게 만든 후 물기를 짭니다.",
            "소고기는 얇게 썰어줍니다.",
            "냄비에 참기름을 두르고 소고기를 넣어 볶아줍니다.",
            "소고기가 익으면 불린 미역을 넣고 함께 볶습니다.",
            "간장과 다진 마늘을 넣고 잘 섞어줍니다.",
            "물을 부어 끓입니다.",
            "끓기 시작하면 불을 줄여 30분 정도 끓여줍니다.",
            "마지막으로 소금으로 간을 맞춰줍니다."
        ]
    },
    {
        id: 12,
        title: "잡채",
        link: "/recipe/japchae",
        image: "path_to_japchae_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "당면", amount: "200g" },
            { name: "소고기", amount: "150g" },
            { name: "시금치", amount: "100g" },
            { name: "당근", amount: "1개" },
            { name: "양파", amount: "1개" },
            { name: "표고버섯", amount: "5개" },
            { name: "대파", amount: "1대" },
            { name: "간장", amount: "5큰술" },
            { name: "설탕", amount: "2큰술" },
            { name: "참기름", amount: "2큰술" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "깨", amount: "약간" },
            { name: "식용유", amount: "약간" }
        ],
        steps: [
            "당면을 찬물에 불려줍니다.",
            "소고기는 얇게 썰어 간장 1큰술, 설탕 1작은술, 다진 마늘 1작은술로 밑간합니다.",
            "시금치는 데쳐서 물기를 짠 후 참기름 약간과 소금을 넣고 무칩니다.",
            "당근, 양파, 표고버섯은 채썰고, 대파는 어슷썰어줍니다.",
            "팬에 식용유를 두르고 소고기를 볶아줍니다.",
            "같은 팬에 당근, 양파, 표고버섯, 대파를 각각 볶아줍니다.",
            "불린 당면을 끓는 물에 삶아 찬물에 헹궈 물기를 뺀 후 팬에 간장 4큰술, 설탕 2큰술, 참기름 2큰술을 넣고 볶아줍니다.",
            "큰 볼에 당면, 소고기, 볶은 채소들을 넣고 잘 섞어줍니다.",
            "마지막으로 깨를 뿌려 완성합니다."
        ]
    },
    {
        id: 13,
        title: "상추겉절이",
        link: "/recipe/sangchu_geotjeori",
        image: "path_to_sangchu_geotjeori_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "상추", amount: "1포기" },
            { name: "대파", amount: "1대" },
            { name: "고추장", amount: "1큰술" },
            { name: "고춧가루", amount: "1큰술" },
            { name: "간장", amount: "1큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "식초", amount: "2큰술" },
            { name: "다진 마늘", amount: "1작은술" },
            { name: "참기름", amount: "1큰술" },
            { name: "깨", amount: "약간" }
        ],
        steps: [
            "상추는 깨끗이 씻어 물기를 제거하고 한 입 크기로 썰어줍니다.",
            "대파는 어슷썰어줍니다.",
            "큰 볼에 상추와 대파를 넣고 고추장, 고춧가루, 간장, 설탕, 식초, 다진 마늘을 넣어 잘 섞어줍니다.",
            "마지막으로 참기름과 깨를 넣고 버무려 완성합니다."
        ]
    },
    {
        id: 14,
        title: "열무김치",
        link: "/recipe/yeolmu_kimchi",
        image: "path_to_yeolmu_kimchi_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "열무", amount: "1단" },
            { name: "소금", amount: "1컵" },
            { name: "물", amount: "10컵" },
            { name: "고춧가루", amount: "1컵" },
            { name: "다진 마늘", amount: "3큰술" },
            { name: "다진 생강", amount: "1큰술" },
            { name: "멸치 액젓", amount: "3큰술" },
            { name: "설탕", amount: "1큰술" },
            { name: "쪽파", amount: "1줌" }
        ],
        steps: [
            "열무를 깨끗이 씻어 5cm 길이로 썰어줍니다.",
            "큰 그릇에 물 10컵과 소금 1컵을 섞어 소금물을 만들고 열무를 넣어 1시간 정도 절입니다.",
            "절인 열무를 찬물에 헹궈 물기를 빼줍니다.",
            "쪽파는 5cm 길이로 썰어줍니다.",
            "큰 그릇에 고춧가루, 다진 마늘, 다진 생강, 멸치 액젓, 설탕을 넣어 양념장을 만듭니다.",
            "절인 열무와 쪽파를 양념장에 버무립니다.",
            "김치통에 담아 하루 정도 실온에 두었다가 냉장 보관합니다."
        ]
    },
    {
        id: 15,
        title: "계란찜",
        link: "/recipe/gyeran_jjim",
        image: "path_to_gyeran_jjim_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "계란", amount: "4개" },
            { name: "물", amount: "1컵" },
            { name: "소금", amount: "1작은술" },
            { name: "참기름", amount: "1작은술" },
            { name: "다진 파", amount: "1큰술" },
            { name: "다진 당근", amount: "1큰술" },
            { name: "새우젓", amount: "1작은술 (선택사항)" }
        ],
        steps: [
            "계란을 큰 볼에 깨뜨려 넣고 물과 소금을 넣어 잘 풀어줍니다.",
            "다진 파와 다진 당근을 넣어 섞어줍니다.",
            "작은 냄비나 뚝배기에 계란물을 부어줍니다.",
            "중약불에서 저어가며 익혀줍니다.",
            "계란이 거의 익었을 때 새우젓을 넣고 섞어줍니다.",
            "마지막으로 참기름을 둘러 완성합니다."
        ]
    },
    {
        id: 16,
        title: "소고기무국",
        link: "/recipe/sogogi_muguk",
        image: "path_to_sogogi_muguk_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "소고기 (국거리용)", amount: "200g" },
            { name: "무", amount: "1/3개" },
            { name: "대파", amount: "1대" },
            { name: "물", amount: "8컵" },
            { name: "간장", amount: "3큰술" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "소금", amount: "약간" },
            { name: "후추", amount: "약간" },
            { name: "참기름", amount: "1큰술" }
        ],
        steps: [
            "무는 먹기 좋은 크기로 썰어줍니다.",
            "소고기는 얇게 썰어줍니다.",
            "냄비에 참기름을 두르고 소고기를 볶아줍니다.",
            "소고기가 익으면 무를 넣고 함께 볶아줍니다.",
            "물을 붓고 끓입니다.",
            "끓기 시작하면 간장, 다진 마늘, 소금을 넣고 중불에서 20분 정도 끓입니다.",
            "마지막으로 대파를 썰어 넣고 후추를 뿌려 완성합니다."
        ]
    },
    {
        id: 17,
        title: "부대찌개",
        link: "/recipe/budae_jjigae",
        image: "path_to_budae_jjigae_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "소시지", amount: "200g" },
            { name: "스팸", amount: "200g" },
            { name: "두부", amount: "1/2모" },
            { name: "김치", amount: "1컵" },
            { name: "양파", amount: "1개" },
            { name: "대파", amount: "1대" },
            { name: "떡국떡", amount: "1컵" },
            { name: "라면사리", amount: "1개" },
            { name: "고추장", amount: "2큰술" },
            { name: "고춧가루", amount: "2큰술" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "국간장", amount: "2큰술" },
            { name: "물", amount: "6컵" }
        ],
        steps: [
            "소시지와 스팸은 먹기 좋은 크기로 썰어줍니다.",
            "두부는 깍둑썰기, 양파와 대파는 채썰어줍니다.",
            "냄비에 물을 붓고 김치를 넣어 끓입니다.",
            "고추장, 고춧가루, 다진 마늘, 국간장을 넣고 끓입니다.",
            "김치가 익으면 소시지, 스팸, 두부, 떡국떡을 넣고 끓입니다.",
            "라면사리를 넣고 끓여 완성합니다."
        ]
    },
    {
        id: 18,
        title: "메추리알 장조림",
        link: "/recipe/mechurial_jangjorim",
        image: "path_to_mechurial_jangjorim_image",
        author: "관리자",
        authorImg: "../image/profileImage.png",
        rating: 5,
        reviews: 1,
        views: "1",
        ingredients: [
            { name: "메추리알", amount: "20개" },
            { name: "소고기 (양지머리)", amount: "200g" },
            { name: "간장", amount: "1/2컵" },
            { name: "물", amount: "2컵" },
            { name: "설탕", amount: "2큰술" },
            { name: "맛술", amount: "2큰술" },
            { name: "다진 마늘", amount: "1큰술" },
            { name: "통깨", amount: "약간" }
        ],
        steps: [
            "메추리알은 삶아 껍질을 벗깁니다.",
            "소고기는 먹기 좋은 크기로 썰어줍니다.",
            "냄비에 물, 간장, 설탕, 맛술, 다진 마늘을 넣고 끓입니다.",
            "끓기 시작하면 소고기와 메추리알을 넣고 중불에서 졸입니다.",
            "국물이 자작해지면 불을 끄고 통깨를 뿌려 완성합니다."
        ]
    }
];

console.log(recipes);

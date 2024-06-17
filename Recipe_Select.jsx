import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Recipe.css';




import 우동 from './images/우동.webp'
import 연어스테이크 from './images/연어스테이크.webp'
import 초밥 from './images/초밥.jpg'
import 가츠동 from './images/가츠동.webp'
import 라멘 from './images/라멘.webp'
import kimchiJjigaeImage from './images/김치찌개.jpg';
import doenjangJjigaeImage from './images/된장찌개.jpg';
import bibimbapImage from './images/bibimbab.jpg';
import galbijjimImage from './images/galbi.jpg';
import gimbapImage from './images/kimbab.jpg';
import sundubuJjigaeImage from './images/sundubu.jpg';
import duruchigiImage from './images/두루치기.jpg';
import rabokkiImage from './images/라볶이.jpg';
import salmonSteakImage from './images/연어.jpg';
import shabuShabuImage from './images/샤브샤브.jpg';
import friedChickenImage from './images/치킨.jpg';
import chopSteakImage from './images/chopsteak.jpg';
import vietnamSpringRollImage from './images/월남쌈.jpg';
import tofuJorimImage from './images/두부조림.png';
import dakbokkeumtangImage from './images/닭볶음탕.png';
import cucumberKimchiImage from './images/오이소박이.png';
import squidBokkeumImage from './images/오징어볶음.png';
import bibimNoodlesImage from './images/비빔국수.png';
import kongnamulGukImage from './images/콩나물국.png';
import stirFriedAnchoviesImage from './images/멸치볶음.jpg';
import stirFriedFishCakeImage from './images/어묵볶음.jpg';
import seaweedSoupImage from './images/미역국.png';
import japchaeImage from './images/잡채.jpg';
import lettuceKimchiImage from './images/상추겉절이.png';
import youngRadishKimchiImage from './images/열무김치.jpg';
import steamedEggImage from './images/계란찜.jpg';
import armyStewImage from './images/부대찌개.png';
import quailEggJorimImage from './images/메추리알장조림.jpg';
import eggplantBokkeumImage from './images/가지볶음.png';
import radishSaladImage from './images/무생채.png';
import garlicChivesImage from './images/마늘쫑.png';
import chiveSaladImage from './images/부추무침.png';
import chivePancakeImage from './images/부추전.png';
import banquetNoodlesImage from './images/잔치국수.png';
import driedSquidBokkeumImage from './images/진미채볶음.png';
import eggSoupImage from './images/계란국.png';
import beefBulgogiImage from './images/소불고기.png';
import dakgalbiImage from './images/닭갈비.png';
import curryImage from './images/카레.png';

import korean from './images/category/korean.svg';
import chinese from './images/category/chinese.svg';
import japanese from './images/category/japanese.svg';
import western from './images/category/western.svg';
import banchan from './images/반찬3.png';

const recipes = {
  "김치찌개": {
    title: "김치찌개 레시피",
    image: kimchiJjigaeImage,
    category: "한식",
    servings: "4인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
      "물 - 6컵",
      "김치 - 2컵",
      "돼지고기 (목살 또는 등심) - 200g",
      "두부 - 1/2모",
      "양파 - 1/2개",
      "대파 - 1대",
      "고춧가루 - 2큰술",
      "다진 마늘 - 1큰술",
      "된장 - 1큰술",
      "고추장 - 1큰술",
      "소금 - 약간",
      "참기름 - 1큰술"
    ],
    instructions: [
      "냄비에 물을 붓고 끓입니다.",
      "끓기 시작하면 다진 마늘, 고추장, 고춧가루, 간장을 넣고 잘 섞어줍니다.",
      "김치를 넣고 양념이 골고루 베이도록 저어가면서 끓입니다.",
      "돼지고기를 넣고 익힙니다.",
      "양파와 대파를 넣고 끓입니다.",
      "두부를 넣고 끓입니다.",
      "맛을 보고 소금으로 간을 맞추고 참기름을 넣습니다.",
      "끓기 시작하면 대파를 넣고 완성합니다."
    ]
  },
  "된장찌개": {
    title: "된장찌개 레시피",
    image: doenjangJjigaeImage,
    category: "한식",
    servings: "4인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "된장 - 3큰술",
        "물 - 4컵",
        "대파 - 1대",
        "무 - 1/4개",
        "양파 - 1/2개",
        "고추 - 1개",
        "마늘 - 4쪽",
        "고춧가루 - 1큰술",
        "참기름 - 1큰술",
        "소금 - 약간"
    ],
    instructions: [
        "냄비에 물을 붓고 물이 끓을 때까지 대파, 무, 양파, 고추, 마늘을 넣고 끓입니다.",
        "끓기 시작하면 된장, 고춧가루를 넣고 잘 섞어줍니다.",
        "모든 재료가 잘 끓으면 참기름을 넣고 소금으로 간을 맞춥니다.",
        "마지막으로 대파를 손질해서 넣고 한소끔 끓인 후 완성합니다."
    ]
  },
  "비빔밥": {
    title: "비빔밥 레시피",
    image: bibimbapImage,
    category: "한식",
    servings: "1인분",
    time: "약 20분",
    difficulty: "하",
    ingredients: [
        "밥 - 1공기",
        "시금치 - 50g",
        "콩나물 - 50g",
        "애호박 - 1/4개",
        "당근 - 1/4개",
        "무나물 - 50g",
        "쇠고기 (다진 것) - 50g",
        "달걀 - 1개",
        "고추장 - 1큰술",
        "참기름 - 1/2큰술",
        "간장 - 1/2큰술",
        "다진 마늘 - 1작은술",
        "설탕 - 1작은술",
        "소금 - 약간",
        "깨소금 - 약간"
    ],
    instructions: [
        "시금치는 데쳐서 소금과 참기름을 넣고 무칩니다.",
        "콩나물은 삶아서 소금과 참기름을 넣고 무칩니다.",
        "애호박과 당근은 채 썰어 볶아줍니다.",
        "무나물은 채 썰어 볶아줍니다.",
        "다진 쇠고기는 간장, 다진 마늘, 설탕을 넣고 볶아줍니다.",
        "달걀은 프라이팬에 부쳐줍니다.",
        "그릇에 밥을 담고 각종 나물과 고기를 올린 후 달걀 프라이를 올립니다.",
        "고추장과 참기름, 깨소금을 곁들여 비빔밥을 완성합니다."
    ]
  },
  "갈비찜": {
    title: "갈비찜 레시피",
    image: galbijjimImage,
    category: "한식",
    servings: "1인분",
    time: "약 90분",
    difficulty: "어려움",
    ingredients: [
        "소갈비 - 200g",
        "당근 - 1/4개",
        "무 - 50g",
        "표고버섯 - 2개",
        "양파 - 1/4개",
        "대파 - 1/2대",
        "마늘 - 2쪽",
        "간장 - 2큰술",
        "설탕 - 1큰술",
        "참기름 - 1작은술",
        "후추 - 약간",
        "깨소금 - 약간"
    ],
    instructions: [
        "소갈비를 찬물에 담가 핏물을 제거합니다.",
        "냄비에 물을 끓이고 소갈비를 넣어 한 번 데친 후 물을 버립니다.",
        "당근, 무, 표고버섯, 양파를 먹기 좋은 크기로 썰어줍니다.",
        "냄비에 간장, 설탕, 참기름, 다진 마늘, 후추를 넣고 양념을 만듭니다.",
        "양념에 소갈비를 넣고 잘 섞어줍니다.",
        "중불에서 약 60분 동안 끓입니다.",
        "준비한 채소를 넣고 20분 더 끓입니다.",
        "깨소금을 뿌려 마무리합니다."
    ]
  },
  "김밥": {
    title: "김밥 레시피",
    image: gimbapImage,
    category: "한식",
    servings: "1인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "김 - 1장",
        "밥 - 1공기",
        "당근 - 1/4개",
        "오이 - 1/4개",
        "단무지 - 1줄",
        "계란 - 1개",
        "시금치 - 30g",
        "햄 - 1줄",
        "참기름 - 1작은술",
        "소금 - 약간",
        "깨소금 - 약간"
    ],
    instructions: [
        "당근과 오이는 길게 채 썰어줍니다.",
        "계란을 풀어 소금으로 간을 하고 얇게 부쳐줍니다.",
        "햄은 길게 썰어 볶아줍니다.",
        "시금치는 데쳐서 소금과 참기름으로 무칩니다.",
        "밥에 소금과 참기름을 넣고 고루 섞어줍니다.",
        "김 위에 밥을 고루 펴고 준비한 재료들을 올립니다.",
        "김밥을 단단히 말아줍니다.",
        "먹기 좋은 크기로 썰어 완성합니다."
    ]
  },
  "순두부찌개": {
    title: "순두부찌개 레시피",
    image: sundubuJjigaeImage,
    category: "한식",
    servings: "4인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "순두부 - 1팩",
        "돼지고기 다짐육 - 100g",
        "대파 - 1대",
        "양파 - 1/2개",
        "고추 - 1개",
        "마늘 - 3쪽",
        "고추기름 - 1큰술",
        "고춧가루 - 1큰술",
        "간장 - 2큰술",
        "물 - 3컵",
        "참기름 - 1큰술",
        "소금 - 약간"
    ],
    instructions: [
        "대파와 양파, 고추를 잘게 썰고, 마늘은 다집니다.",
        "냄비에 고추기름을 두르고 마늘과 돼지고기 다짐육을 넣고 볶아줍니다.",
        "고기가 어느 정도 익으면 대파, 양파, 고추를 넣고 볶습니다.",
        "간장과 고춧가루를 넣고 잘 섞어줍니다.",
        "물 3컵을 넣고 끓입니다.",
        "물이 끓으면 순두부를 넣고 살살 저어줍니다.",
        "참기름을 넣고 소금으로 간을 맞춥니다.",
        "한소끔 끓인 후 불을 끄고 완성합니다."
    ]
  },
  "두루치기": {
    title: "두루치기 레시피",
    image: duruchigiImage,
    category: "한식",
    servings: "2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "돼지고기 살치살 - 300g",
        "양파 - 1개",
        "파 - 1대",
        "당근 - 1/2개",
        "대파 - 1대",
        "마늘 - 2쪽",
        "청양고추 - 2개",
        "고추장 - 2큰술",
        "고추가루 - 2큰술",
        "간장 - 1큰술",
        "청주 - 1큰술",
        "설탕 - 1큰술"
    ],
    instructions: [
        "돼지고기 살치살을 적당한 크기로 잘라주세요.",
        "양파, 파, 대파, 마늘, 당근을 채 썰어주세요.",
        "팬에 식용유를 두르고 마늘을 볶다가 돼지고기를 넣고 볶아주세요.",
        "양파, 대파, 당근을 넣고 볶아주세요.",
        "고추장, 고추가루, 간장, 청주, 설탕을 넣고 볶아주세요.",
        "끓은 물을 넣고 뚜껑을 덮어 조려주세요."
    ]
  },
  "라볶이": {
    title: "라볶이 레시피",
    image: rabokkiImage,
    category: "한식",
    servings: "2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "라면 - 1개",
        "떡볶이 떡 - 200g",
        "어묵 - 100g",
        "양배추 - 50g",
        "대파 - 1대",
        "물 - 500ml",
        "고추장 - 2큰술",
        "고춧가루 - 1큰술",
        "간장 - 1큰술",
        "설탕 - 1큰술",
        "다진 마늘 - 1작은술",
        "소금, 후추 - 약간"
    ],
    instructions: [
        "냄비에 물 500ml를 넣고 끓입니다.",
        "물이 끓으면 고추장, 고춧가루, 간장, 설탕, 다진 마늘을 넣고 잘 섞어 양념장을 만듭니다.",
        "떡볶이 떡, 어묵, 양배추를 넣고 끓입니다.",
        "떡이 부드러워지면 라면과 대파를 넣고 익을 때까지 끓입니다.",
        "소금과 후추로 간을 맞추고 완성된 라볶이를 그릇에 담아냅니다."
    ]
  },
  "연어 스테이크": {
    title: "연어 스테이크 레시피",
    image: salmonSteakImage,
    category: "양식",
    servings: "2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "연어 - 300g",
        "올리브 오일 - 2큰술",
        "레몬 - 1개",
        "다진 마늘 - 1큰술",
        "다진 양파 - 1/4컵",
        "다진 파슬리 - 1큰술",
        "소금 - 1/2작은술",
        "후추 - 약간"
    ],
    instructions: [
        "연어를 손질하여 적당한 크기로 자릅니다.",
        "올리브 오일, 레몬 주스, 다진 마늘, 다진 양파, 다진 파슬리, 소금, 후추를 섞어 마리네이드를 만듭니다.",
        "마리네이드한 연어를 케이크 모양으로 만들고 그릴에 구워줍니다.",
        "완성된 연어에 파슬리를 뿌려내어 주세요."
    ]
  },
  "샤브샤브": {
    title: "샤브샤브 레시피",
    image: shabuShabuImage,
    category: "일식",
    servings: "2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "소고기 (샤브샤브용) - 200g",
        "배추 - 100g",
        "시금치 - 100g",
        "버섯 (팽이버섯, 표고버섯 등) - 100g",
        "당근 - 1개",
        "무 - 1/2개",
        "두부 - 100g",
        "샤브샤브 육수 - 1L",
        "간장 - 2큰술",
        "다진 마늘 - 1큰술",
        "참기름 - 1작은술",
        "소금, 후추 - 약간"
    ],
    instructions: [
        "샤브샤브 육수를 준비합니다. (물 1L에 간장 2큰술, 다진 마늘 1큰술, 참기름 1작은술, 소금과 후추를 약간 넣고 끓입니다.)",
        "야채와 두부를 먹기 좋은 크기로 썹니다. 버섯도 적당한 크기로 자릅니다.",
        "소고기를 얇게 썰어 준비합니다.",
        "끓는 육수에 무, 당근을 넣고 익힙니다.",
        "육수가 끓기 시작하면 준비한 야채와 두부를 넣고 익힙니다.",
        "마지막으로 소고기를 넣고 살짝 익혀서 먹습니다. 고기는 얇기 때문에 금방 익습니다.",
        "준비된 소스에 찍어 먹습니다."
    ]
  },
  "치킨": {
    title: "치킨 레시피",
    image: friedChickenImage,
    category: "양식",
    servings: "3인분",
    time: "약 60분",
    difficulty: "중",
    ingredients: [
        "닭가슴살 - 300g",
        "올리브 오일 - 2큰술",
        "마늘 - 4쪽",
        "양파 - 1/2개",
        "파프리카 - 1/2개",
        "고추 - 1개",
        "간장 - 2큰술",
        "설탕 - 1큰술",
        "후추 - 약간"
    ],
    instructions: [
        "닭가슴살을 손질하여 적당한 크기로 자릅니다.",
        "양파, 마늘, 파프리카, 고추를 잘게 다진 후 준비합니다.",
        "팬에 올리브 오일을 두르고 마늘을 볶다가 닭가슴살을 넣고 익힙니다.",
        "양파, 파프리카, 고추를 넣고 볶습니다.",
        "간장, 설탕, 후추로 간을 맞춘 후 완성합니다."
    ]
  },
  "찹스테이크": {
    title: "찹스테이크 레시피",
    image: chopSteakImage,
    category: "양식",
    servings: "2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "소고기 - 300g",
        "양파 - 1/2개",
        "파프리카 - 1/2개",
        "마요네즈 - 2큰술",
        "올리브 오일 - 1큰술",
        "소금 - 약간",
        "후추 - 약간"
    ],
    instructions: [
        "소고기를 잘게 다지고 양파와 파프리카도 잘게 다져 준비합니다.",
        "잘게 다진 소고기에 마요네즈, 소금, 후추를 넣고 잘 섞습니다.",
        "팬에 올리브 오일을 두르고 소고기를 동글모양으로 모양을 잡아 구워줍니다."
    ]
  },
  "월남쌈": {
    title: "월남쌈 레시피",
    image: vietnamSpringRollImage,
    category: "기타",
    servings: "2인분",
    time: "약 30분",
    difficulty: "하",
    ingredients: [
        "라이스페이퍼 - 20장",
        "새우 - 200g",
        "돼지고기 - 200g",
        "당근 - 1개",
        "오이 - 1개",
        "상추 - 1다발",
        "쌀국수 - 100g",
        "깻잎 - 10장",
        "고수 - 약간",
        "땅콩소스 - 1컵",
        "피시소스 - 1/2컵"
    ],
    instructions: [
        "새우와 돼지고기를 끓는 물에 삶아 익힙니다.",
        "당근과 오이를 채썰고 상추와 깻잎을 씻어 준비합니다.",
        "쌀국수를 삶아 찬물에 헹궈 준비합니다.",
        "라이스페이퍼를 따뜻한 물에 적셔서 부드럽게 만듭니다.",
        "라이스페이퍼 위에 준비한 재료를 올리고 싸서 월남쌈을 만듭니다.",
        "땅콩소스와 피시소스를 곁들여 먹습니다."
    ]
  },
  "두부조림": {
    title: "두부조림 레시피",
    image: tofuJorimImage,
    category: "반찬",
    servings: "1인분",
    time: "약 15분",
    difficulty: "하",
    ingredients: [
        "두부 - 1모",
        "간장 - 3큰술",
        "설탕 - 1큰술",
        "다진 마늘 - 1작은술",
        "참기름 - 1작은술",
        "물 - 1/2컵",
        "고춧가루 - 1작은술",
        "파 - 1대 (다진 것)"
    ],
    instructions: [
        "두부는 먹기 좋은 크기로 잘라 줍니다.",
        "팬에 기름을 두르고 두부를 노릇하게 구워 줍니다.",
        "간장, 설탕, 다진 마늘, 참기름, 물, 고춧가루를 섞어 양념장을 만듭니다.",
        "구운 두부에 양념장을 붓고 조려 줍니다.",
        "다진 파를 넣고 한소끔 끓여 완성합니다."
    ]
  },
  "닭볶음탕": {
    title: "닭볶음탕 레시피",
    image: dakbokkeumtangImage,
    category: "한식",
    servings: "2인분",
    time: "약 40분",
    difficulty: "중",
    ingredients: [
        "닭 - 1마리 (작은 크기)",
        "감자 - 2개",
        "당근 - 1개",
        "양파 - 1개",
        "대파 - 1대",
        "고추장 - 2큰술",
        "고춧가루 - 2큰술",
        "간장 - 3큰술",
        "설탕 - 1큰술",
        "다진 마늘 - 1큰술",
        "생강 - 약간",
        "물 - 3컵"
    ],
    instructions: [
        "닭은 먹기 좋은 크기로 잘라 깨끗이 씻어 줍니다.",
        "감자, 당근, 양파는 큼직하게 썰어 줍니다.",
        "냄비에 닭과 물을 넣고 끓여 줍니다.",
        "끓어오르면 거품을 걷어내고, 고추장, 고춧가루, 간장, 설탕, 다진 마늘, 생강을 넣어 줍니다.",
        "중불로 줄이고 감자, 당근을 넣고 익혀 줍니다.",
        "야채가 익으면 양파와 대파를 넣고 한소끔 끓여 완성합니다."
    ]
  },
  "오이소박이": {
    title: "오이소박이 레시피",
    image: cucumberKimchiImage,
    category: "반찬",
    servings: "약 2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "오이 - 4개",
        "부추 - 1줌",
        "당근 - 1/4개",
        "양파 - 1/2개",
        "소금 - 2큰술",
        "고춧가루 - 3큰술",
        "마늘 - 5쪽",
        "생강 - 1톨",
        "새우젓 - 2큰술",
        "설탕 - 1큰술",
        "참기름 - 1큰술",
        "통깨 - 약간"
    ],
    instructions: [
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
  "오징어볶음": {
    title: "오징어볶음 레시피",
    image: squidBokkeumImage,
    category: "반찬",
    servings: "2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "오징어 - 2마리",
        "양파 - 1개",
        "당근 - 1/2개",
        "대파 - 1대",
        "고추 - 1개",
        "마늘 - 3쪽",
        "고춧가루 - 2큰술",
        "간장 - 2큰술",
        "설탕 - 1큰술",
        "참기름 - 1큰술",
        "깨 - 약간",
        "식용유 - 약간"
    ],
    instructions: [
        "오징어는 깨끗이 손질하여 먹기 좋은 크기로 썰어줍니다.",
        "양파, 당근, 대파, 고추는 채썰고, 마늘은 다져줍니다.",
        "팬에 식용유를 두르고 다진 마늘을 볶아 향을 냅니다.",
        "오징어를 넣고 볶다가 양파, 당근, 대파, 고추를 넣어줍니다.",
        "고춧가루, 간장, 설탕을 넣고 잘 섞어가며 볶습니다.",
        "마지막에 참기름과 깨를 뿌려 완성합니다."
    ]
  },
  "비빔국수": {
    title: "비빔국수 레시피",
    image: bibimNoodlesImage,
    category: "한식",
    servings: "2인분",
    time: "약 20분",
    difficulty: "하",
    ingredients: [
        "소면 - 200g",
        "오이 - 1/2개",
        "당근 - 1/4개",
        "상추 - 2장",
        "삶은 계란 - 1개",
        "김가루 - 약간",
        "깨 - 약간",
        "고추장 - 2큰술",
        "간장 - 1큰술",
        "식초 - 2큰술",
        "설탕 - 1큰술",
        "다진 마늘 - 1작은술",
        "참기름 - 1큰술"
    ],
    instructions: [
        "소면은 끓는 물에 삶아 찬물에 헹궈 물기를 빼줍니다.",
        "오이, 당근, 상추는 채썰어 준비합니다.",
        "양념장 재료를 모두 섞어 양념장을 만듭니다.",
        "삶은 소면에 양념장을 넣고 잘 버무립니다.",
        "그릇에 소면을 담고 채썬 오이, 당근, 상추를 올립니다.",
        "삶은 계란 반쪽과 김가루, 깨를 뿌려 완성합니다."
    ]
  },
  "콩나물국": {
    title: "콩나물국 레시피",
    image: kongnamulGukImage,
    category: "한식",
    servings: "2인분",
    time: "약 30분",
    difficulty: "하",
    ingredients: [
        "콩나물 - 300g",
        "대파 - 1대",
        "청양고추 - 1개",
        "다진 마늘 - 1큰술",
        "소금 - 1작은술",
        "국간장 - 1큰술",
        "물 - 1.5리터"
    ],
    instructions: [
        "콩나물은 깨끗이 씻어 준비합니다.",
        "대파는 어슷썰고, 청양고추는 잘게 썰어줍니다.",
        "냄비에 물을 넣고 끓입니다.",
        "물이 끓으면 콩나물을 넣고 5분 정도 끓입니다.",
        "다진 마늘, 소금, 국간장을 넣고 간을 맞춥니다.",
        "마지막에 대파와 청양고추를 넣고 한소끔 더 끓입니다.",
        "그릇에 담아 완성합니다."
    ]
  },
  "멸치볶음": {
    title: "멸치볶음 레시피",
    image: stirFriedAnchoviesImage,
    category: "반찬",
    servings: "2인분",
    time: "약 15분",
    difficulty: "하",
    ingredients: [
        "멸치 (잔멸치) - 100g",
        "식용유 - 2큰술",
        "설탕 - 1큰술",
        "간장 - 1큰술",
        "물엿 - 1큰술",
        "다진 마늘 - 1작은술",
        "고추장 - 1작은술 (선택사항)",
        "통깨 - 약간"
    ],
    instructions: [
        "멸치는 기름을 두르지 않은 마른 팬에 살짝 볶아 비린내를 제거합니다.",
        "팬에 식용유를 두르고 다진 마늘을 넣어 볶아 향을 냅니다.",
        "볶아둔 멸치를 팬에 넣고 설탕과 간장을 넣어 볶습니다.",
        "물엿을 넣고 잘 섞어줍니다.",
        "고추장을 넣고 매콤하게 만들고 싶다면 이 단계에서 추가합니다.",
        "마지막으로 통깨를 뿌려 완성합니다."
    ]
  },
  "어묵볶음": {
    title: "어묵볶음 레시피",
    image: stirFriedFishCakeImage,
    category: "반찬",
    servings: "2-3인분",
    time: "약 20분",
    difficulty: "중",
    ingredients: [
        "어묵 - 300g",
        "양파 - 1개",
        "당근 - 1/2개",
        "대파 - 1대",
        "식용유 - 2큰술",
        "간장 - 2큰술",
        "설탕 - 1큰술",
        "물엿 - 1큰술",
        "다진 마늘 - 1작은술",
        "참기름 - 1큰술",
        "깨 - 약간"
    ],
    instructions: [
        "어묵은 먹기 좋은 크기로 썰어줍니다.",
        "양파, 당근은 채썰고, 대파는 어슷썰어줍니다.",
        "팬에 식용유를 두르고 다진 마늘을 볶아 향을 냅니다.",
        "어묵을 넣고 볶다가 양파와 당근을 추가합니다.",
        "간장, 설탕, 물엿을 넣고 잘 섞어줍니다.",
        "마지막에 대파와 참기름을 넣고 볶아줍니다.",
        "깨를 뿌려 완성합니다."
    ]
  },
  "미역국": {
    title: "미역국 레시피",
    image: seaweedSoupImage,
    category: "국물 요리",
    servings: "4인분",
    time: "약 45분",
    difficulty: "중",
    ingredients: [
        "마른 미역 - 20g",
        "소고기 - 150g",
        "간장 - 2큰술",
        "참기름 - 1큰술",
        "물 - 8컵",
        "다진 마늘 - 1큰술",
        "소금 - 약간"
    ],
    instructions: [
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
  "잡채": {
    title: "잡채 레시피",
    image: japchaeImage,
    category: "메인 요리",
    servings: "4인분",
    time: "약 40분",
    difficulty: "중",
    ingredients: [
        "당면 - 200g",
        "소고기 - 150g",
        "시금치 - 100g",
        "당근 - 1개",
        "양파 - 1개",
        "표고버섯 - 5개",
        "대파 - 1대",
        "간장 - 5큰술",
        "설탕 - 2큰술",
        "참기름 - 2큰술",
        "다진 마늘 - 1큰술",
        "깨 - 약간",
        "식용유 - 약간"
    ],
    instructions: [
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
  "상추겉절이": {
    title: "상추겉절이 레시피",
    image: lettuceKimchiImage,
    category: "반찬",
    servings: "2-3인분",
    time: "약 15분",
    difficulty: "하",
    ingredients: [
        "상추 - 1포기",
        "대파 - 1대",
        "고추장 - 1큰술",
        "고춧가루 - 1큰술",
        "간장 - 1큰술",
        "설탕 - 1큰술",
        "식초 - 2큰술",
        "다진 마늘 - 1작은술",
        "참기름 - 1큰술",
        "깨 - 약간"
    ],
    instructions: [
        "상추는 깨끗이 씻어 물기를 제거하고 한 입 크기로 썰어줍니다.",
        "대파는 어슷썰어줍니다.",
        "큰 볼에 상추와 대파를 넣고 고추장, 고춧가루, 간장, 설탕, 식초, 다진 마늘을 넣어 잘 섞어줍니다.",
        "마지막으로 참기름과 깨를 넣고 버무려 완성합니다."
    ]
  },
  "열무김치": {
    title: "열무김치 레시피",
    image: youngRadishKimchiImage,
    category: "김치",
    servings: "한 그릇",
    time: "약 1시간 30분 (절임 시간 포함)",
    difficulty: "중",
    ingredients: [
        "열무 - 1단",
        "소금 - 1컵",
        "물 - 10컵",
        "고춧가루 - 1컵",
        "다진 마늘 - 3큰술",
        "다진 생강 - 1큰술",
        "멸치 액젓 - 3큰술",
        "설탕 - 1큰술",
        "쪽파 - 1줌"
    ],
    instructions: [
        "열무를 깨끗이 씻어 5cm 길이로 썰어줍니다.",
        "큰 그릇에 물 10컵과 소금 1컵을 섞어 소금물을 만들고 열무를 넣어 1시간 정도 절입니다.",
        "절인 열무를 찬물에 헹궈 물기를 빼줍니다.",
        "쪽파는 5cm 길이로 썰어줍니다.",
        "큰 그릇에 고춧가루, 다진 마늘, 다진 생강, 멸치 액젓, 설탕을 넣어 양념장을 만듭니다.",
        "절인 열무와 쪽파를 양념장에 버무립니다.",
        "김치통에 담아 하루 정도 실온에 두었다가 냉장 보관합니다."
    ]
  },
  "계란찜": {
    title: "계란찜 레시피",
    image: steamedEggImage,
    category: "반찬",
    servings: "2-3인분",
    time: "약 15분",
    difficulty: "하",
    ingredients: [
        "계란 - 4개",
        "물 - 1컵",
        "소금 - 1작은술",
        "참기름 - 1작은술",
        "다진 파 - 1큰술",
        "다진 당근 - 1큰술",
        "새우젓 - 1작은술 (선택사항)"
    ],
    instructions: [
        "계란을 큰 볼에 깨뜨려 넣고 물과 소금을 넣어 잘 풀어줍니다.",
        "다진 파와 다진 당근을 넣어 섞어줍니다.",
        "작은 냄비나 뚝배기에 계란물을 부어줍니다.",
        "중약불에서 저어가며 익혀줍니다.",
        "계란이 거의 익었을 때 새우젓을 넣고 섞어줍니다 (선택사항).",
        "마지막으로 참기름을 둘러 완성합니다."
    ]
  },
  "부대찌개": {
    title: "부대찌개 레시피",
    image: armyStewImage,
    category: "한식",
    servings: "4인분",
    time: "약 40분",
    difficulty: "중",
    ingredients: [
        "소시지 - 200g",
        "스팸 - 200g",
        "두부 - 1/2모",
        "김치 - 1컵",
        "양파 - 1개",
        "대파 - 1대",
        "떡국떡 - 1컵",
        "라면사리 - 1개",
        "고추장 - 2큰술",
        "고춧가루 - 2큰술",
        "다진 마늘 - 1큰술",
        "국간장 - 2큰술",
        "물 - 6컵"
    ],
    instructions: [
        "소시지와 스팸은 먹기 좋은 크기로 썰어줍니다.",
        "두부는 깍둑썰기, 양파와 대파는 채썰어줍니다.",
        "냄비에 물을 붓고 김치를 넣어 끓입니다.",
        "고추장, 고춧가루, 다진 마늘, 국간장을 넣고 끓입니다.",
        "김치가 익으면 소시지, 스팸, 두부, 떡국떡을 넣고 끓입니다.",
        "라면사리를 넣고 끓여 완성합니다."
    ]
  },
  "메추리알 장조림": {
    title: "메추리알 장조림 레시피",
    image: quailEggJorimImage,
    category: "반찬",
    servings: "4인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "메추리알 - 20개",
        "소고기 (양지머리) - 200g",
        "간장 - 1/2컵",
        "물 - 2컵",
        "설탕 - 2큰술",
        "맛술 - 2큰술",
        "다진 마늘 - 1큰술",
        "통깨 - 약간"
    ],
    instructions: [
        "메추리알은 삶아 껍질을 벗깁니다.",
        "소고기는 먹기 좋은 크기로 썰어줍니다.",
        "냄비에 물, 간장, 설탕, 맛술, 다진 마늘을 넣고 끓입니다.",
        "끓기 시작하면 소고기와 메추리알을 넣고 중불에서 졸입니다.",
        "국물이 자작해지면 불을 끄고 통깨를 뿌려 완성합니다."
    ]
  },
  "가지볶음": {
    title: "가지볶음 레시피",
    image: eggplantBokkeumImage,
    category: "반찬",
    servings: "3인분",
    time: "15분 이내",
    difficulty: "중",
    ingredients: [
        "가지 - 2개",
        "고추 - 1개",
        "양파 - 1/4개",
        "대파 - 1대",
        "참기름 - 1큰술",
        "통깨 - 0.5큰술",
        "간장 - 2큰술",
        "굴소스 - 1큰술",
        "설탕 - 1큰술",
        "다진마늘 - 0.5큰술",
        "고춧가루 - 0.5큰술"
    ],
    instructions: [
        "먼저 가지를 먹기 좋게 썰어줍니다. 동그랗게 썰어도 좋고, 손가락만 하게 썰어도 좋습니다.",
        "양파는 채썰고, 대파와 고추는 너무 얇게 썰지 않게 쫑쫑 썰어줍니다.",
        "양념장 재료를 모두 섞어 준비합니다.",
        "넉넉하게 기름을 두른 팬에 대파를 먼저 넣고 볶아서 파 향을 내어 줍니다. 파가 노릇해질 때까지 볶아줍니다.",
        "볶은 대파에 가지와 양파를 넣고 계속 볶아줍니다.",
        "가지가 어느 정도 익으면 준비한 양념장을 넣고 양념이 골고루 베이도록 볶아줍니다.",
        "완성 직전에 참기름을 한 큰술 둘러주고 고추를 넣어줍니다. 지금 고추를 넣으면 씹히는 맛이 좋습니다.",
        "마지막으로 통깨를 뿌려 완성합니다."
    ]
  },
  "무생채": {
    title: "무생채 레시피",
    image: radishSaladImage,
    category: "반찬",
    servings: "6인분",
    time: "15분 이내",
    difficulty: "하",
    ingredients: [
        "무 - 600g",
        "고춧가루 - 2큰술",
        "다진 마늘 - 1큰술",
        "설탕 - 1큰술",
        "오미자청(또는 매실청) - 1큰술",
        "식초 - 2큰술",
        "액젓 - 2큰술",
        "소금 - 적당량",
        "통깨 - 적당량",
        "송송 썬 대파 - 1종이컵"
    ],
    instructions: [
        "무는 깨끗이 씻은 후 가늘게 채 썰어줍니다. 껍질을 벗기셔도 되고 안 벗기셔도 됩니다. 최대한 가늘게 썰어야 양념이 잘 베입니다.",
        "고춧가루 2큰술을 넣고 바락바락 문질러 무를 빨갛게 물들여 줍니다.",
        "다진 마늘 1큰술, 설탕 1큰술, 오미자청(또는 매실청) 1큰술, 식초 2큰술을 넣어줍니다.",
        "액젓 2큰술, 적당량의 소금을 넣고 조물조물 섞어 맛을 봅니다. 싱거우면 소금을 더 넣고, 새콤한 맛이 더 필요하면 식초를 추가합니다.",
        "마지막으로 통깨와 송송 썬 대파를 넣고 가볍게 섞어주면 완성입니다."
    ]
  },
  "마늘쫑": {
    title: "마늘쫑 레시피",
    image: garlicChivesImage,
    category: "반찬",
    servings: "4인분",
    time: "10분 이내",
    difficulty: "하",
    ingredients: [
        "마늘쫑 - 2단",
        "통마늘 - 1줌",
        "간장 - 6스푼",
        "고추장 - 3스푼",
        "고춧가루 - 3스푼",
        "올리고당 - 4스푼",
        "다진 마늘 - 1스푼"
    ],
    instructions: [
        "양념장 재료를 모두 넣고 섞어줍니다. 시간이 지나면서 마늘쫑이 물이 나와 싱거워지기 때문에 간장의 양을 짭쪼름하게 넣습니다.",
        "마늘쫑을 손가락 크기로 자릅니다. 그릇에 담아 물에 씻어줍니다.",
        "마늘쫑을 씻은 후 바로 양념장에 담아 줍니다. 마늘쫑의 알싸함이 싫으시면 뜨거운 물에 5분 정도 담궈줍니다.",
        "통마늘도 양념에 넣고 섞어줍니다. 마지막으로 마늘쫑 모두를 섞어 양념이 골고루 베이도록 합니다.",
        "삶아내지 않은 마늘쫑은 실온에 반나절 정도 두고 냉장고에서 2일 정도 보관한 후 드시면 더 맛있습니다."
    ]
  },
  "부추무침": {
    title: "부추무침 레시피",
    image: chiveSaladImage,
    category: "반찬",
    servings: "4인분",
    time: "30분 이내",
    difficulty: "하",
    ingredients: [
        "부추 - 1줌",
        "양파 - 1/2개",
        "진간장 - 3스푼",
        "고춧가루 - 2스푼",
        "다진 마늘 - 1스푼",
        "올리고당 - 1스푼",
        "식초 - 1스푼",
        "통깨 - 1스푼",
        "참기름 - 약간"
    ],
    instructions: [
        "부추 한 줌을 깨끗이 씻어서 준비합니다. 5cm 간격으로 자릅니다.",
        "양파 반개는 최대한 얇게 썰어줍니다. 잘라 놓은 양파를 얼음물에 담궈 놓으면 아린 맛은 사라지고 단맛이 좋아집니다.",
        "손질된 부추를 볼에 담고, 얼음물에 담궈 놓은 양파는 물기를 빼고 볼에 함께 담습니다.",
        "양념장을 만듭니다. 진간장, 고춧가루, 다진 마늘, 올리고당, 식초를 섞어 줍니다.",
        "양념장을 부추와 양파에 조금씩 넣어가며 살살 섞어줍니다. 부추는 애기다루듯이 살살 비벼야 풋내가 나지 않습니다.",
        "마지막으로 통깨를 뿌리면 완성입니다."
    ]
  },
  "부추전": {
    title: "부추전 레시피",
    image: chivePancakeImage,
    category: "한식",
    servings: "2인분",
    time: "10분 이내",
    difficulty: "중",
    ingredients: [
        "부추",
        "양파 1/2개",
        "부침가루 1컵",
        "카놀라유 약간",
        "당근 1토막",
        "청양고추 2개",
        "찬물 2/3컵"
    ],
    instructions: [
        "채소들은 비슷한 길이로 채 썰어줍니다.",
        "부침가루에 찬물을 부어 잘 섞은 후 준비한 채소를 넣고 버무려줍니다. 반죽 양의 농도는 약간 뻑뻑할 정도로 흐르지 않게 합니다.",
        "팬에 기름을 넉넉히 두르고 반죽을 넣고 앞뒤로 노릇하게 부쳐줍니다."
    ]
  },
  "잔치국수": {
    title: "잔치국수 레시피",
    image: banquetNoodlesImage,
    category: "한식",
    servings: "4인분",
    time: "30분 이내",
    difficulty: "중",
    ingredients: [
        "국물용 멸치 20~30마리",
        "양파 1/2개",
        "당근 1/3개",
        "소면 양껏",
        "달걀 2개",
        "대파 1/2개",
        "애호박 1/3개",
        "다진마늘 1큰술",
        "표고버섯 1개",
        "청양고추 2개",
        "진간장 5큰술",
        "참깨 1큰술",
        "청양고추 2개",
        "설탕 1작은술",
        "고춧가루 1작은술",
        "물 2큰술"
    ],
    instructions: [
        "물 2L에 멸치 20~30마리, 대파 1/4대, 통마늘 2~3개를 넣고 육수를 우려줍니다.",
        "육수가 끓는 동안 당근, 양파, 애호박, 표고버섯, 대파를 손질해줍니다. 애호박은 채썰듯이 준비합니다.",
        "육수는 10분 정도 끓여주시고, 망에 걸러 내용물을 모두 걷어냅니다.",
        "걷은 육수에 손질한 채소를 넣고 다시 끓입니다. 거품이 생기면 제거해주세요.",
        "국간장 1큰술, 진간장 1큰술, 소금을 맛을 보며 조절합니다. 다진마늘 1큰술도 넣고 간을 합니다.",
        "마지막으로 달걀을 풀어 끓는 육수에 부어주고 불을 끕니다.",
        "양념장을 만듭니다. 양념장에 참깨를 넣어도 좋습니다.",
        "끓는 물에 소면을 넣고 물이 넘치기 전에 반 컵씩 추가하며 섞어주세요. 3번째 물을 추가할 때 불을 끕니다.",
        "냉수에 소면을 헹군 후 체에 밭쳐 차가운 물에 헹굽니다.",
        "육수에 양념장을 넣고 잘 섞어 완성합니다. 김치나 김을 추가해도 좋습니다."
    ]
  },
  "진미채볶음": {
    title: "진미채볶음 레시피",
    image: driedSquidBokkeumImage,
    category: "반찬",
    servings: "6인분",
    time: "15분 이내",
    difficulty: "하",
    ingredients: [
        "진미채",
        "마요네즈 2스푼",
        "고추장 2스푼",
        "고춧가루 1스푼",
        "간장 1.5스푼",
        "다진마늘 반스푼",
        "참기름 1스푼",
        "설탕 1스푼",
        "올리고당 1.5스푼",
        "깨소금 0.5스푼"
    ],
    instructions: [
        "진미채는 물에 두 번 씻어서 물기를 빼줍니다.",
        "마요네즈 2스푼을 넣고 버무려 잠시 둡니다.",
        "양념장을 만듭니다. (마요네즈, 올리고당, 깨소금 제외한 재료)",
        "기름을 살짝 두른 팬에 양념장을 넣고 물 4스푼 정도를 넣어 약불에서 끓여줍니다.",
        "양념이 끓으면 진미채를 넣고 볶아줍니다.",
        "양념이 골고루 베이면 올리고당 1.5스푼을 넣고 깨소금을 뿌려 완성합니다."
    ]
  },
  "계란국": {
    title: "계란국 레시피",
    image: eggSoupImage,
    category: "한식",
    servings: "2인분",
    time: "30분 이내",
    difficulty: "하",
    ingredients: [
        "계란 3알",
        "물 3~4컵",
        "다진파 1스푼",
        "소금 약간",
        "액젓 1작은스푼",
        "다시마 1장",
        "멸치 8마리"
    ],
    instructions: [
        "계란에 소금을 한꼬집 넣고 잘 풀어줍니다.",
        "냄비에 물을 붓고 다시마, 멸치를 넣어 센 불에서 끓입니다. 끓어오르면 중약불로 줄여 약 10-15분 정도 더 끓여 밑국물을 만듭니다.",
        "10-15분 후에 다시마와 멸치를 건져내고 액젓을 넣어줍니다.",
        "그 다음 달걀물을 원을 그리듯이 부어줍니다.",
        "약 30초 동안 뭉친 달걀이 좋으시면 조금 더 끓여 저어줍니다. 흐트러진 달걀이 좋으시면 빨리 저어줍니다.",
        "불을 끄고 송송 썬 파를 넣고 부족한 간은 소금으로 맞춰서 완성합니다."
    ]
  },
  "소불고기": {
    title: "소불고기 레시피",
    image: beefBulgogiImage,
    category: "한식",
    servings: "3인분",
    time: "20분 이내",
    difficulty: "중",
    ingredients: [
        "소고기 600g",
        "채썬 양파 1개",
        "채썬 당근 1/2개",
        "파 1대",
        "간장 5큰술",
        "설탕 2큰술",
        "물엿 1큰술",
        "맛술 1큰술",
        "다진마늘 1.5큰술",
        "참기름 1.5큰술",
        "후추"
    ],
    instructions: [
        "양념장 재료를 모두 섞어 맛있게 만듭니다.",
        "소고기를 양념장에 재웁니다.",
        "양파와 당근을 채 썰고, 파는 썰어줍니다.",
        "센 불에 양념한 소고기를 넣고 익히면서 볶아줍니다.",
        "고기와 채소들이 야들야들 잘 익으면 완성입니다. 추가로 통깨를 좀 뿌리면 더 좋습니다."
    ]
  },
  "닭갈비": {
    title: "닭갈비 레시피",
    image: dakgalbiImage,
    category: "한식",
    servings: "2인분",
    time: "30분 이내",
    difficulty: "중",
    ingredients: [
        "닭가슴살 500g",
        "양배추 1/2개",
        "양파 1/2개",
        "고구마 2개",
        "깻잎 5장",
        "떡볶이 떡 1인분",
        "대파 조금",
        "고추장 3스푼",
        "고춧가루 3스푼",
        "진간장 3스푼",
        "설탕 3스푼",
        "참기름 1스푼",
        "다진마늘 2.5스푼",
        "맛술(소주) 3스푼",
        "후추 약간",
        "소금 조금",
        "물 1컵"
    ],
    instructions: [
        "떡볶이 떡을 미리 불려놓습니다.",
        "닭갈비 양념을 만듭니다.",
        "준비해 놓은 야채들을 손질합니다.",
        "닭가슴살을 깍둑썰어서 양념을 버무리고 10분 정도 재워놓습니다.",
        "볶기 전에 물 1컵 정도를 넣고 끓입니다.",
        "물이 끓으면 양념이 된 닭가슴살을 넣고 볶아줍니다.",
        "닭가슴살이 어느 정도 익었다 싶을 때 양배추와 깻잎을 제외한 야채들을 넣습니다. 고구마를 젓가락으로 찔렀을 때 쑥 들어갈 정도로 볶아줍니다.",
        "마지막으로 양배추와 깻잎을 넣고 볶아주면 완성입니다."
    ]
  },
  "카레": {
    title: "카레 레시피",
    image: curryImage,
    category: "일식",
    servings: "2인분",
    time: "60분 이내",
    difficulty: "중",
    ingredients: [
        "감자 1개",
        "양파 1개",
        "당근 1/2개",
        "소고기 1줌",
        "카레 1팩",
        "식용유 2스푼"
    ],
    instructions: [
        "손질해둔 양파는 채썰어 달군 팬에 기름을 두른 뒤 양파가 흐물흐물해질 때까지 볶아줍니다.",
        "감자, 당근을 채썰어 준비합니다. 감자는 흐르는 물에 한 번 행구어 전분을 제거해 주시면 볶을 때 타지 않습니다.",
        "양파, 감자, 당근이 어느 정도 익으면 소고기를 넣어 볶다가 후추도 조금 뿌려줍니다.",
        "볶아진 재료에 물을 붓습니다.",
        "물이 끓으면 카레 가루를 넣어 뭉치지 않게 풀어주시고 어느 정도 졸여주시면 완성됩니다."
    ]
  },
  "초밥": {
    title: "초밥 레시피",
    image: 초밥,
    category: "일식",
    servings: "2인분",
    time: "45분",
    difficulty: "중",
    ingredients: [
      "초밥용 밥 - 2컵",
      "식초 - 1/4컵",
      "설탕 - 2큰술",
      "소금 - 1큰술",
      "연어, 참치, 새우, 광어 등 - 각 100g",
      "간장 - 적당량",
      "와사비 - 적당량"
    ],
    instructions: [
      "식초, 설탕, 소금을 섞어 초밥용 식초를 만듭니다.",
      "따뜻한 밥에 초밥용 식초를 넣고 섞어줍니다.",
      "각종 생선은 얇게 썰어 준비합니다.",
      "밥을 손으로 적당한 크기로 만들어 생선을 올립니다.",
      "간장과 와사비를 곁들여 초밥을 완성합니다."
    ]
  },
  "우동": {
    title: "우동 레시피",
    image: 우동,
    category: "일식",
    servings: "2인분",
    time: "30분",
    difficulty: "하",
    ingredients: [
      "우동 면 - 200g",
      "다시마 - 1조각",
      "가쓰오부시 - 한 줌",
      "간장 - 2큰술",
      "미림 - 1큰술",
      "소금 - 약간",
      "대파 - 1대",
      "새우, 오징어 등 - 적당량"
    ],
    instructions: [
      "다시마와 가쓰오부시로 육수를 우려냅니다.",
      "우동 면을 삶아 찬물에 헹궈둡니다.",
      "준비한 육수에 간장, 미림, 소금으로 간을 맞춥니다.",
      "삶은 우동 면을 그릇에 담고 육수를 부어줍니다.",
      "새우와 오징어를 올려 우동을 완성합니다."
    ]
  },
  "가츠동": {
    title: "가츠동 레시피",
    image: 가츠동,
    category: "일식",
    servings: "2인분",
    time: "30분",
    difficulty: "중",
    ingredients: [
      "돼지고기 등심 - 200g",
      "빵가루 - 1컵",
      "밀가루 - 1/2컵",
      "계란 - 1개",
      "간장 - 3큰술",
      "설탕 - 2큰술",
      "미림 - 1큰술",
      "양파 - 1/2개",
      "대파 - 1대",
      "물 - 1컵"
    ],
    instructions: [
      "돼지고기 등심에 밀가루를 묻힌 후 계란물에 적셔 빵가루를 입힙니다.",
      "팬에 기름을 두르고 돼지고기를 노릇하게 튀겨냅니다.",
      "양파는 채썰고 대파는 송송 썰어줍니다.",
      "간장, 설탕, 미림, 물을 섞어 소스를 만듭니다.",
      "팬에 양파와 소스를 넣고 끓이다가 튀긴 돼지고기를 올려줍니다.",
      "계란을 풀어 돼지고기 위에 부어 익혀줍니다.",
      "그릇에 밥을 담고 돼지고기와 소스를 올려 가츠동을 완성합니다."
    ]
  },
  "라멘": {
    title: "라멘 레시피",
    image: 라멘,
    category: "일식",
    servings: "2인분",
    time: "40분",
    difficulty: "중",
    ingredients: [
      "라멘 면 - 200g",
      "돼지고기 차슈 - 200g",
      "대파 - 1대",
      "계란 - 2개",
      "미소된장 - 2큰술",
      "간장 - 2큰술",
      "다시마 - 1조각",
      "가쓰오부시 - 한 줌",
      "물 - 1리터"
    ],
    instructions: [
      "다시마와 가쓰오부시로 육수를 우려냅니다.",
      "라멘 면을 삶아 찬물에 헹궈둡니다.",
      "돼지고기 차슈를 얇게 썰어줍니다.",
      "육수에 미소된장과 간장을 풀어줍니다.",
      "삶은 라멘 면을 그릇에 담고 육수를 부어줍니다.",
      "차슈, 대파, 반숙 계란을 올려 라멘을 완성합니다."
    ]
  },
  "연어 스테이크": {
    title: "연어 스테이크 레시피",
    image: 연어스테이크,
    category: "양식",
    servings: "2인분",
    time: "약 30분",
    difficulty: "중",
    ingredients: [
        "연어 - 300g",
        "올리브 오일 - 2큰술",
        "레몬 - 1개",
        "다진 마늘 - 1큰술",
        "다진 양파 - 1/4컵",
        "다진 파슬리 - 1큰술",
        "소금 - 1/2작은술",
        "후추 - 약간"
    ],
    instructions: [
        "연어를 손질하여 적당한 크기로 자릅니다.",
        "올리브 오일, 레몬 주스, 다진 마늘, 다진 양파, 다진 파슬리, 소금, 후추를 섞어 마리네이드를 만듭니다.",
        "마리네이드한 연어를 케이크 모양으로 만들고 그릴에 구워줍니다.",
        "완성된 연어에 파슬리를 뿌려내어 주세요."
    ]
  }
};

const categories = [
 
  { name: '한식', value: '한식', img: korean },
  { name: '중식', value: '중식', img: chinese },
  { name: '일식', value: '일식', img: japanese },
  { name: '양식', value: '양식', img: western },
  { name: '반찬', value: '반찬', img: banchan }
]


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
  
  const Recipe_Select = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [recipesList, setRecipesList] = useState([]);
  
    useEffect(() => {
      const recipesWithViews = Object.keys(recipes).map(recipeName => ({
        ...recipes[recipeName],
        id: recipeName,
        views: getViewsFromLocalStorage(recipeName),
        author: '관리자'
      }));
      const sortedRecipes = sortRecipesByViews(recipesWithViews);
      setRecipesList(sortedRecipes);
    }, []);
  
    const filterRecipes = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredRecipes = recipesList.filter(
      (recipe) => selectedCategory === 'all' || recipe.category === selectedCategory
    );
  
    const incrementViews = (recipeId) => {
      const newViews = getViewsFromLocalStorage(recipeId) + 1;
      saveViewsToLocalStorage(recipeId, newViews);
  
      const updatedRecipes = recipesList.map(recipe => 
        recipe.id === recipeId ? { ...recipe, views: newViews } : recipe
      );
      const sortedRecipes = sortRecipesByViews(updatedRecipes);
      setRecipesList([...sortedRecipes]);
    };
  
    return (
      <div>
        <br />
        <div className="categories">
          {categories.map((category) => (
            <div key={category.value} className="category" onClick={() => filterRecipes(category.value)}>
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <div id="recipesContainer" className="recipes-container">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="card" onClick={() => incrementViews(recipe.id)}>
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <div className="card-text d-flex justify-content-between">
                    <span>작성자: {recipe.author}</span>
                    <span>조회수: {recipe.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Recipe_Select;
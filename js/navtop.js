let currentWordIndex = 0;
const searchWords = [
    ["오이 무침", "제육 볶음", "닭볶음탕", "두부 조림", "두부 찌개"],
    ["오이 소박이", "마늘 쫑 볶음", "된장 찌개", "김치 찌개", "콩 나물 국"]
];

function changeSearchWord(direction) {
    currentWordIndex += direction;
    if (currentWordIndex < 0) currentWordIndex = searchWords.length - 1;
    if (currentWordIndex >= searchWords.length) currentWordIndex = 0;

    const searchWordList = document.getElementById('searchWordList');
    searchWordList.innerHTML = '';
    searchWords[currentWordIndex].forEach(word => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `https://www.example.com/search?q=${word}`;
        a.textContent = word;
        li.appendChild(a);
        searchWordList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeSearchWord(0);
});

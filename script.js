const inpWord = document.getElementById('input');
const searchBtn = document.getElementById('search-btn');
const result = document.querySelector('.result');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    
searchBtn.addEventListener('click', function() {
    result.classList.add('fade');
    fetch(`${url}${inpWord.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            result.innerHTML = `
                <h3 class="word">${data[0].word}</h3>
                <div class="word-flex">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p class="italic">${data[0].phonetic}</p>
                </div>
                <p class="means">${data[0].meanings[0].definitions[0].definition}</p>
                <p class="exp">"${data[0].meanings[0].definitions[0].example || ''}"</p>
                `;
            })
            .catch(() => {
                result.innerHTML = `<h2 class="error">Couldn't Find The Word!</h2>`;
                result.classList.remove('fade');
        });
    inpWord.value = '';
});
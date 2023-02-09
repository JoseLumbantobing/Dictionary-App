let inpWord = document.getElementById('input');
const searchBtn = document.getElementById('search-btn');
const sound = document.querySelector('.sound');
const result = document.querySelector('.result');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

searchBtn.addEventListener('click', function() {
    fetch(`${url}${inpWord.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            result.innerHTML = `
            <div class="result-flex">
                <h3 class="word fade">${data[0].word}</h3>
                <span class="sound fade"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1z"></path></svg></span>
            </div>
            <p class="pronounce fade">halo \n ${data[0].phonetic}</p>
            <p class="means fade">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="exp fade">"${data[0].meanings[0].definitions[0].example || ''}"</p>
            `
            // ${data[0].phonetics[0].audio}
        });
});

// const dictionary = {
//     updateDisplay: function() {
//         fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
//     },
//     getData: function(data) {
//         const { word } = data;
//         const { phonetic } = data;
//         // const { audio } = phonetics[0];
//         const { wordDefinition } = meanings[0].definitions[0].definition;
//         const { wordExample } = meanings[0].definitions[0].example;
//         console.log(inputWord, wordPhonetic, wordDefinition, wordExample);
//     }
// }
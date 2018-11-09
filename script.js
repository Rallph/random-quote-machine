const apiUrl = 'https://talaikis.com/api/quotes/random/';


let quote = document.querySelector('#quote');
let quoteButton = document.querySelector('#quoteButton');
let author = document.querySelector('#author');

quoteButton.addEventListener('click', function(e) {
    
    fetch(apiUrl).then((res) => res.json()).then((jsonres) => {

        quote.innerHTML = `<strong>${jsonres.quote}</strong>`;
        author.innerHTML = `<i>${jsonres.author}</i>`;
        
    });

});
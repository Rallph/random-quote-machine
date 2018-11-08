const quotes = ['hello', 'world', 'it', 'is', 'nice', 'to', 'meet', 'you'];

const apiUrl = 'https://talaikis.com/api/quotes/random/';
const apiParamss = '';


let quote = document.querySelector('#quote');
let quoteButton = document.querySelector('#quoteButton');
let author = document.querySelector('#author');

quoteButton.addEventListener('click', function(e) {
    
    /*randomIndex = Math.floor(Math.random() * quotes.length);
    
    quote.innerHTML = quotes[randomIndex];*/

    fetch(apiUrl).then((res) => res.json()).then((jsonres) => {

        quote.innerHTML = `<strong>${jsonres.quote}</strong>`;
        author.innerHTML = `<i>${jsonres.author}</i>`;
        
    });

});
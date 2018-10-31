const quotes = ['hello', 'world', 'it', 'is', 'nice', 'to', 'meet', 'you'];

const apiUrl = 'http://api.forismatic.com/api/1.0/';
const apiParamss = '?method=getQuote&format=json&lang=en';


let quote = document.querySelector('#quote');
let quoteButton = document.querySelector('#quoteButton');

quoteButton.addEventListener('click', function(e) {
    
    randomIndex = Math.floor(Math.random() * quotes.length);
    
    quote.innerHTML = quotes[randomIndex];

});
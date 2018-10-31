const quotes = ['hello', 'world', 'it', 'is', 'nice', 'to', 'meet', 'you'];


let quote = document.querySelector('#quote');
let quoteButton = document.querySelector('#quoteButton');

quoteButton.addEventListener('click', function(e) {
    
    randomIndex = Math.floor(Math.random() * quotes.length);
    
    quote.innerHTML = quotes[randomIndex];

});
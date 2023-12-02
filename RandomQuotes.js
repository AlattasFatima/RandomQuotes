// Varibales 
let btn = document.getElementById('generate')
let quote = document.querySelector('.qoute');
let person = document.querySelector('.person');
const quotes = [
    {quote: `“Be yourself; everyone else is already taken.”`,
    person: `Oscar Wilde`},
    {quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: `Albert Einstein`},
    {quote: `“A room without books is like a body without a soul.”`,
    person: `Marcus tullius Cicero`},
    {quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person: `Bernard M. Baruch`},
    {quote: `“It always seems impossible until it's done.”`,
    person: `Nelson Mandela`},
    
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length );
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});

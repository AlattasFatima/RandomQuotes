// Varibales 
let Rquote = document.querySelector('.quote');
let person = document.querySelector('.person');
const btn =  document.getElementById('btn');


const apikey="mxrLacJBnOMn+MzdYUOSJw==VViR7IoJBxeRoYG3";

const options = {
    method:'GET',
    headers:{
        "X-Api-Key": apikey, },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=happiness"

async function getQ(){
    console.log('sd');
    const response = await fetch(apiURL, options);
    const data = await response.json();
    console.log(data);
    Rquote.innerText = data[0].quote;
    person.innerText = data[0].author;
};

btn.addEventListener('click', getQ);

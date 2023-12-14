// Varibales 
let Rquote = document.querySelector('.quote');
let person = document.querySelector('.person');
const btn =  document.getElementById('btn');


const apikey="mxrLacJBnOMn+MzdYUOSJw==VViR7IoJBxeRoYG3";

const options = {
    method:'GET',
    headers:{
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes"

async function getQ(){
    const response = await fetch(apiURL, options);
    const data = await response.json();
    Rquote.innerText = data[0].quote;
    person.innerText = data[0].author;
};

btn.addEventListener('click', getQ);

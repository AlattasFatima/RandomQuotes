// Varibales 
let Rquote = document.querySelector('.quote');
let person = document.querySelector('.person');
const category = document.querySelector('#category');
const btn =  document.getElementById('btn');
const inputs =document.querySelector('input').value;

const apikey="mxrLacJBnOMn+MzdYUOSJw==VViR7IoJBxeRoYG3";
const apiURL = `https://api.api-ninjas.com/v1/quotes?category=${inputs}`;
const options = {
    method:'GET',
    headers:{
        "X-Api-Key": apikey,
    },
};

async function getQ(){
    const response = await fetch(apiURL, options);
    const data = await response.json();
    Rquote.innerText = data[0].quote;
    person.innerText = data[0].author;
    category.innerText = data[0].category;
    console.log(data);
    console.log(inputs);
};

btn.addEventListener('click', getQ);

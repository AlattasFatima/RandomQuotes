const body = document.getElementById('html');
const btn = document.getElementById('btn2');
let mode="light"

function bgColor(){
    
    if (mode === 'light'){
    body.style.background ="darkseagreen";
    mode = 'night';
    }
    else{
        body.style.background = 'whitesmoke';
        mode = 'light'
    }
}

btn.addEventListener('click', bgColor);

const btn3 = document.getElementById('btn3');
const btn1 = document.getElementById('btn1');
 
document.querySelector('#btn3').addEventListener('mouseover', function(e){
    console.log(e.target.innerText = 'hovered!')
}, true);

document.getElementById('btn3').addEventListener('dblclick',function(f){
    console.log(f.target.innerText = 'double clicked!')
}, true);

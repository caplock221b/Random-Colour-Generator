document.querySelector('#btn1').addEventListener('click', runEvent1);
document.querySelector('#btn2').addEventListener('click', runEvent2);
document.querySelector('#btn3').addEventListener('click', runEvent3);
document.querySelector('#btn4').addEventListener('click', runEvent4);

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

const pickAlpha = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function colorGenerator(){
    let randomColor = '#';
    let randomNumber;
    for(let i=0; i<6; i++){
        randomNumber = Math.floor(Math.random()*pickAlpha.length);
        randomColor += pickAlpha[randomNumber];
    }
    return randomColor;
}
let color;
function runEvent1(e){
    color = colorGenerator();
    div1.style.backgroundColor = color;
    document.getElementById('span1').innerHTML = ` ${color}`;
}
function runEvent2(e){
    color = colorGenerator();
    div2.style.backgroundColor = color;
    document.getElementById('span2').innerHTML = ` ${color}`;
}
function runEvent3(e){
    color = colorGenerator();
    div3.style.backgroundColor = color;
    document.getElementById('span3').innerHTML = ` ${color}`;
}
function runEvent4(e){
    color = colorGenerator();
    div4.style.backgroundColor = color;
    document.getElementById('span4').innerHTML = ` ${color}`;
}
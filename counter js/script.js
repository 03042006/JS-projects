let x = 0;

const dercreasebtn = document.getElementById('decr');
const increasebtn = document.getElementById('incr');
const resetbtn = document.getElementById('res');
const countlabebl = document.getElementById('display');

dercreasebtn.onclick = function(){
    x--;
    countlabebl.textContent = x;
}
increasebtn.onclick = function(){
    x++;
    countlabebl.textContent = x;
}
resetbtn.onclick = function(){
    x = 0;
    countlabebl.textContent = x;
}
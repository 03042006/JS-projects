const textBox = document.getElementById('textbox')
const toF = document.getElementById('C-F')
const toC = document.getElementById('F-C')
const result = document.getElementById('result')


let temp;

function convert(){
    if(toF.checked){
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + '°F'
    }
    else if(toC.checked){
        temp = Number(textBox.value)
        temp = (temp - 32) * (5/9);
        result.textContent = temp + '°C'
    }
    else{
        result.textContent = 'Select a Unit';
    }
}


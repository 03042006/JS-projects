const choices = ['Rock', 'Paper', 'Scissors'];
const Playerdisplay = document.getElementById('playerdisplay');
const Computerdisplay = document.getElementById('computerdisplay');
const Resultdisplay = document.getElementById('result');
const Playerscoredisp = document.getElementById('playerscore');
const Computerescoredisp = document.getElementById('computerscore');

let playerscore = 0;
let computerscore = 0;

Playerscoredisp.textContent = `PlayerScore: ${playerscore}`;
Computerescoredisp.textContent = `ComputerScore: ${computerscore}`;

function Playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result = '';

    if(playerchoice === computerchoice){
        result = `It's a TIE!`
    }
    else{
        switch(playerchoice){
            case 'Rock':
                result = (computerchoice === 'Scissors') ? 'You Win!': 'You Lose!'
                break;
            case 'Paper':
                result = (computerchoice === 'Rock') ? 'You Win!': 'You Lose!'
                break;
            case 'Scissors':
                result = (computerchoice === 'Paper') ? 'You Win!': 'You Lose!'
                break;
        }
    }

    Playerdisplay.textContent = `Player: ${playerchoice}`;
    Computerdisplay.textContent = `Computer: ${computerchoice}`;
    Resultdisplay.textContent = result;

    switch(result){
        case 'You Win!':
            playerscore++;
            Playerscoredisp.textContent = `PlayerScore: ${playerscore}`;
            break;
        case 'You Lose!':
            computerscore++;
            Computerescoredisp.textContent = `ComputerScore: ${computerscore}`;
            break;
    }

}
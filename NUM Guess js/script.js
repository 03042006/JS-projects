let num = Math.floor(Math.random()*10+1);
alert(num)

// let userinp = 10;

let guess = 1;
userinp = prompt('Guess number between 1-10');

// userinp = Number(userinp);

// if (userinp === num) {
//     alert('You are correct');
// }
// else if(userinp < num){
//     alert('Greater than this');
// }
// else if(userinp > num){
//     alert('Lower than this');
// }
// else{
//     alert('wrong input')
// }


while(userinp !== num){

    if (userinp < num) {
        guess++;
        alert('Too Low !. Try Again');
        }
    else if (userinp > num) {      
        guess++;
        alert('Too High !. Try Again');
    }
    else{
        guess++;
        alert(`You Guessed it Right in ${guess} Guesses`)
        }
}
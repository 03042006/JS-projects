document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    Generate();
});

function Generate() {
    const PassLength = document.getElementById('passwordlength').value
    const includeLowercase = document.getElementById('Lowercase').checked
    const includeUppercase = document.getElementById('Uppercase').checked
    const includeNumbers = document.getElementById('Numbers').checked
    const includeSymbols = document.getElementById('Symbols').checked
    const Result = document.getElementById('result')




    const lowerCaseLetters = ('abcdefghijklmnopqrstuvwxyz');
    const upperCaseLetters = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const Numbers = ('1234567890');
    const SpecialCharacters = ('!@#$%^&*');


    let selectedChars = '';

    selectedChars += includeLowercase ? lowerCaseLetters : '';
    selectedChars += includeUppercase ? upperCaseLetters : '';
    selectedChars += includeNumbers ? Numbers : '';
    selectedChars += includeSymbols ? SpecialCharacters : '';
    // console.log(selectedChars)

    if (PassLength === 0) {
        Result.textContent = 'Please define length of Password'
    }
    if (selectedChars === ''){
        Result.innerText = 'Please select at least one character type.';
        return;
    }

    let Password = '';

    for (let i = 0; i < PassLength; i++) {
        const randomindex = Math.floor(Math.random() * selectedChars.length)
        Password += selectedChars[randomindex];
    }

    Result.textContent = Password

}

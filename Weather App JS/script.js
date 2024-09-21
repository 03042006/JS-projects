const apiKey = 'e75b72341e007523bcae923121bbc13b';
const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card')

weatherForm.addEventListener('submit', async event => {
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeathrInfo(weatherData);
        }
        catch (error) {
            card.textContent = ''
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError('Please Enter a City')
    }

});
async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error('Could not fetch Weather data!');
    }
    return await response.json();
};

function displayWeathrInfo(data) {
    const { name: city,
        sys: { country },
        main: { temp, humidity },
        weather: [{ description, id, icon }] } = data;
    card.textContent = '';
    card.style.display = 'flex';


    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');


    cityDisplay.textContent = `${city} , ${country} `;
    tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = (description).toUpperCase();
    weatherEmoji.textContent = getWeatherEmoji(id), icon;


    cityDisplay.classList.add('citydisplay');
    tempDisplay.classList.add('tempdisplay');
    humidityDisplay.classList.add('humiditydisplay');
    descDisplay.classList.add('descdisplay');
    weatherEmoji.classList.add('weatheremoji');


    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);


};

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return '🌩'
        case (weatherId >= 300 && weatherId < 500):
            return '🌧️'
        case (weatherId >= 500 && weatherId < 600):
            return '🌧️'
        case (weatherId >= 600 && weatherId < 700):
            return '❄️'
        case (weatherId >= 700 && weatherId < 800):
            return '🌫️'
        case (weatherId === 800):
            return '🔆'
        case (weatherId >= 800 && weatherId < 810):
            return '☁︎'

    }
};

function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = '';
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errordisplay');
    card.style.display = 'flex'
    card.appendChild(errorDisplay);
};
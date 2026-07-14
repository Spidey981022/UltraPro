export default function weather() {
    const city = document.querySelector('.weather p');
    const temperature = document.querySelector('.weather h4');
    const changeCity = document.querySelector('.weather-setting input');
    const changeButton = document.querySelector('.weather-setting button');

    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const key = 'b6dc54e5f920d6c80a45d010de9867c8';

    async function getWeatherData(city) {
    let API = `${url}?q=${city}&appid=${key}`;
    const response = await fetch(API);
    const data = await response.json();
    renderWeather(data);
    }

    function renderWeather(data) {
        const sheher = data.name;
        const temp = Math.floor(data.main.temp - 273.15);
        const weather = data.weather[0].main;

        city.textContent = sheher;
        temperature.textContent = `${temp}°C ${weather}`;
    }

    changeButton.addEventListener('click', ()=>{
        let cityChange = changeCity.value;
        localStorage.setItem('weatherCity', cityChange);
        return getWeatherData(cityChange);
    });
    const cityName = localStorage.getItem('weatherCity') ?? 'Bhopal';
    return getWeatherData(cityName);
}
let main = document.getElementById("main");
const form = document.querySelector("form");
const input = document.querySelector("#input");
const apiUrl = (city) =>
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=797768c21674ba08d9c268e4c2adea01`;

async function getData(city) {
    const resp = await fetch(apiUrl(city));
    const respData = await resp.json();
    showWeather(respData);
}

function showWeather(weatherData) {
    console.log(weatherData);
    console.log(weatherData.main.temp);
    main.classList.add("weather-design")
    main.innerHTML = `
    <div class="heading">
    <img src="weather.jpg" alt="weather-picture" id="image" />
    <h2>${weatherData.name}</h2>
    <div class="celsius">
    <div class="info">
    <h1>${get_celsius(weatherData.main.temp)}&deg;</h1>
    <img src="https://api.openweathermap.org/img/w/${
      weatherData.weather[0].icon
    }.png"/>
    </div>
    <span>${weatherData.weather[0].description}</span>
    </div>
  </div>`;
}

function get_celsius(kelvin) {
    return Math.floor(kelvin - 273.15);
}

function getLocation() {
    let text = "";
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        text = input.value;
        getData(input.value);
    });
}
getLocation();
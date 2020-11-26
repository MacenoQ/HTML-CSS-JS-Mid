const apikey = '3265874a2c77ae4a04bb96236a642d2f';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = city =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), { origin: 'cors' });
  const respData = await resp.json();
  console.log(respData);
  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const maxTemp = KtoC(data.main.temp_max);
  const minTemp = KtoC(data.main.temp_min);
  const feelsLike = KtoC(data.main.feels_like);
  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.innerHTML = `
    <div id="temp">
      <div id="currentTemp">${temp}<span id="C">°C</span></div>
      <div id="max-min">
        <div id="maxTemp">Max Temp: ${maxTemp}°C</div>
        <div id="minTemp">Min Temp: ${minTemp}°C</div>
      </div>
      <div id="feelsLike">Feels Like: ${feelsLike}°C</div>
      <div id="status">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" /> 
        ${data.weather[0].main}
      </div>
    </div>
    
    
    
  `;

  main.innerHTML = '';
  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeatherByLocation(city);
  }
});

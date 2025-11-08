// 🔑 Your OpenWeather API key
const apiKey = "27b80c3271730b5415606bd191993645";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name");

  // 🌦️ 1. Get Weather Data
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const weatherRes = await fetch(weatherUrl);
  const weatherData = await weatherRes.json();

  if (weatherData.cod !== 200) {
    document.getElementById("weatherResult").innerHTML = `<p>❌ City not found</p>`;
    document.getElementById("airResult").innerHTML = "";
    return;
  }

  // ✅ Extract weather info
  const { main, weather, coord } = weatherData;

  // ✅ Show weather info
  // ✅ Show weather info
  document.getElementById("weatherResult").innerHTML = `
    <h2>🌍 ${city}</h2>
    <p>🌡️ Temperature: ${main.temp}°C (Feels like: ${main.feels_like}°C)</p>
    <p>💧 Humidity: ${main.humidity}%</p>
    <p>☁️ Condition: ${weather[0].description}</p>
    <p>🌬️ Wind: ${weatherData.wind.speed} m/s, Direction: ${weatherData.wind.deg}°</p>
  `;


  // 🌈 ✅ Change background dynamically
  changeBackground(weather[0].main.toLowerCase());

  // 🌫️ 2. Get Air Quality Data
  const airUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`;
  const airRes = await fetch(airUrl);
  const airData = await airRes.json();

  const aqi = airData.list[0].main.aqi;

  // ✅ AQI text + health tips
  let aqiText = "";
  let healthTip = "";

  switch (aqi) {
    case 1:
      aqiText = "Good 🟢";
      healthTip = "Great air quality! Perfect for outdoor activities. 🌳";
      break;
    case 2:
      aqiText = "Fair 🟡";
      healthTip = "Air quality is acceptable. Sensitive groups should take care. 🙂";
      break;
    case 3:
      aqiText = "Moderate 🟠";
      healthTip = "Consider limiting prolonged outdoor activity. 😐";
      break;
    case 4:
      aqiText = "Poor 🔴";
      healthTip = "Unhealthy air! Try to stay indoors if possible. ⚠️";
      break;
    case 5:
      aqiText = "Very Poor 🟣";
      healthTip = "Dangerous air quality! Avoid going outside. 🚫";
      break;
  }

  document.getElementById("airResult").innerHTML = `
    <h2>🌫️ Air Quality Index</h2>
    <p>${aqiText}</p>
    <p><em>${healthTip}</em></p>
  `;

  // 💾 Save last searched city
  localStorage.setItem("lastCity", city);
}

// 🌈 Background changer function
function changeBackground(condition) {
  const body = document.body;

  if (condition.includes("clear")) {
    body.style.background = "linear-gradient(135deg, #f9d423, #ff4e50)"; // sunny
  } else if (condition.includes("rain")) {
    body.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)"; // rainy
  } else if (condition.includes("snow")) {
    body.style.background = "linear-gradient(135deg, #83a4d4, #b6fbff)"; // snowy
  } else if (condition.includes("cloud")) {
    body.style.background = "linear-gradient(135deg, #757f9a, #d7dde8)"; // cloudy
  } else {
    body.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)"; // default
  }
}

// 💾 Load last searched city automatically
window.onload = () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    document.getElementById("cityInput").value = lastCity;
    getWeather(); // auto-fetch
  }
};

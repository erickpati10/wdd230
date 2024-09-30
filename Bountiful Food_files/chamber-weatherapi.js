// function displayResults(weatherData) {
//   const currentTemp = document.querySelector("#current-temp");
//   const weatherIcon = document.querySelector("#weather-icon");
//   const captionDesc = document.querySelector("figcaption");
//   const windSpeed = document.querySelector("#wind-speed");
//   const windChill = document.querySelector("#wind-chill");

//   const temperature = weatherData.main.temp;
//   const iconCode = weatherData.weather[0].icon;
//   const description = weatherData.weather[0].description;
//   const speed = weatherData.wind.speed;

//   currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
//     0
//   )}</strong>`;
//   windSpeed.textContent = `Wind Speed: ${speed.toFixed(2)} mph`;

//   if (temperature > 50 || speed < 3) {
//     windChill.textContent = "Wind Chill: N/A";
//   } else {
//     const windChillValue = calculateWindChill(temperature, speed);
//     windChill.textContent = `Wind Chill: ${windChillValue.toFixed(2)} °F`;
//   }

//   const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

//   weatherIcon.setAttribute("src", iconsrc);
//   weatherIcon.setAttribute("alt", description);
//   captionDesc.textContent = description.toUpperCase();
// }

// async function apiFetch() {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=Lehi&units=imperial&appid=14b32573fb22377f8adba79a8cea1ee7";

//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       displayResults(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// apiFetch();

// function calculateWindChill(temperature, windSpeed) {
//   if (temperature > 50 || windSpeed < 3) {
//     return "N/A"; // Wind chill not applicable
//   }

//   const windChill =
//     35.74 +
//     0.6215 * temperature -
//     35.75 * Math.pow(windSpeed, 0.16) +
//     0.4275 * temperature * Math.pow(windSpeed, 0.16);
//   return windChill;
// }

// ############################

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = "f7f717aa0ffdbf9353b0f0e20f792557";
const city = "Carlsbad";

async function getCurrentWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Weather data not available");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching current weather data:", error);
    return null;
  }
}

async function getThreeDayForecast() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=4&appid=${apiKey}`
    );
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Forecast data not available");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching forecast data:", error);
    return null;
  }
}

function displayWeatherData(currentWeather, forecastData) {
  const currentTempElement = document.getElementById("current-temp");
  const conditionElement = document.getElementById("condition");
  const humidityElement = document.getElementById("humidity");
  const forecastItemsContainer = document.getElementById("forecast-items");

  currentTempElement.textContent = currentWeather.main.temp.toFixed(1);
  conditionElement.textContent = currentWeather.weather[0].description;
  humidityElement.textContent = currentWeather.main.humidity;

  forecastItemsContainer.innerHTML = "";
  for (let i = 1; i <= 3; i++) {
    const date = new Date(forecastData.list[i].dt * 1000).toLocaleDateString(
      "en-US",
      { weekday: "short" }
    );
    const temp = forecastData.list[i].temp.day.toFixed(1);
    const forecastItem = document.createElement("div");
    forecastItem.innerHTML = `<p><strong>${date}:</strong> ${temp}°C</p>`;
    forecastItemsContainer.appendChild(forecastItem);
  }
}

async function fetchWeatherData() {
  try {
    const [currentWeather, forecastData] = await Promise.all([
      getCurrentWeather(),
      getThreeDayForecast(),
    ]);
    if (currentWeather && forecastData) {
      displayWeatherData(currentWeather, forecastData);
    } else {
      console.log("bbError fetching weather data.");
    }
  } catch (error) {
    console.log("aaError fetching weather data:", error);
  }
}

fetchWeatherData();

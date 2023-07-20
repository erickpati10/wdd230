async function getCurrentWeather() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=14b32573fb22377f8adba79a8cea1ee7";
  try {
    const response = await fetch(url);
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

// async function getThreeDayForecast() {
//   const url =
//     "https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad&units=metric&cnt=4&appid=14b32573fb22377f8adba79a8cea1ee7";
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Forecast data not available");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error fetching forecast data:", error);
//     return null;
//   }
// }

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
    forecastItem.innerHTML = `<p><strong>${date}:</strong> ${temp}°F</p>`;
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
      console.log("Error fetching weather data.");
    }
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
}

fetchWeatherData();

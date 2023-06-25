function displayResults(weatherData) {
  const currentTemp = document.querySelector("#current-temp");
  const weatherIcon = document.querySelector("#weather-icon");
  const captionDesc = document.querySelector("figcaption");
  const windSpeed = document.querySelector("#wind-speed");
  const windChill = document.querySelector("#wind-chill");

  const temperature = weatherData.main.temp;
  const iconCode = weatherData.weather[0].icon;
  const description = weatherData.weather[0].description;
  const speed = weatherData.wind.speed;

  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  windSpeed.textContent = `Wind Speed: ${speed.toFixed(2)} mph`;

  if (temperature > 50 || speed < 3) {
    windChill.textContent = "Wind Chill: N/A";
  } else {
    const windChillValue = calculateWindChill(temperature, speed);
    windChill.textContent = `Wind Chill: ${windChillValue.toFixed(2)} °F`;
  }

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", description);
  captionDesc.textContent = description.toUpperCase();
}

async function apiFetch() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Lehi&units=imperial&appid=14b32573fb22377f8adba79a8cea1ee7";

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function calculateWindChill(temperature, windSpeed) {
  if (temperature > 50 || windSpeed < 3) {
    return "N/A"; // Wind chill not applicable
  }

  const windChill =
    35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill;
}

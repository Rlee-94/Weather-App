const form = document.getElementById("main__form");

//City Input
async function getWeatherData(userInput) {
  const key = "84d17c513e484ffdba40caf570beb7ef";
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}`;
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
  } catch (e) {
    console.log("Error:", e.message);
  }
}

async function renderWeather() {
  const userInput = document.querySelector(".main__input").value;
  const weatherData = await getWeatherData(userInput);

  const {
    main,
    name,
    sys: { country },
    weather: { description },
  } = weatherData;
  console.log(weatherData);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault;
  getWeatherData();
  renderWeather();
});

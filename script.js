const form = document.getElementById("main__form");

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

form.addEventListener("submit", async (e) => {
  e.preventDefault;
  const userInput = document.querySelector(".main__input").value;
  const weatherData = await getWeatherData(userInput);
  console.log(weatherData);
});

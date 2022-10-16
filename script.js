const form = document.getElementById("main__form");
const container = document.querySelector(".card__container");

//City Input
async function getWeatherData(userInput) {
  const key = "84d17c513e484ffdba40caf570beb7ef";
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}&units=imperial`;
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
  } catch (e) {
    console.log("Error:", e.message);
  }
}

async function renderWeatherData() {
  const userInput = document.querySelector(".main__input").value;
  const weatherData = await getWeatherData(userInput);

  //Destructured JSON
  const {
    main: { temperature },
    name,
    sys: { country },
    weather,
  } = weatherData;
  console.log(weatherData);

  return temperature, name, country, weather;
}

function creatWeatherCard() {}

function addCardToContainer() {
  container.appendChild(card);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault;
  renderWeatherData();
  creatWeatherCard();
});

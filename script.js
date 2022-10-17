const form = document.getElementById("main__form");
const container = document.querySelector(".content__container");
const cardContainer = document.querySelector(".card__container");
const card = document.querySelector(".card");
const cardCity = document.querySelector(".card__city");
const cardTemp = document.querySelector(".card__temp");
const cardForecast = document.querySelector(".card__forecast");

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
  const pTemp = document.createElement("p");
  const pName = document.createElement("p");
  const pCountry = document.createElement("p");
  const pForecast = document.createElement("p");

  //Destructured JSON
  const {
    main: { temp },
    name,
    sys: { country },
    weather,
  } = weatherData;

  pTemp.textContent = `${Math.round(temp)}℉ `;
  pName.textContent = name;
  pCountry.textContent = `, ${country}`;
  pForecast.textContent = weather[0]["description"];

  cardCity.appendChild(pName);
  cardCity.appendChild(pCountry);
  cardTemp.appendChild(pTemp);
  cardForecast.appendChild(pForecast);

  container.appendChild(cardContainer);
  cardContainer.appendChild(card);
  card.classList.remove("hidden");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault;
  renderWeatherData();
});

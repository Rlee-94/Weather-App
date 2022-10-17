const form = document.getElementById("main__form");
const container = document.querySelector(".content__container");
const cardContainer = document.querySelector(".card__container");

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
    main: { temp },
    name,
    sys: { country },
    weather,
  } = weatherData;
  console.log(weatherData);

  //Create Card
  const card = document.createElement("div");
  card.className = "card";
  const cardCity = document.createElement("div");
  cardCity.className = "card__city";
  const cardTemp = document.createElement("div");
  cardTemp.className = "card__temp";
  const cardForecast = document.createElement("div");
  cardForecast.className = "card__forecast";
  const cardIcon = document.createElement("img");
  cardIcon.className = "card__icon";
  cardIcon.src = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const pTemp = document.createElement("p");
  const pCity = document.createElement("p");
  const pCountry = document.createElement("p");
  const pForecast = document.createElement("p");

  pTemp.textContent = `${Math.round(temp)}℉ `;
  pCity.textContent = name;
  pCountry.textContent = `, ${country}`;
  pForecast.textContent = weather[0]["description"];

  cardCity.appendChild(pCity);
  cardCity.appendChild(pCountry);
  cardTemp.appendChild(pTemp);
  cardForecast.appendChild(pForecast);
  cardForecast.appendChild(cardIcon);

  card.appendChild(cardCity);
  card.appendChild(cardTemp);
  card.appendChild(cardForecast);

  container.appendChild(cardContainer);
  cardContainer.appendChild(card);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault;
  renderWeatherData();
});

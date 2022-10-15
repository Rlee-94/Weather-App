const key = "84d17c513e484ffdba40caf570beb7ef";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${key}`)
  .then((response) => response.json())
  .then((json) => console.log(json));

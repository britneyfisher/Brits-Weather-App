function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
let query = "London";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

//console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

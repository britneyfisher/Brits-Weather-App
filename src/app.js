function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?Lisbon={query}&key={apiKey}&units=metric";

console.log(apiUrl);

//axios.get(apiUrl).then(displayTemperature);

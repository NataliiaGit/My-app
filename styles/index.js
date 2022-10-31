// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Enter a city!");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celTemperature = Math.round(temperature);
//   let fahrTemperature = Math.round(temperature * 1.8 + 32);

//   alert(
//     `It is currently ${celTemperature}°C (${fahrTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }

function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let min = now.getMinutes();
  let formattedDate = `${day}, ${hours}:${min}`;
  return formattedDate;
}

let seetime = document.querySelector("div.timenow");
seetime.innerHTML = formatDate();

// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#citysearch-input");
//   let h1 = document.querySelector("h1");
//   h1.innerHTML = `${searchInput.value}`;
// }
// let form = document.querySelector("#citysearch");
// form.addEventListener("submit", search);

// function celsTemp(event) {
//   event.preventDefault();
//   let temperature = document.querySelector("#tempvalue");
//   let celsiy = temperature.innerText;
//   temperature.innerHTML = `${celsiy}`;
// }
// let cel = document.querySelector("#gradC");
// cel.addEventListener("click", celsTemp);

// function farTemp(event) {
//   event.preventDefault();
//   let temperature = document.querySelector("#tempvalue");
//   let farenheit = temperature.innerText * 1.8 + 32;
//   temperature.innerHTML = `${farenheit}`;
// }
// let far = document.querySelector("#gradF");
// far.addEventListener("click", farTemp);
function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#citysearch-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=6296c64e960fe6bd4462f38861420443&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(responce) {
  let currentTemperature = document.querySelector("#tempvalue");
  currentTemperature.innerHTML = `${Math.round(responce.data.main.temp)}`;

  let currentcity = document.querySelector("h1");
  currentcity.innerHTML = `${responce.data.name}`;
}

let form = document.querySelector("#citysearch");
form.addEventListener("submit", search);

let button = document.querySelector("#currentcity");
button.addEventListener("click", currentdate);

function currentdate(position) {
  navigator.geolocation.getCurrentPosition(currentdate);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6296c64e960fe6bd4462f38861420443&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

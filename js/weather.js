const API_KEY = "6cacd1793c6c967b2e5ef19cb1c476a4";

function onGeoSucces(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = `${data.name},`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);

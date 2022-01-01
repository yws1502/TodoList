const API_KEY = "bf75d8801136c52065fcf6b31147352f";

function getIcon(iconCode) {
  const iconPath = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return iconPath;
}

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherContainer = document.getElementById("weather-container");
      const img = weatherContainer.querySelector("img");
      const temp = weatherContainer.querySelector(".temp");
      const location = weatherContainer.querySelector(".location");
      img.src = getIcon(data.weather[0].icon);
      temp.textContent = data.main.temp + "℃";
      location.textContent = data.name;
    })
}

function error() {
  alert("Can't find you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(success, error);
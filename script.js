let searchBtn = document.getElementById("searchbtn");
let cityInput = document.getElementById("cityinput");

let cityText = document.getElementById("city");
let tempText = document.getElementById("temp");
let conditionText = document.getElementById("condition");
let humidityText = document.getElementById("humidity");


let apiKey = "7925ded1c2144beeb2650808262304";

searchBtn.addEventListener("click", function () {
  let cityName = cityInput.value.trim();

  if (cityName === "") {
    alert("Please enter city name");
    return;
  }

  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

  fetch(url)
    .then(function (response) { 
      return response.json();
    })
    .then(function (data) {
      if (data.error) {
        alert(data.error.message);
        return;
      }

      cityText.innerText = `City: ${data.location.name}, ${data.location.country}`;
      tempText.innerText = `Temperature: ${data.current.temp_c}°C`;
      conditionText.innerText = `Condition: ${data.current.condition.text}`;
      humidityText.innerText = `Humidity: ${data.current.humidity}%`;
    })
    .catch(function (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    });
});

cityInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
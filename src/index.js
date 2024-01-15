
// function displayWeatherData (event) {
//     event.preventDefault();
//     let temperatureElement = document.querySelector("#temperature");
//     temperatureElement.innerHTML= "Hello from index.js";
    
// }

function callApi (response) {
    console.log(response);
      let temperatureElement = document.querySelector("#temperature");
      let descriptionElement = document.querySelector("#description");


      temperatureElement.innerHTML = `${(Math.round(response.data.main.temp))}℃`;
      descriptionElement.innerHTML = `Description: ${response.data.weather[0].description}`;
}

function parseApi (city) {
    let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callApi);
}

function updateCity (event) {
    event.preventDefault();
    let userInput = document.querySelector("#search")
    parseApi(userInput.value);
}

//OpenWeather API

//City submit parse to API

//onChange

let submit =document.querySelector("#submit");
submit.addEventListener("click", updateCity);



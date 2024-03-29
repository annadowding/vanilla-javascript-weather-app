function displayForecast (response) {
      let forecastElement = document.querySelector("#forecast");


      let forecastHtml = "";

      response.data.list.forEach(function (today) {
        let date = new Date(today.dt * 1000);
        let days = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        let text = today.dt_txt;
if (text.includes("15:00:00")) {
        forecastHtml =
          forecastHtml +
          `<div>
              <div class="forecast-day">${day}</div>
              <img src="https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png" class="forecast-icon"/>
                  <span class="maxTemp">${Math.round(today.main.temp)}℃
                    </span>
                      
                    <span class="minTemp">  ${Math.round(today.main.feels_like)}℃
                    </span>
          </div>`;

        forecastElement.innerHTML = forecastHtml;
      }})
    };
    


function handleForecast (city) {
    let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=200&appid=${apiKey}&units=metric`; 
      axios.get(apiUrl).then(displayForecast);
}

function callApi (response) {
  let cityNameElement = document.querySelector("#cityName");
  let temperatureIconElement = document.querySelector("#temperatureIcon")
      let temperatureElement = document.querySelector("#temperature");
      let descriptionElement = document.querySelector("#description");
      let timeElement = document.querySelector("#time");
      let humidityElement = document.querySelector("#humidity");
      let windElement = document.querySelector("#wind");

      
      temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}℃`;
      descriptionElement.innerHTML = `Description: ${response.data.weather[0].description}`;
      humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;
      windElement.innerHTML = `Wind Speed: ${Math.round(response.data.wind.speed)} km/h`;
      cityNameElement.innerHTML=`${response.data.name}`
      temperatureIconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png" id="temperatureIcon"/>`;
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
    
      if (hour < 10 && minutes <10) {
         timeElement.innerHTML = `GMT: 0${hour}:0${minutes}`;
       } else if (hour < 10){
        timeElement.innerHTML = `GMT: 0${hour}:${minutes}`;
    } else if (minutes < 10) {
        timeElement.innerHTML = `GMT: ${hour}:0${minutes}`;
       }
       
      handleForecast(userInput.value);
    }


     

function parseApi (city) {
    let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callApi);
}

function updateCity (event) {
    event.preventDefault();
    
    parseApi(userInput.value);
}

let submit =document.querySelector("#submit");
submit.addEventListener("click", updateCity);
let userInput = document.querySelector("#search");

parseApi("London");
handleForecast("London");



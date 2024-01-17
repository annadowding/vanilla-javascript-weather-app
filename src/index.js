function displayForecast (response) {
    let forecastElement=document.querySelector("#forecast")
    let forecastHtml = "";

    response.data.list.forEach(function(day,index) {
        if (index < 5) {
            forecastHtml =
              forecastHtml +
              `<div>${day.main.temp}
            </div>
            <div>${day.main.humidity}
            </div>`;
            
            forecastElement.innerHTML = forecastHtml;
        }
    })
    
    }





function handleForecast (city) {
    let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${apiKey}&units=metric`; 
      axios.get(apiUrl).then(displayForecast);
}

function callApi (response) {
    console.log(response);
      let temperatureElement = document.querySelector("#temperature");
      let descriptionElement = document.querySelector("#description");
      let timeElement = document.querySelector("#time");
      let humidityElement = document.querySelector("#humidity");
      let windElement = document.querySelector("#wind");

      
      temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}℃`;
      descriptionElement.innerHTML = `Description: ${response.data.weather[0].description}`;
      humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;
      windElement.innerHTML = `Wind Speed: ${Math.round(response.data.wind.speed)} km/h`;
      
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
    
      if (hour < 10 && minutes <10) {
         timeElement.innerHTML = `0${hour}:0${minutes}`;
       } else if (hour < 10){
        timeElement.innerHTML = `0${hour}:${minutes}`;
    } else if (minutes < 10) {
        timeElement.innerHTML = `${hour}:0${minutes}`;
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


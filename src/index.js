
function displayWeatherData (event) {
    event.preventDefault();
    let temperatureElement = document.querySelector(".temperature");
    temperatureElement.innerHTML= "Hello from index.js";

}


let submit =document.querySelector(".submit");
submit.addEventListener("click", displayWeatherData);



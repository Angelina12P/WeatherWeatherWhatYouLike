let APIKey = "5f06fd7d9130dd36b781c557ed9464e4";
// let searchCity = document.getElementById("searchCity");
let searchCity = "london";
let searchButton = document.getElementById("searchButton");

// eventlistener event.target 

let searchWeather = () => {

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${APIKey}`)
    .then(response => response.json())
    .then(citiesFound =>{
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
    
    return fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${APIKey}`)
    
    
})

.then(response => response.json())
.then(weatherData =>{
    console.log(weatherData)
    let cityName = weatherData.name
    let currentTemp = weatherData.main.temp
    // let iconRep = ??? current.weather.icon
    let humidity = weatherData.main.humidity
    let windSpeed = weatherData.wind.speed

    document.getElementById("answersBit").innerHTML =
    `
    <p>"City" ${cityName}</p>
    <p>"Temp" ${currentTemp}</p>
    // <p>not sure </p>
    <p>"Humidity" ${humidity}</p>
    <p>"Wind Speed" ${windSpeed}</p>
    `
    
})
};

searchWeather()
// searchButton.addEventListener(onclick, searchWeather);
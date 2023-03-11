let currentTimestamp = Math.round(Date.now()/1000);
// 86400 seconds in a day
let futureDay1 = currentTimestamp + 86400; 
let futureDay2 = futureDay1 + 86400; 
let futureDay3 = futureDay2 + 86400;
let futureDay4 = futureDay3 + 86400;
let futureDay5 = futureDay4 + 86400;

let wArray = [futureDay1, futureDay2, futureDay3, futureDay4, futureDay5]

let APIKey = "5f06fd7d9130dd36b781c557ed9464e4";

let searchCity = document.getElementById("searchCity");
// let searchCity = "london";
let searchButton = document.getElementById("searchButton");

// eventlistener event.target 

let searchWeather = (searchCity) => {
   
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
        let lat = weatherData.coord.lat;
        let lon = weatherData.coord.lon;

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`)
    })
    
    
    .then(response => response.json())
    .then(fiveDayData => {
        console.log(fiveDayData);


})
};

searchButton.addEventListener("click", () => {
    let searchCity = document.getElementById("searchCity").value;
    searchWeather(searchCity);
});





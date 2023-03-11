// let date = moment(day.dt).format("ddd, MMMM D");

let APIKey = "5f06fd7d9130dd36b781c557ed9464e4";

let searchCity = document.getElementById("searchCity");
let searchButton = document.getElementById("searchButton");

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const searchCity = document.getElementById("searchCity").value;
  searchWeather(searchCity);
});


let searchWeather = (searchCity) => {
   
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${APIKey}`)
    .then(response => response.json())
    .then(citiesFound =>{
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
    
    return fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${APIKey}`)
    
})

.then(response => response.json())
.then(weatherData =>{
    console.log(weatherData)
    let cityName = weatherData.city.name;
    let currentTemp = weatherData.list[0].main.temp;
    // let iconRep = ??? current.weather.icon
    let humidity = weatherData.list[0].main.humidity;
    let windSpeed = weatherData.list[0].wind.speed;
    document.getElementById("answersBit").innerHTML =
    `
    <p><b>City: </b> ${cityName}</p>
    <p><b>Temp: </b> ${currentTemp}</p>
    <p>not sure </p>
    <p><b>Humidity: </b> ${humidity}</p>
    <p><b>Wind Speed:</b> ${windSpeed}</p>
    `
     
    let tomorrowDate = moment().add(1, 'days').format('YYYY-MM-DD');
        let tomorrowWeatherData = weatherData.list.find(weather => moment.unix(weather.dt).format('YYYY-MM-DD') === tomorrowDate);
        if (tomorrowWeatherData) {
            let tomorrowTemp = tomorrowWeatherData.main.temp;
            let tomorrowHumidity = tomorrowWeatherData.main.humidity;
            let tomorrowWindSpeed = tomorrowWeatherData.wind.speed;
            document.getElementById("column1").innerHTML =
            `
            <h3>Tomorrow</h3>
            <p><b>Temp: </b> ${tomorrowTemp}</p>
            <p><b>Humidity: </b> ${tomorrowHumidity}</p>
            <p><b>Wind Speed:</b> ${tomorrowWindSpeed}</p>
            `


    
        }})}
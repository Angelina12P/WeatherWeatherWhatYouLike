// let date = moment(day.dt).format("ddd, MMMM D");

let APIKey = "5f06fd7d9130dd36b781c557ed9464e4";

let searchButton = document.getElementById("searchButton");

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const searchCity = document.getElementById("searchCity").value;
  searchWeather(searchCity);

  let prevSearches = JSON.parse(localStorage.getItem('searchHistory'));
  prevSearches.push(searchCity);
  localStorage.setItem('searchHistory', JSON.stringify(prevSearches));
  
  let updateSearchHistory = document.getElementById('prevSearches')
  updateSearchHistory.innerHTML = prevSearches.map(city => `<button>${city}</button>`);
})



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
    let iconID = weatherData.list[0].weather[0].icon;
    console.log(iconID)
    let humidity = weatherData.list[0].main.humidity;
    let windSpeed = weatherData.list[0].wind.speed;
    document.getElementById("answersBit").innerHTML =
    `
    <p><b>City: </b> ${cityName}</p>
    <p><b>Temp: </b> ${currentTemp}</p>
    <img src="http://openweathermap.org/img/w/${iconID}.png" alt="weather icon}">
    <p><b>Humidity: </b> ${humidity}</p>
    <p><b>Wind Speed:</b> ${windSpeed}</p>
    `
     
    let tomorrowDate = moment().add(1, 'days').format('YYYY-MM-DD');
        let tomorrowWeatherData = weatherData.list.find(weather => moment.unix(weather.dt).format('YYYY-MM-DD') === tomorrowDate);
        if (tomorrowWeatherData) {
            let tomorrowTemp = tomorrowWeatherData.main.temp;
            let tomorrowIconID = tomorrowWeatherData.weather[0].icon;
            let tomorrowHumidity = tomorrowWeatherData.main.humidity;
            let tomorrowWindSpeed = tomorrowWeatherData.wind.speed;
            document.getElementById("column1").innerHTML =
            `
            <h3>Tomorrow</h3>
            <p><b>Temp: </b> ${tomorrowTemp}</p>
            <img src="http://openweathermap.org/img/w/${tomorrowIconID}.png" alt="weather icon">
            <p><b>Humidity: </b> ${tomorrowHumidity}</p>
            <p><b>Wind Speed:</b> ${tomorrowWindSpeed}</p>
            `;
    let dayAfter = moment().add(2, 'days').format('YYYY-MM-DD');
    let dayAfterWeatherData = weatherData.list.find(weather => moment.unix(weather.dt).format('YYYY-MM-DD') === dayAfter);
    if (dayAfterWeatherData) {
        let dayAfterTemp = dayAfterWeatherData.main.temp;
        let dayAfterIconID = dayAfterWeatherData.weather[0].icon;
        let dayAfterHumidity = dayAfterWeatherData.main.humidity;
        let dayAfterWindSpeed = dayAfterWeatherData.wind.speed;
        let dayAfterDayOfWeek = moment(dayAfter).format('dddd');
        document.getElementById("column2").innerHTML =
        `
        <h3>${dayAfterDayOfWeek}</h3>
        <p><b>Temp: </b> ${dayAfterTemp}</p>
        <img src="http://openweathermap.org/img/w/${dayAfterIconID}.png" alt="weather icon">
        <p><b>Humidity: </b> ${dayAfterHumidity}</p>
        <p><b>Wind Speed:</b> ${dayAfterWindSpeed}</p>
        `;
    let dayThree = moment().add(3, 'days').format('YYYY-MM-DD');
    let dayThreeWeatherData = weatherData.list.find(weather => moment.unix(weather.dt).format('YYYY-MM-DD') === dayThree);
    if (dayThreeWeatherData) {
        let dayThreeTemp = dayThreeWeatherData.main.temp;
        let dayThreeIconID = dayThreeWeatherData.weather[0].icon;
        let dayThreeHumidity = dayThreeWeatherData.main.humidity;
        let dayThreeWindSpeed = dayThreeWeatherData.wind.speed;
        let dayThreeDayOfWeek = moment(dayThree).format('dddd');
        document.getElementById("column3").innerHTML =
        `
        <h3>${dayThreeDayOfWeek}</h3>
        <p><b>Temp: </b> ${dayThreeTemp}</p>
        <img src="http://openweathermap.org/img/w/${dayThreeIconID}.png" alt="weather icon">
        <p><b>Humidity: </b> ${dayThreeHumidity}</p>
        <p><b>Wind Speed:</b> ${dayThreeWindSpeed}</p>
        `;
    let dayFour = moment().add(4, 'days').format('YYYY-MM-DD');
    let dayFourWeatherData = weatherData.list.find(weather => moment.unix(weather.dt).format('YYYY-MM-DD') === dayFour);
    if (dayFourWeatherData) {
        let dayFourTemp = dayFourWeatherData.main.temp;
        let dayFourIconID = dayFourWeatherData.weather[0].icon;
        let dayFourHumidity = dayFourWeatherData.main.humidity;
        let dayFourWindSpeed = dayFourWeatherData.wind.speed;
        let dayFourDayOfWeek = moment(dayFour).format('dddd');
        document.getElementById("column4").innerHTML =
        `
        <h3>${dayFourDayOfWeek}</h3>
        <p><b>Temp: </b> ${dayFourTemp}</p>
        <img src="http://openweathermap.org/img/w/${dayFourIconID}.png" alt="weather icon">
        <p><b>Humidity: </b> ${dayFourHumidity}</p>
        <p><b>Wind Speed:</b> ${dayFourWindSpeed}</p>
        `;
    let dayFive = moment().add(5, 'days').format('YYYY-MM-DD');
    let dayFiveWeatherData = weatherData.list.find(weather => moment.unix(weather.dt).format('YYYY-MM-DD') === dayFive);
    if (dayFiveWeatherData) {
        let dayFiveTemp = dayFiveWeatherData.main.temp;
        let dayFiveIconID = dayFiveWeatherData.weather[0].icon;
        let dayFiveHumidity = dayFiveWeatherData.main.humidity;
        let dayFiveWindSpeed = dayFiveWeatherData.wind.speed;
        let dayFiveDayOfWeek = moment(dayFive).format('dddd');
        document.getElementById("column5").innerHTML =
        `
        <h3>${dayFiveDayOfWeek}</h3>
        <p><b>Temp: </b> ${dayFiveTemp}</p>
        <img src="http://openweathermap.org/img/w/${dayFiveIconID}.png" alt="weather icon">
        <p><b>Humidity: </b> ${dayFiveHumidity}</p>
        <p><b>Wind Speed:</b> ${dayFiveWindSpeed}</p>
        `;
        
        }}}}}})}


        // search history 


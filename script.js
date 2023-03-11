

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
    <p><b>City: </b> ${cityName}</p>
    <p><b>Temp: </b> ${currentTemp}</p>
    <p>not sure </p>
    <p><b>Humidity: </b> ${humidity}</p>
    <p><b>Wind Speed:</b> ${windSpeed}</p>
    `
        let lat = weatherData.coord.lat;
        console.log(lat)
        let lon = weatherData.coord.lon;



        const currentTimestamp = Math.round(Date.now()/1000);
        // 86400 seconds in a day
        let futureDay1 = currentTimestamp + 86400; 
        let futureDay2 = futureDay1 + 86400; 
        let futureDay3 = futureDay2 + 86400;
        let futureDay4 = futureDay3 + 86400;
        let futureDay5 = futureDay4 + 86400;
        let wArray = [futureDay1, futureDay2, futureDay3, futureDay4, futureDay5]



        function fiveDays(wArray) {
            for (let i = 0; i < wArray.length; i++) {
              const element = wArray[i];
              console.log(element);
            }
          }
          
          fiveDays(wArray);
             
        
        // return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&dt=${wArray}&appid=${APIKey}`)
        
    })
    
    // .then(response => response.json())
    // console.log(response)
    // .then(fiveDayData => {
    //     console.log(fiveDayData);
        
      

}
// })
// };







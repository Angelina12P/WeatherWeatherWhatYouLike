let APIKey = "5f06fd7d9130dd36b781c557ed9464e4";
// let searchCity = document.getElementById("searchCity");
let searchCity = "london";
let searchButton = document.getElementById("searchButton");

// eventlistener event.target 

// let searchWeather = () => {

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${APIKey}`)
    .then(response => response.json())
    .then(citiesFound =>{
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
    
    return fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${APIKey}`)
    
    
})

.then(response => response.json())
.then(data =>{
    console.log()
    result.innerHTML=`
    <div>something</div>
    `
    
})
// };


// searchButton.addEventListener(onclick, searchWeather);
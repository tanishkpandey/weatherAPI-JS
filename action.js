// Weather App to search the weather of app

let weather_icon = document.querySelector('#weather_icon')
let your_location = document.querySelector('#location')
let current_temp = document.querySelector('#current_temp')
let description = document.querySelector('#description')
let humidity = document.querySelector('#humidity')
let wind_speed = document.querySelector('#wind_speed')

async function checkweather() {
    try {
        let city = document.querySelector('#city_name').value
        if (!city) {
            throw new Error("Please enter a city name.");
        }

        let apikey = '903507f17d707fecd352d38301efba77'
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}&units=metric`

        const response = await fetch(apiurl);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
        }

        var data = await response.json();

        if (data.weather[0].main === "Clear") {
            weather_icon.src = "images/Clear.png"
        } else if (data.weather[0].main === "Clouds") {
            weather_icon.src = "images/Clouds.png"
        } else if (data.weather[0].main === "Drizzle") {
            weather_icon.src = "images/Drizzle.png"
        } else if (data.weather[0].main === "Humidity") {
            weather_icon.src = "images/Humidity.png"
        } else if (data.weather[0].main === "Mist") {
            weather_icon.src = "images/Mist.png"
        } else if (data.weather[0].main === "Rain") {
            weather_icon.src = "images/Rain.png"
        } else if (data.weather[0].main === "Search") {
            weather_icon.src = "images/Search.png"
        } else if (data.weather[0].main === "Snow") {
            weather_icon.src = "images/Snow.png"
        } else if (data.weather[0].main === "Wind") {
            weather_icon.src = "images/Wind.png"
        }

        your_location.innerHTML = data.name
        current_temp.innerHTML = data.main.temp
        description.innerHTML = data.weather[0].description
        humidity.innerHTML = data.main.humidity
        wind_speed.innerHTML = data.wind.speed
    } catch (error) {
        alert("Error: No such city exists");
    }
}

/*Openweather api key*/
/*faac7de9b50d394c89d18dc27cb6e571

let weather = {
    apiKey: "faac7de9b50d394c89d18dc27cb6e571",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=imperial&appid=" + this.apiKey
         )
        .then((response) => response.json())
        .then((data) =>this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search()
    }
});

weather.fetchWeather("")*/

let weather = {
    apiKey: "faac7de9b50d394c89d18dc27cb6e571",
    fetchCoordinates: function (city,state,country ) {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ city + "," + state + "," + country +"&limit=2&appid="+ this.apiKey
         )
        .then((response) => response.json())
        .then((data) =>this.displayCoordinates(data))
    },
    displayCoordinates: function(data) {
        const { name } = data;
        const { lat } = lat;
        const { lon } = lon;
    },
    fetchWeather: function (city ) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city
         + "&units=imperial&appid=" + this.apiKey
         )
        .then((response) => response.json())
        .then((data) =>this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name} = data;
        const { visibility } = data;
        const { timezone } = data;
        const { dt } = data;
        const { id, main, icon, description } = data.weather[0];
        const { temp,pressure, humidity, feels_like, temp_min, temp_max, sea_level, grnd_level } = data.main;
        const { speed, deg, gust } = data.wind;
        const { all } = data.clouds;
        const { lon, lat } = data.coord;
        const { sunrise, sunset } = data.sys
        //const { time } = data.dt;
        //const { state } = data.state;
        //const { country } = data.sys;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".feels-like").innerText = "feels like: " + feels_like + "°F";
        document.querySelector(".temp-min").innerText = "Low: " + temp_min + "°F";
        document.querySelector(".temp-max").innerText = "High: " + temp_max + "°F" ;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}; //end of weather

document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search()
    }
});

weather.fetchWeather("")

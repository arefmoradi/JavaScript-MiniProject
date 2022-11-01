class UI {
    constructor(){
        this.locationW = document.querySelector('#w-location');
        this.condition = document.querySelector('#w-condition');
        this.icon = document.querySelector('#w-icon');
        this.temp = document.querySelector('#w-temp');
        this.humidity = document.querySelector('#w-humidity');
        this.visibility = document.querySelector('#w-visibility');
        this.feelslike = document.querySelector('#w-feels-likes');
        this.wind = document.querySelector('#w-wind');
        this.textCity = document.querySelector('#city');
        this.saveLocationBTN = document.querySelector('#save-change');
    }


    setWeatherInfo(weatherData){
        this.locationW.textContent = weatherData.location.name + ' ' + weatherData.location.country;
        this.condition.textContent = `${weatherData.current.weather_descriptions}`;
        this.icon.setAttribute('src',`${weatherData.current.weather_icons}`);
        this.temp.textContent = `Time : ${weatherData.current.observation_time}`;
        this.humidity.textContent = `Humidity: ${weatherData.current.humidity}`;
        this.visibility.textContent = `Visibility: ${weatherData.current.visibility}`;
        this.feelslike.textContent = `Feelslike: ${weatherData.current.feelslike}`;
        this.wind.textContent = `Wind Speed: ${weatherData.current.wind_speed}`;
    }
}
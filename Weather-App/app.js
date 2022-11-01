let storage = new Storage();
let city = storage.getCityFromLS();
let weatherData = new weather('tehran');
let ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather());
// Add event to Save CHange
document.querySelector('#save-change').addEventListener('click',changeCity);

function getWeather(){ 
    weatherData.getWeather()
    .then(data => {
        ui.setWeatherInfo(data);
    }).catch(err => console.log(err));
 }


function changeCity(){
    let city = document.querySelector('#city').value;
    weatherData.changeCity(city);
    getWeather();

    storage.setCityToLs(city);
}
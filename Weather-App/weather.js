class weather{

    constructor(city){
        this.apiKey = '170de86ec422f2d12b996b20153b2c16';
        this.city = 'tehran';
    }

    async getWeather(){
        let responseWeather = await fetch(`
        http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}
        `);
        let weatherData = await responseWeather.json();
        return weatherData;
    }

    changeCity(city){
        this.city = city;
    }


}
document.getElementById('city').addEventListener('input', function () {
    const city = this.value;
    getWeather(city);
});
  
async function getWeather() {
    try {
        const city = document.getElementById('city').value || 'New York'; // Default city value for safety
        console.log('City:', city);
  
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: city,
                appid: '54a57bc234ad752a4f59e59cd372201d', // Ensure this API key is valid
                units: 'metric'
            },
        });

        // Getting today's weather
        const currentTemperature = response.data.list[0].main.temp;
        document.querySelector('.weather-temp').textContent = Math.round(currentTemperature) + 'ºC';
  
        const forecastData = response.data.list;
        const dailyForecast = {};
  
        forecastData.forEach((data) => {
            const day = new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
            if (!dailyForecast[day]) {
                dailyForecast[day] = {
                    minTemp: data.main.temp_min,
                    maxTemp: data.main.temp_max,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    icon: data.weather[0].icon,
                };
            } else {
                dailyForecast[day].minTemp = Math.min(dailyForecast[day].minTemp, data.main.temp_min);
                dailyForecast[day].maxTemp = Math.max(dailyForecast[day].maxTemp, data.main.temp_max);
            }
        });
  
        document.querySelector('.date-dayname').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
        const date = new Date();
        const extractedDateTime = date.toUTCString().slice(5, 16);
        document.querySelector('.date-day').textContent = extractedDateTime;
  
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const todayForecast = dailyForecast[today];
        const weatherIconElement = document.querySelector('.weather-icon');
        weatherIconElement.innerHTML = getWeatherIcon(todayForecast.icon);
  
        document.querySelector('.location').textContent = response.data.city.name;
        document.querySelector('.weather-desc').textContent = todayForecast.description
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
  
        document.querySelector('.humidity .value').textContent = todayForecast.humidity + ' %';
        document.querySelector('.wind .value').textContent = todayForecast.windSpeed + ' m/s';
  
        const dayElements = document.querySelectorAll('.day-name');
        const tempElements = document.querySelectorAll('.day-temp');
        const iconElements = document.querySelectorAll('.day-icon');
  
        Object.keys(dailyForecast).slice(0, dayElements.length).forEach((day, index) => {
            const data = dailyForecast[day];
            dayElements[index].textContent = day;
            tempElements[index].textContent = `${Math.round(data.minTemp)}º / ${Math.round(data.maxTemp)}º`;
            iconElements[index].innerHTML = getWeatherIcon(data.icon);
        });
  
    } catch (error) {
        console.error('An error occurred while fetching the data:', error.message);
    }
}
  
function getWeatherIcon(iconCode) {
    const iconBaseUrl = 'https://openweathermap.org/img/wn/';
    const iconSize = '@2x.png';
    return `<img src="${iconBaseUrl}${iconCode}${iconSize}" alt="Weather Icon">`;
}

document.addEventListener("DOMContentLoaded", function () {
    getWeather();
    setInterval(getWeather, 900000); // Update every 15 minutes
});

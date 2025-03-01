const axios = require('axios');

module.exports = {
  getWeather: async () => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: 'Saint Petersburg',
        appid: process.env.WEATHER_API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  }
};
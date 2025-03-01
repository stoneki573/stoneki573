const math = require('mathjs');
const weatherAPI = require('./weatherAPI');
const database = require('./database');

module.exports = {
  calculateCurrency: (realPart, imaginaryPart) => {
    return math.complex(realPart, imaginaryPart);
  },

  getWeatherEffect: async () => {
    const weather = await weatherAPI.getWeather();
    const temperature = weather.main.temp;
    const isRain = weather.weather[0].main === 'Rain';

    let effect = {};
    if (isRain) {
      effect.message = 'Идёт дождь! Цены на топливо упали!';
      effect.currency = math.complex(0.5, -0.3); // Пример эффекта
    } else if (temperature > 10) {
      effect.message = 'Солнечно! Курс тепловозинов вырос.';
      effect.currency = math.complex(2.0, 1.5);
    } else {
      effect.message = 'Обычная погода. Курс стабилен.';
      effect.currency = math.complex(1.0, 1.0);
    }

    return effect;
  }
};
const { Telegraf } = require('telegraf');
const commands = require('./commands');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Подключение команд
commands.setup(bot);

// Запуск бота
bot.launch().then(() => {
  console.log('Бот запущен!');
});

// Обработка ошибок
bot.catch((err) => {
  console.error('Ошибка:', err);
});
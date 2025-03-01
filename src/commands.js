const Markup = require('telegraf/markup');
const gameLogic = require('./gameLogic');

module.exports = {
  setup: (bot) => {
    // Команда /start
    bot.start((ctx) => {
      ctx.reply('Добро пожаловать в мир тепловоза в панельном доме!', Markup.keyboard([
        ['🚂 Управление тепловозом', '👥 Общение с NPC'],
        ['🩺 Посещение врача', '⚙️ Настройки']
      ]).resize());
    });

    // Управление тепловозом
    bot.hears('🚂 Управление тепловозом', (ctx) => {
      ctx.reply('Что будешь делать?', Markup.inlineKeyboard([
        [Markup.button.callback('Ехать вперёд', 'move_forward')],
        [Markup.button.callback('Включить пар', 'enable_steam')]
      ]));
    });

    // Обработка действий
    bot.action('move_forward', (ctx) => {
      ctx.reply('Тепловоз начал движение!');
    });

    bot.action('enable_steam', (ctx) => {
      ctx.reply('Пар включён! Тепловоз готов к полёту.');
    });

    // Другие команды...
  }
};
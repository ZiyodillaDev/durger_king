const { Telegraf } = require("telegraf");
const TOKEN = "6168045855:AAFrEusHg3SMuoAmbEuW6LuhP9hvxJ75InY";
const bot = new Telegraf(TOKEN);

const web_link = "https://openbudget.uz/home";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link }}]],
    },
  })
);

bot.launch();

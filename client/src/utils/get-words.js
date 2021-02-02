const config = require('../../../config/env.json');

const words = require(`../../i18n/locales/${config.clientLocale}/motivation.json`);

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomQuote() {
  return randomItem(words.motivationalQuotes);
}

export function randomCompliment() {
  return randomItem(words.compliments);
}

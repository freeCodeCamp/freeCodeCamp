import words from '../../../config/motivational-quotes.json';

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomQuote() {
  return randomItem(words.motivationalQuotes);
}

export function randomCompliment() {
  return randomItem(words.compliments);
}

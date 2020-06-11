import words from '../../../config/motivationalQuotes.json';

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomQuote() {
  return randomItem(words.motivationalQuotes);
}

export function randomPhrase() {
  return randomItem(words.phrases);
}

export function randomVerb() {
  return randomItem(words.verbs);
}

export function randomCompliment() {
  return randomItem(words.compliments);
}

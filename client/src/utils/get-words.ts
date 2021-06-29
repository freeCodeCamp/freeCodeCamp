/* global preval */

// this lets us do dynamic work ahead of time, inlining motivation.json, so
// that Webpack will never try to include locales that we know are not used.

const words = preval`
  const config = require('../../../config/env.json');
  const { clientLocale } = config;
  const target = '../../i18n/locales/' + clientLocale + '/motivation.json';
  const words = require(target);
  module.exports = words;
`;

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomQuote() {
  return randomItem(words.motivationalQuotes);
}

export function randomCompliment() {
  return randomItem(words.compliments);
}

// this lets us do dynamic work ahead of time, inlining motivation.json, so
// that Webpack will never try to include locales that we know are not used.

interface Quote {
  quote: string;
  author: string;
}

interface Motivation {
  compliments: string[];
  motivationalQuotes: Quote[];
}

declare const preval: (s: TemplateStringsArray) => Motivation;

const words = preval`
  const config = require('../../../config/env.json');
  const { clientLocale } = config;
  const target = '../../i18n/locales/' + clientLocale + '/motivation.json';
  const words = require(target);
  module.exports = words;
`;

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomQuote(): Quote {
  return randomItem(words.motivationalQuotes);
}

export function randomCompliment(): string {
  return randomItem(words.compliments);
}

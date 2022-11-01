import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import yaml from 'js-yaml';

import envData from '../../../config/env.json';
const { clientLocale } = envData;

const cdnUrlCreator = (lang: string) =>
  `https://cdn.freecodecamp.org/universal/trending/${lang}.yaml`;

(async () => {
  const url = cdnUrlCreator(clientLocale);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `
      ----------------------------------------------------
      Error: The CDN is missing the trending YAML file.
      ----------------------------------------------------
      Unable to fetch the ${clientLocale} footer: ${res.statusText}
      `
    );
  }

  const data = await res.text();
  const trendingJSON = JSON.stringify(yaml.load(data));
  const trendingLocation = `./client/i18n/locales/${clientLocale}/trending.json`;
  writeFileSync(trendingLocation, trendingJSON);
})().catch(err => {
  console.log(err);
});

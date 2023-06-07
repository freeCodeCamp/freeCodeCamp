import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import yaml from 'js-yaml';
import envData from '../../../config/env.json';
import { trendingSchemaValidator } from './schema/trending-schema';

const { clientLocale } = envData;

const createCdnUrl = (lang: string) =>
  `https://cdn.freecodecamp.org/universal/trending/${lang}.yaml`;

const download = async (clientLocale: string) => {
  const url = createCdnUrl(clientLocale);
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

  const trendingObject = JSON.parse(trendingJSON) as Record<string, string>;
  const validationError =
    (trendingSchemaValidator(trendingObject).error as Error) || null;

  if (validationError) {
    throw new Error(
      `
    ----------------------------------------------------
    Error: The trending JSON is invalid.
    ----------------------------------------------------
    Unable to validate the ${clientLocale} trending JSON schema: ${validationError.message}
    `
    );
  }
};

void download(clientLocale);
// TODO: remove the need to fallback to english once we're confident it's
// unnecessary (client/i18n/config.js will need all references to 'en' removing)
if (clientLocale !== 'english') void download('english');

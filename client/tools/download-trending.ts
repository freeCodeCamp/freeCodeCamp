import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

import fetch from 'node-fetch';
import yaml from 'js-yaml';
import { config } from 'dotenv';

import { trendingSchemaValidator } from './schema/trending-schema';

config({ path: path.resolve(__dirname, '../../.env') });

const createCdnUrl = (lang: string) =>
  `https://cdn.freecodecamp.org/universal/trending/${lang}.yaml`;

const download = async (clientLocale: string) => {
  const url = createCdnUrl(clientLocale);

  const trendingLocation = path.resolve(
    __dirname,
    `../i18n/locales/${clientLocale}/trending.json`
  );

  const loadLocalTrendingJSON = () => {
    const localTrendingJSON = readFileSync(trendingLocation, 'utf8');

    if (!localTrendingJSON) {
      throw new Error(
        `
        ----------------------------------------------------
        Error: ${trendingLocation} is missing.
        ----------------------------------------------------
        `
      );
    }

    return localTrendingJSON;
  };

  const loadTrendingJSON = async () => {
    try {
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

      return trendingJSON;
    } catch (error) {
      if (process.env.FREECODECAMP_NODE_ENV === 'production') {
        throw new Error((error as Error).message);
      }

      return loadLocalTrendingJSON();
    }
  };

  const trendingJSON = await loadTrendingJSON();

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

const locale = process.env.CLIENT_LOCALE;

if (!locale) throw Error('CLIENT_LOCALE must be set to a valid locale');

void download(locale);
// TODO: remove the need to fallback to english once we're confident it's
// unnecessary (client/i18n/config.js will need all references to 'en' removing)
if (locale !== 'english') void download('english');

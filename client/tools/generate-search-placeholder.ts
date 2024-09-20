import { writeFileSync, readdirSync, lstatSync } from 'fs';
import { join, resolve } from 'path';
import algoliasearch from 'algoliasearch';
import i18n from 'i18next';
import backend from 'i18next-fs-backend';

import {
  algoliaAppId,
  algoliaAPIKey,
  clientLocale,
  environment
} from '../config/env.json';
import { newsIndex } from '../src/utils/algolia-locale-setup';
import { i18nextCodes } from '../../shared/config/i18n';

const i18nextCode = i18nextCodes[clientLocale as keyof typeof i18nextCodes];

i18n
  .use(backend)
  .init({
    defaultNS: 'translations',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    initImmediate: false,
    preload: readdirSync(join(__dirname, '../i18n/locales')).filter(
      fileName => {
        const joinedPath = join(join(__dirname, '../i18n/locales'), fileName);
        const isDirectory = lstatSync(joinedPath).isDirectory();
        return isDirectory;
      }
    ),
    lng: i18nextCode,
    ns: ['translations'],
    backend: {
      loadPath: resolve(
        __dirname,
        `../i18n/locales/${clientLocale}/translations.json`
      )
    }
  })
  .catch((error: Error) => {
    throw Error(error.message);
  });

const t = i18n.t.bind(i18n);

const convertToLocalizedString = (num: number, ISOCode: string) =>
  num.toLocaleString(ISOCode);

export const generateSearchPlaceholder = async () => {
  let placeholderText = t('search.placeholder.default');

  try {
    const algoliaClient = algoliasearch(algoliaAppId, algoliaAPIKey);
    const index = algoliaClient.initIndex(newsIndex);
    const res = await index.search('');
    const roundedTotalRecords = Math.floor(res?.nbHits / 100) * 100;

    if (roundedTotalRecords > 100) {
      placeholderText = i18n.t('search.placeholder.numbered', {
        roundedTotalRecords: convertToLocalizedString(
          roundedTotalRecords,
          i18nextCode
        )
      });
    }
  } catch (err) {
    if (environment === 'production') {
      console.warn(`
  ----------------------------------------------------------
  Warning: Could not get the total number of Algolia records
  ----------------------------------------------------------
  Make sure that Algolia keys and index are set up correctly.

  Falling back to the default search placeholder text.
  ----------------------------------------------------------
`);
    }
  }

  writeFileSync(
    resolve(__dirname, `../i18n/locales/${clientLocale}/search-bar.json`),
    JSON.stringify({
      placeholder: placeholderText
    })
  );
};

void generateSearchPlaceholder();

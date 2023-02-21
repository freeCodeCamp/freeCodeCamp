import path from 'path';
import { readFile } from 'fs/promises';
import { availableLangs } from '../../config/i18n';
import introSchema from './locales/english/intro.json';
import linksSchema from './locales/english/links.json';
import metaTagsSchema from './locales/english/meta-tags.json';
import motivationSchema from './locales/english/motivation.json';
import translationsSchema from './locales/english/translations.json';

type MotivationalQuotes = { quote: string; author: string }[];

/**
 * Flattens a nested object structure into a single
 * object with property chains as keys.
 * @param {Object} obj Object to flatten
 * @param {String} namespace Used for property chaining
 */
const flattenAnObject = (obj: Record<string, unknown>, namespace = '') => {
  const flattened: Record<string, unknown> = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    const field = namespace ? `${namespace}.${key}` : key;
    if (Array.isArray(value)) {
      flattened[field] = value;
    } else if (typeof value === 'object') {
      Object.assign(
        flattened,
        flattenAnObject(value as Record<string, unknown>, field)
      );
    } else {
      flattened[field] = value;
    }
  });
  return flattened;
};

/**
 * Checks if a translation object is missing keys
 * that are present in the schema.
 * @param {String[]} file Array of translation object's keys
 * @param {String[]} schema Array of matching schema's keys
 * @param {String} path string path to file
 */
const findMissingKeys = (file: string[], schema: string[], path: string) => {
  const missingKeys = [];
  for (const key of schema) {
    if (!file.includes(key)) {
      missingKeys.push(key);
    }
  }
  if (missingKeys.length) {
    console.warn(
      `${path} is missing these required keys: ${missingKeys.join(', ')}`
    );
  }
};

/**
 * Checks if a translation object has extra
 * keys which are NOT present in the schema.
 * @param {String[]} file Array of translation object's keys
 * @param {String[]} schema Array of matching schema's keys
 * @param {String} path string path to file
 */
const findExtraneousKeys = (file: string[], schema: string[], path: string) => {
  const extraKeys = [];
  for (const key of file) {
    if (!schema.includes(key)) {
      extraKeys.push(key);
    }
  }
  if (extraKeys.length) {
    console.warn(
      `${path} has these keys that are not in the schema: ${extraKeys.join(
        ', '
      )}`
    );
  }
};

/**
 * Validates that all values in the object are non-empty. Includes
 * validation of nested objects.
 * @param {Object} obj The object to check the values of
 * @param {String} namespace String for tracking nested properties
 */
const noEmptyObjectValues = (
  obj: Record<string, unknown>,
  namespace = ''
): string[] => {
  const emptyKeys = [];
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const field = namespace ? `${namespace}.${key}` : key;
    if (Array.isArray(value)) {
      if (!value.length) {
        emptyKeys.push(field);
      }
    } else if (typeof value === 'object') {
      emptyKeys.push(
        noEmptyObjectValues(value as Record<string, unknown>, field)
      );
    } else if (!value) {
      emptyKeys.push(field);
    }
  }
  return emptyKeys.flat();
};

/**
 * Grab the schema keys once, to avoid overhead of
 * fetching within iterative function.
 */
const translationSchemaKeys = Object.keys(flattenAnObject(translationsSchema));
const motivationSchemaKeys = Object.keys(flattenAnObject(motivationSchema));
const introSchemaKeys = Object.keys(flattenAnObject(introSchema));
const metaTagsSchemaKeys = Object.keys(flattenAnObject(metaTagsSchema));
const linksSchemaKeys = Object.keys(flattenAnObject(linksSchema));

/**
 * Function that checks the translations.json file
 * for each available client language.
 * @param {String[]} languages List of languages to test
 */
const translationSchemaValidation = (languages: string[]) => {
  languages.forEach(language => {
    void readJsonFile(language, 'translations').then(fileJson => {
      schemaValidation(
        language,
        'translations',
        fileJson,
        translationSchemaKeys
      );
    });
  });
};

/**
 * Function that checks the motivation.json file
 * for each available client language.
 * @param {String[]} languages List of languages to test
 */
const motivationSchemaValidation = (languages: string[]) => {
  languages.forEach(language => {
    void readJsonFile(language, 'motivation').then(fileJson => {
      schemaValidation(language, 'motivation', fileJson, motivationSchemaKeys);
    });
  });
};

/**
 * Function that checks the intro.json file
 * for each available client language.
 * @param {String[]} languages List of languages to test
 */
const introSchemaValidation = (languages: string[]) => {
  languages.forEach(language => {
    void readJsonFile(language, 'intro').then(fileJson => {
      schemaValidation(language, 'intro', fileJson, introSchemaKeys);
    });
  });
};

/**
 * Function that checks the meta-tags.json file
 * for each available client language.
 * @param {String[]} languages List of languages to test
 */
const metaTagsSchemaValidation = (languages: string[]) => {
  languages.forEach(language => {
    void readJsonFile(language, 'meta-tags').then(fileJson => {
      schemaValidation(language, 'meta-tags', fileJson, metaTagsSchemaKeys);
    });
  });
};

/**
 * Function that checks the links.json file
 * for each available client language.
 * @param {String[]} languages List of languages to test
 */
const linksSchemaValidation = (languages: string[]) => {
  languages.forEach(language => {
    void readJsonFile(language, 'links').then(fileJson => {
      schemaValidation(language, 'links', fileJson, linksSchemaKeys);
    });
  });
};

/**
 * Common Function that checks the json file
 * @param {String} language the language to test
 * @param {String} fileName the fileName of json file to test
 * @param {Object} fileJson the fileJson got by readJsonFile
 * @param {String[]} schemaKeys Array of matching schema's keys
 */
const schemaValidation = (
  language: string,
  fileName: string,
  fileJson: Record<string, unknown>,
  schemaKeys: string[]
) => {
  const fileKeys = Object.keys(flattenAnObject(fileJson));
  findMissingKeys(fileKeys, schemaKeys, `${language}/${fileName}.json`);
  findExtraneousKeys(fileKeys, schemaKeys, `${language}/${fileName}.json`);
  const emptyKeys = noEmptyObjectValues(fileJson);
  if (emptyKeys.length) {
    console.warn(
      `${language}/${fileName}.json has these empty keys: ${emptyKeys.join(
        ', '
      )}`
    );
  }
  // Special line to assert that objects in motivational quote are correct
  if (
    fileName === 'motivation' &&
    !(fileJson.motivationalQuotes as MotivationalQuotes).every(
      object =>
        Object.prototype.hasOwnProperty.call(object, 'quote') &&
        Object.prototype.hasOwnProperty.call(object, 'author')
    )
  ) {
    console.warn(`${language}/${fileName}.json has malformed quote objects.`);
  }
  console.info(`${language} ${fileName}.json validation complete`);
};

const readJsonFile = async (language: string, fileName: string) => {
  const filePath = path.join(
    __dirname,
    `/locales/${language}/${fileName}.json`
  );
  const file = await readFile(filePath, 'utf8');
  const fileJson = JSON.parse(file) as Record<string, unknown>;
  return fileJson;
};

const translatedLangs = availableLangs.client.filter(x => x !== 'english');

translationSchemaValidation(translatedLangs);
motivationSchemaValidation(translatedLangs);
introSchemaValidation(translatedLangs);
metaTagsSchemaValidation(translatedLangs);
linksSchemaValidation(translatedLangs);

import fs from 'fs';
import path from 'path';
import introObject from '../../../client/i18n/locales/english/intro.json';
import linksObject from '../../../client/i18n/locales/english/links.json';
import metaObject from '../../../client/i18n/locales/english/meta-tags.json';
import motivationObject from '../../../client/i18n/locales/english/motivation.json';
import translationsObject from '../../../client/i18n/locales/english/translations.json';
// If this trending.json is missing, most likely the download-trending script failed.
import trendingObject from '../../../client/i18n/locales/english/trending.json';

/**
 * Function to flatten a nested object. Written specifically for
 * our translation flow, the `namespace` value is used to create the
 * property chains that are used in the i18n replacement scripts.
 */
const flattenAnObject = (
  obj: Record<string, unknown>,
  namespace = ''
): Record<string, unknown> => {
  const flattened: Record<string, unknown> = {};
  Object.keys(obj).forEach((key: string) => {
    if (Array.isArray(obj[key])) {
      flattened[namespace ? `${namespace}.${key}` : key] = obj[key];
    } else if (typeof obj[key] === 'object') {
      Object.assign(
        flattened,
        flattenAnObject(
          obj[key] as Record<string, unknown>,
          namespace ? `${namespace}.${key}` : key
        )
      );
    } else {
      flattened[namespace ? `${namespace}.${key}` : key] = obj[key];
    }
  });
  return flattened;
};

const translationKeys: string[] = Object.keys(
  flattenAnObject(translationsObject)
);
const metaKeys: string[] = Object.keys(flattenAnObject(metaObject));
const motivationKeys: string[] = Object.keys(flattenAnObject(motivationObject));
const introKeys: string[] = Object.keys(flattenAnObject(introObject));
const trendingKeys: string[] = Object.keys(flattenAnObject(trendingObject));
const linksKeys: string[] = Object.keys(flattenAnObject(linksObject));

/**
 * Recursively read through the directory, grabbing .js files
 * in each nested subdirectory and concatenating them all in
 * to one string.
 */
const readComponentCode = (filePath: string): string => {
  let code = '';
  const isItFolder: boolean = fs.lstatSync(filePath).isDirectory();
  if (isItFolder) {
    const contents: string[] = fs.readdirSync(filePath);
    contents.forEach((file: string) => {
      code += readComponentCode(path.join(filePath + '/' + file));
    });
  } else {
    if (!filePath.endsWith('.js') || filePath.endsWith('.test.js')) {
      return '';
    }
    code += fs.readFileSync(filePath);
  }
  return code;
};

const clientCodebase: string = readComponentCode(
  path.join(process.cwd() + '/src')
);
const serverCodebase: string = readComponentCode(
  path.join(process.cwd() + '/../api-server/src/server')
);

for (const key of translationKeys) {
  if (!clientCodebase.includes(key) && !serverCodebase.includes(key)) {
    console.warn(`The translation key '${key}' appears to be unused.`);
  }
}
for (const key of motivationKeys) {
  if (!clientCodebase.includes(key) && !serverCodebase.includes(key)) {
    console.warn(`The motivation key '${key}' appears to be unused.`);
  }
}
for (const key of metaKeys) {
  if (!clientCodebase.includes(key) && !serverCodebase.includes(key)) {
    console.warn(`The meta key '${key}' appears to be unused.`);
  }
}
for (const key of introKeys) {
  if (!clientCodebase.includes(key) && !serverCodebase.includes(key)) {
    console.warn(`The intro key '${key}' appears to be unused.`);
  }
}
for (const key of trendingKeys) {
  if (!clientCodebase.includes(key) && !serverCodebase.includes(key)) {
    console.warn(`The trending key '${key}' appears to be unused.`);
  }
}
for (const key of linksKeys) {
  if (!clientCodebase.includes(key) && !serverCodebase.includes(key)) {
    console.warn(`The links key '${key}' appears to be unused.`);
  }
}

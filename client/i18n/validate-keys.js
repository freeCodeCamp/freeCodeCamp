const fs = require('fs');
const path = require('path');
const translationsObject = require('./locales/english/translations.json');

const flattenAnObject = (obj, namespace = '') => {
  const flattened = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      Object.assign(
        flattened,
        flattenAnObject(obj[key], namespace ? `${namespace}.${key}` : key)
      );
    } else {
      flattened[namespace ? `${namespace}.${key}` : key] = obj[key];
    }
  });
  return flattened;
};

const flattenedSchema = flattenAnObject(translationsObject);

const keyStrings = Object.keys(flattenedSchema);

const readComponentCode = filePath => {
  let code = '';
  const isItFolder = fs.lstatSync(filePath).isDirectory();
  if (isItFolder) {
    const contents = fs.readdirSync(filePath);
    contents.forEach(file => {
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

const clientCodebase = readComponentCode(path.join(process.cwd() + '/src'));

for (const key of keyStrings) {
  if (!clientCodebase.includes(key)) {
    console.warn(`The translation key '${key}' appears to be unused.`);
  }
}

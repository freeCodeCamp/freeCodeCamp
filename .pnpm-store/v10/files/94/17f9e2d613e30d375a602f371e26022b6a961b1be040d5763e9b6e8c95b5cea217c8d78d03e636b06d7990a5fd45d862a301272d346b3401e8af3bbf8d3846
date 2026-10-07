const fs = require('fs');
const path = require('path');
const flatted = require('flatted');

function tryParse(filePath, defaultValue) {
  let result;
  try {
    result = readJSON(filePath);
  } catch (ex) {
    result = defaultValue;
  }
  return result;
}

/**
 * Read json file synchronously using flatted
 *
 * @param  {String} filePath Json filepath
 * @returns {*} parse result
 */
function readJSON(filePath) {
  return flatted.parse(
    fs.readFileSync(filePath, {
      encoding: 'utf8',
    })
  );
}

/**
 * Write json file synchronously using circular-json
 *
 * @param  {String} filePath Json filepath
 * @param  {*} data Object to serialize
 */
function writeJSON(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), {
    recursive: true,
  });
  fs.writeFileSync(filePath, flatted.stringify(data));
}

module.exports = { tryParse, readJSON, writeJSON };

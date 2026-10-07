#!/usr/bin/env node
// @flow
"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const windows = (array, size) => {
  const output = [];

  for (let ii = 0; ii < array.length - size + 1; ii++) {
    output.push(array.slice(ii, ii + size));
  }

  return output;
};

const getDocIndexRules = () => {
  const content = _fs.default.readFileSync(_path.default.resolve(__dirname, '../../.README/README.md'), 'utf-8');

  const rules = content.split('\n').map(line => {
    const match = /^{"gitdown": "include", "file": "([^"]+)"}$/u.exec(line);

    if (match === null) {
      return null;
    }

    return match[1].replace('./rules/', '').replace('.md', '');
  }).filter(rule => {
    return rule !== null;
  });

  if (rules.length === 0) {
    throw new Error('Docs checker is broken - it could not extract rules from docs index file.');
  }

  return rules;
};

const hasCorrectAssertions = (docPath, name) => {
  const content = _fs.default.readFileSync(docPath, 'utf-8');

  const match = /<!-- assertions ([A-Za-z]+) -->/u.exec(content);

  if (match === null) {
    return false;
  }

  return match[1] === name;
};
/**
 * Performed checks:
 *  - file `/.README/rules/<rule>.md` exists
 *  - file `/.README/rules/<rule>.md` contains correct assertions placeholder (`<!-- assertions ... -->`)
 *  - rule is included in gitdown directive in `/.README/README.md`
 *  - rules in `/.README/README.md` are alphabetically sorted
 */


const checkDocs = rulesNames => {
  const docIndexRules = getDocIndexRules();
  const sorted = windows(docIndexRules, 2).every(chunk => {
    return chunk[0] < chunk[1];
  });

  if (!sorted) {
    throw new Error('Rules are not alphabetically sorted in `.README/README.md` file.');
  }

  const invalid = rulesNames.filter(names => {
    const docPath = _path.default.resolve(__dirname, '../../.README/rules', names[1] + '.md');

    const docExists = (0, _utilities.isFile)(docPath);
    const inIndex = docIndexRules.includes(names[1]);
    const hasAssertions = docExists ? hasCorrectAssertions(docPath, names[0]) : false;
    return !(docExists && inIndex && hasAssertions);
  });

  if (invalid.length > 0) {
    const invalidList = invalid.map(names => {
      return names[0];
    }).join(', ');
    throw new Error('Docs checker encountered an error in: ' + invalidList + '. ' + 'Make sure that for every rule you created documentation file with assertions placeholder in camelCase ' + 'and included the file path in `.README/README.md` file.');
  }
};

checkDocs((0, _utilities.getRules)());
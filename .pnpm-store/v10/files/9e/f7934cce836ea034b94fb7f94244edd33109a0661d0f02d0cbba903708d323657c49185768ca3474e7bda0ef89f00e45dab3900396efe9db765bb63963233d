"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
const getTestIndexRules = () => {
  const content = _fs.default.readFileSync(_path.default.resolve(__dirname, '../../tests/rules/index.js'), 'utf-8'); // eslint-disable-next-line unicorn/no-reduce


  const result = content.split('\n').reduce((acc, line) => {
    if (acc.inRulesArray) {
      if (line === '];') {
        acc.inRulesArray = false;
      } else {
        acc.rules.push(line.replace(/^\s*'([^']+)',?$/, '$1'));
      }
    } else if (line === 'const reportingRules = [') {
      acc.inRulesArray = true;
    }

    return acc;
  }, {
    inRulesArray: false,
    rules: []
  });
  const rules = result.rules;

  if (rules.length === 0) {
    throw new Error('Tests checker is broken - it could not extract rules from test index file.');
  }

  return rules;
};
/**
 * Performed checks:
 *  - file `/tests/rules/assertions/<rule>.js` exists
 *  - rule is included in `reportingRules` variable in `/tests/rules/index.js`
 */


const checkTests = rulesNames => {
  const testIndexRules = getTestIndexRules();
  const invalid = rulesNames.filter(names => {
    const testExists = (0, _utilities.isFile)(_path.default.resolve(__dirname, '../../tests/rules/assertions', names[0] + '.js'));
    const inIndex = testIndexRules.includes(names[1]);
    return !(testExists && inIndex);
  });

  if (invalid.length > 0) {
    const invalidList = invalid.map(names => {
      return names[0];
    }).join(', ');
    throw new Error('Tests checker encountered an error in: ' + invalidList + '. ' + 'Make sure that for every rule you created test suite and included the rule name in `tests/rules/index.js` file.');
  }
};

checkTests((0, _utilities.getRules)());
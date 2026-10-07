#!/usr/bin/env node

/**
 * @file This script is used to inline assertions into the README.md documents.
 */
"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _glob = _interopRequireDefault(require("glob"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formatCodeSnippet = setup => {
  const paragraphs = [];

  if (setup.options) {
    paragraphs.push('// Options: ' + JSON.stringify(setup.options));
  }

  if (setup.settings) {
    paragraphs.push('// Settings: ' + JSON.stringify(setup.settings));
  }

  paragraphs.push(setup.code);

  if (setup.errors) {
    setup.errors.forEach(message => {
      paragraphs.push('// Message: ' + message.message);
    });
  }

  if (setup.rules) {
    paragraphs.push('// Additional rules: ' + JSON.stringify(setup.rules));
  }

  return paragraphs.join('\n');
};

const getAssertions = () => {
  const assertionFiles = _glob.default.sync(_path.default.resolve(__dirname, '../../tests/rules/assertions/*.js'));

  const assertionNames = _lodash.default.map(assertionFiles, filePath => {
    return _path.default.basename(filePath, '.js');
  });

  const assertionCodes = _lodash.default.map(assertionFiles, filePath => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const codes = require(filePath);

    return {
      invalid: _lodash.default.map(codes.invalid, formatCodeSnippet),
      valid: _lodash.default.map(codes.valid, formatCodeSnippet)
    };
  });

  return _lodash.default.zipObject(assertionNames, assertionCodes);
};

const updateDocuments = assertions => {
  const readmeDocumentPath = _path.default.join(__dirname, '../../README.md');

  let documentBody;
  documentBody = _fs.default.readFileSync(readmeDocumentPath, 'utf8');
  documentBody = documentBody.replace(/<!-- assertions ([a-z]+?) -->/gi, assertionsBlock => {
    let exampleBody;
    const ruleName = assertionsBlock.match(/assertions ([a-z]+)/i)[1];
    const ruleAssertions = assertions[ruleName];

    if (!ruleAssertions) {
      throw new Error('No assertions available for rule "' + ruleName + '".');
    }

    exampleBody = '';

    if (ruleAssertions.invalid.length) {
      exampleBody += 'The following patterns are considered problems:\n\n```js\n' + ruleAssertions.invalid.join('\n\n') + '\n```\n\n';
    }

    if (ruleAssertions.valid.length) {
      exampleBody += 'The following patterns are not considered problems:\n\n```js\n' + ruleAssertions.valid.join('\n\n') + '\n```\n\n';
    }

    return exampleBody;
  });

  _fs.default.writeFileSync(readmeDocumentPath, documentBody);
};

updateDocuments(getAssertions());
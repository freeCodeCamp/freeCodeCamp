"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preprocess = exports.postprocess = void 0;

// https://eslint.org/docs/developer-guide/working-with-plugins#processors-in-plugins
// https://github.com/typescript-eslint/typescript-eslint/issues/808
const preprocess = source => [source];

exports.preprocess = preprocess;

const postprocess = messages => // snapshot files should only be linted with snapshot specific rules
messages[0].filter(message => message.ruleId === 'jest/no-large-snapshots');

exports.postprocess = postprocess;
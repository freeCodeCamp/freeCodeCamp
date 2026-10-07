'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boolify = boolify;
exports.boolifyWithDefault = boolifyWithDefault;
const FALSY_STRINGS = new Set(['0', 'false']);

function boolify(val) {
  return !FALSY_STRINGS.has(val.toString().toLowerCase());
}

function boolifyWithDefault(val, defaultResult) {
  return val === '' || val === null || val === undefined ? defaultResult : boolify(val);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapValues = mapValues;

/* eslint-disable no-param-reassign, import/prefer-default-export */
function mapValues(object, fn) {
  return Object.keys(object).reduce((memo, key) => {
    memo[key] = fn(object[key]);
    return memo;
  }, {});
}
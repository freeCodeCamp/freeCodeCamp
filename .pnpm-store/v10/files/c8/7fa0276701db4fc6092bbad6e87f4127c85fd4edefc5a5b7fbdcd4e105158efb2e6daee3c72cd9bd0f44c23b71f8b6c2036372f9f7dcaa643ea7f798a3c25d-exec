"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitAt = splitAt;
exports.findIndex = void 0;

/* eslint-disable import/prefer-default-export */
const findIndex = [].findIndex ? function findIndex(array, fn) {
  return array.findIndex(fn);
} : function findIndex(array, fn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (fn(array[i], i, array)) {
      return i;
    }
  }

  return -1;
};
exports.findIndex = findIndex;

function splitAt(array, index) {
  return [array.slice(0, index), array.slice(index)];
}
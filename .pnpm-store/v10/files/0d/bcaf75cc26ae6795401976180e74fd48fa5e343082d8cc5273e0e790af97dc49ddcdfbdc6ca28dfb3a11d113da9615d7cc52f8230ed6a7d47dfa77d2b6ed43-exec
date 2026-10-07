"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findDispatchableActionIndex;

var _reduxSaga = require("redux-saga");

var _array = require("../utils/array");

function findDispatchableActionIndex(actions, pattern) {
  if (pattern == null || actions.length <= 0) {
    return -1;
  }

  if (pattern === '*') {
    return 0;
  }

  if (typeof pattern === 'function' && hasOwn(pattern, 'toString')) {
    return findDispatchableActionIndex(actions, String(pattern));
  }

  if (typeof pattern === 'function') {
    // Refinements not catching that `pattern` is a function
    // $FlowFixMe
    return (0, _array.findIndex)(actions, a => pattern(a));
  }

  if (Array.isArray(pattern)) {
    for (let i = 0, l = pattern.length; i < l; i++) {
      const index = findDispatchableActionIndex(actions, pattern[i]);

      if (index > -1) {
        return index;
      }
    }

    return -1;
  }

  return (0, _array.findIndex)(actions, a => a.type === pattern || a.type === _reduxSaga.END.type);
}

function hasOwn(object, key) {
  return {}.hasOwnProperty.call(object, key);
}
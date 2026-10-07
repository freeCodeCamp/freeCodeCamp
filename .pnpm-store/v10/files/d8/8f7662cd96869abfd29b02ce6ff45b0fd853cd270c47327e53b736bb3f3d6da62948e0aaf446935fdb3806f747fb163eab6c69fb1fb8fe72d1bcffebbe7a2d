"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getTokenAfterParens = (sourceCode, node) => {
  let token;
  token = sourceCode.getTokenAfter(node);

  while (token.type === 'Punctuator' && token.value === ')') {
    token = sourceCode.getTokenAfter(token);
  }

  return token;
};

var _default = getTokenAfterParens;
exports.default = _default;
module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// ported from babel/flow-object-type; original author: Nat Mote
// https://github.com/babel/eslint-plugin-babel/blob/c0a49d25a97feb12c1d07073a0b37317359a5fe5/rules/flow-object-type.js
const SEMICOLON = {
  char: ';',
  name: 'semicolon'
};
const COMMA = {
  char: ',',
  name: 'comma'
};

const create = context => {
  let GOOD;
  let BAD;

  if (!context.options[0] || context.options[0] === COMMA.name) {
    GOOD = COMMA;
    BAD = SEMICOLON;
  } else {
    GOOD = SEMICOLON;
    BAD = COMMA;
  }

  const requireProperPunctuation = node => {
    const sourceCode = context.getSourceCode();
    const tokens = sourceCode.getTokens(node);
    let lastToken;
    lastToken = tokens[tokens.length - 1];

    if (lastToken.type !== 'Punctuator' || !(lastToken.value === SEMICOLON.char || lastToken.value === COMMA.char)) {
      const parentTokens = sourceCode.getTokens(node.parent);
      lastToken = parentTokens[parentTokens.indexOf(lastToken) + 1];
    }

    if (lastToken.type === 'Punctuator' && lastToken.value === BAD.char) {
      context.report({
        fix(fixer) {
          return fixer.replaceText(lastToken, GOOD.char);
        },

        message: 'Prefer ' + GOOD.name + 's to ' + BAD.name + 's in object and class types',
        node: lastToken
      });
    }
  };

  return {
    ObjectTypeCallProperty: requireProperPunctuation,
    ObjectTypeIndexer: requireProperPunctuation,
    ObjectTypeProperty: requireProperPunctuation
  };
};

const schema = [{
  enum: ['semicolon', 'comma'],
  type: 'string'
}];
var _default = {
  create,
  meta: {
    fixable: 'code'
  },
  schema
};
exports.default = _default;
module.exports = exports.default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];

const isSemicolon = token => {
  return token.type === 'Punctuator' && token.value === ';';
};

const create = context => {
  const never = (context.options[0] || 'always') === 'never';
  const sourceCode = context.getSourceCode();

  const report = (node, missing) => {
    const lastToken = sourceCode.getLastToken(node);
    let fix;
    let message;
    let {
      loc
    } = lastToken;

    if (missing) {
      message = 'Missing semicolon.';
      loc = loc.end;

      fix = fixer => {
        return fixer.insertTextAfter(lastToken, ';');
      };
    } else {
      message = 'Extra semicolon.';
      loc = loc.start;

      fix = fixer => {
        return fixer.remove(lastToken);
      };
    }

    context.report({
      fix,
      loc,
      message,
      node
    });
  };

  const checkForSemicolon = node => {
    const lastToken = sourceCode.getLastToken(node);
    const isLastTokenSemicolon = isSemicolon(lastToken);

    if (never && isLastTokenSemicolon) {
      report(node, false);
    }

    if (!never && !isLastTokenSemicolon) {
      report(node, true);
    }
  };

  return {
    OpaqueType: checkForSemicolon,
    TypeAlias: checkForSemicolon,
    TypeAnnotation: node => {
      if (node.parent.type === 'ClassProperty') {
        checkForSemicolon(node.parent);
      }
    }
  };
};

var _default = {
  create,
  meta: {
    fixable: 'code'
  },
  schema
};
exports.default = _default;
module.exports = exports.default;
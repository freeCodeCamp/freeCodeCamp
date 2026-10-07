"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];

const create = context => {
  const sourceCode = context.getSourceCode();
  const always = (context.options[0] || 'always') === 'always';

  const check = node => {
    for (const [index, type] of node.types.entries()) {
      if (index + 1 === node.types.length) {
        continue;
      }

      const separator = (0, _utilities.getTokenAfterParens)(sourceCode, type);
      const endOfType = sourceCode.getTokenBefore(separator);
      const nextType = sourceCode.getTokenAfter(separator);
      const spaceBefore = separator.range[0] - endOfType.range[1];
      const spaceAfter = nextType.range[0] - separator.range[1];
      const data = {
        type: node.type === 'UnionTypeAnnotation' ? 'union' : 'intersection'
      };

      if (always) {
        if (!spaceBefore) {
          context.report({
            data,
            fix: _utilities.spacingFixers.addSpaceAfter(endOfType),
            message: 'There must be a space before {{type}} type annotation separator',
            node
          });
        }

        if (!spaceAfter) {
          context.report({
            data,
            fix: _utilities.spacingFixers.addSpaceAfter(separator),
            message: 'There must be a space after {{type}} type annotation separator',
            node
          });
        }
      } else {
        if (spaceBefore) {
          context.report({
            data,
            fix: _utilities.spacingFixers.stripSpacesAfter(endOfType, spaceBefore),
            message: 'There must be no space before {{type}} type annotation separator',
            node
          });
        }

        if (spaceAfter) {
          context.report({
            data,
            fix: _utilities.spacingFixers.stripSpacesAfter(separator, spaceAfter),
            message: 'There must be no space after {{type}} type annotation separator',
            node
          });
        }
      }
    }
  };

  return {
    IntersectionTypeAnnotation: check,
    UnionTypeAnnotation: check
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
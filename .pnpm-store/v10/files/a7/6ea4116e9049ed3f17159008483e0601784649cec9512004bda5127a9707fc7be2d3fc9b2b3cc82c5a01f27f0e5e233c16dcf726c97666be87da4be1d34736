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
  const never = (context.options[0] || 'never') === 'never';
  return {
    GenericTypeAnnotation(node) {
      const types = node.typeParameters; // Promise<foo>
      // ^^^^^^^^^^^^ GenericTypeAnnotation (with typeParameters)
      //         ^^^  GenericTypeAnnotation (without typeParameters)

      if (!types) {
        return;
      }

      const [opener, firstInnerToken] = sourceCode.getFirstTokens(types, 2);
      const [lastInnerToken, closer] = sourceCode.getLastTokens(types, 2);
      const spacesBefore = firstInnerToken.range[0] - opener.range[1];
      const spacesAfter = closer.range[0] - lastInnerToken.range[1];

      if (never) {
        if (spacesBefore) {
          const whiteSpaceBefore = sourceCode.text[opener.range[1]];

          if (whiteSpaceBefore !== '\n' && whiteSpaceBefore !== '\r') {
            context.report({
              data: {
                name: node.id.name
              },
              fix: _utilities.spacingFixers.stripSpacesAfter(opener, spacesBefore),
              message: 'There must be no space at start of "{{name}}" generic type annotation',
              node: types
            });
          }
        }

        if (spacesAfter) {
          const whiteSpaceAfter = sourceCode.text[closer.range[0] - 1];

          if (whiteSpaceAfter !== '\n' && whiteSpaceAfter !== '\r') {
            context.report({
              data: {
                name: node.id.name
              },
              fix: _utilities.spacingFixers.stripSpacesAfter(lastInnerToken, spacesAfter),
              message: 'There must be no space at end of "{{name}}" generic type annotation',
              node: types
            });
          }
        }
      } else {
        if (spacesBefore > 1) {
          context.report({
            data: {
              name: node.id.name
            },
            fix: _utilities.spacingFixers.stripSpacesAfter(opener, spacesBefore - 1),
            message: 'There must be one space at start of "{{name}}" generic type annotation',
            node: types
          });
        } else if (spacesBefore === 0) {
          context.report({
            data: {
              name: node.id.name
            },
            fix: _utilities.spacingFixers.addSpaceAfter(opener),
            message: 'There must be a space at start of "{{name}}" generic type annotation',
            node: types
          });
        }

        if (spacesAfter > 1) {
          context.report({
            data: {
              name: node.id.name
            },
            fix: _utilities.spacingFixers.stripSpacesAfter(lastInnerToken, spacesAfter - 1),
            message: 'There must be one space at end of "{{name}}" generic type annotation',
            node: types
          });
        } else if (spacesAfter === 0) {
          context.report({
            data: {
              name: node.id.name
            },
            fix: _utilities.spacingFixers.addSpaceAfter(lastInnerToken),
            message: 'There must be a space at end of "{{name}}" generic type annotation',
            node: types
          });
        }
      }
    }

  };
};

const meta = {
  fixable: 'whitespace'
};
var _default = {
  create,
  meta,
  schema
};
exports.default = _default;
module.exports = exports.default;
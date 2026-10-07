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
const meta = {
  fixable: 'code'
};

const sameLine = (left, right) => {
  return left.loc.end.line === right.loc.start.line;
};

const create = context => {
  var _context$options$;

  const never = ((_context$options$ = context === null || context === void 0 ? void 0 : context.options[0]) !== null && _context$options$ !== void 0 ? _context$options$ : 'never') === 'never';
  const sourceCode = context.getSourceCode();
  return {
    ObjectTypeAnnotation(node) {
      const {
        properties
      } = node;

      if (properties.length === 0) {
        return;
      }

      const [opener, firstInnerToken] = sourceCode.getFirstTokens(node, 2);
      const [lastInnerToken, closer] = sourceCode.getLastTokens(node, 2);
      const spacesBefore = firstInnerToken.range[0] - opener.range[1];
      const spacesAfter = closer.range[0] - lastInnerToken.range[1]; // Check the opening brace

      if (sameLine(opener, firstInnerToken)) {
        if (never && spacesBefore) {
          context.report({
            data: {
              token: opener.value
            },
            fix: _utilities.spacingFixers.stripSpacesAfter(opener, spacesBefore),
            message: 'There must be no space after "{{token}}".',
            node
          });
        } else if (!never && !spacesBefore) {
          context.report({
            data: {
              token: opener.value
            },
            fix: _utilities.spacingFixers.addSpaceAfter(opener),
            message: 'A space is required after "{{token}}".',
            node
          });
        }
      } // Check the closing brace


      if (sameLine(lastInnerToken, closer)) {
        if (never && spacesAfter) {
          context.report({
            data: {
              token: closer.value
            },
            fix: _utilities.spacingFixers.stripSpacesBefore(closer, spacesAfter),
            message: 'There must be no space before "{{token}}".',
            node
          });
        } else if (!never && !spacesAfter) {
          context.report({
            data: {
              token: closer.value
            },
            fix: _utilities.spacingFixers.addSpaceAfter(lastInnerToken),
            message: 'A space is required before "{{token}}".',
            node
          });
        }
      }
    }

  };
};

var _default = {
  create,
  meta,
  schema
};
exports.default = _default;
module.exports = exports.default;
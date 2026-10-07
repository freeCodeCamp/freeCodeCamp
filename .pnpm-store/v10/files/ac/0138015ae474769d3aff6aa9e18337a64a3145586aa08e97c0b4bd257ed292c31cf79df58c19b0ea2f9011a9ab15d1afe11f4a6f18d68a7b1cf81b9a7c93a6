"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  report,
  utils
}) => {
  const iteratingFunction = utils.isIteratingFunction();
  if (iteratingFunction) {
    if (utils.hasATag(['class', 'constructor']) || utils.isConstructor()) {
      return;
    }
  } else if (!utils.isVirtualFunction()) {
    return;
  }
  utils.forEachPreferredTag('implements', tag => {
    report('@implements used on a non-constructor function', null, tag);
  });
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Reports an issue with any non-constructor function using `@implements`.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header'
    },
    schema: [{
      additionalProperties: false,
      properties: {
        contexts: {
          items: {
            anyOf: [{
              type: 'string'
            }, {
              additionalProperties: false,
              properties: {
                comment: {
                  type: 'string'
                },
                context: {
                  type: 'string'
                }
              },
              type: 'object'
            }]
          },
          type: 'array'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=implementsOnClasses.cjs.map
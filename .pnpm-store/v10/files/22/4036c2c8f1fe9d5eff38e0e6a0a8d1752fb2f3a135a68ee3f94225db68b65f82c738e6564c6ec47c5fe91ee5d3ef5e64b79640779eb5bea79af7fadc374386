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
  utils.forEachPreferredTag('returns', (jsdocTag, targetTagName) => {
    const type = jsdocTag.type && jsdocTag.type.trim();
    if (['void', 'undefined', 'Promise<void>', 'Promise<undefined>'].includes(type)) {
      return;
    }
    if (!jsdocTag.description.trim()) {
      report(`Missing JSDoc @${targetTagName} description.`, null, jsdocTag);
    }
  });
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires that the `@returns` tag has a `description` value.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header'
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
//# sourceMappingURL=requireReturnsDescription.cjs.map
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
  utils.forEachPreferredTag('property', (jsdoc, targetTagName) => {
    if (!jsdoc.description.trim()) {
      report(`Missing JSDoc @${targetTagName} "${jsdoc.name}" description.`, null, jsdoc);
    }
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Requires that each `@property` tag has a `description` value.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header'
    },
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=requirePropertyDescription.cjs.map
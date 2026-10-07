"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  jsdoc,
  report,
  settings
}) => {
  const {
    mode
  } = settings;

  // Don't check for "permissive" and "closure"
  if (mode === 'jsdoc' || mode === 'typescript') {
    for (const tag of jsdoc.tags) {
      if (tag.type.slice(-1) === '=') {
        report('Syntax should not be Google Closure Compiler style.', null, tag);
        break;
      }
    }
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header'
    },
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=checkSyntax.cjs.map
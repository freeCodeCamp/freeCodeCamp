"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const accessLevels = ['package', 'private', 'protected', 'public'];
var _default = exports.default = (0, _iterateJsdoc.default)(({
  report,
  utils
}) => {
  utils.forEachPreferredTag('access', (jsdocParameter, targetTagName) => {
    const desc = jsdocParameter.name + ' ' + jsdocParameter.description;
    if (!accessLevels.includes(desc.trim())) {
      report(`Missing valid JSDoc @${targetTagName} level.`, null, jsdocParameter);
    }
  });
  const accessLength = utils.getTags('access').length;
  const individualTagLength = utils.getPresentTags(accessLevels).length;
  if (accessLength && individualTagLength) {
    report('The @access tag may not be used with specific access-control tags (@package, @private, @protected, or @public).');
  }
  if (accessLength > 1 || individualTagLength > 1) {
    report('At most one access-control tag may be present on a jsdoc block.');
  }
}, {
  checkPrivate: true,
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Checks that `@access` tags have a valid value.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header'
    },
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=checkAccess.cjs.map
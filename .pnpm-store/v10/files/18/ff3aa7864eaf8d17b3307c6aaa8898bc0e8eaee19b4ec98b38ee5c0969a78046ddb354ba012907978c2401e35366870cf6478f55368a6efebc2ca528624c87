"use strict";

exports.__esModule = true;
exports.isPageTemplate = isPageTemplate;
exports.test = test;
var _gatsbyCoreUtils = require("gatsby-core-utils");
function isPageTemplate(s, c) {
  const filename = c.getFilename();
  if (!filename) {
    return false;
  }
  return s.getState().components.has((0, _gatsbyCoreUtils.slash)(filename));
}
function test(t) {
  return Object.assign(t, {
    parserOptions: {
      sourceType: `module`,
      ecmaVersion: 9
    }
  });
}
//# sourceMappingURL=eslint-rules-helpers.js.map
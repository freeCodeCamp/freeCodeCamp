"use strict";

const _excluded = ["babelOptions", "ecmaVersion", "sourceType", "requireConfigFile"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
module.exports = function normalizeESLintConfig(options) {
  const {
      babelOptions = {},
      ecmaVersion = 2020,
      sourceType = "module",
      requireConfigFile = true
    } = options,
    otherOptions = _objectWithoutPropertiesLoose(options, _excluded);
  return Object.assign({
    babelOptions: Object.assign({
      cwd: process.cwd()
    }, babelOptions),
    ecmaVersion: ecmaVersion === "latest" ? 1e8 : ecmaVersion,
    sourceType,
    requireConfigFile
  }, otherOptions);
};

//# sourceMappingURL=configuration.cjs.map

"use strict";

exports.__esModule = true;
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _helperPluginUtils = require("@babel/helper-plugin-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @babel/preset-modules produces clean, minimal output for ES Modules-supporting browsers.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode skips seldom-needed transforms that increase output size.
 */
var _default = (0, _helperPluginUtils.declare)((api, opts) => {
  api.assertVersion(7);
  const loose = opts.loose === true;
  return {
    plugins: [_path.default.resolve(__dirname, "./plugins/transform-edge-default-parameters"), _path.default.resolve(__dirname, "./plugins/transform-tagged-template-caching"), _path.default.resolve(__dirname, "./plugins/transform-jsx-spread"), _path.default.resolve(__dirname, "./plugins/transform-safari-for-shadowing"), _path.default.resolve(__dirname, "./plugins/transform-safari-block-shadowing"), _path.default.resolve(__dirname, "./plugins/transform-async-arrows-in-class"), !loose && _path.default.resolve(__dirname, "./plugins/transform-edge-function-name"), // Proposals
    require.resolve("@babel/plugin-proposal-unicode-property-regex"), require.resolve("@babel/plugin-transform-dotall-regex")].filter(Boolean)
  };
});

exports.default = _default;
module.exports = exports.default;
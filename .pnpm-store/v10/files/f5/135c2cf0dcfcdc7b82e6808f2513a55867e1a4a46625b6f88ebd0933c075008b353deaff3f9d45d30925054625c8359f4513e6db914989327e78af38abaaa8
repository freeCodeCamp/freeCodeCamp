"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.buildProductionBundle = void 0;
var _webpack = _interopRequireDefault(require("../utils/webpack.config"));
var _bundle = require("../utils/webpack/bundle");
const buildProductionBundle = async (program, parentSpan) => {
  const {
    directory
  } = program;
  const compilerConfig = await (0, _webpack.default)(program, directory, `build-javascript`, null, {
    parentSpan
  });
  return (0, _bundle.build)(compilerConfig);
};
exports.buildProductionBundle = buildProductionBundle;
//# sourceMappingURL=build-javascript.js.map
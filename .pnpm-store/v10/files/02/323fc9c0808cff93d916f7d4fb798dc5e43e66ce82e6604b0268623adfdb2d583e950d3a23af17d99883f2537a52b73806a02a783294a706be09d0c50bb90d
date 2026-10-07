"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.prepareRegex = void 0;
var _last2 = _interopRequireDefault(require("lodash/last"));
const prepareRegex = str => {
  const exploded = str.split(`/`);
  const regex = new RegExp(exploded.slice(1, -1).join(`/`), (0, _last2.default)(exploded));
  return regex;
};
exports.prepareRegex = prepareRegex;
//# sourceMappingURL=prepare-regex.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getAPI = void 0;
var _keys2 = _interopRequireDefault(require("lodash/keys"));
const getAPI = api => (0, _keys2.default)(api).reduce((merged, key) => {
  merged[key] = (0, _keys2.default)(api[key]);
  return merged;
}, {});
exports.getAPI = getAPI;
//# sourceMappingURL=get-api.js.map
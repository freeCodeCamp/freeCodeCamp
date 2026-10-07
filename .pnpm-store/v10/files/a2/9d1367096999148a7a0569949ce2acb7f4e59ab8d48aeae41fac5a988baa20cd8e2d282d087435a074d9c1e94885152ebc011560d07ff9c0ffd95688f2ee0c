"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getGatsbyVersion = void 0;
var _path = _interopRequireDefault(require("path"));
const getGatsbyVersion = () => {
  try {
    return require(_path.default.join(process.cwd(), `node_modules`, `gatsby`, `package.json`)).version;
  } catch (e) {
    return ``;
  }
};
exports.getGatsbyVersion = getGatsbyVersion;
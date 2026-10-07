"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.write = exports.exists = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
const APP_DATA_JSON = `app-data.json`;
const write = (publicDir, hash) => _fsExtra.default.outputJson(_path.default.join(publicDir, `page-data`, APP_DATA_JSON), {
  webpackCompilationHash: hash
});
exports.write = write;
const exists = publicDir => _fsExtra.default.pathExistsSync(_path.default.join(publicDir, `page-data`, APP_DATA_JSON));
exports.exists = exists;
//# sourceMappingURL=app-data.js.map
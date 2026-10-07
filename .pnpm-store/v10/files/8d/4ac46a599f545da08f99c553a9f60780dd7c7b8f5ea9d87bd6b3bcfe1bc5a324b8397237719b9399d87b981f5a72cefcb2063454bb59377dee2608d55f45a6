"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.developStatic = developStatic;
var _path = _interopRequireDefault(require("path"));
var _express = _interopRequireDefault(require("express"));
var _parseurl = _interopRequireDefault(require("parseurl"));
function developStatic(root, options) {
  const expressStatic = _express.default.static(root, options);
  return function (req, res, next) {
    if ([`GET`, `HEAD`].includes(req.method)) {
      const path = (0, _parseurl.default)(req).pathname;
      const parsedPath = _path.default.parse(path);
      if ([`.htm`, `.html`].includes(parsedPath.ext)) {
        return next();
      }
    }
    return expressStatic(req, res, next);
  };
}
//# sourceMappingURL=develop-static.js.map
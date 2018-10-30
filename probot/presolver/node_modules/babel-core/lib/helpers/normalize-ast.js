"use strict";

exports.__esModule = true;

exports.default = function (ast, comments, tokens) {
  if (ast) {
    if (ast.type === "Program") {
      return t.file(ast, comments || [], tokens || []);
    } else if (ast.type === "File") {
      return ast;
    }
  }

  throw new Error("Not a valid ast?");
};

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = exports["default"];
"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Whitespace = function () {
  function Whitespace(tokens) {
    (0, _classCallCheck3.default)(this, Whitespace);

    this.tokens = tokens;
    this.used = {};
  }

  Whitespace.prototype.getNewlinesBefore = function getNewlinesBefore(node) {
    var startToken = void 0;
    var endToken = void 0;
    var tokens = this.tokens;

    var index = this._findToken(function (token) {
      return token.start - node.start;
    }, 0, tokens.length);
    if (index >= 0) {
      while (index && node.start === tokens[index - 1].start) {
        --index;
      }startToken = tokens[index - 1];
      endToken = tokens[index];
    }

    return this._getNewlinesBetween(startToken, endToken);
  };

  Whitespace.prototype.getNewlinesAfter = function getNewlinesAfter(node) {
    var startToken = void 0;
    var endToken = void 0;
    var tokens = this.tokens;

    var index = this._findToken(function (token) {
      return token.end - node.end;
    }, 0, tokens.length);
    if (index >= 0) {
      while (index && node.end === tokens[index - 1].end) {
        --index;
      }startToken = tokens[index];
      endToken = tokens[index + 1];
      if (endToken && endToken.type.label === ",") endToken = tokens[index + 2];
    }

    if (endToken && endToken.type.label === "eof") {
      return 1;
    } else {
      return this._getNewlinesBetween(startToken, endToken);
    }
  };

  Whitespace.prototype._getNewlinesBetween = function _getNewlinesBetween(startToken, endToken) {
    if (!endToken || !endToken.loc) return 0;

    var start = startToken ? startToken.loc.end.line : 1;
    var end = endToken.loc.start.line;
    var lines = 0;

    for (var line = start; line < end; line++) {
      if (typeof this.used[line] === "undefined") {
        this.used[line] = true;
        lines++;
      }
    }

    return lines;
  };

  Whitespace.prototype._findToken = function _findToken(test, start, end) {
    if (start >= end) return -1;
    var middle = start + end >>> 1;
    var match = test(this.tokens[middle]);
    if (match < 0) {
      return this._findToken(test, middle + 1, end);
    } else if (match > 0) {
      return this._findToken(test, start, middle);
    } else if (match === 0) {
      return middle;
    }
    return -1;
  };

  return Whitespace;
}();

exports.default = Whitespace;
module.exports = exports["default"];
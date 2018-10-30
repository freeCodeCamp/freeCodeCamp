"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _sourceMap = require("source-map");

var _sourceMap2 = _interopRequireDefault(_sourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SourceMap = function () {
  function SourceMap(opts, code) {
    (0, _classCallCheck3.default)(this, SourceMap);

    this._cachedMap = null;
    this._code = code;
    this._opts = opts;
    this._rawMappings = [];
  }

  SourceMap.prototype.get = function get() {
    if (!this._cachedMap) {
      var map = this._cachedMap = new _sourceMap2.default.SourceMapGenerator({
        file: this._opts.sourceMapTarget,
        sourceRoot: this._opts.sourceRoot
      });

      var code = this._code;
      if (typeof code === "string") {
        map.setSourceContent(this._opts.sourceFileName, code);
      } else if ((typeof code === "undefined" ? "undefined" : (0, _typeof3.default)(code)) === "object") {
        (0, _keys2.default)(code).forEach(function (sourceFileName) {
          map.setSourceContent(sourceFileName, code[sourceFileName]);
        });
      }

      this._rawMappings.forEach(map.addMapping, map);
    }

    return this._cachedMap.toJSON();
  };

  SourceMap.prototype.getRawMappings = function getRawMappings() {
    return this._rawMappings.slice();
  };

  SourceMap.prototype.mark = function mark(generatedLine, generatedColumn, line, column, identifierName, filename) {
    if (this._lastGenLine !== generatedLine && line === null) return;

    if (this._lastGenLine === generatedLine && this._lastSourceLine === line && this._lastSourceColumn === column) {
      return;
    }

    this._cachedMap = null;
    this._lastGenLine = generatedLine;
    this._lastSourceLine = line;
    this._lastSourceColumn = column;

    this._rawMappings.push({
      name: identifierName || undefined,
      generated: {
        line: generatedLine,
        column: generatedColumn
      },
      source: line == null ? undefined : filename || this._opts.sourceFileName,
      original: line == null ? undefined : {
        line: line,
        column: column
      }
    });
  };

  return SourceMap;
}();

exports.default = SourceMap;
module.exports = exports["default"];
"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _trimRight = require("trim-right");

var _trimRight2 = _interopRequireDefault(_trimRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPACES_RE = /^[ \t]+$/;

var Buffer = function () {
  function Buffer(map) {
    (0, _classCallCheck3.default)(this, Buffer);
    this._map = null;
    this._buf = [];
    this._last = "";
    this._queue = [];
    this._position = {
      line: 1,
      column: 0
    };
    this._sourcePosition = {
      identifierName: null,
      line: null,
      column: null,
      filename: null
    };

    this._map = map;
  }

  Buffer.prototype.get = function get() {
    this._flush();

    var map = this._map;
    var result = {
      code: (0, _trimRight2.default)(this._buf.join("")),
      map: null,
      rawMappings: map && map.getRawMappings()
    };

    if (map) {
      Object.defineProperty(result, "map", {
        configurable: true,
        enumerable: true,
        get: function get() {
          return this.map = map.get();
        },
        set: function set(value) {
          Object.defineProperty(this, "map", { value: value, writable: true });
        }
      });
    }

    return result;
  };

  Buffer.prototype.append = function append(str) {
    this._flush();
    var _sourcePosition = this._sourcePosition,
        line = _sourcePosition.line,
        column = _sourcePosition.column,
        filename = _sourcePosition.filename,
        identifierName = _sourcePosition.identifierName;

    this._append(str, line, column, identifierName, filename);
  };

  Buffer.prototype.queue = function queue(str) {
    if (str === "\n") while (this._queue.length > 0 && SPACES_RE.test(this._queue[0][0])) {
      this._queue.shift();
    }var _sourcePosition2 = this._sourcePosition,
        line = _sourcePosition2.line,
        column = _sourcePosition2.column,
        filename = _sourcePosition2.filename,
        identifierName = _sourcePosition2.identifierName;

    this._queue.unshift([str, line, column, identifierName, filename]);
  };

  Buffer.prototype._flush = function _flush() {
    var item = void 0;
    while (item = this._queue.pop()) {
      this._append.apply(this, item);
    }
  };

  Buffer.prototype._append = function _append(str, line, column, identifierName, filename) {
    if (this._map && str[0] !== "\n") {
      this._map.mark(this._position.line, this._position.column, line, column, identifierName, filename);
    }

    this._buf.push(str);
    this._last = str[str.length - 1];

    for (var i = 0; i < str.length; i++) {
      if (str[i] === "\n") {
        this._position.line++;
        this._position.column = 0;
      } else {
        this._position.column++;
      }
    }
  };

  Buffer.prototype.removeTrailingNewline = function removeTrailingNewline() {
    if (this._queue.length > 0 && this._queue[0][0] === "\n") this._queue.shift();
  };

  Buffer.prototype.removeLastSemicolon = function removeLastSemicolon() {
    if (this._queue.length > 0 && this._queue[0][0] === ";") this._queue.shift();
  };

  Buffer.prototype.endsWith = function endsWith(suffix) {
    if (suffix.length === 1) {
      var last = void 0;
      if (this._queue.length > 0) {
        var str = this._queue[0][0];
        last = str[str.length - 1];
      } else {
        last = this._last;
      }

      return last === suffix;
    }

    var end = this._last + this._queue.reduce(function (acc, item) {
      return item[0] + acc;
    }, "");
    if (suffix.length <= end.length) {
      return end.slice(-suffix.length) === suffix;
    }

    return false;
  };

  Buffer.prototype.hasContent = function hasContent() {
    return this._queue.length > 0 || !!this._last;
  };

  Buffer.prototype.source = function source(prop, loc) {
    if (prop && !loc) return;

    var pos = loc ? loc[prop] : null;

    this._sourcePosition.identifierName = loc && loc.identifierName || null;
    this._sourcePosition.line = pos ? pos.line : null;
    this._sourcePosition.column = pos ? pos.column : null;
    this._sourcePosition.filename = loc && loc.filename || null;
  };

  Buffer.prototype.withSource = function withSource(prop, loc, cb) {
    if (!this._map) return cb();

    var originalLine = this._sourcePosition.line;
    var originalColumn = this._sourcePosition.column;
    var originalFilename = this._sourcePosition.filename;
    var originalIdentifierName = this._sourcePosition.identifierName;

    this.source(prop, loc);

    cb();

    this._sourcePosition.line = originalLine;
    this._sourcePosition.column = originalColumn;
    this._sourcePosition.filename = originalFilename;
    this._sourcePosition.identifierName = originalIdentifierName;
  };

  Buffer.prototype.getCurrentColumn = function getCurrentColumn() {
    var extra = this._queue.reduce(function (acc, item) {
      return item[0] + acc;
    }, "");
    var lastIndex = extra.lastIndexOf("\n");

    return lastIndex === -1 ? this._position.column + extra.length : extra.length - 1 - lastIndex;
  };

  Buffer.prototype.getCurrentLine = function getCurrentLine() {
    var extra = this._queue.reduce(function (acc, item) {
      return item[0] + acc;
    }, "");

    var count = 0;
    for (var i = 0; i < extra.length; i++) {
      if (extra[i] === "\n") count++;
    }

    return this._position.line + count;
  };

  return Buffer;
}();

exports.default = Buffer;
module.exports = exports["default"];
"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _node = require("debug/node");

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verboseDebug = (0, _node2.default)("babel:verbose");
var generalDebug = (0, _node2.default)("babel");

var seenDeprecatedMessages = [];

var Logger = function () {
  function Logger(file, filename) {
    (0, _classCallCheck3.default)(this, Logger);

    this.filename = filename;
    this.file = file;
  }

  Logger.prototype._buildMessage = function _buildMessage(msg) {
    var parts = "[BABEL] " + this.filename;
    if (msg) parts += ": " + msg;
    return parts;
  };

  Logger.prototype.warn = function warn(msg) {
    console.warn(this._buildMessage(msg));
  };

  Logger.prototype.error = function error(msg) {
    var Constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Error;

    throw new Constructor(this._buildMessage(msg));
  };

  Logger.prototype.deprecate = function deprecate(msg) {
    if (this.file.opts && this.file.opts.suppressDeprecationMessages) return;

    msg = this._buildMessage(msg);

    if (seenDeprecatedMessages.indexOf(msg) >= 0) return;

    seenDeprecatedMessages.push(msg);

    console.error(msg);
  };

  Logger.prototype.verbose = function verbose(msg) {
    if (verboseDebug.enabled) verboseDebug(this._buildMessage(msg));
  };

  Logger.prototype.debug = function debug(msg) {
    if (generalDebug.enabled) generalDebug(this._buildMessage(msg));
  };

  Logger.prototype.deopt = function deopt(node, msg) {
    this.debug(msg);
  };

  return Logger;
}();

exports.default = Logger;
module.exports = exports["default"];
"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _store = require("../store");

var _store2 = _interopRequireDefault(_store);

var _file5 = require("./file");

var _file6 = _interopRequireDefault(_file5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PluginPass = function (_Store) {
  (0, _inherits3.default)(PluginPass, _Store);

  function PluginPass(file, plugin) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, PluginPass);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Store.call(this));

    _this.plugin = plugin;
    _this.key = plugin.key;
    _this.file = file;
    _this.opts = options;
    return _this;
  }

  PluginPass.prototype.addHelper = function addHelper() {
    var _file;

    return (_file = this.file).addHelper.apply(_file, arguments);
  };

  PluginPass.prototype.addImport = function addImport() {
    var _file2;

    return (_file2 = this.file).addImport.apply(_file2, arguments);
  };

  PluginPass.prototype.getModuleName = function getModuleName() {
    var _file3;

    return (_file3 = this.file).getModuleName.apply(_file3, arguments);
  };

  PluginPass.prototype.buildCodeFrameError = function buildCodeFrameError() {
    var _file4;

    return (_file4 = this.file).buildCodeFrameError.apply(_file4, arguments);
  };

  return PluginPass;
}(_store2.default);

exports.default = PluginPass;
module.exports = exports["default"];
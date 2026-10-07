"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;
exports.pitch = pitch;

var _loaderUtils = require("loader-utils");

var _schemaUtils = require("schema-utils");

var _options = _interopRequireDefault(require("./options.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loader() {
  return '';
}

function pitch() {
  const options = (0, _loaderUtils.getOptions)(this);
  (0, _schemaUtils.validate)(_options.default, options, {
    name: 'Null Loader',
    baseDataPath: 'options'
  });
  return '';
}
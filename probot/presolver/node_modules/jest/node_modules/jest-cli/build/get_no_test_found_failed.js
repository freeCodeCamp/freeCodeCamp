'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNoTestFoundFailed;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNoTestFoundFailed() {
  return (_chalk || _load_chalk()).default.bold('No failed test found.\n') + (_chalk || _load_chalk()).default.dim('Press `f` to run all tests.');
}
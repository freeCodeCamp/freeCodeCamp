'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNoTestFoundRelatedToChangedFiles;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNoTestFoundRelatedToChangedFiles(globalConfig) {
  let msg = (_chalk || _load_chalk()).default.bold('No tests found related to files changed since last commit.');

  if ((_jestUtil || _load_jestUtil()).isInteractive) {
    msg += (_chalk || _load_chalk()).default.dim('\n' + (globalConfig.watch ? 'Press `a` to run all tests, or run Jest with `--watchAll`.' : 'Run Jest without `-o` or with `--all` to run all tests.'));
  }

  return msg;
}
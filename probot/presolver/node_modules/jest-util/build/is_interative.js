'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isCi;

function _load_isCi() {
  return _isCi = _interopRequireDefault(require('is-ci'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = process.stdout.isTTY && process.env.TERM !== 'dumb' && !(_isCi || _load_isCi()).default;
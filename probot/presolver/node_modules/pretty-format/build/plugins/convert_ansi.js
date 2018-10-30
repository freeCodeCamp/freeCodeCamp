'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = exports.test = undefined;

var _ansiRegex = require('ansi-regex');

var _ansiRegex2 = _interopRequireDefault(_ansiRegex);

var _ansiStyles = require('ansi-styles');

var _ansiStyles2 = _interopRequireDefault(_ansiStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const toHumanReadableAnsi = text => {
  return text.replace((0, _ansiRegex2.default)(), (match, offset, string) => {
    switch (match) {
      case _ansiStyles2.default.red.close:
      case _ansiStyles2.default.green.close:
      case _ansiStyles2.default.cyan.close:
      case _ansiStyles2.default.gray.close:
      case _ansiStyles2.default.white.close:
      case _ansiStyles2.default.yellow.close:
      case _ansiStyles2.default.bgRed.close:
      case _ansiStyles2.default.bgGreen.close:
      case _ansiStyles2.default.bgYellow.close:
      case _ansiStyles2.default.inverse.close:
      case _ansiStyles2.default.dim.close:
      case _ansiStyles2.default.bold.close:
      case _ansiStyles2.default.reset.open:
      case _ansiStyles2.default.reset.close:
        return '</>';
      case _ansiStyles2.default.red.open:
        return '<red>';
      case _ansiStyles2.default.green.open:
        return '<green>';
      case _ansiStyles2.default.cyan.open:
        return '<cyan>';
      case _ansiStyles2.default.gray.open:
        return '<gray>';
      case _ansiStyles2.default.white.open:
        return '<white>';
      case _ansiStyles2.default.yellow.open:
        return '<yellow>';
      case _ansiStyles2.default.bgRed.open:
        return '<bgRed>';
      case _ansiStyles2.default.bgGreen.open:
        return '<bgGreen>';
      case _ansiStyles2.default.bgYellow.open:
        return '<bgYellow>';
      case _ansiStyles2.default.inverse.open:
        return '<inverse>';
      case _ansiStyles2.default.dim.open:
        return '<dim>';
      case _ansiStyles2.default.bold.open:
        return '<bold>';
      default:
        return '';
    }
  });
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */

const test = exports.test = val => typeof val === 'string' && val.match((0, _ansiRegex2.default)());

const serialize = exports.serialize = (val, config, indentation, depth, refs, printer) => printer(toHumanReadableAnsi(val), config, indentation, depth, refs);

exports.default = { serialize, test };
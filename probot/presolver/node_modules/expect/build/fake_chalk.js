'use strict';

var _ansiStyles = require('ansi-styles');

var _ansiStyles2 = _interopRequireDefault(_ansiStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const returnInput = str => str; /**
                                 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE file in the root directory of this source tree.
                                 * 
                                 */

const allColorsAsFunc = Object.keys(_ansiStyles2.default).map(style => ({ [style]: returnInput })).reduce((acc, cur) => Object.assign(acc, cur));

Object.keys(allColorsAsFunc).map(color => allColorsAsFunc[color]).forEach(style => {
  Object.assign(style, allColorsAsFunc);
  Object.assign(returnInput, style);
});

module.exports = allColorsAsFunc;
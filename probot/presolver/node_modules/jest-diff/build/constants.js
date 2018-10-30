'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIMILAR_MESSAGE = exports.NO_DIFF_MESSAGE = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NO_DIFF_MESSAGE = exports.NO_DIFF_MESSAGE = _chalk2.default.dim('Compared values have no visual difference.'); /**
                                                                                                                      * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                      *
                                                                                                                      * This source code is licensed under the MIT license found in the
                                                                                                                      * LICENSE file in the root directory of this source tree.
                                                                                                                      *
                                                                                                                      * 
                                                                                                                      */

const SIMILAR_MESSAGE = exports.SIMILAR_MESSAGE = _chalk2.default.dim('Compared values serialize to the same structure.\n' + 'Printing internal object structure without calling `toJSON` instead.');
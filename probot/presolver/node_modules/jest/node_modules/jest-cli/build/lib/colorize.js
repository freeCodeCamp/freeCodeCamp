'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (str, start, end) => (_chalk || _load_chalk()).default.dim(str.slice(0, start)) + (_chalk || _load_chalk()).default.reset(str.slice(start, end)) + (_chalk || _load_chalk()).default.dim(str.slice(end)); /**
                                                                                                                                                                                                                             * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                             * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             * 
                                                                                                                                                                                                                             */
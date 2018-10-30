"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validationCondition;
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const toString = Object.prototype.toString;

function validationCondition(option, validOption) {
  return option === null || option === undefined || toString.call(option) === toString.call(validOption);
}
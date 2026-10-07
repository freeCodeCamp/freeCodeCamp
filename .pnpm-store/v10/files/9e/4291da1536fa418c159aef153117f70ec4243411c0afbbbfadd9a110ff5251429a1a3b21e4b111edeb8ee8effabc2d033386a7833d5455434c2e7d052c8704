"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * Simple client-side validation of international phone numbers
 */
var US_NUMBER_RE = /^1\(?\d{3}\)?\d{7}$/;
var NORWAY_NUMBER_RE = /^47\d{8}$/;
var INTL_NUMBER_RE = /^\d{1,4}\(?\d{2,3}\)?\d{4,}$/;

function isInternationalPhoneNumber(number) {
  number = number.replace(/[\-\s]+/g, '') // strip all spaces and hyphens
  .replace(/^\+?0{0,2}/, ''); // strip up to 2 leading 0s and +

  if (number.startsWith('0')) {
    return false;
  }

  if (number.startsWith('1')) {
    return US_NUMBER_RE.test(number);
  }

  if (number.startsWith('47')) {
    return NORWAY_NUMBER_RE.test(number);
  }

  return INTL_NUMBER_RE.test(number);
}

module.exports = isInternationalPhoneNumber;
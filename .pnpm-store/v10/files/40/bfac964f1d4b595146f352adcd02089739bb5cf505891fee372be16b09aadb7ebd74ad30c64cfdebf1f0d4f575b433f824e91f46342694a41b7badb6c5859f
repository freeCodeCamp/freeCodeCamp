/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/**
 * Stateful API for text direction detection
 *
 * This class can be used in applications where you need to detect the
 * direction of a sequence of text blocks, where each direction shall be used
 * as the fallback direction for the next one.
 *
 * NOTE: A default direction, if not provided, is set based on the global
 *       direction, as defined by `UnicodeBidiDirection`.
 *
 * == Example ==
 * ```
 * var UnicodeBidiService = require('UnicodeBidiService');
 *
 * var bidiService = new UnicodeBidiService();
 *
 * ...
 *
 * bidiService.reset();
 * for (var para in paragraphs) {
 *   var dir = bidiService.getDirection(para);
 *   ...
 * }
 * ```
 *
 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UnicodeBidi = require("./UnicodeBidi");

var UnicodeBidiDirection = require("./UnicodeBidiDirection");

var invariant = require("./invariant");

var UnicodeBidiService = /*#__PURE__*/function () {
  /**
   * Stateful class for paragraph direction detection
   *
   * @param defaultDir  Default direction of the service
   */
  function UnicodeBidiService(defaultDir) {
    _defineProperty(this, "_defaultDir", void 0);

    _defineProperty(this, "_lastDir", void 0);

    if (!defaultDir) {
      defaultDir = UnicodeBidiDirection.getGlobalDir();
    } else {
      !UnicodeBidiDirection.isStrong(defaultDir) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Default direction must be a strong direction (LTR or RTL)') : invariant(false) : void 0;
    }

    this._defaultDir = defaultDir;
    this.reset();
  }
  /**
   * Reset the internal state
   *
   * Instead of creating a new instance, you can just reset() your instance
   * everytime you start a new loop.
   */


  var _proto = UnicodeBidiService.prototype;

  _proto.reset = function reset() {
    this._lastDir = this._defaultDir;
  };
  /**
   * Returns the direction of a block of text, and remembers it as the
   * fall-back direction for the next paragraph.
   *
   * @param str  A text block, e.g. paragraph, table cell, tag
   * @return     The resolved direction
   */


  _proto.getDirection = function getDirection(str) {
    this._lastDir = UnicodeBidi.getDirection(str, this._lastDir);
    return this._lastDir;
  };

  return UnicodeBidiService;
}();

module.exports = UnicodeBidiService;
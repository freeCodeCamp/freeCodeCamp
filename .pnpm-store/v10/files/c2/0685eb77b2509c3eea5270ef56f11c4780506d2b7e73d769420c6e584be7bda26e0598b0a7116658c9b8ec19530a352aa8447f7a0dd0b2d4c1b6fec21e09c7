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
 * Constants to represent text directionality
 *
 * Also defines a *global* direciton, to be used in bidi algorithms as a
 * default fallback direciton, when no better direction is found or provided.
 *
 * NOTE: Use `setGlobalDir()`, or update `initGlobalDir()`, to set the initial
 *       global direction value based on the application.
 *
 * Part of the implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */
'use strict';

var invariant = require("./invariant");

var NEUTRAL = 'NEUTRAL'; // No strong direction

var LTR = 'LTR'; // Left-to-Right direction

var RTL = 'RTL'; // Right-to-Left direction

var globalDir = null; // == Helpers ==

/**
 * Check if a directionality value is a Strong one
 */

function isStrong(dir) {
  return dir === LTR || dir === RTL;
}
/**
 * Get string value to be used for `dir` HTML attribute or `direction` CSS
 * property.
 */


function getHTMLDir(dir) {
  !isStrong(dir) ? process.env.NODE_ENV !== "production" ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
  return dir === LTR ? 'ltr' : 'rtl';
}
/**
 * Get string value to be used for `dir` HTML attribute or `direction` CSS
 * property, but returns null if `dir` has same value as `otherDir`.
 * `null`.
 */


function getHTMLDirIfDifferent(dir, otherDir) {
  !isStrong(dir) ? process.env.NODE_ENV !== "production" ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
  !isStrong(otherDir) ? process.env.NODE_ENV !== "production" ? invariant(false, '`otherDir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
  return dir === otherDir ? null : getHTMLDir(dir);
} // == Global Direction ==

/**
 * Set the global direction.
 */


function setGlobalDir(dir) {
  globalDir = dir;
}
/**
 * Initialize the global direction
 */


function initGlobalDir() {
  setGlobalDir(LTR);
}
/**
 * Get the global direction
 */


function getGlobalDir() {
  if (!globalDir) {
    this.initGlobalDir();
  }

  !globalDir ? process.env.NODE_ENV !== "production" ? invariant(false, 'Global direction not set.') : invariant(false) : void 0;
  return globalDir;
}

var UnicodeBidiDirection = {
  // Values
  NEUTRAL: NEUTRAL,
  LTR: LTR,
  RTL: RTL,
  // Helpers
  isStrong: isStrong,
  getHTMLDir: getHTMLDir,
  getHTMLDirIfDifferent: getHTMLDirIfDifferent,
  // Global Direction
  setGlobalDir: setGlobalDir,
  initGlobalDir: initGlobalDir,
  getGlobalDir: getGlobalDir
};
module.exports = UnicodeBidiDirection;
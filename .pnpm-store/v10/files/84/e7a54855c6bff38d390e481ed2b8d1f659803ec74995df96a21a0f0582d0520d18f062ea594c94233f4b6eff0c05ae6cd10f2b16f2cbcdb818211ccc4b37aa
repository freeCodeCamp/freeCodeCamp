"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var fbCSSVars = require("fbjs-css-vars");

var invariant = require("./invariant");
/**
 * @param {string} name
 */


function cssVar(name) {
  !Object.prototype.hasOwnProperty.call(fbCSSVars, name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Unknown key passed to cssVar: %s.', name) : invariant(false) : void 0;
  return fbCSSVars[name];
}

module.exports = cssVar;
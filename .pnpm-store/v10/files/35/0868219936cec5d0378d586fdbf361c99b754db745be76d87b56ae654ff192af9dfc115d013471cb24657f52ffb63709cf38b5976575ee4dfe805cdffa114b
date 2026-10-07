"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var ExecutionEnvironment = require("./ExecutionEnvironment");

var UserAgent = require("./UserAgent");

var camelize = require("./camelize");

var invariant = require("./invariant");

var memoized = {};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
var prefixRegex = new RegExp('^(' + prefixes.join('|') + ')');
var testStyle = ExecutionEnvironment.canUseDOM ? document.createElement('div').style : {};

function getWithPrefix(name) {
  for (var i = 0; i < prefixes.length; i++) {
    var prefixedName = prefixes[i] + name;

    if (prefixedName in testStyle) {
      return prefixedName;
    }
  }

  return null;
}

function guessVendorPrefixedNameFromUserAgent(name) {
  switch (name) {
    case 'lineClamp':
      if (UserAgent.isEngine('WebKit >= 315.14.2')) {
        return 'WebkitLineClamp';
      }

      return null;

    default:
      return null;
  }
}
/**
 * @param {string} property Name of a css property to check for.
 * @return {?string} property name supported in the browser, or null if not
 * supported.
 */


function getVendorPrefixedName(property) {
  var name = camelize(property);

  if (memoized[name] === undefined) {
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    if (prefixRegex.test(capitalizedName)) {
      !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'getVendorPrefixedName must only be called with unprefixed' + 'CSS property names. It was called with %s', property) : invariant(false) : void 0;
    }

    if (ExecutionEnvironment.canUseDOM) {
      memoized[name] = name in testStyle ? name : getWithPrefix(capitalizedName);
    } else {
      memoized[name] = guessVendorPrefixedNameFromUserAgent(name);
    }
  }

  return memoized[name];
}

module.exports = getVendorPrefixedName;
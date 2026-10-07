/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
'use strict';

var BrowserSupportCore = require("./BrowserSupportCore");

var getVendorPrefixedName = require("./getVendorPrefixedName");

var TRANSFORM = getVendorPrefixedName('transform');
var BACKFACE_VISIBILITY = getVendorPrefixedName('backfaceVisibility');

var translateDOMPositionXY = function () {
  if (BrowserSupportCore.hasCSSTransforms()) {
    var ua = global.window ? global.window.navigator.userAgent : 'UNKNOWN';
    var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua); // It appears that Safari messes up the composition order
    // of GPU-accelerated layers
    // (see bug https://bugs.webkit.org/show_bug.cgi?id=61824).
    // Use 2D translation instead.

    if (!isSafari && BrowserSupportCore.hasCSS3DTransforms()) {
      return function (
      /*object*/
      style,
      /*number*/
      x,
      /*number*/
      y) {
        style[TRANSFORM] = 'translate3d(' + x + 'px,' + y + 'px,0)';
        style[BACKFACE_VISIBILITY] = 'hidden';
      };
    } else {
      return function (
      /*object*/
      style,
      /*number*/
      x,
      /*number*/
      y) {
        style[TRANSFORM] = 'translate(' + x + 'px,' + y + 'px)';
      };
    }
  } else {
    return function (
    /*object*/
    style,
    /*number*/
    x,
    /*number*/
    y) {
      style.left = x + 'px';
      style.top = y + 'px';
    };
  }
}();

module.exports = translateDOMPositionXY;
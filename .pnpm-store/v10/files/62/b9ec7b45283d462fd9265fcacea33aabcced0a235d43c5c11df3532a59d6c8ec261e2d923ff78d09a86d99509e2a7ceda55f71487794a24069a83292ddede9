"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks
 */
function getViewportWidth() {
  var width;

  if (document.documentElement) {
    width = document.documentElement.clientWidth;
  }

  if (!width && document.body) {
    width = document.body.clientWidth;
  }

  return width || 0;
}

function getViewportHeight() {
  var height;

  if (document.documentElement) {
    height = document.documentElement.clientHeight;
  }

  if (!height && document.body) {
    height = document.body.clientHeight;
  }

  return height || 0;
}
/**
 * Gets the viewport dimensions including any scrollbars.
 */


function getViewportDimensions() {
  return {
    width: window.innerWidth || getViewportWidth(),
    height: window.innerHeight || getViewportHeight()
  };
}
/**
 * Gets the viewport dimensions excluding any scrollbars.
 */


getViewportDimensions.withoutScrollbars = function () {
  return {
    width: getViewportWidth(),
    height: getViewportHeight()
  };
};

module.exports = getViewportDimensions;
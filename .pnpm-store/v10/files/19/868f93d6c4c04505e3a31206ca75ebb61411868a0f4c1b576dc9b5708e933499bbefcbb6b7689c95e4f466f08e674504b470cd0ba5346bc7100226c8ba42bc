"use strict";

exports.__esModule = true;
exports["default"] = _default;
var _visit = require("./visit");
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function _default(context) {
  var plugin = {
    visitor: (0, _visit.getVisitor)(context)
  };

  // Some presets manually call child presets, but fail to pass along the
  // context object. Out of an abundance of caution, we verify that it
  // exists first to avoid causing unnecessary breaking changes.
  var version = context && context.version;

  // The "name" property is not allowed in older versions of Babel (6.x)
  // and will cause the plugin validator to throw an exception.
  if (version && parseInt(version, 10) >= 7) {
    plugin.name = "regenerator-transform";
  }
  return plugin;
}
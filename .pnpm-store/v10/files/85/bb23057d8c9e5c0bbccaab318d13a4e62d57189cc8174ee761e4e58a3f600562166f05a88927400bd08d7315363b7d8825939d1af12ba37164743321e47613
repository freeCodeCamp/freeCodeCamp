"use strict";

exports.__esModule = true;
exports.getTypes = getTypes;
exports.isReference = isReference;
exports.replaceWithOrRemove = replaceWithOrRemove;
exports.runtimeProperty = runtimeProperty;
exports.wrapWithTypes = wrapWithTypes;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var currentTypes = null;
function wrapWithTypes(types, fn) {
  return function () {
    var oldTypes = currentTypes;
    currentTypes = types;
    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return fn.apply(this, args);
    } finally {
      currentTypes = oldTypes;
    }
  };
}
function getTypes() {
  return currentTypes;
}
function runtimeProperty(name) {
  var t = getTypes();
  return t.memberExpression(t.identifier("regeneratorRuntime"), t.identifier(name), false);
}
function isReference(path) {
  return path.isReferenced() || path.parentPath.isAssignmentExpression({
    left: path.node
  });
}
function replaceWithOrRemove(path, replacement) {
  if (replacement) {
    path.replaceWith(replacement);
  } else {
    path.remove();
  }
}
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let currentTypes = null;

export function wrapWithTypes(types, fn) {
  return function (...args) {
    const oldTypes = currentTypes;
    currentTypes = types;
    try {
      return fn.apply(this, args);
    } finally {
      currentTypes = oldTypes;
    }
  };
}

export function getTypes() {
  return currentTypes;
}

export function runtimeProperty(name) {
  const t = getTypes();
  return t.memberExpression(
    t.identifier("regeneratorRuntime"),
    t.identifier(name),
    false
  );
}

export function isReference(path) {
  return path.isReferenced() || path.parentPath.isAssignmentExpression({ left: path.node });
}

export function replaceWithOrRemove(path, replacement) {
  if (replacement) {
    path.replaceWith(replacement)
  } else {
    path.remove();
  }
}

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error('babel-plugin-jest-hoist: ' + message);
  }
}

// We allow `jest`, `expect`, `require`, all default Node.js globals and all
// ES2015 built-ins to be used inside of a `jest.mock` factory.
// We also allow variables prefixed with `mock` as an escape-hatch.
const WHITELISTED_IDENTIFIERS = {
  Array: true,
  ArrayBuffer: true,
  Boolean: true,
  DataView: true,
  Date: true,
  Error: true,
  EvalError: true,
  Float32Array: true,
  Float64Array: true,
  Function: true,
  Generator: true,
  GeneratorFunction: true,
  Infinity: true,
  Int16Array: true,
  Int32Array: true,
  Int8Array: true,
  InternalError: true,
  Intl: true,
  JSON: true,
  Map: true,
  Math: true,
  NaN: true,
  Number: true,
  Object: true,
  Promise: true,
  Proxy: true,
  RangeError: true,
  ReferenceError: true,
  Reflect: true,
  RegExp: true,
  Set: true,
  String: true,
  Symbol: true,
  SyntaxError: true,
  TypeError: true,
  URIError: true,
  Uint16Array: true,
  Uint32Array: true,
  Uint8Array: true,
  Uint8ClampedArray: true,
  WeakMap: true,
  WeakSet: true,
  arguments: true,
  console: true,
  expect: true,
  jest: true,
  require: true,
  undefined: true
};
Object.keys(global).forEach(name => WHITELISTED_IDENTIFIERS[name] = true);

const JEST_GLOBAL = { name: 'jest' };
const IDVisitor = {
  ReferencedIdentifier(path) {
    this.ids.add(path);
  },
  blacklist: ['TypeAnnotation']
};

const FUNCTIONS = Object.create(null);
FUNCTIONS.mock = args => {
  if (args.length === 1) {
    return args[0].isStringLiteral() || args[0].isLiteral();
  } else if (args.length === 2 || args.length === 3) {
    const moduleFactory = args[1];
    invariant(moduleFactory.isFunction(), 'The second argument of `jest.mock` must be an inline function.');

    const ids = new Set();
    const parentScope = moduleFactory.parentPath.scope;
    moduleFactory.traverse(IDVisitor, { ids });
    for (const id of ids) {
      const name = id.node.name;
      let found = false;
      let scope = id.scope;

      while (scope !== parentScope) {
        if (scope.bindings[name]) {
          found = true;
          break;
        }

        scope = scope.parent;
      }

      if (!found) {
        invariant(scope.hasGlobal(name) && WHITELISTED_IDENTIFIERS[name] || /^mock/.test(name) ||
        // Allow istanbul's coverage variable to pass.
        /^(?:__)?cov/.test(name), 'The module factory of `jest.mock()` is not allowed to ' + 'reference any out-of-scope variables.\n' + 'Invalid variable access: ' + name + '\n' + 'Whitelisted objects: ' + Object.keys(WHITELISTED_IDENTIFIERS).join(', ') + '.\n' + 'Note: This is a precaution to guard against uninitialized mock ' + 'variables. If it is ensured that the mock is required lazily, ' + 'variable names prefixed with `mock` are permitted.');
      }
    }

    return true;
  }
  return false;
};

FUNCTIONS.unmock = args => args.length === 1 && args[0].isStringLiteral();
FUNCTIONS.deepUnmock = args => args.length === 1 && args[0].isStringLiteral();

FUNCTIONS.disableAutomock = FUNCTIONS.enableAutomock = args => args.length === 0;

module.exports = () => {
  const isJest = callee => callee.get('object').isIdentifier(JEST_GLOBAL) || callee.isMemberExpression() && isJest(callee.get('object'));
  const shouldHoistExpression = expr => {
    if (!expr.isCallExpression()) {
      return false;
    }

    const callee = expr.get('callee');
    const object = callee.get('object');
    const property = callee.get('property');
    return property.isIdentifier() && FUNCTIONS[property.node.name] && (object.isIdentifier(JEST_GLOBAL) || callee.isMemberExpression() && shouldHoistExpression(object)) && FUNCTIONS[property.node.name](expr.get('arguments'));
  };
  return {
    visitor: {
      ExpressionStatement(path) {
        if (shouldHoistExpression(path.get('expression'))) {
          path.node._blockHoist = Infinity;
        }
      }
    }
  };
};
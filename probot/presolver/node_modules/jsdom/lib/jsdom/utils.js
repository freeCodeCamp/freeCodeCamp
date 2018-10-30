"use strict";
const path = require("path");
const whatwgURL = require("whatwg-url");
const { domSymbolTree } = require("./living/helpers/internal-constants");
const SYMBOL_TREE_POSITION = require("symbol-tree").TreePosition;
const { parseURLToResultingURLRecord } = require("./living/helpers/document-base-url");

exports.toFileUrl = function (fileName) {
  // Beyond just the `path.resolve`, this is mostly for the benefit of Windows,
  // where we need to convert "\" to "/" and add an extra "/" prefix before the
  // drive letter.
  let pathname = path.resolve(process.cwd(), fileName).replace(/\\/g, "/");
  if (pathname[0] !== "/") {
    pathname = "/" + pathname;
  }

  // path might contain spaces, so convert those to %20
  return "file://" + encodeURI(pathname);
};

/**
 * Define a getter on an object
 *
 * This method replaces any existing getter but leaves setters in place.
 *
 * - `object` {Object} the object to define the getter on
 * - `property` {String} the name of the getter
 * - `getterFn` {Function} the getter
 */
exports.defineGetter = function defineGetter(object, property, getterFn) {
  const descriptor = Object.getOwnPropertyDescriptor(object, property) || {
    configurable: true,
    enumerable: true
  };

  descriptor.get = getterFn;

  Object.defineProperty(object, property, descriptor);
};

/**
 * Define a set of properties on an object, by copying the property descriptors
 * from the original object.
 *
 * - `object` {Object} the target object
 * - `properties` {Object} the source from which to copy property descriptors
 */
exports.define = function define(object, properties) {
  for (const name of Object.getOwnPropertyNames(properties)) {
    const propDesc = Object.getOwnPropertyDescriptor(properties, name);
    Object.defineProperty(object, name, propDesc);
  }
};

/**
 * Define a list of constants on a constructor and its .prototype
 *
 * - `Constructor` {Function} the constructor to define the constants on
 * - `propertyMap` {Object}  key/value map of properties to define
 */
exports.addConstants = function addConstants(Constructor, propertyMap) {
  for (const property in propertyMap) {
    const value = propertyMap[property];
    addConstant(Constructor, property, value);
    addConstant(Constructor.prototype, property, value);
  }
};

function addConstant(object, property, value) {
  Object.defineProperty(object, property, {
    configurable: false,
    enumerable: true,
    writable: false,
    value
  });
}

exports.mixin = (target, source) => {
  const keys = Reflect.ownKeys(source);
  for (let i = 0; i < keys.length; ++i) {
    if (keys[i] in target) {
      continue;
    }

    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
  }
};

let memoizeQueryTypeCounter = 0;

/**
 * Returns a version of a method that memoizes specific types of calls on the object
 *
 * - `fn` {Function} the method to be memozied
 */
exports.memoizeQuery = function memoizeQuery(fn) {
  // Only memoize query functions with arity <= 2
  if (fn.length > 2) {
    return fn;
  }

  const type = memoizeQueryTypeCounter++;

  return function () {
    if (!this._memoizedQueries) {
      return fn.apply(this, arguments);
    }

    if (!this._memoizedQueries[type]) {
      this._memoizedQueries[type] = Object.create(null);
    }

    let key;
    if (arguments.length === 1 && typeof arguments[0] === "string") {
      key = arguments[0];
    } else if (arguments.length === 2 && typeof arguments[0] === "string" && typeof arguments[1] === "string") {
      key = arguments[0] + "::" + arguments[1];
    } else {
      return fn.apply(this, arguments);
    }

    if (!(key in this._memoizedQueries[type])) {
      this._memoizedQueries[type][key] = fn.apply(this, arguments);
    }
    return this._memoizedQueries[type][key];
  };
};

exports.reflectURLAttribute = (elementImpl, contentAttributeName) => {
  const attributeValue = elementImpl.getAttribute(contentAttributeName);
  if (attributeValue === null || attributeValue === "") {
    return "";
  }

  const urlRecord = parseURLToResultingURLRecord(attributeValue, elementImpl._ownerDocument);
  if (urlRecord === null) {
    return attributeValue;
  }
  return whatwgURL.serializeURL(urlRecord);
};

function isValidAbsoluteURL(str) {
  return whatwgURL.parseURL(str) !== null;
}

exports.isValidTargetOrigin = function (str) {
  return str === "*" || str === "/" || isValidAbsoluteURL(str);
};

exports.simultaneousIterators = function* (first, second) {
  for (;;) {
    const firstResult = first.next();
    const secondResult = second.next();

    if (firstResult.done && secondResult.done) {
      return;
    }

    yield [
      firstResult.done ? null : firstResult.value,
      secondResult.done ? null : secondResult.value
    ];
  }
};

exports.treeOrderSorter = function (a, b) {
  const compare = domSymbolTree.compareTreePosition(a, b);

  if (compare & SYMBOL_TREE_POSITION.PRECEDING) { // b is preceding a
    return 1;
  }

  if (compare & SYMBOL_TREE_POSITION.FOLLOWING) {
    return -1;
  }

  // disconnected or equal:
  return 0;
};

/* eslint-disable global-require */

exports.Canvas = null;
["canvas", "canvas-prebuilt"].some(moduleName => {
  try {
    exports.Canvas = require(moduleName);
    if (typeof exports.Canvas !== "function") {
      // In browserify, the require will succeed but return an empty object
      exports.Canvas = null;
    }
  } catch (e) {
    exports.Canvas = null;
  }
  return exports.Canvas !== null;
});

'use strict';

/**
 * Various utility functions used throughout Mocha's codebase.
 * @module utils
 */

/**
 * Module dependencies.
 */
var path = require('path');
var util = require('util');
var he = require('he');

const MOCHA_ID_PROP_NAME = '__mocha_id__';

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * @param {function} ctor - Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor - Constructor function to inherit prototype from.
 * @throws {TypeError} if either constructor is null, or if super constructor
 *     lacks a prototype.
 */
exports.inherits = util.inherits;

/**
 * Escape special characters in the given string of html.
 *
 * @private
 * @param  {string} html
 * @return {string}
 */
exports.escape = function (html) {
  return he.encode(String(html), {useNamedReferences: false});
};

/**
 * Test if the given obj is type of string.
 *
 * @private
 * @param {Object} obj
 * @return {boolean}
 */
exports.isString = function (obj) {
  return typeof obj === 'string';
};

/**
 * Compute a slug from the given `str`.
 *
 * @private
 * @param {string} str
 * @return {string}
 */
exports.slug = function (str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^-\w]/g, '')
    .replace(/-{2,}/g, '-');
};

/**
 * Strip the function definition from `str`, and re-indent for pre whitespace.
 *
 * @param {string} str
 * @return {string}
 */
exports.clean = function (str) {
  str = str
    .replace(/\r\n?|[\n\u2028\u2029]/g, '\n')
    .replace(/^\uFEFF/, '')
    // (traditional)->  space/name     parameters    body     (lambda)-> parameters       body   multi-statement/single          keep body content
    .replace(
      /^function(?:\s*|\s[^(]*)\([^)]*\)\s*\{((?:.|\n)*?)\}$|^\([^)]*\)\s*=>\s*(?:\{((?:.|\n)*?)\}|((?:.|\n)*))$/,
      '$1$2$3'
    );

  var spaces = str.match(/^\n?( *)/)[1].length;
  var tabs = str.match(/^\n?(\t*)/)[1].length;
  var re = new RegExp(
    '^\n?' + (tabs ? '\t' : ' ') + '{' + (tabs || spaces) + '}',
    'gm'
  );

  str = str.replace(re, '');

  return str.trim();
};

/**
 * If a value could have properties, and has none, this function is called,
 * which returns a string representation of the empty value.
 *
 * Functions w/ no properties return `'[Function]'`
 * Arrays w/ length === 0 return `'[]'`
 * Objects w/ no properties return `'{}'`
 * All else: return result of `value.toString()`
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} typeHint The type of the value
 * @returns {string}
 */
function emptyRepresentation(value, typeHint) {
  switch (typeHint) {
    case 'function':
      return '[Function]';
    case 'object':
      return '{}';
    case 'array':
      return '[]';
    default:
      return value.toString();
  }
}

/**
 * Takes some variable and asks `Object.prototype.toString()` what it thinks it
 * is.
 *
 * @private
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
 * @param {*} value The value to test.
 * @returns {string} Computed type
 * @example
 * canonicalType({}) // 'object'
 * canonicalType([]) // 'array'
 * canonicalType(1) // 'number'
 * canonicalType(false) // 'boolean'
 * canonicalType(Infinity) // 'number'
 * canonicalType(null) // 'null'
 * canonicalType(new Date()) // 'date'
 * canonicalType(/foo/) // 'regexp'
 * canonicalType('type') // 'string'
 * canonicalType(global) // 'global'
 * canonicalType(new String('foo') // 'object'
 * canonicalType(async function() {}) // 'asyncfunction'
 * canonicalType(Object.create(null)) // 'null-prototype'
 */
var canonicalType = (exports.canonicalType = function canonicalType(value) {
  if (value === undefined) {
    return 'undefined';
  } else if (value === null) {
    return 'null';
  } else if (Buffer.isBuffer(value)) {
    return 'buffer';
  } else if (Object.getPrototypeOf(value) === null) {
    return 'null-prototype';
  }

  return Object.prototype.toString
    .call(value)
    .replace(/^\[.+\s(.+?)]$/, '$1')
    .toLowerCase();
});

/**
 *
 * Returns a general type or data structure of a variable
 * @private
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 * @param {*} value The value to test.
 * @returns {string} One of undefined, boolean, number, string, bigint, symbol, object
 * @example
 * type({}) // 'object'
 * type([]) // 'array'
 * type(1) // 'number'
 * type(false) // 'boolean'
 * type(Infinity) // 'number'
 * type(null) // 'null'
 * type(new Date()) // 'object'
 * type(/foo/) // 'object'
 * type('type') // 'string'
 * type(global) // 'object'
 * type(new String('foo') // 'string'
 */
exports.type = function type(value) {
  // Null is special
  if (value === null) return 'null';
  const primitives = new Set([
    'undefined',
    'boolean',
    'number',
    'string',
    'bigint',
    'symbol'
  ]);
  const _type = typeof value;
  if (_type === 'function') return _type;
  if (primitives.has(_type)) return _type;
  if (value instanceof String) return 'string';
  if (value instanceof Error) return 'error';
  if (Array.isArray(value)) return 'array';

  return _type;
};

/**
 * Stringify `value`. Different behavior depending on type of value:
 *
 * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.
 * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.
 * - If `value` is an *empty* object, function, or array, return result of function
 *   {@link emptyRepresentation}.
 * - If `value` has properties, call {@link exports.canonicalize} on it, then return result of
 *   JSON.stringify().
 *
 * @private
 * @see exports.type
 * @param {*} value
 * @return {string}
 */
exports.stringify = function (value) {
  var typeHint = canonicalType(value);

  if (!~['object', 'array', 'function', 'null-prototype'].indexOf(typeHint)) {
    if (typeHint === 'buffer') {
      var json = Buffer.prototype.toJSON.call(value);
      // Based on the toJSON result
      return jsonStringify(
        json.data && json.type ? json.data : json,
        2
      ).replace(/,(\n|$)/g, '$1');
    }

    // IE7/IE8 has a bizarre String constructor; needs to be coerced
    // into an array and back to obj.
    if (typeHint === 'string' && typeof value === 'object') {
      value = value.split('').reduce(function (acc, char, idx) {
        acc[idx] = char;
        return acc;
      }, {});
      typeHint = 'object';
    } else {
      return jsonStringify(value);
    }
  }

  for (var prop in value) {
    if (Object.prototype.hasOwnProperty.call(value, prop)) {
      return jsonStringify(
        exports.canonicalize(value, null, typeHint),
        2
      ).replace(/,(\n|$)/g, '$1');
    }
  }

  return emptyRepresentation(value, typeHint);
};

/**
 * like JSON.stringify but more sense.
 *
 * @private
 * @param {Object}  object
 * @param {number=} spaces
 * @param {number=} depth
 * @returns {*}
 */
function jsonStringify(object, spaces, depth) {
  if (typeof spaces === 'undefined') {
    // primitive types
    return _stringify(object);
  }

  depth = depth || 1;
  var space = spaces * depth;
  var str = Array.isArray(object) ? '[' : '{';
  var end = Array.isArray(object) ? ']' : '}';
  var length =
    typeof object.length === 'number'
      ? object.length
      : Object.keys(object).length;
  // `.repeat()` polyfill
  function repeat(s, n) {
    return new Array(n).join(s);
  }

  function _stringify(val) {
    switch (canonicalType(val)) {
      case 'null':
      case 'undefined':
        val = '[' + val + ']';
        break;
      case 'array':
      case 'object':
        val = jsonStringify(val, spaces, depth + 1);
        break;
      case 'boolean':
      case 'regexp':
      case 'symbol':
      case 'number':
        val =
          val === 0 && 1 / val === -Infinity // `-0`
            ? '-0'
            : val.toString();
        break;
      case 'bigint':
        val = val.toString() + 'n';
        break;
      case 'date':
        var sDate = isNaN(val.getTime()) ? val.toString() : val.toISOString();
        val = '[Date: ' + sDate + ']';
        break;
      case 'buffer':
        var json = val.toJSON();
        // Based on the toJSON result
        json = json.data && json.type ? json.data : json;
        val = '[Buffer: ' + jsonStringify(json, 2, depth + 1) + ']';
        break;
      default:
        val =
          val === '[Function]' || val === '[Circular]'
            ? val
            : JSON.stringify(val); // string
    }
    return val;
  }

  for (var i in object) {
    if (!Object.prototype.hasOwnProperty.call(object, i)) {
      continue; // not my business
    }
    --length;
    str +=
      '\n ' +
      repeat(' ', space) +
      (Array.isArray(object) ? '' : '"' + i + '": ') + // key
      _stringify(object[i]) + // value
      (length ? ',' : ''); // comma
  }

  return (
    str +
    // [], {}
    (str.length !== 1 ? '\n' + repeat(' ', --space) + end : end)
  );
}

/**
 * Return a new Thing that has the keys in sorted order. Recursive.
 *
 * If the Thing...
 * - has already been seen, return string `'[Circular]'`
 * - is `undefined`, return string `'[undefined]'`
 * - is `null`, return value `null`
 * - is some other primitive, return the value
 * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method
 * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.
 * - is an empty `Array`, `Object`, or `Function`, return the result of calling `emptyRepresentation()`
 *
 * @private
 * @see {@link exports.stringify}
 * @param {*} value Thing to inspect.  May or may not have properties.
 * @param {Array} [stack=[]] Stack of seen values
 * @param {string} [typeHint] Type hint
 * @return {(Object|Array|Function|string|undefined)}
 */
exports.canonicalize = function canonicalize(value, stack, typeHint) {
  var canonicalizedObj;
  /* eslint-disable no-unused-vars */
  var prop;
  /* eslint-enable no-unused-vars */
  typeHint = typeHint || canonicalType(value);
  function withStack(value, fn) {
    stack.push(value);
    fn();
    stack.pop();
  }

  stack = stack || [];

  if (stack.indexOf(value) !== -1) {
    return '[Circular]';
  }

  switch (typeHint) {
    case 'undefined':
    case 'buffer':
    case 'null':
      canonicalizedObj = value;
      break;
    case 'array':
      withStack(value, function () {
        canonicalizedObj = value.map(function (item) {
          return exports.canonicalize(item, stack);
        });
      });
      break;
    case 'function':
      /* eslint-disable-next-line no-unused-vars, no-unreachable-loop */
      for (prop in value) {
        canonicalizedObj = {};
        break;
      }
      /* eslint-enable guard-for-in */
      if (!canonicalizedObj) {
        canonicalizedObj = emptyRepresentation(value, typeHint);
        break;
      }
    /* falls through */
    case 'null-prototype':
    case 'object':
      canonicalizedObj = canonicalizedObj || {};
      if (typeHint === 'null-prototype' && Symbol.toStringTag in value) {
        canonicalizedObj['[Symbol.toStringTag]'] = value[Symbol.toStringTag];
      }
      withStack(value, function () {
        Object.keys(value)
          .sort()
          .forEach(function (key) {
            canonicalizedObj[key] = exports.canonicalize(value[key], stack);
          });
      });
      break;
    case 'date':
    case 'number':
    case 'regexp':
    case 'boolean':
    case 'symbol':
      canonicalizedObj = value;
      break;
    default:
      canonicalizedObj = value + '';
  }

  return canonicalizedObj;
};

/**
 * @summary
 * This Filter based on `mocha-clean` module.(see: `github.com/rstacruz/mocha-clean`)
 * @description
 * When invoking this function you get a filter function that get the Error.stack as an input,
 * and return a prettify output.
 * (i.e: strip Mocha and internal node functions from stack trace).
 * @returns {Function}
 */
exports.stackTraceFilter = function () {
  // TODO: Replace with `process.browser`
  var is = typeof document === 'undefined' ? {node: true} : {browser: true};
  var slash = path.sep;
  var cwd;
  if (is.node) {
    cwd = exports.cwd() + slash;
  } else {
    cwd = (
      typeof location === 'undefined' ? window.location : location
    ).href.replace(/\/[^/]*$/, '/');
    slash = '/';
  }

  function isMochaInternal(line) {
    return (
      ~line.indexOf('node_modules' + slash + 'mocha' + slash) ||
      ~line.indexOf(slash + 'mocha.js') ||
      ~line.indexOf(slash + 'mocha.min.js')
    );
  }

  function isNodeInternal(line) {
    return (
      ~line.indexOf('(timers.js:') ||
      ~line.indexOf('(events.js:') ||
      ~line.indexOf('(node.js:') ||
      ~line.indexOf('(module.js:') ||
      ~line.indexOf('GeneratorFunctionPrototype.next (native)') ||
      false
    );
  }

  return function (stack) {
    stack = stack.split('\n');

    stack = stack.reduce(function (list, line) {
      if (isMochaInternal(line)) {
        return list;
      }

      if (is.node && isNodeInternal(line)) {
        return list;
      }

      // Clean up cwd(absolute)
      if (/:\d+:\d+\)?$/.test(line)) {
        line = line.replace('(' + cwd, '(');
      }

      list.push(line);
      return list;
    }, []);

    return stack.join('\n');
  };
};

/**
 * Crude, but effective.
 * @public
 * @param {*} value
 * @returns {boolean} Whether or not `value` is a Promise
 */
exports.isPromise = function isPromise(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.then === 'function'
  );
};

/**
 * Clamps a numeric value to an inclusive range.
 *
 * @param {number} value - Value to be clamped.
 * @param {number[]} range - Two element array specifying [min, max] range.
 * @returns {number} clamped value
 */
exports.clamp = function clamp(value, range) {
  return Math.min(Math.max(value, range[0]), range[1]);
};

/**
 * It's a noop.
 * @public
 */
exports.noop = function () {};

/**
 * Creates a map-like object.
 *
 * @description
 * A "map" is an object with no prototype, for our purposes. In some cases
 * this would be more appropriate than a `Map`, especially if your environment
 * doesn't support it. Recommended for use in Mocha's public APIs.
 *
 * @public
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Custom_and_Null_objects|MDN:Map}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Custom_and_Null_objects|MDN:Object.create - Custom objects}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Custom_and_Null_objects|MDN:Object.assign}
 * @param {...*} [obj] - Arguments to `Object.assign()`.
 * @returns {Object} An object with no prototype, having `...obj` properties
 */
exports.createMap = function (obj) {
  return Object.assign.apply(
    null,
    [Object.create(null)].concat(Array.prototype.slice.call(arguments))
  );
};

/**
 * Creates a read-only map-like object.
 *
 * @description
 * This differs from {@link module:utils.createMap createMap} only in that
 * the argument must be non-empty, because the result is frozen.
 *
 * @see {@link module:utils.createMap createMap}
 * @param {...*} [obj] - Arguments to `Object.assign()`.
 * @returns {Object} A frozen object with no prototype, having `...obj` properties
 * @throws {TypeError} if argument is not a non-empty object.
 */
exports.defineConstants = function (obj) {
  if (canonicalType(obj) !== 'object' || !Object.keys(obj).length) {
    throw new TypeError('Invalid argument; expected a non-empty object');
  }
  return Object.freeze(exports.createMap(obj));
};

/**
 * Returns current working directory
 *
 * Wrapper around `process.cwd()` for isolation
 * @private
 */
exports.cwd = function cwd() {
  return process.cwd();
};

/**
 * Returns `true` if Mocha is running in a browser.
 * Checks for `process.browser`.
 * @returns {boolean}
 * @private
 */
exports.isBrowser = function isBrowser() {
  return Boolean(process.browser);
};

/*
 * Casts `value` to an array; useful for optionally accepting array parameters
 *
 * It follows these rules, depending on `value`.  If `value` is...
 * 1. `undefined`: return an empty Array
 * 2. `null`: return an array with a single `null` element
 * 3. Any other object: return the value of `Array.from()` _if_ the object is iterable
 * 4. otherwise: return an array with a single element, `value`
 * @param {*} value - Something to cast to an Array
 * @returns {Array<*>}
 */
exports.castArray = function castArray(value) {
  if (value === undefined) {
    return [];
  }
  if (value === null) {
    return [null];
  }
  if (
    typeof value === 'object' &&
    (typeof value[Symbol.iterator] === 'function' || value.length !== undefined)
  ) {
    return Array.from(value);
  }
  return [value];
};

exports.constants = exports.defineConstants({
  MOCHA_ID_PROP_NAME
});

const uniqueIDBase =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';

/**
 * Creates a new unique identifier
 * Does not create cryptographically safe ids.
 * Trivial copy of nanoid/non-secure
 * @returns {string} Unique identifier
 */
exports.uniqueID = () => {
  let id = '';
  for (let i = 0; i < 21; i++) {
    id += uniqueIDBase[(Math.random() * 64) | 0];
  }
  return id;
};

exports.assignNewMochaID = obj => {
  const id = exports.uniqueID();
  Object.defineProperty(obj, MOCHA_ID_PROP_NAME, {
    get() {
      return id;
    }
  });
  return obj;
};

/**
 * Retrieves a Mocha ID from an object, if present.
 * @param {*} [obj] - Object
 * @returns {string|void}
 */
exports.getMochaID = obj =>
  obj && typeof obj === 'object' ? obj[MOCHA_ID_PROP_NAME] : undefined;

/**
 * Replaces any detected circular dependency with the string '[Circular]'
 * Mutates original object
 * @param inputObj {*}
 * @returns {*}
 */
exports.breakCircularDeps = inputObj => {
  const seen = new Set();

  function _breakCircularDeps(obj) {
    if (obj && typeof obj !== 'object') {
      return obj;
    }

    if (seen.has(obj)) {
      return '[Circular]';
    }

    seen.add(obj);
    for (const k in obj) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, k);

      if (descriptor && descriptor.writable) {
        obj[k] = _breakCircularDeps(obj[k], k);
      }
    }

    // deleting means only a seen object that is its own child will be detected
    seen.delete(obj);
    return obj;
  }

  return _breakCircularDeps(inputObj);
};

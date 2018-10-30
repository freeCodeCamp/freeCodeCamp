'use strict';

var _ansiStyles = require('ansi-styles');

var _ansiStyles2 = _interopRequireDefault(_ansiStyles);

var _collections = require('./collections');

var _asymmetric_matcher = require('./plugins/asymmetric_matcher');

var _asymmetric_matcher2 = _interopRequireDefault(_asymmetric_matcher);

var _convert_ansi = require('./plugins/convert_ansi');

var _convert_ansi2 = _interopRequireDefault(_convert_ansi);

var _dom_collection = require('./plugins/dom_collection');

var _dom_collection2 = _interopRequireDefault(_dom_collection);

var _dom_element = require('./plugins/dom_element');

var _dom_element2 = _interopRequireDefault(_dom_element);

var _immutable = require('./plugins/immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _react_element = require('./plugins/react_element');

var _react_element2 = _interopRequireDefault(_react_element);

var _react_test_component = require('./plugins/react_test_component');

var _react_test_component2 = _interopRequireDefault(_react_test_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const toString = Object.prototype.toString;
const toISOString = Date.prototype.toISOString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = Symbol.prototype.toString;

// Explicitly comparing typeof constructor to function avoids undefined as name
// when mock identity-obj-proxy returns the key as the value for any key.
const getConstructorName = val => typeof val.constructor === 'function' && val.constructor.name || 'Object';

// Is val is equal to global window object? Works even if it does not exist :)
/* global window */
const isWindow = val => typeof window !== 'undefined' && val === window;

const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
const NEWLINE_REGEXP = /\n/gi;

class PrettyFormatPluginError extends Error {
  constructor(message, stack) {
    super(message);
    this.stack = stack;
    this.name = this.constructor.name;
  }
}

function isToStringedArrayType(toStringed) {
  return toStringed === '[object Array]' || toStringed === '[object ArrayBuffer]' || toStringed === '[object DataView]' || toStringed === '[object Float32Array]' || toStringed === '[object Float64Array]' || toStringed === '[object Int8Array]' || toStringed === '[object Int16Array]' || toStringed === '[object Int32Array]' || toStringed === '[object Uint8Array]' || toStringed === '[object Uint8ClampedArray]' || toStringed === '[object Uint16Array]' || toStringed === '[object Uint32Array]';
}

function printNumber(val) {
  return Object.is(val, -0) ? '-0' : String(val);
}

function printFunction(val, printFunctionName) {
  if (!printFunctionName) {
    return '[Function]';
  }
  return '[Function ' + (val.name || 'anonymous') + ']';
}

function printSymbol(val) {
  return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
}

function printError(val) {
  return '[' + errorToString.call(val) + ']';
}

function printBasicValue(val, printFunctionName, escapeRegex) {
  if (val === true || val === false) {
    return '' + val;
  }
  if (val === undefined) {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }

  const typeOf = typeof val;

  if (typeOf === 'number') {
    return printNumber(val);
  }
  if (typeOf === 'string') {
    return '"' + val.replace(/"|\\/g, '\\$&') + '"';
  }
  if (typeOf === 'function') {
    return printFunction(val, printFunctionName);
  }
  if (typeOf === 'symbol') {
    return printSymbol(val);
  }

  const toStringed = toString.call(val);

  if (toStringed === '[object WeakMap]') {
    return 'WeakMap {}';
  }
  if (toStringed === '[object WeakSet]') {
    return 'WeakSet {}';
  }
  if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') {
    return printFunction(val, printFunctionName);
  }
  if (toStringed === '[object Symbol]') {
    return printSymbol(val);
  }
  if (toStringed === '[object Date]') {
    return toISOString.call(val);
  }
  if (toStringed === '[object Error]') {
    return printError(val);
  }
  if (toStringed === '[object RegExp]') {
    if (escapeRegex) {
      // https://github.com/benjamingr/RegExp.escape/blob/master/polyfill.js
      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    return regExpToString.call(val);
  }

  if (val instanceof Error) {
    return printError(val);
  }

  return null;
}

function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
  if (refs.indexOf(val) !== -1) {
    return '[Circular]';
  }
  refs = refs.slice();
  refs.push(val);

  const hitMaxDepth = ++depth > config.maxDepth;
  const min = config.min;

  if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === 'function' && !hasCalledToJSON) {
    return printer(val.toJSON(), config, indentation, depth, refs, true);
  }

  const toStringed = toString.call(val);
  if (toStringed === '[object Arguments]') {
    return hitMaxDepth ? '[Arguments]' : (min ? '' : 'Arguments ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';
  }
  if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth ? '[' + val.constructor.name + ']' : (min ? '' : val.constructor.name + ' ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';
  }
  if (toStringed === '[object Map]') {
    return hitMaxDepth ? '[Map]' : 'Map {' + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, ' => ') + '}';
  }
  if (toStringed === '[object Set]') {
    return hitMaxDepth ? '[Set]' : 'Set {' + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + '}';
  }

  // Avoid failure to serialize global window object in jsdom test environment.
  // For example, not even relevant if window is prop of React element.
  return hitMaxDepth || isWindow(val) ? '[' + getConstructorName(val) + ']' : (min ? '' : getConstructorName(val) + ' ') + '{' + (0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer) + '}';
}

function printPlugin(plugin, val, config, indentation, depth, refs) {
  let printed;

  try {
    printed = plugin.serialize ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, valChild => printer(valChild, config, indentation, depth, refs), str => {
      const indentationNext = indentation + config.indent;
      return indentationNext + str.replace(NEWLINE_REGEXP, '\n' + indentationNext);
    }, {
      edgeSpacing: config.spacingOuter,
      min: config.min,
      spacing: config.spacingInner
    }, config.colors);
  } catch (error) {
    throw new PrettyFormatPluginError(error.message, error.stack);
  }
  if (typeof printed !== 'string') {
    throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
  }
  return printed;
}

function findPlugin(plugins, val) {
  for (let p = 0; p < plugins.length; p++) {
    try {
      if (plugins[p].test(val)) {
        return plugins[p];
      }
    } catch (error) {
      throw new PrettyFormatPluginError(error.message, error.stack);
    }
  }

  return null;
}

function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
  const plugin = findPlugin(config.plugins, val);
  if (plugin !== null) {
    return printPlugin(plugin, val, config, indentation, depth, refs);
  }

  const basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex);
  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
}

const DEFAULT_THEME = {
  comment: 'gray',
  content: 'reset',
  prop: 'yellow',
  tag: 'cyan',
  value: 'green'
};

const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);

const DEFAULT_OPTIONS = {
  callToJSON: true,
  escapeRegex: false,
  highlight: false,
  indent: 2,
  maxDepth: Infinity,
  min: false,
  plugins: [],
  printFunctionName: true,
  theme: DEFAULT_THEME
};

function validateOptions(options) {
  Object.keys(options).forEach(key => {
    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
      throw new Error(`pretty-format: Unknown option "${key}".`);
    }
  });

  if (options.min && options.indent !== undefined && options.indent !== 0) {
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
  }

  if (options.theme !== undefined) {
    if (options.theme === null) {
      throw new Error(`pretty-format: Option "theme" must not be null.`);
    }

    if (typeof options.theme !== 'object') {
      throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
    }
  }
}

const getColorsHighlight = (options
// $FlowFixMe: Flow thinks keys from `Colors` are missing from `DEFAULT_THEME_KEYS`
) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
  const value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];
  const color = _ansiStyles2.default[value];
  if (color && typeof color.close === 'string' && typeof color.open === 'string') {
    colors[key] = color;
  } else {
    throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
  }
  return colors;
}, Object.create(null));

const getColorsEmpty = () =>
// $FlowFixMe: Flow thinks keys from `Colors` are missing from `DEFAULT_THEME_KEYS`
DEFAULT_THEME_KEYS.reduce((colors, key) => {
  colors[key] = { close: '', open: '' };
  return colors;
}, Object.create(null));

const getPrintFunctionName = options => options && options.printFunctionName !== undefined ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;

const getEscapeRegex = options => options && options.escapeRegex !== undefined ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;

const getConfig = options => ({
  callToJSON: options && options.callToJSON !== undefined ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
  colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
  escapeRegex: getEscapeRegex(options),
  indent: options && options.min ? '' : createIndent(options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent),
  maxDepth: options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
  min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
  plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,
  printFunctionName: getPrintFunctionName(options),
  spacingInner: options && options.min ? ' ' : '\n',
  spacingOuter: options && options.min ? '' : '\n'
});

function createIndent(indent) {
  return new Array(indent + 1).join(' ');
}

function prettyFormat(val, options) {
  if (options) {
    validateOptions(options);
    if (options.plugins) {
      const plugin = findPlugin(options.plugins, val);
      if (plugin !== null) {
        return printPlugin(plugin, val, getConfig(options), '', 0, []);
      }
    }
  }

  const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options));
  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(val, getConfig(options), '', 0, []);
}

prettyFormat.plugins = {
  AsymmetricMatcher: _asymmetric_matcher2.default,
  ConvertAnsi: _convert_ansi2.default,
  DOMCollection: _dom_collection2.default,
  DOMElement: _dom_element2.default,
  Immutable: _immutable2.default,
  ReactElement: _react_element2.default,
  ReactTestComponent: _react_test_component2.default
};

module.exports = prettyFormat;
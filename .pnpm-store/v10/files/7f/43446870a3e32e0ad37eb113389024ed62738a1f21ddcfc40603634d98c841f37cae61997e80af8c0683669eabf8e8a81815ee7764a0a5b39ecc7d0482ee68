'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.test = exports.serialize = exports.default = void 0;

var _markup = require('./lib/markup');

var global = (function () {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  } else if (typeof global !== 'undefined') {
    return global;
  } else if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')();
  }
})();

var Symbol = global['jest-symbol-do-not-touch'] || global.Symbol;
const testSymbol =
  typeof Symbol === 'function' && Symbol.for
    ? Symbol.for('react.test.json')
    : 0xea71357;

const getPropKeys = object => {
  const {props} = object;
  return props
    ? Object.keys(props)
        .filter(key => props[key] !== undefined)
        .sort()
    : [];
};

const serialize = (object, config, indentation, depth, refs, printer) =>
  ++depth > config.maxDepth
    ? (0, _markup.printElementAsLeaf)(object.type, config)
    : (0, _markup.printElement)(
        object.type,
        object.props
          ? (0, _markup.printProps)(
              getPropKeys(object),
              object.props,
              config,
              indentation + config.indent,
              depth,
              refs,
              printer
            )
          : '',
        object.children
          ? (0, _markup.printChildren)(
              object.children,
              config,
              indentation + config.indent,
              depth,
              refs,
              printer
            )
          : '',
        config,
        indentation
      );

exports.serialize = serialize;

const test = val => val && val.$$typeof === testSymbol;

exports.test = test;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports.default = _default;

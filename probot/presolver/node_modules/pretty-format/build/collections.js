'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printIteratorEntries = printIteratorEntries;
exports.printIteratorValues = printIteratorValues;
exports.printListItems = printListItems;
exports.printObjectProperties = printObjectProperties;


const getSymbols = Object.getOwnPropertySymbols || (obj => []); /**
                                                                 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                 *
                                                                 * This source code is licensed under the MIT license found in the
                                                                 * LICENSE file in the root directory of this source tree.
                                                                 *
                                                                 * 
                                                                 */

const isSymbol = key =>
// $FlowFixMe string literal `symbol`. This value is not a valid `typeof` return value
typeof key === 'symbol' || toString.call(key) === '[object Symbol]';

// Return entries (for example, of a map)
// with spacing, indentation, and comma
// without surrounding punctuation (for example, braces)
function printIteratorEntries(
// Flow 0.51.0: property `@@iterator` of $Iterator not found in Object
// To allow simplistic getRecordIterator in immutable.js
iterator, config, indentation, depth, refs, printer) {
  let separator = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : ': ';

  let result = '';
  let current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;

    const indentationNext = indentation + config.indent;

    while (!current.done) {
      const name = printer(current.value[0], config, indentationNext, depth, refs);
      const value = printer(current.value[1], config, indentationNext, depth, refs);

      result += indentationNext + name + separator + value;

      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

// Return values (for example, of a set)
// with spacing, indentation, and comma
// without surrounding punctuation (braces or brackets)
function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
  let result = '';
  let current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;

    const indentationNext = indentation + config.indent;

    while (!current.done) {
      result += indentationNext + printer(current.value, config, indentationNext, depth, refs);

      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

// Return items (for example, of an array)
// with spacing, indentation, and comma
// without surrounding punctuation (for example, brackets)
function printListItems(list, config, indentation, depth, refs, printer) {
  let result = '';

  if (list.length) {
    result += config.spacingOuter;

    const indentationNext = indentation + config.indent;

    for (let i = 0; i < list.length; i++) {
      result += indentationNext + printer(list[i], config, indentationNext, depth, refs);

      if (i < list.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

// Return properties of an object
// with spacing, indentation, and comma
// without surrounding punctuation (for example, braces)
function printObjectProperties(val, config, indentation, depth, refs, printer) {
  let result = '';
  let keys = Object.keys(val).sort();
  const symbols = getSymbols(val);

  if (symbols.length) {
    keys = keys.filter(key => !isSymbol(key)).concat(symbols);
  }

  if (keys.length) {
    result += config.spacingOuter;

    const indentationNext = indentation + config.indent;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const name = printer(key, config, indentationNext, depth, refs);
      const value = printer(val[key], config, indentationNext, depth, refs);

      result += indentationNext + name + ': ' + value;

      if (i < keys.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}
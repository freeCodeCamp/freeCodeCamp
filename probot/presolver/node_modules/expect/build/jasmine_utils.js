'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equals = equals;
exports.isA = isA;
exports.fnNameFor = fnNameFor;
exports.isUndefined = isUndefined;
exports.hasProperty = hasProperty;
exports.isImmutableUnorderedKeyed = isImmutableUnorderedKeyed;
exports.isImmutableUnorderedSet = isImmutableUnorderedSet;


// Extracted out of jasmine 2.5.2
function equals(a, b, customTesters) {
  customTesters = customTesters || [];
  return eq(a, b, [], [], customTesters);
} /*
  Copyright (c) 2008-2016 Pivotal Labs
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  
  */

/* eslint-disable */

function isAsymmetric(obj) {
  return obj && isA('Function', obj.asymmetricMatch);
}

function asymmetricMatch(a, b) {
  var asymmetricA = isAsymmetric(a),
      asymmetricB = isAsymmetric(b);

  if (asymmetricA && asymmetricB) {
    return undefined;
  }

  if (asymmetricA) {
    return a.asymmetricMatch(b);
  }

  if (asymmetricB) {
    return b.asymmetricMatch(a);
  }
}

// Equality function lovingly adapted from isEqual in
//   [Underscore](http://underscorejs.org)
function eq(a, b, aStack, bStack, customTesters) {
  var result = true;

  var asymmetricResult = asymmetricMatch(a, b);
  if (asymmetricResult !== undefined) {
    return asymmetricResult;
  }

  for (var i = 0; i < customTesters.length; i++) {
    var customTesterResult = customTesters[i](a, b);
    if (customTesterResult !== undefined) {
      return customTesterResult;
    }
  }

  if (a instanceof Error && b instanceof Error) {
    return a.message == b.message;
  }

  if (Object.is(a, b)) {
    return true;
  }
  // A strict comparison is necessary because `null == undefined`.
  if (a === null || b === null) {
    return a === b;
  }
  var className = Object.prototype.toString.call(a);
  if (className != Object.prototype.toString.call(b)) {
    return false;
  }
  switch (className) {
    // Strings, numbers, dates, and booleans are compared by value.
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return a == String(b);
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
      // other numeric values.
      return a != +a ? b != +b : a === 0 ? 1 / a == 1 / b : a == +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a == +b;
    // RegExps are compared by their source patterns and flags.
    case '[object RegExp]':
      return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
  }
  if (typeof a != 'object' || typeof b != 'object') {
    return false;
  }

  var aIsDomNode = isDomNode(a);
  var bIsDomNode = isDomNode(b);
  if (aIsDomNode && bIsDomNode) {
    // At first try to use DOM3 method isEqualNode
    if (a.isEqualNode) {
      return a.isEqualNode(b);
    }
    // IE8 doesn't support isEqualNode, try to use outerHTML && innerText
    var aIsElement = a instanceof Element;
    var bIsElement = b instanceof Element;
    if (aIsElement && bIsElement) {
      return a.outerHTML == b.outerHTML;
    }
    if (aIsElement || bIsElement) {
      return false;
    }
    return a.innerText == b.innerText && a.textContent == b.textContent;
  }
  if (aIsDomNode || bIsDomNode) {
    return false;
  }

  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] == a) {
      return bStack[length] == b;
    }
  }
  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);
  var size = 0;
  // Recursively compare objects and arrays.
  // Compare array lengths to determine if a deep comparison is necessary.
  if (className == '[object Array]') {
    size = a.length;
    if (size !== b.length) {
      return false;
    }

    while (size--) {
      result = eq(a[size], b[size], aStack, bStack, customTesters);
      if (!result) {
        return false;
      }
    }
  }

  // Deep compare objects.
  var aKeys = keys(a, className == '[object Array]'),
      key;
  size = aKeys.length;

  // Ensure that both objects contain the same number of properties before comparing deep equality.
  if (keys(b, className == '[object Array]').length !== size) {
    return false;
  }

  while (size--) {
    key = aKeys[size];

    // Deep compare each member
    result = has(b, key) && eq(a[key], b[key], aStack, bStack, customTesters);

    if (!result) {
      return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();

  return result;
}

function keys(obj, isArray) {
  var allKeys = function (o) {
    var keys = [];
    for (var key in o) {
      if (has(o, key)) {
        keys.push(key);
      }
    }
    return keys.concat(Object.getOwnPropertySymbols(o));
  }(obj);

  if (!isArray) {
    return allKeys;
  }

  var extraKeys = [];
  if (allKeys.length === 0) {
    return allKeys;
  }

  for (var x = 0; x < allKeys.length; x++) {
    if (!allKeys[x].match(/^[0-9]+$/)) {
      extraKeys.push(allKeys[x]);
    }
  }

  return extraKeys;
}

function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined;
}

function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === '[object ' + typeName + ']';
}

function isDomNode(obj) {
  return obj.nodeType > 0;
}

function fnNameFor(func) {
  if (func.name) {
    return func.name;
  }

  const matches = func.toString().match(/^\s*function\s*(\w*)\s*\(/);
  return matches ? matches[1] : '<anonymous>';
}

function isUndefined(obj) {
  return obj === void 0;
}

function getPrototype(obj) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(obj);
  }

  if (obj.constructor.prototype == obj) {
    return null;
  }

  return obj.constructor.prototype;
}

function hasProperty(obj, property) {
  if (!obj) {
    return false;
  }

  if (Object.prototype.hasOwnProperty.call(obj, property)) {
    return true;
  }

  return hasProperty(getPrototype(obj), property);
}

// SENTINEL constants are from https://github.com/facebook/immutable-js
const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
const IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

function isImmutableUnorderedKeyed(maybeKeyed) {
  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL] && !maybeKeyed[IS_ORDERED_SENTINEL]);
}

function isImmutableUnorderedSet(maybeSet) {
  return !!(maybeSet && maybeSet[IS_SET_SENTINEL] && !maybeSet[IS_ORDERED_SENTINEL]);
}
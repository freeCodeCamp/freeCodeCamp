"use strict";

var _assign = require("object-assign");

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */
var KIND_KEYS = 'keys';
var KIND_VALUES = 'values';
var KIND_ENTRIES = 'entries';
/**
 * Specific Array iterators.
 */

var ArrayIterators = function () {
  var hasNative = hasNativeIterator(Array);
  var ArrayIterator;

  if (!hasNative) {
    ArrayIterator = /*#__PURE__*/function () {
      // 22.1.5.1 CreateArrayIterator Abstract Operation
      function ArrayIterator(array, kind) {
        this._iteratedObject = array;
        this._kind = kind;
        this._nextIndex = 0;
      } // 22.1.5.2.1 %ArrayIteratorPrototype%.next()


      var _proto = ArrayIterator.prototype;

      _proto.next = function next() {
        if (this._iteratedObject == null) {
          return {
            value: undefined,
            done: true
          };
        }

        var array = this._iteratedObject;
        var len = this._iteratedObject.length;
        var index = this._nextIndex;
        var kind = this._kind;

        if (index >= len) {
          this._iteratedObject = undefined;
          return {
            value: undefined,
            done: true
          };
        }

        this._nextIndex = index + 1;

        if (kind === KIND_KEYS) {
          return {
            value: index,
            done: false
          };
        } else if (kind === KIND_VALUES) {
          return {
            value: array[index],
            done: false
          };
        } else if (kind === KIND_ENTRIES) {
          return {
            value: [index, array[index]],
            done: false
          };
        }
      }; // 22.1.5.2.2 %ArrayIteratorPrototype%[@@iterator]()


      _proto[Symbol.iterator] = function () {
        return this;
      };

      return ArrayIterator;
    }();
  }

  return {
    keys: hasNative ? function (array) {
      return array.keys();
    } : function (array) {
      return new ArrayIterator(array, KIND_KEYS);
    },
    values: hasNative ? function (array) {
      return array.values();
    } : function (array) {
      return new ArrayIterator(array, KIND_VALUES);
    },
    entries: hasNative ? function (array) {
      return array.entries();
    } : function (array) {
      return new ArrayIterator(array, KIND_ENTRIES);
    }
  };
}(); // -----------------------------------------------------------------

/**
 * Specific String iterators.
 */


var StringIterators = function () {
  var hasNative = hasNativeIterator(String);
  var StringIterator;

  if (!hasNative) {
    StringIterator = /*#__PURE__*/function () {
      // 21.1.5.1 CreateStringIterator Abstract Operation
      function StringIterator(string) {
        this._iteratedString = string;
        this._nextIndex = 0;
      } // 21.1.5.2.1 %StringIteratorPrototype%.next()


      var _proto2 = StringIterator.prototype;

      _proto2.next = function next() {
        if (this._iteratedString == null) {
          return {
            value: undefined,
            done: true
          };
        }

        var index = this._nextIndex;
        var s = this._iteratedString;
        var len = s.length;

        if (index >= len) {
          this._iteratedString = undefined;
          return {
            value: undefined,
            done: true
          };
        }

        var ret;
        var first = s.charCodeAt(index);

        if (first < 0xD800 || first > 0xDBFF || index + 1 === len) {
          ret = s[index];
        } else {
          var second = s.charCodeAt(index + 1);

          if (second < 0xDC00 || second > 0xDFFF) {
            ret = s[index];
          } else {
            ret = s[index] + s[index + 1];
          }
        }

        this._nextIndex = index + ret.length;
        return {
          value: ret,
          done: false
        };
      }; // 21.1.5.2.2 %StringIteratorPrototype%[@@iterator]()


      _proto2[Symbol.iterator] = function () {
        return this;
      };

      return StringIterator;
    }();
  }

  return {
    keys: function keys() {
      throw TypeError("Strings default iterator doesn't implement keys.");
    },
    values: hasNative ? function (string) {
      return string[Symbol.iterator]();
    } : function (string) {
      return new StringIterator(string);
    },
    entries: function entries() {
      throw TypeError("Strings default iterator doesn't implement entries.");
    }
  };
}();

function hasNativeIterator(classObject) {
  return typeof classObject.prototype[Symbol.iterator] === 'function' && typeof classObject.prototype.values === 'function' && typeof classObject.prototype.keys === 'function' && typeof classObject.prototype.entries === 'function';
} // -----------------------------------------------------------------

/**
 * Generic object iterator.
 */


var ObjectIterator = /*#__PURE__*/function () {
  function ObjectIterator(object, kind) {
    this._iteratedObject = object;
    this._kind = kind;
    this._keys = Object.keys(object);
    this._nextIndex = 0;
  }

  var _proto3 = ObjectIterator.prototype;

  _proto3.next = function next() {
    var len = this._keys.length;
    var index = this._nextIndex;
    var kind = this._kind;
    var key = this._keys[index];

    if (index >= len) {
      this._iteratedObject = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    this._nextIndex = index + 1;

    if (kind === KIND_KEYS) {
      return {
        value: key,
        done: false
      };
    } else if (kind === KIND_VALUES) {
      return {
        value: this._iteratedObject[key],
        done: false
      };
    } else if (kind === KIND_ENTRIES) {
      return {
        value: [key, this._iteratedObject[key]],
        done: false
      };
    }
  };

  _proto3[Symbol.iterator] = function () {
    return this;
  };

  return ObjectIterator;
}();
/**
 * Generic object iterator, iterates over all own enumerable
 * properties. Used only if if no specific iterator is available,
 * and object don't implement iterator protocol.
 */


var GenericIterators = {
  keys: function keys(object) {
    return new ObjectIterator(object, KIND_KEYS);
  },
  values: function values(object) {
    return new ObjectIterator(object, KIND_VALUES);
  },
  entries: function entries(object) {
    return new ObjectIterator(object, KIND_ENTRIES);
  }
}; // -----------------------------------------------------------------

/**
 * Main iterator function. Returns default iterator based
 * on the class of an instance.
 */

function enumerate(object, kind) {
  // First check specific iterators.
  if (typeof object === 'string') {
    return StringIterators[kind || KIND_VALUES](object);
  } else if (Array.isArray(object)) {
    return ArrayIterators[kind || KIND_VALUES](object); // Then see if an object implements own.
  } else if (object[Symbol.iterator]) {
    return object[Symbol.iterator](); // And fallback to generic with entries.
  } else {
    return GenericIterators[kind || KIND_ENTRIES](object);
  }
}

_assign(enumerate, {
  /**
   * Export constants
   */
  KIND_KEYS: KIND_KEYS,
  KIND_VALUES: KIND_VALUES,
  KIND_ENTRIES: KIND_ENTRIES,

  /**
   * Convenient explicit iterators for special kinds.
   */
  keys: function keys(object) {
    return enumerate(object, KIND_KEYS);
  },
  values: function values(object) {
    return enumerate(object, KIND_VALUES);
  },
  entries: function entries(object) {
    return enumerate(object, KIND_ENTRIES);
  },
  generic: GenericIterators.entries
});

module.exports = enumerate;
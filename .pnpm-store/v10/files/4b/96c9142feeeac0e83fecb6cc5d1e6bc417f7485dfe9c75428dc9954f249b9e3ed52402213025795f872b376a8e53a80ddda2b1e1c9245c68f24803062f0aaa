/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks
 */
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var invariant = require("./invariant");

var parent = function parent(node) {
  return Math.floor(node / 2);
};

var Int32Array = global.Int32Array || function (size) {
  var xs = [];

  for (var i = size - 1; i >= 0; --i) {
    xs[i] = 0;
  }

  return xs;
};
/**
 * Computes the next power of 2 after or equal to x.
 */


function ceilLog2(x) {
  var y = 1;

  while (y < x) {
    y *= 2;
  }

  return y;
}
/**
 * A prefix interval tree stores an numeric array and the partial sums of that
 * array. It is optimized for updating the values of the array without
 * recomputing all of the partial sums.
 *
 *   - O(ln n) update
 *   - O(1) lookup
 *   - O(ln n) compute a partial sum
 *   - O(n) space
 *
 * Note that the sequence of partial sums is one longer than the array, so that
 * the first partial sum is always 0, and the last partial sum is the sum of the
 * entire array.
 */


var PrefixIntervalTree = /*#__PURE__*/function () {
  /**
   * Number of elements in the array
   */

  /**
   * Half the size of the heap. It is also the number of non-leaf nodes, and the
   * index of the first element in the heap. Always a power of 2.
   */

  /**
   * Binary heap
   */
  function PrefixIntervalTree(xs) {
    _defineProperty(this, "_size", void 0);

    _defineProperty(this, "_half", void 0);

    _defineProperty(this, "_heap", void 0);

    this._size = xs.length;
    this._half = ceilLog2(this._size);
    this._heap = new Int32Array(2 * this._half);
    var i;

    for (i = 0; i < this._size; ++i) {
      this._heap[this._half + i] = xs[i];
    }

    for (i = this._half - 1; i > 0; --i) {
      this._heap[i] = this._heap[2 * i] + this._heap[2 * i + 1];
    }
  }

  PrefixIntervalTree.uniform = function uniform(size, initialValue) {
    var xs = [];

    for (var i = size - 1; i >= 0; --i) {
      xs[i] = initialValue;
    }

    return new PrefixIntervalTree(xs);
  };

  PrefixIntervalTree.empty = function empty(size) {
    return PrefixIntervalTree.uniform(size, 0);
  };

  var _proto = PrefixIntervalTree.prototype;

  _proto.set = function set(index, value) {
    !(0 <= index && index < this._size) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Index out of range %s', index) : invariant(false) : void 0;
    var node = this._half + index;
    this._heap[node] = value;
    node = parent(node);

    for (; node !== 0; node = parent(node)) {
      this._heap[node] = this._heap[2 * node] + this._heap[2 * node + 1];
    }
  };

  _proto.get = function get(index) {
    !(0 <= index && index < this._size) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Index out of range %s', index) : invariant(false) : void 0;
    var node = this._half + index;
    return this._heap[node];
  };

  _proto.getSize = function getSize() {
    return this._size;
  };
  /**
   * Returns the sum get(0) + get(1) + ... + get(end - 1).
   */


  _proto.sumUntil = function sumUntil(end) {
    !(0 <= end && end < this._size + 1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Index out of range %s', end) : invariant(false) : void 0;

    if (end === 0) {
      return 0;
    }

    var node = this._half + end - 1;
    var sum = this._heap[node];

    for (; node !== 1; node = parent(node)) {
      if (node % 2 === 1) {
        sum += this._heap[node - 1];
      }
    }

    return sum;
  };
  /**
   * Returns the sum get(0) + get(1) + ... + get(inclusiveEnd).
   */


  _proto.sumTo = function sumTo(inclusiveEnd) {
    !(0 <= inclusiveEnd && inclusiveEnd < this._size) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Index out of range %s', inclusiveEnd) : invariant(false) : void 0;
    return this.sumUntil(inclusiveEnd + 1);
  };
  /**
   * Returns the sum get(begin) + get(begin + 1) + ... + get(end - 1).
   */


  _proto.sum = function sum(begin, end) {
    !(begin <= end) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Begin must precede end') : invariant(false) : void 0;
    return this.sumUntil(end) - this.sumUntil(begin);
  };
  /**
   * Returns the smallest i such that 0 <= i <= size and sumUntil(i) <= t, or
   * -1 if no such i exists.
   */


  _proto.greatestLowerBound = function greatestLowerBound(t) {
    if (t < 0) {
      return -1;
    }

    var node = 1;

    if (this._heap[node] <= t) {
      return this._size;
    }

    while (node < this._half) {
      var leftSum = this._heap[2 * node];

      if (t < leftSum) {
        node = 2 * node;
      } else {
        node = 2 * node + 1;
        t -= leftSum;
      }
    }

    return node - this._half;
  };
  /**
   * Returns the smallest i such that 0 <= i <= size and sumUntil(i) < t, or
   * -1 if no such i exists.
   */


  _proto.greatestStrictLowerBound = function greatestStrictLowerBound(t) {
    if (t <= 0) {
      return -1;
    }

    var node = 1;

    if (this._heap[node] < t) {
      return this._size;
    }

    while (node < this._half) {
      var leftSum = this._heap[2 * node];

      if (t <= leftSum) {
        node = 2 * node;
      } else {
        node = 2 * node + 1;
        t -= leftSum;
      }
    }

    return node - this._half;
  };
  /**
   * Returns the smallest i such that 0 <= i <= size and t <= sumUntil(i), or
   * size + 1 if no such i exists.
   */


  _proto.leastUpperBound = function leastUpperBound(t) {
    return this.greatestStrictLowerBound(t) + 1;
  };
  /**
   * Returns the smallest i such that 0 <= i <= size and t < sumUntil(i), or
   * size + 1 if no such i exists.
   */


  _proto.leastStrictUpperBound = function leastStrictUpperBound(t) {
    return this.greatestLowerBound(t) + 1;
  };

  return PrefixIntervalTree;
}();

module.exports = PrefixIntervalTree;
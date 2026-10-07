/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * @preventMunge
 */
'use strict';
/*
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */

function defaultComparator(a, b) {
  return a < b;
}

var Heap = /*#__PURE__*/function () {
  function Heap(items, comparator) {
    this._items = items || [];
    this._size = this._items.length;
    this._comparator = comparator || defaultComparator;

    this._heapify();
  }
  /*
   * @return {boolean}
   */


  var _proto = Heap.prototype;

  _proto.empty = function empty() {
    return this._size === 0;
  };
  /*
   * @return {*}
   */


  _proto.pop = function pop() {
    if (this._size === 0) {
      return;
    }

    var elt = this._items[0];

    var lastElt = this._items.pop();

    this._size--;

    if (this._size > 0) {
      this._items[0] = lastElt;

      this._sinkDown(0);
    }

    return elt;
  };
  /*
   * @param {*} item
   */


  _proto.push = function push(item) {
    this._items[this._size++] = item;

    this._bubbleUp(this._size - 1);
  };
  /*
   * @return {number}
   */


  _proto.size = function size() {
    return this._size;
  };
  /*
   * @return {*}
   */


  _proto.peek = function peek() {
    if (this._size === 0) {
      return;
    }

    return this._items[0];
  };

  _proto._heapify = function _heapify() {
    for (var index = Math.floor((this._size + 1) / 2); index >= 0; index--) {
      this._sinkDown(index);
    }
  };
  /*
   * @parent {number} index
   */


  _proto._bubbleUp = function _bubbleUp(index) {
    var elt = this._items[index];

    while (index > 0) {
      var parentIndex = Math.floor((index + 1) / 2) - 1;
      var parentElt = this._items[parentIndex]; // if parentElt < elt, stop

      if (this._comparator(parentElt, elt)) {
        return;
      } // swap


      this._items[parentIndex] = elt;
      this._items[index] = parentElt;
      index = parentIndex;
    }
  };
  /*
   * @parent {number} index
   */


  _proto._sinkDown = function _sinkDown(index) {
    var elt = this._items[index];

    while (true) {
      var leftChildIndex = 2 * (index + 1) - 1;
      var rightChildIndex = 2 * (index + 1);
      var swapIndex = -1;

      if (leftChildIndex < this._size) {
        var leftChild = this._items[leftChildIndex];

        if (this._comparator(leftChild, elt)) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < this._size) {
        var rightChild = this._items[rightChildIndex];

        if (this._comparator(rightChild, elt)) {
          if (swapIndex === -1 || this._comparator(rightChild, this._items[swapIndex])) {
            swapIndex = rightChildIndex;
          }
        }
      } // if we don't have a swap, stop


      if (swapIndex === -1) {
        return;
      }

      this._items[index] = this._items[swapIndex];
      this._items[swapIndex] = elt;
      index = swapIndex;
    }
  };

  return Heap;
}();

module.exports = Heap;
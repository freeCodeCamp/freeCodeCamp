/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
'use strict';

var Heap = require("./Heap");

var invariant = require("./invariant"); // Data structure that allows to store values and assign positions to them
// in a way to minimize changing positions of stored values when new ones are
// added or when some values are replaced. Stored elements are alwasy assigned
// a consecutive set of positoins startin from 0 up to count of elements less 1
// Following actions can be executed
// * get position assigned to given value (null if value is not stored)
// * create new entry for new value and get assigned position back
// * replace value that is furthest from specified value range with new value
//   and get it's position back
// All operations take amortized log(n) time where n is number of elements in
// the set.


var IntegerBufferSet = /*#__PURE__*/function () {
  function IntegerBufferSet() {
    this._valueToPositionMap = {};
    this._size = 0;
    this._smallValues = new Heap([], // Initial data in the heap
    this._smallerComparator);
    this._largeValues = new Heap([], // Initial data in the heap
    this._greaterComparator);
    this.getNewPositionForValue = this.getNewPositionForValue.bind(this);
    this.getValuePosition = this.getValuePosition.bind(this);
    this.getSize = this.getSize.bind(this);
    this.replaceFurthestValuePosition = this.replaceFurthestValuePosition.bind(this);
  }

  var _proto = IntegerBufferSet.prototype;

  _proto.getSize = function getSize()
  /*number*/
  {
    return this._size;
  };

  _proto.getValuePosition = function getValuePosition(
  /*number*/
  value)
  /*?number*/
  {
    if (this._valueToPositionMap[value] === undefined) {
      return null;
    }

    return this._valueToPositionMap[value];
  };

  _proto.getNewPositionForValue = function getNewPositionForValue(
  /*number*/
  value)
  /*number*/
  {
    !(this._valueToPositionMap[value] === undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, "Shouldn't try to find new position for value already stored in BufferSet") : invariant(false) : void 0;
    var newPosition = this._size;
    this._size++;

    this._pushToHeaps(newPosition, value);

    this._valueToPositionMap[value] = newPosition;
    return newPosition;
  };

  _proto.replaceFurthestValuePosition = function replaceFurthestValuePosition(
  /*number*/
  lowValue,
  /*number*/
  highValue,
  /*number*/
  newValue)
  /*?number*/
  {
    !(this._valueToPositionMap[newValue] === undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, "Shouldn't try to replace values with value already stored value in " + "BufferSet") : invariant(false) : void 0;

    this._cleanHeaps();

    if (this._smallValues.empty() || this._largeValues.empty()) {
      // Threre are currently no values stored. We will have to create new
      // position for this value.
      return null;
    }

    var minValue = this._smallValues.peek().value;

    var maxValue = this._largeValues.peek().value;

    if (minValue >= lowValue && maxValue <= highValue) {
      // All values currently stored are necessary, we can't reuse any of them.
      return null;
    }

    var valueToReplace;

    if (lowValue - minValue > maxValue - highValue) {
      // minValue is further from provided range. We will reuse it's position.
      valueToReplace = minValue;

      this._smallValues.pop();
    } else {
      valueToReplace = maxValue;

      this._largeValues.pop();
    }

    var position = this._valueToPositionMap[valueToReplace];
    delete this._valueToPositionMap[valueToReplace];
    this._valueToPositionMap[newValue] = position;

    this._pushToHeaps(position, newValue);

    return position;
  };

  _proto._pushToHeaps = function _pushToHeaps(
  /*number*/
  position,
  /*number*/
  value) {
    var element = {
      position: position,
      value: value
    }; // We can reuse the same object in both heaps, because we don't mutate them

    this._smallValues.push(element);

    this._largeValues.push(element);
  };

  _proto._cleanHeaps = function _cleanHeaps() {
    // We not usually only remove object from one heap while moving value.
    // Here we make sure that there is no stale data on top of heaps.
    this._cleanHeap(this._smallValues);

    this._cleanHeap(this._largeValues);

    var minHeapSize = Math.min(this._smallValues.size(), this._largeValues.size());
    var maxHeapSize = Math.max(this._smallValues.size(), this._largeValues.size());

    if (maxHeapSize > 10 * minHeapSize) {
      // There are many old values in one of heaps. We nned to get rid of them
      // to not use too avoid memory leaks
      this._recreateHeaps();
    }
  };

  _proto._recreateHeaps = function _recreateHeaps() {
    var sourceHeap = this._smallValues.size() < this._largeValues.size() ? this._smallValues : this._largeValues;
    var newSmallValues = new Heap([], // Initial data in the heap
    this._smallerComparator);
    var newLargeValues = new Heap([], // Initial datat in the heap
    this._greaterComparator);

    while (!sourceHeap.empty()) {
      var element = sourceHeap.pop(); // Push all stil valid elements to new heaps

      if (this._valueToPositionMap[element.value] !== undefined) {
        newSmallValues.push(element);
        newLargeValues.push(element);
      }
    }

    this._smallValues = newSmallValues;
    this._largeValues = newLargeValues;
  };

  _proto._cleanHeap = function _cleanHeap(
  /*object*/
  heap) {
    while (!heap.empty() && this._valueToPositionMap[heap.peek().value] === undefined) {
      heap.pop();
    }
  };

  _proto._smallerComparator = function _smallerComparator(
  /*object*/
  lhs,
  /*object*/
  rhs)
  /*boolean*/
  {
    return lhs.value < rhs.value;
  };

  _proto._greaterComparator = function _greaterComparator(
  /*object*/
  lhs,
  /*object*/
  rhs)
  /*boolean*/
  {
    return lhs.value > rhs.value;
  };

  return IntegerBufferSet;
}();

module.exports = IntegerBufferSet;
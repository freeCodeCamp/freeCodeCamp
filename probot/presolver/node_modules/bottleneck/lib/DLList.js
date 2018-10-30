"use strict";

(function () {
  var DLList;

  DLList = class DLList {
    constructor(_queues) {
      this._queues = _queues;
      this._first = null;
      this._last = null;
      this.length = 0;
    }

    push(value) {
      var node, ref1;
      this.length++;
      if ((ref1 = this._queues) != null) {
        ref1.incr();
      }
      node = {
        value,
        next: null
      };
      if (this._last != null) {
        this._last.next = node;
        this._last = node;
      } else {
        this._first = this._last = node;
      }
      return void 0;
    }

    shift() {
      var ref1, ref2, value;
      if (this._first == null) {
        return void 0;
      } else {
        this.length--;
        if ((ref1 = this._queues) != null) {
          ref1.decr();
        }
      }
      value = this._first.value;
      this._first = (ref2 = this._first.next) != null ? ref2 : this._last = null;
      return value;
    }

    first() {
      if (this._first != null) {
        return this._first.value;
      }
    }

    getArray() {
      var node, ref, results;
      node = this._first;
      results = [];
      while (node != null) {
        results.push((ref = node, node = node.next, ref.value));
      }
      return results;
    }

    forEachShift(cb) {
      var node;
      node = this.shift();
      while (node != null) {
        cb(node), node = this.shift();
      }
      return void 0;
    }

  };

  module.exports = DLList;
}).call(undefined);
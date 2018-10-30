"use strict";

(function () {
  var DLList, Events, Queues;

  DLList = require("./DLList");

  Events = require("./Events");

  Queues = class Queues {
    constructor(num_priorities) {
      var i;
      this.Events = new Events(this);
      this._length = 0;
      this._lists = function () {
        var j, ref, results;
        results = [];
        for (i = j = 1, ref = num_priorities; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          results.push(new DLList(this));
        }
        return results;
      }.call(this);
    }

    incr() {
      if (this._length++ === 0) {
        return this.Events.trigger("leftzero");
      }
    }

    decr() {
      if (--this._length === 0) {
        return this.Events.trigger("zero");
      }
    }

    push(priority, job) {
      return this._lists[priority].push(job);
    }

    queued(priority) {
      if (priority != null) {
        return this._lists[priority].length;
      } else {
        return this._length;
      }
    }

    shiftAll(fn) {
      return this._lists.forEach(function (list) {
        return list.forEachShift(fn);
      });
    }

    getFirst(arr = this._lists) {
      var j, len, list;
      for (j = 0, len = arr.length; j < len; j++) {
        list = arr[j];
        if (list.length > 0) {
          return list;
        }
      }
      return [];
    }

    shiftLastFrom(priority) {
      return this.getFirst(this._lists.slice(priority).reverse()).shift();
    }

  };

  module.exports = Queues;
}).call(undefined);
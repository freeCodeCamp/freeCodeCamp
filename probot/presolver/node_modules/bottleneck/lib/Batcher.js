"use strict";

(function () {
  var Batcher, Events, parser;

  parser = require("./parser");

  Events = require("./Events");

  Batcher = function () {
    class Batcher {
      constructor(options = {}) {
        this.options = options;
        parser.load(this.options, this.defaults, this);
        this.Events = new Events(this);
        this._arr = [];
        this._resetPromise();
        this._lastFlush = Date.now();
      }

      _resetPromise() {
        return this._promise = new this.Promise((res, rej) => {
          return this._resolve = res;
        });
      }

      _flush() {
        clearTimeout(this._timeout);
        this._lastFlush = Date.now();
        this._resolve();
        this.Events.trigger("batch", [this._arr]);
        this._arr = [];
        return this._resetPromise();
      }

      add(data) {
        var ret;
        this._arr.push(data);
        ret = this._promise;
        if (this._arr.length === this.maxSize) {
          this._flush();
        } else if (this.maxTime != null && this._arr.length === 1) {
          this._timeout = setTimeout(() => {
            return this._flush();
          }, this.maxTime);
        }
        return ret;
      }

    };

    Batcher.prototype.defaults = {
      maxTime: null,
      maxSize: null,
      Promise: Promise
    };

    return Batcher;
  }.call(this);

  module.exports = Batcher;
}).call(undefined);
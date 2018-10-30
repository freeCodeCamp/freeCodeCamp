"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

(function () {
  var DLList,
      Sync,
      splice = [].splice;

  DLList = require("./DLList");

  Sync = class Sync {
    constructor(name, instance) {
      this.submit = this.submit.bind(this);
      this.name = name;
      this.instance = instance;
      this._running = 0;
      this._queue = new DLList();
    }

    isEmpty() {
      return this._queue.length === 0;
    }

    _tryToRun() {
      var next;
      if (this._running < 1 && this._queue.length > 0) {
        this._running++;
        next = this._queue.shift();
        return next.task.apply({}, next.args.concat((...args) => {
          var ref;
          this._running--;
          this._tryToRun();
          return (ref = next.cb) != null ? ref.apply({}, args) : void 0;
        }));
      }
    }

    submit(task, ...args) {
      var _ref, _ref2, _splice$call, _splice$call2;

      var cb, ref;
      ref = args, (_ref = ref, _ref2 = _toArray(_ref), args = _ref2.slice(0), _ref), (_splice$call = splice.call(args, -1), _splice$call2 = _slicedToArray(_splice$call, 1), cb = _splice$call2[0], _splice$call);
      this._queue.push({ task, args, cb });
      return this._tryToRun();
    }

    schedule(task, ...args) {
      var wrapped;
      wrapped = function wrapped(...args) {
        var _ref3, _ref4, _splice$call3, _splice$call4;

        var cb, ref;
        ref = args, (_ref3 = ref, _ref4 = _toArray(_ref3), args = _ref4.slice(0), _ref3), (_splice$call3 = splice.call(args, -1), _splice$call4 = _slicedToArray(_splice$call3, 1), cb = _splice$call4[0], _splice$call3);
        return task.apply({}, args).then(function (...args) {
          return cb.apply({}, Array.prototype.concat(null, args));
        }).catch(function (...args) {
          return cb.apply({}, args);
        });
      };
      return new this.instance.Promise((resolve, reject) => {
        return this.submit.apply({}, Array.prototype.concat(wrapped, args, function (...args) {
          return (args[0] != null ? reject : (args.shift(), resolve)).apply({}, args);
        }));
      });
    }

  };

  module.exports = Sync;
}).call(undefined);
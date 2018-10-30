"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var BottleneckError, LocalDatastore, parser;

  parser = require("./parser");

  BottleneckError = require("./BottleneckError");

  LocalDatastore = class LocalDatastore {
    constructor(instance, storeOptions, storeInstanceOptions) {
      var base;
      this.instance = instance;
      this.storeOptions = storeOptions;
      parser.load(storeInstanceOptions, storeInstanceOptions, this);
      this._nextRequest = this._lastReservoirRefresh = Date.now();
      this._running = 0;
      this._done = 0;
      this._unblockTime = 0;
      this.ready = this.yieldLoop();
      this.clients = {};
      if (typeof (base = this.heartbeat = setInterval(() => {
        var now, reservoirRefreshActive;
        now = Date.now();
        reservoirRefreshActive = this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null;
        if (reservoirRefreshActive && now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval) {
          this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;
          this._lastReservoirRefresh = now;
          return this.instance._drainAll(this.computeCapacity());
        }
      }, this.heartbeatInterval)).unref === "function") {
        base.unref();
      }
    }

    __publish__(message) {
      var _this = this;

      return _asyncToGenerator(function* () {
        yield _this.yieldLoop();
        return _this.instance.Events.trigger("message", [message.toString()]);
      })();
    }

    __disconnect__(flush) {
      clearInterval(this.heartbeat);
      return this.Promise.resolve();
    }

    yieldLoop(t = 0) {
      return new this.Promise(function (resolve, reject) {
        return setTimeout(resolve, t);
      });
    }

    computePenalty() {
      var ref;
      return (ref = this.storeOptions.penalty) != null ? ref : 15 * this.storeOptions.minTime || 5000;
    }

    __updateSettings__(options) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        yield _this2.yieldLoop();
        parser.overwrite(options, options, _this2.storeOptions);
        _this2.instance._drainAll(_this2.computeCapacity());
        return true;
      })();
    }

    __running__() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        yield _this3.yieldLoop();
        return _this3._running;
      })();
    }

    __done__() {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        yield _this4.yieldLoop();
        return _this4._done;
      })();
    }

    __groupCheck__(time) {
      var _this5 = this;

      return _asyncToGenerator(function* () {
        yield _this5.yieldLoop();
        return _this5._nextRequest + _this5.timeout < time;
      })();
    }

    computeCapacity() {
      var maxConcurrent, reservoir;
      var _storeOptions = this.storeOptions;
      maxConcurrent = _storeOptions.maxConcurrent;
      reservoir = _storeOptions.reservoir;

      if (maxConcurrent != null && reservoir != null) {
        return Math.min(maxConcurrent - this._running, reservoir);
      } else if (maxConcurrent != null) {
        return maxConcurrent - this._running;
      } else if (reservoir != null) {
        return reservoir;
      } else {
        return null;
      }
    }

    conditionsCheck(weight) {
      var capacity;
      capacity = this.computeCapacity();
      return capacity == null || weight <= capacity;
    }

    __incrementReservoir__(incr) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        var reservoir;
        yield _this6.yieldLoop();
        reservoir = _this6.storeOptions.reservoir += incr;
        _this6.instance._drainAll(_this6.computeCapacity());
        return reservoir;
      })();
    }

    __currentReservoir__() {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        yield _this7.yieldLoop();
        return _this7.storeOptions.reservoir;
      })();
    }

    isBlocked(now) {
      return this._unblockTime >= now;
    }

    check(weight, now) {
      return this.conditionsCheck(weight) && this._nextRequest - now <= 0;
    }

    __check__(weight) {
      var _this8 = this;

      return _asyncToGenerator(function* () {
        var now;
        yield _this8.yieldLoop();
        now = Date.now();
        return _this8.check(weight, now);
      })();
    }

    __register__(index, weight, expiration) {
      var _this9 = this;

      return _asyncToGenerator(function* () {
        var now, wait;
        yield _this9.yieldLoop();
        now = Date.now();
        if (_this9.conditionsCheck(weight)) {
          _this9._running += weight;
          if (_this9.storeOptions.reservoir != null) {
            _this9.storeOptions.reservoir -= weight;
          }
          wait = Math.max(_this9._nextRequest - now, 0);
          _this9._nextRequest = now + wait + _this9.storeOptions.minTime;
          return {
            success: true,
            wait,
            reservoir: _this9.storeOptions.reservoir
          };
        } else {
          return {
            success: false
          };
        }
      })();
    }

    strategyIsBlock() {
      return this.storeOptions.strategy === 3;
    }

    __submit__(queueLength, weight) {
      var _this10 = this;

      return _asyncToGenerator(function* () {
        var blocked, now, reachedHWM;
        yield _this10.yieldLoop();
        if (_this10.storeOptions.maxConcurrent != null && weight > _this10.storeOptions.maxConcurrent) {
          throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${_this10.storeOptions.maxConcurrent}`);
        }
        now = Date.now();
        reachedHWM = _this10.storeOptions.highWater != null && queueLength === _this10.storeOptions.highWater && !_this10.check(weight, now);
        blocked = _this10.strategyIsBlock() && (reachedHWM || _this10.isBlocked(now));
        if (blocked) {
          _this10._unblockTime = now + _this10.computePenalty();
          _this10._nextRequest = _this10._unblockTime + _this10.storeOptions.minTime;
          _this10.instance._dropAllQueued();
        }
        return {
          reachedHWM,
          blocked,
          strategy: _this10.storeOptions.strategy
        };
      })();
    }

    __free__(index, weight) {
      var _this11 = this;

      return _asyncToGenerator(function* () {
        yield _this11.yieldLoop();
        _this11._running -= weight;
        _this11._done += weight;
        _this11.instance._drainAll(_this11.computeCapacity());
        return {
          running: _this11._running
        };
      })();
    }

  };

  module.exports = LocalDatastore;
}).call(undefined);
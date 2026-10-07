import { __spreadArray, __read } from './_virtual/_tslib.js';

var SimulatedClock =
/*#__PURE__*/

/** @class */
function () {
  function SimulatedClock() {
    this.timeouts = new Map();
    this._now = 0;
    this._id = 0;
  }

  SimulatedClock.prototype.now = function () {
    return this._now;
  };

  SimulatedClock.prototype.getId = function () {
    return this._id++;
  };

  SimulatedClock.prototype.setTimeout = function (fn, timeout) {
    var id = this.getId();
    this.timeouts.set(id, {
      start: this.now(),
      timeout: timeout,
      fn: fn
    });
    return id;
  };

  SimulatedClock.prototype.clearTimeout = function (id) {
    this.timeouts.delete(id);
  };

  SimulatedClock.prototype.set = function (time) {
    if (this._now > time) {
      throw new Error('Unable to travel back in time');
    }

    this._now = time;
    this.flushTimeouts();
  };

  SimulatedClock.prototype.flushTimeouts = function () {
    var _this = this;

    __spreadArray([], __read(this.timeouts), false).sort(function (_a, _b) {
      var _c = __read(_a, 2);
          _c[0];
          var timeoutA = _c[1];

      var _d = __read(_b, 2);
          _d[0];
          var timeoutB = _d[1];

      var endA = timeoutA.start + timeoutA.timeout;
      var endB = timeoutB.start + timeoutB.timeout;
      return endB > endA ? -1 : 1;
    }).forEach(function (_a) {
      var _b = __read(_a, 2),
          id = _b[0],
          timeout = _b[1];

      if (_this.now() - timeout.start >= timeout.timeout) {
        _this.timeouts.delete(id);

        timeout.fn.call(null);
      }
    });
  };

  SimulatedClock.prototype.increment = function (ms) {
    this._now += ms;
    this.flushTimeouts();
  };

  return SimulatedClock;
}();

export { SimulatedClock };

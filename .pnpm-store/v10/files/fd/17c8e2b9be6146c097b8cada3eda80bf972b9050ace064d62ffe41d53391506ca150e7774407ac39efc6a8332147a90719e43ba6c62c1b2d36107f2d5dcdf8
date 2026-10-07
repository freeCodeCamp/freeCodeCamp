"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.globalClockScheduler = exports.clockTag = exports.MAX_TIMER_MILLIS = exports.ClockTypeId = void 0;
var Context = _interopRequireWildcard(require("../Context.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var _Function = require("../Function.js");
var core = _interopRequireWildcard(require("./core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ClockSymbolKey = "effect/Clock";
/** @internal */
const ClockTypeId = exports.ClockTypeId = /*#__PURE__*/Symbol.for(ClockSymbolKey);
/** @internal */
const clockTag = exports.clockTag = /*#__PURE__*/Context.GenericTag("effect/Clock");
/** @internal */
const MAX_TIMER_MILLIS = exports.MAX_TIMER_MILLIS = 2 ** 31 - 1;
/** @internal */
const globalClockScheduler = exports.globalClockScheduler = {
  unsafeSchedule(task, duration) {
    const millis = Duration.toMillis(duration);
    // If the duration is greater than the value allowable by the JS timer
    // functions, treat the value as an infinite duration
    if (millis > MAX_TIMER_MILLIS) {
      return _Function.constFalse;
    }
    let completed = false;
    const handle = setTimeout(() => {
      completed = true;
      task();
    }, millis);
    return () => {
      clearTimeout(handle);
      return !completed;
    };
  }
};
const performanceNowNanos = /*#__PURE__*/function () {
  const bigint1e6 = /*#__PURE__*/BigInt(1_000_000);
  if (typeof performance === "undefined" || typeof performance.now !== "function") {
    return () => BigInt(Date.now()) * bigint1e6;
  }
  let origin;
  return () => {
    if (origin === undefined) {
      origin = BigInt(Date.now()) * bigint1e6 - BigInt(Math.round(performance.now() * 1_000_000));
    }
    return origin + BigInt(Math.round(performance.now() * 1000000));
  };
}();
const processOrPerformanceNow = /*#__PURE__*/function () {
  const processHrtime = typeof process === "object" && "hrtime" in process && typeof process.hrtime.bigint === "function" ? process.hrtime : undefined;
  if (!processHrtime) {
    return performanceNowNanos;
  }
  const origin = /*#__PURE__*/performanceNowNanos() - /*#__PURE__*/processHrtime.bigint();
  return () => origin + processHrtime.bigint();
}();
/** @internal */
class ClockImpl {
  [ClockTypeId] = ClockTypeId;
  unsafeCurrentTimeMillis() {
    return Date.now();
  }
  unsafeCurrentTimeNanos() {
    return processOrPerformanceNow();
  }
  currentTimeMillis = /*#__PURE__*/core.sync(() => this.unsafeCurrentTimeMillis());
  currentTimeNanos = /*#__PURE__*/core.sync(() => this.unsafeCurrentTimeNanos());
  scheduler() {
    return core.succeed(globalClockScheduler);
  }
  sleep(duration) {
    return core.async(resume => {
      const canceler = globalClockScheduler.unsafeSchedule(() => resume(core.void), duration);
      return core.asVoid(core.sync(canceler));
    });
  }
}
/** @internal */
const make = () => new ClockImpl();
exports.make = make;
//# sourceMappingURL=clock.js.map
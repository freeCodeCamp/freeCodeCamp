"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yieldNow = exports.stateful = exports.resume = exports.interruptSignal = exports.OP_YIELD_NOW = exports.OP_STATEFUL = exports.OP_RESUME = exports.OP_INTERRUPT_SIGNAL = void 0;
/** @internal */
const OP_INTERRUPT_SIGNAL = exports.OP_INTERRUPT_SIGNAL = "InterruptSignal";
/** @internal */
const OP_STATEFUL = exports.OP_STATEFUL = "Stateful";
/** @internal */
const OP_RESUME = exports.OP_RESUME = "Resume";
/** @internal */
const OP_YIELD_NOW = exports.OP_YIELD_NOW = "YieldNow";
/** @internal */
const interruptSignal = cause => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause
});
/** @internal */
exports.interruptSignal = interruptSignal;
const stateful = onFiber => ({
  _tag: OP_STATEFUL,
  onFiber
});
/** @internal */
exports.stateful = stateful;
const resume = effect => ({
  _tag: OP_RESUME,
  effect
});
/** @internal */
exports.resume = resume;
const yieldNow = () => ({
  _tag: OP_YIELD_NOW
});
exports.yieldNow = yieldNow;
//# sourceMappingURL=fiberMessage.js.map
/** @internal */
export const OP_INTERRUPT_SIGNAL = "InterruptSignal";
/** @internal */
export const OP_STATEFUL = "Stateful";
/** @internal */
export const OP_RESUME = "Resume";
/** @internal */
export const OP_YIELD_NOW = "YieldNow";
/** @internal */
export const interruptSignal = cause => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause
});
/** @internal */
export const stateful = onFiber => ({
  _tag: OP_STATEFUL,
  onFiber
});
/** @internal */
export const resume = effect => ({
  _tag: OP_RESUME,
  effect
});
/** @internal */
export const yieldNow = () => ({
  _tag: OP_YIELD_NOW
});
//# sourceMappingURL=fiberMessage.js.map
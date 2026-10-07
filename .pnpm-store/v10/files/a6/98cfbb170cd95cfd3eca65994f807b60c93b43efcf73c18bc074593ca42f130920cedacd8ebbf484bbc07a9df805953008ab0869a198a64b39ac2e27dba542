/** @internal */
export const OP_SUSPENDED_WARNING_DATA_START = "Start";
/** @internal */
export const OP_SUSPENDED_WARNING_DATA_PENDING = "Pending";
/** @internal */
export const OP_SUSPENDED_WARNING_DATA_DONE = "Done";
/**
 * State indicating that a test has not adjusted the clock.
 *
 * @internal
 */
export const start = {
  _tag: OP_SUSPENDED_WARNING_DATA_START
};
/**
 * State indicating that a test has adjusted the clock but a fiber is still
 * running with a reference to the fiber that will display the warning
 * message.
 *
 * @internal
 */
export const pending = fiber => {
  return {
    _tag: OP_SUSPENDED_WARNING_DATA_PENDING,
    fiber
  };
};
/**
 * State indicating that the warning message has already been displayed.
 *
 * @internal
 */
export const done = {
  _tag: OP_SUSPENDED_WARNING_DATA_DONE
};
/** @internal */
export const isStart = self => {
  return self._tag === OP_SUSPENDED_WARNING_DATA_START;
};
/** @internal */
export const isPending = self => {
  return self._tag === OP_SUSPENDED_WARNING_DATA_PENDING;
};
/** @internal */
export const isDone = self => {
  return self._tag === OP_SUSPENDED_WARNING_DATA_DONE;
};
//# sourceMappingURL=suspendedWarningData.js.map
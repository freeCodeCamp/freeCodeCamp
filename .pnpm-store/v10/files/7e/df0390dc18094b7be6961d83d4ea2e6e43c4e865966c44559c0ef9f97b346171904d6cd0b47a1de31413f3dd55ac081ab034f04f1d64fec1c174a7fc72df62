/** @internal */
export const OP_WARNING_DATA_START = "Start";
/** @internal */
export const OP_WARNING_DATA_PENDING = "Pending";
/** @internal */
export const OP_WARNING_DATA_DONE = "Done";
/**
 * State indicating that a test has not used time.
 *
 * @internal
 */
export const start = {
  _tag: OP_WARNING_DATA_START
};
/**
 * State indicating that a test has used time but has not adjusted the
 * `TestClock` with a reference to the fiber that will display the warning
 * message.
 *
 * @internal
 */
export const pending = fiber => {
  return {
    _tag: OP_WARNING_DATA_PENDING,
    fiber
  };
};
/**
 * State indicating that a test has used time or the warning message has
 * already been displayed.
 *
 * @internal
 */
export const done = {
  _tag: OP_WARNING_DATA_DONE
};
/** @internal */
export const isStart = self => {
  return self._tag === OP_WARNING_DATA_START;
};
/** @internal */
export const isPending = self => {
  return self._tag === OP_WARNING_DATA_PENDING;
};
/** @internal */
export const isDone = self => {
  return self._tag === OP_WARNING_DATA_DONE;
};
//# sourceMappingURL=warningData.js.map
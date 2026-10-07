"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.pending = exports.isStart = exports.isPending = exports.isDone = exports.done = exports.OP_WARNING_DATA_START = exports.OP_WARNING_DATA_PENDING = exports.OP_WARNING_DATA_DONE = void 0;
/** @internal */
const OP_WARNING_DATA_START = exports.OP_WARNING_DATA_START = "Start";
/** @internal */
const OP_WARNING_DATA_PENDING = exports.OP_WARNING_DATA_PENDING = "Pending";
/** @internal */
const OP_WARNING_DATA_DONE = exports.OP_WARNING_DATA_DONE = "Done";
/**
 * State indicating that a test has not used time.
 *
 * @internal
 */
const start = exports.start = {
  _tag: OP_WARNING_DATA_START
};
/**
 * State indicating that a test has used time but has not adjusted the
 * `TestClock` with a reference to the fiber that will display the warning
 * message.
 *
 * @internal
 */
const pending = fiber => {
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
exports.pending = pending;
const done = exports.done = {
  _tag: OP_WARNING_DATA_DONE
};
/** @internal */
const isStart = self => {
  return self._tag === OP_WARNING_DATA_START;
};
/** @internal */
exports.isStart = isStart;
const isPending = self => {
  return self._tag === OP_WARNING_DATA_PENDING;
};
/** @internal */
exports.isPending = isPending;
const isDone = self => {
  return self._tag === OP_WARNING_DATA_DONE;
};
exports.isDone = isDone;
//# sourceMappingURL=warningData.js.map
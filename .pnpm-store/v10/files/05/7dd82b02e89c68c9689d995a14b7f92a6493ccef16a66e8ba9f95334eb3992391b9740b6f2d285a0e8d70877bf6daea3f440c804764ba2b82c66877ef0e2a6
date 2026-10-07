import * as Chunk from "../../Chunk.js";
import * as Intervals from "../../ScheduleIntervals.js";
/** @internal */
export const OP_CONTINUE = "Continue";
/** @internal */
export const OP_DONE = "Done";
/** @internal */
export const _continue = intervals => {
  return {
    _tag: OP_CONTINUE,
    intervals
  };
};
/** @internal */
export const continueWith = interval => {
  return {
    _tag: OP_CONTINUE,
    intervals: Intervals.make(Chunk.of(interval))
  };
};
/** @internal */
export const done = {
  _tag: OP_DONE
};
/** @internal */
export const isContinue = self => {
  return self._tag === OP_CONTINUE;
};
/** @internal */
export const isDone = self => {
  return self._tag === OP_DONE;
};
//# sourceMappingURL=decision.js.map
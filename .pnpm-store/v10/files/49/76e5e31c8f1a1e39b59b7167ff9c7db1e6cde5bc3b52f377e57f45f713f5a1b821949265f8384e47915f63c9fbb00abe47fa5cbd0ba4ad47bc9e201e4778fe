import * as Chunk from "../../Chunk.js"
import type * as ScheduleDecision from "../../ScheduleDecision.js"
import type * as Interval from "../../ScheduleInterval.js"
import * as Intervals from "../../ScheduleIntervals.js"

/** @internal */
export const OP_CONTINUE = "Continue" as const

/** @internal */
export type OP_CONTINUE = typeof OP_CONTINUE

/** @internal */
export const OP_DONE = "Done" as const

/** @internal */
export type OP_DONE = typeof OP_DONE

/** @internal */
export const _continue = (intervals: Intervals.Intervals): ScheduleDecision.ScheduleDecision => {
  return {
    _tag: OP_CONTINUE,
    intervals
  }
}

/** @internal */
export const continueWith = (interval: Interval.Interval): ScheduleDecision.ScheduleDecision => {
  return {
    _tag: OP_CONTINUE,
    intervals: Intervals.make(Chunk.of(interval))
  }
}

/** @internal */
export const done: ScheduleDecision.ScheduleDecision = {
  _tag: OP_DONE
}

/** @internal */
export const isContinue = (self: ScheduleDecision.ScheduleDecision): self is ScheduleDecision.Continue => {
  return self._tag === OP_CONTINUE
}

/** @internal */
export const isDone = (self: ScheduleDecision.ScheduleDecision): self is ScheduleDecision.Done => {
  return self._tag === OP_DONE
}

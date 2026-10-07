import type * as Fiber from "../../Fiber.js"

/**
 * `WarningData` describes the state of the warning message that is displayed
 * if a test is using time by is not advancing the `TestClock`. The possible
 * states are `Start` if a test has not used time, `Pending` if a test has
 * used time but has not adjusted the `TestClock`, and `Done` if a test has
 * adjusted the `TestClock` or the warning message has already been displayed.
 *
 * @internal
 */
export type WarningData = Start | Pending | Done

/** @internal */
export const OP_WARNING_DATA_START = "Start" as const

/** @internal */
export type OP_WARNING_DATA_START = typeof OP_WARNING_DATA_START

/** @internal */
export const OP_WARNING_DATA_PENDING = "Pending" as const

/** @internal */
export type OP_WARNING_DATA_PENDING = typeof OP_WARNING_DATA_PENDING

/** @internal */
export const OP_WARNING_DATA_DONE = "Done" as const

/** @internal */
export type OP_WARNING_DATA_DONE = typeof OP_WARNING_DATA_DONE

/** @internal */
export interface Start {
  readonly _tag: OP_WARNING_DATA_START
}

/** @internal */
export interface Pending {
  readonly _tag: OP_WARNING_DATA_PENDING
  readonly fiber: Fiber.Fiber<void, Error>
}

/** @internal */
export interface Done {
  readonly _tag: OP_WARNING_DATA_DONE
}

/**
 * State indicating that a test has not used time.
 *
 * @internal
 */
export const start: WarningData = {
  _tag: OP_WARNING_DATA_START
}

/**
 * State indicating that a test has used time but has not adjusted the
 * `TestClock` with a reference to the fiber that will display the warning
 * message.
 *
 * @internal
 */
export const pending = (fiber: Fiber.Fiber<void, Error>): WarningData => {
  return {
    _tag: OP_WARNING_DATA_PENDING,
    fiber
  }
}

/**
 * State indicating that a test has used time or the warning message has
 * already been displayed.
 *
 * @internal
 */
export const done: WarningData = {
  _tag: OP_WARNING_DATA_DONE
}

/** @internal */
export const isStart = (self: WarningData): self is Start => {
  return self._tag === OP_WARNING_DATA_START
}

/** @internal */
export const isPending = (self: WarningData): self is Pending => {
  return self._tag === OP_WARNING_DATA_PENDING
}

/** @internal */
export const isDone = (self: WarningData): self is Done => {
  return self._tag === OP_WARNING_DATA_DONE
}

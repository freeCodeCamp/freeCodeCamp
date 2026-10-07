import type * as Fiber from "../../Fiber.js"

/** @internal */
export type SuspendedWarningData = Start | Pending | Done

/** @internal */
export const OP_SUSPENDED_WARNING_DATA_START = "Start" as const

/** @internal */
export type OP_SUSPENDED_WARNING_DATA_START = typeof OP_SUSPENDED_WARNING_DATA_START

/** @internal */
export const OP_SUSPENDED_WARNING_DATA_PENDING = "Pending" as const

/** @internal */
export type OP_SUSPENDED_WARNING_DATA_PENDING = typeof OP_SUSPENDED_WARNING_DATA_PENDING

/** @internal */
export const OP_SUSPENDED_WARNING_DATA_DONE = "Done" as const

/** @internal */
export type OP_SUSPENDED_WARNING_DATA_DONE = typeof OP_SUSPENDED_WARNING_DATA_DONE

/** @internal */
export interface Start {
  readonly _tag: OP_SUSPENDED_WARNING_DATA_START
}

/** @internal */
export interface Pending {
  readonly _tag: OP_SUSPENDED_WARNING_DATA_PENDING
  readonly fiber: Fiber.Fiber<void, Error>
}

/** @internal */
export interface Done {
  readonly _tag: OP_SUSPENDED_WARNING_DATA_DONE
}

/**
 * State indicating that a test has not adjusted the clock.
 *
 * @internal
 */
export const start: SuspendedWarningData = {
  _tag: OP_SUSPENDED_WARNING_DATA_START
}

/**
 * State indicating that a test has adjusted the clock but a fiber is still
 * running with a reference to the fiber that will display the warning
 * message.
 *
 * @internal
 */
export const pending = (fiber: Fiber.Fiber<void, Error>): SuspendedWarningData => {
  return {
    _tag: OP_SUSPENDED_WARNING_DATA_PENDING,
    fiber
  }
}

/**
 * State indicating that the warning message has already been displayed.
 *
 * @internal
 */
export const done: SuspendedWarningData = {
  _tag: OP_SUSPENDED_WARNING_DATA_DONE
}

/** @internal */
export const isStart = (self: SuspendedWarningData): self is Start => {
  return self._tag === OP_SUSPENDED_WARNING_DATA_START
}

/** @internal */
export const isPending = (self: SuspendedWarningData): self is Pending => {
  return self._tag === OP_SUSPENDED_WARNING_DATA_PENDING
}

/** @internal */
export const isDone = (self: SuspendedWarningData): self is Done => {
  return self._tag === OP_SUSPENDED_WARNING_DATA_DONE
}

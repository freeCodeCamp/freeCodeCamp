import type * as Cause from "../Cause.js"
import type * as Effect from "../Effect.js"
import type * as FiberStatus from "../FiberStatus.js"
import type * as FiberRuntime from "./fiberRuntime.js"

/** @internal */
export type FiberMessage = InterruptSignal | Stateful | Resume | YieldNow

/** @internal */
export const OP_INTERRUPT_SIGNAL = "InterruptSignal" as const

/** @internal */
export type OP_INTERRUPT_SIGNAL = typeof OP_INTERRUPT_SIGNAL

/** @internal */
export const OP_STATEFUL = "Stateful" as const

/** @internal */
export type OP_STATEFUL = typeof OP_STATEFUL

/** @internal */
export const OP_RESUME = "Resume" as const

/** @internal */
export type OP_RESUME = typeof OP_RESUME

/** @internal */
export const OP_YIELD_NOW = "YieldNow" as const

/** @internal */
export type OP_YIELD_NOW = typeof OP_YIELD_NOW

/** @internal */
export interface InterruptSignal {
  readonly _tag: OP_INTERRUPT_SIGNAL
  readonly cause: Cause.Cause<never>
}

/** @internal */
export interface Stateful {
  readonly _tag: OP_STATEFUL
  onFiber(fiber: FiberRuntime.FiberRuntime<any, any>, status: FiberStatus.FiberStatus): void
}

/** @internal */
export interface Resume {
  readonly _tag: OP_RESUME
  readonly effect: Effect.Effect<any, any, any>
}

/** @internal */
export interface YieldNow {
  readonly _tag: OP_YIELD_NOW
}

/** @internal */
export const interruptSignal = (cause: Cause.Cause<never>): FiberMessage => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause
})

/** @internal */
export const stateful = (
  onFiber: (
    fiber: FiberRuntime.FiberRuntime<any, any>,
    status: FiberStatus.FiberStatus
  ) => void
): FiberMessage => ({
  _tag: OP_STATEFUL,
  onFiber
})

/** @internal */
export const resume = (effect: Effect.Effect<any, any, any>): FiberMessage => ({
  _tag: OP_RESUME,
  effect
})

/** @internal */
export const yieldNow = (): FiberMessage => ({
  _tag: OP_YIELD_NOW
})

import type * as Chunk from "../../Chunk.js"
import type * as Fiber from "../../Fiber.js"
import type * as HandoffSignal from "./handoffSignal.js"

/** @internal */
export type DebounceState<A, E = never> = NotStarted | Previous<A> | Current<A, E>

/** @internal */
export const OP_NOT_STARTED = "NotStarted" as const

/** @internal */
export type OP_NOT_STARTED = typeof OP_NOT_STARTED

/** @internal */
export const OP_PREVIOUS = "Previous" as const

/** @internal */
export type OP_PREVIOUS = typeof OP_PREVIOUS

/** @internal */
export const OP_CURRENT = "Current" as const

/** @internal */
export type OP_CURRENT = typeof OP_CURRENT

export interface NotStarted {
  readonly _tag: OP_NOT_STARTED
}

/** @internal */
export interface Previous<out A> {
  readonly _tag: OP_PREVIOUS
  readonly fiber: Fiber.Fiber<Chunk.Chunk<A>>
}

/** @internal */
export interface Current<out A, out E = never> {
  readonly _tag: OP_CURRENT
  readonly fiber: Fiber.Fiber<HandoffSignal.HandoffSignal<A, E>, E>
}

/** @internal */
export const notStarted: DebounceState<never> = {
  _tag: OP_NOT_STARTED
}

/** @internal */
export const previous = <A>(fiber: Fiber.Fiber<Chunk.Chunk<A>>): DebounceState<A> => ({
  _tag: OP_PREVIOUS,
  fiber
})

/** @internal */
export const current = <A, E>(fiber: Fiber.Fiber<HandoffSignal.HandoffSignal<A, E>, E>): DebounceState<A, E> => ({
  _tag: OP_CURRENT,
  fiber
})

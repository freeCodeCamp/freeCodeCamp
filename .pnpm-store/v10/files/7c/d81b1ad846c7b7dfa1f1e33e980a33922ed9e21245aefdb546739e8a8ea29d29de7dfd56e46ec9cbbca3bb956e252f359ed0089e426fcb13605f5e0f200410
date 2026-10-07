import type * as Cause from "../../Cause.js"
import type * as Chunk from "../../Chunk.js"
import type * as SinkEndReason from "./sinkEndReason.js"

/** @internal */
export type HandoffSignal<A, E = never> = Emit<A> | Halt<E> | End

/** @internal */
export const OP_EMIT = "Emit" as const

/** @internal */
export type OP_EMIT = typeof OP_EMIT

/** @internal */
export const OP_HALT = "Halt" as const

/** @internal */
export type OP_HALT = typeof OP_HALT

/** @internal */
export const OP_END = "End" as const

/** @internal */
export type OP_END = typeof OP_END

export interface Emit<out A> {
  readonly _tag: OP_EMIT
  readonly elements: Chunk.Chunk<A>
}

/** @internal */
export interface Halt<out E> {
  readonly _tag: OP_HALT
  readonly cause: Cause.Cause<E>
}

/** @internal */
export interface End {
  readonly _tag: OP_END
  readonly reason: SinkEndReason.SinkEndReason
}

/** @internal */
export const emit = <A>(elements: Chunk.Chunk<A>): HandoffSignal<A> => ({
  _tag: OP_EMIT,
  elements
})

/** @internal */
export const halt = <E>(cause: Cause.Cause<E>): HandoffSignal<never, E> => ({
  _tag: OP_HALT,
  cause
})

/** @internal */
export const end = (reason: SinkEndReason.SinkEndReason): HandoffSignal<never> => ({
  _tag: OP_END,
  reason
})

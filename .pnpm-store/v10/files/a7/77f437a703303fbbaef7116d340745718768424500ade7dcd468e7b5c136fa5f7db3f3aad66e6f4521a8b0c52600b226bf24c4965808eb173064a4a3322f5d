import type * as Chunk from "../../Chunk.js"

/** @internal */
export type ZipAllState<A, A2> = DrainLeft | DrainRight | PullBoth | PullLeft<A2> | PullRight<A>

/** @internal */
export const OP_DRAIN_LEFT = "DrainLeft" as const

/** @internal */
export type OP_DRAIN_LEFT = typeof OP_DRAIN_LEFT

/** @internal */
export const OP_DRAIN_RIGHT = "DrainRight" as const

/** @internal */
export type OP_DRAIN_RIGHT = typeof OP_DRAIN_RIGHT

/** @internal */
export const OP_PULL_BOTH = "PullBoth" as const

/** @internal */
export type OP_PULL_BOTH = typeof OP_PULL_BOTH

/** @internal */
export const OP_PULL_LEFT = "PullLeft" as const

/** @internal */
export type OP_PULL_LEFT = typeof OP_PULL_LEFT

/** @internal */
export const OP_PULL_RIGHT = "PullRight" as const

/** @internal */
export type OP_PULL_RIGHT = typeof OP_PULL_RIGHT

/** @internal */
export interface DrainLeft {
  readonly _tag: OP_DRAIN_LEFT
}

/** @internal */
export interface DrainRight {
  readonly _tag: OP_DRAIN_RIGHT
}

/** @internal */
export interface PullBoth {
  readonly _tag: OP_PULL_BOTH
}

/** @internal */
export interface PullLeft<A> {
  readonly _tag: OP_PULL_LEFT
  readonly rightChunk: Chunk.Chunk<A>
}

/** @internal */
export interface PullRight<A> {
  readonly _tag: OP_PULL_RIGHT
  readonly leftChunk: Chunk.Chunk<A>
}

/** @internal */
export const DrainLeft: ZipAllState<never, never> = {
  _tag: OP_DRAIN_LEFT
}

/** @internal */
export const DrainRight: ZipAllState<never, never> = {
  _tag: OP_DRAIN_RIGHT
}

/** @internal */
export const PullBoth: ZipAllState<never, never> = {
  _tag: OP_PULL_BOTH
}

/** @internal */
export const PullLeft = <A>(rightChunk: Chunk.Chunk<A>): ZipAllState<never, A> => ({
  _tag: OP_PULL_LEFT,
  rightChunk
})

/** @internal */
export const PullRight = <A>(leftChunk: Chunk.Chunk<A>): ZipAllState<A, never> => ({
  _tag: OP_PULL_RIGHT,
  leftChunk
})

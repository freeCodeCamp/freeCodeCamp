import * as Effect from "../../Effect.js"
import type * as Exit from "../../Exit.js"
import { hasProperty } from "../../Predicate.js"
import type * as Types from "../../Types.js"
import * as OpCodes from "../opCodes/channelState.js"
import type { ErasedExecutor } from "./channelExecutor.js"

/** @internal */
export const ChannelStateTypeId = Symbol.for("effect/ChannelState")

/** @internal */
export type ChannelStateTypeId = typeof ChannelStateTypeId

/** @internal */
export interface ChannelState<out E, out R> extends ChannelState.Variance<E, R> {}

/** @internal */
export declare namespace ChannelState {
  export interface Variance<out E, out R> {
    readonly [ChannelStateTypeId]: {
      readonly _E: Types.Covariant<E>
      readonly _R: Types.Covariant<R>
    }
  }
}

const channelStateVariance = {
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _R: (_: never) => _
}

/** @internal */
const proto = {
  [ChannelStateTypeId]: channelStateVariance
}

/** @internal */
export type Primitive =
  | Done
  | Emit
  | FromEffect
  | Read

/** @internal */
export type Op<Tag extends string, Body = {}> = ChannelState<never, never> & Body & {
  readonly _tag: Tag
}

/** @internal */
export interface Done extends Op<OpCodes.OP_DONE, {}> {}

/** @internal */
export interface Emit extends Op<OpCodes.OP_EMIT, {}> {}

/** @internal */
export interface FromEffect extends
  Op<OpCodes.OP_FROM_EFFECT, {
    readonly effect: Effect.Effect<unknown, unknown, unknown>
  }>
{}

/** @internal */
export interface Read extends
  Op<OpCodes.OP_READ, {
    readonly upstream: ErasedExecutor<unknown>
    onEffect(effect: Effect.Effect<void, never, unknown>): Effect.Effect<void, never, unknown>
    onEmit(value: unknown): Effect.Effect<void, never, unknown>
    onDone(exit: Exit.Exit<unknown, unknown>): Effect.Effect<void, never, unknown>
  }>
{}

/** @internal */
export const Done = (): ChannelState<never, never> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_DONE
  return op
}

/** @internal */
export const Emit = (): ChannelState<never, never> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_EMIT
  return op
}

/** @internal */
export const fromEffect = <X, E, R>(effect: Effect.Effect<X, E, R>): ChannelState<E, R> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_FROM_EFFECT
  op.effect = effect
  return op
}

/** @internal */
export const Read = <R>(
  upstream: ErasedExecutor<R>,
  onEffect: (effect: Effect.Effect<void, never, R>) => Effect.Effect<void, never, R>,
  onEmit: (value: unknown) => Effect.Effect<void, never, R> | undefined,
  onDone: (exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void, never, R> | undefined
): ChannelState<never, R> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_READ
  op.upstream = upstream
  op.onEffect = onEffect
  op.onEmit = onEmit
  op.onDone = onDone
  return op
}

/** @internal */
export const isChannelState = (u: unknown): u is ChannelState<unknown, unknown> => hasProperty(u, ChannelStateTypeId)

/** @internal */
export const isDone = <E, R>(self: ChannelState<E, R>): self is Done => (self as Primitive)._tag === OpCodes.OP_DONE

/** @internal */
export const isEmit = <E, R>(self: ChannelState<E, R>): self is Emit => (self as Primitive)._tag === OpCodes.OP_EMIT

/** @internal */
export const isFromEffect = <E, R>(self: ChannelState<E, R>): self is FromEffect =>
  (self as Primitive)._tag === OpCodes.OP_FROM_EFFECT

/** @internal */
export const isRead = <E, R>(self: ChannelState<E, R>): self is Read => (self as Primitive)._tag === OpCodes.OP_READ

/** @internal */
export const effect = <E, R>(self: ChannelState<E, R>): Effect.Effect<void, E, R> =>
  isFromEffect(self) ? self.effect as Effect.Effect<void, E, R> : Effect.void

/** @internal */
export const effectOrUndefinedIgnored = <E, R>(self: ChannelState<E, R>): Effect.Effect<void, E, R> | undefined =>
  isFromEffect(self) ? Effect.ignore(self.effect as Effect.Effect<void, E, R>) : undefined

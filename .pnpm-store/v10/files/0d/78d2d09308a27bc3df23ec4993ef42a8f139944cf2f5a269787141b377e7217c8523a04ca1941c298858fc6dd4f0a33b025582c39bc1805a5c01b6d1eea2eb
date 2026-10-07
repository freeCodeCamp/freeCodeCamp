/**
 * @since 2.0.0
 */
import type * as Channel from "./Channel.js"
import type * as Effect from "./Effect.js"
import * as internal from "./internal/effectable.js"
import type * as Sink from "./Sink.js"
import type * as Stream from "./Stream.js"

/**
 * @since 2.0.0
 * @category type ids
 */
export const EffectTypeId: Effect.EffectTypeId = internal.EffectTypeId

/**
 * @since 2.0.0
 * @category type ids
 */
export type EffectTypeId = Effect.EffectTypeId

/**
 * @since 2.0.0
 * @category type ids
 */
export const StreamTypeId: Stream.StreamTypeId = internal.StreamTypeId

/**
 * @since 2.0.0
 * @category type ids
 */
export type StreamTypeId = Stream.StreamTypeId

/**
 * @since 2.0.0
 * @category type ids
 */
export const SinkTypeId: Sink.SinkTypeId = internal.SinkTypeId

/**
 * @since 2.0.0
 * @category type ids
 */
export type SinkTypeId = Sink.SinkTypeId

/**
 * @since 2.0.0
 * @category type ids
 */
export const ChannelTypeId: Channel.ChannelTypeId = internal.ChannelTypeId

/**
 * @since 2.0.0
 * @category type ids
 */
export type ChannelTypeId = Channel.ChannelTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface CommitPrimitive {
  new<A, E = never, R = never>(): Effect.Effect<A, E, R>
}

/**
 * @since 2.0.0
 * @category prototypes
 */
export const EffectPrototype: Effect.Effect<never> = internal.EffectPrototype

/**
 * @since 2.0.0
 * @category prototypes
 */
export const CommitPrototype: Effect.Effect<never> = internal.CommitPrototype

/**
 * @since 2.0.0
 * @category prototypes
 */
export const StructuralCommitPrototype: Effect.Effect<never> = internal.StructuralCommitPrototype

const Base: CommitPrimitive = internal.Base
const StructuralBase: CommitPrimitive = internal.StructuralBase

/**
 * @since 2.0.0
 * @category constructors
 */
export abstract class Class<A, E = never, R = never> extends Base<A, E, R> {
  /**
   * @since 2.0.0
   */
  abstract commit(): Effect.Effect<A, E, R>
}

/**
 * @since 2.0.0
 * @category constructors
 */
export abstract class StructuralClass<A, E = never, R = never> extends StructuralBase<A, E, R> {
  /**
   * @since 2.0.0
   */
  abstract commit(): Effect.Effect<A, E, R>
}

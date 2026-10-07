/**
 * @since 2.0.0
 */
import type * as Channel from "./Channel.js";
import type * as Effect from "./Effect.js";
import type * as Sink from "./Sink.js";
import type * as Stream from "./Stream.js";
/**
 * @since 2.0.0
 * @category type ids
 */
export declare const EffectTypeId: Effect.EffectTypeId;
/**
 * @since 2.0.0
 * @category type ids
 */
export type EffectTypeId = Effect.EffectTypeId;
/**
 * @since 2.0.0
 * @category type ids
 */
export declare const StreamTypeId: Stream.StreamTypeId;
/**
 * @since 2.0.0
 * @category type ids
 */
export type StreamTypeId = Stream.StreamTypeId;
/**
 * @since 2.0.0
 * @category type ids
 */
export declare const SinkTypeId: Sink.SinkTypeId;
/**
 * @since 2.0.0
 * @category type ids
 */
export type SinkTypeId = Sink.SinkTypeId;
/**
 * @since 2.0.0
 * @category type ids
 */
export declare const ChannelTypeId: Channel.ChannelTypeId;
/**
 * @since 2.0.0
 * @category type ids
 */
export type ChannelTypeId = Channel.ChannelTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface CommitPrimitive {
    new <A, E = never, R = never>(): Effect.Effect<A, E, R>;
}
/**
 * @since 2.0.0
 * @category prototypes
 */
export declare const EffectPrototype: Effect.Effect<never>;
/**
 * @since 2.0.0
 * @category prototypes
 */
export declare const CommitPrototype: Effect.Effect<never>;
/**
 * @since 2.0.0
 * @category prototypes
 */
export declare const StructuralCommitPrototype: Effect.Effect<never>;
declare const Base: CommitPrimitive;
declare const StructuralBase: CommitPrimitive;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare abstract class Class<A, E = never, R = never> extends Base<A, E, R> {
    /**
     * @since 2.0.0
     */
    abstract commit(): Effect.Effect<A, E, R>;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare abstract class StructuralClass<A, E = never, R = never> extends StructuralBase<A, E, R> {
    /**
     * @since 2.0.0
     */
    abstract commit(): Effect.Effect<A, E, R>;
}
export {};
//# sourceMappingURL=Effectable.d.ts.map
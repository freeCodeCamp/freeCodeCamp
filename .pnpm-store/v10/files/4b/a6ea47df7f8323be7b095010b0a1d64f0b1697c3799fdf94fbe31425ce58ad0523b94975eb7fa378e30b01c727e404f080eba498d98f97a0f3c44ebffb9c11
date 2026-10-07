/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js"
import type * as ChildExecutorDecision from "./ChildExecutorDecision.js"
import type * as Chunk from "./Chunk.js"
import type * as Context from "./Context.js"
import type * as Deferred from "./Deferred.js"
import type * as Effect from "./Effect.js"
import type * as Either from "./Either.js"
import type * as Exit from "./Exit.js"
import type { LazyArg } from "./Function.js"
import * as channel from "./internal/channel.js"
import * as core from "./internal/core-stream.js"
import * as sink from "./internal/sink.js"
import * as stream from "./internal/stream.js"
import type * as Layer from "./Layer.js"
import type * as MergeDecision from "./MergeDecision.js"
import type * as MergeStrategy from "./MergeStrategy.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type { Predicate } from "./Predicate.js"
import type * as PubSub from "./PubSub.js"
import type * as Queue from "./Queue.js"
import type * as Ref from "./Ref.js"
import type * as Scope from "./Scope.js"
import type * as SingleProducerAsyncInput from "./SingleProducerAsyncInput.js"
import type * as Sink from "./Sink.js"
import type * as Stream from "./Stream.js"
import type * as Tracer from "./Tracer.js"
import type * as Types from "./Types.js"
import type * as Unify from "./Unify.js"
import type * as UpstreamPullRequest from "./UpstreamPullRequest.js"
import type * as UpstreamPullStrategy from "./UpstreamPullStrategy.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const ChannelTypeId: unique symbol = core.ChannelTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type ChannelTypeId = typeof ChannelTypeId

/**
 * A `Channel` is a nexus of I/O operations, which supports both reading and
 * writing. A channel may read values of type `InElem` and write values of type
 * `OutElem`. When the channel finishes, it yields a value of type `OutDone`. A
 * channel may fail with a value of type `OutErr`.
 *
 * Channels are the foundation of Streams: both streams and sinks are built on
 * channels. Most users shouldn't have to use channels directly, as streams and
 * sinks are much more convenient and cover all common use cases. However, when
 * adding new stream and sink operators, or doing something highly specialized,
 * it may be useful to use channels directly.
 *
 * Channels compose in a variety of ways:
 *
 *  - **Piping**: One channel can be piped to another channel, assuming the
 *    input type of the second is the same as the output type of the first.
 *  - **Sequencing**: The terminal value of one channel can be used to create
 *    another channel, and both the first channel and the function that makes
 *    the second channel can be composed into a channel.
 *  - **Concatenating**: The output of one channel can be used to create other
 *    channels, which are all concatenated together. The first channel and the
 *    function that makes the other channels can be composed into a channel.
 *
 * @since 2.0.0
 * @category models
 */
// export interface Channel<out Env, in InErr, in InElem, in InDone, out OutErr, out OutElem, out OutDone>
export interface Channel<
  out OutElem,
  in InElem = unknown,
  out OutErr = never,
  in InErr = unknown,
  out OutDone = void,
  in InDone = unknown,
  out Env = never
> extends
  Channel.Variance<
    OutElem,
    InElem,
    OutErr,
    InErr,
    OutDone,
    InDone,
    Env
  >,
  Pipeable
{
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: ChannelUnify<this>
  [Unify.ignoreSymbol]?: ChannelUnifyIgnore
}

/**
 * @since 2.0.0
 * @category models
 */
export interface ChannelUnify<A extends { [Unify.typeSymbol]?: any }> extends Effect.EffectUnify<A> {
  Channel?: () => A[Unify.typeSymbol] extends
    | Channel<
      infer OutElem,
      infer InElem,
      infer OutErr,
      infer InErr,
      infer OutDone,
      infer InDone,
      infer Env
    >
    | infer _ ? Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
    : never
}

/**
 * @category models
 * @since 2.0.0
 */
export interface ChannelUnifyIgnore extends Effect.EffectUnifyIgnore {
  Channel?: true
}

/**
 * @since 2.0.0
 * @category models
 */
declare module "./Effect.js" {
  interface Effect<A, E, R> extends Channel<never, unknown, E, unknown, A, unknown, R> {}
  interface EffectUnifyIgnore {
    Channel?: true
  }
}

/**
 * @since 2.0.0
 */
export declare namespace Channel {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out OutElem, in InElem, out OutErr, in InErr, out OutDone, in InDone, out Env> {
    readonly [ChannelTypeId]: VarianceStruct<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  }
  /**
   * @since 2.0.0
   * @category models
   */
  export interface VarianceStruct<out OutElem, in InElem, out OutErr, in InErr, out OutDone, in InDone, out Env> {
    _Env: Types.Covariant<Env>
    _InErr: Types.Contravariant<InErr>
    _InElem: Types.Contravariant<InElem>
    _InDone: Types.Contravariant<InDone>
    _OutErr: Types.Covariant<OutErr>
    _OutElem: Types.Covariant<OutElem>
    _OutDone: Types.Covariant<OutDone>
  }
}

/**
 * @since 2.0.0
 * @category symbols
 */
export const ChannelExceptionTypeId: unique symbol = channel.ChannelExceptionTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type ChannelExceptionTypeId = typeof ChannelExceptionTypeId

/**
 * Represents a generic checked exception which occurs when a `Channel` is
 * executed.
 *
 * @since 2.0.0
 * @category models
 */
export interface ChannelException<out E> {
  readonly _tag: "ChannelException"
  readonly [ChannelExceptionTypeId]: ChannelExceptionTypeId
  readonly error: E
}

/**
 * @since 3.5.4
 * @category refinements
 */
export const isChannel: (u: unknown) => u is Channel<
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown
> = core.isChannel

/**
 * @since 2.0.0
 * @category constructors
 */
export const acquireUseRelease: <Acquired, OutErr, Env, OutElem1, InElem, InErr, OutDone, InDone>(
  acquire: Effect.Effect<Acquired, OutErr, Env>,
  use: (a: Acquired) => Channel<OutElem1, InElem, OutErr, InErr, OutDone, InDone, Env>,
  release: (a: Acquired, exit: Exit.Exit<OutDone, OutErr>) => Effect.Effect<any, never, Env>
) => Channel<OutElem1, InElem, OutErr, InErr, OutDone, InDone, Env> = channel.acquireUseRelease

/**
 * @since 2.0.0
 * @category constructors
 */
export const acquireReleaseOut: {
  /**
   * @since 2.0.0
   * @category constructors
   */
  <Z, R2>(
    release: (z: Z, e: Exit.Exit<unknown, unknown>) => Effect.Effect<unknown, never, R2>
  ): <E, R>(self: Effect.Effect<Z, E, R>) => Channel<Z, unknown, E, unknown, void, unknown, R2 | R>
  /**
   * @since 2.0.0
   * @category constructors
   */
  <Z, E, R, R2>(
    self: Effect.Effect<Z, E, R>,
    release: (z: Z, e: Exit.Exit<unknown, unknown>) => Effect.Effect<unknown, never, R2>
  ): Channel<Z, unknown, E, unknown, void, unknown, R | R2>
} = core.acquireReleaseOut

/**
 * Returns a new channel that is the same as this one, except the terminal
 * value of the channel is the specified constant value.
 *
 * This method produces the same result as mapping this channel to the
 * specified constant value.
 *
 * @since 2.0.0
 * @category mapping
 */
export const as: {
  /**
   * Returns a new channel that is the same as this one, except the terminal
   * value of the channel is the specified constant value.
   *
   * This method produces the same result as mapping this channel to the
   * specified constant value.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutDone2>(value: OutDone2): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
  /**
   * Returns a new channel that is the same as this one, except the terminal
   * value of the channel is the specified constant value.
   *
   * This method produces the same result as mapping this channel to the
   * specified constant value.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutDone2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    value: OutDone2
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
} = channel.as

/**
 * @since 2.0.0
 * @category mapping
 */
export const asVoid: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
) => Channel<OutElem, InElem, OutErr, InErr, void, InDone, Env> = channel.asVoid

/**
 * Creates a channel backed by a buffer. When the buffer is empty, the channel
 * will simply passthrough its input as output. However, when the buffer is
 * non-empty, the value inside the buffer will be passed along as output.
 *
 * @since 2.0.0
 * @category constructors
 */
export const buffer: <InElem, InErr, InDone>(
  options: { readonly empty: InElem; readonly isEmpty: Predicate<InElem>; readonly ref: Ref.Ref<InElem> }
) => Channel<InElem, InElem, InErr, InErr, InDone, InDone, never> = channel.buffer

/**
 * @since 2.0.0
 * @category constructors
 */
export const bufferChunk: <InElem, InErr, InDone>(
  ref: Ref.Ref<Chunk.Chunk<InElem>>
) => Channel<Chunk.Chunk<InElem>, Chunk.Chunk<InElem>, InErr, InErr, InDone, InDone> = channel.bufferChunk

/**
 * Returns a new channel that is the same as this one, except if this channel
 * errors for any typed error, then the returned channel will switch over to
 * using the fallback channel returned by the specified error handler.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchAll: {
  /**
   * Returns a new channel that is the same as this one, except if this channel
   * errors for any typed error, then the returned channel will switch over to
   * using the fallback channel returned by the specified error handler.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutErr, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    f: (error: OutErr) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
  ): <OutElem, InElem, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone1 | OutDone,
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel that is the same as this one, except if this channel
   * errors for any typed error, then the returned channel will switch over to
   * using the fallback channel returned by the specified error handler.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (error: OutErr) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone | OutDone1,
    InDone & InDone1,
    Env | Env1
  >
} = channel.catchAll

/**
 * Returns a new channel that is the same as this one, except if this channel
 * errors for any typed error, then the returned channel will switch over to
 * using the fallback channel returned by the specified error handler.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchAllCause: {
  /**
   * Returns a new channel that is the same as this one, except if this channel
   * errors for any typed error, then the returned channel will switch over to
   * using the fallback channel returned by the specified error handler.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutErr, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    f: (cause: Cause.Cause<OutErr>) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
  ): <OutElem, InElem, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone1 | OutDone,
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel that is the same as this one, except if this channel
   * errors for any typed error, then the returned channel will switch over to
   * using the fallback channel returned by the specified error handler.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (cause: Cause.Cause<OutErr>) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone | OutDone1,
    InDone & InDone1,
    Env | Env1
  >
} = core.catchAllCause

/**
 * Concat sequentially a channel of channels.
 *
 * @since 2.0.0
 * @category constructors
 */
export const concatAll: <OutElem, InElem, OutErr, InErr, InDone, Env>(
  channels: Channel<Channel<OutElem, InElem, OutErr, InErr, any, InDone, Env>, InElem, OutErr, InErr, any, InDone, Env>
) => Channel<OutElem, InElem, OutErr, InErr, any, InDone, Env> = core.concatAll

/**
 * Concat sequentially a channel of channels.
 *
 * @since 2.0.0
 * @category constructors
 */
export const concatAllWith: <
  OutElem,
  InElem2,
  OutErr2,
  InErr2,
  OutDone,
  InDone2,
  Env2,
  InElem,
  OutErr,
  InErr,
  OutDone2,
  InDone,
  Env,
  OutDone3
>(
  channels: Channel<
    Channel<OutElem, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    InElem,
    OutErr,
    InErr,
    OutDone2,
    InDone,
    Env
  >,
  f: (o: OutDone, o1: OutDone) => OutDone,
  g: (o: OutDone, o2: OutDone2) => OutDone3
) => Channel<OutElem, InElem & InElem2, OutErr2 | OutErr, InErr & InErr2, OutDone3, InDone & InDone2, Env2 | Env> =
  core.concatAllWith

/**
 * Returns a new channel whose outputs are fed to the specified factory
 * function, which creates new channels in response. These new channels are
 * sequentially concatenated together, and all their outputs appear as outputs
 * of the newly returned channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const concatMap: {
  /**
   * Returns a new channel whose outputs are fed to the specified factory
   * function, which creates new channels in response. These new channels are
   * sequentially concatenated together, and all their outputs appear as outputs
   * of the newly returned channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, OutElem2, InElem2, OutErr2, InErr2, X, InDone2, Env2>(
    f: (o: OutElem) => Channel<OutElem2, InElem2, OutErr2, InErr2, X, InDone2, Env2>
  ): <Env, InErr, InElem, InDone, OutErr, OutDone>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem2, InElem & InElem2, OutErr2 | OutErr, InErr & InErr2, unknown, InDone & InDone2, Env2 | Env>
  /**
   * Returns a new channel whose outputs are fed to the specified factory
   * function, which creates new channels in response. These new channels are
   * sequentially concatenated together, and all their outputs appear as outputs
   * of the newly returned channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <Env, InErr, InElem, InDone, OutErr, OutDone, OutElem, OutElem2, Env2, InErr2, InElem2, InDone2, OutErr2, X>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (o: OutElem) => Channel<OutElem2, InElem2, OutErr2, InErr2, X, InDone2, Env2>
  ): Channel<OutElem2, InElem & InElem2, OutErr | OutErr2, InErr & InErr2, unknown, InDone & InDone2, Env | Env2>
} = channel.concatMap

/**
 * Returns a new channel whose outputs are fed to the specified factory
 * function, which creates new channels in response. These new channels are
 * sequentially concatenated together, and all their outputs appear as outputs
 * of the newly returned channel. The provided merging function is used to
 * merge the terminal values of all channels into the single terminal value of
 * the returned channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const concatMapWith: {
  /**
   * Returns a new channel whose outputs are fed to the specified factory
   * function, which creates new channels in response. These new channels are
   * sequentially concatenated together, and all their outputs appear as outputs
   * of the newly returned channel. The provided merging function is used to
   * merge the terminal values of all channels into the single terminal value of
   * the returned channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2, OutDone2, OutDone3>(
    f: (o: OutElem) => Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3
  ): <Env, InErr, InElem, InDone, OutErr>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
  ) => Channel<OutElem2, InElem & InElem2, OutErr2 | OutErr, InErr & InErr2, OutDone3, InDone & InDone2, Env2 | Env>
  /**
   * Returns a new channel whose outputs are fed to the specified factory
   * function, which creates new channels in response. These new channels are
   * sequentially concatenated together, and all their outputs appear as outputs
   * of the newly returned channel. The provided merging function is used to
   * merge the terminal values of all channels into the single terminal value of
   * the returned channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <
    OutElem,
    InElem,
    OutErr,
    InErr,
    OutDone2,
    InDone,
    Env,
    OutElem2,
    InElem2,
    OutErr2,
    InErr2,
    OutDone,
    InDone2,
    Env2,
    OutDone3
  >(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>,
    f: (o: OutElem) => Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3
  ): Channel<OutElem2, InElem & InElem2, OutErr | OutErr2, InErr & InErr2, OutDone3, InDone & InDone2, Env | Env2>
} = core.concatMapWith

/**
 * Returns a new channel whose outputs are fed to the specified factory
 * function, which creates new channels in response. These new channels are
 * sequentially concatenated together, and all their outputs appear as outputs
 * of the newly returned channel. The provided merging function is used to
 * merge the terminal values of all channels into the single terminal value of
 * the returned channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const concatMapWithCustom: {
  /**
   * Returns a new channel whose outputs are fed to the specified factory
   * function, which creates new channels in response. These new channels are
   * sequentially concatenated together, and all their outputs appear as outputs
   * of the newly returned channel. The provided merging function is used to
   * merge the terminal values of all channels into the single terminal value of
   * the returned channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2, OutDone2, OutDone3>(
    f: (o: OutElem) => Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3,
    onPull: (
      upstreamPullRequest: UpstreamPullRequest.UpstreamPullRequest<OutElem>
    ) => UpstreamPullStrategy.UpstreamPullStrategy<OutElem2>,
    onEmit: (elem: OutElem2) => ChildExecutorDecision.ChildExecutorDecision
  ): <Env, InErr, InElem, InDone, OutErr>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
  ) => Channel<OutElem2, InElem & InElem2, OutErr2 | OutErr, InErr & InErr2, OutDone3, InDone & InDone2, Env2 | Env>
  /**
   * Returns a new channel whose outputs are fed to the specified factory
   * function, which creates new channels in response. These new channels are
   * sequentially concatenated together, and all their outputs appear as outputs
   * of the newly returned channel. The provided merging function is used to
   * merge the terminal values of all channels into the single terminal value of
   * the returned channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <
    OutElem,
    InElem,
    OutErr,
    InErr,
    OutDone2,
    InDone,
    Env,
    OutElem2,
    InElem2,
    OutErr2,
    InErr2,
    OutDone,
    InDone2,
    Env2,
    OutDone3
  >(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>,
    f: (o: OutElem) => Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3,
    onPull: (
      upstreamPullRequest: UpstreamPullRequest.UpstreamPullRequest<OutElem>
    ) => UpstreamPullStrategy.UpstreamPullStrategy<OutElem2>,
    onEmit: (elem: OutElem2) => ChildExecutorDecision.ChildExecutorDecision
  ): Channel<OutElem2, InElem & InElem2, OutErr | OutErr2, InErr & InErr2, OutDone3, InDone & InDone2, Env | Env2>
} = core.concatMapWithCustom

/**
 * Returns a new channel, which is the same as this one, except its outputs
 * are filtered and transformed by the specified partial function.
 *
 * @since 2.0.0
 * @category utils
 */
export const collect: {
  /**
   * Returns a new channel, which is the same as this one, except its outputs
   * are filtered and transformed by the specified partial function.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, OutElem2>(pf: (o: OutElem) => Option.Option<OutElem2>): <InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, unknown, never, unknown, void, unknown, never>
  ) => Channel<OutElem2, InElem, OutErr, InErr, OutDone, InDone, Env>
  /**
   * Returns a new channel, which is the same as this one, except its outputs
   * are filtered and transformed by the specified partial function.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    pf: (o: OutElem) => Option.Option<OutElem2>
  ): Channel<OutElem2, InElem, OutErr, InErr, OutDone, InDone, Env>
} = channel.collect

/**
 * Returns a new channel, which is the concatenation of all the channels that
 * are written out by this channel. This method may only be called on channels
 * that output other channels.
 *
 * @since 2.0.0
 * @category utils
 */
export const concatOut: <OutElem, InElem, OutErr, InErr, InDone, Env, OutDone>(
  self: Channel<
    Channel<OutElem, InElem, OutErr, InErr, unknown, InDone, Env>,
    InElem,
    OutErr,
    InErr,
    OutDone,
    InDone,
    Env
  >
) => Channel<OutElem, InElem, OutErr, InErr, unknown, InDone, Env> = channel.concatOut

/**
 * Returns a new channel which is the same as this one but applies the given
 * function to the input channel's done value.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInput: {
  /**
   * Returns a new channel which is the same as this one but applies the given
   * function to the input channel's done value.
   *
   * @since 2.0.0
   * @category utils
   */
  <InDone0, InDone>(f: (a: InDone0) => InDone): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone0, Env>
  /**
   * Returns a new channel which is the same as this one but applies the given
   * function to the input channel's done value.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, InDone0>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (a: InDone0) => InDone
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone0, Env>
} = channel.mapInput

/**
 * Returns a new channel which is the same as this one but applies the given
 * effectual function to the input channel's done value.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInputEffect: {
  /**
   * Returns a new channel which is the same as this one but applies the given
   * effectual function to the input channel's done value.
   *
   * @since 2.0.0
   * @category utils
   */
  <InDone0, InDone, InErr, Env1>(f: (i: InDone0) => Effect.Effect<InDone, InErr, Env1>): <OutElem, InElem, OutErr, OutDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone0, Env1 | Env>
  /**
   * Returns a new channel which is the same as this one but applies the given
   * effectual function to the input channel's done value.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, InDone0, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (i: InDone0) => Effect.Effect<InDone, InErr, Env1>
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone0, Env | Env1>
} = channel.mapInputEffect

/**
 * Returns a new channel which is the same as this one but applies the given
 * function to the input channel's error value.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInputError: {
  /**
   * Returns a new channel which is the same as this one but applies the given
   * function to the input channel's error value.
   *
   * @since 2.0.0
   * @category utils
   */
  <InErr0, InErr>(f: (a: InErr0) => InErr): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr0, OutDone, InDone, Env>
  /**
   * Returns a new channel which is the same as this one but applies the given
   * function to the input channel's error value.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, InErr0>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (a: InErr0) => InErr
  ): Channel<OutElem, InElem, OutErr, InErr0, OutDone, InDone, Env>
} = channel.mapInputError

/**
 * Returns a new channel which is the same as this one but applies the given
 * effectual function to the input channel's error value.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInputErrorEffect: {
  /**
   * Returns a new channel which is the same as this one but applies the given
   * effectual function to the input channel's error value.
   *
   * @since 2.0.0
   * @category utils
   */
  <InErr0, InDone, InErr, Env1>(f: (error: InErr0) => Effect.Effect<InDone, InErr, Env1>): <OutElem, InElem, OutErr, OutDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr0, OutDone, InDone, Env1 | Env>
  /**
   * Returns a new channel which is the same as this one but applies the given
   * effectual function to the input channel's error value.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, InErr0, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (error: InErr0) => Effect.Effect<InDone, InErr, Env1>
  ): Channel<OutElem, InElem, OutErr, InErr0, OutDone, InDone, Env | Env1>
} = channel.mapInputErrorEffect

/**
 * Returns a new channel which is the same as this one but applies the given
 * function to the input channel's output elements.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInputIn: {
  /**
   * Returns a new channel which is the same as this one but applies the given
   * function to the input channel's output elements.
   *
   * @since 2.0.0
   * @category utils
   */
  <InElem0, InElem>(f: (a: InElem0) => InElem): <OutElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem0, OutErr, InErr, OutDone, InDone, Env>
  /**
   * Returns a new channel which is the same as this one but applies the given
   * function to the input channel's output elements.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, InElem0>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (a: InElem0) => InElem
  ): Channel<OutElem, InElem0, OutErr, InErr, OutDone, InDone, Env>
} = channel.mapInputIn

/**
 * Returns a new channel which is the same as this one but applies the given
 * effectual function to the input channel's output elements.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInputInEffect: {
  /**
   * Returns a new channel which is the same as this one but applies the given
   * effectual function to the input channel's output elements.
   *
   * @since 2.0.0
   * @category utils
   */
  <InElem0, InElem, InErr, Env1>(f: (a: InElem0) => Effect.Effect<InElem, InErr, Env1>): <OutElem, OutErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem0, OutErr, InErr, OutDone, InDone, Env1 | Env>
  /**
   * Returns a new channel which is the same as this one but applies the given
   * effectual function to the input channel's output elements.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, InElem0, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (a: InElem0) => Effect.Effect<InElem, InErr, Env1>
  ): Channel<OutElem, InElem0, OutErr, InErr, OutDone, InDone, Env | Env1>
} = channel.mapInputInEffect

/**
 * Returns a new channel, which is the same as this one, except that all the
 * outputs are collected and bundled into a tuple together with the terminal
 * value of this channel.
 *
 * As the channel returned from this channel collects all of this channel's
 * output into an in- memory chunk, it is not safe to call this method on
 * channels that output a large or unbounded number of values.
 *
 * @since 2.0.0
 * @category utils
 */
export const doneCollect: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
) => Channel<never, InElem, OutErr, InErr, [Chunk.Chunk<OutElem>, OutDone], InDone, Env> = channel.doneCollect

/**
 * Returns a new channel which reads all the elements from upstream's output
 * channel and ignores them, then terminates with the upstream result value.
 *
 * @since 2.0.0
 * @category utils
 */
export const drain: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
) => Channel<never, InElem, OutErr, InErr, OutDone, InDone, Env> = channel.drain

/**
 * Returns a new channel which connects the given `AsyncInputProducer` as
 * this channel's input.
 *
 * @since 2.0.0
 * @category utils
 */
export const embedInput: {
  /**
   * Returns a new channel which connects the given `AsyncInputProducer` as
   * this channel's input.
   *
   * @since 2.0.0
   * @category utils
   */
  <InErr, InElem, InDone>(input: SingleProducerAsyncInput.AsyncInputProducer<InErr, InElem, InDone>): <OutElem, OutErr, OutDone, Env>(
    self: Channel<OutElem, unknown, OutErr, unknown, OutDone, unknown, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  /**
   * Returns a new channel which connects the given `AsyncInputProducer` as
   * this channel's input.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, OutErr, OutDone, Env, InErr, InElem, InDone>(
    self: Channel<OutElem, unknown, OutErr, unknown, OutDone, unknown, Env>,
    input: SingleProducerAsyncInput.AsyncInputProducer<InErr, InElem, InDone>
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
} = core.embedInput

/**
 * Returns a new channel that collects the output and terminal value of this
 * channel, which it then writes as output of the returned channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const emitCollect: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
) => Channel<[Chunk.Chunk<OutElem>, OutDone], InElem, OutErr, InErr, void, InDone, Env> = channel.emitCollect

/**
 * Returns a new channel with an attached finalizer. The finalizer is
 * guaranteed to be executed so long as the channel begins execution (and
 * regardless of whether or not it completes).
 *
 * @since 2.0.0
 * @category utils
 */
export const ensuring: {
  /**
   * Returns a new channel with an attached finalizer. The finalizer is
   * guaranteed to be executed so long as the channel begins execution (and
   * regardless of whether or not it completes).
   *
   * @since 2.0.0
   * @category utils
   */
  <Z, Env1>(finalizer: Effect.Effect<Z, never, Env1>): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env1 | Env>
  /**
   * Returns a new channel with an attached finalizer. The finalizer is
   * guaranteed to be executed so long as the channel begins execution (and
   * regardless of whether or not it completes).
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, Z, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    finalizer: Effect.Effect<Z, never, Env1>
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env | Env1>
} = channel.ensuring

/**
 * Returns a new channel with an attached finalizer. The finalizer is
 * guaranteed to be executed so long as the channel begins execution (and
 * regardless of whether or not it completes).
 *
 * @since 2.0.0
 * @category utils
 */
export const ensuringWith: {
  /**
   * Returns a new channel with an attached finalizer. The finalizer is
   * guaranteed to be executed so long as the channel begins execution (and
   * regardless of whether or not it completes).
   *
   * @since 2.0.0
   * @category utils
   */
  <OutDone, OutErr, Env2>(
    finalizer: (e: Exit.Exit<OutDone, OutErr>) => Effect.Effect<unknown, never, Env2>
  ): <OutElem, InElem, InErr, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env2 | Env>
  /**
   * Returns a new channel with an attached finalizer. The finalizer is
   * guaranteed to be executed so long as the channel begins execution (and
   * regardless of whether or not it completes).
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, Env2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    finalizer: (e: Exit.Exit<OutDone, OutErr>) => Effect.Effect<unknown, never, Env2>
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env | Env2>
} = core.ensuringWith

/**
 * Accesses the whole context of the channel.
 *
 * @since 2.0.0
 * @category context
 */
export const context: <Env>() => Channel<never, unknown, never, unknown, Context.Context<Env>, unknown, Env> =
  channel.context

/**
 * Accesses the context of the channel with the specified function.
 *
 * @since 2.0.0
 * @category context
 */
export const contextWith: <Env, OutDone>(
  f: (env: Context.Context<Env>) => OutDone
) => Channel<never, unknown, never, unknown, OutDone, unknown, Env> = channel.contextWith

/**
 * Accesses the context of the channel in the context of a channel.
 *
 * @since 2.0.0
 * @category context
 */
export const contextWithChannel: <Env, OutElem, InElem, OutErr, InErr, OutDone, InDone, Env1>(
  f: (env: Context.Context<Env>) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env1>
) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env | Env1> = channel.contextWithChannel

/**
 * Accesses the context of the channel in the context of an effect.
 *
 * @since 2.0.0
 * @category context
 */
export const contextWithEffect: <Env, OutDone, OutErr, Env1>(
  f: (env: Context.Context<Env>) => Effect.Effect<OutDone, OutErr, Env1>
) => Channel<never, unknown, OutErr, unknown, OutDone, unknown, Env | Env1> = channel.contextWithEffect

/**
 * Constructs a channel that fails immediately with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail: <E>(error: E) => Channel<never, unknown, E, unknown, never, unknown> = core.fail

/**
 * Constructs a channel that succeeds immediately with the specified lazily
 * evaluated value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failSync: <E>(evaluate: LazyArg<E>) => Channel<never, unknown, E, unknown, never, unknown> = core.failSync

/**
 * Constructs a channel that fails immediately with the specified `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCause: <E>(cause: Cause.Cause<E>) => Channel<never, unknown, E, unknown, never, unknown> =
  core.failCause

/**
 * Constructs a channel that succeeds immediately with the specified lazily
 * evaluated `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCauseSync: <E>(
  evaluate: LazyArg<Cause.Cause<E>>
) => Channel<never, unknown, E, unknown, never, unknown> = core.failCauseSync

/**
 * Returns a new channel, which sequentially combines this channel, together
 * with the provided factory function, which creates a second channel based on
 * the terminal value of this channel. The result is a channel that will first
 * perform the functions of this channel, before performing the functions of
 * the created channel (including yielding its terminal value).
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap: {
  /**
   * Returns a new channel, which sequentially combines this channel, together
   * with the provided factory function, which creates a second channel based on
   * the terminal value of this channel. The result is a channel that will first
   * perform the functions of this channel, before performing the functions of
   * the created channel (including yielding its terminal value).
   *
   * @since 2.0.0
   * @category sequencing
   */
  <OutDone, OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>(
    f: (d: OutDone) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>
  ): <OutElem, InElem, OutErr, InErr, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1 | OutErr,
    InErr & InErr1,
    OutDone2,
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel, which sequentially combines this channel, together
   * with the provided factory function, which creates a second channel based on
   * the terminal value of this channel. The result is a channel that will first
   * perform the functions of this channel, before performing the functions of
   * the created channel (including yielding its terminal value).
   *
   * @since 2.0.0
   * @category sequencing
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (d: OutDone) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr | OutErr1,
    InErr & InErr1,
    OutDone2,
    InDone & InDone1,
    Env | Env1
  >
} = core.flatMap

/**
 * Returns a new channel, which flattens the terminal value of this channel.
 * This function may only be called if the terminal value of this channel is
 * another channel of compatible types.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatten: <
  OutElem,
  InElem,
  OutErr,
  InErr,
  OutElem1,
  InElem1,
  OutErr1,
  InErr1,
  OutDone2,
  InDone1,
  Env1,
  InDone,
  Env
>(
  self: Channel<
    OutElem,
    InElem,
    OutErr,
    InErr,
    Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>,
    InDone,
    Env
  >
) => Channel<
  OutElem | OutElem1,
  InElem & InElem1,
  OutErr | OutErr1,
  InErr & InErr1,
  OutDone2,
  InDone & InDone1,
  Env1 | Env
> = channel.flatten

/**
 * Folds over the result of this channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const foldChannel: {
  /**
   * Folds over the result of this channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <
    OutErr,
    OutElem1,
    InElem1,
    OutErr1,
    InErr1,
    OutDone1,
    InDone1,
    Env1,
    OutDone,
    OutElem2,
    InElem2,
    OutErr2,
    InErr2,
    OutDone2,
    InDone2,
    Env2
  >(
    options: {
      readonly onFailure: (error: OutErr) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
      readonly onSuccess: (done: OutDone) => Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone2, InDone2, Env2>
    }
  ): <Env, InErr, InElem, InDone, OutElem>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem2 | OutElem,
    InElem & InElem1 & InElem2,
    OutErr1 | OutErr2,
    InErr & InErr1 & InErr2,
    OutDone1 | OutDone2,
    InDone & InDone1 & InDone2,
    Env1 | Env2 | Env
  >
  /**
   * Folds over the result of this channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <
    OutElem,
    InElem,
    OutErr,
    InErr,
    OutDone,
    InDone,
    Env,
    OutElem1,
    InElem1,
    OutErr1,
    InErr1,
    OutDone1,
    InDone1,
    Env1,
    OutElem2,
    InElem2,
    OutErr2,
    InErr2,
    OutDone2,
    InDone2,
    Env2
  >(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    options: {
      readonly onFailure: (error: OutErr) => Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
      readonly onSuccess: (done: OutDone) => Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone2, InDone2, Env2>
    }
  ): Channel<
    OutElem | OutElem1 | OutElem2,
    InElem & InElem1 & InElem2,
    OutErr1 | OutErr2,
    InErr & InErr1 & InErr2,
    OutDone1 | OutDone2,
    InDone & InDone1 & InDone2,
    Env | Env1 | Env2
  >
} = channel.foldChannel

/**
 * Folds over the result of this channel including any cause of termination.
 *
 * @since 2.0.0
 * @category utils
 */
export const foldCauseChannel: {
  /**
   * Folds over the result of this channel including any cause of termination.
   *
   * @since 2.0.0
   * @category utils
   */
  <
    OutErr,
    OutElem1,
    InElem1,
    OutErr2,
    InErr1,
    OutDone2,
    InDone1,
    Env1,
    OutDone,
    OutElem2,
    InElem2,
    OutErr3,
    InErr2,
    OutDone3,
    InDone2,
    Env2
  >(
    options: {
      readonly onFailure: (
        c: Cause.Cause<OutErr>
      ) => Channel<OutElem1, InElem1, OutErr2, InErr1, OutDone2, InDone1, Env1>
      readonly onSuccess: (o: OutDone) => Channel<OutElem2, InElem2, OutErr3, InErr2, OutDone3, InDone2, Env2>
    }
  ): <Env, InErr, InElem, InDone, OutElem>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem2 | OutElem,
    InElem & InElem1 & InElem2,
    OutErr2 | OutErr3,
    InErr & InErr1 & InErr2,
    OutDone2 | OutDone3,
    InDone & InDone1 & InDone2,
    Env1 | Env2 | Env
  >
  /**
   * Folds over the result of this channel including any cause of termination.
   *
   * @since 2.0.0
   * @category utils
   */
  <
    OutElem,
    InElem,
    OutErr,
    InErr,
    OutDone,
    InDone,
    Env,
    OutElem1,
    InElem1,
    OutErr2,
    InErr1,
    OutDone2,
    InDone1,
    Env1,
    OutElem2,
    InElem2,
    OutErr3,
    InErr2,
    OutDone3,
    InDone2,
    Env2
  >(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    options: {
      readonly onFailure: (
        c: Cause.Cause<OutErr>
      ) => Channel<OutElem1, InElem1, OutErr2, InErr1, OutDone2, InDone1, Env1>
      readonly onSuccess: (o: OutDone) => Channel<OutElem2, InElem2, OutErr3, InErr2, OutDone3, InDone2, Env2>
    }
  ): Channel<
    OutElem | OutElem1 | OutElem2,
    InElem & InElem1 & InElem2,
    OutErr2 | OutErr3,
    InErr & InErr1 & InErr2,
    OutDone2 | OutDone3,
    InDone & InDone1 & InDone2,
    Env | Env1 | Env2
  >
} = core.foldCauseChannel

/**
 * Use an effect to end a channel.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffect: <A, E, R>(
  effect: Effect.Effect<A, E, R>
) => Channel<never, unknown, E, unknown, A, unknown, R> = core.fromEffect

/**
 * Constructs a channel from an `Either`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEither: <R, L>(either: Either.Either<R, L>) => Channel<never, unknown, L, unknown, R, unknown> =
  channel.fromEither

/**
 * Construct a `Channel` from an `AsyncInputConsumer`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromInput: <Err, Elem, Done>(
  input: SingleProducerAsyncInput.AsyncInputConsumer<Err, Elem, Done>
) => Channel<Elem, unknown, Err, unknown, Done, unknown> = channel.fromInput

/**
 * Construct a `Channel` from a `PubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromPubSub: <Done, Err, Elem>(
  pubsub: PubSub.PubSub<Either.Either<Elem, Exit.Exit<Done, Err>>>
) => Channel<Elem, unknown, Err, unknown, Done, unknown> = channel.fromPubSub

/**
 * Construct a `Channel` from a `PubSub` within a scoped effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromPubSubScoped: <Done, Err, Elem>(
  pubsub: PubSub.PubSub<Either.Either<Elem, Exit.Exit<Done, Err>>>
) => Effect.Effect<Channel<Elem, unknown, Err, unknown, Done, unknown>, never, Scope.Scope> = channel.fromPubSubScoped

/**
 * Construct a `Channel` from an `Option`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromOption: <A>(
  option: Option.Option<A>
) => Channel<never, unknown, Option.Option<never>, unknown, A, unknown> = channel.fromOption

/**
 * Construct a `Channel` from a `Queue`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromQueue: <Done, Err, Elem>(
  queue: Queue.Dequeue<Either.Either<Elem, Exit.Exit<Done, Err>>>
) => Channel<Elem, unknown, Err, unknown, Done, unknown> = channel.fromQueue

/**
 * @since 2.0.0
 * @category constructors
 */
export const identity: <Elem, Err, Done>() => Channel<Elem, Elem, Err, Err, Done, Done> = channel.identityChannel

/**
 * Returns a new channel, which is the same as this one, except it will be
 * interrupted when the specified effect completes. If the effect completes
 * successfully before the underlying channel is done, then the returned
 * channel will yield the success value of the effect as its terminal value.
 * On the other hand, if the underlying channel finishes first, then the
 * returned channel will yield the success value of the underlying channel as
 * its terminal value.
 *
 * @since 2.0.0
 * @category utils
 */
export const interruptWhen: {
  /**
   * Returns a new channel, which is the same as this one, except it will be
   * interrupted when the specified effect completes. If the effect completes
   * successfully before the underlying channel is done, then the returned
   * channel will yield the success value of the effect as its terminal value.
   * On the other hand, if the underlying channel finishes first, then the
   * returned channel will yield the success value of the underlying channel as
   * its terminal value.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutDone1, OutErr1, Env1>(effect: Effect.Effect<OutDone1, OutErr1, Env1>): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr1 | OutErr, InErr, OutDone1 | OutDone, InDone, Env1 | Env>
  /**
   * Returns a new channel, which is the same as this one, except it will be
   * interrupted when the specified effect completes. If the effect completes
   * successfully before the underlying channel is done, then the returned
   * channel will yield the success value of the effect as its terminal value.
   * On the other hand, if the underlying channel finishes first, then the
   * returned channel will yield the success value of the underlying channel as
   * its terminal value.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutDone1, OutErr1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    effect: Effect.Effect<OutDone1, OutErr1, Env1>
  ): Channel<OutElem, InElem, OutErr | OutErr1, InErr, OutDone | OutDone1, InDone, Env | Env1>
} = channel.interruptWhen

/**
 * Returns a new channel, which is the same as this one, except it will be
 * interrupted when the specified deferred is completed. If the deferred is
 * completed before the underlying channel is done, then the returned channel
 * will yield the value of the deferred. Otherwise, if the underlying channel
 * finishes first, then the returned channel will yield the value of the
 * underlying channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const interruptWhenDeferred: {
  /**
   * Returns a new channel, which is the same as this one, except it will be
   * interrupted when the specified deferred is completed. If the deferred is
   * completed before the underlying channel is done, then the returned channel
   * will yield the value of the deferred. Otherwise, if the underlying channel
   * finishes first, then the returned channel will yield the value of the
   * underlying channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutDone1, OutErr1>(deferred: Deferred.Deferred<OutDone1, OutErr1>): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr1 | OutErr, InErr, OutDone1 | OutDone, InDone, Env>
  /**
   * Returns a new channel, which is the same as this one, except it will be
   * interrupted when the specified deferred is completed. If the deferred is
   * completed before the underlying channel is done, then the returned channel
   * will yield the value of the deferred. Otherwise, if the underlying channel
   * finishes first, then the returned channel will yield the value of the
   * underlying channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutDone1, OutErr1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    deferred: Deferred.Deferred<OutDone1, OutErr1>
  ): Channel<OutElem, InElem, OutErr | OutErr1, InErr, OutDone | OutDone1, InDone, Env>
} = channel.interruptWhenDeferred

/**
 * Returns a new channel, which is the same as this one, except the terminal
 * value of the returned channel is created by applying the specified function
 * to the terminal value of this channel.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * Returns a new channel, which is the same as this one, except the terminal
   * value of the returned channel is created by applying the specified function
   * to the terminal value of this channel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutDone, OutDone2>(f: (out: OutDone) => OutDone2): <OutElem, InElem, OutErr, InErr, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
  /**
   * Returns a new channel, which is the same as this one, except the terminal
   * value of the returned channel is created by applying the specified function
   * to the terminal value of this channel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutDone2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (out: OutDone) => OutDone2
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
} = channel.map

/**
 * Returns a new channel, which is the same as this one, except the terminal
 * value of the returned channel is created by applying the specified
 * effectful function to the terminal value of this channel.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapEffect: {
  /**
   * Returns a new channel, which is the same as this one, except the terminal
   * value of the returned channel is created by applying the specified
   * effectful function to the terminal value of this channel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutDone, OutDone1, OutErr1, Env1>(f: (o: OutDone) => Effect.Effect<OutDone1, OutErr1, Env1>): <OutElem, InElem, OutErr, InErr, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr1 | OutErr, InErr, OutDone1, InDone, Env1 | Env>
  /**
   * Returns a new channel, which is the same as this one, except the terminal
   * value of the returned channel is created by applying the specified
   * effectful function to the terminal value of this channel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutDone1, OutErr1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (o: OutDone) => Effect.Effect<OutDone1, OutErr1, Env1>
  ): Channel<OutElem, InElem, OutErr | OutErr1, InErr, OutDone1, InDone, Env | Env1>
} = channel.mapEffect

/**
 * Returns a new channel, which is the same as this one, except the failure
 * value of the returned channel is created by applying the specified function
 * to the failure value of this channel.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapError: {
  /**
   * Returns a new channel, which is the same as this one, except the failure
   * value of the returned channel is created by applying the specified function
   * to the failure value of this channel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutErr, OutErr2>(f: (err: OutErr) => OutErr2): <OutElem, InElem, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr2, InErr, OutDone, InDone, Env>
  /**
   * Returns a new channel, which is the same as this one, except the failure
   * value of the returned channel is created by applying the specified function
   * to the failure value of this channel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutErr2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (err: OutErr) => OutErr2
  ): Channel<OutElem, InElem, OutErr2, InErr, OutDone, InDone, Env>
} = channel.mapError

/**
 * A more powerful version of `mapError` which also surfaces the `Cause`
 * of the channel failure.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapErrorCause: {
  /**
   * A more powerful version of `mapError` which also surfaces the `Cause`
   * of the channel failure.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutErr, OutErr2>(f: (cause: Cause.Cause<OutErr>) => Cause.Cause<OutErr2>): <OutElem, InElem, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr2, InErr, OutDone, InDone, Env>
  /**
   * A more powerful version of `mapError` which also surfaces the `Cause`
   * of the channel failure.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutErr2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (cause: Cause.Cause<OutErr>) => Cause.Cause<OutErr2>
  ): Channel<OutElem, InElem, OutErr2, InErr, OutDone, InDone, Env>
} = channel.mapErrorCause

/**
 * Maps the output of this channel using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapOut: {
  /**
   * Maps the output of this channel using the specified function.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, OutElem2>(f: (o: OutElem) => OutElem2): <InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem2, InElem, OutErr, InErr, OutDone, InDone, Env>
  /**
   * Maps the output of this channel using the specified function.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (o: OutElem) => OutElem2
  ): Channel<OutElem2, InElem, OutErr, InErr, OutDone, InDone, Env>
} = channel.mapOut

/**
 * Creates a channel that is like this channel but the given effectful function
 * gets applied to each emitted output element.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapOutEffect: {
  /**
   * Creates a channel that is like this channel but the given effectful function
   * gets applied to each emitted output element.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, OutElem1, OutErr1, Env1>(f: (o: OutElem) => Effect.Effect<OutElem1, OutErr1, Env1>): <InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem1, InElem, OutErr1 | OutErr, InErr, OutDone, InDone, Env1 | Env>
  /**
   * Creates a channel that is like this channel but the given effectful function
   * gets applied to each emitted output element.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, OutErr1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (o: OutElem) => Effect.Effect<OutElem1, OutErr1, Env1>
  ): Channel<OutElem1, InElem, OutErr | OutErr1, InErr, OutDone, InDone, Env | Env1>
} = channel.mapOutEffect

/**
 * Creates a channel that is like this channel but the given Effect function gets
 * applied to each emitted output element, taking `n` elements at once and
 * mapping them in parallel.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapOutEffectPar: {
  /**
   * Creates a channel that is like this channel but the given Effect function gets
   * applied to each emitted output element, taking `n` elements at once and
   * mapping them in parallel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, OutElem1, OutErr1, Env1>(f: (o: OutElem) => Effect.Effect<OutElem1, OutErr1, Env1>, n: number): <InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem1, InElem, OutErr1 | OutErr, InErr, OutDone, InDone, Env1 | Env>
  /**
   * Creates a channel that is like this channel but the given Effect function gets
   * applied to each emitted output element, taking `n` elements at once and
   * mapping them in parallel.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, OutErr1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (o: OutElem) => Effect.Effect<OutElem1, OutErr1, Env1>,
    n: number
  ): Channel<OutElem1, InElem, OutErr | OutErr1, InErr, OutDone, InDone, Env | Env1>
} = channel.mapOutEffectPar

/**
 * @since 2.0.0
 * @category utils
 */
export const mergeAll: (
  options: {
    readonly concurrency: number | "unbounded"
    readonly bufferSize?: number | undefined
    readonly mergeStrategy?: MergeStrategy.MergeStrategy | undefined
  }
) => <OutElem, InElem1, OutErr1, InErr1, InDone1, Env1, InElem, OutErr, InErr, InDone, Env>(
  channels: Channel<
    Channel<OutElem, InElem1, OutErr1, InErr1, unknown, InDone1, Env1>,
    InElem,
    OutErr,
    InErr,
    unknown,
    InDone,
    Env
  >
) => Channel<OutElem, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, unknown, InDone & InDone1, Env1 | Env> =
  channel.mergeAll

/**
 * @since 2.0.0
 * @category utils
 */
export const mergeAllUnbounded: <OutElem, InElem1, OutErr1, InErr1, InDone1, Env1, InElem, OutErr, InErr, InDone, Env>(
  channels: Channel<
    Channel<OutElem, InElem1, OutErr1, InErr1, unknown, InDone1, Env1>,
    InElem,
    OutErr,
    InErr,
    unknown,
    InDone,
    Env
  >
) => Channel<OutElem, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, unknown, InDone & InDone1, Env1 | Env> =
  channel.mergeAllUnbounded

/**
 * @since 2.0.0
 * @category utils
 */
export const mergeAllUnboundedWith: <
  OutElem,
  InElem1,
  OutErr1,
  InErr1,
  OutDone,
  InDone1,
  Env1,
  InElem,
  OutErr,
  InErr,
  InDone,
  Env
>(
  channels: Channel<
    Channel<OutElem, InElem1, OutErr1, InErr1, OutDone, InDone1, Env1>,
    InElem,
    OutErr,
    InErr,
    OutDone,
    InDone,
    Env
  >,
  f: (o1: OutDone, o2: OutDone) => OutDone
) => Channel<OutElem, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, OutDone, InDone & InDone1, Env1 | Env> =
  channel.mergeAllUnboundedWith

/**
 * @since 2.0.0
 * @category utils
 */
export const mergeAllWith: (
  { bufferSize, concurrency, mergeStrategy }: {
    readonly concurrency: number | "unbounded"
    readonly bufferSize?: number | undefined
    readonly mergeStrategy?: MergeStrategy.MergeStrategy | undefined
  }
) => <OutElem, InElem1, OutErr1, InErr1, OutDone, InDone1, Env1, InElem, OutErr, InErr, InDone, Env>(
  channels: Channel<
    Channel<OutElem, InElem1, OutErr1, InErr1, OutDone, InDone1, Env1>,
    InElem,
    OutErr,
    InErr,
    OutDone,
    InDone,
    Env
  >,
  f: (o1: OutDone, o2: OutDone) => OutDone
) => Channel<OutElem, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, OutDone, InDone & InDone1, Env1 | Env> =
  channel.mergeAllWith

/**
 * Returns a new channel which creates a new channel for each emitted element
 * and merges some of them together. Different merge strategies control what
 * happens if there are more than the given maximum number of channels gets
 * created. See `Channel.mergeAll`.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mergeMap: {
  /**
   * Returns a new channel which creates a new channel for each emitted element
   * and merges some of them together. Different merge strategies control what
   * happens if there are more than the given maximum number of channels gets
   * created. See `Channel.mergeAll`.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1>(
    f: (outElem: OutElem) => Channel<OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1>,
    options: {
      readonly concurrency: number | "unbounded"
      readonly bufferSize?: number | undefined
      readonly mergeStrategy?: MergeStrategy.MergeStrategy | undefined
    }
  ): <InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem1, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, unknown, InDone & InDone1, Env1 | Env>
  /**
   * Returns a new channel which creates a new channel for each emitted element
   * and merges some of them together. Different merge strategies control what
   * happens if there are more than the given maximum number of channels gets
   * created. See `Channel.mergeAll`.
   *
   * @since 2.0.0
   * @category mapping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (outElem: OutElem) => Channel<OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1>,
    options: {
      readonly concurrency: number | "unbounded"
      readonly bufferSize?: number | undefined
      readonly mergeStrategy?: MergeStrategy.MergeStrategy | undefined
    }
  ): Channel<OutElem1, InElem & InElem1, OutErr | OutErr1, InErr & InErr1, unknown, InDone & InDone1, Env | Env1>
} = channel.mergeMap

/**
 * Returns a new channel which merges a number of channels emitted by this
 * channel using the back pressuring merge strategy. See `Channel.mergeAll`.
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeOut: {
  /**
   * Returns a new channel which merges a number of channels emitted by this
   * channel using the back pressuring merge strategy. See `Channel.mergeAll`.
   *
   * @since 2.0.0
   * @category utils
   */
  (n: number): <OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<
      Channel<OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1>,
      InElem,
      OutErr,
      InErr,
      OutDone,
      InDone,
      Env
    >
  ) => Channel<OutElem1, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, unknown, InDone & InDone1, Env1 | Env>
  /**
   * Returns a new channel which merges a number of channels emitted by this
   * channel using the back pressuring merge strategy. See `Channel.mergeAll`.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<
      Channel<OutElem1, InElem1, OutErr1, InErr1, Z, InDone1, Env1>,
      InElem,
      OutErr,
      InErr,
      OutDone,
      InDone,
      Env
    >,
    n: number
  ): Channel<OutElem1, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, unknown, InDone & InDone1, Env1 | Env>
} = channel.mergeOut

/**
 * Returns a new channel which merges a number of channels emitted by this
 * channel using the back pressuring merge strategy and uses a given function
 * to merge each completed subchannel's result value. See
 * `Channel.mergeAll`.
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeOutWith: {
  /**
   * Returns a new channel which merges a number of channels emitted by this
   * channel using the back pressuring merge strategy and uses a given function
   * to merge each completed subchannel's result value. See
   * `Channel.mergeAll`.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutDone1>(n: number, f: (o1: OutDone1, o2: OutDone1) => OutDone1): <OutElem1, InElem1, OutErr1, InErr1, InDone1, Env1, InElem, OutErr, InErr, InDone, Env>(
    self: Channel<
      Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
      InElem,
      OutErr,
      InErr,
      OutDone1,
      InDone,
      Env
    >
  ) => Channel<OutElem1, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, OutDone1, InDone & InDone1, Env1 | Env>
  /**
   * Returns a new channel which merges a number of channels emitted by this
   * channel using the back pressuring merge strategy and uses a given function
   * to merge each completed subchannel's result value. See
   * `Channel.mergeAll`.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1, InElem, OutErr, InErr, InDone, Env>(
    self: Channel<
      Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
      InElem,
      OutErr,
      InErr,
      OutDone1,
      InDone,
      Env
    >,
    n: number,
    f: (o1: OutDone1, o2: OutDone1) => OutDone1
  ): Channel<OutElem1, InElem & InElem1, OutErr1 | OutErr, InErr & InErr1, OutDone1, InDone & InDone1, Env1 | Env>
} = channel.mergeOutWith

/**
 * Returns a new channel, which is the merge of this channel and the specified
 * channel, where the behavior of the returned channel on left or right early
 * termination is decided by the specified `leftDone` and `rightDone` merge
 * decisions.
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeWith: {
  /**
   * Returns a new channel, which is the merge of this channel and the specified
   * channel, where the behavior of the returned channel on left or right early
   * termination is decided by the specified `leftDone` and `rightDone` merge
   * decisions.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1, OutDone, OutErr, OutErr2, OutDone2, OutErr3, OutDone3>(
    options: {
      readonly other: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
      readonly onSelfDone: (
        exit: Exit.Exit<OutDone, OutErr>
      ) => MergeDecision.MergeDecision<Env1, OutErr1, OutDone1, OutErr2, OutDone2>
      readonly onOtherDone: (
        ex: Exit.Exit<OutDone1, OutErr1>
      ) => MergeDecision.MergeDecision<Env1, OutErr, OutDone, OutErr3, OutDone3>
    }
  ): <Env, InErr, InElem, InDone, OutElem>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr2 | OutErr3,
    InErr & InErr1,
    OutDone2 | OutDone3,
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel, which is the merge of this channel and the specified
   * channel, where the behavior of the returned channel on left or right early
   * termination is decided by the specified `leftDone` and `rightDone` merge
   * decisions.
   *
   * @since 2.0.0
   * @category utils
   */
  <
    OutElem,
    InElem,
    OutErr,
    InErr,
    OutDone,
    InDone,
    Env,
    OutElem1,
    InElem1,
    OutErr1,
    InErr1,
    OutDone1,
    InDone1,
    Env1,
    OutErr2,
    OutDone2,
    OutErr3,
    OutDone3
  >(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    options: {
      readonly other: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
      readonly onSelfDone: (
        exit: Exit.Exit<OutDone, OutErr>
      ) => MergeDecision.MergeDecision<Env1, OutErr1, OutDone1, OutErr2, OutDone2>
      readonly onOtherDone: (
        ex: Exit.Exit<OutDone1, OutErr1>
      ) => MergeDecision.MergeDecision<Env1, OutErr, OutDone, OutErr3, OutDone3>
    }
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr2 | OutErr3,
    InErr & InErr1,
    OutDone2 | OutDone3,
    InDone & InDone1,
    Env | Env1
  >
} = channel.mergeWith

/**
 * Returns a channel that never completes
 *
 * @since 2.0.0
 * @category constructors
 */
export const never: Channel<never, unknown, never, unknown, never, unknown> = channel.never

/**
 * Translates channel failure into death of the fiber, making all failures
 * unchecked and not a part of the type of the channel.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orDie: {
  /**
   * Translates channel failure into death of the fiber, making all failures
   * unchecked and not a part of the type of the channel.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E>(error: LazyArg<E>): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, never, InErr, OutDone, InDone, Env>
  /**
   * Translates channel failure into death of the fiber, making all failures
   * unchecked and not a part of the type of the channel.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, E>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    error: LazyArg<E>
  ): Channel<OutElem, InElem, never, InErr, OutDone, InDone, Env>
} = channel.orDie

/**
 * Keeps none of the errors, and terminates the fiber with them, using the
 * specified function to convert the `OutErr` into a defect.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orDieWith: {
  /**
   * Keeps none of the errors, and terminates the fiber with them, using the
   * specified function to convert the `OutErr` into a defect.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutErr>(f: (e: OutErr) => unknown): <OutElem, InElem, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, never, InErr, OutDone, InDone, Env>
  /**
   * Keeps none of the errors, and terminates the fiber with them, using the
   * specified function to convert the `OutErr` into a defect.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (e: OutErr) => unknown
  ): Channel<OutElem, InElem, never, InErr, OutDone, InDone, Env>
} = channel.orDieWith

/**
 * Returns a new channel that will perform the operations of this one, until
 * failure, and then it will switch over to the operations of the specified
 * fallback channel.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElse: {
  /**
   * Returns a new channel that will perform the operations of this one, until
   * failure, and then it will switch over to the operations of the specified
   * fallback channel.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    that: LazyArg<Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>>
  ): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone1 | OutDone,
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel that will perform the operations of this one, until
   * failure, and then it will switch over to the operations of the specified
   * fallback channel.
   *
   * @since 2.0.0
   * @category error handling
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: LazyArg<Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>>
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone | OutDone1,
    InDone & InDone1,
    Env | Env1
  >
} = channel.orElse

/**
 * Returns a new channel that pipes the output of this channel into the
 * specified channel. The returned channel has the input type of this channel,
 * and the output type of the specified channel, terminating with the value of
 * the specified channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const pipeTo: {
  /**
   * Returns a new channel that pipes the output of this channel into the
   * specified channel. The returned channel has the input type of this channel,
   * and the output type of the specified channel, terminating with the value of
   * the specified channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem2, OutElem, OutErr2, OutErr, OutDone2, OutDone, Env2>(that: Channel<OutElem2, OutElem, OutErr2, OutErr, OutDone2, OutDone, Env2>): <InElem, InErr, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env2 | Env>
  /**
   * Returns a new channel that pipes the output of this channel into the
   * specified channel. The returned channel has the input type of this channel,
   * and the output type of the specified channel, terminating with the value of
   * the specified channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem2, OutErr2, OutDone2, Env2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: Channel<OutElem2, OutElem, OutErr2, OutErr, OutDone2, OutDone, Env2>
  ): Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env | Env2>
} = core.pipeTo

/**
 * Returns a new channel that pipes the output of this channel into the
 * specified channel and preserves this channel's failures without providing
 * them to the other channel for observation.
 *
 * @since 2.0.0
 * @category utils
 */
export const pipeToOrFail: {
  /**
   * Returns a new channel that pipes the output of this channel into the
   * specified channel and preserves this channel's failures without providing
   * them to the other channel for observation.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem2, OutElem, OutErr2, OutDone2, OutDone, Env2>(that: Channel<OutElem2, OutElem, OutErr2, never, OutDone2, OutDone, Env2>): <InElem, OutErr, InErr, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem2, InElem, OutErr2 | OutErr, InErr, OutDone2, InDone, Env2 | Env>
  /**
   * Returns a new channel that pipes the output of this channel into the
   * specified channel and preserves this channel's failures without providing
   * them to the other channel for observation.
   *
   * @since 2.0.0
   * @category utils
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem2, OutErr2, OutDone2, Env2>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: Channel<OutElem2, OutElem, OutErr2, never, OutDone2, OutDone, Env2>
  ): Channel<OutElem2, InElem, OutErr | OutErr2, InErr, OutDone2, InDone, Env | Env2>
} = channel.pipeToOrFail

/**
 * Provides the channel with its required context, which eliminates its
 * dependency on `Env`.
 *
 * @since 2.0.0
 * @category context
 */
export const provideContext: {
  /**
   * Provides the channel with its required context, which eliminates its
   * dependency on `Env`.
   *
   * @since 2.0.0
   * @category context
   */
  <Env>(env: Context.Context<Env>): <OutElem, InElem, OutErr, InErr, OutDone, InDone>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, never>
  /**
   * Provides the channel with its required context, which eliminates its
   * dependency on `Env`.
   *
   * @since 2.0.0
   * @category context
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    env: Context.Context<Env>
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, never>
} = core.provideContext

/**
 * Provides a layer to the channel, which translates it to another level.
 *
 * @since 2.0.0
 * @category context
 */
export const provideLayer: {
  /**
   * Provides a layer to the channel, which translates it to another level.
   *
   * @since 2.0.0
   * @category context
   */
  <Env, OutErr2, Env0>(layer: Layer.Layer<Env, OutErr2, Env0>): <OutElem, InElem, OutErr, InErr, OutDone, InDone>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr2 | OutErr, InErr, OutDone, InDone, Env0>
  /**
   * Provides a layer to the channel, which translates it to another level.
   *
   * @since 2.0.0
   * @category context
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutErr2, Env0>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    layer: Layer.Layer<Env, OutErr2, Env0>
  ): Channel<OutElem, InElem, OutErr | OutErr2, InErr, OutDone, InDone, Env0>
} = channel.provideLayer

/**
 * Transforms the context being provided to the channel with the specified
 * function.
 *
 * @since 2.0.0
 * @category context
 */
export const mapInputContext: {
  /**
   * Transforms the context being provided to the channel with the specified
   * function.
   *
   * @since 2.0.0
   * @category context
   */
  <Env0, Env>(f: (env: Context.Context<Env0>) => Context.Context<Env>): <OutElem, InElem, OutErr, InErr, OutDone, InDone>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env0>
  /**
   * Transforms the context being provided to the channel with the specified
   * function.
   *
   * @since 2.0.0
   * @category context
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, Env0>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (env: Context.Context<Env0>) => Context.Context<Env>
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env0>
} = channel.mapInputContext

/**
 * Splits the context into two parts, providing one part using the
 * specified layer and leaving the remainder `Env0`.
 *
 * @since 2.0.0
 * @category context
 */
export const provideSomeLayer: {
  /**
   * Splits the context into two parts, providing one part using the
   * specified layer and leaving the remainder `Env0`.
   *
   * @since 2.0.0
   * @category context
   */
  <R2, OutErr2, Env0>(layer: Layer.Layer<R2, OutErr2, Env0>): <OutElem, InElem, OutErr, InErr, OutDone, InDone, R>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, R>
  ) => Channel<OutElem, InElem, OutErr2 | OutErr, InErr, OutDone, InDone, Env0 | Exclude<R, R2>>
  /**
   * Splits the context into two parts, providing one part using the
   * specified layer and leaving the remainder `Env0`.
   *
   * @since 2.0.0
   * @category context
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, R, R2, OutErr2, Env0>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, R>,
    layer: Layer.Layer<R2, OutErr2, Env0>
  ): Channel<OutElem, InElem, OutErr | OutErr2, InErr, OutDone, InDone, Env0 | Exclude<R, R2>>
} = channel.provideSomeLayer

/**
 * Provides the effect with the single service it requires. If the effect
 * requires more than one service use `provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
export const provideService: {
  /**
   * Provides the effect with the single service it requires. If the effect
   * requires more than one service use `provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <I, S>(tag: Context.Tag<I, S>, service: Types.NoInfer<S>): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Exclude<Env, I>>
  /**
   * Provides the effect with the single service it requires. If the effect
   * requires more than one service use `provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, I, S>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    tag: Context.Tag<I, S>,
    service: Types.NoInfer<S>
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Exclude<Env, I>>
} = channel.provideService

/**
 * @since 2.0.0
 * @category constructors
 */
export const read: <In>() => Channel<never, In, Option.Option<never>, unknown, In, unknown> = channel.read

/**
 * @since 2.0.0
 * @category constructors
 */
export const readOrFail: <E, In = unknown>(error: E) => Channel<never, In, E, unknown, In, unknown> = core.readOrFail

/**
 * @since 2.0.0
 * @category constructors
 */
export const readWith: <
  InElem,
  OutElem,
  OutErr,
  InErr,
  OutDone,
  InDone,
  Env,
  OutElem2,
  OutErr2,
  OutDone2,
  Env2,
  OutElem3,
  OutErr3,
  OutDone3,
  Env3
>(
  options: {
    readonly onInput: (input: InElem) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
    readonly onFailure: (error: InErr) => Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env2>
    readonly onDone: (done: InDone) => Channel<OutElem3, InElem, OutErr3, InErr, OutDone3, InDone, Env3>
  }
) => Channel<
  OutElem | OutElem2 | OutElem3,
  InElem,
  OutErr | OutErr2 | OutErr3,
  InErr,
  OutDone | OutDone2 | OutDone3,
  InDone,
  Env | Env2 | Env3
> = core.readWith

/**
 * @since 2.0.0
 * @category constructors
 */
export const readWithCause: <
  InElem,
  OutElem,
  OutErr,
  InErr,
  OutDone,
  InDone,
  Env,
  OutElem2,
  OutErr2,
  OutDone2,
  Env2,
  OutElem3,
  OutErr3,
  OutDone3,
  Env3
>(
  options: {
    readonly onInput: (input: InElem) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
    readonly onFailure: (cause: Cause.Cause<InErr>) => Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env2>
    readonly onDone: (done: InDone) => Channel<OutElem3, InElem, OutErr3, InErr, OutDone3, InDone, Env3>
  }
) => Channel<
  OutElem | OutElem2 | OutElem3,
  InElem,
  OutErr | OutErr2 | OutErr3,
  InErr,
  OutDone | OutDone2 | OutDone3,
  InDone,
  Env | Env2 | Env3
> = core.readWithCause

/**
 * Creates a channel which repeatedly runs this channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const repeated: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env> = channel.repeated

/**
 * Runs a channel until the end is received.
 *
 * @since 2.0.0
 * @category destructors
 */
export const run: <OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<never, unknown, OutErr, InErr, OutDone, InDone, Env>
) => Effect.Effect<OutDone, OutErr, Env> = channel.run

/**
 * Run the channel until it finishes with a done value or fails with an error
 * and collects its emitted output elements.
 *
 * The channel must not read any input.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runCollect: <OutElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, unknown, OutErr, InErr, OutDone, InDone, Env>
) => Effect.Effect<[Chunk.Chunk<OutElem>, OutDone], OutErr, Env> = channel.runCollect

/**
 * Runs a channel until the end is received.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runDrain: <OutElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, unknown, OutErr, InErr, OutDone, InDone, Env>
) => Effect.Effect<OutDone, OutErr, Env> = channel.runDrain

/**
 * Run the channel until it finishes with a done value or fails with an error.
 * The channel must not read any input or write any output.
 *
 * Closing the channel, which includes execution of all the finalizers
 * attached to the channel will be added to the current scope as a finalizer.
 *
 * @since 3.11.0
 * @category destructors
 */
export const runScoped: <OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<never, unknown, OutErr, InErr, OutDone, InDone, Env>
) => Effect.Effect<OutDone, OutErr, Env | Scope.Scope> = channel.runScoped

/**
 * Use a scoped effect to emit an output element.
 *
 * @since 2.0.0
 * @category constructors
 */
export const scoped: <A, E, R>(
  effect: Effect.Effect<A, E, R>
) => Channel<A, unknown, E, unknown, unknown, unknown, Exclude<R, Scope.Scope>> = channel.scoped

/**
 * Use a function that receives a scope and returns an effect to emit an output
 * element. The output element will be the result of the returned effect, if
 * successful.
 *
 * @since 3.11.0
 * @category constructors
 */
export const scopedWith: <A, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<A, E, R>
) => Channel<A, unknown, E, unknown, unknown, unknown, R> = channel.scopedWith

/**
 * Splits strings on newlines. Handles both Windows newlines (`\r\n`) and UNIX
 * newlines (`\n`).
 *
 * @since 2.0.0
 * @category combinators
 */
export const splitLines: <Err, Done>() => Channel<
  Chunk.Chunk<string>,
  Chunk.Chunk<string>,
  Err,
  Err,
  Done,
  Done,
  never
> = channel.splitLines

/**
 * Constructs a channel that succeeds immediately with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed: <A>(value: A) => Channel<never, unknown, never, unknown, A, unknown> = core.succeed

/**
 * Lazily constructs a channel from the given side effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const suspend: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  evaluate: LazyArg<Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>>
) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env> = core.suspend

/**
 * Constructs a channel that succeeds immediately with the specified lazy value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sync: <OutDone>(
  evaluate: LazyArg<OutDone>
) => Channel<never, unknown, never, unknown, OutDone, unknown> = core.sync

/**
 * Converts a `Channel` to a `PubSub`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toPubSub: <Done, Err, Elem>(
  pubsub: PubSub.PubSub<Either.Either<Elem, Exit.Exit<Done, Err>>>
) => Channel<never, Elem, never, Err, unknown, Done> = channel.toPubSub

/**
 * Returns a scoped `Effect` that can be used to repeatedly pull elements from
 * the constructed `Channel`. The pull effect fails with the channel's failure
 * in case the channel fails, or returns either the channel's done value or an
 * emitted element.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toPull: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
) => Effect.Effect<Effect.Effect<Either.Either<OutElem, OutDone>, OutErr, Env>, never, Scope.Scope | Env> =
  channel.toPull

/**
 * Returns an `Effect` that can be used to repeatedly pull elements from the
 * constructed `Channel` within the provided `Scope`. The pull effect fails
 * with the channel's failure in case the channel fails, or returns either the
 * channel's done value or an emitted element.
 *
 * @since 3.11.0
 * @category destructors
 */
export const toPullIn: {
  /**
   * Returns an `Effect` that can be used to repeatedly pull elements from the
   * constructed `Channel` within the provided `Scope`. The pull effect fails
   * with the channel's failure in case the channel fails, or returns either the
   * channel's done value or an emitted element.
   *
   * @since 3.11.0
   * @category destructors
   */
  (scope: Scope.Scope): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Effect.Effect<Effect.Effect<Either.Either<OutElem, OutDone>, OutErr, Env>, never, Env>
  /**
   * Returns an `Effect` that can be used to repeatedly pull elements from the
   * constructed `Channel` within the provided `Scope`. The pull effect fails
   * with the channel's failure in case the channel fails, or returns either the
   * channel's done value or an emitted element.
   *
   * @since 3.11.0
   * @category destructors
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    scope: Scope.Scope
  ): Effect.Effect<Effect.Effect<Either.Either<OutElem, OutDone>, OutErr, Env>, never, Env>
} = channel.toPullIn

/**
 * Converts a `Channel` to a `Queue`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toQueue: <Done, Err, Elem>(
  queue: Queue.Enqueue<Either.Either<Elem, Exit.Exit<Done, Err>>>
) => Channel<never, Elem, never, Err, unknown, Done> = channel.toQueue

/** Converts this channel to a `Sink`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toSink: <OutElem, InElem, OutErr, InErr, OutDone, Env>(
  self: Channel<Chunk.Chunk<OutElem>, Chunk.Chunk<InElem>, OutErr, InErr, OutDone, unknown, Env>
) => Sink.Sink<OutDone, InElem, OutElem, OutErr, Env> = sink.channelToSink

/**
 * Converts this channel to a `Stream`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toStream: <OutElem, OutErr, OutDone, Env>(
  self: Channel<Chunk.Chunk<OutElem>, unknown, OutErr, unknown, OutDone, unknown, Env>
) => Stream.Stream<OutElem, OutErr, Env> = stream.channelToStream

const void_: Channel<never> = core.void
export {
  /**
   * @since 2.0.0
   * @category constructors
   */
  void_ as void
}

/**
 * Constructs a `Channel` from an effect that will result in a `Channel` if
 * successful.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unwrap: <OutElem, InElem, OutErr, InErr, OutDone, InDone, R2, E, R>(
  channel: Effect.Effect<Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, R2>, E, R>
) => Channel<OutElem, InElem, E | OutErr, InErr, OutDone, InDone, R | R2> = channel.unwrap

/**
 * Constructs a `Channel` from a scoped effect that will result in a
 * `Channel` if successful.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unwrapScoped: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, E, R>(
  self: Effect.Effect<Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>, E, R>
) => Channel<OutElem, InElem, E | OutErr, InErr, OutDone, InDone, Env | Exclude<R, Scope.Scope>> = channel.unwrapScoped

/**
 * Constructs a `Channel` from a function which receives a `Scope` and returns
 * an effect that will result in a `Channel` if successful.
 *
 * @since 3.11.0
 * @category constructors
 */
export const unwrapScopedWith: <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>, E, R>
) => Channel<OutElem, InElem, E | OutErr, InErr, OutDone, InDone, R | Env> = channel.unwrapScopedWith

/**
 * Updates a service in the context of this channel.
 *
 * @since 2.0.0
 * @category context
 */
export const updateService: {
  /**
   * Updates a service in the context of this channel.
   *
   * @since 2.0.0
   * @category context
   */
  <I, S>(
    tag: Context.Tag<I, S>,
    f: (resource: Types.NoInfer<S>) => Types.NoInfer<S>
  ): <OutElem, OutErr, InErr, OutDone, InDone, R>(
    self: Channel<OutElem, unknown, OutErr, InErr, OutDone, InDone, R>
  ) => Channel<OutElem, unknown, OutErr, InErr, OutDone, InDone, I | R>
  /**
   * Updates a service in the context of this channel.
   *
   * @since 2.0.0
   * @category context
   */
  <OutElem, OutErr, InErr, OutDone, InDone, R, I, S>(
    self: Channel<OutElem, unknown, OutErr, InErr, OutDone, InDone, R>,
    tag: Context.Tag<I, S>,
    f: (resource: Types.NoInfer<S>) => Types.NoInfer<S>
  ): Channel<OutElem, unknown, OutErr, InErr, OutDone, InDone, I | R>
} = channel.updateService

/**
 * Wraps the channel with a new span for tracing.
 *
 * @since 2.0.0
 * @category tracing
 */
export const withSpan: {
  /**
   * Wraps the channel with a new span for tracing.
   *
   * @since 2.0.0
   * @category tracing
   */
  (name: string, options?: Tracer.SpanOptions | undefined): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Exclude<Env, Tracer.ParentSpan>>
  /**
   * Wraps the channel with a new span for tracing.
   *
   * @since 2.0.0
   * @category tracing
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    name: string,
    options?: Tracer.SpanOptions | undefined
  ): Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Exclude<Env, Tracer.ParentSpan>>
} = channel.withSpan

/**
 * Writes a single value to the channel.
 *
 * @since 2.0.0
 * @category constructors
 */
export const write: <OutElem>(out: OutElem) => Channel<OutElem> = core.write

/**
 * Writes a sequence of values to the channel.
 *
 * @since 2.0.0
 * @category constructors
 */
export const writeAll: <OutElems extends Array<any>>(
  ...outs: OutElems
) => Channel<OutElems[number]> = channel.writeAll

/**
 * Writes a `Chunk` of values to the channel.
 *
 * @since 2.0.0
 * @category constructors
 */
export const writeChunk: <OutElem>(
  outs: Chunk.Chunk<OutElem>
) => Channel<OutElem> = channel.writeChunk

/**
 * Returns a new channel that is the sequential composition of this channel
 * and the specified channel. The returned channel terminates with a tuple of
 * the terminal values of both channels.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip: {
  /**
   * Returns a new channel that is the sequential composition of this channel
   * and the specified channel. The returned channel terminates with a tuple of
   * the terminal values of both channels.
   *
   * @since 2.0.0
   * @category zipping
   */
  <OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    that: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
    options?: { readonly concurrent?: boolean | undefined } | undefined
  ): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1 | OutErr,
    InErr & InErr1,
    readonly [OutDone, OutDone1],
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel that is the sequential composition of this channel
   * and the specified channel. The returned channel terminates with a tuple of
   * the terminal values of both channels.
   *
   * @since 2.0.0
   * @category zipping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
    options?: { readonly concurrent?: boolean | undefined } | undefined
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr | OutErr1,
    InErr & InErr1,
    readonly [OutDone, OutDone1],
    InDone & InDone1,
    Env | Env1
  >
} = channel.zip

/**
 * Returns a new channel that is the sequential composition of this channel
 * and the specified channel. The returned channel terminates with the
 * terminal value of this channel.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft: {
  /**
   * Returns a new channel that is the sequential composition of this channel
   * and the specified channel. The returned channel terminates with the
   * terminal value of this channel.
   *
   * @since 2.0.0
   * @category zipping
   */
  <OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    that: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
    options?: { readonly concurrent?: boolean | undefined } | undefined
  ): <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1 | OutErr,
    InErr & InErr1,
    OutDone,
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel that is the sequential composition of this channel
   * and the specified channel. The returned channel terminates with the
   * terminal value of this channel.
   *
   * @since 2.0.0
   * @category zipping
   */
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
    options?: { readonly concurrent?: boolean | undefined } | undefined
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr | OutErr1,
    InErr & InErr1,
    OutDone,
    InDone & InDone1,
    Env | Env1
  >
} = channel.zipLeft

/**
 * Returns a new channel that is the sequential composition of this channel
 * and the specified channel. The returned channel terminates with the
 * terminal value of that channel.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipRight: {
  /**
   * Returns a new channel that is the sequential composition of this channel
   * and the specified channel. The returned channel terminates with the
   * terminal value of that channel.
   *
   * @since 2.0.0
   * @category zipping
   */
  <Env1, InErr1, InElem1, InDone1, OutErr1, OutElem1, OutDone1>(
    that: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ): <Env, InErr, InElem, InDone, OutErr, OutElem, OutDone>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1 | OutErr,
    InErr & InErr1,
    OutDone1,
    InDone & InDone1,
    Env1 | Env
  >
  /**
   * Returns a new channel that is the sequential composition of this channel
   * and the specified channel. The returned channel terminates with the
   * terminal value of that channel.
   *
   * @since 2.0.0
   * @category zipping
   */
  <Env, InErr, InElem, InDone, OutErr, OutElem, OutDone, Env1, InErr1, InElem1, InDone1, OutErr1, OutElem1, OutDone1>(
    self: Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ): Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr | OutErr1,
    InErr & InErr1,
    OutDone1,
    InDone & InDone1,
    Env | Env1
  >
} = channel.zipRight

/**
 * Represents a generic checked exception which occurs when a `Channel` is
 * executed.
 *
 * @since 2.0.0
 * @category errors
 */
export const ChannelException: <E>(error: E) => ChannelException<E> = channel.ChannelException

/**
 * Returns `true` if the specified value is an `ChannelException`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isChannelException: (u: unknown) => u is ChannelException<unknown> = channel.isChannelException

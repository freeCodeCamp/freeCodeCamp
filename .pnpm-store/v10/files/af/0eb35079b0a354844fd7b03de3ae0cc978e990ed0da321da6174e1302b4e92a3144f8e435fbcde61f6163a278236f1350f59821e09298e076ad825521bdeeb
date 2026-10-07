"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSink = exports.toQueue = exports.toPullIn = exports.toPull = exports.toPubSub = exports.sync = exports.suspend = exports.succeed = exports.splitLines = exports.scopedWith = exports.scoped = exports.runScoped = exports.runDrain = exports.runCollect = exports.run = exports.repeated = exports.readWithCause = exports.readWith = exports.readOrFail = exports.read = exports.provideSomeLayer = exports.provideService = exports.provideLayer = exports.provideContext = exports.pipeToOrFail = exports.pipeTo = exports.orElse = exports.orDieWith = exports.orDie = exports.never = exports.mergeWith = exports.mergeOutWith = exports.mergeOut = exports.mergeMap = exports.mergeAllWith = exports.mergeAllUnboundedWith = exports.mergeAllUnbounded = exports.mergeAll = exports.mapOutEffectPar = exports.mapOutEffect = exports.mapOut = exports.mapInputInEffect = exports.mapInputIn = exports.mapInputErrorEffect = exports.mapInputError = exports.mapInputEffect = exports.mapInputContext = exports.mapInput = exports.mapErrorCause = exports.mapError = exports.mapEffect = exports.map = exports.isChannelException = exports.isChannel = exports.interruptWhenDeferred = exports.interruptWhen = exports.identity = exports.fromQueue = exports.fromPubSubScoped = exports.fromPubSub = exports.fromOption = exports.fromInput = exports.fromEither = exports.fromEffect = exports.foldChannel = exports.foldCauseChannel = exports.flatten = exports.flatMap = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.ensuringWith = exports.ensuring = exports.emitCollect = exports.embedInput = exports.drain = exports.doneCollect = exports.contextWithEffect = exports.contextWithChannel = exports.contextWith = exports.context = exports.concatOut = exports.concatMapWithCustom = exports.concatMapWith = exports.concatMap = exports.concatAllWith = exports.concatAll = exports.collect = exports.catchAllCause = exports.catchAll = exports.bufferChunk = exports.buffer = exports.asVoid = exports.as = exports.acquireUseRelease = exports.acquireReleaseOut = exports.ChannelTypeId = exports.ChannelExceptionTypeId = exports.ChannelException = void 0;
exports.zipRight = exports.zipLeft = exports.zip = exports.writeChunk = exports.writeAll = exports.write = exports.withSpan = exports.void = exports.updateService = exports.unwrapScopedWith = exports.unwrapScoped = exports.unwrap = exports.toStream = void 0;
var channel = _interopRequireWildcard(require("./internal/channel.js"));
var core = _interopRequireWildcard(require("./internal/core-stream.js"));
var sink = _interopRequireWildcard(require("./internal/sink.js"));
var stream = _interopRequireWildcard(require("./internal/stream.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const ChannelTypeId = exports.ChannelTypeId = core.ChannelTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
const ChannelExceptionTypeId = exports.ChannelExceptionTypeId = channel.ChannelExceptionTypeId;
/**
 * @since 3.5.4
 * @category refinements
 */
const isChannel = exports.isChannel = core.isChannel;
/**
 * @since 2.0.0
 * @category constructors
 */
const acquireUseRelease = exports.acquireUseRelease = channel.acquireUseRelease;
/**
 * @since 2.0.0
 * @category constructors
 */
const acquireReleaseOut = exports.acquireReleaseOut = core.acquireReleaseOut;
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
const as = exports.as = channel.as;
/**
 * @since 2.0.0
 * @category mapping
 */
const asVoid = exports.asVoid = channel.asVoid;
/**
 * Creates a channel backed by a buffer. When the buffer is empty, the channel
 * will simply passthrough its input as output. However, when the buffer is
 * non-empty, the value inside the buffer will be passed along as output.
 *
 * @since 2.0.0
 * @category constructors
 */
const buffer = exports.buffer = channel.buffer;
/**
 * @since 2.0.0
 * @category constructors
 */
const bufferChunk = exports.bufferChunk = channel.bufferChunk;
/**
 * Returns a new channel that is the same as this one, except if this channel
 * errors for any typed error, then the returned channel will switch over to
 * using the fallback channel returned by the specified error handler.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchAll = exports.catchAll = channel.catchAll;
/**
 * Returns a new channel that is the same as this one, except if this channel
 * errors for any typed error, then the returned channel will switch over to
 * using the fallback channel returned by the specified error handler.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchAllCause = exports.catchAllCause = core.catchAllCause;
/**
 * Concat sequentially a channel of channels.
 *
 * @since 2.0.0
 * @category constructors
 */
const concatAll = exports.concatAll = core.concatAll;
/**
 * Concat sequentially a channel of channels.
 *
 * @since 2.0.0
 * @category constructors
 */
const concatAllWith = exports.concatAllWith = core.concatAllWith;
/**
 * Returns a new channel whose outputs are fed to the specified factory
 * function, which creates new channels in response. These new channels are
 * sequentially concatenated together, and all their outputs appear as outputs
 * of the newly returned channel.
 *
 * @since 2.0.0
 * @category utils
 */
const concatMap = exports.concatMap = channel.concatMap;
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
const concatMapWith = exports.concatMapWith = core.concatMapWith;
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
const concatMapWithCustom = exports.concatMapWithCustom = core.concatMapWithCustom;
/**
 * Returns a new channel, which is the same as this one, except its outputs
 * are filtered and transformed by the specified partial function.
 *
 * @since 2.0.0
 * @category utils
 */
const collect = exports.collect = channel.collect;
/**
 * Returns a new channel, which is the concatenation of all the channels that
 * are written out by this channel. This method may only be called on channels
 * that output other channels.
 *
 * @since 2.0.0
 * @category utils
 */
const concatOut = exports.concatOut = channel.concatOut;
/**
 * Returns a new channel which is the same as this one but applies the given
 * function to the input channel's done value.
 *
 * @since 2.0.0
 * @category utils
 */
const mapInput = exports.mapInput = channel.mapInput;
/**
 * Returns a new channel which is the same as this one but applies the given
 * effectual function to the input channel's done value.
 *
 * @since 2.0.0
 * @category utils
 */
const mapInputEffect = exports.mapInputEffect = channel.mapInputEffect;
/**
 * Returns a new channel which is the same as this one but applies the given
 * function to the input channel's error value.
 *
 * @since 2.0.0
 * @category utils
 */
const mapInputError = exports.mapInputError = channel.mapInputError;
/**
 * Returns a new channel which is the same as this one but applies the given
 * effectual function to the input channel's error value.
 *
 * @since 2.0.0
 * @category utils
 */
const mapInputErrorEffect = exports.mapInputErrorEffect = channel.mapInputErrorEffect;
/**
 * Returns a new channel which is the same as this one but applies the given
 * function to the input channel's output elements.
 *
 * @since 2.0.0
 * @category utils
 */
const mapInputIn = exports.mapInputIn = channel.mapInputIn;
/**
 * Returns a new channel which is the same as this one but applies the given
 * effectual function to the input channel's output elements.
 *
 * @since 2.0.0
 * @category utils
 */
const mapInputInEffect = exports.mapInputInEffect = channel.mapInputInEffect;
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
const doneCollect = exports.doneCollect = channel.doneCollect;
/**
 * Returns a new channel which reads all the elements from upstream's output
 * channel and ignores them, then terminates with the upstream result value.
 *
 * @since 2.0.0
 * @category utils
 */
const drain = exports.drain = channel.drain;
/**
 * Returns a new channel which connects the given `AsyncInputProducer` as
 * this channel's input.
 *
 * @since 2.0.0
 * @category utils
 */
const embedInput = exports.embedInput = core.embedInput;
/**
 * Returns a new channel that collects the output and terminal value of this
 * channel, which it then writes as output of the returned channel.
 *
 * @since 2.0.0
 * @category utils
 */
const emitCollect = exports.emitCollect = channel.emitCollect;
/**
 * Returns a new channel with an attached finalizer. The finalizer is
 * guaranteed to be executed so long as the channel begins execution (and
 * regardless of whether or not it completes).
 *
 * @since 2.0.0
 * @category utils
 */
const ensuring = exports.ensuring = channel.ensuring;
/**
 * Returns a new channel with an attached finalizer. The finalizer is
 * guaranteed to be executed so long as the channel begins execution (and
 * regardless of whether or not it completes).
 *
 * @since 2.0.0
 * @category utils
 */
const ensuringWith = exports.ensuringWith = core.ensuringWith;
/**
 * Accesses the whole context of the channel.
 *
 * @since 2.0.0
 * @category context
 */
const context = exports.context = channel.context;
/**
 * Accesses the context of the channel with the specified function.
 *
 * @since 2.0.0
 * @category context
 */
const contextWith = exports.contextWith = channel.contextWith;
/**
 * Accesses the context of the channel in the context of a channel.
 *
 * @since 2.0.0
 * @category context
 */
const contextWithChannel = exports.contextWithChannel = channel.contextWithChannel;
/**
 * Accesses the context of the channel in the context of an effect.
 *
 * @since 2.0.0
 * @category context
 */
const contextWithEffect = exports.contextWithEffect = channel.contextWithEffect;
/**
 * Constructs a channel that fails immediately with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = core.fail;
/**
 * Constructs a channel that succeeds immediately with the specified lazily
 * evaluated value.
 *
 * @since 2.0.0
 * @category constructors
 */
const failSync = exports.failSync = core.failSync;
/**
 * Constructs a channel that fails immediately with the specified `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCause = exports.failCause = core.failCause;
/**
 * Constructs a channel that succeeds immediately with the specified lazily
 * evaluated `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCauseSync = exports.failCauseSync = core.failCauseSync;
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
const flatMap = exports.flatMap = core.flatMap;
/**
 * Returns a new channel, which flattens the terminal value of this channel.
 * This function may only be called if the terminal value of this channel is
 * another channel of compatible types.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flatten = exports.flatten = channel.flatten;
/**
 * Folds over the result of this channel.
 *
 * @since 2.0.0
 * @category utils
 */
const foldChannel = exports.foldChannel = channel.foldChannel;
/**
 * Folds over the result of this channel including any cause of termination.
 *
 * @since 2.0.0
 * @category utils
 */
const foldCauseChannel = exports.foldCauseChannel = core.foldCauseChannel;
/**
 * Use an effect to end a channel.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffect = exports.fromEffect = core.fromEffect;
/**
 * Constructs a channel from an `Either`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEither = exports.fromEither = channel.fromEither;
/**
 * Construct a `Channel` from an `AsyncInputConsumer`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromInput = exports.fromInput = channel.fromInput;
/**
 * Construct a `Channel` from a `PubSub`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromPubSub = exports.fromPubSub = channel.fromPubSub;
/**
 * Construct a `Channel` from a `PubSub` within a scoped effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromPubSubScoped = exports.fromPubSubScoped = channel.fromPubSubScoped;
/**
 * Construct a `Channel` from an `Option`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromOption = exports.fromOption = channel.fromOption;
/**
 * Construct a `Channel` from a `Queue`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromQueue = exports.fromQueue = channel.fromQueue;
/**
 * @since 2.0.0
 * @category constructors
 */
const identity = exports.identity = channel.identityChannel;
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
const interruptWhen = exports.interruptWhen = channel.interruptWhen;
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
const interruptWhenDeferred = exports.interruptWhenDeferred = channel.interruptWhenDeferred;
/**
 * Returns a new channel, which is the same as this one, except the terminal
 * value of the returned channel is created by applying the specified function
 * to the terminal value of this channel.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = channel.map;
/**
 * Returns a new channel, which is the same as this one, except the terminal
 * value of the returned channel is created by applying the specified
 * effectful function to the terminal value of this channel.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapEffect = exports.mapEffect = channel.mapEffect;
/**
 * Returns a new channel, which is the same as this one, except the failure
 * value of the returned channel is created by applying the specified function
 * to the failure value of this channel.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapError = exports.mapError = channel.mapError;
/**
 * A more powerful version of `mapError` which also surfaces the `Cause`
 * of the channel failure.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapErrorCause = exports.mapErrorCause = channel.mapErrorCause;
/**
 * Maps the output of this channel using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapOut = exports.mapOut = channel.mapOut;
/**
 * Creates a channel that is like this channel but the given effectful function
 * gets applied to each emitted output element.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapOutEffect = exports.mapOutEffect = channel.mapOutEffect;
/**
 * Creates a channel that is like this channel but the given Effect function gets
 * applied to each emitted output element, taking `n` elements at once and
 * mapping them in parallel.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapOutEffectPar = exports.mapOutEffectPar = channel.mapOutEffectPar;
/**
 * @since 2.0.0
 * @category utils
 */
const mergeAll = exports.mergeAll = channel.mergeAll;
/**
 * @since 2.0.0
 * @category utils
 */
const mergeAllUnbounded = exports.mergeAllUnbounded = channel.mergeAllUnbounded;
/**
 * @since 2.0.0
 * @category utils
 */
const mergeAllUnboundedWith = exports.mergeAllUnboundedWith = channel.mergeAllUnboundedWith;
/**
 * @since 2.0.0
 * @category utils
 */
const mergeAllWith = exports.mergeAllWith = channel.mergeAllWith;
/**
 * Returns a new channel which creates a new channel for each emitted element
 * and merges some of them together. Different merge strategies control what
 * happens if there are more than the given maximum number of channels gets
 * created. See `Channel.mergeAll`.
 *
 * @since 2.0.0
 * @category mapping
 */
const mergeMap = exports.mergeMap = channel.mergeMap;
/**
 * Returns a new channel which merges a number of channels emitted by this
 * channel using the back pressuring merge strategy. See `Channel.mergeAll`.
 *
 * @since 2.0.0
 * @category utils
 */
const mergeOut = exports.mergeOut = channel.mergeOut;
/**
 * Returns a new channel which merges a number of channels emitted by this
 * channel using the back pressuring merge strategy and uses a given function
 * to merge each completed subchannel's result value. See
 * `Channel.mergeAll`.
 *
 * @since 2.0.0
 * @category utils
 */
const mergeOutWith = exports.mergeOutWith = channel.mergeOutWith;
/**
 * Returns a new channel, which is the merge of this channel and the specified
 * channel, where the behavior of the returned channel on left or right early
 * termination is decided by the specified `leftDone` and `rightDone` merge
 * decisions.
 *
 * @since 2.0.0
 * @category utils
 */
const mergeWith = exports.mergeWith = channel.mergeWith;
/**
 * Returns a channel that never completes
 *
 * @since 2.0.0
 * @category constructors
 */
const never = exports.never = channel.never;
/**
 * Translates channel failure into death of the fiber, making all failures
 * unchecked and not a part of the type of the channel.
 *
 * @since 2.0.0
 * @category error handling
 */
const orDie = exports.orDie = channel.orDie;
/**
 * Keeps none of the errors, and terminates the fiber with them, using the
 * specified function to convert the `OutErr` into a defect.
 *
 * @since 2.0.0
 * @category error handling
 */
const orDieWith = exports.orDieWith = channel.orDieWith;
/**
 * Returns a new channel that will perform the operations of this one, until
 * failure, and then it will switch over to the operations of the specified
 * fallback channel.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElse = exports.orElse = channel.orElse;
/**
 * Returns a new channel that pipes the output of this channel into the
 * specified channel. The returned channel has the input type of this channel,
 * and the output type of the specified channel, terminating with the value of
 * the specified channel.
 *
 * @since 2.0.0
 * @category utils
 */
const pipeTo = exports.pipeTo = core.pipeTo;
/**
 * Returns a new channel that pipes the output of this channel into the
 * specified channel and preserves this channel's failures without providing
 * them to the other channel for observation.
 *
 * @since 2.0.0
 * @category utils
 */
const pipeToOrFail = exports.pipeToOrFail = channel.pipeToOrFail;
/**
 * Provides the channel with its required context, which eliminates its
 * dependency on `Env`.
 *
 * @since 2.0.0
 * @category context
 */
const provideContext = exports.provideContext = core.provideContext;
/**
 * Provides a layer to the channel, which translates it to another level.
 *
 * @since 2.0.0
 * @category context
 */
const provideLayer = exports.provideLayer = channel.provideLayer;
/**
 * Transforms the context being provided to the channel with the specified
 * function.
 *
 * @since 2.0.0
 * @category context
 */
const mapInputContext = exports.mapInputContext = channel.mapInputContext;
/**
 * Splits the context into two parts, providing one part using the
 * specified layer and leaving the remainder `Env0`.
 *
 * @since 2.0.0
 * @category context
 */
const provideSomeLayer = exports.provideSomeLayer = channel.provideSomeLayer;
/**
 * Provides the effect with the single service it requires. If the effect
 * requires more than one service use `provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
const provideService = exports.provideService = channel.provideService;
/**
 * @since 2.0.0
 * @category constructors
 */
const read = exports.read = channel.read;
/**
 * @since 2.0.0
 * @category constructors
 */
const readOrFail = exports.readOrFail = core.readOrFail;
/**
 * @since 2.0.0
 * @category constructors
 */
const readWith = exports.readWith = core.readWith;
/**
 * @since 2.0.0
 * @category constructors
 */
const readWithCause = exports.readWithCause = core.readWithCause;
/**
 * Creates a channel which repeatedly runs this channel.
 *
 * @since 2.0.0
 * @category utils
 */
const repeated = exports.repeated = channel.repeated;
/**
 * Runs a channel until the end is received.
 *
 * @since 2.0.0
 * @category destructors
 */
const run = exports.run = channel.run;
/**
 * Run the channel until it finishes with a done value or fails with an error
 * and collects its emitted output elements.
 *
 * The channel must not read any input.
 *
 * @since 2.0.0
 * @category destructors
 */
const runCollect = exports.runCollect = channel.runCollect;
/**
 * Runs a channel until the end is received.
 *
 * @since 2.0.0
 * @category destructors
 */
const runDrain = exports.runDrain = channel.runDrain;
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
const runScoped = exports.runScoped = channel.runScoped;
/**
 * Use a scoped effect to emit an output element.
 *
 * @since 2.0.0
 * @category constructors
 */
const scoped = exports.scoped = channel.scoped;
/**
 * Use a function that receives a scope and returns an effect to emit an output
 * element. The output element will be the result of the returned effect, if
 * successful.
 *
 * @since 3.11.0
 * @category constructors
 */
const scopedWith = exports.scopedWith = channel.scopedWith;
/**
 * Splits strings on newlines. Handles both Windows newlines (`\r\n`) and UNIX
 * newlines (`\n`).
 *
 * @since 2.0.0
 * @category combinators
 */
const splitLines = exports.splitLines = channel.splitLines;
/**
 * Constructs a channel that succeeds immediately with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = core.succeed;
/**
 * Lazily constructs a channel from the given side effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const suspend = exports.suspend = core.suspend;
/**
 * Constructs a channel that succeeds immediately with the specified lazy value.
 *
 * @since 2.0.0
 * @category constructors
 */
const sync = exports.sync = core.sync;
/**
 * Converts a `Channel` to a `PubSub`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toPubSub = exports.toPubSub = channel.toPubSub;
/**
 * Returns a scoped `Effect` that can be used to repeatedly pull elements from
 * the constructed `Channel`. The pull effect fails with the channel's failure
 * in case the channel fails, or returns either the channel's done value or an
 * emitted element.
 *
 * @since 2.0.0
 * @category destructors
 */
const toPull = exports.toPull = channel.toPull;
/**
 * Returns an `Effect` that can be used to repeatedly pull elements from the
 * constructed `Channel` within the provided `Scope`. The pull effect fails
 * with the channel's failure in case the channel fails, or returns either the
 * channel's done value or an emitted element.
 *
 * @since 3.11.0
 * @category destructors
 */
const toPullIn = exports.toPullIn = channel.toPullIn;
/**
 * Converts a `Channel` to a `Queue`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toQueue = exports.toQueue = channel.toQueue;
/** Converts this channel to a `Sink`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toSink = exports.toSink = sink.channelToSink;
/**
 * Converts this channel to a `Stream`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toStream = exports.toStream = stream.channelToStream;
const void_ = exports.void = core.void;
/**
 * Constructs a `Channel` from an effect that will result in a `Channel` if
 * successful.
 *
 * @since 2.0.0
 * @category constructors
 */
const unwrap = exports.unwrap = channel.unwrap;
/**
 * Constructs a `Channel` from a scoped effect that will result in a
 * `Channel` if successful.
 *
 * @since 2.0.0
 * @category constructors
 */
const unwrapScoped = exports.unwrapScoped = channel.unwrapScoped;
/**
 * Constructs a `Channel` from a function which receives a `Scope` and returns
 * an effect that will result in a `Channel` if successful.
 *
 * @since 3.11.0
 * @category constructors
 */
const unwrapScopedWith = exports.unwrapScopedWith = channel.unwrapScopedWith;
/**
 * Updates a service in the context of this channel.
 *
 * @since 2.0.0
 * @category context
 */
const updateService = exports.updateService = channel.updateService;
/**
 * Wraps the channel with a new span for tracing.
 *
 * @since 2.0.0
 * @category tracing
 */
const withSpan = exports.withSpan = channel.withSpan;
/**
 * Writes a single value to the channel.
 *
 * @since 2.0.0
 * @category constructors
 */
const write = exports.write = core.write;
/**
 * Writes a sequence of values to the channel.
 *
 * @since 2.0.0
 * @category constructors
 */
const writeAll = exports.writeAll = channel.writeAll;
/**
 * Writes a `Chunk` of values to the channel.
 *
 * @since 2.0.0
 * @category constructors
 */
const writeChunk = exports.writeChunk = channel.writeChunk;
/**
 * Returns a new channel that is the sequential composition of this channel
 * and the specified channel. The returned channel terminates with a tuple of
 * the terminal values of both channels.
 *
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = channel.zip;
/**
 * Returns a new channel that is the sequential composition of this channel
 * and the specified channel. The returned channel terminates with the
 * terminal value of this channel.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipLeft = exports.zipLeft = channel.zipLeft;
/**
 * Returns a new channel that is the sequential composition of this channel
 * and the specified channel. The returned channel terminates with the
 * terminal value of that channel.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipRight = exports.zipRight = channel.zipRight;
/**
 * Represents a generic checked exception which occurs when a `Channel` is
 * executed.
 *
 * @since 2.0.0
 * @category errors
 */
const ChannelException = exports.ChannelException = channel.ChannelException;
/**
 * Returns `true` if the specified value is an `ChannelException`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isChannelException = exports.isChannelException = channel.isChannelException;
//# sourceMappingURL=Channel.js.map
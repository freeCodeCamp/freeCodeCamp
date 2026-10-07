import * as Cause from "../Cause.js"
import type * as Channel from "../Channel.js"
import type * as ChildExecutorDecision from "../ChildExecutorDecision.js"
import * as Chunk from "../Chunk.js"
import type * as Context from "../Context.js"
import * as Effect from "../Effect.js"
import * as Either from "../Either.js"
import type * as Exit from "../Exit.js"
import { constVoid, dual, identity } from "../Function.js"
import type { LazyArg } from "../Function.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type * as SingleProducerAsyncInput from "../SingleProducerAsyncInput.js"
import type * as UpstreamPullRequest from "../UpstreamPullRequest.js"
import type * as UpstreamPullStrategy from "../UpstreamPullStrategy.js"
import * as childExecutorDecision from "./channel/childExecutorDecision.js"
import type { ErasedContinuationK } from "./channel/continuation.js"
import { ContinuationKImpl } from "./channel/continuation.js"
import * as upstreamPullStrategy from "./channel/upstreamPullStrategy.js"
import * as OpCodes from "./opCodes/channel.js"

/** @internal */
const ChannelSymbolKey = "effect/Channel"

/** @internal */
export const ChannelTypeId: Channel.ChannelTypeId = Symbol.for(
  ChannelSymbolKey
) as Channel.ChannelTypeId

const channelVariance = {
  /* c8 ignore next */
  _Env: (_: never) => _,
  /* c8 ignore next */
  _InErr: (_: unknown) => _,
  /* c8 ignore next */
  _InElem: (_: unknown) => _,
  /* c8 ignore next */
  _InDone: (_: unknown) => _,
  /* c8 ignore next */
  _OutErr: (_: never) => _,
  /* c8 ignore next */
  _OutElem: (_: never) => _,
  /* c8 ignore next */
  _OutDone: (_: never) => _
}

/** @internal */
const proto = {
  [ChannelTypeId]: channelVariance,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
type ErasedChannel = Channel.Channel<never, unknown, never, unknown, never, unknown>

/** @internal */
export type Op<Tag extends string, Body = {}> =
  & ErasedChannel
  & Body
  & { readonly _tag: Tag }

export type Primitive =
  | BracketOut
  | Bridge
  | ConcatAll
  | Emit
  | Ensuring
  | Fail
  | Fold
  | FromEffect
  | PipeTo
  | Provide
  | Read
  | Succeed
  | SucceedNow
  | Suspend

/** @internal */
export interface BracketOut extends
  Op<OpCodes.OP_BRACKET_OUT, {
    acquire(): Effect.Effect<unknown, unknown, unknown>
    finalizer(resource: unknown, exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, unknown, unknown>
  }>
{}

/** @internal */
export interface Bridge extends
  Op<OpCodes.OP_BRIDGE, {
    readonly input: SingleProducerAsyncInput.AsyncInputProducer<unknown, unknown, unknown>
    readonly channel: ErasedChannel
  }>
{}

/** @internal */
export interface ConcatAll extends
  Op<OpCodes.OP_CONCAT_ALL, {
    combineInners(outDone: unknown, outDone2: unknown): unknown
    combineAll(outDone: unknown, outDone2: unknown): unknown
    onPull(
      request: UpstreamPullRequest.UpstreamPullRequest<unknown>
    ): UpstreamPullStrategy.UpstreamPullStrategy<unknown>
    onEmit(outElem: unknown): ChildExecutorDecision.ChildExecutorDecision
    value(): ErasedChannel
    k(outElem: unknown): ErasedChannel
  }>
{}

/** @internal */
export interface Emit extends
  Op<OpCodes.OP_EMIT, {
    readonly out: unknown
  }>
{}

/** @internal */
export interface Ensuring extends
  Op<OpCodes.OP_ENSURING, {
    readonly channel: ErasedChannel
    finalizer(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, unknown, unknown>
  }>
{}

/** @internal */
export interface Fail extends
  Op<OpCodes.OP_FAIL, {
    error(): Cause.Cause<unknown>
  }>
{}

/** @internal */
export interface Fold extends
  Op<OpCodes.OP_FOLD, {
    readonly channel: ErasedChannel
    readonly k: ErasedContinuationK
  }>
{}

/** @internal */
export interface FromEffect extends
  Op<OpCodes.OP_FROM_EFFECT, {
    effect(): Effect.Effect<unknown, unknown, unknown>
  }>
{}

/** @internal */
export interface PipeTo extends
  Op<OpCodes.OP_PIPE_TO, {
    left(): ErasedChannel
    right(): ErasedChannel
  }>
{}

/** @internal */
export interface Provide extends
  Op<OpCodes.OP_PROVIDE, {
    context(): Context.Context<unknown>
    readonly inner: ErasedChannel
  }>
{}

/** @internal */
export interface Read extends
  Op<OpCodes.OP_READ, {
    more(input: unknown): ErasedChannel
    readonly done: ErasedContinuationK
  }>
{}

/** @internal */
export interface Succeed extends
  Op<OpCodes.OP_SUCCEED, {
    evaluate(): unknown
  }>
{}

/** @internal */
export interface SucceedNow extends
  Op<OpCodes.OP_SUCCEED_NOW, {
    readonly terminal: unknown
  }>
{}

/** @internal */
export interface Suspend extends
  Op<OpCodes.OP_SUSPEND, {
    channel(): ErasedChannel
  }>
{}

/** @internal */
export const isChannel = (u: unknown): u is Channel.Channel<
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown
> => hasProperty(u, ChannelTypeId) || Effect.isEffect(u)

/** @internal */
export const acquireReleaseOut = dual<
  <Z, R2>(
    release: (z: Z, e: Exit.Exit<unknown, unknown>) => Effect.Effect<unknown, never, R2>
  ) => <E, R>(self: Effect.Effect<Z, E, R>) => Channel.Channel<Z, unknown, E, unknown, void, unknown, R | R2>,
  <Z, E, R, R2>(
    self: Effect.Effect<Z, E, R>,
    release: (z: Z, e: Exit.Exit<unknown, unknown>) => Effect.Effect<unknown, never, R2>
  ) => Channel.Channel<Z, unknown, E, unknown, void, unknown, R | R2>
>(2, (self, release) => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_BRACKET_OUT
  op.acquire = () => self
  op.finalizer = release
  return op
})

/** @internal */
export const catchAllCause = dual<
  <OutErr, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    f: (cause: Cause.Cause<OutErr>) => Channel.Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
  ) => <OutElem, InElem, InErr, OutDone, InDone, Env>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel.Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone1 | OutDone,
    InDone & InDone1,
    Env1 | Env
  >,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (cause: Cause.Cause<OutErr>) => Channel.Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
  ) => Channel.Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone1 | OutDone,
    InDone & InDone1,
    Env1 | Env
  >
>(
  2,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (cause: Cause.Cause<OutErr>) => Channel.Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone1, InDone1, Env1>
  ): Channel.Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr1,
    InErr & InErr1,
    OutDone | OutDone1,
    InDone & InDone1,
    Env | Env1
  > => {
    const op = Object.create(proto)
    op._tag = OpCodes.OP_FOLD
    op.channel = self
    op.k = new ContinuationKImpl(succeed, f)
    return op
  }
)

/** @internal */
export const collectElements = <Env, InErr, InElem, InDone, OutErr, OutElem, OutDone>(
  self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
): Channel.Channel<never, InElem, OutErr, InErr, [Chunk.Chunk<OutElem>, OutDone], InDone, Env> => {
  return suspend(() => {
    const builder: Array<OutElem> = []
    return flatMap(
      pipeTo(self, collectElementsReader(builder)),
      (value) => sync(() => [Chunk.fromIterable(builder), value])
    )
  })
}

/** @internal */
const collectElementsReader = <OutErr, OutElem, OutDone>(
  builder: Array<OutElem>
): Channel.Channel<never, OutElem, OutErr, OutErr, OutDone, OutDone> =>
  readWith({
    onInput: (outElem) =>
      flatMap(
        sync(() => {
          builder.push(outElem)
        }),
        () => collectElementsReader<OutErr, OutElem, OutDone>(builder)
      ),
    onFailure: fail,
    onDone: succeedNow
  })

/** @internal */
export const concatAll = <OutElem, InElem, OutErr, InErr, InDone, Env>(
  channels: Channel.Channel<
    Channel.Channel<OutElem, InElem, OutErr, InErr, any, InDone, Env>,
    InElem,
    OutErr,
    InErr,
    any,
    InDone,
    Env
  >
): Channel.Channel<OutElem, InElem, OutErr, InErr, any, InDone, Env> => concatAllWith(channels, constVoid, constVoid)

/** @internal */
export const concatAllWith = <
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
  channels: Channel.Channel<
    Channel.Channel<OutElem, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    InElem,
    OutErr,
    InErr,
    OutDone2,
    InDone,
    Env
  >,
  f: (o: OutDone, o1: OutDone) => OutDone,
  g: (o: OutDone, o2: OutDone2) => OutDone3
): Channel.Channel<
  OutElem,
  InElem & InElem2,
  OutErr | OutErr2,
  InErr & InErr2,
  OutDone3,
  InDone & InDone2,
  Env | Env2
> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_CONCAT_ALL
  op.combineInners = f
  op.combineAll = g
  op.onPull = () => upstreamPullStrategy.PullAfterNext(Option.none())
  op.onEmit = () => childExecutorDecision.Continue
  op.value = () => channels
  op.k = identity
  return op
}

/** @internal */
export const concatMapWith = dual<
  <OutElem, OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2, OutDone2, OutDone3>(
    f: (o: OutElem) => Channel.Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3
  ) => <Env, InErr, InElem, InDone, OutErr>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
  ) => Channel.Channel<
    OutElem2,
    InElem & InElem2,
    OutErr2 | OutErr,
    InErr & InErr2,
    OutDone3,
    InDone & InDone2,
    Env2 | Env
  >,
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
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>,
    f: (o: OutElem) => Channel.Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3
  ) => Channel.Channel<
    OutElem2,
    InElem & InElem2,
    OutErr2 | OutErr,
    InErr & InErr2,
    OutDone3,
    InDone & InDone2,
    Env2 | Env
  >
>(4, <
  Env,
  InErr,
  InElem,
  InDone,
  OutErr,
  OutElem,
  OutElem2,
  OutDone,
  OutDone2,
  OutDone3,
  Env2,
  InErr2,
  InElem2,
  InDone2,
  OutErr2
>(
  self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>,
  f: (
    o: OutElem
  ) => Channel.Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
  g: (o: OutDone, o1: OutDone) => OutDone,
  h: (o: OutDone, o2: OutDone2) => OutDone3
): Channel.Channel<
  OutElem2,
  InElem & InElem2,
  OutErr | OutErr2,
  InErr & InErr2,
  OutDone3,
  InDone & InDone2,
  Env | Env2
> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_CONCAT_ALL
  op.combineInners = g
  op.combineAll = h
  op.onPull = () => upstreamPullStrategy.PullAfterNext(Option.none())
  op.onEmit = () => childExecutorDecision.Continue
  op.value = () => self
  op.k = f
  return op
})

/** @internal */
export const concatMapWithCustom = dual<
  <OutElem, OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2, OutDone2, OutDone3>(
    f: (o: OutElem) => Channel.Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3,
    onPull: (
      upstreamPullRequest: UpstreamPullRequest.UpstreamPullRequest<OutElem>
    ) => UpstreamPullStrategy.UpstreamPullStrategy<OutElem2>,
    onEmit: (elem: OutElem2) => ChildExecutorDecision.ChildExecutorDecision
  ) => <Env, InErr, InElem, InDone, OutErr>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>
  ) => Channel.Channel<
    OutElem2,
    InElem & InElem2,
    OutErr2 | OutErr,
    InErr & InErr2,
    OutDone3,
    InDone & InDone2,
    Env2 | Env
  >,
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
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>,
    f: (o: OutElem) => Channel.Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
    g: (o: OutDone, o1: OutDone) => OutDone,
    h: (o: OutDone, o2: OutDone2) => OutDone3,
    onPull: (
      upstreamPullRequest: UpstreamPullRequest.UpstreamPullRequest<OutElem>
    ) => UpstreamPullStrategy.UpstreamPullStrategy<OutElem2>,
    onEmit: (elem: OutElem2) => ChildExecutorDecision.ChildExecutorDecision
  ) => Channel.Channel<
    OutElem2,
    InElem & InElem2,
    OutErr2 | OutErr,
    InErr & InErr2,
    OutDone3,
    InDone & InDone2,
    Env2 | Env
  >
>(6, <
  Env,
  InErr,
  InElem,
  InDone,
  OutErr,
  OutElem,
  OutElem2,
  OutDone,
  OutDone2,
  OutDone3,
  Env2,
  InErr2,
  InElem2,
  InDone2,
  OutErr2
>(
  self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone2, InDone, Env>,
  f: (
    o: OutElem
  ) => Channel.Channel<OutElem2, InElem2, OutErr2, InErr2, OutDone, InDone2, Env2>,
  g: (o: OutDone, o1: OutDone) => OutDone,
  h: (o: OutDone, o2: OutDone2) => OutDone3,
  onPull: (
    upstreamPullRequest: UpstreamPullRequest.UpstreamPullRequest<OutElem>
  ) => UpstreamPullStrategy.UpstreamPullStrategy<OutElem2>,
  onEmit: (elem: OutElem2) => ChildExecutorDecision.ChildExecutorDecision
): Channel.Channel<
  OutElem2,
  InElem & InElem2,
  OutErr | OutErr2,
  InErr & InErr2,
  OutDone3,
  InDone & InDone2,
  Env | Env2
> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_CONCAT_ALL
  op.combineInners = g
  op.combineAll = h
  op.onPull = onPull
  op.onEmit = onEmit
  op.value = () => self
  op.k = f
  return op
})

/** @internal */
export const embedInput = dual<
  <InErr, InElem, InDone>(
    input: SingleProducerAsyncInput.AsyncInputProducer<InErr, InElem, InDone>
  ) => <OutElem, OutErr, OutDone, Env>(
    self: Channel.Channel<OutElem, unknown, OutErr, unknown, OutDone, unknown, Env>
  ) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
  <OutElem, OutErr, OutDone, Env, InErr, InElem, InDone>(
    self: Channel.Channel<OutElem, unknown, OutErr, unknown, OutDone, unknown, Env>,
    input: SingleProducerAsyncInput.AsyncInputProducer<InErr, InElem, InDone>
  ) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
>(
  2,
  <OutElem, OutErr, OutDone, Env, InErr, InElem, InDone>(
    self: Channel.Channel<OutElem, unknown, OutErr, unknown, OutDone, unknown, Env>,
    input: SingleProducerAsyncInput.AsyncInputProducer<InErr, InElem, InDone>
  ): Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env> => {
    const op = Object.create(proto)
    op._tag = OpCodes.OP_BRIDGE
    op.input = input
    op.channel = self
    return op
  }
)

/** @internal */
export const ensuringWith = dual<
  <OutDone, OutErr, Env2>(
    finalizer: (e: Exit.Exit<OutDone, OutErr>) => Effect.Effect<unknown, never, Env2>
  ) => <OutElem, InElem, InErr, InDone, Env>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env2 | Env>,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, Env2>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    finalizer: (e: Exit.Exit<OutDone, OutErr>) => Effect.Effect<unknown, never, Env2>
  ) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env2 | Env>
>(
  2,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, Env2>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    finalizer: (e: Exit.Exit<OutDone, OutErr>) => Effect.Effect<unknown, never, Env2>
  ): Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env | Env2> => {
    const op = Object.create(proto)
    op._tag = OpCodes.OP_ENSURING
    op.channel = self
    op.finalizer = finalizer
    return op
  }
)

/** @internal */
export const fail = <E>(error: E): Channel.Channel<never, unknown, E, unknown, never, unknown> =>
  failCause(Cause.fail(error))

/** @internal */
export const failSync = <E>(
  evaluate: LazyArg<E>
): Channel.Channel<never, unknown, E, unknown, never, unknown> => failCauseSync(() => Cause.fail(evaluate()))

/** @internal */
export const failCause = <E>(
  cause: Cause.Cause<E>
): Channel.Channel<never, unknown, E, unknown, never, unknown> => failCauseSync(() => cause)

/** @internal */
export const failCauseSync = <E>(
  evaluate: LazyArg<Cause.Cause<E>>
): Channel.Channel<never, unknown, E, unknown, never, unknown> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_FAIL
  op.error = evaluate
  return op
}

/** @internal */
export const flatMap = dual<
  <OutDone, OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>(
    f: (d: OutDone) => Channel.Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>
  ) => <OutElem, InElem, OutErr, InErr, InDone, Env>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel.Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1 | OutErr,
    InErr & InErr1,
    OutDone2,
    InDone & InDone1,
    Env1 | Env
  >,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (d: OutDone) => Channel.Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>
  ) => Channel.Channel<
    OutElem1 | OutElem,
    InElem & InElem1,
    OutErr1 | OutErr,
    InErr & InErr1,
    OutDone2,
    InDone & InDone1,
    Env1 | Env
  >
>(
  2,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    f: (d: OutDone) => Channel.Channel<OutElem1, InElem1, OutErr1, InErr1, OutDone2, InDone1, Env1>
  ): Channel.Channel<
    OutElem | OutElem1,
    InElem & InElem1,
    OutErr | OutErr1,
    InErr & InErr1,
    OutDone2,
    InDone & InDone1,
    Env | Env1
  > => {
    const op = Object.create(proto)
    op._tag = OpCodes.OP_FOLD
    op.channel = self
    op.k = new ContinuationKImpl(f, failCause)
    return op
  }
)

/** @internal */
export const foldCauseChannel = dual<
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
      ) => Channel.Channel<OutElem1, InElem1, OutErr2, InErr1, OutDone2, InDone1, Env1>
      readonly onSuccess: (o: OutDone) => Channel.Channel<OutElem2, InElem2, OutErr3, InErr2, OutDone3, InDone2, Env2>
    }
  ) => <Env, InErr, InElem, InDone, OutElem>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel.Channel<
    OutElem1 | OutElem2 | OutElem,
    InElem & InElem1 & InElem2,
    OutErr2 | OutErr3,
    InErr & InErr1 & InErr2,
    OutDone2 | OutDone3,
    InDone & InDone1 & InDone2,
    Env1 | Env2 | Env
  >,
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
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    options: {
      readonly onFailure: (
        c: Cause.Cause<OutErr>
      ) => Channel.Channel<OutElem1, InElem1, OutErr2, InErr1, OutDone2, InDone1, Env1>
      readonly onSuccess: (o: OutDone) => Channel.Channel<OutElem2, InElem2, OutErr3, InErr2, OutDone3, InDone2, Env2>
    }
  ) => Channel.Channel<
    OutElem1 | OutElem2 | OutElem,
    InElem & InElem1 & InElem2,
    OutErr2 | OutErr3,
    InErr & InErr1 & InErr2,
    OutDone2 | OutDone3,
    InDone & InDone1 & InDone2,
    Env1 | Env2 | Env
  >
>(
  2,
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
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    options: {
      readonly onFailure: (
        c: Cause.Cause<OutErr>
      ) => Channel.Channel<OutElem1, InElem1, OutErr2, InErr1, OutDone2, InDone1, Env1>
      readonly onSuccess: (o: OutDone) => Channel.Channel<OutElem2, InElem2, OutErr3, InErr2, OutDone3, InDone2, Env2>
    }
  ): Channel.Channel<
    OutElem | OutElem1 | OutElem2,
    InElem & InElem1 & InElem2,
    OutErr2 | OutErr3,
    InErr & InErr1 & InErr2,
    OutDone2 | OutDone3,
    InDone & InDone1 & InDone2,
    Env | Env1 | Env2
  > => {
    const op = Object.create(proto)
    op._tag = OpCodes.OP_FOLD
    op.channel = self
    op.k = new ContinuationKImpl(options.onSuccess, options.onFailure as any)
    return op
  }
)

/** @internal */
export const fromEffect = <A, E, R>(
  effect: Effect.Effect<A, E, R>
): Channel.Channel<never, unknown, E, unknown, A, unknown, R> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_FROM_EFFECT
  op.effect = () => effect
  return op
}

/** @internal */
export const pipeTo = dual<
  <OutElem2, OutElem, OutErr2, OutErr, OutDone2, OutDone, Env2>(
    that: Channel.Channel<OutElem2, OutElem, OutErr2, OutErr, OutDone2, OutDone, Env2>
  ) => <InElem, InErr, InDone, Env>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel.Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env2 | Env>,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem2, OutErr2, OutDone2, Env2>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: Channel.Channel<OutElem2, OutElem, OutErr2, OutErr, OutDone2, OutDone, Env2>
  ) => Channel.Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env2 | Env>
>(
  2,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env, OutElem2, OutErr2, OutDone2, Env2>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    that: Channel.Channel<OutElem2, OutElem, OutErr2, OutErr, OutDone2, OutDone, Env2>
  ): Channel.Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env | Env2> => {
    const op = Object.create(proto)
    op._tag = OpCodes.OP_PIPE_TO
    op.left = () => self
    op.right = () => that
    return op
  }
)

/** @internal */
export const provideContext = dual<
  <Env>(
    env: Context.Context<Env>
  ) => <OutElem, InElem, OutErr, InErr, OutDone, InDone>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
  ) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone>,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    env: Context.Context<Env>
  ) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone>
>(
  2,
  <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
    self: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    env: Context.Context<Env>
  ): Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone> => {
    const op = Object.create(proto)
    op._tag = OpCodes.OP_PROVIDE
    op.context = () => env
    op.inner = self
    return op
  }
)

/** @internal */
export const readOrFail = <E, In = unknown>(
  error: E
): Channel.Channel<never, In, E, unknown, In, unknown> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_READ
  op.more = succeed
  op.done = new ContinuationKImpl(() => fail(error), () => fail(error))
  return op
}

/** @internal */
export const readWith = <
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
    readonly onInput: (input: InElem) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
    readonly onFailure: (error: InErr) => Channel.Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env2>
    readonly onDone: (done: InDone) => Channel.Channel<OutElem3, InElem, OutErr3, InErr, OutDone3, InDone, Env3>
  }
): Channel.Channel<
  OutElem | OutElem2 | OutElem3,
  InElem,
  OutErr | OutErr2 | OutErr3,
  InErr,
  OutDone | OutDone2 | OutDone3,
  InDone,
  Env | Env2 | Env3
> =>
  readWithCause({
    onInput: options.onInput,
    onFailure: (cause) => Either.match(Cause.failureOrCause(cause), { onLeft: options.onFailure, onRight: failCause }),
    onDone: options.onDone
  })

/** @internal */
export const readWithCause = <
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
    readonly onInput: (input: InElem) => Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>
    readonly onFailure: (
      cause: Cause.Cause<InErr>
    ) => Channel.Channel<OutElem2, InElem, OutErr2, InErr, OutDone2, InDone, Env2>
    readonly onDone: (done: InDone) => Channel.Channel<OutElem3, InElem, OutErr3, InErr, OutDone3, InDone, Env3>
  }
): Channel.Channel<
  OutElem | OutElem2 | OutElem3,
  InElem,
  OutErr | OutErr2 | OutErr3,
  InErr,
  OutDone | OutDone2 | OutDone3,
  InDone,
  Env | Env2 | Env3
> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_READ
  op.more = options.onInput
  op.done = new ContinuationKImpl(options.onDone, options.onFailure as any)
  return op
}

/** @internal */
export const succeed = <A>(
  value: A
): Channel.Channel<never, unknown, never, unknown, A, unknown> => sync(() => value)

/** @internal */
export const succeedNow = <OutDone>(
  result: OutDone
): Channel.Channel<never, unknown, never, unknown, OutDone, unknown> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_SUCCEED_NOW
  op.terminal = result
  return op
}

/** @internal */
export const suspend = <OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>(
  evaluate: LazyArg<Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>>
): Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_SUSPEND
  op.channel = evaluate
  return op
}

export const sync = <OutDone>(
  evaluate: LazyArg<OutDone>
): Channel.Channel<never, unknown, never, unknown, OutDone, unknown> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_SUCCEED
  op.evaluate = evaluate
  return op
}

const void_: Channel.Channel<never> = succeedNow(void 0)
export {
  /** @internal */
  void_ as void
}

/** @internal */
export const write = <OutElem>(
  out: OutElem
): Channel.Channel<OutElem, unknown, never, unknown, void, unknown> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_EMIT
  op.out = out
  return op
}

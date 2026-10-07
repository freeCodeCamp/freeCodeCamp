import type * as Cause from "../../Cause.js"
import type * as Channel from "../../Channel.js"
import type * as Effect from "../../Effect.js"
import * as Exit from "../../Exit.js"
import type * as Types from "../../Types.js"
import * as OpCodes from "../opCodes/continuation.js"

/** @internal */
export const ContinuationTypeId = Symbol.for("effect/ChannelContinuation")

/** @internal */
export type ContinuationTypeId = typeof ContinuationTypeId

/** @internal */
export interface Continuation<
  out Env,
  in InErr,
  in InElem,
  in InDone,
  out OutErr,
  out OutErr2,
  out OutElem,
  out OutDone,
  out OutDone2
> extends Continuation.Variance<Env, InErr, InElem, InDone, OutErr, OutErr2, OutElem, OutDone, OutDone2> {}

/** @internal */
export declare namespace Continuation {
  /** @internal */
  export interface Variance<
    out Env,
    in InErr,
    in InElem,
    in InDone,
    out OutErr,
    out OutErr2,
    out OutElem,
    out OutDone,
    out OutDone2
  > {
    readonly [ContinuationTypeId]: {
      readonly _Env: Types.Covariant<Env>
      readonly _InErr: Types.Contravariant<InErr>
      readonly _InElem: Types.Contravariant<InElem>
      readonly _InDone: Types.Contravariant<InDone>
      readonly _OutErr: Types.Covariant<OutErr>
      readonly _OutDone: Types.Covariant<OutDone>
      readonly _OutErr2: Types.Covariant<OutErr2>
      readonly _OutElem: Types.Covariant<OutElem>
      readonly _OutDone2: Types.Covariant<OutDone2>
    }
  }
}

/** @internal */
export type Primitive = ErasedContinuationK | ErasedContinuationFinalizer

/** @internal */
export type ErasedContinuationK = ContinuationK<
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown
>

/** @internal */
export type ErasedContinuationFinalizer = ContinuationFinalizer<unknown, unknown, unknown>

/** @internal */
export interface ContinuationK<
  out Env,
  in InErr,
  in InElem,
  in InDone,
  out OutErr,
  out OutErr2,
  out OutElem,
  out OutDone,
  out OutDone2
> extends
  Continuation<
    Env,
    InErr,
    InElem,
    InDone,
    OutErr,
    OutErr2,
    OutElem,
    OutDone,
    OutDone2
  >
{
  readonly _tag: OpCodes.OP_CONTINUATION_K
  onSuccess(
    o: OutDone
  ): Channel.Channel<OutElem, InElem, OutErr2, InErr, OutDone2, InDone, Env>
  onHalt(
    c: Cause.Cause<OutErr>
  ): Channel.Channel<OutElem, InElem, OutErr2, InErr, OutDone2, InDone, Env>
  onExit(
    exit: Exit.Exit<OutDone, OutErr>
  ): Channel.Channel<OutElem, InElem, OutErr2, InErr, OutDone2, InDone, Env>
}

/** @internal */
export interface ContinuationFinalizer<out Env, out OutErr, out OutDone> extends
  Continuation<
    Env,
    unknown,
    unknown,
    unknown,
    OutErr,
    never,
    never,
    OutDone,
    never
  >
{
  readonly _tag: OpCodes.OP_CONTINUATION_FINALIZER
  finalizer(exit: Exit.Exit<OutErr, OutDone>): Effect.Effect<unknown, never, Env>
}

const continuationVariance = {
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
  _OutDone: (_: never) => _,
  /* c8 ignore next */
  _OutErr2: (_: never) => _,
  /* c8 ignore next */
  _OutElem: (_: never) => _,
  /* c8 ignore next */
  _OutDone2: (_: never) => _
}

/** @internal */
export class ContinuationKImpl<
  out Env,
  out Env2,
  in InErr,
  in InElem,
  in InDone,
  in out OutErr,
  out OutErr2,
  out OutElem,
  in out OutDone,
  out OutDone2
> implements
  ContinuationK<
    Env | Env2,
    InErr,
    InElem,
    InDone,
    OutErr,
    OutErr2,
    OutElem,
    OutDone,
    OutDone2
  >
{
  readonly _tag = OpCodes.OP_CONTINUATION_K
  readonly [ContinuationTypeId] = continuationVariance
  constructor(
    readonly onSuccess: (
      o: OutDone
    ) => Channel.Channel<OutElem, InElem, OutErr2, InErr, OutDone2, InDone, Env>,
    readonly onHalt: (
      c: Cause.Cause<OutErr>
    ) => Channel.Channel<OutElem, InElem, OutErr2, InErr, OutDone2, InDone, Env2>
  ) {
  }
  onExit(
    exit: Exit.Exit<OutDone, OutErr>
  ): Channel.Channel<OutElem, InElem, OutErr2, InErr, OutDone2, InDone, Env | Env2> {
    return Exit.isFailure(exit) ? this.onHalt(exit.cause) : this.onSuccess(exit.value)
  }
}

/** @internal */
export class ContinuationFinalizerImpl<out Env, in out OutErr, in out OutDone>
  implements ContinuationFinalizer<Env, OutErr, OutDone>
{
  readonly _tag = OpCodes.OP_CONTINUATION_FINALIZER
  readonly [ContinuationTypeId] = continuationVariance
  constructor(readonly finalizer: (exit: Exit.Exit<OutErr, OutDone>) => Effect.Effect<unknown, never, Env>) {
  }
}

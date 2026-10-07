import type * as Channel from "../Channel.js"
import type * as Effect from "../Effect.js"
import type * as Effectable from "../Effectable.js"
import * as Equal from "../Equal.js"
import * as Hash from "../Hash.js"
import { pipeArguments } from "../Pipeable.js"
import type * as Sink from "../Sink.js"
import type * as Stream from "../Stream.js"
import { SingleShotGen, YieldWrap } from "../Utils.js"
import * as OpCodes from "./opCodes/effect.js"
import * as version from "./version.js"

/** @internal */
export const EffectTypeId: Effect.EffectTypeId = Symbol.for("effect/Effect") as Effect.EffectTypeId

/** @internal */
export const StreamTypeId: Stream.StreamTypeId = Symbol.for("effect/Stream") as Stream.StreamTypeId

/** @internal */
export const SinkTypeId: Sink.SinkTypeId = Symbol.for("effect/Sink") as Sink.SinkTypeId

/** @internal */
export const ChannelTypeId: Channel.ChannelTypeId = Symbol.for("effect/Channel") as Channel.ChannelTypeId

/** @internal */
export const effectVariance = {
  /* c8 ignore next */
  _R: (_: never) => _,
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _A: (_: never) => _,

  _V: version.getCurrentVersion()
}

const sinkVariance = {
  /* c8 ignore next */
  _A: (_: never) => _,
  /* c8 ignore next */
  _In: (_: unknown) => _,
  /* c8 ignore next */
  _L: (_: never) => _,
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _R: (_: never) => _
}

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
export const EffectPrototype: Effect.Effect<never> & Equal.Equal = {
  [EffectTypeId]: effectVariance,
  [StreamTypeId]: effectVariance,
  [SinkTypeId]: sinkVariance,
  [ChannelTypeId]: channelVariance,
  [Equal.symbol](that: any) {
    return this === that
  },
  [Hash.symbol]() {
    return Hash.cached(this, Hash.random(this))
  },
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this)) as any
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const StructuralPrototype: Equal.Equal = {
  [Hash.symbol]() {
    return Hash.cached(this, Hash.structure(this))
  },
  [Equal.symbol](this: Equal.Equal, that: Equal.Equal) {
    const selfKeys = Object.keys(this)
    const thatKeys = Object.keys(that as object)
    if (selfKeys.length !== thatKeys.length) {
      return false
    }
    for (const key of selfKeys) {
      if (!(key in (that as object) && Equal.equals((this as any)[key], (that as any)[key]))) {
        return false
      }
    }
    return true
  }
}

/** @internal */
export const CommitPrototype: Effect.Effect<never> = {
  ...EffectPrototype,
  _op: OpCodes.OP_COMMIT
} as any

/** @internal */
export const StructuralCommitPrototype: Effect.Effect<never> = {
  ...CommitPrototype,
  ...StructuralPrototype
} as any

/** @internal */
export const Base: Effectable.CommitPrimitive = (function() {
  function Base() {}
  Base.prototype = CommitPrototype
  return Base as any
})()

/** @internal */
export const StructuralBase: Effectable.CommitPrimitive = (function() {
  function Base() {}
  Base.prototype = StructuralCommitPrototype
  return Base as any
})()

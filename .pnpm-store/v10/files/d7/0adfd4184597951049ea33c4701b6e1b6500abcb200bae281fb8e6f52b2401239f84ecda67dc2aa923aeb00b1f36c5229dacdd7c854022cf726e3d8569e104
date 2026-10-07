import * as Equal from "../Equal.js";
import * as Hash from "../Hash.js";
import { pipeArguments } from "../Pipeable.js";
import { SingleShotGen, YieldWrap } from "../Utils.js";
import * as OpCodes from "./opCodes/effect.js";
import * as version from "./version.js";
/** @internal */
export const EffectTypeId = /*#__PURE__*/Symbol.for("effect/Effect");
/** @internal */
export const StreamTypeId = /*#__PURE__*/Symbol.for("effect/Stream");
/** @internal */
export const SinkTypeId = /*#__PURE__*/Symbol.for("effect/Sink");
/** @internal */
export const ChannelTypeId = /*#__PURE__*/Symbol.for("effect/Channel");
/** @internal */
export const effectVariance = {
  /* c8 ignore next */
  _R: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _,
  _V: /*#__PURE__*/version.getCurrentVersion()
};
const sinkVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _In: _ => _,
  /* c8 ignore next */
  _L: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
const channelVariance = {
  /* c8 ignore next */
  _Env: _ => _,
  /* c8 ignore next */
  _InErr: _ => _,
  /* c8 ignore next */
  _InElem: _ => _,
  /* c8 ignore next */
  _InDone: _ => _,
  /* c8 ignore next */
  _OutErr: _ => _,
  /* c8 ignore next */
  _OutElem: _ => _,
  /* c8 ignore next */
  _OutDone: _ => _
};
/** @internal */
export const EffectPrototype = {
  [EffectTypeId]: effectVariance,
  [StreamTypeId]: effectVariance,
  [SinkTypeId]: sinkVariance,
  [ChannelTypeId]: channelVariance,
  [Equal.symbol](that) {
    return this === that;
  },
  [Hash.symbol]() {
    return Hash.cached(this, Hash.random(this));
  },
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const StructuralPrototype = {
  [Hash.symbol]() {
    return Hash.cached(this, Hash.structure(this));
  },
  [Equal.symbol](that) {
    const selfKeys = Object.keys(this);
    const thatKeys = Object.keys(that);
    if (selfKeys.length !== thatKeys.length) {
      return false;
    }
    for (const key of selfKeys) {
      if (!(key in that && Equal.equals(this[key], that[key]))) {
        return false;
      }
    }
    return true;
  }
};
/** @internal */
export const CommitPrototype = {
  ...EffectPrototype,
  _op: OpCodes.OP_COMMIT
};
/** @internal */
export const StructuralCommitPrototype = {
  ...CommitPrototype,
  ...StructuralPrototype
};
/** @internal */
export const Base = /*#__PURE__*/function () {
  function Base() {}
  Base.prototype = CommitPrototype;
  return Base;
}();
/** @internal */
export const StructuralBase = /*#__PURE__*/function () {
  function Base() {}
  Base.prototype = StructuralCommitPrototype;
  return Base;
}();
//# sourceMappingURL=effectable.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.effectVariance = exports.StructuralPrototype = exports.StructuralCommitPrototype = exports.StructuralBase = exports.StreamTypeId = exports.SinkTypeId = exports.EffectTypeId = exports.EffectPrototype = exports.CommitPrototype = exports.ChannelTypeId = exports.Base = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Pipeable = require("../Pipeable.js");
var _Utils = require("../Utils.js");
var OpCodes = _interopRequireWildcard(require("./opCodes/effect.js"));
var version = _interopRequireWildcard(require("./version.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const EffectTypeId = exports.EffectTypeId = /*#__PURE__*/Symbol.for("effect/Effect");
/** @internal */
const StreamTypeId = exports.StreamTypeId = /*#__PURE__*/Symbol.for("effect/Stream");
/** @internal */
const SinkTypeId = exports.SinkTypeId = /*#__PURE__*/Symbol.for("effect/Sink");
/** @internal */
const ChannelTypeId = exports.ChannelTypeId = /*#__PURE__*/Symbol.for("effect/Channel");
/** @internal */
const effectVariance = exports.effectVariance = {
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
const EffectPrototype = exports.EffectPrototype = {
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
    return new _Utils.SingleShotGen(new _Utils.YieldWrap(this));
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const StructuralPrototype = exports.StructuralPrototype = {
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
const CommitPrototype = exports.CommitPrototype = {
  ...EffectPrototype,
  _op: OpCodes.OP_COMMIT
};
/** @internal */
const StructuralCommitPrototype = exports.StructuralCommitPrototype = {
  ...CommitPrototype,
  ...StructuralPrototype
};
/** @internal */
const Base = exports.Base = /*#__PURE__*/function () {
  function Base() {}
  Base.prototype = CommitPrototype;
  return Base;
}();
/** @internal */
const StructuralBase = exports.StructuralBase = /*#__PURE__*/function () {
  function Base() {}
  Base.prototype = StructuralCommitPrototype;
  return Base;
}();
//# sourceMappingURL=effectable.js.map
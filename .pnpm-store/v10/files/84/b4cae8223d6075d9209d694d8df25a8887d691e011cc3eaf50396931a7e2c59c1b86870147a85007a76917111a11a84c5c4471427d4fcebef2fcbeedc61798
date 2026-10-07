"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tap = exports.of = exports.matchEffect = exports.match = exports.map = exports.make = exports.isSuccess = exports.isFailure = exports.isDone = exports.fromPull = exports.fromExit = exports.fromEffect = exports.failCause = exports.fail = exports.end = exports.done = exports.dieMessage = exports.die = exports.chunk = exports.TakeTypeId = exports.TakeImpl = void 0;
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var Exit = _interopRequireWildcard(require("../Exit.js"));
var _Function = require("../Function.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TakeSymbolKey = "effect/Take";
/** @internal */
const TakeTypeId = exports.TakeTypeId = /*#__PURE__*/Symbol.for(TakeSymbolKey);
const takeVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _E: _ => _
};
/** @internal */
class TakeImpl {
  exit;
  [TakeTypeId] = takeVariance;
  constructor(exit) {
    this.exit = exit;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.TakeImpl = TakeImpl;
const chunk = chunk => new TakeImpl(Exit.succeed(chunk));
/** @internal */
exports.chunk = chunk;
const die = defect => new TakeImpl(Exit.die(defect));
/** @internal */
exports.die = die;
const dieMessage = message => new TakeImpl(Exit.die(new Cause.RuntimeException(message)));
/** @internal */
exports.dieMessage = dieMessage;
const done = self => Effect.suspend(() => self.exit);
/** @internal */
exports.done = done;
const end = exports.end = /*#__PURE__*/new TakeImpl(/*#__PURE__*/Exit.fail(/*#__PURE__*/Option.none()));
/** @internal */
const fail = error => new TakeImpl(Exit.fail(Option.some(error)));
/** @internal */
exports.fail = fail;
const failCause = cause => new TakeImpl(Exit.failCause((0, _Function.pipe)(cause, Cause.map(Option.some))));
/** @internal */
exports.failCause = failCause;
const fromEffect = effect => Effect.matchCause(effect, {
  onFailure: failCause,
  onSuccess: of
});
/** @internal */
exports.fromEffect = fromEffect;
const fromExit = exit => new TakeImpl((0, _Function.pipe)(exit, Exit.mapBoth({
  onFailure: Option.some,
  onSuccess: Chunk.of
})));
/** @internal */
exports.fromExit = fromExit;
const fromPull = pull => Effect.matchCause(pull, {
  onFailure: cause => Option.match(Cause.flipCauseOption(cause), {
    onNone: () => end,
    onSome: failCause
  }),
  onSuccess: chunk
});
/** @internal */
exports.fromPull = fromPull;
const isDone = self => Exit.match(self.exit, {
  onFailure: cause => Option.isNone(Cause.flipCauseOption(cause)),
  onSuccess: _Function.constFalse
});
/** @internal */
exports.isDone = isDone;
const isFailure = self => Exit.match(self.exit, {
  onFailure: cause => Option.isSome(Cause.flipCauseOption(cause)),
  onSuccess: _Function.constFalse
});
/** @internal */
exports.isFailure = isFailure;
const isSuccess = self => Exit.match(self.exit, {
  onFailure: _Function.constFalse,
  onSuccess: _Function.constTrue
});
/** @internal */
exports.isSuccess = isSuccess;
const make = exit => new TakeImpl(exit);
/** @internal */
exports.make = make;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onEnd,
  onFailure,
  onSuccess
}) => Exit.match(self.exit, {
  onFailure: cause => Option.match(Cause.flipCauseOption(cause), {
    onNone: onEnd,
    onSome: onFailure
  }),
  onSuccess
}));
/** @internal */
const matchEffect = exports.matchEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onEnd,
  onFailure,
  onSuccess
}) => Exit.matchEffect(self.exit, {
  onFailure: cause => Option.match(Cause.flipCauseOption(cause), {
    onNone: () => onEnd,
    onSome: onFailure
  }),
  onSuccess
}));
/** @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new TakeImpl((0, _Function.pipe)(self.exit, Exit.map(Chunk.map(f)))));
/** @internal */
const of = value => new TakeImpl(Exit.succeed(Chunk.of(value)));
/** @internal */
exports.of = of;
const tap = exports.tap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self.exit, Exit.forEachEffect(f), Effect.asVoid));
//# sourceMappingURL=take.js.map
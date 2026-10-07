"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.write = exports.void = exports.sync = exports.suspend = exports.succeedNow = exports.succeed = exports.readWithCause = exports.readWith = exports.readOrFail = exports.provideContext = exports.pipeTo = exports.isChannel = exports.fromEffect = exports.foldCauseChannel = exports.flatMap = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.ensuringWith = exports.embedInput = exports.concatMapWithCustom = exports.concatMapWith = exports.concatAllWith = exports.concatAll = exports.collectElements = exports.catchAllCause = exports.acquireReleaseOut = exports.ChannelTypeId = void 0;
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var _Function = require("../Function.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var childExecutorDecision = _interopRequireWildcard(require("./channel/childExecutorDecision.js"));
var _continuation = require("./channel/continuation.js");
var upstreamPullStrategy = _interopRequireWildcard(require("./channel/upstreamPullStrategy.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/channel.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ChannelSymbolKey = "effect/Channel";
/** @internal */
const ChannelTypeId = exports.ChannelTypeId = /*#__PURE__*/Symbol.for(ChannelSymbolKey);
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
const proto = {
  [ChannelTypeId]: channelVariance,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const isChannel = u => (0, _Predicate.hasProperty)(u, ChannelTypeId) || Effect.isEffect(u);
/** @internal */
exports.isChannel = isChannel;
const acquireReleaseOut = exports.acquireReleaseOut = /*#__PURE__*/(0, _Function.dual)(2, (self, release) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BRACKET_OUT;
  op.acquire = () => self;
  op.finalizer = release;
  return op;
});
/** @internal */
const catchAllCause = exports.catchAllCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FOLD;
  op.channel = self;
  op.k = new _continuation.ContinuationKImpl(succeed, f);
  return op;
});
/** @internal */
const collectElements = self => {
  return suspend(() => {
    const builder = [];
    return flatMap(pipeTo(self, collectElementsReader(builder)), value => sync(() => [Chunk.fromIterable(builder), value]));
  });
};
/** @internal */
exports.collectElements = collectElements;
const collectElementsReader = builder => readWith({
  onInput: outElem => flatMap(sync(() => {
    builder.push(outElem);
  }), () => collectElementsReader(builder)),
  onFailure: fail,
  onDone: succeedNow
});
/** @internal */
const concatAll = channels => concatAllWith(channels, _Function.constVoid, _Function.constVoid);
/** @internal */
exports.concatAll = concatAll;
const concatAllWith = (channels, f, g) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CONCAT_ALL;
  op.combineInners = f;
  op.combineAll = g;
  op.onPull = () => upstreamPullStrategy.PullAfterNext(Option.none());
  op.onEmit = () => childExecutorDecision.Continue;
  op.value = () => channels;
  op.k = _Function.identity;
  return op;
};
/** @internal */
exports.concatAllWith = concatAllWith;
const concatMapWith = exports.concatMapWith = /*#__PURE__*/(0, _Function.dual)(4, (self, f, g, h) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CONCAT_ALL;
  op.combineInners = g;
  op.combineAll = h;
  op.onPull = () => upstreamPullStrategy.PullAfterNext(Option.none());
  op.onEmit = () => childExecutorDecision.Continue;
  op.value = () => self;
  op.k = f;
  return op;
});
/** @internal */
const concatMapWithCustom = exports.concatMapWithCustom = /*#__PURE__*/(0, _Function.dual)(6, (self, f, g, h, onPull, onEmit) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CONCAT_ALL;
  op.combineInners = g;
  op.combineAll = h;
  op.onPull = onPull;
  op.onEmit = onEmit;
  op.value = () => self;
  op.k = f;
  return op;
});
/** @internal */
const embedInput = exports.embedInput = /*#__PURE__*/(0, _Function.dual)(2, (self, input) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BRIDGE;
  op.input = input;
  op.channel = self;
  return op;
});
/** @internal */
const ensuringWith = exports.ensuringWith = /*#__PURE__*/(0, _Function.dual)(2, (self, finalizer) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_ENSURING;
  op.channel = self;
  op.finalizer = finalizer;
  return op;
});
/** @internal */
const fail = error => failCause(Cause.fail(error));
/** @internal */
exports.fail = fail;
const failSync = evaluate => failCauseSync(() => Cause.fail(evaluate()));
/** @internal */
exports.failSync = failSync;
const failCause = cause => failCauseSync(() => cause);
/** @internal */
exports.failCause = failCause;
const failCauseSync = evaluate => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FAIL;
  op.error = evaluate;
  return op;
};
/** @internal */
exports.failCauseSync = failCauseSync;
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FOLD;
  op.channel = self;
  op.k = new _continuation.ContinuationKImpl(f, failCause);
  return op;
});
/** @internal */
const foldCauseChannel = exports.foldCauseChannel = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FOLD;
  op.channel = self;
  op.k = new _continuation.ContinuationKImpl(options.onSuccess, options.onFailure);
  return op;
});
/** @internal */
const fromEffect = effect => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FROM_EFFECT;
  op.effect = () => effect;
  return op;
};
/** @internal */
exports.fromEffect = fromEffect;
const pipeTo = exports.pipeTo = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PIPE_TO;
  op.left = () => self;
  op.right = () => that;
  return op;
});
/** @internal */
const provideContext = exports.provideContext = /*#__PURE__*/(0, _Function.dual)(2, (self, env) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PROVIDE;
  op.context = () => env;
  op.inner = self;
  return op;
});
/** @internal */
const readOrFail = error => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_READ;
  op.more = succeed;
  op.done = new _continuation.ContinuationKImpl(() => fail(error), () => fail(error));
  return op;
};
/** @internal */
exports.readOrFail = readOrFail;
const readWith = options => readWithCause({
  onInput: options.onInput,
  onFailure: cause => Either.match(Cause.failureOrCause(cause), {
    onLeft: options.onFailure,
    onRight: failCause
  }),
  onDone: options.onDone
});
/** @internal */
exports.readWith = readWith;
const readWithCause = options => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_READ;
  op.more = options.onInput;
  op.done = new _continuation.ContinuationKImpl(options.onDone, options.onFailure);
  return op;
};
/** @internal */
exports.readWithCause = readWithCause;
const succeed = value => sync(() => value);
/** @internal */
exports.succeed = succeed;
const succeedNow = result => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_SUCCEED_NOW;
  op.terminal = result;
  return op;
};
/** @internal */
exports.succeedNow = succeedNow;
const suspend = evaluate => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_SUSPEND;
  op.channel = evaluate;
  return op;
};
exports.suspend = suspend;
const sync = evaluate => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_SUCCEED;
  op.evaluate = evaluate;
  return op;
};
exports.sync = sync;
const void_ = exports.void = /*#__PURE__*/succeedNow(void 0);
/** @internal */
const write = out => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_EMIT;
  op.out = out;
  return op;
};
exports.write = write;
//# sourceMappingURL=core-stream.js.map
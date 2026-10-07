import * as Cause from "../Cause.js";
import * as Chunk from "../Chunk.js";
import * as Effect from "../Effect.js";
import * as Either from "../Either.js";
import { constVoid, dual, identity } from "../Function.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as childExecutorDecision from "./channel/childExecutorDecision.js";
import { ContinuationKImpl } from "./channel/continuation.js";
import * as upstreamPullStrategy from "./channel/upstreamPullStrategy.js";
import * as OpCodes from "./opCodes/channel.js";
/** @internal */
const ChannelSymbolKey = "effect/Channel";
/** @internal */
export const ChannelTypeId = /*#__PURE__*/Symbol.for(ChannelSymbolKey);
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
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const isChannel = u => hasProperty(u, ChannelTypeId) || Effect.isEffect(u);
/** @internal */
export const acquireReleaseOut = /*#__PURE__*/dual(2, (self, release) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BRACKET_OUT;
  op.acquire = () => self;
  op.finalizer = release;
  return op;
});
/** @internal */
export const catchAllCause = /*#__PURE__*/dual(2, (self, f) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FOLD;
  op.channel = self;
  op.k = new ContinuationKImpl(succeed, f);
  return op;
});
/** @internal */
export const collectElements = self => {
  return suspend(() => {
    const builder = [];
    return flatMap(pipeTo(self, collectElementsReader(builder)), value => sync(() => [Chunk.fromIterable(builder), value]));
  });
};
/** @internal */
const collectElementsReader = builder => readWith({
  onInput: outElem => flatMap(sync(() => {
    builder.push(outElem);
  }), () => collectElementsReader(builder)),
  onFailure: fail,
  onDone: succeedNow
});
/** @internal */
export const concatAll = channels => concatAllWith(channels, constVoid, constVoid);
/** @internal */
export const concatAllWith = (channels, f, g) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CONCAT_ALL;
  op.combineInners = f;
  op.combineAll = g;
  op.onPull = () => upstreamPullStrategy.PullAfterNext(Option.none());
  op.onEmit = () => childExecutorDecision.Continue;
  op.value = () => channels;
  op.k = identity;
  return op;
};
/** @internal */
export const concatMapWith = /*#__PURE__*/dual(4, (self, f, g, h) => {
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
export const concatMapWithCustom = /*#__PURE__*/dual(6, (self, f, g, h, onPull, onEmit) => {
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
export const embedInput = /*#__PURE__*/dual(2, (self, input) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BRIDGE;
  op.input = input;
  op.channel = self;
  return op;
});
/** @internal */
export const ensuringWith = /*#__PURE__*/dual(2, (self, finalizer) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_ENSURING;
  op.channel = self;
  op.finalizer = finalizer;
  return op;
});
/** @internal */
export const fail = error => failCause(Cause.fail(error));
/** @internal */
export const failSync = evaluate => failCauseSync(() => Cause.fail(evaluate()));
/** @internal */
export const failCause = cause => failCauseSync(() => cause);
/** @internal */
export const failCauseSync = evaluate => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FAIL;
  op.error = evaluate;
  return op;
};
/** @internal */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FOLD;
  op.channel = self;
  op.k = new ContinuationKImpl(f, failCause);
  return op;
});
/** @internal */
export const foldCauseChannel = /*#__PURE__*/dual(2, (self, options) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FOLD;
  op.channel = self;
  op.k = new ContinuationKImpl(options.onSuccess, options.onFailure);
  return op;
});
/** @internal */
export const fromEffect = effect => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FROM_EFFECT;
  op.effect = () => effect;
  return op;
};
/** @internal */
export const pipeTo = /*#__PURE__*/dual(2, (self, that) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PIPE_TO;
  op.left = () => self;
  op.right = () => that;
  return op;
});
/** @internal */
export const provideContext = /*#__PURE__*/dual(2, (self, env) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PROVIDE;
  op.context = () => env;
  op.inner = self;
  return op;
});
/** @internal */
export const readOrFail = error => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_READ;
  op.more = succeed;
  op.done = new ContinuationKImpl(() => fail(error), () => fail(error));
  return op;
};
/** @internal */
export const readWith = options => readWithCause({
  onInput: options.onInput,
  onFailure: cause => Either.match(Cause.failureOrCause(cause), {
    onLeft: options.onFailure,
    onRight: failCause
  }),
  onDone: options.onDone
});
/** @internal */
export const readWithCause = options => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_READ;
  op.more = options.onInput;
  op.done = new ContinuationKImpl(options.onDone, options.onFailure);
  return op;
};
/** @internal */
export const succeed = value => sync(() => value);
/** @internal */
export const succeedNow = result => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_SUCCEED_NOW;
  op.terminal = result;
  return op;
};
/** @internal */
export const suspend = evaluate => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_SUSPEND;
  op.channel = evaluate;
  return op;
};
export const sync = evaluate => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_SUCCEED;
  op.evaluate = evaluate;
  return op;
};
const void_ = /*#__PURE__*/succeedNow(void 0);
export { /** @internal */
void_ as void };
/** @internal */
export const write = out => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_EMIT;
  op.out = out;
  return op;
};
//# sourceMappingURL=core-stream.js.map
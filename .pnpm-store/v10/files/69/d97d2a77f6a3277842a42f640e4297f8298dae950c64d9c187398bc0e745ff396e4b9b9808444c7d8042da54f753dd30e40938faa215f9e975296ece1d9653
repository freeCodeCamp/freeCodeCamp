"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEffect = exports.fresh = exports.flatten = exports.flatMap = exports.fiberRefLocallyWith = exports.fiberRefLocallyScopedWith = exports.fiberRefLocallyScoped = exports.fiberRefLocally = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.extendScope = exports.empty = exports.effect_provide = exports.discard = exports.dieSync = exports.die = exports.context = exports.catchAllCause = exports.catchAll = exports.buildWithScope = exports.buildWithMemoMap = exports.build = exports.annotateSpans = exports.annotateLogs = exports.MemoMapTypeId = exports.LayerTypeId = exports.CurrentMemoMap = void 0;
exports.fromEffectContext = fromEffectContext;
exports.zipWith = exports.withSpan = exports.withParentSpan = exports.unwrapScoped = exports.unwrapEffect = exports.unsafeMakeMemoMap = exports.toRuntimeWithMemoMap = exports.toRuntime = exports.tapErrorCause = exports.tapError = exports.tap = exports.syncContext = exports.sync = exports.suspend = exports.succeedContext = exports.succeed = exports.service = exports.scopedDiscard = exports.scopedContext = exports.scoped = exports.scope = exports.retry = exports.provideMerge = exports.provide = exports.proto = exports.project = exports.passthrough = exports.orElse = exports.orDie = exports.mock = exports.mergeAll = exports.merge = exports.memoize = exports.matchCause = exports.match = exports.mapError = exports.map = exports.makeMemoMap = exports.locallyEffect = exports.launch = exports.isLayer = exports.isFresh = exports.fromFunction = exports.fromEffectDiscard = void 0;
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Clock = _interopRequireWildcard(require("../Clock.js"));
var Context = _interopRequireWildcard(require("../Context.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var FiberRefsPatch = _interopRequireWildcard(require("../FiberRefsPatch.js"));
var _Function = require("../Function.js");
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var ScheduleDecision = _interopRequireWildcard(require("../ScheduleDecision.js"));
var Intervals = _interopRequireWildcard(require("../ScheduleIntervals.js"));
var Scope = _interopRequireWildcard(require("../Scope.js"));
var effect = _interopRequireWildcard(require("./core-effect.js"));
var core = _interopRequireWildcard(require("./core.js"));
var circular = _interopRequireWildcard(require("./effect/circular.js"));
var ExecutionStrategy = _interopRequireWildcard(require("./executionStrategy.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var circularManagedRuntime = _interopRequireWildcard(require("./managedRuntime/circular.js"));
var EffectOpCodes = _interopRequireWildcard(require("./opCodes/effect.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/layer.js"));
var ref = _interopRequireWildcard(require("./ref.js"));
var runtime = _interopRequireWildcard(require("./runtime.js"));
var runtimeFlags = _interopRequireWildcard(require("./runtimeFlags.js"));
var synchronized = _interopRequireWildcard(require("./synchronizedRef.js"));
var tracer = _interopRequireWildcard(require("./tracer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const LayerSymbolKey = "effect/Layer";
/** @internal */
const LayerTypeId = exports.LayerTypeId = /*#__PURE__*/Symbol.for(LayerSymbolKey);
const layerVariance = {
  /* c8 ignore next */
  _RIn: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _ROut: _ => _
};
/** @internal */
const proto = exports.proto = {
  [LayerTypeId]: layerVariance,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const MemoMapTypeIdKey = "effect/Layer/MemoMap";
/** @internal */
const MemoMapTypeId = exports.MemoMapTypeId = /*#__PURE__*/Symbol.for(MemoMapTypeIdKey);
/** @internal */
const CurrentMemoMap = exports.CurrentMemoMap = /*#__PURE__*/Context.Reference()("effect/Layer/CurrentMemoMap", {
  defaultValue: () => unsafeMakeMemoMap()
});
/** @internal */
const isLayer = u => (0, _Predicate.hasProperty)(u, LayerTypeId);
/** @internal */
exports.isLayer = isLayer;
const isFresh = self => {
  return self._op_layer === OpCodes.OP_FRESH;
};
// -----------------------------------------------------------------------------
// MemoMap
// -----------------------------------------------------------------------------
/** @internal */
exports.isFresh = isFresh;
class MemoMapImpl {
  ref;
  [MemoMapTypeId];
  constructor(ref) {
    this.ref = ref;
    this[MemoMapTypeId] = MemoMapTypeId;
  }
  /**
   * Checks the memo map to see if a layer exists. If it is, immediately
   * returns it. Otherwise, obtains the layer, stores it in the memo map,
   * and adds a finalizer to the `Scope`.
   */
  getOrElseMemoize(layer, scope) {
    return (0, _Function.pipe)(synchronized.modifyEffect(this.ref, map => {
      const inMap = map.get(layer);
      if (inMap !== undefined) {
        const [acquire, release] = inMap;
        const cached = (0, _Function.pipe)(acquire, core.flatMap(([patch, b]) => (0, _Function.pipe)(effect.patchFiberRefs(patch), core.as(b))), core.onExit(core.exitMatch({
          onFailure: () => core.void,
          onSuccess: () => core.scopeAddFinalizerExit(scope, release)
        })));
        return core.succeed([cached, map]);
      }
      return (0, _Function.pipe)(ref.make(0), core.flatMap(observers => (0, _Function.pipe)(core.deferredMake(), core.flatMap(deferred => (0, _Function.pipe)(ref.make(() => core.void), core.map(finalizerRef => {
        const resource = core.uninterruptibleMask(restore => (0, _Function.pipe)(fiberRuntime.scopeMake(), core.flatMap(innerScope => (0, _Function.pipe)(restore(core.flatMap(makeBuilder(layer, innerScope, true), f => effect.diffFiberRefs(f(this)))), core.exit, core.flatMap(exit => {
          switch (exit._tag) {
            case EffectOpCodes.OP_FAILURE:
              {
                return (0, _Function.pipe)(core.deferredFailCause(deferred, exit.effect_instruction_i0), core.zipRight(core.scopeClose(innerScope, exit)), core.zipRight(core.failCause(exit.effect_instruction_i0)));
              }
            case EffectOpCodes.OP_SUCCESS:
              {
                return (0, _Function.pipe)(ref.set(finalizerRef, exit => (0, _Function.pipe)(core.scopeClose(innerScope, exit), core.whenEffect(ref.modify(observers, n => [n === 1, n - 1])), core.asVoid)), core.zipRight(ref.update(observers, n => n + 1)), core.zipRight(core.scopeAddFinalizerExit(scope, exit => (0, _Function.pipe)(core.sync(() => map.delete(layer)), core.zipRight(ref.get(finalizerRef)), core.flatMap(finalizer => finalizer(exit))))), core.zipRight(core.deferredSucceed(deferred, exit.effect_instruction_i0)), core.as(exit.effect_instruction_i0[1]));
              }
          }
        })))));
        const memoized = [(0, _Function.pipe)(core.deferredAwait(deferred), core.onExit(core.exitMatchEffect({
          onFailure: () => core.void,
          onSuccess: () => ref.update(observers, n => n + 1)
        }))), exit => (0, _Function.pipe)(ref.get(finalizerRef), core.flatMap(finalizer => finalizer(exit)))];
        return [resource, isFresh(layer) ? map : map.set(layer, memoized)];
      }))))));
    }), core.flatten);
  }
}
/** @internal */
const makeMemoMap = exports.makeMemoMap = /*#__PURE__*/core.suspend(() => core.map(circular.makeSynchronized(new Map()), ref => new MemoMapImpl(ref)));
/** @internal */
const unsafeMakeMemoMap = () => new MemoMapImpl(circular.unsafeMakeSynchronized(new Map()));
/** @internal */
exports.unsafeMakeMemoMap = unsafeMakeMemoMap;
const build = self => fiberRuntime.scopeWith(scope => buildWithScope(self, scope));
/** @internal */
exports.build = build;
const buildWithScope = exports.buildWithScope = /*#__PURE__*/(0, _Function.dual)(2, (self, scope) => core.flatMap(makeMemoMap, memoMap => buildWithMemoMap(self, memoMap, scope)));
/** @internal */
const buildWithMemoMap = exports.buildWithMemoMap = /*#__PURE__*/(0, _Function.dual)(3, (self, memoMap, scope) => core.flatMap(makeBuilder(self, scope), run => effect.provideService(run(memoMap), CurrentMemoMap, memoMap)));
const makeBuilder = (self, scope, inMemoMap = false) => {
  const op = self;
  switch (op._op_layer) {
    case "Locally":
      {
        return core.sync(() => memoMap => op.f(memoMap.getOrElseMemoize(op.self, scope)));
      }
    case "ExtendScope":
      {
        return core.sync(() => memoMap => fiberRuntime.scopeWith(scope => memoMap.getOrElseMemoize(op.layer, scope)));
      }
    case "Fold":
      {
        return core.sync(() => memoMap => (0, _Function.pipe)(memoMap.getOrElseMemoize(op.layer, scope), core.matchCauseEffect({
          onFailure: cause => memoMap.getOrElseMemoize(op.failureK(cause), scope),
          onSuccess: value => memoMap.getOrElseMemoize(op.successK(value), scope)
        })));
      }
    case "Fresh":
      {
        return core.sync(() => _ => (0, _Function.pipe)(op.layer, buildWithScope(scope)));
      }
    case "FromEffect":
      {
        return inMemoMap ? core.sync(() => _ => op.effect) : core.sync(() => memoMap => memoMap.getOrElseMemoize(self, scope));
      }
    case "Provide":
      {
        return core.sync(() => memoMap => (0, _Function.pipe)(memoMap.getOrElseMemoize(op.first, scope), core.flatMap(env => (0, _Function.pipe)(memoMap.getOrElseMemoize(op.second, scope), core.provideContext(env)))));
      }
    case "Scoped":
      {
        return inMemoMap ? core.sync(() => _ => fiberRuntime.scopeExtend(op.effect, scope)) : core.sync(() => memoMap => memoMap.getOrElseMemoize(self, scope));
      }
    case "Suspend":
      {
        return core.sync(() => memoMap => memoMap.getOrElseMemoize(op.evaluate(), scope));
      }
    case "ProvideMerge":
      {
        return core.sync(() => memoMap => (0, _Function.pipe)(memoMap.getOrElseMemoize(op.first, scope), core.zipWith(memoMap.getOrElseMemoize(op.second, scope), op.zipK)));
      }
    case "ZipWith":
      {
        return core.gen(function* () {
          const parallelScope = yield* core.scopeFork(scope, ExecutionStrategy.parallel);
          const firstScope = yield* core.scopeFork(parallelScope, ExecutionStrategy.sequential);
          const secondScope = yield* core.scopeFork(parallelScope, ExecutionStrategy.sequential);
          return memoMap => (0, _Function.pipe)(memoMap.getOrElseMemoize(op.first, firstScope), fiberRuntime.zipWithOptions(memoMap.getOrElseMemoize(op.second, secondScope), op.zipK, {
            concurrent: true
          }));
        });
      }
    case "MergeAll":
      {
        const layers = op.layers;
        return core.map(core.scopeFork(scope, ExecutionStrategy.parallel), parallelScope => memoMap => {
          const contexts = new Array(layers.length);
          return core.map(fiberRuntime.forEachConcurrentDiscard(layers, core.fnUntraced(function* (layer, i) {
            const scope = yield* core.scopeFork(parallelScope, ExecutionStrategy.sequential);
            const context = yield* memoMap.getOrElseMemoize(layer, scope);
            contexts[i] = context;
          }), false, false), () => Context.mergeAll(...contexts));
        });
      }
  }
};
// -----------------------------------------------------------------------------
// Layer
// -----------------------------------------------------------------------------
/** @internal */
const catchAll = exports.catchAll = /*#__PURE__*/(0, _Function.dual)(2, (self, onFailure) => match(self, {
  onFailure,
  onSuccess: succeedContext
}));
/** @internal */
const catchAllCause = exports.catchAllCause = /*#__PURE__*/(0, _Function.dual)(2, (self, onFailure) => matchCause(self, {
  onFailure,
  onSuccess: succeedContext
}));
/** @internal */
const die = defect => failCause(Cause.die(defect));
/** @internal */
exports.die = die;
const dieSync = evaluate => failCauseSync(() => Cause.die(evaluate()));
/** @internal */
exports.dieSync = dieSync;
const discard = self => map(self, () => Context.empty());
/** @internal */
exports.discard = discard;
const context = () => fromEffectContext(core.context());
/** @internal */
exports.context = context;
const extendScope = self => {
  const extendScope = Object.create(proto);
  extendScope._op_layer = OpCodes.OP_EXTEND_SCOPE;
  extendScope.layer = self;
  return extendScope;
};
/** @internal */
exports.extendScope = extendScope;
const fail = error => failCause(Cause.fail(error));
/** @internal */
exports.fail = fail;
const failSync = evaluate => failCauseSync(() => Cause.fail(evaluate()));
/** @internal */
exports.failSync = failSync;
const failCause = cause => fromEffectContext(core.failCause(cause));
/** @internal */
exports.failCause = failCause;
const failCauseSync = evaluate => fromEffectContext(core.failCauseSync(evaluate));
/** @internal */
exports.failCauseSync = failCauseSync;
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => match(self, {
  onFailure: fail,
  onSuccess: f
}));
/** @internal */
const flatten = exports.flatten = /*#__PURE__*/(0, _Function.dual)(2, (self, tag) => flatMap(self, Context.get(tag)));
/** @internal */
const fresh = self => {
  const fresh = Object.create(proto);
  fresh._op_layer = OpCodes.OP_FRESH;
  fresh.layer = self;
  return fresh;
};
/** @internal */
exports.fresh = fresh;
const fromEffect = exports.fromEffect = /*#__PURE__*/(0, _Function.dual)(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const effect = tagFirst ? b : a;
  return fromEffectContext(core.map(effect, service => Context.make(tag, service)));
});
/** @internal */
const fromEffectDiscard = effect => fromEffectContext(core.map(effect, () => Context.empty()));
/** @internal */
exports.fromEffectDiscard = fromEffectDiscard;
function fromEffectContext(effect) {
  const fromEffect = Object.create(proto);
  fromEffect._op_layer = OpCodes.OP_FROM_EFFECT;
  fromEffect.effect = effect;
  return fromEffect;
}
/** @internal */
const fiberRefLocally = exports.fiberRefLocally = /*#__PURE__*/(0, _Function.dual)(3, (self, ref, value) => locallyEffect(self, core.fiberRefLocally(ref, value)));
/** @internal */
const locallyEffect = exports.locallyEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const locally = Object.create(proto);
  locally._op_layer = "Locally";
  locally.self = self;
  locally.f = f;
  return locally;
});
/** @internal */
const fiberRefLocallyWith = exports.fiberRefLocallyWith = /*#__PURE__*/(0, _Function.dual)(3, (self, ref, value) => locallyEffect(self, core.fiberRefLocallyWith(ref, value)));
/** @internal */
const fiberRefLocallyScoped = (self, value) => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(self, value));
/** @internal */
exports.fiberRefLocallyScoped = fiberRefLocallyScoped;
const fiberRefLocallyScopedWith = (self, value) => scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(self, value));
/** @internal */
exports.fiberRefLocallyScopedWith = fiberRefLocallyScopedWith;
const fromFunction = (tagA, tagB, f) => fromEffectContext(core.map(tagA, a => Context.make(tagB, f(a))));
/** @internal */
exports.fromFunction = fromFunction;
const launch = self => fiberRuntime.scopedEffect(core.zipRight(fiberRuntime.scopeWith(scope => (0, _Function.pipe)(self, buildWithScope(scope))), core.never));
/** @internal */
exports.launch = launch;
const mock = function () {
  if (arguments.length === 1) {
    return service => mockImpl(arguments[0], service);
  }
  return mockImpl(arguments[0], arguments[1]);
};
exports.mock = mock;
const mockImpl = (tag, service) => succeed(tag, new Proxy({
  ...service
}, {
  get(target, prop, _receiver) {
    if (prop in target) {
      return target[prop];
    }
    const prevLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const error = new Error(`${tag.key}: Unimplemented method "${prop.toString()}"`);
    Error.stackTraceLimit = prevLimit;
    error.name = "UnimplementedError";
    return makeUnimplemented(error);
  },
  has: _Function.constTrue
}));
const makeUnimplemented = error => {
  const dead = core.die(error);
  function unimplemented() {
    return dead;
  }
  // @effect-diagnostics-next-line floatingEffect:off
  Object.assign(unimplemented, dead);
  Object.setPrototypeOf(unimplemented, Object.getPrototypeOf(dead));
  return unimplemented;
};
/** @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatMap(self, context => succeedContext(f(context))));
/** @internal */
const mapError = exports.mapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => catchAll(self, error => failSync(() => f(error))));
/** @internal */
const matchCause = exports.matchCause = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => {
  const fold = Object.create(proto);
  fold._op_layer = OpCodes.OP_FOLD;
  fold.layer = self;
  fold.failureK = onFailure;
  fold.successK = onSuccess;
  return fold;
});
/** @internal */
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => matchCause(self, {
  onFailure: cause => {
    const failureOrCause = Cause.failureOrCause(cause);
    switch (failureOrCause._tag) {
      case "Left":
        {
          return onFailure(failureOrCause.left);
        }
      case "Right":
        {
          return failCause(failureOrCause.right);
        }
    }
  },
  onSuccess
}));
/** @internal */
const memoize = self => fiberRuntime.scopeWith(scope => core.map(effect.memoize(buildWithScope(self, scope)), fromEffectContext));
/** @internal */
exports.memoize = memoize;
const merge = exports.merge = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWith(self, that, (a, b) => Context.merge(a, b)));
/** @internal */
const mergeAll = (...layers) => {
  const mergeAll = Object.create(proto);
  mergeAll._op_layer = OpCodes.OP_MERGE_ALL;
  mergeAll.layers = layers;
  return mergeAll;
};
/** @internal */
exports.mergeAll = mergeAll;
const orDie = self => catchAll(self, defect => die(defect));
/** @internal */
exports.orDie = orDie;
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => catchAll(self, that));
/** @internal */
const passthrough = self => merge(context(), self);
/** @internal */
exports.passthrough = passthrough;
const project = exports.project = /*#__PURE__*/(0, _Function.dual)(4, (self, tagA, tagB, f) => map(self, context => Context.make(tagB, f(Context.unsafeGet(context, tagA)))));
/** @internal */
const retry = exports.retry = /*#__PURE__*/(0, _Function.dual)(2, (self, schedule) => suspend(() => {
  const stateTag = Context.GenericTag("effect/Layer/retry/{ state: unknown }");
  return (0, _Function.pipe)(succeed(stateTag, {
    state: schedule.initial
  }), flatMap(env => retryLoop(self, schedule, stateTag, (0, _Function.pipe)(env, Context.get(stateTag)).state)));
}));
const retryLoop = (self, schedule, stateTag, state) => {
  return (0, _Function.pipe)(self, catchAll(error => (0, _Function.pipe)(retryUpdate(schedule, stateTag, error, state), flatMap(env => fresh(retryLoop(self, schedule, stateTag, (0, _Function.pipe)(env, Context.get(stateTag)).state))))));
};
const retryUpdate = (schedule, stateTag, error, state) => {
  return fromEffect(stateTag, (0, _Function.pipe)(Clock.currentTimeMillis, core.flatMap(now => (0, _Function.pipe)(schedule.step(now, error, state), core.flatMap(([state, _, decision]) => ScheduleDecision.isDone(decision) ? core.fail(error) : (0, _Function.pipe)(Clock.sleep(Duration.millis(Intervals.start(decision.intervals) - now)), core.as({
    state
  })))))));
};
/** @internal */
const scoped = exports.scoped = /*#__PURE__*/(0, _Function.dual)(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const effect = tagFirst ? b : a;
  return scopedContext(core.map(effect, service => Context.make(tag, service)));
});
/** @internal */
const scopedDiscard = effect => scopedContext((0, _Function.pipe)(effect, core.as(Context.empty())));
/** @internal */
exports.scopedDiscard = scopedDiscard;
const scopedContext = effect => {
  const scoped = Object.create(proto);
  scoped._op_layer = OpCodes.OP_SCOPED;
  scoped.effect = effect;
  return scoped;
};
/** @internal */
exports.scopedContext = scopedContext;
const scope = exports.scope = /*#__PURE__*/scopedContext(/*#__PURE__*/core.map(/*#__PURE__*/fiberRuntime.acquireRelease(/*#__PURE__*/fiberRuntime.scopeMake(), (scope, exit) => scope.close(exit)), scope => Context.make(Scope.Scope, scope)));
/** @internal */
const service = tag => fromEffect(tag, tag);
/** @internal */
exports.service = service;
const succeed = exports.succeed = /*#__PURE__*/(0, _Function.dual)(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const resource = tagFirst ? b : a;
  return fromEffectContext(core.succeed(Context.make(tag, resource)));
});
/** @internal */
const succeedContext = context => {
  return fromEffectContext(core.succeed(context));
};
/** @internal */
exports.succeedContext = succeedContext;
const empty = exports.empty = /*#__PURE__*/succeedContext(/*#__PURE__*/Context.empty());
/** @internal */
const suspend = evaluate => {
  const suspend = Object.create(proto);
  suspend._op_layer = OpCodes.OP_SUSPEND;
  suspend.evaluate = evaluate;
  return suspend;
};
/** @internal */
exports.suspend = suspend;
const sync = exports.sync = /*#__PURE__*/(0, _Function.dual)(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const evaluate = tagFirst ? b : a;
  return fromEffectContext(core.sync(() => Context.make(tag, evaluate())));
});
/** @internal */
const syncContext = evaluate => {
  return fromEffectContext(core.sync(evaluate));
};
/** @internal */
exports.syncContext = syncContext;
const tap = exports.tap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatMap(self, context => fromEffectContext(core.as(f(context), context))));
/** @internal */
const tapError = exports.tapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => catchAll(self, e => fromEffectContext(core.flatMap(f(e), () => core.fail(e)))));
/** @internal */
const tapErrorCause = exports.tapErrorCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => catchAllCause(self, cause => fromEffectContext(core.flatMap(f(cause), () => core.failCause(cause)))));
/** @internal */
const toRuntime = self => (0, _Function.pipe)(fiberRuntime.scopeWith(scope => buildWithScope(self, scope)), core.flatMap(context => (0, _Function.pipe)(runtime.runtime(), core.provideContext(context))));
/** @internal */
exports.toRuntime = toRuntime;
const toRuntimeWithMemoMap = exports.toRuntimeWithMemoMap = /*#__PURE__*/(0, _Function.dual)(2, (self, memoMap) => core.flatMap(fiberRuntime.scopeWith(scope => buildWithMemoMap(self, memoMap, scope)), context => (0, _Function.pipe)(runtime.runtime(), core.provideContext(context))));
/** @internal */
const provide = exports.provide = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => suspend(() => {
  const provideTo = Object.create(proto);
  provideTo._op_layer = OpCodes.OP_PROVIDE;
  provideTo.first = Object.create(proto, {
    _op_layer: {
      value: OpCodes.OP_PROVIDE_MERGE,
      enumerable: true
    },
    first: {
      value: context(),
      enumerable: true
    },
    second: {
      value: Array.isArray(that) ? mergeAll(...that) : that
    },
    zipK: {
      value: (a, b) => (0, _Function.pipe)(a, Context.merge(b))
    }
  });
  provideTo.second = self;
  return provideTo;
}));
/** @internal */
const provideMerge = exports.provideMerge = /*#__PURE__*/(0, _Function.dual)(2, (that, self) => {
  const zipWith = Object.create(proto);
  zipWith._op_layer = OpCodes.OP_PROVIDE_MERGE;
  zipWith.first = self;
  zipWith.second = provide(that, self);
  zipWith.zipK = (a, b) => {
    return (0, _Function.pipe)(a, Context.merge(b));
  };
  return zipWith;
});
/** @internal */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => suspend(() => {
  const zipWith = Object.create(proto);
  zipWith._op_layer = OpCodes.OP_ZIP_WITH;
  zipWith.first = self;
  zipWith.second = that;
  zipWith.zipK = f;
  return zipWith;
}));
/** @internal */
const unwrapEffect = self => {
  const tag = Context.GenericTag("effect/Layer/unwrapEffect/Layer.Layer<R1, E1, A>");
  return flatMap(fromEffect(tag, self), context => Context.get(context, tag));
};
/** @internal */
exports.unwrapEffect = unwrapEffect;
const unwrapScoped = self => {
  const tag = Context.GenericTag("effect/Layer/unwrapScoped/Layer.Layer<R1, E1, A>");
  return flatMap(scoped(tag, self), context => Context.get(context, tag));
};
// -----------------------------------------------------------------------------
// logging
// -----------------------------------------------------------------------------
exports.unwrapScoped = unwrapScoped;
const annotateLogs = exports.annotateLogs = /*#__PURE__*/(0, _Function.dual)(args => isLayer(args[0]), function () {
  const args = arguments;
  return fiberRefLocallyWith(args[0], core.currentLogAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
// -----------------------------------------------------------------------------
// tracing
// -----------------------------------------------------------------------------
const annotateSpans = exports.annotateSpans = /*#__PURE__*/(0, _Function.dual)(args => isLayer(args[0]), function () {
  const args = arguments;
  return fiberRefLocallyWith(args[0], core.currentTracerSpanAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
/** @internal */
const withSpan = function () {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = tracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return unwrapScoped(core.map(options?.onEnd ? core.tap(fiberRuntime.makeSpanScoped(name, options), span => fiberRuntime.addFinalizer(exit => options.onEnd(span, exit))) : fiberRuntime.makeSpanScoped(name, options), span => withParentSpan(self, span)));
  }
  return self => unwrapScoped(core.map(options?.onEnd ? core.tap(fiberRuntime.makeSpanScoped(name, options), span => fiberRuntime.addFinalizer(exit => options.onEnd(span, exit))) : fiberRuntime.makeSpanScoped(name, options), span => withParentSpan(self, span)));
};
/** @internal */
exports.withSpan = withSpan;
const withParentSpan = exports.withParentSpan = /*#__PURE__*/(0, _Function.dual)(2, (self, span) => provide(self, succeedContext(Context.make(tracer.spanTag, span))));
// circular with Effect
const provideSomeLayer = /*#__PURE__*/(0, _Function.dual)(2, (self, layer) => fiberRuntime.scopedWith(scope => core.flatMap(buildWithScope(layer, scope), context => core.provideSomeContext(self, context))));
const provideSomeRuntime = /*#__PURE__*/(0, _Function.dual)(2, (self, rt) => {
  const patchRefs = FiberRefsPatch.diff(runtime.defaultRuntime.fiberRefs, rt.fiberRefs);
  const patchFlags = runtimeFlags.diff(runtime.defaultRuntime.runtimeFlags, rt.runtimeFlags);
  return core.uninterruptibleMask(restore => core.withFiberRuntime(fiber => {
    const oldContext = fiber.getFiberRef(core.currentContext);
    const oldRefs = fiber.getFiberRefs();
    const newRefs = FiberRefsPatch.patch(fiber.id(), oldRefs)(patchRefs);
    const oldFlags = fiber.currentRuntimeFlags;
    const newFlags = runtimeFlags.patch(patchFlags)(oldFlags);
    const rollbackRefs = FiberRefsPatch.diff(newRefs, oldRefs);
    const rollbackFlags = runtimeFlags.diff(newFlags, oldFlags);
    fiber.setFiberRefs(newRefs);
    fiber.currentRuntimeFlags = newFlags;
    return fiberRuntime.ensuring(core.provideSomeContext(restore(self), Context.merge(oldContext, rt.context)), core.withFiberRuntime(fiber => {
      fiber.setFiberRefs(FiberRefsPatch.patch(fiber.id(), fiber.getFiberRefs())(rollbackRefs));
      fiber.currentRuntimeFlags = runtimeFlags.patch(rollbackFlags)(fiber.currentRuntimeFlags);
      return core.void;
    }));
  }));
});
/** @internal */
const effect_provide = exports.effect_provide = /*#__PURE__*/(0, _Function.dual)(2, (self, source) => {
  if (Array.isArray(source)) {
    // @ts-expect-error
    return provideSomeLayer(self, mergeAll(...source));
  } else if (isLayer(source)) {
    return provideSomeLayer(self, source);
  } else if (Context.isContext(source)) {
    return core.provideSomeContext(self, source);
  } else if (circularManagedRuntime.TypeId in source) {
    return core.flatMap(source.runtimeEffect, rt => provideSomeRuntime(self, rt));
  } else {
    return provideSomeRuntime(self, source);
  }
});
//# sourceMappingURL=layer.js.map
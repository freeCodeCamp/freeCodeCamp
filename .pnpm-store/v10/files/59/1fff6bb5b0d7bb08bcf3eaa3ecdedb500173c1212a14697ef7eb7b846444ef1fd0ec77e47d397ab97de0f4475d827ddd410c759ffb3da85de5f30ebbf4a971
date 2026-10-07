import * as Cause from "../Cause.js";
import * as Clock from "../Clock.js";
import * as Context from "../Context.js";
import * as Duration from "../Duration.js";
import * as FiberRefsPatch from "../FiberRefsPatch.js";
import { constTrue, dual, pipe } from "../Function.js";
import * as HashMap from "../HashMap.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as ScheduleDecision from "../ScheduleDecision.js";
import * as Intervals from "../ScheduleIntervals.js";
import * as Scope from "../Scope.js";
import * as effect from "./core-effect.js";
import * as core from "./core.js";
import * as circular from "./effect/circular.js";
import * as ExecutionStrategy from "./executionStrategy.js";
import * as fiberRuntime from "./fiberRuntime.js";
import * as circularManagedRuntime from "./managedRuntime/circular.js";
import * as EffectOpCodes from "./opCodes/effect.js";
import * as OpCodes from "./opCodes/layer.js";
import * as ref from "./ref.js";
import * as runtime from "./runtime.js";
import * as runtimeFlags from "./runtimeFlags.js";
import * as synchronized from "./synchronizedRef.js";
import * as tracer from "./tracer.js";
/** @internal */
const LayerSymbolKey = "effect/Layer";
/** @internal */
export const LayerTypeId = /*#__PURE__*/Symbol.for(LayerSymbolKey);
const layerVariance = {
  /* c8 ignore next */
  _RIn: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _ROut: _ => _
};
/** @internal */
export const proto = {
  [LayerTypeId]: layerVariance,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
const MemoMapTypeIdKey = "effect/Layer/MemoMap";
/** @internal */
export const MemoMapTypeId = /*#__PURE__*/Symbol.for(MemoMapTypeIdKey);
/** @internal */
export const CurrentMemoMap = /*#__PURE__*/Context.Reference()("effect/Layer/CurrentMemoMap", {
  defaultValue: () => unsafeMakeMemoMap()
});
/** @internal */
export const isLayer = u => hasProperty(u, LayerTypeId);
/** @internal */
export const isFresh = self => {
  return self._op_layer === OpCodes.OP_FRESH;
};
// -----------------------------------------------------------------------------
// MemoMap
// -----------------------------------------------------------------------------
/** @internal */
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
    return pipe(synchronized.modifyEffect(this.ref, map => {
      const inMap = map.get(layer);
      if (inMap !== undefined) {
        const [acquire, release] = inMap;
        const cached = pipe(acquire, core.flatMap(([patch, b]) => pipe(effect.patchFiberRefs(patch), core.as(b))), core.onExit(core.exitMatch({
          onFailure: () => core.void,
          onSuccess: () => core.scopeAddFinalizerExit(scope, release)
        })));
        return core.succeed([cached, map]);
      }
      return pipe(ref.make(0), core.flatMap(observers => pipe(core.deferredMake(), core.flatMap(deferred => pipe(ref.make(() => core.void), core.map(finalizerRef => {
        const resource = core.uninterruptibleMask(restore => pipe(fiberRuntime.scopeMake(), core.flatMap(innerScope => pipe(restore(core.flatMap(makeBuilder(layer, innerScope, true), f => effect.diffFiberRefs(f(this)))), core.exit, core.flatMap(exit => {
          switch (exit._tag) {
            case EffectOpCodes.OP_FAILURE:
              {
                return pipe(core.deferredFailCause(deferred, exit.effect_instruction_i0), core.zipRight(core.scopeClose(innerScope, exit)), core.zipRight(core.failCause(exit.effect_instruction_i0)));
              }
            case EffectOpCodes.OP_SUCCESS:
              {
                return pipe(ref.set(finalizerRef, exit => pipe(core.scopeClose(innerScope, exit), core.whenEffect(ref.modify(observers, n => [n === 1, n - 1])), core.asVoid)), core.zipRight(ref.update(observers, n => n + 1)), core.zipRight(core.scopeAddFinalizerExit(scope, exit => pipe(core.sync(() => map.delete(layer)), core.zipRight(ref.get(finalizerRef)), core.flatMap(finalizer => finalizer(exit))))), core.zipRight(core.deferredSucceed(deferred, exit.effect_instruction_i0)), core.as(exit.effect_instruction_i0[1]));
              }
          }
        })))));
        const memoized = [pipe(core.deferredAwait(deferred), core.onExit(core.exitMatchEffect({
          onFailure: () => core.void,
          onSuccess: () => ref.update(observers, n => n + 1)
        }))), exit => pipe(ref.get(finalizerRef), core.flatMap(finalizer => finalizer(exit)))];
        return [resource, isFresh(layer) ? map : map.set(layer, memoized)];
      }))))));
    }), core.flatten);
  }
}
/** @internal */
export const makeMemoMap = /*#__PURE__*/core.suspend(() => core.map(circular.makeSynchronized(new Map()), ref => new MemoMapImpl(ref)));
/** @internal */
export const unsafeMakeMemoMap = () => new MemoMapImpl(circular.unsafeMakeSynchronized(new Map()));
/** @internal */
export const build = self => fiberRuntime.scopeWith(scope => buildWithScope(self, scope));
/** @internal */
export const buildWithScope = /*#__PURE__*/dual(2, (self, scope) => core.flatMap(makeMemoMap, memoMap => buildWithMemoMap(self, memoMap, scope)));
/** @internal */
export const buildWithMemoMap = /*#__PURE__*/dual(3, (self, memoMap, scope) => core.flatMap(makeBuilder(self, scope), run => effect.provideService(run(memoMap), CurrentMemoMap, memoMap)));
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
        return core.sync(() => memoMap => pipe(memoMap.getOrElseMemoize(op.layer, scope), core.matchCauseEffect({
          onFailure: cause => memoMap.getOrElseMemoize(op.failureK(cause), scope),
          onSuccess: value => memoMap.getOrElseMemoize(op.successK(value), scope)
        })));
      }
    case "Fresh":
      {
        return core.sync(() => _ => pipe(op.layer, buildWithScope(scope)));
      }
    case "FromEffect":
      {
        return inMemoMap ? core.sync(() => _ => op.effect) : core.sync(() => memoMap => memoMap.getOrElseMemoize(self, scope));
      }
    case "Provide":
      {
        return core.sync(() => memoMap => pipe(memoMap.getOrElseMemoize(op.first, scope), core.flatMap(env => pipe(memoMap.getOrElseMemoize(op.second, scope), core.provideContext(env)))));
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
        return core.sync(() => memoMap => pipe(memoMap.getOrElseMemoize(op.first, scope), core.zipWith(memoMap.getOrElseMemoize(op.second, scope), op.zipK)));
      }
    case "ZipWith":
      {
        return core.gen(function* () {
          const parallelScope = yield* core.scopeFork(scope, ExecutionStrategy.parallel);
          const firstScope = yield* core.scopeFork(parallelScope, ExecutionStrategy.sequential);
          const secondScope = yield* core.scopeFork(parallelScope, ExecutionStrategy.sequential);
          return memoMap => pipe(memoMap.getOrElseMemoize(op.first, firstScope), fiberRuntime.zipWithOptions(memoMap.getOrElseMemoize(op.second, secondScope), op.zipK, {
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
export const catchAll = /*#__PURE__*/dual(2, (self, onFailure) => match(self, {
  onFailure,
  onSuccess: succeedContext
}));
/** @internal */
export const catchAllCause = /*#__PURE__*/dual(2, (self, onFailure) => matchCause(self, {
  onFailure,
  onSuccess: succeedContext
}));
/** @internal */
export const die = defect => failCause(Cause.die(defect));
/** @internal */
export const dieSync = evaluate => failCauseSync(() => Cause.die(evaluate()));
/** @internal */
export const discard = self => map(self, () => Context.empty());
/** @internal */
export const context = () => fromEffectContext(core.context());
/** @internal */
export const extendScope = self => {
  const extendScope = Object.create(proto);
  extendScope._op_layer = OpCodes.OP_EXTEND_SCOPE;
  extendScope.layer = self;
  return extendScope;
};
/** @internal */
export const fail = error => failCause(Cause.fail(error));
/** @internal */
export const failSync = evaluate => failCauseSync(() => Cause.fail(evaluate()));
/** @internal */
export const failCause = cause => fromEffectContext(core.failCause(cause));
/** @internal */
export const failCauseSync = evaluate => fromEffectContext(core.failCauseSync(evaluate));
/** @internal */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => match(self, {
  onFailure: fail,
  onSuccess: f
}));
/** @internal */
export const flatten = /*#__PURE__*/dual(2, (self, tag) => flatMap(self, Context.get(tag)));
/** @internal */
export const fresh = self => {
  const fresh = Object.create(proto);
  fresh._op_layer = OpCodes.OP_FRESH;
  fresh.layer = self;
  return fresh;
};
/** @internal */
export const fromEffect = /*#__PURE__*/dual(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const effect = tagFirst ? b : a;
  return fromEffectContext(core.map(effect, service => Context.make(tag, service)));
});
/** @internal */
export const fromEffectDiscard = effect => fromEffectContext(core.map(effect, () => Context.empty()));
/** @internal */
export function fromEffectContext(effect) {
  const fromEffect = Object.create(proto);
  fromEffect._op_layer = OpCodes.OP_FROM_EFFECT;
  fromEffect.effect = effect;
  return fromEffect;
}
/** @internal */
export const fiberRefLocally = /*#__PURE__*/dual(3, (self, ref, value) => locallyEffect(self, core.fiberRefLocally(ref, value)));
/** @internal */
export const locallyEffect = /*#__PURE__*/dual(2, (self, f) => {
  const locally = Object.create(proto);
  locally._op_layer = "Locally";
  locally.self = self;
  locally.f = f;
  return locally;
});
/** @internal */
export const fiberRefLocallyWith = /*#__PURE__*/dual(3, (self, ref, value) => locallyEffect(self, core.fiberRefLocallyWith(ref, value)));
/** @internal */
export const fiberRefLocallyScoped = (self, value) => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(self, value));
/** @internal */
export const fiberRefLocallyScopedWith = (self, value) => scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(self, value));
/** @internal */
export const fromFunction = (tagA, tagB, f) => fromEffectContext(core.map(tagA, a => Context.make(tagB, f(a))));
/** @internal */
export const launch = self => fiberRuntime.scopedEffect(core.zipRight(fiberRuntime.scopeWith(scope => pipe(self, buildWithScope(scope))), core.never));
/** @internal */
export const mock = function () {
  if (arguments.length === 1) {
    return service => mockImpl(arguments[0], service);
  }
  return mockImpl(arguments[0], arguments[1]);
};
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
  has: constTrue
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
export const map = /*#__PURE__*/dual(2, (self, f) => flatMap(self, context => succeedContext(f(context))));
/** @internal */
export const mapError = /*#__PURE__*/dual(2, (self, f) => catchAll(self, error => failSync(() => f(error))));
/** @internal */
export const matchCause = /*#__PURE__*/dual(2, (self, {
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
export const match = /*#__PURE__*/dual(2, (self, {
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
export const memoize = self => fiberRuntime.scopeWith(scope => core.map(effect.memoize(buildWithScope(self, scope)), fromEffectContext));
/** @internal */
export const merge = /*#__PURE__*/dual(2, (self, that) => zipWith(self, that, (a, b) => Context.merge(a, b)));
/** @internal */
export const mergeAll = (...layers) => {
  const mergeAll = Object.create(proto);
  mergeAll._op_layer = OpCodes.OP_MERGE_ALL;
  mergeAll.layers = layers;
  return mergeAll;
};
/** @internal */
export const orDie = self => catchAll(self, defect => die(defect));
/** @internal */
export const orElse = /*#__PURE__*/dual(2, (self, that) => catchAll(self, that));
/** @internal */
export const passthrough = self => merge(context(), self);
/** @internal */
export const project = /*#__PURE__*/dual(4, (self, tagA, tagB, f) => map(self, context => Context.make(tagB, f(Context.unsafeGet(context, tagA)))));
/** @internal */
export const retry = /*#__PURE__*/dual(2, (self, schedule) => suspend(() => {
  const stateTag = Context.GenericTag("effect/Layer/retry/{ state: unknown }");
  return pipe(succeed(stateTag, {
    state: schedule.initial
  }), flatMap(env => retryLoop(self, schedule, stateTag, pipe(env, Context.get(stateTag)).state)));
}));
const retryLoop = (self, schedule, stateTag, state) => {
  return pipe(self, catchAll(error => pipe(retryUpdate(schedule, stateTag, error, state), flatMap(env => fresh(retryLoop(self, schedule, stateTag, pipe(env, Context.get(stateTag)).state))))));
};
const retryUpdate = (schedule, stateTag, error, state) => {
  return fromEffect(stateTag, pipe(Clock.currentTimeMillis, core.flatMap(now => pipe(schedule.step(now, error, state), core.flatMap(([state, _, decision]) => ScheduleDecision.isDone(decision) ? core.fail(error) : pipe(Clock.sleep(Duration.millis(Intervals.start(decision.intervals) - now)), core.as({
    state
  })))))));
};
/** @internal */
export const scoped = /*#__PURE__*/dual(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const effect = tagFirst ? b : a;
  return scopedContext(core.map(effect, service => Context.make(tag, service)));
});
/** @internal */
export const scopedDiscard = effect => scopedContext(pipe(effect, core.as(Context.empty())));
/** @internal */
export const scopedContext = effect => {
  const scoped = Object.create(proto);
  scoped._op_layer = OpCodes.OP_SCOPED;
  scoped.effect = effect;
  return scoped;
};
/** @internal */
export const scope = /*#__PURE__*/scopedContext(/*#__PURE__*/core.map(/*#__PURE__*/fiberRuntime.acquireRelease(/*#__PURE__*/fiberRuntime.scopeMake(), (scope, exit) => scope.close(exit)), scope => Context.make(Scope.Scope, scope)));
/** @internal */
export const service = tag => fromEffect(tag, tag);
/** @internal */
export const succeed = /*#__PURE__*/dual(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const resource = tagFirst ? b : a;
  return fromEffectContext(core.succeed(Context.make(tag, resource)));
});
/** @internal */
export const succeedContext = context => {
  return fromEffectContext(core.succeed(context));
};
/** @internal */
export const empty = /*#__PURE__*/succeedContext(/*#__PURE__*/Context.empty());
/** @internal */
export const suspend = evaluate => {
  const suspend = Object.create(proto);
  suspend._op_layer = OpCodes.OP_SUSPEND;
  suspend.evaluate = evaluate;
  return suspend;
};
/** @internal */
export const sync = /*#__PURE__*/dual(2, (a, b) => {
  const tagFirst = Context.isTag(a);
  const tag = tagFirst ? a : b;
  const evaluate = tagFirst ? b : a;
  return fromEffectContext(core.sync(() => Context.make(tag, evaluate())));
});
/** @internal */
export const syncContext = evaluate => {
  return fromEffectContext(core.sync(evaluate));
};
/** @internal */
export const tap = /*#__PURE__*/dual(2, (self, f) => flatMap(self, context => fromEffectContext(core.as(f(context), context))));
/** @internal */
export const tapError = /*#__PURE__*/dual(2, (self, f) => catchAll(self, e => fromEffectContext(core.flatMap(f(e), () => core.fail(e)))));
/** @internal */
export const tapErrorCause = /*#__PURE__*/dual(2, (self, f) => catchAllCause(self, cause => fromEffectContext(core.flatMap(f(cause), () => core.failCause(cause)))));
/** @internal */
export const toRuntime = self => pipe(fiberRuntime.scopeWith(scope => buildWithScope(self, scope)), core.flatMap(context => pipe(runtime.runtime(), core.provideContext(context))));
/** @internal */
export const toRuntimeWithMemoMap = /*#__PURE__*/dual(2, (self, memoMap) => core.flatMap(fiberRuntime.scopeWith(scope => buildWithMemoMap(self, memoMap, scope)), context => pipe(runtime.runtime(), core.provideContext(context))));
/** @internal */
export const provide = /*#__PURE__*/dual(2, (self, that) => suspend(() => {
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
      value: (a, b) => pipe(a, Context.merge(b))
    }
  });
  provideTo.second = self;
  return provideTo;
}));
/** @internal */
export const provideMerge = /*#__PURE__*/dual(2, (that, self) => {
  const zipWith = Object.create(proto);
  zipWith._op_layer = OpCodes.OP_PROVIDE_MERGE;
  zipWith.first = self;
  zipWith.second = provide(that, self);
  zipWith.zipK = (a, b) => {
    return pipe(a, Context.merge(b));
  };
  return zipWith;
});
/** @internal */
export const zipWith = /*#__PURE__*/dual(3, (self, that, f) => suspend(() => {
  const zipWith = Object.create(proto);
  zipWith._op_layer = OpCodes.OP_ZIP_WITH;
  zipWith.first = self;
  zipWith.second = that;
  zipWith.zipK = f;
  return zipWith;
}));
/** @internal */
export const unwrapEffect = self => {
  const tag = Context.GenericTag("effect/Layer/unwrapEffect/Layer.Layer<R1, E1, A>");
  return flatMap(fromEffect(tag, self), context => Context.get(context, tag));
};
/** @internal */
export const unwrapScoped = self => {
  const tag = Context.GenericTag("effect/Layer/unwrapScoped/Layer.Layer<R1, E1, A>");
  return flatMap(scoped(tag, self), context => Context.get(context, tag));
};
// -----------------------------------------------------------------------------
// logging
// -----------------------------------------------------------------------------
export const annotateLogs = /*#__PURE__*/dual(args => isLayer(args[0]), function () {
  const args = arguments;
  return fiberRefLocallyWith(args[0], core.currentLogAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
// -----------------------------------------------------------------------------
// tracing
// -----------------------------------------------------------------------------
export const annotateSpans = /*#__PURE__*/dual(args => isLayer(args[0]), function () {
  const args = arguments;
  return fiberRefLocallyWith(args[0], core.currentTracerSpanAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
/** @internal */
export const withSpan = function () {
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
export const withParentSpan = /*#__PURE__*/dual(2, (self, span) => provide(self, succeedContext(Context.make(tracer.spanTag, span))));
// circular with Effect
const provideSomeLayer = /*#__PURE__*/dual(2, (self, layer) => fiberRuntime.scopedWith(scope => core.flatMap(buildWithScope(layer, scope), context => core.provideSomeContext(self, context))));
const provideSomeRuntime = /*#__PURE__*/dual(2, (self, rt) => {
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
export const effect_provide = /*#__PURE__*/dual(2, (self, source) => {
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
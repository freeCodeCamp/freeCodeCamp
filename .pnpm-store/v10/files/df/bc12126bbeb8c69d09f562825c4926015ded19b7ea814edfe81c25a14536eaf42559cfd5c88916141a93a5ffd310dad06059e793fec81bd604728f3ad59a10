"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.isManagedRuntime = void 0;
var Effectable = _interopRequireWildcard(require("../Effectable.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var Scheduler = _interopRequireWildcard(require("../Scheduler.js"));
var Scope = _interopRequireWildcard(require("../Scope.js"));
var core = _interopRequireWildcard(require("./core.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var internalLayer = _interopRequireWildcard(require("./layer.js"));
var circular = _interopRequireWildcard(require("./managedRuntime/circular.js"));
var internalRuntime = _interopRequireWildcard(require("./runtime.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const isManagedRuntime = u => (0, _Predicate.hasProperty)(u, circular.TypeId);
exports.isManagedRuntime = isManagedRuntime;
function provide(managed, effect) {
  return core.flatMap(managed.runtimeEffect, rt => core.withFiberRuntime(fiber => {
    fiber.setFiberRefs(rt.fiberRefs);
    fiber.currentRuntimeFlags = rt.runtimeFlags;
    return core.provideContext(effect, rt.context);
  }));
}
const ManagedRuntimeProto = {
  ...Effectable.CommitPrototype,
  [circular.TypeId]: circular.TypeId,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  commit() {
    return this.runtimeEffect;
  }
};
/** @internal */
const make = (layer, memoMap) => {
  memoMap = memoMap ?? internalLayer.unsafeMakeMemoMap();
  const scope = internalRuntime.unsafeRunSyncEffect(fiberRuntime.scopeMake());
  let buildFiber;
  const runtimeEffect = core.suspend(() => {
    if (!buildFiber) {
      const scheduler = new Scheduler.SyncScheduler();
      buildFiber = internalRuntime.unsafeForkEffect(core.tap(Scope.extend(internalLayer.toRuntimeWithMemoMap(layer, memoMap), scope), rt => {
        self.cachedRuntime = rt;
      }), {
        scope,
        scheduler
      });
      scheduler.flush();
    }
    return core.flatten(buildFiber.await);
  });
  const self = Object.assign(Object.create(ManagedRuntimeProto), {
    memoMap,
    scope,
    runtimeEffect,
    cachedRuntime: undefined,
    runtime() {
      return self.cachedRuntime === undefined ? internalRuntime.unsafeRunPromiseEffect(self.runtimeEffect) : Promise.resolve(self.cachedRuntime);
    },
    dispose() {
      return internalRuntime.unsafeRunPromiseEffect(self.disposeEffect);
    },
    disposeEffect: core.suspend(() => {
      ;
      self.runtimeEffect = core.die("ManagedRuntime disposed");
      self.cachedRuntime = undefined;
      return Scope.close(self.scope, core.exitVoid);
    }),
    runFork(effect, options) {
      return self.cachedRuntime === undefined ? internalRuntime.unsafeForkEffect(provide(self, effect), options) : internalRuntime.unsafeFork(self.cachedRuntime)(effect, options);
    },
    runSyncExit(effect) {
      return self.cachedRuntime === undefined ? internalRuntime.unsafeRunSyncExitEffect(provide(self, effect)) : internalRuntime.unsafeRunSyncExit(self.cachedRuntime)(effect);
    },
    runSync(effect) {
      return self.cachedRuntime === undefined ? internalRuntime.unsafeRunSyncEffect(provide(self, effect)) : internalRuntime.unsafeRunSync(self.cachedRuntime)(effect);
    },
    runPromiseExit(effect, options) {
      return self.cachedRuntime === undefined ? internalRuntime.unsafeRunPromiseExitEffect(provide(self, effect), options) : internalRuntime.unsafeRunPromiseExit(self.cachedRuntime)(effect, options);
    },
    runCallback(effect, options) {
      return self.cachedRuntime === undefined ? internalRuntime.unsafeRunCallback(internalRuntime.defaultRuntime)(provide(self, effect), options) : internalRuntime.unsafeRunCallback(self.cachedRuntime)(effect, options);
    },
    runPromise(effect, options) {
      return self.cachedRuntime === undefined ? internalRuntime.unsafeRunPromiseEffect(provide(self, effect), options) : internalRuntime.unsafeRunPromise(self.cachedRuntime)(effect, options);
    }
  });
  return self;
};
exports.make = make;
//# sourceMappingURL=managedRuntime.js.map
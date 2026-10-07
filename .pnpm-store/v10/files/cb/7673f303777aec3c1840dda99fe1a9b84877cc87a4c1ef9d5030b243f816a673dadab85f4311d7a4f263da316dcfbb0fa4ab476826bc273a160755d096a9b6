import * as Effectable from "../Effectable.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as Scheduler from "../Scheduler.js";
import * as Scope from "../Scope.js";
import * as core from "./core.js";
import * as fiberRuntime from "./fiberRuntime.js";
import * as internalLayer from "./layer.js";
import * as circular from "./managedRuntime/circular.js";
import * as internalRuntime from "./runtime.js";
/** @internal */
export const isManagedRuntime = u => hasProperty(u, circular.TypeId);
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
    return pipeArguments(this, arguments);
  },
  commit() {
    return this.runtimeEffect;
  }
};
/** @internal */
export const make = (layer, memoMap) => {
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
//# sourceMappingURL=managedRuntime.js.map
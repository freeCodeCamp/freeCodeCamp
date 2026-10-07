import type * as Effect from "../Effect.js"
import * as Effectable from "../Effectable.js"
import type { Exit } from "../Exit.js"
import type * as Fiber from "../Fiber.js"
import type * as Layer from "../Layer.js"
import type * as M from "../ManagedRuntime.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type * as Runtime from "../Runtime.js"
import * as Scheduler from "../Scheduler.js"
import * as Scope from "../Scope.js"
import type { Mutable } from "../Types.js"
import * as core from "./core.js"
import * as fiberRuntime from "./fiberRuntime.js"
import * as internalLayer from "./layer.js"
import * as circular from "./managedRuntime/circular.js"
import * as internalRuntime from "./runtime.js"

interface ManagedRuntimeImpl<R, E> extends M.ManagedRuntime<R, E> {
  readonly scope: Scope.CloseableScope
  cachedRuntime: Runtime.Runtime<R> | undefined
}

/** @internal */
export const isManagedRuntime = (u: unknown): u is M.ManagedRuntime<unknown, unknown> => hasProperty(u, circular.TypeId)

function provide<R, ER, A, E>(
  managed: ManagedRuntimeImpl<R, ER>,
  effect: Effect.Effect<A, E, R>
): Effect.Effect<A, E | ER> {
  return core.flatMap(
    managed.runtimeEffect,
    (rt) =>
      core.withFiberRuntime((fiber) => {
        fiber.setFiberRefs(rt.fiberRefs)
        fiber.currentRuntimeFlags = rt.runtimeFlags
        return core.provideContext(effect, rt.context)
      })
  )
}

const ManagedRuntimeProto = {
  ...Effectable.CommitPrototype,
  [circular.TypeId]: circular.TypeId,
  pipe() {
    return pipeArguments(this, arguments)
  },
  commit(this: ManagedRuntimeImpl<unknown, unknown>) {
    return this.runtimeEffect
  }
}

/** @internal */
export const make = <R, ER>(
  layer: Layer.Layer<R, ER, never>,
  memoMap?: Layer.MemoMap
): M.ManagedRuntime<R, ER> => {
  memoMap = memoMap ?? internalLayer.unsafeMakeMemoMap()
  const scope = internalRuntime.unsafeRunSyncEffect(fiberRuntime.scopeMake())
  let buildFiber: Fiber.RuntimeFiber<Runtime.Runtime<R>, ER> | undefined
  const runtimeEffect = core.suspend(() => {
    if (!buildFiber) {
      const scheduler = new Scheduler.SyncScheduler()
      buildFiber = internalRuntime.unsafeForkEffect(
        core.tap(
          Scope.extend(
            internalLayer.toRuntimeWithMemoMap(layer, memoMap),
            scope
          ),
          (rt) => {
            self.cachedRuntime = rt
          }
        ),
        { scope, scheduler }
      )
      scheduler.flush()
    }
    return core.flatten(buildFiber.await)
  })
  const self: ManagedRuntimeImpl<R, ER> = Object.assign(Object.create(ManagedRuntimeProto), {
    memoMap,
    scope,
    runtimeEffect,
    cachedRuntime: undefined,
    runtime() {
      return self.cachedRuntime === undefined ?
        internalRuntime.unsafeRunPromiseEffect(self.runtimeEffect) :
        Promise.resolve(self.cachedRuntime)
    },
    dispose(): Promise<void> {
      return internalRuntime.unsafeRunPromiseEffect(self.disposeEffect)
    },
    disposeEffect: core.suspend(() => {
      ;(self as Mutable<ManagedRuntimeImpl<R, ER>>).runtimeEffect = core.die("ManagedRuntime disposed")
      self.cachedRuntime = undefined
      return Scope.close(self.scope, core.exitVoid)
    }),
    runFork<A, E>(effect: Effect.Effect<A, E, R>, options?: Runtime.RunForkOptions): Fiber.RuntimeFiber<A, E | ER> {
      return self.cachedRuntime === undefined ?
        internalRuntime.unsafeForkEffect(provide(self, effect), options) :
        internalRuntime.unsafeFork(self.cachedRuntime)(effect, options)
    },
    runSyncExit<A, E>(effect: Effect.Effect<A, E, R>): Exit<A, E | ER> {
      return self.cachedRuntime === undefined ?
        internalRuntime.unsafeRunSyncExitEffect(provide(self, effect)) :
        internalRuntime.unsafeRunSyncExit(self.cachedRuntime)(effect)
    },
    runSync<A, E>(effect: Effect.Effect<A, E, R>): A {
      return self.cachedRuntime === undefined ?
        internalRuntime.unsafeRunSyncEffect(provide(self, effect)) :
        internalRuntime.unsafeRunSync(self.cachedRuntime)(effect)
    },
    runPromiseExit<A, E>(effect: Effect.Effect<A, E, R>, options?: {
      readonly signal?: AbortSignal | undefined
    }): Promise<Exit<A, E | ER>> {
      return self.cachedRuntime === undefined ?
        internalRuntime.unsafeRunPromiseExitEffect(provide(self, effect), options) :
        internalRuntime.unsafeRunPromiseExit(self.cachedRuntime)(effect, options)
    },
    runCallback<A, E>(
      effect: Effect.Effect<A, E, R>,
      options?: Runtime.RunCallbackOptions<A, E | ER> | undefined
    ): Runtime.Cancel<A, E | ER> {
      return self.cachedRuntime === undefined ?
        internalRuntime.unsafeRunCallback(internalRuntime.defaultRuntime)(provide(self, effect), options) :
        internalRuntime.unsafeRunCallback(self.cachedRuntime)(effect, options)
    },
    runPromise<A, E>(effect: Effect.Effect<A, E, R>, options?: {
      readonly signal?: AbortSignal | undefined
    }): Promise<A> {
      return self.cachedRuntime === undefined ?
        internalRuntime.unsafeRunPromiseEffect(provide(self, effect), options) :
        internalRuntime.unsafeRunPromise(self.cachedRuntime)(effect, options)
    }
  })
  return self
}

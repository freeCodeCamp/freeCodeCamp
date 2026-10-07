import type * as Effect from "../Effect.js"
import { identity, pipe } from "../Function.js"
import type * as Resource from "../Resource.js"
import type * as Schedule from "../Schedule.js"
import type * as Scope from "../Scope.js"
import * as core from "./core.js"
import * as effectable from "./effectable.js"
import * as fiberRuntime from "./fiberRuntime.js"
import * as schedule_ from "./schedule.js"
import * as scopedRef from "./scopedRef.js"

/** @internal */
const ResourceSymbolKey = "effect/Resource"

/** @internal */
export const ResourceTypeId: Resource.ResourceTypeId = Symbol.for(
  ResourceSymbolKey
) as Resource.ResourceTypeId

const resourceVariance = {
  /* c8 ignore next */
  _E: (_: any) => _,
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal  */
const proto: ThisType<Resource.Resource<any, any>> = {
  ...effectable.CommitPrototype,
  commit() {
    return get(this)
  },
  [ResourceTypeId]: resourceVariance
}

/** @internal */
export const auto = <A, E, R, Out, R2>(
  acquire: Effect.Effect<A, E, R>,
  policy: Schedule.Schedule<Out, unknown, R2>
): Effect.Effect<Resource.Resource<A, E>, never, R | R2 | Scope.Scope> =>
  core.tap(manual(acquire), (manual) =>
    fiberRuntime.acquireRelease(
      pipe(
        refresh(manual),
        schedule_.schedule_Effect(policy),
        core.interruptible,
        fiberRuntime.forkDaemon
      ),
      core.interruptFiber
    ))

/** @internal */
export const manual = <A, E, R>(
  acquire: Effect.Effect<A, E, R>
): Effect.Effect<Resource.Resource<A, E>, never, R | Scope.Scope> =>
  core.flatMap(core.context<R>(), (env) =>
    pipe(
      scopedRef.fromAcquire(core.exit(acquire)),
      core.map((ref) => {
        const resource = Object.create(proto)
        resource.scopedRef = ref
        resource.acquire = core.provideContext(acquire, env)
        return resource
      })
    ))

/** @internal */
export const get = <A, E>(self: Resource.Resource<A, E>): Effect.Effect<A, E> =>
  core.flatMap(scopedRef.get(self.scopedRef), identity)

/** @internal */
export const refresh = <A, E>(self: Resource.Resource<A, E>): Effect.Effect<void, E> =>
  scopedRef.set(
    self.scopedRef,
    core.map(self.acquire, core.exitSucceed)
  )

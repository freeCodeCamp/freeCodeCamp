import * as Context from "../Context.js"
import type * as Effect from "../Effect.js"
import type { LazyArg } from "../Function.js"
import { dual, pipe } from "../Function.js"
import type * as Scope from "../Scope.js"
import type * as ScopedRef from "../ScopedRef.js"
import * as core from "./core.js"
import * as circular from "./effect/circular.js"
import * as effectable from "./effectable.js"
import * as fiberRuntime from "./fiberRuntime.js"
import * as ref from "./ref.js"
import * as synchronized from "./synchronizedRef.js"

/** @internal */
const ScopedRefSymbolKey = "effect/ScopedRef"

/** @internal */
export const ScopedRefTypeId: ScopedRef.ScopedRefTypeId = Symbol.for(
  ScopedRefSymbolKey
) as ScopedRef.ScopedRefTypeId

/** @internal */
const scopedRefVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal  */
const proto: ThisType<ScopedRef.ScopedRef<any>> = {
  ...effectable.CommitPrototype,
  commit() {
    return get(this)
  },
  [ScopedRefTypeId]: scopedRefVariance
}

/** @internal  */
const close = <A>(self: ScopedRef.ScopedRef<A>): Effect.Effect<void> =>
  core.flatMap(ref.get(self.ref), (tuple) => tuple[0].close(core.exitVoid))

/** @internal */
export const fromAcquire = <A, E, R>(
  acquire: Effect.Effect<A, E, R>
): Effect.Effect<ScopedRef.ScopedRef<A>, E, R | Scope.Scope> =>
  core.uninterruptible(
    fiberRuntime.scopeMake().pipe(core.flatMap((newScope) =>
      acquire.pipe(
        core.mapInputContext<R, Scope.Scope | R>(Context.add(fiberRuntime.scopeTag, newScope)),
        core.onError((cause) => newScope.close(core.exitFail(cause))),
        core.flatMap((value) =>
          circular.makeSynchronized([newScope, value] as const).pipe(
            core.flatMap((ref) => {
              const scopedRef = Object.create(proto)
              scopedRef.ref = ref
              return pipe(
                fiberRuntime.addFinalizer(() => close(scopedRef)),
                core.as(scopedRef)
              )
            })
          )
        )
      )
    ))
  )

/** @internal */
export const get = <A>(self: ScopedRef.ScopedRef<A>): Effect.Effect<A> =>
  core.map(ref.get(self.ref), (tuple) => tuple[1])

/** @internal */
export const make = <A>(evaluate: LazyArg<A>): Effect.Effect<ScopedRef.ScopedRef<A>, never, Scope.Scope> =>
  fromAcquire(core.sync(evaluate))

/** @internal */
export const set = dual<
  <A, R, E>(
    acquire: Effect.Effect<A, E, R>
  ) => (self: ScopedRef.ScopedRef<A>) => Effect.Effect<void, E, Exclude<R, Scope.Scope>>,
  <A, R, E>(
    self: ScopedRef.ScopedRef<A>,
    acquire: Effect.Effect<A, E, R>
  ) => Effect.Effect<void, E, Exclude<R, Scope.Scope>>
>(2, <A, R, E>(
  self: ScopedRef.ScopedRef<A>,
  acquire: Effect.Effect<A, E, R>
) =>
  core.flatten(
    synchronized.modifyEffect(self.ref, ([oldScope, value]) =>
      core.uninterruptible(
        core.scopeClose(oldScope, core.exitVoid).pipe(
          core.zipRight(fiberRuntime.scopeMake()),
          core.flatMap((newScope) =>
            core.exit(fiberRuntime.scopeExtend(acquire, newScope)).pipe(
              core.flatMap((exit) =>
                core.exitMatch(exit, {
                  onFailure: (cause) =>
                    core.scopeClose(newScope, core.exitVoid).pipe(
                      core.as(
                        [
                          core.failCause(cause) as Effect.Effect<void, E>,
                          [oldScope, value] as const
                        ] as const
                      )
                    ),
                  onSuccess: (value) =>
                    core.succeed(
                      [
                        core.void as Effect.Effect<void, E>,
                        [newScope, value] as const
                      ] as const
                    )
                })
              )
            )
          )
        )
      ))
  ))

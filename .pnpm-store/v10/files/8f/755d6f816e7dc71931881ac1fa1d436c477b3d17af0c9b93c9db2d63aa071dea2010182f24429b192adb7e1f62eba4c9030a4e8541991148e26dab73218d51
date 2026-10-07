import * as Context from "../Context.js"
import * as Duration from "../Duration.js"
import type { Effect } from "../Effect.js"
import * as Effectable from "../Effectable.js"
import type { RuntimeFiber } from "../Fiber.js"
import { identity } from "../Function.js"
import type * as RcRef from "../RcRef.js"
import * as Readable from "../Readable.js"
import type * as Scope from "../Scope.js"
import * as coreEffect from "./core-effect.js"
import * as core from "./core.js"
import * as circular from "./effect/circular.js"
import * as fiberRuntime from "./fiberRuntime.js"

/** @internal */
export const TypeId: RcRef.TypeId = Symbol.for("effect/RcRef") as RcRef.TypeId

type State<A> = State.Empty | State.Acquired<A> | State.Closed

declare namespace State {
  interface Empty {
    readonly _tag: "Empty"
  }

  interface Acquired<A> {
    readonly _tag: "Acquired"
    readonly value: A
    readonly scope: Scope.CloseableScope
    fiber: RuntimeFiber<void, never> | undefined
    refCount: number
  }

  interface Closed {
    readonly _tag: "Closed"
  }
}

const stateEmpty: State<never> = { _tag: "Empty" }
const stateClosed: State<never> = { _tag: "Closed" }

const variance: RcRef.RcRef.Variance<any, any> = {
  _A: identity,
  _E: identity
}

class RcRefImpl<A, E> extends Effectable.Class<A, E, Scope.Scope> implements RcRef.RcRef<A, E> {
  readonly [TypeId]: RcRef.RcRef.Variance<A, E> = variance
  readonly [Readable.TypeId]: Readable.TypeId = Readable.TypeId

  state: State<A> = stateEmpty
  readonly semaphore = circular.unsafeMakeSemaphore(1)

  constructor(
    readonly acquire: Effect<A, E, Scope.Scope>,
    readonly context: Context.Context<never>,
    readonly scope: Scope.Scope,
    readonly idleTimeToLive: Duration.Duration | undefined
  ) {
    super()
    this.get = get(this)
  }
  readonly get: Effect<A, E, Scope.Scope>

  commit() {
    return this.get
  }
}

/** @internal */
export const make = <A, E, R>(options: {
  readonly acquire: Effect<A, E, R>
  readonly idleTimeToLive?: Duration.DurationInput | undefined
}) =>
  core.withFiberRuntime<RcRef.RcRef<A, E>, never, R | Scope.Scope>((fiber) => {
    const context = fiber.getFiberRef(core.currentContext) as Context.Context<R | Scope.Scope>
    const scope = Context.get(context, fiberRuntime.scopeTag)
    const ref = new RcRefImpl<A, E>(
      options.acquire as Effect<A, E, Scope.Scope>,
      context,
      scope,
      options.idleTimeToLive ? Duration.decode(options.idleTimeToLive) : undefined
    )
    return core.as(
      scope.addFinalizer(() =>
        ref.semaphore.withPermits(1)(core.suspend(() => {
          const close = ref.state._tag === "Acquired"
            ? core.scopeClose(ref.state.scope, core.exitVoid)
            : core.void
          ref.state = stateClosed
          return close
        }))
      ),
      ref
    )
  })

/** @internal */
export const get = <A, E>(
  self_: RcRef.RcRef<A, E>
): Effect<A, E, Scope.Scope> => {
  const self = self_ as RcRefImpl<A, E>
  const isInfinite = self.idleTimeToLive && !Duration.isFinite(self.idleTimeToLive)
  return core.uninterruptibleMask((restore) =>
    core.suspend(() => {
      switch (self.state._tag) {
        case "Closed": {
          return core.interrupt
        }
        case "Acquired": {
          self.state.refCount++
          return self.state.fiber
            ? core.as(core.interruptFiber(self.state.fiber), self.state)
            : core.succeed(self.state)
        }
        case "Empty": {
          return fiberRuntime.scopeMake().pipe(
            coreEffect.bindTo("scope"),
            coreEffect.bind("value", ({ scope }) =>
              restore(core.fiberRefLocally(
                self.acquire as Effect<A, E>,
                core.currentContext,
                Context.add(self.context, fiberRuntime.scopeTag, scope)
              ))),
            core.map(({ scope, value }) => {
              const state: State.Acquired<A> = {
                _tag: "Acquired",
                value,
                scope,
                fiber: undefined,
                refCount: 1
              }
              self.state = state
              return state
            })
          )
        }
      }
    })
  ).pipe(
    self.semaphore.withPermits(1),
    coreEffect.bindTo("state"),
    coreEffect.bind("scope", () => fiberRuntime.scopeTag),
    core.tap(({ scope, state }) =>
      scope.addFinalizer(() =>
        core.suspend(() => {
          state.refCount--
          if (state.refCount > 0 || isInfinite) {
            return core.void
          }
          if (self.idleTimeToLive === undefined) {
            self.state = stateEmpty
            return core.scopeClose(state.scope, core.exitVoid)
          }
          return coreEffect.sleep(self.idleTimeToLive).pipe(
            core.interruptible,
            core.zipRight(core.suspend(() => {
              if (self.state._tag === "Acquired" && self.state.refCount === 0) {
                self.state = stateEmpty
                return core.scopeClose(state.scope, core.exitVoid)
              }
              return core.void
            })),
            fiberRuntime.ensuring(core.sync(() => {
              state.fiber = undefined
            })),
            circular.forkIn(self.scope),
            core.tap((fiber) => {
              state.fiber = fiber
            }),
            self.semaphore.withPermits(1)
          )
        })
      )
    ),
    core.map(({ state }) => state.value)
  )
}

/** @internal */
export const invalidate = <A, E>(
  self_: RcRef.RcRef<A, E>
): Effect<void> => {
  const self = self_ as RcRefImpl<A, E>
  return core.uninterruptible(core.suspend(() => {
    if (self.state._tag !== "Acquired") {
      return core.void
    }
    const state = self.state
    self.state = stateEmpty
    return state.scope.close(core.exitVoid)
  }))
}

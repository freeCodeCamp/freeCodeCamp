import * as FiberId from "../FiberId.js"
import { globalValue } from "../GlobalValue.js"
import type * as RuntimeFlags from "../RuntimeFlags.js"
import * as FiberMessage from "./fiberMessage.js"
import type * as FiberRuntime from "./fiberRuntime.js"

/** @internal */
const FiberScopeSymbolKey = "effect/FiberScope"

/** @internal */
export const FiberScopeTypeId = Symbol.for(FiberScopeSymbolKey)

export type FiberScopeTypeId = typeof FiberScopeTypeId

/**
 * A `FiberScope` represents the scope of a fiber lifetime. The scope of a
 * fiber can be retrieved using `Effect.descriptor`, and when forking fibers,
 * you can specify a custom scope to fork them on by using the `forkIn`.
 *
 * @since 2.0.0
 * @category models
 */
export interface FiberScope {
  readonly [FiberScopeTypeId]: FiberScopeTypeId
  get fiberId(): FiberId.FiberId
  add(runtimeFlags: RuntimeFlags.RuntimeFlags, child: FiberRuntime.FiberRuntime<any, any>): void
}

/** @internal */
class Global implements FiberScope {
  readonly [FiberScopeTypeId]: FiberScopeTypeId = FiberScopeTypeId
  readonly fiberId = FiberId.none
  readonly roots = new Set<FiberRuntime.FiberRuntime<any, any>>()
  add(_runtimeFlags: RuntimeFlags.RuntimeFlags, child: FiberRuntime.FiberRuntime<any, any>): void {
    this.roots.add(child)
    child.addObserver(() => {
      this.roots.delete(child)
    })
  }
}

/** @internal */
class Local implements FiberScope {
  readonly [FiberScopeTypeId]: FiberScopeTypeId = FiberScopeTypeId
  constructor(
    readonly fiberId: FiberId.FiberId,
    readonly parent: FiberRuntime.FiberRuntime<any, any>
  ) {
  }
  add(_runtimeFlags: RuntimeFlags.RuntimeFlags, child: FiberRuntime.FiberRuntime<any, any>): void {
    this.parent.tell(
      FiberMessage.stateful((parentFiber) => {
        parentFiber.addChild(child)
        child.addObserver(() => {
          parentFiber.removeChild(child)
        })
      })
    )
  }
}

/** @internal */
export const unsafeMake = (fiber: FiberRuntime.FiberRuntime<any, any>): FiberScope => {
  return new Local(fiber.id(), fiber)
}

/** @internal */
export const globalScope = globalValue(
  Symbol.for("effect/FiberScope/Global"),
  () => new Global()
)

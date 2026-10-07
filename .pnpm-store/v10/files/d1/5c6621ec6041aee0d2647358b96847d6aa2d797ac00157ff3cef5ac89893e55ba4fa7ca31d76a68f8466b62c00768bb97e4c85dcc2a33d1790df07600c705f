import * as Equal from "../Equal.js"
import type { FiberId } from "../FiberId.js"
import type * as FiberStatus from "../FiberStatus.js"
import { pipe } from "../Function.js"
import * as Hash from "../Hash.js"
import { hasProperty } from "../Predicate.js"
import type { RuntimeFlags } from "../RuntimeFlags.js"

const FiberStatusSymbolKey = "effect/FiberStatus"

/** @internal */
export const FiberStatusTypeId: FiberStatus.FiberStatusTypeId = Symbol.for(
  FiberStatusSymbolKey
) as FiberStatus.FiberStatusTypeId

/** @internal */
export const OP_DONE = "Done" as const

/** @internal */
export type OP_DONE = typeof OP_DONE

/** @internal */
export const OP_RUNNING = "Running" as const

/** @internal */
export type OP_RUNNING = typeof OP_RUNNING

/** @internal */
export const OP_SUSPENDED = "Suspended" as const

/** @internal */
export type OP_SUSPENDED = typeof OP_SUSPENDED

const DoneHash = Hash.string(`${FiberStatusSymbolKey}-${OP_DONE}`)

/** @internal */
class Done implements FiberStatus.Done {
  readonly [FiberStatusTypeId]: FiberStatus.FiberStatusTypeId = FiberStatusTypeId
  readonly _tag = OP_DONE;
  [Hash.symbol](): number {
    return DoneHash
  }
  [Equal.symbol](that: unknown): boolean {
    return isFiberStatus(that) && that._tag === OP_DONE
  }
}

/** @internal */
class Running implements FiberStatus.Running {
  readonly [FiberStatusTypeId]: FiberStatus.FiberStatusTypeId = FiberStatusTypeId
  readonly _tag = OP_RUNNING
  constructor(readonly runtimeFlags: RuntimeFlags) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(FiberStatusSymbolKey),
      Hash.combine(Hash.hash(this._tag)),
      Hash.combine(Hash.hash(this.runtimeFlags)),
      Hash.cached(this)
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return (
      isFiberStatus(that) &&
      that._tag === OP_RUNNING &&
      this.runtimeFlags === that.runtimeFlags
    )
  }
}

/** @internal */
class Suspended implements FiberStatus.Suspended {
  readonly [FiberStatusTypeId]: FiberStatus.FiberStatusTypeId = FiberStatusTypeId
  readonly _tag = OP_SUSPENDED
  constructor(
    readonly runtimeFlags: RuntimeFlags,
    readonly blockingOn: FiberId
  ) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(FiberStatusSymbolKey),
      Hash.combine(Hash.hash(this._tag)),
      Hash.combine(Hash.hash(this.runtimeFlags)),
      Hash.combine(Hash.hash(this.blockingOn)),
      Hash.cached(this)
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return (
      isFiberStatus(that) &&
      that._tag === OP_SUSPENDED &&
      this.runtimeFlags === that.runtimeFlags &&
      Equal.equals(this.blockingOn, that.blockingOn)
    )
  }
}

/** @internal */
export const done: FiberStatus.FiberStatus = new Done()

/** @internal */
export const running = (runtimeFlags: RuntimeFlags): FiberStatus.FiberStatus => new Running(runtimeFlags)

/** @internal */
export const suspended = (
  runtimeFlags: RuntimeFlags,
  blockingOn: FiberId
): FiberStatus.FiberStatus => new Suspended(runtimeFlags, blockingOn)

/** @internal */
export const isFiberStatus = (u: unknown): u is FiberStatus.FiberStatus => hasProperty(u, FiberStatusTypeId)

/** @internal */
export const isDone = (self: FiberStatus.FiberStatus): self is FiberStatus.Done => self._tag === OP_DONE

/** @internal */
export const isRunning = (self: FiberStatus.FiberStatus): self is FiberStatus.Running => self._tag === OP_RUNNING

/** @internal */
export const isSuspended = (self: FiberStatus.FiberStatus): self is FiberStatus.Suspended => self._tag === OP_SUSPENDED

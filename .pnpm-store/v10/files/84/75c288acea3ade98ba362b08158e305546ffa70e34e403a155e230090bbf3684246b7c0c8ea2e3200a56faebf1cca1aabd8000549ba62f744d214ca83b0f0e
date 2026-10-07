import * as Equal from "../../Equal.js"
import * as Exit from "../../Exit.js"
import { pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import { hasProperty } from "../../Predicate.js"
import * as OpCodes from "./opCodes/stmState.js"
import * as TExitOpCodes from "./opCodes/tExit.js"
import type * as TExit from "./tExit.js"

/** @internal */
const STMStateSymbolKey = "effect/STM/State"

/** @internal */
export const STMStateTypeId = Symbol.for(STMStateSymbolKey)

/** @internal */
export type STMStateTypeId = typeof STMStateTypeId

/** @internal */
export type STMState<A, E = never> = Done<A, E> | Interrupted | Running

/** @internal */
export interface Done<out A, out E = never> extends Equal.Equal {
  readonly [STMStateTypeId]: STMStateTypeId
  readonly _tag: OpCodes.OP_DONE
  readonly exit: Exit.Exit<A, E>
}

/** @internal */
export interface Interrupted extends Equal.Equal {
  readonly [STMStateTypeId]: STMStateTypeId
  readonly _tag: OpCodes.OP_INTERRUPTED
}

/** @internal */
export interface Running extends Equal.Equal {
  readonly [STMStateTypeId]: STMStateTypeId
  readonly _tag: OpCodes.OP_RUNNING
}

/** @internal */
export const isSTMState = (u: unknown): u is STMState<unknown, unknown> => hasProperty(u, STMStateTypeId)

/** @internal */
export const isRunning = <A, E>(self: STMState<A, E>): self is Running => {
  return self._tag === OpCodes.OP_RUNNING
}

/** @internal */
export const isDone = <A, E>(self: STMState<A, E>): self is Done<A, E> => {
  return self._tag === OpCodes.OP_DONE
}

/** @internal */
export const isInterrupted = <A, E>(self: STMState<A, E>): self is Interrupted => {
  return self._tag === OpCodes.OP_INTERRUPTED
}

/** @internal */
export const done = <A, E>(exit: Exit.Exit<A, E>): STMState<A, E> => {
  return {
    [STMStateTypeId]: STMStateTypeId,
    _tag: OpCodes.OP_DONE,
    exit,
    [Hash.symbol](): number {
      return pipe(
        Hash.hash(STMStateSymbolKey),
        Hash.combine(Hash.hash(OpCodes.OP_DONE)),
        Hash.combine(Hash.hash(exit)),
        Hash.cached(this)
      )
    },
    [Equal.symbol](that: unknown): boolean {
      return isSTMState(that) && that._tag === OpCodes.OP_DONE && Equal.equals(exit, that.exit)
    }
  }
}

const interruptedHash = pipe(
  Hash.hash(STMStateSymbolKey),
  Hash.combine(Hash.hash(OpCodes.OP_INTERRUPTED)),
  Hash.combine(Hash.hash("interrupted"))
)

/** @internal */
export const interrupted: STMState<never> = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OpCodes.OP_INTERRUPTED,
  [Hash.symbol](): number {
    return interruptedHash
  },
  [Equal.symbol](that: unknown): boolean {
    return isSTMState(that) && that._tag === OpCodes.OP_INTERRUPTED
  }
}

const runningHash = pipe(
  Hash.hash(STMStateSymbolKey),
  Hash.combine(Hash.hash(OpCodes.OP_RUNNING)),
  Hash.combine(Hash.hash("running"))
)

/** @internal */
export const running: STMState<never> = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OpCodes.OP_RUNNING,
  [Hash.symbol](): number {
    return runningHash
  },
  [Equal.symbol](that: unknown): boolean {
    return isSTMState(that) && that._tag === OpCodes.OP_RUNNING
  }
}

/** @internal */
export const fromTExit = <A, E>(tExit: TExit.TExit<A, E>): STMState<A, E> => {
  switch (tExit._tag) {
    case TExitOpCodes.OP_FAIL: {
      return done(Exit.fail(tExit.error))
    }
    case TExitOpCodes.OP_DIE: {
      return done(Exit.die(tExit.defect))
    }
    case TExitOpCodes.OP_INTERRUPT: {
      return done(Exit.interrupt(tExit.fiberId))
    }
    case TExitOpCodes.OP_SUCCEED: {
      return done(Exit.succeed(tExit.value))
    }
    case TExitOpCodes.OP_RETRY: {
      throw new Error(
        "BUG: STM.STMState.fromTExit - please report an issue at https://github.com/Effect-TS/effect/issues"
      )
    }
  }
}

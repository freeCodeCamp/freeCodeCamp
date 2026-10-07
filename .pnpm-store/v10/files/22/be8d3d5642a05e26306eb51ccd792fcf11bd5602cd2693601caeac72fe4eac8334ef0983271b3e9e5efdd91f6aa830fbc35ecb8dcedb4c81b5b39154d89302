import type * as Exit from "../../Exit.js"
import type * as Journal from "./journal.js"
import * as OpCodes from "./opCodes/tryCommit.js"

/** @internal */
export type TryCommit<A, E = never> = Done<A, E> | Suspend

/** @internal */
export interface Done<out A, out E> {
  readonly _tag: OpCodes.OP_DONE
  readonly exit: Exit.Exit<A, E>
}

/** @internal */
export interface Suspend {
  readonly _tag: OpCodes.OP_SUSPEND
  readonly journal: Journal.Journal
}

/** @internal */
export const done = <A, E>(exit: Exit.Exit<A, E>): TryCommit<A, E> => {
  return {
    _tag: OpCodes.OP_DONE,
    exit
  }
}

/** @internal */
export const suspend = (journal: Journal.Journal): TryCommit<never> => {
  return {
    _tag: OpCodes.OP_SUSPEND,
    journal
  }
}

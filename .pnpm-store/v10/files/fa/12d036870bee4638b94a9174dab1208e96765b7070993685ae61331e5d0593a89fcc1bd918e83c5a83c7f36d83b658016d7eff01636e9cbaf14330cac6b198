import type * as ChildExecutorDecision from "../../ChildExecutorDecision.js"
import * as Effect from "../../Effect.js"
import * as Exit from "../../Exit.js"
import { pipe } from "../../Function.js"
import type * as UpstreamPullRequest from "../../UpstreamPullRequest.js"
import type * as UpstreamPullStrategy from "../../UpstreamPullStrategy.js"
import type { ErasedChannel, ErasedExecutor } from "./channelExecutor.js"

/** @internal */
export interface Subexecutor<in out R> {
  close(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, never, R> | undefined
  enqueuePullFromChild(child: PullFromChild<R>): Subexecutor<R>
}

/** @internal */
export type Primitive<Env> = PullFromChild<Env> | PullFromUpstream<Env> | DrainChildExecutors<Env> | Emit<Env>

/** @internal */
export const OP_PULL_FROM_CHILD = "PullFromChild" as const

/** @internal */
export type OP_PULL_FROM_CHILD = typeof OP_PULL_FROM_CHILD

/** @internal */
export const OP_PULL_FROM_UPSTREAM = "PullFromUpstream" as const

/** @internal */
export type OP_PULL_FROM_UPSTREAM = typeof OP_PULL_FROM_UPSTREAM

/** @internal */
export const OP_DRAIN_CHILD_EXECUTORS = "DrainChildExecutors" as const

/** @internal */
export type OP_DRAIN_CHILD_EXECUTORS = typeof OP_DRAIN_CHILD_EXECUTORS

/** @internal */
export const OP_EMIT = "Emit" as const

/** @internal */
export type OP_EMIT = typeof OP_EMIT

/**
 * Execute the `childExecutor` and on each emitted value, decide what to do by
 * `onEmit`.
 *
 * @internal
 */
export class PullFromChild<in out R> implements Subexecutor<R> {
  readonly _tag: OP_PULL_FROM_CHILD = OP_PULL_FROM_CHILD

  constructor(
    readonly childExecutor: ErasedExecutor<R>,
    readonly parentSubexecutor: Subexecutor<R>,
    readonly onEmit: (value: unknown) => ChildExecutorDecision.ChildExecutorDecision
  ) {
  }

  close(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, never, R> | undefined {
    const fin1 = this.childExecutor.close(exit)
    const fin2 = this.parentSubexecutor.close(exit)
    if (fin1 !== undefined && fin2 !== undefined) {
      return Effect.zipWith(
        Effect.exit(fin1),
        Effect.exit(fin2),
        (exit1, exit2) => pipe(exit1, Exit.zipRight(exit2))
      )
    } else if (fin1 !== undefined) {
      return fin1
    } else if (fin2 !== undefined) {
      return fin2
    } else {
      return undefined
    }
  }

  enqueuePullFromChild(_child: PullFromChild<R>): Subexecutor<R> {
    return this
  }
}

/**
 * Execute `upstreamExecutor` and for each emitted element, spawn a child
 * channel and continue with processing it by `PullFromChild`.
 *
 * @internal
 */
export class PullFromUpstream<in out R> implements Subexecutor<R> {
  readonly _tag: OP_PULL_FROM_UPSTREAM = OP_PULL_FROM_UPSTREAM

  constructor(
    readonly upstreamExecutor: ErasedExecutor<R>,
    readonly createChild: (value: unknown) => ErasedChannel<R>,
    readonly lastDone: unknown,
    readonly activeChildExecutors: ReadonlyArray<PullFromChild<R> | undefined>,
    readonly combineChildResults: (x: unknown, y: unknown) => unknown,
    readonly combineWithChildResult: (x: unknown, y: unknown) => unknown,
    readonly onPull: (
      request: UpstreamPullRequest.UpstreamPullRequest<unknown>
    ) => UpstreamPullStrategy.UpstreamPullStrategy<unknown>,
    readonly onEmit: (value: unknown) => ChildExecutorDecision.ChildExecutorDecision
  ) {
  }

  close(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, never, R> | undefined {
    const fin1 = this.upstreamExecutor.close(exit)
    const fins = [
      ...this.activeChildExecutors.map((child) =>
        child !== undefined ?
          child.childExecutor.close(exit) :
          undefined
      ),
      fin1
    ]
    const result = fins.reduce(
      (acc: Effect.Effect<Exit.Exit<unknown, unknown>, never, R> | undefined, next) => {
        if (acc !== undefined && next !== undefined) {
          return Effect.zipWith(
            acc,
            Effect.exit(next),
            (exit1, exit2) => Exit.zipRight(exit1, exit2)
          )
        } else if (acc !== undefined) {
          return acc
        } else if (next !== undefined) {
          return Effect.exit(next)
        } else {
          return undefined
        }
      },
      undefined
    )
    return result === undefined ? result : result
  }

  enqueuePullFromChild(child: PullFromChild<R>): Subexecutor<R> {
    return new PullFromUpstream(
      this.upstreamExecutor,
      this.createChild,
      this.lastDone,
      [...this.activeChildExecutors, child],
      this.combineChildResults,
      this.combineWithChildResult,
      this.onPull,
      this.onEmit
    )
  }
}

/**
 * Transformed from `PullFromUpstream` when upstream has finished but there
 * are still active child executors.
 *
 * @internal
 */
export class DrainChildExecutors<in out R> implements Subexecutor<R> {
  readonly _tag: OP_DRAIN_CHILD_EXECUTORS = OP_DRAIN_CHILD_EXECUTORS

  constructor(
    readonly upstreamExecutor: ErasedExecutor<R>,
    readonly lastDone: unknown,
    readonly activeChildExecutors: ReadonlyArray<PullFromChild<R> | undefined>,
    readonly upstreamDone: Exit.Exit<unknown, unknown>,
    readonly combineChildResults: (x: unknown, y: unknown) => unknown,
    readonly combineWithChildResult: (x: unknown, y: unknown) => unknown,
    readonly onPull: (
      request: UpstreamPullRequest.UpstreamPullRequest<unknown>
    ) => UpstreamPullStrategy.UpstreamPullStrategy<unknown>
  ) {
  }

  close(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, never, R> | undefined {
    const fin1 = this.upstreamExecutor.close(exit)
    const fins = [
      ...this.activeChildExecutors.map((child) => (child !== undefined ?
        child.childExecutor.close(exit) :
        undefined)
      ),
      fin1
    ]
    const result = fins.reduce(
      (acc: Effect.Effect<Exit.Exit<unknown, unknown>, never, R> | undefined, next) => {
        if (acc !== undefined && next !== undefined) {
          return Effect.zipWith(
            acc,
            Effect.exit(next),
            (exit1, exit2) => Exit.zipRight(exit1, exit2)
          )
        } else if (acc !== undefined) {
          return acc
        } else if (next !== undefined) {
          return Effect.exit(next)
        } else {
          return undefined
        }
      },
      undefined
    )
    return result === undefined ? result : result
  }

  enqueuePullFromChild(child: PullFromChild<R>): Subexecutor<R> {
    return new DrainChildExecutors(
      this.upstreamExecutor,
      this.lastDone,
      [...this.activeChildExecutors, child],
      this.upstreamDone,
      this.combineChildResults,
      this.combineWithChildResult,
      this.onPull
    )
  }
}

/** @internal */
export class Emit<in out R> implements Subexecutor<R> {
  readonly _tag: OP_EMIT = OP_EMIT

  constructor(readonly value: unknown, readonly next: Subexecutor<R>) {
  }

  close(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, never, R> | undefined {
    const result = this.next.close(exit)
    return result === undefined ? result : result
  }

  enqueuePullFromChild(_child: PullFromChild<R>): Subexecutor<R> {
    return this
  }
}

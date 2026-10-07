import * as Cause from "../../Cause.js"
import * as Context from "../../Context.js"
import * as Effect from "../../Effect.js"
import * as Either from "../../Either.js"
import * as Equal from "../../Equal.js"
import * as Exit from "../../Exit.js"
import type * as FiberId from "../../FiberId.js"
import * as FiberRef from "../../FiberRef.js"
import type { LazyArg } from "../../Function.js"
import { constVoid, dual, pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import type * as Option from "../../Option.js"
import { pipeArguments } from "../../Pipeable.js"
import { hasProperty } from "../../Predicate.js"
import type * as Scheduler from "../../Scheduler.js"
import type * as STM from "../../STM.js"
import { internalCall, YieldWrap } from "../../Utils.js"
import { ChannelTypeId } from "../core-stream.js"
import { withFiberRuntime } from "../core.js"
import { effectVariance, StreamTypeId } from "../effectable.js"
import { OP_COMMIT } from "../opCodes/effect.js"
import { SingleShotGen } from "../singleShotGen.js"
import { SinkTypeId } from "../sink.js"
import * as Journal from "./journal.js"
import * as OpCodes from "./opCodes/stm.js"
import * as TExitOpCodes from "./opCodes/tExit.js"
import * as TryCommitOpCodes from "./opCodes/tryCommit.js"
import * as STMState from "./stmState.js"
import * as TExit from "./tExit.js"
import * as TryCommit from "./tryCommit.js"
import * as TxnId from "./txnId.js"

/** @internal */
const STMSymbolKey = "effect/STM"

/** @internal */
export const STMTypeId: STM.STMTypeId = Symbol.for(
  STMSymbolKey
) as STM.STMTypeId

/** @internal */
export type Primitive =
  | STMEffect
  | STMOnFailure
  | STMOnRetry
  | STMOnSuccess
  | STMProvide
  | STMSync
  | STMSucceed
  | STMRetry
  | STMFail
  | STMDie
  | STMInterrupt

/** @internal */
type Op<Tag extends string, Body = {}> = STM.STM<never> & Body & {
  readonly _op: OP_COMMIT
  readonly effect_instruction_i0: Tag
}

/** @internal */
interface STMEffect extends
  Op<OpCodes.OP_WITH_STM_RUNTIME, {
    readonly effect_instruction_i1: (
      runtime: STMDriver<unknown, unknown, unknown>
    ) => STM.STM<unknown, unknown, unknown>
  }>
{}

/** @internal */
interface STMOnFailure extends
  Op<OpCodes.OP_ON_FAILURE, {
    readonly effect_instruction_i1: STM.STM<unknown, unknown, unknown>
    readonly effect_instruction_i2: (error: unknown) => STM.STM<unknown, unknown, unknown>
  }>
{}

/** @internal */
interface STMOnRetry extends
  Op<OpCodes.OP_ON_RETRY, {
    readonly effect_instruction_i1: STM.STM<unknown, unknown, unknown>
    readonly effect_instruction_i2: () => STM.STM<unknown, unknown, unknown>
  }>
{}

/** @internal */
interface STMOnSuccess extends
  Op<OpCodes.OP_ON_SUCCESS, {
    readonly effect_instruction_i1: STM.STM<unknown, unknown, unknown>
    readonly effect_instruction_i2: (a: unknown) => STM.STM<unknown, unknown, unknown>
  }>
{}

/** @internal */
interface STMProvide extends
  Op<OpCodes.OP_PROVIDE, {
    readonly effect_instruction_i1: STM.STM<unknown, unknown, unknown>
    readonly effect_instruction_i2: (context: Context.Context<unknown>) => Context.Context<unknown>
  }>
{}

/** @internal */
interface STMSync extends
  Op<OpCodes.OP_SYNC, {
    readonly effect_instruction_i1: () => unknown
  }>
{}

/** @internal */
interface STMSucceed extends
  Op<OpCodes.OP_SUCCEED, {
    readonly effect_instruction_i1: unknown
  }>
{}

/** @internal */
interface STMRetry extends Op<OpCodes.OP_RETRY, {}> {}

/** @internal */
interface STMFail extends
  Op<OpCodes.OP_FAIL, {
    readonly effect_instruction_i1: LazyArg<unknown>
  }>
{}

/** @internal */
interface STMDie extends
  Op<OpCodes.OP_DIE, {
    readonly effect_instruction_i1: LazyArg<unknown>
  }>
{}

/** @internal */
interface STMInterrupt extends
  Op<OpCodes.OP_INTERRUPT, {
    readonly effect_instruction_i1: FiberId.Runtime
  }>
{}

const stmVariance = {
  /* c8 ignore next */
  _R: (_: never) => _,
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _A: (_: never) => _
}

/** @internal */
class STMPrimitive implements STM.STM<any, any, any> {
  public _op = OP_COMMIT
  public effect_instruction_i1: any = undefined
  public effect_instruction_i2: any = undefined;
  [Effect.EffectTypeId]: any;
  [StreamTypeId]: any;
  [SinkTypeId]: any;
  [ChannelTypeId]: any
  get [STMTypeId]() {
    return stmVariance
  }
  constructor(readonly effect_instruction_i0: Primitive["effect_instruction_i0"]) {
    this[Effect.EffectTypeId] = effectVariance
    this[StreamTypeId] = stmVariance
    this[SinkTypeId] = stmVariance
    this[ChannelTypeId] = stmVariance
  }
  [Equal.symbol](this: {}, that: unknown) {
    return this === that
  }
  [Hash.symbol](this: {}) {
    return Hash.cached(this, Hash.random(this))
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this)) as any
  }
  commit(this: STM.STM<any, any, any>): Effect.Effect<any, any, any> {
    return unsafeAtomically(this, constVoid, constVoid)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const isSTM = (u: unknown): u is STM.STM<unknown, unknown, unknown> => hasProperty(u, STMTypeId)

/** @internal */
export const commit = <A, E, R>(self: STM.STM<A, E, R>): Effect.Effect<A, E, R> =>
  unsafeAtomically(self, constVoid, constVoid)

/** @internal */
export const unsafeAtomically = <A, E, R>(
  self: STM.STM<A, E, R>,
  onDone: (exit: Exit.Exit<A, E>) => unknown,
  onInterrupt: LazyArg<unknown>
): Effect.Effect<A, E, R> =>
  withFiberRuntime((state) => {
    const fiberId = state.id()
    const env = state.getFiberRef(FiberRef.currentContext) as Context.Context<R>
    const scheduler = state.getFiberRef(FiberRef.currentScheduler)
    const priority = state.getFiberRef(FiberRef.currentSchedulingPriority)
    const commitResult = tryCommitSync(fiberId, self, env, scheduler, priority)
    switch (commitResult._tag) {
      case TryCommitOpCodes.OP_DONE: {
        onDone(commitResult.exit)
        return commitResult.exit
      }
      case TryCommitOpCodes.OP_SUSPEND: {
        const txnId = TxnId.make()
        const state: { value: STMState.STMState<A, E> } = { value: STMState.running }
        const effect = Effect.async(
          (k: (effect: Effect.Effect<A, E, R>) => unknown): void =>
            tryCommitAsync(fiberId, self, txnId, state, env, scheduler, priority, k)
        )
        return Effect.uninterruptibleMask((restore) =>
          pipe(
            restore(effect),
            Effect.catchAllCause((cause) => {
              let currentState = state.value
              if (STMState.isRunning(currentState)) {
                state.value = STMState.interrupted
              }
              currentState = state.value
              if (STMState.isDone(currentState)) {
                onDone(currentState.exit)
                return currentState.exit
              }
              onInterrupt()
              return Effect.failCause(cause)
            })
          )
        )
      }
    }
  })

/** @internal */
const tryCommit = <A, E, R>(
  fiberId: FiberId.FiberId,
  stm: STM.STM<A, E, R>,
  state: { value: STMState.STMState<A, E> },
  env: Context.Context<R>,
  scheduler: Scheduler.Scheduler,
  priority: number
): TryCommit.TryCommit<A, E> => {
  const journal: Journal.Journal = new Map()
  const tExit = new STMDriver(stm, journal, fiberId, env).run()
  const analysis = Journal.analyzeJournal(journal)

  if (analysis === Journal.JournalAnalysisReadWrite) {
    Journal.commitJournal(journal)
  } else if (analysis === Journal.JournalAnalysisInvalid) {
    throw new Error(
      "BUG: STM.TryCommit.tryCommit - please report an issue at https://github.com/Effect-TS/effect/issues"
    )
  }

  switch (tExit._tag) {
    case TExitOpCodes.OP_SUCCEED: {
      state.value = STMState.fromTExit(tExit)
      return completeTodos(Exit.succeed(tExit.value), journal, scheduler, priority)
    }
    case TExitOpCodes.OP_FAIL: {
      state.value = STMState.fromTExit(tExit)
      const cause = Cause.fail(tExit.error)
      return completeTodos(
        Exit.failCause(cause),
        journal,
        scheduler,
        priority
      )
    }
    case TExitOpCodes.OP_DIE: {
      state.value = STMState.fromTExit(tExit)
      const cause = Cause.die(tExit.defect)
      return completeTodos(
        Exit.failCause(cause),
        journal,
        scheduler,
        priority
      )
    }
    case TExitOpCodes.OP_INTERRUPT: {
      state.value = STMState.fromTExit(tExit)
      const cause = Cause.interrupt(fiberId)
      return completeTodos(
        Exit.failCause(cause),
        journal,
        scheduler,
        priority
      )
    }
    case TExitOpCodes.OP_RETRY: {
      return TryCommit.suspend(journal)
    }
  }
}

/** @internal */
const tryCommitSync = <A, E, R>(
  fiberId: FiberId.FiberId,
  stm: STM.STM<A, E, R>,
  env: Context.Context<R>,
  scheduler: Scheduler.Scheduler,
  priority: number
): TryCommit.TryCommit<A, E> => {
  const journal: Journal.Journal = new Map()
  const tExit = new STMDriver(stm, journal, fiberId, env).run()
  const analysis = Journal.analyzeJournal(journal)

  if (analysis === Journal.JournalAnalysisReadWrite && TExit.isSuccess(tExit)) {
    Journal.commitJournal(journal)
  } else if (analysis === Journal.JournalAnalysisInvalid) {
    throw new Error(
      "BUG: STM.TryCommit.tryCommitSync - please report an issue at https://github.com/Effect-TS/effect/issues"
    )
  }

  switch (tExit._tag) {
    case TExitOpCodes.OP_SUCCEED: {
      return completeTodos(Exit.succeed(tExit.value), journal, scheduler, priority)
    }
    case TExitOpCodes.OP_FAIL: {
      const cause = Cause.fail(tExit.error)
      return completeTodos(
        Exit.failCause(cause),
        journal,
        scheduler,
        priority
      )
    }
    case TExitOpCodes.OP_DIE: {
      const cause = Cause.die(tExit.defect)
      return completeTodos(
        Exit.failCause(cause),
        journal,
        scheduler,
        priority
      )
    }
    case TExitOpCodes.OP_INTERRUPT: {
      const cause = Cause.interrupt(fiberId)
      return completeTodos(
        Exit.failCause(cause),
        journal,
        scheduler,
        priority
      )
    }
    case TExitOpCodes.OP_RETRY: {
      return TryCommit.suspend(journal)
    }
  }
}

/** @internal */
const tryCommitAsync = <A, E, R>(
  fiberId: FiberId.FiberId,
  self: STM.STM<A, E, R>,
  txnId: TxnId.TxnId,
  state: { value: STMState.STMState<A, E> },
  context: Context.Context<R>,
  scheduler: Scheduler.Scheduler,
  priority: number,
  k: (effect: Effect.Effect<A, E, R>) => unknown
) => {
  if (STMState.isRunning(state.value)) {
    const result = tryCommit(fiberId, self, state, context, scheduler, priority)
    switch (result._tag) {
      case TryCommitOpCodes.OP_DONE: {
        completeTryCommit(result.exit, k)
        break
      }
      case TryCommitOpCodes.OP_SUSPEND: {
        Journal.addTodo(
          txnId,
          result.journal,
          () => tryCommitAsync(fiberId, self, txnId, state, context, scheduler, priority, k)
        )
        break
      }
    }
  }
}

/** @internal */
const completeTodos = <A, E>(
  exit: Exit.Exit<A, E>,
  journal: Journal.Journal,
  scheduler: Scheduler.Scheduler,
  priority: number
): TryCommit.TryCommit<A, E> => {
  const todos = Journal.collectTodos(journal)
  if (todos.size > 0) {
    scheduler.scheduleTask(() => Journal.execTodos(todos), priority)
  }
  return TryCommit.done(exit)
}

/** @internal */
const completeTryCommit = <A, E, R>(
  exit: Exit.Exit<A, E>,
  k: (effect: Effect.Effect<A, E, R>) => unknown
): void => {
  k(exit)
}

/** @internal */
type Continuation = STMOnFailure | STMOnSuccess | STMOnRetry

/** @internal */
export const context = <R>(): STM.STM<Context.Context<R>, never, R> =>
  effect<R, Context.Context<R>>((_, __, env) => env)

/** @internal */
export const contextWith = <R0, R>(f: (environment: Context.Context<R0>) => R): STM.STM<R, never, R0> =>
  map(context<R0>(), f)

/** @internal */
export const contextWithSTM = <R0, A, E, R>(
  f: (environment: Context.Context<R0>) => STM.STM<A, E, R>
): STM.STM<A, E, R0 | R> => flatMap(context<R0>(), f)

/** @internal */
export class STMDriver<in out R, out E, out A> {
  private contStack: Array<Continuation> = []
  private env: Context.Context<unknown>

  constructor(
    readonly self: STM.STM<A, E, R>,
    readonly journal: Journal.Journal,
    readonly fiberId: FiberId.FiberId,
    r0: Context.Context<R>
  ) {
    this.env = r0 as Context.Context<unknown>
  }

  getEnv(): Context.Context<R> {
    return this.env
  }

  pushStack(cont: Continuation) {
    this.contStack.push(cont)
  }

  popStack() {
    return this.contStack.pop()
  }

  nextSuccess() {
    let current = this.popStack()
    while (current !== undefined && current.effect_instruction_i0 !== OpCodes.OP_ON_SUCCESS) {
      current = this.popStack()
    }
    return current
  }

  nextFailure() {
    let current = this.popStack()
    while (current !== undefined && current.effect_instruction_i0 !== OpCodes.OP_ON_FAILURE) {
      current = this.popStack()
    }
    return current
  }

  nextRetry() {
    let current = this.popStack()
    while (current !== undefined && current.effect_instruction_i0 !== OpCodes.OP_ON_RETRY) {
      current = this.popStack()
    }
    return current
  }

  run(): TExit.TExit<A, E> {
    let curr = this.self as Primitive | Context.Tag<any, any> | Either.Either<any, any> | Option.Option<any> | undefined
    let exit: TExit.TExit<unknown, unknown> | undefined = undefined
    while (exit === undefined && curr !== undefined) {
      try {
        const current = curr
        if (current) {
          switch (current._op) {
            case "Tag": {
              curr = effect((_, __, env) => Context.unsafeGet(env, current)) as Primitive
              break
            }
            case "Left": {
              curr = fail(current.left) as Primitive
              break
            }
            case "None": {
              curr = fail(new Cause.NoSuchElementException()) as Primitive
              break
            }
            case "Right": {
              curr = succeed(current.right) as Primitive
              break
            }
            case "Some": {
              curr = succeed(current.value) as Primitive
              break
            }
            case "Commit": {
              switch (current.effect_instruction_i0) {
                case OpCodes.OP_DIE: {
                  exit = TExit.die(internalCall(() => current.effect_instruction_i1()))
                  break
                }
                case OpCodes.OP_FAIL: {
                  const cont = this.nextFailure()
                  if (cont === undefined) {
                    exit = TExit.fail(internalCall(() => current.effect_instruction_i1()))
                  } else {
                    curr = internalCall(() =>
                      cont.effect_instruction_i2(
                        internalCall(() => current.effect_instruction_i1())
                      ) as Primitive
                    )
                  }
                  break
                }
                case OpCodes.OP_RETRY: {
                  const cont = this.nextRetry()
                  if (cont === undefined) {
                    exit = TExit.retry
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2() as Primitive)
                  }
                  break
                }
                case OpCodes.OP_INTERRUPT: {
                  exit = TExit.interrupt(this.fiberId)
                  break
                }
                case OpCodes.OP_WITH_STM_RUNTIME: {
                  curr = internalCall(() =>
                    current.effect_instruction_i1(this as STMDriver<unknown, unknown, unknown>) as Primitive
                  )
                  break
                }
                case OpCodes.OP_ON_SUCCESS:
                case OpCodes.OP_ON_FAILURE:
                case OpCodes.OP_ON_RETRY: {
                  this.pushStack(current)
                  curr = current.effect_instruction_i1 as Primitive
                  break
                }
                case OpCodes.OP_PROVIDE: {
                  const env = this.env
                  this.env = internalCall(() => current.effect_instruction_i2(env))
                  curr = pipe(
                    current.effect_instruction_i1,
                    ensuring(sync(() => (this.env = env)))
                  ) as Primitive
                  break
                }
                case OpCodes.OP_SUCCEED: {
                  const value = current.effect_instruction_i1
                  const cont = this.nextSuccess()
                  if (cont === undefined) {
                    exit = TExit.succeed(value)
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(value) as Primitive)
                  }
                  break
                }
                case OpCodes.OP_SYNC: {
                  const value = internalCall(() => current.effect_instruction_i1())
                  const cont = this.nextSuccess()
                  if (cont === undefined) {
                    exit = TExit.succeed(value)
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(value) as Primitive)
                  }
                  break
                }
              }
              break
            }
          }
        }
      } catch (e) {
        curr = die(e) as Primitive
      }
    }
    return exit as TExit.TExit<A, E>
  }
}

/** @internal */
export const catchAll = dual<
  <E, B, E1, R1>(
    f: (e: E) => STM.STM<B, E1, R1>
  ) => <A, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<B | A, E1, R1 | R>,
  <A, E, R, B, E1, R1>(
    self: STM.STM<A, E, R>,
    f: (e: E) => STM.STM<B, E1, R1>
  ) => STM.STM<B | A, E1, R1 | R>
>(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_FAILURE)
  stm.effect_instruction_i1 = self
  stm.effect_instruction_i2 = f
  return stm
})

/** @internal */
export const mapInputContext = dual<
  <R0, R>(
    f: (context: Context.Context<R0>) => Context.Context<R>
  ) => <A, E>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A, E, R0>,
  <A, E, R0, R>(
    self: STM.STM<A, E, R>,
    f: (context: Context.Context<R0>) => Context.Context<R>
  ) => STM.STM<A, E, R0>
>(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_PROVIDE)
  stm.effect_instruction_i1 = self
  stm.effect_instruction_i2 = f
  return stm
})

/** @internal */
export const die = (defect: unknown): STM.STM<never> => dieSync(() => defect)

/** @internal */
export const dieMessage = (message: string): STM.STM<never> => dieSync(() => new Cause.RuntimeException(message))

/** @internal */
export const dieSync = (evaluate: LazyArg<unknown>): STM.STM<never> => {
  const stm = new STMPrimitive(OpCodes.OP_DIE)
  stm.effect_instruction_i1 = evaluate
  return stm as any
}

/** @internal */
export const effect = <R, A>(
  f: (journal: Journal.Journal, fiberId: FiberId.FiberId, environment: Context.Context<R>) => A
): STM.STM<A, never, R> => withSTMRuntime((_) => succeed(f(_.journal, _.fiberId, _.getEnv())))

/** @internal */
export const ensuring = dual<
  <R1, B>(finalizer: STM.STM<B, never, R1>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E, R1 | R>,
  <A, E, R, R1, B>(self: STM.STM<A, E, R>, finalizer: STM.STM<B, never, R1>) => STM.STM<A, E, R1 | R>
>(2, (self, finalizer) =>
  matchSTM(self, {
    onFailure: (e) => zipRight(finalizer, fail(e)),
    onSuccess: (a) => zipRight(finalizer, succeed(a))
  }))

/** @internal */
export const fail = <E>(error: E): STM.STM<never, E> => failSync(() => error)

/** @internal */
export const failSync = <E>(evaluate: LazyArg<E>): STM.STM<never, E> => {
  const stm = new STMPrimitive(OpCodes.OP_FAIL)
  stm.effect_instruction_i1 = evaluate
  return stm as any
}

/** @internal */
export const flatMap = dual<
  <A, A2, E1, R1>(f: (a: A) => STM.STM<A2, E1, R1>) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<A2, E1 | E, R1 | R>,
  <A, E, R, A2, E1, R1>(self: STM.STM<A, E, R>, f: (a: A) => STM.STM<A2, E1, R1>) => STM.STM<A2, E1 | E, R1 | R>
>(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_SUCCESS)
  stm.effect_instruction_i1 = self
  stm.effect_instruction_i2 = f
  return stm
})

/** @internal */
export const matchSTM = dual<
  <E, A1, E1, R1, A, A2, E2, R2>(
    options: {
      readonly onFailure: (e: E) => STM.STM<A1, E1, R1>
      readonly onSuccess: (a: A) => STM.STM<A2, E2, R2>
    }
  ) => <R>(self: STM.STM<A, E, R>) => STM.STM<A1 | A2, E1 | E2, R1 | R2 | R>,
  <A, E, R, A1, E1, R1, A2, E2, R2>(
    self: STM.STM<A, E, R>,
    options: {
      readonly onFailure: (e: E) => STM.STM<A1, E1, R1>
      readonly onSuccess: (a: A) => STM.STM<A2, E2, R2>
    }
  ) => STM.STM<A1 | A2, E1 | E2, R1 | R2 | R>
>(2, <A, E, R, A1, E1, R1, A2, E2, R2>(
  self: STM.STM<A, E, R>,
  { onFailure, onSuccess }: {
    readonly onFailure: (e: E) => STM.STM<A1, E1, R1>
    readonly onSuccess: (a: A) => STM.STM<A2, E2, R2>
  }
): STM.STM<A1 | A2, E1 | E2, R1 | R2 | R> =>
  pipe(
    self,
    map(Either.right),
    catchAll((e) => pipe(onFailure(e), map(Either.left))),
    flatMap((either): STM.STM<A1 | A2, E1 | E2, R | R1 | R2> => {
      switch (either._tag) {
        case "Left": {
          return succeed(either.left)
        }
        case "Right": {
          return onSuccess(either.right)
        }
      }
    })
  ))

/** @internal */
export const withSTMRuntime = <A, E = never, R = never>(
  f: (runtime: STMDriver<unknown, unknown, unknown>) => STM.STM<A, E, R>
): STM.STM<A, E, R> => {
  const stm = new STMPrimitive(OpCodes.OP_WITH_STM_RUNTIME)
  stm.effect_instruction_i1 = f
  return stm
}

/** @internal */
export const interrupt: STM.STM<never> = withSTMRuntime((_) => {
  const stm = new STMPrimitive(OpCodes.OP_INTERRUPT)
  stm.effect_instruction_i1 = _.fiberId
  return stm as any
})

/** @internal */
export const interruptAs = (fiberId: FiberId.FiberId): STM.STM<never> => {
  const stm = new STMPrimitive(OpCodes.OP_INTERRUPT)
  stm.effect_instruction_i1 = fiberId
  return stm as any
}

/** @internal */
export const map = dual<
  <A, B>(f: (a: A) => B) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<B, E, R>,
  <A, E, R, B>(self: STM.STM<A, E, R>, f: (a: A) => B) => STM.STM<B, E, R>
>(2, (self, f) => pipe(self, flatMap((a) => sync(() => f(a)))))

/** @internal */
export const orTry = dual<
  <A1, E1, R1>(
    that: LazyArg<STM.STM<A1, E1, R1>>
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A1 | A, E1 | E, R1 | R>,
  <A, E, R, A1, E1, R1>(
    self: STM.STM<A, E, R>,
    that: LazyArg<STM.STM<A1, E1, R1>>
  ) => STM.STM<A1 | A, E1 | E, R1 | R>
>(2, (self, that) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_RETRY)
  stm.effect_instruction_i1 = self
  stm.effect_instruction_i2 = that
  return stm
})

/** @internal */
export const retry: STM.STM<never> = new STMPrimitive(OpCodes.OP_RETRY)

/** @internal */
export const succeed = <A>(value: A): STM.STM<A> => {
  const stm = new STMPrimitive(OpCodes.OP_SUCCEED)
  stm.effect_instruction_i1 = value
  return stm as any
}

/** @internal */
export const sync = <A>(evaluate: () => A): STM.STM<A> => {
  const stm = new STMPrimitive(OpCodes.OP_SYNC)
  stm.effect_instruction_i1 = evaluate
  return stm as any
}

/** @internal */
export const zip = dual<
  <A1, E1, R1>(
    that: STM.STM<A1, E1, R1>
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<[A, A1], E1 | E, R1 | R>,
  <A, E, R, A1, E1, R1>(
    self: STM.STM<A, E, R>,
    that: STM.STM<A1, E1, R1>
  ) => STM.STM<[A, A1], E1 | E, R1 | R>
>(2, (self, that) => pipe(self, zipWith(that, (a, a1) => [a, a1])))

/** @internal */
export const zipLeft = dual<
  <A1, E1, R1>(that: STM.STM<A1, E1, R1>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E1 | E, R1 | R>,
  <A, E, R, A1, E1, R1>(self: STM.STM<A, E, R>, that: STM.STM<A1, E1, R1>) => STM.STM<A, E1 | E, R1 | R>
>(2, (self, that) => pipe(self, flatMap((a) => pipe(that, map(() => a)))))

/** @internal */
export const zipRight = dual<
  <A1, E1, R1>(that: STM.STM<A1, E1, R1>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<A1, E1 | E, R1 | R>,
  <A, E, R, A1, E1, R1>(self: STM.STM<A, E, R>, that: STM.STM<A1, E1, R1>) => STM.STM<A1, E1 | E, R1 | R>
>(2, (self, that) => pipe(self, flatMap(() => that)))

/** @internal */
export const zipWith = dual<
  <A1, E1, R1, A, A2>(
    that: STM.STM<A1, E1, R1>,
    f: (a: A, b: A1) => A2
  ) => <E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A2, E1 | E, R1 | R>,
  <A, E, R, A1, E1, R1, A2>(
    self: STM.STM<A, E, R>,
    that: STM.STM<A1, E1, R1>,
    f: (a: A, b: A1) => A2
  ) => STM.STM<A2, E1 | E, R1 | R>
>(
  3,
  (self, that, f) => pipe(self, flatMap((a) => pipe(that, map((b) => f(a, b)))))
)

import * as Cause from "../../Cause.js"
import type * as Channel from "../../Channel.js"
import type * as ChildExecutorDecision from "../../ChildExecutorDecision.js"
import type * as Context from "../../Context.js"
import * as Deferred from "../../Deferred.js"
import * as Effect from "../../Effect.js"
import * as ExecutionStrategy from "../../ExecutionStrategy.js"
import * as Exit from "../../Exit.js"
import * as Fiber from "../../Fiber.js"
import * as FiberId from "../../FiberId.js"
import { dual, identity, pipe } from "../../Function.js"
import * as HashSet from "../../HashSet.js"
import * as Option from "../../Option.js"
import * as Scope from "../../Scope.js"
import type * as UpstreamPullStrategy from "../../UpstreamPullStrategy.js"
import * as core from "../core-stream.js"
import * as ChannelOpCodes from "../opCodes/channel.js"
import * as ChildExecutorDecisionOpCodes from "../opCodes/channelChildExecutorDecision.js"
import * as ChannelStateOpCodes from "../opCodes/channelState.js"
import * as UpstreamPullStrategyOpCodes from "../opCodes/channelUpstreamPullStrategy.js"
import * as ContinuationOpCodes from "../opCodes/continuation.js"
import * as ChannelState from "./channelState.js"
import * as Continuation from "./continuation.js"
import * as Subexecutor from "./subexecutor.js"
import * as upstreamPullRequest from "./upstreamPullRequest.js"

export type ErasedChannel<R> = Channel.Channel<unknown, unknown, unknown, unknown, unknown, unknown, R>

/** @internal */
export type ErasedExecutor<R> = ChannelExecutor<unknown, unknown, unknown, unknown, unknown, unknown, R>

/** @internal */
export type ErasedContinuation<R> = Continuation.Continuation<
  R,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown
>

/** @internal */
export type ErasedFinalizer<R> = (exit: Exit.Exit<unknown, unknown>) => Effect.Effect<unknown, never, R>

/** @internal */
export class ChannelExecutor<
  out OutElem,
  in InElem = unknown,
  out OutErr = never,
  in InErr = unknown,
  out OutDone = void,
  in InDone = unknown,
  in out Env = never
> {
  private _activeSubexecutor: Subexecutor.Subexecutor<Env> | undefined = undefined

  private _cancelled: Exit.Exit<OutErr, OutDone> | undefined = undefined

  private _closeLastSubstream: Effect.Effect<unknown, never, Env> | undefined = undefined

  private _currentChannel: core.Primitive | undefined

  private _done: Exit.Exit<unknown, unknown> | undefined = undefined

  private _doneStack: Array<ErasedContinuation<Env>> = []

  private _emitted: unknown | undefined = undefined

  private _executeCloseLastSubstream: (
    effect: Effect.Effect<unknown, never, Env>
  ) => Effect.Effect<unknown, never, Env>

  private _input: ErasedExecutor<Env> | undefined = undefined

  private _inProgressFinalizer: Effect.Effect<unknown, never, Env> | undefined = undefined

  private _providedEnv: Context.Context<unknown> | undefined

  constructor(
    initialChannel: Channel.Channel<OutElem, InElem, OutErr, InErr, OutDone, InDone, Env>,
    providedEnv: Context.Context<unknown> | undefined,
    executeCloseLastSubstream: (effect: Effect.Effect<unknown, never, Env>) => Effect.Effect<unknown, never, Env>
  ) {
    this._currentChannel = initialChannel as core.Primitive
    this._executeCloseLastSubstream = executeCloseLastSubstream
    this._providedEnv = providedEnv
  }

  run(): ChannelState.ChannelState<unknown, Env> {
    let result: ChannelState.ChannelState<unknown, Env> | undefined = undefined
    while (result === undefined) {
      if (this._cancelled !== undefined) {
        result = this.processCancellation()
      } else if (this._activeSubexecutor !== undefined) {
        result = this.runSubexecutor()
      } else {
        try {
          if (this._currentChannel === undefined) {
            result = ChannelState.Done()
          } else {
            if (Effect.isEffect(this._currentChannel)) {
              this._currentChannel = core.fromEffect(this._currentChannel) as core.Primitive
            }
            switch (this._currentChannel._tag) {
              case ChannelOpCodes.OP_BRACKET_OUT: {
                result = this.runBracketOut(this._currentChannel)
                break
              }

              case ChannelOpCodes.OP_BRIDGE: {
                const bridgeInput = this._currentChannel.input

                // PipeTo(left, Bridge(queue, channel))
                // In a fiber: repeatedly run left and push its outputs to the queue
                // Add a finalizer to interrupt the fiber and close the executor
                this._currentChannel = this._currentChannel.channel as core.Primitive

                if (this._input !== undefined) {
                  const inputExecutor = this._input
                  this._input = undefined

                  const drainer = (): Effect.Effect<unknown, never, Env> =>
                    Effect.flatMap(bridgeInput.awaitRead(), () =>
                      Effect.suspend(() => {
                        const state = inputExecutor.run() as ChannelState.Primitive
                        switch (state._tag) {
                          case ChannelStateOpCodes.OP_DONE: {
                            return Exit.match(inputExecutor.getDone(), {
                              onFailure: (cause) => bridgeInput.error(cause),
                              onSuccess: (value) => bridgeInput.done(value)
                            })
                          }
                          case ChannelStateOpCodes.OP_EMIT: {
                            return Effect.flatMap(
                              bridgeInput.emit(inputExecutor.getEmit()),
                              () => drainer()
                            )
                          }
                          case ChannelStateOpCodes.OP_FROM_EFFECT: {
                            return Effect.matchCauseEffect(state.effect, {
                              onFailure: (cause) => bridgeInput.error(cause),
                              onSuccess: () => drainer()
                            })
                          }
                          case ChannelStateOpCodes.OP_READ: {
                            return readUpstream(
                              state,
                              () => drainer(),
                              (cause) => bridgeInput.error(cause)
                            )
                          }
                        }
                      })) as Effect.Effect<unknown, never, Env>

                  result = ChannelState.fromEffect(
                    Effect.flatMap(
                      Effect.forkDaemon(Effect.interruptible(drainer())),
                      (fiber) =>
                        Effect.sync(() =>
                          this.addFinalizer((exit) =>
                            Effect.flatMap(Fiber.interrupt(fiber), () =>
                              Effect.suspend(() => {
                                const effect = this.restorePipe(exit, inputExecutor)
                                return effect !== undefined ? effect : Effect.void
                              }))
                          )
                        )
                    )
                  )
                }

                break
              }

              case ChannelOpCodes.OP_CONCAT_ALL: {
                const executor: ErasedExecutor<Env> = new ChannelExecutor(
                  this._currentChannel.value() as Channel.Channel<
                    never,
                    unknown,
                    never,
                    unknown,
                    never,
                    unknown,
                    Env
                  >,
                  this._providedEnv,
                  (effect) =>
                    Effect.sync(() => {
                      const prevLastClose = this._closeLastSubstream === undefined
                        ? Effect.void
                        : this._closeLastSubstream
                      this._closeLastSubstream = pipe(prevLastClose, Effect.zipRight(effect))
                    })
                )
                executor._input = this._input

                const channel = this._currentChannel
                this._activeSubexecutor = new Subexecutor.PullFromUpstream(
                  executor,
                  (value) => channel.k(value),
                  undefined,
                  [],
                  (x, y) => channel.combineInners(x, y),
                  (x, y) => channel.combineAll(x, y),
                  (request) => channel.onPull(request),
                  (value) => channel.onEmit(value)
                )

                this._closeLastSubstream = undefined
                this._currentChannel = undefined

                break
              }

              case ChannelOpCodes.OP_EMIT: {
                this._emitted = this._currentChannel.out
                this._currentChannel = (this._activeSubexecutor !== undefined ?
                  undefined :
                  core.void) as core.Primitive | undefined
                result = ChannelState.Emit()
                break
              }

              case ChannelOpCodes.OP_ENSURING: {
                this.runEnsuring(this._currentChannel)
                break
              }

              case ChannelOpCodes.OP_FAIL: {
                result = this.doneHalt(this._currentChannel.error())
                break
              }

              case ChannelOpCodes.OP_FOLD: {
                this._doneStack.push(this._currentChannel.k as ErasedContinuation<Env>)
                this._currentChannel = this._currentChannel.channel as core.Primitive
                break
              }

              case ChannelOpCodes.OP_FROM_EFFECT: {
                const effect = this._providedEnv === undefined ?
                  this._currentChannel.effect() :
                  pipe(
                    this._currentChannel.effect(),
                    Effect.provide(this._providedEnv)
                  )

                result = ChannelState.fromEffect(
                  Effect.matchCauseEffect(effect, {
                    onFailure: (cause) => {
                      const state = this.doneHalt(cause)
                      return state !== undefined && ChannelState.isFromEffect(state) ?
                        state.effect :
                        Effect.void
                    },
                    onSuccess: (value) => {
                      const state = this.doneSucceed(value)
                      return state !== undefined && ChannelState.isFromEffect(state) ?
                        state.effect :
                        Effect.void
                    }
                  })
                ) as ChannelState.ChannelState<unknown, Env> | undefined

                break
              }

              case ChannelOpCodes.OP_PIPE_TO: {
                const previousInput = this._input

                const leftExec: ErasedExecutor<Env> = new ChannelExecutor(
                  this._currentChannel.left() as Channel.Channel<never, unknown, never, unknown, never, unknown, Env>,
                  this._providedEnv,
                  (effect) => this._executeCloseLastSubstream(effect)
                )
                leftExec._input = previousInput
                this._input = leftExec

                this.addFinalizer((exit) => {
                  const effect = this.restorePipe(exit, previousInput)
                  return effect !== undefined ? effect : Effect.void
                })

                this._currentChannel = this._currentChannel.right() as core.Primitive

                break
              }

              case ChannelOpCodes.OP_PROVIDE: {
                const previousEnv = this._providedEnv
                this._providedEnv = this._currentChannel.context()
                this._currentChannel = this._currentChannel.inner as core.Primitive
                this.addFinalizer(() =>
                  Effect.sync(() => {
                    this._providedEnv = previousEnv
                  })
                )
                break
              }

              case ChannelOpCodes.OP_READ: {
                const read = this._currentChannel
                result = ChannelState.Read(
                  this._input!,
                  identity,
                  (emitted) => {
                    try {
                      this._currentChannel = read.more(emitted) as core.Primitive
                    } catch (error) {
                      this._currentChannel = read.done.onExit(Exit.die(error)) as core.Primitive
                    }
                    return undefined
                  },
                  (exit) => {
                    const onExit = (exit: Exit.Exit<unknown, unknown>): core.Primitive => {
                      return read.done.onExit(exit) as core.Primitive
                    }
                    this._currentChannel = onExit(exit)
                    return undefined
                  }
                )
                break
              }

              case ChannelOpCodes.OP_SUCCEED: {
                result = this.doneSucceed(this._currentChannel.evaluate())
                break
              }

              case ChannelOpCodes.OP_SUCCEED_NOW: {
                result = this.doneSucceed(this._currentChannel.terminal)
                break
              }

              case ChannelOpCodes.OP_SUSPEND: {
                this._currentChannel = this._currentChannel.channel() as core.Primitive
                break
              }
            }
          }
        } catch (error) {
          this._currentChannel = core.failCause(Cause.die(error)) as core.Primitive
        }
      }
    }
    return result
  }

  getDone(): Exit.Exit<OutDone, OutErr> {
    return this._done as Exit.Exit<OutDone, OutErr>
  }

  getEmit(): OutElem {
    return this._emitted as OutElem
  }

  cancelWith(exit: Exit.Exit<OutErr, OutDone>): void {
    this._cancelled = exit
  }

  clearInProgressFinalizer(): void {
    this._inProgressFinalizer = undefined
  }

  storeInProgressFinalizer(finalizer: Effect.Effect<unknown, never, Env> | undefined): void {
    this._inProgressFinalizer = finalizer
  }

  popAllFinalizers(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, never, Env> {
    const finalizers: Array<ErasedFinalizer<Env>> = []
    let next = this._doneStack.pop() as Continuation.Primitive | undefined
    while (next) {
      if (next._tag === "ContinuationFinalizer") {
        finalizers.push(next.finalizer as ErasedFinalizer<Env>)
      }
      next = this._doneStack.pop() as Continuation.Primitive | undefined
    }
    const effect = (finalizers.length === 0 ? Effect.void : runFinalizers(finalizers, exit)) as Effect.Effect<
      unknown,
      never,
      Env
    >
    this.storeInProgressFinalizer(effect)
    return effect
  }

  popNextFinalizers(): Array<Continuation.ContinuationFinalizer<Env, unknown, unknown>> {
    const builder: Array<Continuation.ContinuationFinalizer<Env, unknown, unknown>> = []
    while (this._doneStack.length !== 0) {
      const cont = this._doneStack[this._doneStack.length - 1] as Continuation.Primitive
      if (cont._tag === ContinuationOpCodes.OP_CONTINUATION_K) {
        return builder
      }
      builder.push(cont as Continuation.ContinuationFinalizer<Env, unknown, unknown>)
      this._doneStack.pop()
    }
    return builder
  }

  restorePipe(
    exit: Exit.Exit<unknown, unknown>,
    prev: ErasedExecutor<Env> | undefined
  ): Effect.Effect<unknown, never, Env> | undefined {
    const currInput = this._input
    this._input = prev
    if (currInput !== undefined) {
      const effect = currInput.close(exit)
      return effect
    }
    return Effect.void
  }

  close(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, never, Env> | undefined {
    let runInProgressFinalizers: Effect.Effect<unknown, never, Env> | undefined = undefined
    const finalizer = this._inProgressFinalizer
    if (finalizer !== undefined) {
      runInProgressFinalizers = pipe(
        finalizer,
        Effect.ensuring(Effect.sync(() => this.clearInProgressFinalizer()))
      )
    }

    let closeSelf: Effect.Effect<unknown, never, Env> | undefined = undefined
    const selfFinalizers = this.popAllFinalizers(exit)
    if (selfFinalizers !== undefined) {
      closeSelf = pipe(
        selfFinalizers,
        Effect.ensuring(Effect.sync(() => this.clearInProgressFinalizer()))
      )
    }

    const closeSubexecutors = this._activeSubexecutor === undefined ?
      undefined :
      this._activeSubexecutor.close(exit)

    if (
      closeSubexecutors === undefined &&
      runInProgressFinalizers === undefined &&
      closeSelf === undefined
    ) {
      return undefined
    }

    return pipe(
      Effect.exit(ifNotNull(closeSubexecutors)),
      Effect.zip(Effect.exit(ifNotNull(runInProgressFinalizers))),
      Effect.zip(Effect.exit(ifNotNull(closeSelf))),
      Effect.map(([[exit1, exit2], exit3]) => pipe(exit1, Exit.zipRight(exit2), Exit.zipRight(exit3))),
      Effect.uninterruptible,
      // TODO: remove
      Effect.flatMap((exit) => Effect.suspend(() => exit))
    )
  }

  doneSucceed(value: unknown): ChannelState.ChannelState<unknown, Env> | undefined {
    if (this._doneStack.length === 0) {
      this._done = Exit.succeed(value)
      this._currentChannel = undefined
      return ChannelState.Done()
    }

    const head = this._doneStack[this._doneStack.length - 1] as Continuation.Primitive
    if (head._tag === ContinuationOpCodes.OP_CONTINUATION_K) {
      this._doneStack.pop()
      this._currentChannel = head.onSuccess(value) as core.Primitive
      return undefined
    }

    const finalizers = this.popNextFinalizers()
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse()
      this._done = Exit.succeed(value)
      this._currentChannel = undefined
      return ChannelState.Done()
    }

    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), Exit.succeed(value))!
    this.storeInProgressFinalizer(finalizerEffect)

    const effect = pipe(
      finalizerEffect,
      Effect.ensuring(Effect.sync(() => this.clearInProgressFinalizer())),
      Effect.uninterruptible,
      Effect.flatMap(() => Effect.sync(() => this.doneSucceed(value)))
    )

    return ChannelState.fromEffect(effect)
  }

  doneHalt(cause: Cause.Cause<unknown>): ChannelState.ChannelState<unknown, Env> | undefined {
    if (this._doneStack.length === 0) {
      this._done = Exit.failCause(cause)
      this._currentChannel = undefined
      return ChannelState.Done()
    }

    const head = this._doneStack[this._doneStack.length - 1] as Continuation.Primitive
    if (head._tag === ContinuationOpCodes.OP_CONTINUATION_K) {
      this._doneStack.pop()
      try {
        this._currentChannel = head.onHalt(cause) as core.Primitive
      } catch (error) {
        this._currentChannel = core.failCause(Cause.die(error)) as core.Primitive
      }
      return undefined
    }

    const finalizers = this.popNextFinalizers()
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse()
      this._done = Exit.failCause(cause)
      this._currentChannel = undefined
      return ChannelState.Done()
    }

    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), Exit.failCause(cause))!
    this.storeInProgressFinalizer(finalizerEffect)

    const effect = pipe(
      finalizerEffect,
      Effect.ensuring(Effect.sync(() => this.clearInProgressFinalizer())),
      Effect.uninterruptible,
      Effect.flatMap(() => Effect.sync(() => this.doneHalt(cause)))
    )

    return ChannelState.fromEffect(effect)
  }

  processCancellation(): ChannelState.ChannelState<unknown, Env> {
    this._currentChannel = undefined
    this._done = this._cancelled
    this._cancelled = undefined
    return ChannelState.Done()
  }

  runBracketOut(bracketOut: core.BracketOut): ChannelState.ChannelState<unknown, Env> {
    const effect = Effect.uninterruptible(
      Effect.matchCauseEffect(this.provide(bracketOut.acquire() as Effect.Effect<OutDone, OutErr, Env>), {
        onFailure: (cause) =>
          Effect.sync(() => {
            this._currentChannel = core.failCause(cause) as core.Primitive
          }),
        onSuccess: (out) =>
          Effect.sync(() => {
            this.addFinalizer((exit) =>
              this.provide(bracketOut.finalizer(out, exit)) as Effect.Effect<unknown, never, Env>
            )
            this._currentChannel = core.write(out) as core.Primitive
          })
      })
    )
    return ChannelState.fromEffect(effect) as ChannelState.ChannelState<unknown, Env>
  }

  provide(effect: Effect.Effect<unknown, unknown, unknown>): Effect.Effect<unknown, unknown, unknown> {
    if (this._providedEnv === undefined) {
      return effect
    }
    return pipe(effect, Effect.provide(this._providedEnv))
  }

  runEnsuring(ensuring: core.Ensuring): void {
    this.addFinalizer(ensuring.finalizer as ErasedFinalizer<Env>)
    this._currentChannel = ensuring.channel as core.Primitive
  }

  addFinalizer(f: ErasedFinalizer<Env>): void {
    this._doneStack.push(new Continuation.ContinuationFinalizerImpl(f))
  }

  runSubexecutor(): ChannelState.ChannelState<unknown, Env> | undefined {
    const subexecutor = this._activeSubexecutor as Subexecutor.Primitive<Env>
    switch (subexecutor._tag) {
      case Subexecutor.OP_PULL_FROM_CHILD: {
        return this.pullFromChild(
          subexecutor.childExecutor,
          subexecutor.parentSubexecutor,
          subexecutor.onEmit,
          subexecutor
        )
      }
      case Subexecutor.OP_PULL_FROM_UPSTREAM: {
        return this.pullFromUpstream(subexecutor)
      }
      case Subexecutor.OP_DRAIN_CHILD_EXECUTORS: {
        return this.drainChildExecutors(subexecutor)
      }
      case Subexecutor.OP_EMIT: {
        this._emitted = subexecutor.value
        this._activeSubexecutor = subexecutor.next
        return ChannelState.Emit()
      }
    }
  }

  replaceSubexecutor(nextSubExec: Subexecutor.Subexecutor<Env>): void {
    this._currentChannel = undefined
    this._activeSubexecutor = nextSubExec
  }

  finishWithExit(exit: Exit.Exit<unknown, unknown>): Effect.Effect<unknown, unknown, Env> {
    const state = Exit.match(exit, {
      onFailure: (cause) => this.doneHalt(cause),
      onSuccess: (value) => this.doneSucceed(value)
    })
    this._activeSubexecutor = undefined
    return state === undefined ?
      Effect.void :
      ChannelState.effect(state)
  }

  finishSubexecutorWithCloseEffect(
    subexecutorDone: Exit.Exit<unknown, unknown>,
    ...closeFuncs: Array<(exit: Exit.Exit<unknown, unknown>) => Effect.Effect<unknown, never, Env> | undefined>
  ): ChannelState.ChannelState<unknown, Env> | undefined {
    this.addFinalizer(() =>
      pipe(
        closeFuncs,
        Effect.forEach((closeFunc) =>
          pipe(
            Effect.sync(() => closeFunc(subexecutorDone)),
            Effect.flatMap((closeEffect) => closeEffect !== undefined ? closeEffect : Effect.void)
          ), { discard: true })
      )
    )
    const state = pipe(
      subexecutorDone,
      Exit.match({
        onFailure: (cause) => this.doneHalt(cause),
        onSuccess: (value) => this.doneSucceed(value)
      })
    )
    this._activeSubexecutor = undefined
    return state
  }

  applyUpstreamPullStrategy(
    upstreamFinished: boolean,
    queue: ReadonlyArray<Subexecutor.PullFromChild<Env> | undefined>,
    strategy: UpstreamPullStrategy.UpstreamPullStrategy<unknown>
  ): [Option.Option<unknown>, ReadonlyArray<Subexecutor.PullFromChild<Env> | undefined>] {
    switch (strategy._tag) {
      case UpstreamPullStrategyOpCodes.OP_PULL_AFTER_NEXT: {
        const shouldPrepend = !upstreamFinished || queue.some((subexecutor) => subexecutor !== undefined)
        return [strategy.emitSeparator, shouldPrepend ? [undefined, ...queue] : queue]
      }
      case UpstreamPullStrategyOpCodes.OP_PULL_AFTER_ALL_ENQUEUED: {
        const shouldEnqueue = !upstreamFinished || queue.some((subexecutor) => subexecutor !== undefined)
        return [strategy.emitSeparator, shouldEnqueue ? [...queue, undefined] : queue]
      }
    }
  }

  pullFromChild(
    childExecutor: ErasedExecutor<Env>,
    parentSubexecutor: Subexecutor.Subexecutor<Env>,
    onEmitted: (emitted: unknown) => ChildExecutorDecision.ChildExecutorDecision,
    subexecutor: Subexecutor.PullFromChild<Env>
  ): ChannelState.ChannelState<unknown, Env> | undefined {
    return ChannelState.Read(
      childExecutor,
      identity,
      (emitted) => {
        const childExecutorDecision = onEmitted(emitted)
        switch (childExecutorDecision._tag) {
          case ChildExecutorDecisionOpCodes.OP_CONTINUE: {
            break
          }
          case ChildExecutorDecisionOpCodes.OP_CLOSE: {
            this.finishWithDoneValue(childExecutor, parentSubexecutor, childExecutorDecision.value)
            break
          }
          case ChildExecutorDecisionOpCodes.OP_YIELD: {
            const modifiedParent = parentSubexecutor.enqueuePullFromChild(subexecutor)
            this.replaceSubexecutor(modifiedParent)
            break
          }
        }
        this._activeSubexecutor = new Subexecutor.Emit(emitted, this._activeSubexecutor!)
        return undefined
      },
      Exit.match({
        onFailure: (cause) => {
          const state = this.handleSubexecutorFailure(childExecutor, parentSubexecutor, cause)
          return state === undefined ?
            undefined :
            ChannelState.effectOrUndefinedIgnored(state) as Effect.Effect<void, never, Env>
        },
        onSuccess: (doneValue) => {
          this.finishWithDoneValue(childExecutor, parentSubexecutor, doneValue)
          return undefined
        }
      })
    )
  }

  finishWithDoneValue(
    childExecutor: ErasedExecutor<Env>,
    parentSubexecutor: Subexecutor.Subexecutor<Env>,
    doneValue: unknown
  ): void {
    const subexecutor = parentSubexecutor as Subexecutor.Primitive<Env>
    switch (subexecutor._tag) {
      case Subexecutor.OP_PULL_FROM_UPSTREAM: {
        const modifiedParent = new Subexecutor.PullFromUpstream(
          subexecutor.upstreamExecutor,
          subexecutor.createChild,
          subexecutor.lastDone !== undefined
            ? subexecutor.combineChildResults(
              subexecutor.lastDone,
              doneValue
            )
            : doneValue,
          subexecutor.activeChildExecutors,
          subexecutor.combineChildResults,
          subexecutor.combineWithChildResult,
          subexecutor.onPull,
          subexecutor.onEmit
        )
        this._closeLastSubstream = childExecutor.close(Exit.succeed(doneValue))
        this.replaceSubexecutor(modifiedParent)
        break
      }
      case Subexecutor.OP_DRAIN_CHILD_EXECUTORS: {
        const modifiedParent = new Subexecutor.DrainChildExecutors(
          subexecutor.upstreamExecutor,
          subexecutor.lastDone !== undefined
            ? subexecutor.combineChildResults(
              subexecutor.lastDone,
              doneValue
            )
            : doneValue,
          subexecutor.activeChildExecutors,
          subexecutor.upstreamDone,
          subexecutor.combineChildResults,
          subexecutor.combineWithChildResult,
          subexecutor.onPull
        )
        this._closeLastSubstream = childExecutor.close(Exit.succeed(doneValue))
        this.replaceSubexecutor(modifiedParent)
        break
      }
      default: {
        break
      }
    }
  }

  handleSubexecutorFailure(
    childExecutor: ErasedExecutor<Env>,
    parentSubexecutor: Subexecutor.Subexecutor<Env>,
    cause: Cause.Cause<unknown>
  ): ChannelState.ChannelState<unknown, Env> | undefined {
    return this.finishSubexecutorWithCloseEffect(
      Exit.failCause(cause),
      (exit) => parentSubexecutor.close(exit),
      (exit) => childExecutor.close(exit)
    )
  }

  pullFromUpstream(
    subexecutor: Subexecutor.PullFromUpstream<Env>
  ): ChannelState.ChannelState<unknown, Env> | undefined {
    if (subexecutor.activeChildExecutors.length === 0) {
      return this.performPullFromUpstream(subexecutor)
    }

    const activeChild = subexecutor.activeChildExecutors[0]

    const parentSubexecutor = new Subexecutor.PullFromUpstream(
      subexecutor.upstreamExecutor,
      subexecutor.createChild,
      subexecutor.lastDone,
      subexecutor.activeChildExecutors.slice(1),
      subexecutor.combineChildResults,
      subexecutor.combineWithChildResult,
      subexecutor.onPull,
      subexecutor.onEmit
    )

    if (activeChild === undefined) {
      return this.performPullFromUpstream(parentSubexecutor)
    }

    this.replaceSubexecutor(
      new Subexecutor.PullFromChild(
        activeChild.childExecutor,
        parentSubexecutor,
        activeChild.onEmit
      )
    )

    return undefined
  }

  performPullFromUpstream(
    subexecutor: Subexecutor.PullFromUpstream<Env>
  ): ChannelState.ChannelState<unknown, Env> | undefined {
    return ChannelState.Read(
      subexecutor.upstreamExecutor,
      (effect) => {
        const closeLastSubstream = this._closeLastSubstream === undefined ? Effect.void : this._closeLastSubstream
        this._closeLastSubstream = undefined
        return pipe(
          this._executeCloseLastSubstream(closeLastSubstream),
          Effect.zipRight(effect)
        )
      },
      (emitted) => {
        if (this._closeLastSubstream !== undefined) {
          const closeLastSubstream = this._closeLastSubstream
          this._closeLastSubstream = undefined
          return pipe(
            this._executeCloseLastSubstream(closeLastSubstream),
            Effect.map(() => {
              const childExecutor: ErasedExecutor<Env> = new ChannelExecutor(
                subexecutor.createChild(emitted),
                this._providedEnv,
                this._executeCloseLastSubstream
              )

              childExecutor._input = this._input

              const [emitSeparator, updatedChildExecutors] = this.applyUpstreamPullStrategy(
                false,
                subexecutor.activeChildExecutors,
                subexecutor.onPull(upstreamPullRequest.Pulled(emitted))
              )

              this._activeSubexecutor = new Subexecutor.PullFromChild(
                childExecutor,
                new Subexecutor.PullFromUpstream(
                  subexecutor.upstreamExecutor,
                  subexecutor.createChild,
                  subexecutor.lastDone,
                  updatedChildExecutors,
                  subexecutor.combineChildResults,
                  subexecutor.combineWithChildResult,
                  subexecutor.onPull,
                  subexecutor.onEmit
                ),
                subexecutor.onEmit
              )

              if (Option.isSome(emitSeparator)) {
                this._activeSubexecutor = new Subexecutor.Emit(emitSeparator.value, this._activeSubexecutor)
              }

              return undefined
            })
          )
        }

        const childExecutor: ErasedExecutor<Env> = new ChannelExecutor(
          subexecutor.createChild(emitted),
          this._providedEnv,
          this._executeCloseLastSubstream
        )

        childExecutor._input = this._input

        const [emitSeparator, updatedChildExecutors] = this.applyUpstreamPullStrategy(
          false,
          subexecutor.activeChildExecutors,
          subexecutor.onPull(upstreamPullRequest.Pulled(emitted))
        )

        this._activeSubexecutor = new Subexecutor.PullFromChild(
          childExecutor,
          new Subexecutor.PullFromUpstream(
            subexecutor.upstreamExecutor,
            subexecutor.createChild,
            subexecutor.lastDone,
            updatedChildExecutors,
            subexecutor.combineChildResults,
            subexecutor.combineWithChildResult,
            subexecutor.onPull,
            subexecutor.onEmit
          ),
          subexecutor.onEmit
        )

        if (Option.isSome(emitSeparator)) {
          this._activeSubexecutor = new Subexecutor.Emit(emitSeparator.value, this._activeSubexecutor)
        }

        return undefined
      },
      (exit) => {
        if (subexecutor.activeChildExecutors.some((subexecutor) => subexecutor !== undefined)) {
          const drain = new Subexecutor.DrainChildExecutors(
            subexecutor.upstreamExecutor,
            subexecutor.lastDone,
            [undefined, ...subexecutor.activeChildExecutors],
            subexecutor.upstreamExecutor.getDone(),
            subexecutor.combineChildResults,
            subexecutor.combineWithChildResult,
            subexecutor.onPull
          )

          if (this._closeLastSubstream !== undefined) {
            const closeLastSubstream = this._closeLastSubstream
            this._closeLastSubstream = undefined
            return pipe(
              this._executeCloseLastSubstream(closeLastSubstream),
              Effect.map(() => this.replaceSubexecutor(drain))
            )
          }

          this.replaceSubexecutor(drain)

          return undefined
        }

        const closeLastSubstream = this._closeLastSubstream
        const state = this.finishSubexecutorWithCloseEffect(
          pipe(exit, Exit.map((a) => subexecutor.combineWithChildResult(subexecutor.lastDone, a))),
          () => closeLastSubstream,
          (exit) => subexecutor.upstreamExecutor.close(exit)
        )
        return state === undefined ?
          undefined :
          // NOTE: assuming finalizers cannot fail
          ChannelState.effectOrUndefinedIgnored(state as ChannelState.ChannelState<never, Env>)
      }
    )
  }

  drainChildExecutors(
    subexecutor: Subexecutor.DrainChildExecutors<Env>
  ): ChannelState.ChannelState<unknown, Env> | undefined {
    if (subexecutor.activeChildExecutors.length === 0) {
      const lastClose = this._closeLastSubstream
      if (lastClose !== undefined) {
        this.addFinalizer(() => Effect.succeed(lastClose))
      }
      return this.finishSubexecutorWithCloseEffect(
        subexecutor.upstreamDone,
        () => lastClose,
        (exit) => subexecutor.upstreamExecutor.close(exit)
      )
    }

    const activeChild = subexecutor.activeChildExecutors[0]
    const rest = subexecutor.activeChildExecutors.slice(1)

    if (activeChild === undefined) {
      const [emitSeparator, remainingExecutors] = this.applyUpstreamPullStrategy(
        true,
        rest,
        subexecutor.onPull(
          upstreamPullRequest.NoUpstream(rest.reduce((n, curr) => curr !== undefined ? n + 1 : n, 0))
        )
      )

      this.replaceSubexecutor(
        new Subexecutor.DrainChildExecutors(
          subexecutor.upstreamExecutor,
          subexecutor.lastDone,
          remainingExecutors,
          subexecutor.upstreamDone,
          subexecutor.combineChildResults,
          subexecutor.combineWithChildResult,
          subexecutor.onPull
        )
      )

      if (Option.isSome(emitSeparator)) {
        this._emitted = emitSeparator.value
        return ChannelState.Emit()
      }

      return undefined
    }

    const parentSubexecutor = new Subexecutor.DrainChildExecutors(
      subexecutor.upstreamExecutor,
      subexecutor.lastDone,
      rest,
      subexecutor.upstreamDone,
      subexecutor.combineChildResults,
      subexecutor.combineWithChildResult,
      subexecutor.onPull
    )

    this.replaceSubexecutor(
      new Subexecutor.PullFromChild(
        activeChild.childExecutor,
        parentSubexecutor,
        activeChild.onEmit
      )
    )

    return undefined
  }
}

const ifNotNull = <Env>(effect: Effect.Effect<unknown, never, Env> | undefined): Effect.Effect<unknown, never, Env> =>
  effect !== undefined ? effect : Effect.void

const runFinalizers = <Env>(
  finalizers: Array<ErasedFinalizer<Env>>,
  exit: Exit.Exit<unknown, unknown>
): Effect.Effect<unknown, never, Env> => {
  return pipe(
    Effect.forEach(finalizers, (fin) => Effect.exit(fin(exit))),
    Effect.map((exits) => pipe(Exit.all(exits), Option.getOrElse(() => Exit.void))),
    Effect.flatMap((exit) => Effect.suspend(() => exit as Exit.Exit<unknown>))
  )
}

/**
 * @internal
 */
export const readUpstream = <A, E2, R, E>(
  r: ChannelState.Read,
  onSuccess: () => Effect.Effect<A, E2, R>,
  onFailure: (cause: Cause.Cause<E>) => Effect.Effect<A, E2, R>
): Effect.Effect<A, E2, R> => {
  const readStack = [r as ChannelState.Read]
  const read = (): Effect.Effect<A, E2, R> => {
    const current = readStack.pop()
    if (current === undefined || current.upstream === undefined) {
      return Effect.dieMessage("Unexpected end of input for channel execution")
    }
    const state = current.upstream.run() as ChannelState.Primitive
    switch (state._tag) {
      case ChannelStateOpCodes.OP_EMIT: {
        const emitEffect = current.onEmit(current.upstream.getEmit())
        if (readStack.length === 0) {
          if (emitEffect === undefined) {
            return Effect.suspend(onSuccess)
          }
          return pipe(
            emitEffect as Effect.Effect<void>,
            Effect.matchCauseEffect({ onFailure, onSuccess })
          )
        }
        if (emitEffect === undefined) {
          return Effect.suspend(() => read())
        }
        return pipe(
          emitEffect as Effect.Effect<void>,
          Effect.matchCauseEffect({ onFailure, onSuccess: () => read() })
        )
      }

      case ChannelStateOpCodes.OP_DONE: {
        const doneEffect = current.onDone(current.upstream.getDone())
        if (readStack.length === 0) {
          if (doneEffect === undefined) {
            return Effect.suspend(onSuccess)
          }
          return pipe(
            doneEffect as Effect.Effect<void>,
            Effect.matchCauseEffect({ onFailure, onSuccess })
          )
        }
        if (doneEffect === undefined) {
          return Effect.suspend(() => read())
        }
        return pipe(
          doneEffect as Effect.Effect<void>,
          Effect.matchCauseEffect({ onFailure, onSuccess: () => read() })
        )
      }

      case ChannelStateOpCodes.OP_FROM_EFFECT: {
        readStack.push(current)
        return pipe(
          current.onEffect(state.effect as Effect.Effect<void>) as Effect.Effect<void>,
          Effect.catchAllCause((cause) =>
            Effect.suspend(() => {
              const doneEffect = current.onDone(Exit.failCause(cause)) as Effect.Effect<void>
              return doneEffect === undefined ? Effect.void : doneEffect
            })
          ),
          Effect.matchCauseEffect({ onFailure, onSuccess: () => read() })
        )
      }

      case ChannelStateOpCodes.OP_READ: {
        readStack.push(current)
        readStack.push(state)
        return Effect.suspend(() => read())
      }
    }
  }
  return read()
}

/** @internal */
export const runIn = dual<
  (scope: Scope.Scope) => <Env, InErr, InDone, OutErr, OutDone>(
    self: Channel.Channel<never, unknown, OutErr, InErr, OutDone, InDone, Env>
  ) => Effect.Effect<OutDone, OutErr, Env>,
  <Env, InErr, InDone, OutErr, OutDone>(
    self: Channel.Channel<never, unknown, OutErr, InErr, OutDone, InDone, Env>,
    scope: Scope.Scope
  ) => Effect.Effect<OutDone, OutErr, Env>
>(2, <Env, InErr, InDone, OutErr, OutDone>(
  self: Channel.Channel<never, unknown, OutErr, InErr, OutDone, InDone, Env>,
  scope: Scope.Scope
) => {
  const run = (
    channelDeferred: Deferred.Deferred<OutDone, OutErr>,
    scopeDeferred: Deferred.Deferred<void>,
    scope: Scope.Scope
  ) =>
    Effect.acquireUseRelease(
      Effect.sync(() => new ChannelExecutor(self, void 0, identity)),
      (exec) =>
        Effect.suspend(() =>
          runScopedInterpret(exec.run() as ChannelState.ChannelState<OutErr, Env>, exec).pipe(
            Effect.intoDeferred(channelDeferred),
            Effect.zipRight(Deferred.await(channelDeferred)),
            Effect.zipLeft(Deferred.await(scopeDeferred))
          )
        ),
      (exec, exit) => {
        const finalize = exec.close(exit)
        if (finalize === undefined) {
          return Effect.void
        }
        return Effect.tapErrorCause(
          finalize,
          (cause) => Scope.addFinalizer(scope, Effect.failCause(cause))
        )
      }
    )
  return Effect.uninterruptibleMask((restore) =>
    Effect.all([
      Scope.fork(scope, ExecutionStrategy.sequential),
      Deferred.make<OutDone, OutErr>(),
      Deferred.make<void>()
    ]).pipe(Effect.flatMap(([child, channelDeferred, scopeDeferred]) =>
      restore(run(channelDeferred, scopeDeferred, child)).pipe(
        Effect.forkIn(scope),
        Effect.flatMap((fiber) =>
          scope.addFinalizer((exit) => {
            const interruptors = Exit.isFailure(exit) ? Cause.interruptors(exit.cause) : undefined
            return Deferred.isDone(channelDeferred).pipe(
              Effect.flatMap((isDone) =>
                isDone
                  ? Deferred.succeed(scopeDeferred, void 0).pipe(
                    Effect.zipRight(Fiber.await(fiber)),
                    Effect.zipRight(Fiber.inheritAll(fiber))
                  )
                  : Deferred.succeed(scopeDeferred, void 0).pipe(
                    Effect.zipRight(
                      interruptors && HashSet.size(interruptors) > 0
                        ? Fiber.interruptAs(fiber, FiberId.combineAll(interruptors))
                        : Fiber.interrupt(fiber)
                    ),
                    Effect.zipRight(Fiber.inheritAll(fiber))
                  )
              )
            )
          }).pipe(Effect.zipRight(restore(Deferred.await(channelDeferred))))
        )
      )
    ))
  )
})

/** @internal */
const runScopedInterpret = <Env, InErr, InDone, OutErr, OutDone>(
  channelState: ChannelState.ChannelState<OutErr, Env>,
  exec: ChannelExecutor<never, unknown, OutErr, InErr, OutDone, InDone, Env>
): Effect.Effect<OutDone, OutErr, Env> => {
  const op = channelState as ChannelState.Primitive
  switch (op._tag) {
    case ChannelStateOpCodes.OP_FROM_EFFECT: {
      return pipe(
        op.effect as Effect.Effect<OutDone, OutErr, Env>,
        Effect.flatMap(() => runScopedInterpret(exec.run() as ChannelState.ChannelState<OutErr, Env>, exec))
      )
    }
    case ChannelStateOpCodes.OP_EMIT: {
      // Can't really happen because Out <:< Nothing. So just skip ahead.
      return runScopedInterpret<Env, InErr, InDone, OutErr, OutDone>(
        exec.run() as ChannelState.ChannelState<OutErr, Env>,
        exec
      )
    }
    case ChannelStateOpCodes.OP_DONE: {
      return Effect.suspend(() => exec.getDone())
    }
    case ChannelStateOpCodes.OP_READ: {
      return readUpstream(
        op,
        () => runScopedInterpret(exec.run() as ChannelState.ChannelState<OutErr, Env>, exec),
        Effect.failCause
      ) as Effect.Effect<OutDone, OutErr, Env>
    }
  }
}

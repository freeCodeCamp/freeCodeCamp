import * as RA from "../Array.js"
import * as Boolean from "../Boolean.js"
import type * as Cause from "../Cause.js"
import * as Chunk from "../Chunk.js"
import type * as Clock from "../Clock.js"
import type { ConfigProvider } from "../ConfigProvider.js"
import * as Context from "../Context.js"
import type { DefaultServices } from "../DefaultServices.js"
import type * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import * as Effectable from "../Effectable.js"
import type * as Either from "../Either.js"
import * as ExecutionStrategy from "../ExecutionStrategy.js"
import type * as Exit from "../Exit.js"
import type * as Fiber from "../Fiber.js"
import * as FiberId from "../FiberId.js"
import type * as FiberRef from "../FiberRef.js"
import * as FiberRefs from "../FiberRefs.js"
import * as FiberRefsPatch from "../FiberRefsPatch.js"
import * as FiberStatus from "../FiberStatus.js"
import type { LazyArg } from "../Function.js"
import { dual, identity, pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import * as HashMap from "../HashMap.js"
import * as HashSet from "../HashSet.js"
import * as Inspectable from "../Inspectable.js"
import type { Logger } from "../Logger.js"
import * as LogLevel from "../LogLevel.js"
import type * as MetricLabel from "../MetricLabel.js"
import * as Micro from "../Micro.js"
import * as MRef from "../MutableRef.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import * as Predicate from "../Predicate.js"
import type * as Random from "../Random.js"
import * as Ref from "../Ref.js"
import type { Entry, Request } from "../Request.js"
import type * as RequestBlock from "../RequestBlock.js"
import type * as RuntimeFlags from "../RuntimeFlags.js"
import * as RuntimeFlagsPatch from "../RuntimeFlagsPatch.js"
import { currentScheduler, type Scheduler } from "../Scheduler.js"
import type * as Scope from "../Scope.js"
import type * as Supervisor from "../Supervisor.js"
import type * as Tracer from "../Tracer.js"
import type { Concurrency, NoExcessProperties, NoInfer } from "../Types.js"
import { internalCall, yieldWrapGet } from "../Utils.js"
import * as RequestBlock_ from "./blockedRequests.js"
import * as internalCause from "./cause.js"
import * as clock from "./clock.js"
import { currentRequestMap } from "./completedRequestMap.js"
import * as concurrency from "./concurrency.js"
import { configProviderTag } from "./configProvider.js"
import * as internalEffect from "./core-effect.js"
import * as core from "./core.js"
import * as defaultServices from "./defaultServices.js"
import { consoleTag } from "./defaultServices/console.js"
import * as executionStrategy from "./executionStrategy.js"
import * as internalFiber from "./fiber.js"
import * as FiberMessage from "./fiberMessage.js"
import * as fiberRefs from "./fiberRefs.js"
import * as fiberScope from "./fiberScope.js"
import * as internalLogger from "./logger.js"
import * as metric from "./metric.js"
import * as metricBoundaries from "./metric/boundaries.js"
import * as metricLabel from "./metric/label.js"
import * as OpCodes from "./opCodes/effect.js"
import { randomTag } from "./random.js"
import { complete } from "./request.js"
import * as runtimeFlags_ from "./runtimeFlags.js"
import { OpSupervision } from "./runtimeFlags.js"
import * as supervisor from "./supervisor.js"
import * as SupervisorPatch from "./supervisor/patch.js"
import * as tracer from "./tracer.js"
import * as version from "./version.js"

/** @internal */
export const fiberStarted = metric.counter("effect_fiber_started", { incremental: true })
/** @internal */
export const fiberActive = metric.counter("effect_fiber_active")
/** @internal */
export const fiberSuccesses = metric.counter("effect_fiber_successes", { incremental: true })
/** @internal */
export const fiberFailures = metric.counter("effect_fiber_failures", { incremental: true })
/** @internal */
export const fiberLifetimes = metric.tagged(
  metric.histogram(
    "effect_fiber_lifetimes",
    metricBoundaries.exponential({
      start: 0.5,
      factor: 2,
      count: 35
    })
  ),
  "time_unit",
  "milliseconds"
)

/** @internal */
type EvaluationSignal =
  | EvaluationSignalContinue
  | EvaluationSignalDone
  | EvaluationSignalYieldNow

/** @internal */
const EvaluationSignalContinue = "Continue" as const

/** @internal */
type EvaluationSignalContinue = typeof EvaluationSignalContinue

/** @internal */
const EvaluationSignalDone = "Done" as const

/** @internal */
type EvaluationSignalDone = typeof EvaluationSignalDone

/** @internal */
const EvaluationSignalYieldNow = "Yield" as const

/** @internal */
type EvaluationSignalYieldNow = typeof EvaluationSignalYieldNow

const runtimeFiberVariance = {
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _A: (_: never) => _
}

const absurd = (_: never): never => {
  throw new Error(
    `BUG: FiberRuntime - ${
      Inspectable.toStringUnknown(_)
    } - please report an issue at https://github.com/Effect-TS/effect/issues`
  )
}

const YieldedOp = Symbol.for("effect/internal/fiberRuntime/YieldedOp")
type YieldedOp = typeof YieldedOp
const yieldedOpChannel: {
  currentOp: core.Primitive | null
} = globalValue("effect/internal/fiberRuntime/yieldedOpChannel", () => ({
  currentOp: null
}))

const contOpSuccess = {
  [OpCodes.OP_ON_SUCCESS]: (
    _: FiberRuntime<any, any>,
    cont: core.OnSuccess,
    value: unknown
  ) => {
    return internalCall(() => cont.effect_instruction_i1(value))
  },
  ["OnStep"]: (
    _: FiberRuntime<any, any>,
    _cont: core.OnStep,
    value: unknown
  ) => {
    return core.exitSucceed(core.exitSucceed(value))
  },
  [OpCodes.OP_ON_SUCCESS_AND_FAILURE]: (
    _: FiberRuntime<any, any>,
    cont: core.OnSuccessAndFailure,
    value: unknown
  ) => {
    return internalCall(() => cont.effect_instruction_i2(value))
  },
  [OpCodes.OP_REVERT_FLAGS]: (
    self: FiberRuntime<any, any>,
    cont: core.RevertFlags,
    value: unknown
  ) => {
    self.patchRuntimeFlags(self.currentRuntimeFlags, cont.patch)
    if (runtimeFlags_.interruptible(self.currentRuntimeFlags) && self.isInterrupted()) {
      return core.exitFailCause(self.getInterruptedCause())
    } else {
      return core.exitSucceed(value)
    }
  },
  [OpCodes.OP_WHILE]: (
    self: FiberRuntime<any, any>,
    cont: core.While,
    value: unknown
  ) => {
    internalCall(() => cont.effect_instruction_i2(value))
    if (internalCall(() => cont.effect_instruction_i0())) {
      self.pushStack(cont)
      return internalCall(() => cont.effect_instruction_i1())
    } else {
      return core.void
    }
  },
  [OpCodes.OP_ITERATOR]: (
    self: FiberRuntime<any, any>,
    cont: core.FromIterator,
    value: unknown
  ) => {
    while (true) {
      const state = internalCall(() => cont.effect_instruction_i0.next(value))
      if (state.done) {
        return core.exitSucceed(state.value)
      }
      const primitive = yieldWrapGet(state.value)
      if (!core.exitIsExit(primitive)) {
        self.pushStack(cont)
        return primitive
      } else if (primitive._tag === "Failure") {
        return primitive
      }
      value = primitive.value
    }
  }
}

const drainQueueWhileRunningTable = {
  [FiberMessage.OP_INTERRUPT_SIGNAL]: (
    self: FiberRuntime<any, any>,
    runtimeFlags: RuntimeFlags.RuntimeFlags,
    cur: Effect.Effect<any, any, any>,
    message: FiberMessage.FiberMessage & { _tag: FiberMessage.OP_INTERRUPT_SIGNAL }
  ) => {
    self.processNewInterruptSignal(message.cause)
    return runtimeFlags_.interruptible(runtimeFlags) ? core.exitFailCause(message.cause) : cur
  },
  [FiberMessage.OP_RESUME]: (
    _self: FiberRuntime<any, any>,
    _runtimeFlags: RuntimeFlags.RuntimeFlags,
    _cur: Effect.Effect<any, any, any>,
    _message: FiberMessage.FiberMessage
  ) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber")
  },
  [FiberMessage.OP_STATEFUL]: (
    self: FiberRuntime<any, any>,
    runtimeFlags: RuntimeFlags.RuntimeFlags,
    cur: Effect.Effect<any, any, any>,
    message: FiberMessage.FiberMessage & { _tag: FiberMessage.OP_STATEFUL }
  ) => {
    message.onFiber(self, FiberStatus.running(runtimeFlags))
    return cur
  },
  [FiberMessage.OP_YIELD_NOW]: (
    _self: FiberRuntime<any, any>,
    _runtimeFlags: RuntimeFlags.RuntimeFlags,
    cur: Effect.Effect<any, any, any>,
    _message: FiberMessage.FiberMessage & { _tag: FiberMessage.OP_YIELD_NOW }
  ) => {
    return core.flatMap(core.yieldNow(), () => cur)
  }
}

/**
 * Executes all requests, submitting requests to each data source in parallel.
 */
const runBlockedRequests = (self: RequestBlock.RequestBlock) =>
  core.forEachSequentialDiscard(
    RequestBlock_.flatten(self),
    (requestsByRequestResolver) =>
      forEachConcurrentDiscard(
        RequestBlock_.sequentialCollectionToChunk(requestsByRequestResolver),
        ([dataSource, sequential]) => {
          const map = new Map<Request<any, any>, Entry<any>>()
          const arr: Array<Array<Entry<any>>> = []
          for (const block of sequential) {
            arr.push(Chunk.toReadonlyArray(block) as any)
            for (const entry of block) {
              map.set(entry.request as Request<any, any>, entry)
            }
          }
          const flat = arr.flat()
          return core.fiberRefLocally(
            invokeWithInterrupt(dataSource.runAll(arr), flat, () =>
              flat.forEach((entry) => {
                entry.listeners.interrupted = true
              })),
            currentRequestMap,
            map
          )
        },
        false,
        false
      )
  )

/** @internal */
export interface Snapshot {
  refs: FiberRefs.FiberRefs
  flags: RuntimeFlags.RuntimeFlags
}

const _version = version.getCurrentVersion()

/** @internal */
export class FiberRuntime<in out A, in out E = never> extends Effectable.Class<A, E>
  implements Fiber.RuntimeFiber<A, E>
{
  readonly [internalFiber.FiberTypeId] = internalFiber.fiberVariance
  readonly [internalFiber.RuntimeFiberTypeId] = runtimeFiberVariance
  private _fiberRefs: FiberRefs.FiberRefs
  private _fiberId: FiberId.Runtime
  private _queue = new Array<FiberMessage.FiberMessage>()
  private _children: Set<FiberRuntime<any, any>> | null = null
  private _observers = new Array<(exit: Exit.Exit<A, E>) => void>()
  private _running = false
  private _stack: Array<core.Continuation> = []
  private _asyncInterruptor: ((effect: Effect.Effect<any, any, any>) => any) | null = null
  private _asyncBlockingOn: FiberId.FiberId | null = null
  private _exitValue: Exit.Exit<A, E> | null = null
  private _steps: Array<Snapshot> = []
  private _isYielding = false

  public currentRuntimeFlags: RuntimeFlags.RuntimeFlags
  public currentOpCount: number = 0
  public currentSupervisor!: Supervisor.Supervisor<any>
  public currentScheduler!: Scheduler
  public currentTracer!: Tracer.Tracer
  public currentSpan!: Tracer.AnySpan | undefined
  public currentContext!: Context.Context<never>
  public currentDefaultServices!: Context.Context<DefaultServices>

  constructor(
    fiberId: FiberId.Runtime,
    fiberRefs0: FiberRefs.FiberRefs,
    runtimeFlags0: RuntimeFlags.RuntimeFlags
  ) {
    super()
    this.currentRuntimeFlags = runtimeFlags0
    this._fiberId = fiberId
    this._fiberRefs = fiberRefs0
    if (runtimeFlags_.runtimeMetrics(runtimeFlags0)) {
      const tags = this.getFiberRef(core.currentMetricLabels)
      fiberStarted.unsafeUpdate(1, tags)
      fiberActive.unsafeUpdate(1, tags)
    }
    this.refreshRefCache()
  }

  commit(): Effect.Effect<A, E, never> {
    return internalFiber.join(this)
  }

  /**
   * The identity of the fiber.
   */
  id(): FiberId.Runtime {
    return this._fiberId
  }

  /**
   * Begins execution of the effect associated with this fiber on in the
   * background. This can be called to "kick off" execution of a fiber after
   * it has been created.
   */
  resume<A, E>(effect: Effect.Effect<A, E, any>): void {
    this.tell(FiberMessage.resume(effect))
  }

  /**
   * The status of the fiber.
   */
  get status(): Effect.Effect<FiberStatus.FiberStatus> {
    return this.ask((_, status) => status)
  }

  /**
   * Gets the fiber runtime flags.
   */
  get runtimeFlags(): Effect.Effect<RuntimeFlags.RuntimeFlags> {
    return this.ask((state, status) => {
      if (FiberStatus.isDone(status)) {
        return state.currentRuntimeFlags
      }
      return status.runtimeFlags
    })
  }

  /**
   * Returns the current `FiberScope` for the fiber.
   */
  scope(): fiberScope.FiberScope {
    return fiberScope.unsafeMake(this)
  }

  /**
   * Retrieves the immediate children of the fiber.
   */
  get children(): Effect.Effect<Array<Fiber.RuntimeFiber<any, any>>> {
    return this.ask((fiber) => Array.from(fiber.getChildren()))
  }

  /**
   * Gets the fiber's set of children.
   */
  getChildren(): Set<FiberRuntime<any, any>> {
    if (this._children === null) {
      this._children = new Set()
    }
    return this._children
  }

  /**
   * Retrieves the interrupted cause of the fiber, which will be `Cause.empty`
   * if the fiber has not been interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getInterruptedCause() {
    return this.getFiberRef(core.currentInterruptedCause)
  }

  /**
   * Retrieves the whole set of fiber refs.
   */
  fiberRefs(): Effect.Effect<FiberRefs.FiberRefs> {
    return this.ask((fiber) => fiber.getFiberRefs())
  }

  /**
   * Returns an effect that will contain information computed from the fiber
   * state and status while running on the fiber.
   *
   * This allows the outside world to interact safely with mutable fiber state
   * without locks or immutable data.
   */
  ask<Z>(
    f: (runtime: FiberRuntime<any, any>, status: FiberStatus.FiberStatus) => Z
  ): Effect.Effect<Z> {
    return core.suspend(() => {
      const deferred = core.deferredUnsafeMake<Z>(this._fiberId)
      this.tell(
        FiberMessage.stateful((fiber, status) => {
          core.deferredUnsafeDone(deferred, core.sync(() => f(fiber, status)))
        })
      )
      return core.deferredAwait(deferred)
    })
  }

  /**
   * Adds a message to be processed by the fiber on the fiber.
   */
  tell(message: FiberMessage.FiberMessage): void {
    this._queue.push(message)
    if (!this._running) {
      this._running = true
      this.drainQueueLaterOnExecutor()
    }
  }

  get await(): Effect.Effect<Exit.Exit<A, E>> {
    return core.async((resume) => {
      const cb = (exit: Exit.Exit<A, E>) => resume(core.succeed(exit))
      if (this._exitValue !== null) {
        cb(this._exitValue!)
        return
      }
      this.tell(
        FiberMessage.stateful((fiber, _) => {
          if (fiber._exitValue !== null) {
            cb(this._exitValue!)
          } else {
            fiber.addObserver(cb)
          }
        })
      )
      return core.sync(() =>
        this.tell(
          FiberMessage.stateful((fiber, _) => {
            fiber.removeObserver(cb)
          })
        )
      )
    }, this.id())
  }

  get inheritAll(): Effect.Effect<void> {
    return core.withFiberRuntime((parentFiber, parentStatus) => {
      const parentFiberId = parentFiber.id()
      const parentFiberRefs = parentFiber.getFiberRefs()
      const parentRuntimeFlags = parentStatus.runtimeFlags
      const childFiberRefs = this.getFiberRefs()
      const updatedFiberRefs = fiberRefs.joinAs(parentFiberRefs, parentFiberId, childFiberRefs)

      parentFiber.setFiberRefs(updatedFiberRefs)

      const updatedRuntimeFlags = parentFiber.getFiberRef(currentRuntimeFlags)

      const patch = pipe(
        runtimeFlags_.diff(parentRuntimeFlags, updatedRuntimeFlags),
        // Do not inherit WindDown or Interruption!
        RuntimeFlagsPatch.exclude(runtimeFlags_.Interruption),
        RuntimeFlagsPatch.exclude(runtimeFlags_.WindDown)
      )

      return core.updateRuntimeFlags(patch)
    })
  }

  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  get poll(): Effect.Effect<Option.Option<Exit.Exit<A, E>>> {
    return core.sync(() => Option.fromNullable(this._exitValue))
  }

  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll(): Exit.Exit<A, E> | null {
    return this._exitValue
  }

  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  interruptAsFork(fiberId: FiberId.FiberId): Effect.Effect<void> {
    return core.sync(() => this.tell(FiberMessage.interruptSignal(internalCause.interrupt(fiberId))))
  }

  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  unsafeInterruptAsFork(fiberId: FiberId.FiberId) {
    this.tell(FiberMessage.interruptSignal(internalCause.interrupt(fiberId)))
  }

  /**
   * Adds an observer to the list of observers.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addObserver(observer: (exit: Exit.Exit<A, E>) => void): void {
    if (this._exitValue !== null) {
      observer(this._exitValue!)
    } else {
      this._observers.push(observer)
    }
  }

  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeObserver(observer: (exit: Exit.Exit<A, E>) => void): void {
    this._observers = this._observers.filter((o) => o !== observer)
  }
  /**
   * Retrieves all fiber refs of the fiber.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRefs(): FiberRefs.FiberRefs {
    this.setFiberRef(currentRuntimeFlags, this.currentRuntimeFlags)
    return this._fiberRefs
  }

  /**
   * Deletes the specified fiber ref.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeDeleteFiberRef<X>(fiberRef: FiberRef.FiberRef<X>): void {
    this._fiberRefs = fiberRefs.delete_(this._fiberRefs, fiberRef)
  }

  /**
   * Retrieves the state of the fiber ref, or else its initial value.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRef<X>(fiberRef: FiberRef.FiberRef<X>): X {
    if (this._fiberRefs.locals.has(fiberRef)) {
      return this._fiberRefs.locals.get(fiberRef)![0][1] as X
    }
    return fiberRef.initial
  }

  /**
   * Sets the fiber ref to the specified value.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRef<X>(fiberRef: FiberRef.FiberRef<X>, value: X): void {
    this._fiberRefs = fiberRefs.updateAs(this._fiberRefs, {
      fiberId: this._fiberId,
      fiberRef,
      value
    })
    this.refreshRefCache()
  }

  refreshRefCache() {
    this.currentDefaultServices = this.getFiberRef(defaultServices.currentServices)
    this.currentTracer = this.currentDefaultServices.unsafeMap.get(tracer.tracerTag.key)
    this.currentSupervisor = this.getFiberRef(currentSupervisor)
    this.currentScheduler = this.getFiberRef(currentScheduler)
    this.currentContext = this.getFiberRef(core.currentContext)
    this.currentSpan = this.currentContext.unsafeMap.get(tracer.spanTag.key)
  }

  /**
   * Wholesale replaces all fiber refs of this fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRefs(fiberRefs: FiberRefs.FiberRefs): void {
    this._fiberRefs = fiberRefs
    this.refreshRefCache()
  }

  /**
   * Adds a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addChild(child: FiberRuntime<any, any>) {
    this.getChildren().add(child)
  }

  /**
   * Removes a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeChild(child: FiberRuntime<any, any>) {
    this.getChildren().delete(child)
  }

  /**
   * Transfers all children of this fiber that are currently running to the
   * specified fiber scope.
   *
   * **NOTE**: This method must be invoked by the fiber itself after it has
   * evaluated the effects but prior to exiting.
   */
  transferChildren(scope: fiberScope.FiberScope) {
    const children = this._children
    // Clear the children of the current fiber
    this._children = null
    if (children !== null && children.size > 0) {
      for (const child of children) {
        // If the child is still running, add it to the scope
        if (child._exitValue === null) {
          scope.add(this.currentRuntimeFlags, child)
        }
      }
    }
  }

  /**
   * On the current thread, executes all messages in the fiber's inbox. This
   * method may return before all work is done, in the event the fiber executes
   * an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueOnCurrentThread() {
    let recurse = true
    while (recurse) {
      let evaluationSignal: EvaluationSignal = EvaluationSignalContinue
      const prev = (globalThis as any)[internalFiber.currentFiberURI]
      ;(globalThis as any)[internalFiber.currentFiberURI] = this
      try {
        while (evaluationSignal === EvaluationSignalContinue) {
          evaluationSignal = this._queue.length === 0 ?
            EvaluationSignalDone :
            this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]!)
        }
      } finally {
        this._running = false
        ;(globalThis as any)[internalFiber.currentFiberURI] = prev
      }
      // Maybe someone added something to the queue between us checking, and us
      // giving up the drain. If so, we need to restart the draining, but only
      // if we beat everyone else to the restart:
      if (this._queue.length > 0 && !this._running) {
        this._running = true
        if (evaluationSignal === EvaluationSignalYieldNow) {
          this.drainQueueLaterOnExecutor()
          recurse = false
        } else {
          recurse = true
        }
      } else {
        recurse = false
      }
    }
  }

  /**
   * Schedules the execution of all messages in the fiber's inbox.
   *
   * This method will return immediately after the scheduling
   * operation is completed, but potentially before such messages have been
   * executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueLaterOnExecutor() {
    this.currentScheduler.scheduleTask(
      this.run,
      this.getFiberRef(core.currentSchedulingPriority),
      this
    )
  }

  /**
   * Drains the fiber's message queue while the fiber is actively running,
   * returning the next effect to execute, which may be the input effect if no
   * additional effect needs to be executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueWhileRunning(
    runtimeFlags: RuntimeFlags.RuntimeFlags,
    cur0: Effect.Effect<any, any, any>
  ) {
    let cur = cur0
    while (this._queue.length > 0) {
      const message = this._queue.splice(0, 1)[0]
      // @ts-expect-error
      cur = drainQueueWhileRunningTable[message._tag](this, runtimeFlags, cur, message)
    }
    return cur
  }

  /**
   * Determines if the fiber is interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  isInterrupted(): boolean {
    return !internalCause.isEmpty(this.getFiberRef(core.currentInterruptedCause))
  }

  /**
   * Adds an interruptor to the set of interruptors that are interrupting this
   * fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addInterruptedCause(cause: Cause.Cause<never>) {
    const oldSC = this.getFiberRef(core.currentInterruptedCause)
    this.setFiberRef(core.currentInterruptedCause, internalCause.sequential(oldSC, cause))
  }

  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(cause: Cause.Cause<never>): void {
    this.addInterruptedCause(cause)
    this.sendInterruptSignalToAllChildren()
  }

  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  sendInterruptSignalToAllChildren(): boolean {
    if (this._children === null || this._children.size === 0) {
      return false
    }
    let told = false
    for (const child of this._children) {
      child.tell(FiberMessage.interruptSignal(internalCause.interrupt(this.id())))
      told = true
    }
    return told
  }

  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const it = this._children!.values()
      this._children = null
      let isDone = false
      const body = () => {
        const next = it.next()
        if (!next.done) {
          return core.asVoid(next.value.await)
        } else {
          return core.sync(() => {
            isDone = true
          })
        }
      }
      return core.whileLoop({
        while: () => !isDone,
        body,
        step: () => {
          //
        }
      })
    }
    return null
  }

  reportExitValue(exit: Exit.Exit<A, E>) {
    if (runtimeFlags_.runtimeMetrics(this.currentRuntimeFlags)) {
      const tags = this.getFiberRef(core.currentMetricLabels)
      const startTimeMillis = this.id().startTimeMillis
      const endTimeMillis = Date.now()
      fiberLifetimes.unsafeUpdate(endTimeMillis - startTimeMillis, tags)
      fiberActive.unsafeUpdate(-1, tags)
      switch (exit._tag) {
        case OpCodes.OP_SUCCESS: {
          fiberSuccesses.unsafeUpdate(1, tags)
          break
        }
        case OpCodes.OP_FAILURE: {
          fiberFailures.unsafeUpdate(1, tags)
          break
        }
      }
    }
    if (exit._tag === "Failure") {
      const level = this.getFiberRef(core.currentUnhandledErrorLogLevel)
      if (!internalCause.isInterruptedOnly(exit.cause) && level._tag === "Some") {
        this.log("Fiber terminated with an unhandled error", exit.cause, level)
      }
    }
  }

  setExitValue(exit: Exit.Exit<A, E>) {
    this._exitValue = exit
    this.reportExitValue(exit)
    for (let i = this._observers.length - 1; i >= 0; i--) {
      this._observers[i](exit)
    }
    this._observers = []
  }

  getLoggers() {
    return this.getFiberRef(currentLoggers)
  }

  log(
    message: unknown,
    cause: Cause.Cause<any>,
    overrideLogLevel: Option.Option<LogLevel.LogLevel>
  ): void {
    const logLevel = Option.isSome(overrideLogLevel) ?
      overrideLogLevel.value :
      this.getFiberRef(core.currentLogLevel)
    const minimumLogLevel = this.getFiberRef(currentMinimumLogLevel)
    if (LogLevel.greaterThan(minimumLogLevel, logLevel)) {
      return
    }
    const spans = this.getFiberRef(core.currentLogSpan)
    const annotations = this.getFiberRef(core.currentLogAnnotations)
    const loggers = this.getLoggers()
    const contextMap = this.getFiberRefs()
    if (HashSet.size(loggers) > 0) {
      const clockService = Context.get(this.getFiberRef(defaultServices.currentServices), clock.clockTag)
      const date = new Date(clockService.unsafeCurrentTimeMillis())
      Inspectable.withRedactableContext(contextMap, () => {
        for (const logger of loggers) {
          logger.log({
            fiberId: this.id(),
            logLevel,
            message,
            cause,
            context: contextMap,
            spans,
            annotations,
            date
          })
        }
      })
    }
  }

  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(message: FiberMessage.FiberMessage): EvaluationSignal {
    switch (message._tag) {
      case FiberMessage.OP_YIELD_NOW: {
        return EvaluationSignalYieldNow
      }
      case FiberMessage.OP_INTERRUPT_SIGNAL: {
        this.processNewInterruptSignal(message.cause)
        if (this._asyncInterruptor !== null) {
          this._asyncInterruptor(core.exitFailCause(message.cause))
          this._asyncInterruptor = null
        }
        return EvaluationSignalContinue
      }
      case FiberMessage.OP_RESUME: {
        this._asyncInterruptor = null
        this._asyncBlockingOn = null
        this.evaluateEffect(message.effect)
        return EvaluationSignalContinue
      }
      case FiberMessage.OP_STATEFUL: {
        message.onFiber(
          this,
          this._exitValue !== null ?
            FiberStatus.done :
            FiberStatus.suspended(this.currentRuntimeFlags, this._asyncBlockingOn!)
        )
        return EvaluationSignalContinue
      }
      default: {
        return absurd(message)
      }
    }
  }

  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(effect0: Effect.Effect<any, any, any>) {
    this.currentSupervisor.onResume(this)
    try {
      let effect: Effect.Effect<any, any, any> | null =
        runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted() ?
          core.exitFailCause(this.getInterruptedCause()) :
          effect0
      while (effect !== null) {
        const eff: Effect.Effect<any, any, any> = effect
        const exit = this.runLoop(eff)
        if (exit === YieldedOp) {
          const op = yieldedOpChannel.currentOp!
          yieldedOpChannel.currentOp = null
          if (op._op === OpCodes.OP_YIELD) {
            if (runtimeFlags_.cooperativeYielding(this.currentRuntimeFlags)) {
              this.tell(FiberMessage.yieldNow())
              this.tell(FiberMessage.resume(core.exitVoid))
              effect = null
            } else {
              effect = core.exitVoid
            }
          } else if (op._op === OpCodes.OP_ASYNC) {
            // Terminate this evaluation, async resumption will continue evaluation:
            effect = null
          }
        } else {
          this.currentRuntimeFlags = pipe(this.currentRuntimeFlags, runtimeFlags_.enable(runtimeFlags_.WindDown))
          const interruption = this.interruptAllChildren()
          if (interruption !== null) {
            effect = core.flatMap(interruption, () => exit)
          } else {
            if (this._queue.length === 0) {
              // No more messages to process, so we will allow the fiber to end life:
              this.setExitValue(exit)
            } else {
              // There are messages, possibly added by the final op executed by
              // the fiber. To be safe, we should execute those now before we
              // allow the fiber to end life:
              this.tell(FiberMessage.resume(exit))
            }
            effect = null
          }
        }
      }
    } finally {
      this.currentSupervisor.onSuspend(this)
    }
  }

  /**
   * Begins execution of the effect associated with this fiber on the current
   * thread. This can be called to "kick off" execution of a fiber after it has
   * been created, in hopes that the effect can be executed synchronously.
   *
   * This is not the normal way of starting a fiber, but it is useful when the
   * express goal of executing the fiber is to synchronously produce its exit.
   */
  start<R>(effect: Effect.Effect<A, E, R>): void {
    if (!this._running) {
      this._running = true
      const prev = (globalThis as any)[internalFiber.currentFiberURI]
      ;(globalThis as any)[internalFiber.currentFiberURI] = this
      try {
        this.evaluateEffect(effect)
      } finally {
        this._running = false
        ;(globalThis as any)[internalFiber.currentFiberURI] = prev
        // Because we're special casing `start`, we have to be responsible
        // for spinning up the fiber if there were new messages added to
        // the queue between the completion of the effect and the transition
        // to the not running state.
        if (this._queue.length > 0) {
          this.drainQueueLaterOnExecutor()
        }
      }
    } else {
      this.tell(FiberMessage.resume(effect))
    }
  }

  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork<R>(effect: Effect.Effect<A, E, R>): void {
    this.tell(FiberMessage.resume(effect))
  }

  /**
   * Takes the current runtime flags, patches them to return the new runtime
   * flags, and then makes any changes necessary to fiber state based on the
   * specified patch.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  patchRuntimeFlags(oldRuntimeFlags: RuntimeFlags.RuntimeFlags, patch: RuntimeFlagsPatch.RuntimeFlagsPatch) {
    const newRuntimeFlags = runtimeFlags_.patch(oldRuntimeFlags, patch)
    ;(globalThis as any)[internalFiber.currentFiberURI] = this
    this.currentRuntimeFlags = newRuntimeFlags
    return newRuntimeFlags
  }

  /**
   * Initiates an asynchronous operation, by building a callback that will
   * resume execution, and then feeding that callback to the registration
   * function, handling error cases and repeated resumptions appropriately.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  initiateAsync(
    runtimeFlags: RuntimeFlags.RuntimeFlags,
    asyncRegister: (resume: (effect: Effect.Effect<any, any, any>) => void) => void
  ) {
    let alreadyCalled = false
    const callback = (effect: Effect.Effect<any, any, any>) => {
      if (!alreadyCalled) {
        alreadyCalled = true
        this.tell(FiberMessage.resume(effect))
      }
    }
    if (runtimeFlags_.interruptible(runtimeFlags)) {
      this._asyncInterruptor = callback
    }
    try {
      asyncRegister(callback)
    } catch (e) {
      callback(core.failCause(internalCause.die(e)))
    }
  }

  pushStack(cont: core.Continuation) {
    this._stack.push(cont)
    if (cont._op === "OnStep") {
      this._steps.push({ refs: this.getFiberRefs(), flags: this.currentRuntimeFlags })
    }
  }

  popStack() {
    const item = this._stack.pop()
    if (item) {
      if (item._op === "OnStep") {
        this._steps.pop()
      }
      return item
    }
    return
  }

  getNextSuccessCont() {
    let frame = this.popStack()
    while (frame) {
      if (frame._op !== OpCodes.OP_ON_FAILURE) {
        return frame
      }
      frame = this.popStack()
    }
  }

  getNextFailCont() {
    let frame = this.popStack()
    while (frame) {
      if (frame._op !== OpCodes.OP_ON_SUCCESS && frame._op !== OpCodes.OP_WHILE && frame._op !== OpCodes.OP_ITERATOR) {
        return frame
      }
      frame = this.popStack()
    }
  }

  [OpCodes.OP_TAG](op: core.Primitive & { _op: OpCodes.OP_SYNC }) {
    return core.sync(() => Context.unsafeGet(this.currentContext, op as unknown as Context.Tag<any, any>))
  }

  ["Left"](op: core.Primitive & { _op: "Left" }) {
    return core.fail(op.left)
  }

  ["None"](_: core.Primitive & { _op: "None" }) {
    return core.fail(new core.NoSuchElementException())
  }

  ["Right"](op: core.Primitive & { _op: "Right" }) {
    return core.exitSucceed(op.right)
  }

  ["Some"](op: core.Primitive & { _op: "Some" }) {
    return core.exitSucceed(op.value)
  }

  ["Micro"](op: Micro.Micro<any, any, never> & { _op: "Micro" }) {
    return core.unsafeAsync<any, any>((microResume) => {
      let resume = microResume
      const fiber = Micro.runFork(Micro.provideContext(op, this.currentContext))
      fiber.addObserver((exit) => {
        if (exit._tag === "Success") {
          return resume(core.exitSucceed(exit.value))
        }
        switch (exit.cause._tag) {
          case "Interrupt": {
            return resume(core.exitFailCause(internalCause.interrupt(FiberId.none)))
          }
          case "Fail": {
            return resume(core.fail(exit.cause.error))
          }
          case "Die": {
            return resume(core.die(exit.cause.defect))
          }
        }
      })
      return core.unsafeAsync<void>((abortResume) => {
        resume = (_: any) => {
          abortResume(core.void)
        }
        fiber.unsafeInterrupt()
      })
    })
  }

  [OpCodes.OP_SYNC](op: core.Primitive & { _op: OpCodes.OP_SYNC }) {
    const value = internalCall(() => op.effect_instruction_i0())
    const cont = this.getNextSuccessCont()
    if (cont !== undefined) {
      if (!(cont._op in contOpSuccess)) {
        // @ts-expect-error
        absurd(cont)
      }
      // @ts-expect-error
      return contOpSuccess[cont._op](this, cont, value)
    } else {
      yieldedOpChannel.currentOp = core.exitSucceed(value) as any
      return YieldedOp
    }
  }

  [OpCodes.OP_SUCCESS](op: core.Primitive & { _op: OpCodes.OP_SUCCESS }) {
    const oldCur = op
    const cont = this.getNextSuccessCont()
    if (cont !== undefined) {
      if (!(cont._op in contOpSuccess)) {
        // @ts-expect-error
        absurd(cont)
      }
      // @ts-expect-error
      return contOpSuccess[cont._op](this, cont, oldCur.effect_instruction_i0)
    } else {
      yieldedOpChannel.currentOp = oldCur
      return YieldedOp
    }
  }

  [OpCodes.OP_FAILURE](op: core.Primitive & { _op: OpCodes.OP_FAILURE }) {
    const cause = op.effect_instruction_i0
    const cont = this.getNextFailCont()
    if (cont !== undefined) {
      switch (cont._op) {
        case OpCodes.OP_ON_FAILURE:
        case OpCodes.OP_ON_SUCCESS_AND_FAILURE: {
          if (!(runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted())) {
            return internalCall(() => cont.effect_instruction_i1(cause))
          } else {
            return core.exitFailCause(internalCause.stripFailures(cause))
          }
        }
        case "OnStep": {
          if (!(runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted())) {
            return core.exitSucceed(core.exitFailCause(cause))
          } else {
            return core.exitFailCause(internalCause.stripFailures(cause))
          }
        }
        case OpCodes.OP_REVERT_FLAGS: {
          this.patchRuntimeFlags(this.currentRuntimeFlags, cont.patch)
          if (runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted()) {
            return core.exitFailCause(internalCause.sequential(cause, this.getInterruptedCause()))
          } else {
            return core.exitFailCause(cause)
          }
        }
        default: {
          absurd(cont)
        }
      }
    } else {
      yieldedOpChannel.currentOp = core.exitFailCause(cause) as any
      return YieldedOp
    }
  }

  [OpCodes.OP_WITH_RUNTIME](op: core.Primitive & { _op: OpCodes.OP_WITH_RUNTIME }) {
    return internalCall(() =>
      op.effect_instruction_i0(
        this as FiberRuntime<unknown, unknown>,
        FiberStatus.running(this.currentRuntimeFlags) as FiberStatus.Running
      )
    )
  }

  ["Blocked"](op: core.Primitive & { _op: "Blocked" }) {
    const refs = this.getFiberRefs()
    const flags = this.currentRuntimeFlags
    if (this._steps.length > 0) {
      const frames: Array<core.Continuation> = []
      const snap = this._steps[this._steps.length - 1]
      let frame = this.popStack()
      while (frame && frame._op !== "OnStep") {
        frames.push(frame)
        frame = this.popStack()
      }
      this.setFiberRefs(snap.refs)
      this.currentRuntimeFlags = snap.flags
      const patchRefs = FiberRefsPatch.diff(snap.refs, refs)
      const patchFlags = runtimeFlags_.diff(snap.flags, flags)
      return core.exitSucceed(core.blocked(
        op.effect_instruction_i0,
        core.withFiberRuntime<unknown, unknown>((newFiber) => {
          while (frames.length > 0) {
            newFiber.pushStack(frames.pop()!)
          }
          newFiber.setFiberRefs(
            FiberRefsPatch.patch(newFiber.id(), newFiber.getFiberRefs())(patchRefs)
          )
          newFiber.currentRuntimeFlags = runtimeFlags_.patch(patchFlags)(newFiber.currentRuntimeFlags)
          return op.effect_instruction_i1
        })
      ))
    }
    return core.uninterruptibleMask((restore) =>
      core.flatMap(
        forkDaemon(core.runRequestBlock(op.effect_instruction_i0)),
        () => restore(op.effect_instruction_i1)
      )
    )
  }

  ["RunBlocked"](op: core.Primitive & { _op: "RunBlocked" }) {
    return runBlockedRequests(op.effect_instruction_i0)
  }

  [OpCodes.OP_UPDATE_RUNTIME_FLAGS](op: core.Primitive & { _op: OpCodes.OP_UPDATE_RUNTIME_FLAGS }) {
    const updateFlags = op.effect_instruction_i0
    const oldRuntimeFlags = this.currentRuntimeFlags
    const newRuntimeFlags = runtimeFlags_.patch(oldRuntimeFlags, updateFlags)
    // One more chance to short circuit: if we're immediately going
    // to interrupt. Interruption will cause immediate reversion of
    // the flag, so as long as we "peek ahead", there's no need to
    // set them to begin with.
    if (runtimeFlags_.interruptible(newRuntimeFlags) && this.isInterrupted()) {
      return core.exitFailCause(this.getInterruptedCause())
    } else {
      // Impossible to short circuit, so record the changes
      this.patchRuntimeFlags(this.currentRuntimeFlags, updateFlags)
      if (op.effect_instruction_i1) {
        // Since we updated the flags, we need to revert them
        const revertFlags = runtimeFlags_.diff(newRuntimeFlags, oldRuntimeFlags)
        this.pushStack(new core.RevertFlags(revertFlags, op))
        return internalCall(() => op.effect_instruction_i1!(oldRuntimeFlags))
      } else {
        return core.exitVoid
      }
    }
  }

  [OpCodes.OP_ON_SUCCESS](op: core.Primitive & { _op: OpCodes.OP_ON_SUCCESS }) {
    this.pushStack(op)
    return op.effect_instruction_i0
  }

  ["OnStep"](op: core.Primitive & { _op: "OnStep" }) {
    this.pushStack(op)
    return op.effect_instruction_i0
  }

  [OpCodes.OP_ON_FAILURE](op: core.Primitive & { _op: OpCodes.OP_ON_FAILURE }) {
    this.pushStack(op)
    return op.effect_instruction_i0
  }

  [OpCodes.OP_ON_SUCCESS_AND_FAILURE](op: core.Primitive & { _op: OpCodes.OP_ON_SUCCESS_AND_FAILURE }) {
    this.pushStack(op)
    return op.effect_instruction_i0
  }

  [OpCodes.OP_ASYNC](op: core.Primitive & { _op: OpCodes.OP_ASYNC }) {
    this._asyncBlockingOn = op.effect_instruction_i1
    this.initiateAsync(this.currentRuntimeFlags, op.effect_instruction_i0)
    yieldedOpChannel.currentOp = op
    return YieldedOp
  }

  [OpCodes.OP_YIELD](op: core.Primitive & { op: OpCodes.OP_YIELD }) {
    this._isYielding = false
    yieldedOpChannel.currentOp = op
    return YieldedOp
  }

  [OpCodes.OP_WHILE](op: core.Primitive & { _op: OpCodes.OP_WHILE }) {
    const check = op.effect_instruction_i0
    const body = op.effect_instruction_i1
    if (check()) {
      this.pushStack(op)
      return body()
    } else {
      return core.exitVoid
    }
  }

  [OpCodes.OP_ITERATOR](op: core.Primitive & { _op: OpCodes.OP_ITERATOR }) {
    return contOpSuccess[OpCodes.OP_ITERATOR](this, op, undefined)
  }

  [OpCodes.OP_COMMIT](op: core.Primitive & { _op: OpCodes.OP_COMMIT }) {
    return internalCall(() => op.commit())
  }

  /**
   * The main run-loop for evaluating effects.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  runLoop(effect0: Effect.Effect<any, any, any>): Exit.Exit<any, any> | YieldedOp {
    let cur: Effect.Effect<any, any, any> | YieldedOp = effect0
    this.currentOpCount = 0

    while (true) {
      if ((this.currentRuntimeFlags & OpSupervision) !== 0) {
        this.currentSupervisor.onEffect(this, cur)
      }
      if (this._queue.length > 0) {
        cur = this.drainQueueWhileRunning(this.currentRuntimeFlags, cur)
      }
      if (!this._isYielding) {
        this.currentOpCount += 1
        const shouldYield = this.currentScheduler.shouldYield(this)
        if (shouldYield !== false) {
          this._isYielding = true
          this.currentOpCount = 0
          const oldCur = cur
          cur = core.flatMap(core.yieldNow({ priority: shouldYield }), () => oldCur)
        }
      }
      try {
        // @ts-expect-error
        cur = this.currentTracer.context(
          () => {
            if (_version !== (cur as core.Primitive)[core.EffectTypeId]._V) {
              const level = this.getFiberRef(core.currentVersionMismatchErrorLogLevel)
              if (level._tag === "Some") {
                const effectVersion = (cur as core.Primitive)[core.EffectTypeId]._V
                this.log(
                  `Executing an Effect versioned ${effectVersion} with a Runtime of version ${version.getCurrentVersion()}, you may want to dedupe the effect dependencies, you can use the language service plugin to detect this at compile time: https://github.com/Effect-TS/language-service`,
                  internalCause.empty,
                  level
                )
              }
            }
            // @ts-expect-error
            return this[(cur as core.Primitive)._op](cur as core.Primitive)
          },
          this
        )

        if (cur === YieldedOp) {
          const op = yieldedOpChannel.currentOp!
          if (
            op._op === OpCodes.OP_YIELD ||
            op._op === OpCodes.OP_ASYNC
          ) {
            return YieldedOp
          }

          yieldedOpChannel.currentOp = null
          return (
              op._op === OpCodes.OP_SUCCESS ||
              op._op === OpCodes.OP_FAILURE
            ) ?
            op as unknown as Exit.Exit<A, E> :
            core.exitFailCause(internalCause.die(op))
        }
      } catch (e) {
        if (cur !== YieldedOp && !Predicate.hasProperty(cur, "_op") || !((cur as core.Primitive)._op in this)) {
          cur = core.dieMessage(`Not a valid effect: ${Inspectable.toStringUnknown(cur)}`)
        } else if (core.isInterruptedException(e)) {
          cur = core.exitFailCause(
            internalCause.sequential(internalCause.die(e), internalCause.interrupt(FiberId.none))
          )
        } else {
          cur = core.die(e)
        }
      }
    }
  }

  run = () => {
    this.drainQueueOnCurrentThread()
  }
}

// circular with Logger

/** @internal */
export const currentMinimumLogLevel: FiberRef.FiberRef<LogLevel.LogLevel> = globalValue(
  "effect/FiberRef/currentMinimumLogLevel",
  () => core.fiberRefUnsafeMake<LogLevel.LogLevel>(LogLevel.fromLiteral("Info"))
)

/** @internal */
export const loggerWithConsoleLog = <M, O>(self: Logger<M, O>): Logger<M, void> =>
  internalLogger.makeLogger((opts) => {
    const services = FiberRefs.getOrDefault(opts.context, defaultServices.currentServices)
    Context.get(services, consoleTag).unsafe.log(self.log(opts))
  })

/** @internal */
export const loggerWithLeveledLog = <M, O>(self: Logger<M, O>): Logger<M, void> =>
  internalLogger.makeLogger((opts) => {
    const services = FiberRefs.getOrDefault(opts.context, defaultServices.currentServices)
    const unsafeLogger = Context.get(services, consoleTag).unsafe
    switch (opts.logLevel._tag) {
      case "Debug":
        return unsafeLogger.debug(self.log(opts))
      case "Info":
        return unsafeLogger.info(self.log(opts))
      case "Trace":
        return unsafeLogger.trace(self.log(opts))
      case "Warning":
        return unsafeLogger.warn(self.log(opts))
      case "Error":
      case "Fatal":
        return unsafeLogger.error(self.log(opts))
      default:
        return unsafeLogger.log(self.log(opts))
    }
  })

/** @internal */
export const loggerWithConsoleError = <M, O>(self: Logger<M, O>): Logger<M, void> =>
  internalLogger.makeLogger((opts) => {
    const services = FiberRefs.getOrDefault(opts.context, defaultServices.currentServices)
    Context.get(services, consoleTag).unsafe.error(self.log(opts))
  })

/** @internal */
export const defaultLogger: Logger<unknown, void> = globalValue(
  Symbol.for("effect/Logger/defaultLogger"),
  () => loggerWithConsoleLog(internalLogger.stringLogger)
)

/** @internal */
export const jsonLogger: Logger<unknown, void> = globalValue(
  Symbol.for("effect/Logger/jsonLogger"),
  () => loggerWithConsoleLog(internalLogger.jsonLogger)
)

/** @internal */
export const logFmtLogger: Logger<unknown, void> = globalValue(
  Symbol.for("effect/Logger/logFmtLogger"),
  () => loggerWithConsoleLog(internalLogger.logfmtLogger)
)

/** @internal */
export const prettyLogger: Logger<unknown, void> = globalValue(
  Symbol.for("effect/Logger/prettyLogger"),
  () => internalLogger.prettyLoggerDefault
)

/** @internal */
export const structuredLogger: Logger<unknown, void> = globalValue(
  Symbol.for("effect/Logger/structuredLogger"),
  () => loggerWithConsoleLog(internalLogger.structuredLogger)
)

/** @internal */
export const tracerLogger = globalValue(
  Symbol.for("effect/Logger/tracerLogger"),
  () =>
    internalLogger.makeLogger<unknown, void>(({
      annotations,
      cause,
      context,
      fiberId,
      logLevel,
      message
    }) => {
      const span = internalEffect.filterDisablePropagation(Context.getOption(
        fiberRefs.getOrDefault(context, core.currentContext),
        tracer.spanTag
      ))

      if (span._tag === "None" || span.value._tag === "ExternalSpan") {
        return
      }

      const clockService = Context.unsafeGet(
        fiberRefs.getOrDefault(context, defaultServices.currentServices),
        clock.clockTag
      )

      const attributes: Record<string, unknown> = {}
      for (const [key, value] of annotations) {
        attributes[key] = value
      }
      attributes["effect.fiberId"] = FiberId.threadName(fiberId)
      attributes["effect.logLevel"] = logLevel.label

      if (cause !== null && cause._tag !== "Empty") {
        attributes["effect.cause"] = internalCause.pretty(cause, { renderErrorCause: true })
      }

      span.value.event(
        Inspectable.toStringUnknown(Array.isArray(message) && message.length === 1 ? message[0] : message),
        clockService.unsafeCurrentTimeNanos(),
        attributes
      )
    })
)

/** @internal */
export const loggerWithSpanAnnotations = <Message, Output>(self: Logger<Message, Output>): Logger<Message, Output> =>
  internalLogger.mapInputOptions(self, (options: Logger.Options<Message>) => {
    const span = Option.flatMap(fiberRefs.get(options.context, core.currentContext), Context.getOption(tracer.spanTag))
    if (span._tag === "None") {
      return options
    }
    return {
      ...options,
      annotations: pipe(
        options.annotations,
        HashMap.set("effect.traceId", span.value.traceId as unknown),
        HashMap.set("effect.spanId", span.value.spanId as unknown),
        span.value._tag === "Span" ? HashMap.set("effect.spanName", span.value.name as unknown) : identity
      )
    }
  })

/** @internal */
export const currentLoggers: FiberRef.FiberRef<
  HashSet.HashSet<Logger<unknown, any>>
> = globalValue(
  Symbol.for("effect/FiberRef/currentLoggers"),
  () => core.fiberRefUnsafeMakeHashSet(HashSet.make(defaultLogger, tracerLogger))
)

/** @internal */
export const batchedLogger = dual<
  <Output, R>(
    window: Duration.DurationInput,
    f: (messages: Array<NoInfer<Output>>) => Effect.Effect<void, never, R>
  ) => <Message>(
    self: Logger<Message, Output>
  ) => Effect.Effect<Logger<Message, void>, never, Scope.Scope | R>,
  <Message, Output, R>(
    self: Logger<Message, Output>,
    window: Duration.DurationInput,
    f: (messages: Array<NoInfer<Output>>) => Effect.Effect<void, never, R>
  ) => Effect.Effect<Logger<Message, void>, never, Scope.Scope | R>
>(3, <Message, Output, R>(
  self: Logger<Message, Output>,
  window: Duration.DurationInput,
  f: (messages: Array<NoInfer<Output>>) => Effect.Effect<void, never, R>
): Effect.Effect<Logger<Message, void>, never, Scope.Scope | R> =>
  core.flatMap(scope, (scope) => {
    let buffer: Array<Output> = []
    const flush = core.suspend(() => {
      if (buffer.length === 0) {
        return core.void
      }
      const arr = buffer
      buffer = []
      return f(arr)
    })

    return core.uninterruptibleMask((restore) =>
      pipe(
        internalEffect.sleep(window),
        core.zipRight(flush),
        internalEffect.forever,
        restore,
        forkDaemon,
        core.flatMap((fiber) => core.scopeAddFinalizer(scope, core.interruptFiber(fiber))),
        core.zipRight(addFinalizer(() => flush)),
        core.as(
          internalLogger.makeLogger((options) => {
            buffer.push(self.log(options))
          })
        )
      )
    )
  }))

export const annotateLogsScoped: {
  (key: string, value: unknown): Effect.Effect<void, never, Scope.Scope>
  (values: Record<string, unknown>): Effect.Effect<void, never, Scope.Scope>
} = function() {
  if (typeof arguments[0] === "string") {
    return fiberRefLocallyScopedWith(
      core.currentLogAnnotations,
      HashMap.set(arguments[0], arguments[1])
    )
  }
  const entries = Object.entries(arguments[0])
  return fiberRefLocallyScopedWith(
    core.currentLogAnnotations,
    HashMap.mutate((annotations) => {
      for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i]
        HashMap.set(annotations, key, value)
      }
      return annotations
    })
  )
}

/** @internal */
export const whenLogLevel = dual<
  (
    level: LogLevel.LogLevel | LogLevel.Literal
  ) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E, R>,
  <A, E, R>(
    effect: Effect.Effect<A, E, R>,
    level: LogLevel.LogLevel | LogLevel.Literal
  ) => Effect.Effect<Option.Option<A>, E, R>
>(2, (effect, level) => {
  const requiredLogLevel = typeof level === "string" ? LogLevel.fromLiteral(level) : level

  return core.withFiberRuntime((fiberState) => {
    const minimumLogLevel = fiberState.getFiberRef(currentMinimumLogLevel)

    // Imitate the behaviour of `FiberRuntime.log`
    if (LogLevel.greaterThan(minimumLogLevel, requiredLogLevel)) {
      return core.succeed(Option.none())
    }

    return core.map(effect, Option.some)
  })
})

// circular with Effect

/* @internal */
export const acquireRelease: {
  <A, X, R2>(
    release: (a: A, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<X, never, R2>
  ): <E, R>(acquire: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R2 | R | Scope.Scope>
  <A, E, R, X, R2>(
    acquire: Effect.Effect<A, E, R>,
    release: (a: A, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<X, never, R2>
  ): Effect.Effect<A, E, R2 | R | Scope.Scope>
} = dual((args) => core.isEffect(args[0]), (acquire, release) =>
  core.uninterruptible(
    core.tap(acquire, (a) => addFinalizer((exit) => release(a, exit)))
  ))

/* @internal */
export const acquireReleaseInterruptible: {
  <X, R2>(
    release: (exit: Exit.Exit<unknown, unknown>) => Effect.Effect<X, never, R2>
  ): <A, E, R>(acquire: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Scope.Scope | R2 | R>
  <A, E, R, X, R2>(
    acquire: Effect.Effect<A, E, R>,
    release: (exit: Exit.Exit<unknown, unknown>) => Effect.Effect<X, never, R2>
  ): Effect.Effect<A, E, Scope.Scope | R2 | R>
} = dual((args) => core.isEffect(args[0]), (acquire, release) =>
  ensuring(
    acquire,
    addFinalizer((exit) => release(exit))
  ))

/* @internal */
export const addFinalizer = <X, R>(
  finalizer: (exit: Exit.Exit<unknown, unknown>) => Effect.Effect<X, never, R>
): Effect.Effect<void, never, R | Scope.Scope> =>
  core.withFiberRuntime(
    (runtime) => {
      const acquireRefs = runtime.getFiberRefs()
      const acquireFlags = runtimeFlags_.disable(runtime.currentRuntimeFlags, runtimeFlags_.Interruption)
      return core.flatMap(scope, (scope) =>
        core.scopeAddFinalizerExit(scope, (exit) =>
          core.withFiberRuntime((runtimeFinalizer) => {
            const preRefs = runtimeFinalizer.getFiberRefs()
            const preFlags = runtimeFinalizer.currentRuntimeFlags
            const patchRefs = FiberRefsPatch.diff(preRefs, acquireRefs)
            const patchFlags = runtimeFlags_.diff(preFlags, acquireFlags)
            const inverseRefs = FiberRefsPatch.diff(acquireRefs, preRefs)
            runtimeFinalizer.setFiberRefs(
              FiberRefsPatch.patch(patchRefs, runtimeFinalizer.id(), acquireRefs)
            )

            return ensuring(
              core.withRuntimeFlags(finalizer(exit) as Effect.Effect<X>, patchFlags),
              core.sync(() => {
                runtimeFinalizer.setFiberRefs(
                  FiberRefsPatch.patch(inverseRefs, runtimeFinalizer.id(), runtimeFinalizer.getFiberRefs())
                )
              })
            )
          })))
    }
  )

/* @internal */
export const daemonChildren = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> => {
  const forkScope = core.fiberRefLocally(core.currentForkScopeOverride, Option.some(fiberScope.globalScope))
  return forkScope(self)
}

/** @internal */
const _existsParFound = Symbol.for("effect/Effect/existsPar/found")

/* @internal */
export const exists: {
  <A, E, R>(predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }): (elements: Iterable<A>) => Effect.Effect<boolean, E, R>
  <A, E, R>(elements: Iterable<A>, predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }): Effect.Effect<boolean, E, R>
} = dual(
  (args) => Predicate.isIterable(args[0]) && !core.isEffect(args[0]),
  <A, E, R>(elements: Iterable<A>, predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
  }) =>
    concurrency.matchSimple(
      options?.concurrency,
      () => core.suspend(() => existsLoop(elements[Symbol.iterator](), 0, predicate)),
      () =>
        core.matchEffect(
          forEach(
            elements,
            (a, i) => core.if_(predicate(a, i), { onTrue: () => core.fail(_existsParFound), onFalse: () => core.void }),
            options
          ),
          {
            onFailure: (e) => e === _existsParFound ? core.succeed(true) : core.fail(e),
            onSuccess: () => core.succeed(false)
          }
        )
    )
)

const existsLoop = <A, E, R>(
  iterator: Iterator<A>,
  index: number,
  f: (a: A, i: number) => Effect.Effect<boolean, E, R>
): Effect.Effect<boolean, E, R> => {
  const next = iterator.next()
  if (next.done) {
    return core.succeed(false)
  }
  return core.flatMap(
    f(next.value, index),
    (b) => b ? core.succeed(b) : existsLoop(iterator, index + 1, f)
  )
}

/* @internal */
export const filter = dual<
  <A, E, R>(
    predicate: (a: NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly negate?: boolean | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => (elements: Iterable<A>) => Effect.Effect<Array<A>, E, R>,
  <A, E, R>(elements: Iterable<A>, predicate: (a: NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly negate?: boolean | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }) => Effect.Effect<Array<A>, E, R>
>(
  (args) => Predicate.isIterable(args[0]) && !core.isEffect(args[0]),
  <A, E, R>(elements: Iterable<A>, predicate: (a: NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly negate?: boolean | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }) => {
    const predicate_ = options?.negate ? (a: A, i: number) => core.map(predicate(a, i), Boolean.not) : predicate
    return concurrency.matchSimple(
      options?.concurrency,
      () =>
        core.suspend(() =>
          RA.fromIterable(elements).reduceRight(
            (effect, a, i) =>
              core.zipWith(
                effect,
                core.suspend(() => predicate_(a, i)),
                (list, b) => b ? [a, ...list] : list
              ),
            core.sync(() => new Array<A>()) as Effect.Effect<Array<A>, E, R>
          )
        ),
      () =>
        core.map(
          forEach(
            elements,
            (a, i) => core.map(predicate_(a, i), (b) => (b ? Option.some(a) : Option.none())),
            options
          ),
          RA.getSomes
        )
    )
  }
)

// === all

const allResolveInput = (
  input: Iterable<Effect.Effect<any, any, any>> | Record<string, Effect.Effect<any, any, any>>
): [Iterable<Effect.Effect<any, any, any>>, Option.Option<(as: ReadonlyArray<any>) => any>] => {
  if (Array.isArray(input) || Predicate.isIterable(input)) {
    return [input, Option.none()]
  }
  const keys = Object.keys(input)
  const size = keys.length
  return [
    keys.map((k) => input[k]),
    Option.some((values: ReadonlyArray<any>) => {
      const res = {}
      for (let i = 0; i < size; i++) {
        ;(res as any)[keys[i]] = values[i]
      }
      return res
    })
  ]
}

const allValidate = (
  effects: Iterable<Effect.Effect<any, any, any>>,
  reconcile: Option.Option<(as: ReadonlyArray<any>) => any>,
  options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly discard?: boolean | undefined
    readonly mode?: "default" | "validate" | "either" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }
) => {
  const eitherEffects: Array<Effect.Effect<Either.Either<unknown, unknown>, never, unknown>> = []
  for (const effect of effects) {
    eitherEffects.push(core.either(effect))
  }
  return core.flatMap(
    forEach(eitherEffects, identity, {
      concurrency: options?.concurrency,
      batching: options?.batching,
      concurrentFinalizers: options?.concurrentFinalizers
    }),
    (eithers) => {
      const none = Option.none()
      const size = eithers.length
      const errors: Array<unknown> = new Array(size)
      const successes: Array<unknown> = new Array(size)
      let errored = false
      for (let i = 0; i < size; i++) {
        const either = eithers[i] as Either.Either<unknown, unknown>
        if (either._tag === "Left") {
          errors[i] = Option.some(either.left)
          errored = true
        } else {
          successes[i] = either.right
          errors[i] = none
        }
      }
      if (errored) {
        return reconcile._tag === "Some" ?
          core.fail(reconcile.value(errors)) :
          core.fail(errors)
      } else if (options?.discard) {
        return core.void
      }
      return reconcile._tag === "Some" ?
        core.succeed(reconcile.value(successes)) :
        core.succeed(successes)
    }
  )
}

const allEither = (
  effects: Iterable<Effect.Effect<any, any, any>>,
  reconcile: Option.Option<(as: ReadonlyArray<any>) => any>,
  options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly discard?: boolean | undefined
    readonly mode?: "default" | "validate" | "either" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }
) => {
  const eitherEffects: Array<Effect.Effect<Either.Either<unknown, unknown>, never, unknown>> = []
  for (const effect of effects) {
    eitherEffects.push(core.either(effect))
  }

  if (options?.discard) {
    return forEach(eitherEffects, identity, {
      concurrency: options?.concurrency,
      batching: options?.batching,
      discard: true,
      concurrentFinalizers: options?.concurrentFinalizers
    })
  }

  return core.map(
    forEach(eitherEffects, identity, {
      concurrency: options?.concurrency,
      batching: options?.batching,
      concurrentFinalizers: options?.concurrentFinalizers
    }),
    (eithers) =>
      reconcile._tag === "Some" ?
        reconcile.value(eithers) :
        eithers
  )
}

/* @internal */
export const all = <
  const Arg extends Iterable<Effect.Effect<any, any, any>> | Record<string, Effect.Effect<any, any, any>>,
  O extends NoExcessProperties<{
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly discard?: boolean | undefined
    readonly mode?: "default" | "validate" | "either" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }, O>
>(
  arg: Arg,
  options?: O
): Effect.All.Return<Arg, O> => {
  const [effects, reconcile] = allResolveInput(arg)

  if (options?.mode === "validate") {
    return allValidate(effects, reconcile, options) as any
  } else if (options?.mode === "either") {
    return allEither(effects, reconcile, options) as any
  }

  return options?.discard !== true && reconcile._tag === "Some"
    ? core.map(
      forEach(effects, identity, options as any),
      reconcile.value
    ) as any
    : forEach(effects, identity, options as any) as any
}

/* @internal */
export const allWith = <
  O extends NoExcessProperties<{
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly discard?: boolean | undefined
    readonly mode?: "default" | "validate" | "either" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }, O>
>(options?: O) =>
<const Arg extends Iterable<Effect.Effect<any, any, any>> | Record<string, Effect.Effect<any, any, any>>>(
  arg: Arg
): Effect.All.Return<Arg, O> => all(arg, options)

/* @internal */
export const allSuccesses = <Eff extends Effect.Effect<any, any, any>>(
  elements: Iterable<Eff>,
  options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }
): Effect.Effect<Array<Effect.Effect.Success<Eff>>, never, Effect.Effect.Context<Eff>> =>
  core.map(
    all(RA.fromIterable(elements).map(core.exit), options),
    RA.filterMap((exit) => core.exitIsSuccess(exit) ? Option.some(exit.effect_instruction_i0) : Option.none())
  )

/* @internal */
export const replicate = dual<
  (n: number) => <A, E, R>(self: Effect.Effect<A, E, R>) => Array<Effect.Effect<A, E, R>>,
  <A, E, R>(self: Effect.Effect<A, E, R>, n: number) => Array<Effect.Effect<A, E, R>>
>(2, (self, n) => Array.from({ length: n }, () => self))

/* @internal */
export const replicateEffect: {
  (
    n: number,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: false | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Array<A>, E, R>
  (
    n: number,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<void, E, R>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    n: number,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: false | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect.Effect<Array<A>, E, R>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    n: number,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect.Effect<void, E, R>
} = dual(
  (args) => core.isEffect(args[0]),
  (self, n, options) => all(replicate(self, n), options)
)

/* @internal */
export const forEach: {
  <B, E, R, S extends Iterable<any>>(
    f: (a: RA.ReadonlyArray.Infer<S>, i: number) => Effect.Effect<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: false | undefined
      readonly concurrentFinalizers?: boolean | undefined
    } | undefined
  ): (
    self: S
  ) => Effect.Effect<RA.ReadonlyArray.With<S, B>, E, R>
  <A, B, E, R>(
    f: (a: A, i: number) => Effect.Effect<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): (self: Iterable<A>) => Effect.Effect<void, E, R>
  <A, B, E, R>(
    self: RA.NonEmptyReadonlyArray<A>,
    f: (a: A, i: number) => Effect.Effect<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: false | undefined
      readonly concurrentFinalizers?: boolean | undefined
    } | undefined
  ): Effect.Effect<RA.NonEmptyArray<B>, E, R>
  <A, B, E, R>(
    self: Iterable<A>,
    f: (a: A, i: number) => Effect.Effect<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: false | undefined
      readonly concurrentFinalizers?: boolean | undefined
    } | undefined
  ): Effect.Effect<Array<B>, E, R>
  <A, B, E, R>(
    self: Iterable<A>,
    f: (a: A, i: number) => Effect.Effect<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect.Effect<void, E, R>
} = dual((args) => Predicate.isIterable(args[0]), <A, R, E, B>(
  self: Iterable<A>,
  f: (a: A, i: number) => Effect.Effect<B, E, R>,
  options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly discard?: boolean | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }
) =>
  core.withFiberRuntime<A | void, E, R>((r) => {
    const isRequestBatchingEnabled = options?.batching === true ||
      (options?.batching === "inherit" && r.getFiberRef(core.currentRequestBatching))

    if (options?.discard) {
      return concurrency.match(
        options.concurrency,
        () =>
          finalizersMaskInternal(ExecutionStrategy.sequential, options?.concurrentFinalizers)((restore) =>
            isRequestBatchingEnabled
              ? forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), true, false, 1)
              : core.forEachSequentialDiscard(self, (a, i) => restore(f(a, i)))
          ),
        () =>
          finalizersMaskInternal(ExecutionStrategy.parallel, options?.concurrentFinalizers)((restore) =>
            forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false)
          ),
        (n) =>
          finalizersMaskInternal(ExecutionStrategy.parallelN(n), options?.concurrentFinalizers)((restore) =>
            forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false, n)
          )
      )
    }

    return concurrency.match(
      options?.concurrency,
      () =>
        finalizersMaskInternal(ExecutionStrategy.sequential, options?.concurrentFinalizers)((restore) =>
          isRequestBatchingEnabled
            ? forEachParN(self, 1, (a, i) => restore(f(a, i)), true)
            : core.forEachSequential(self, (a, i) => restore(f(a, i)))
        ),
      () =>
        finalizersMaskInternal(ExecutionStrategy.parallel, options?.concurrentFinalizers)((restore) =>
          forEachParUnbounded(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)
        ),
      (n) =>
        finalizersMaskInternal(ExecutionStrategy.parallelN(n), options?.concurrentFinalizers)((restore) =>
          forEachParN(self, n, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)
        )
    )
  }))

/* @internal */
export const forEachParUnbounded = <A, B, E, R>(
  self: Iterable<A>,
  f: (a: A, i: number) => Effect.Effect<B, E, R>,
  batching: boolean
): Effect.Effect<Array<B>, E, R> =>
  core.suspend(() => {
    const as = RA.fromIterable(self)
    const array = new Array<B>(as.length)
    const fn = (a: A, i: number) => core.flatMap(f(a, i), (b) => core.sync(() => array[i] = b))
    return core.zipRight(forEachConcurrentDiscard(as, fn, batching, false), core.succeed(array))
  })

/** @internal */
export const forEachConcurrentDiscard = <A, X, E, R>(
  self: Iterable<A>,
  f: (a: A, i: number) => Effect.Effect<X, E, R>,
  batching: boolean,
  processAll: boolean,
  n?: number
): Effect.Effect<void, E, R> =>
  core.uninterruptibleMask((restore) =>
    core.transplant((graft) =>
      core.withFiberRuntime<void, E, R>((parent) => {
        let todos = Array.from(self).reverse()
        let target = todos.length
        if (target === 0) {
          return core.void
        }
        let counter = 0
        let interrupted = false
        const fibersCount = n ? Math.min(todos.length, n) : todos.length
        const fibers = new Set<FiberRuntime<Exit.Exit<X, E> | Effect.Blocked<X, E>>>()
        const results = new Array()
        const interruptAll = () =>
          fibers.forEach((fiber) => {
            fiber.currentScheduler.scheduleTask(
              () => {
                fiber.unsafeInterruptAsFork(parent.id())
              },
              0,
              fiber
            )
          })
        const startOrder = new Array<FiberRuntime<Exit.Exit<X, E> | Effect.Blocked<X, E>>>()
        const joinOrder = new Array<FiberRuntime<Exit.Exit<X, E> | Effect.Blocked<X, E>>>()
        const residual = new Array<core.Blocked>()
        const collectExits = () => {
          const exits: Array<Exit.Exit<any, E>> = results
            .filter(({ exit }) => exit._tag === "Failure")
            .sort((a, b) => a.index < b.index ? -1 : a.index === b.index ? 0 : 1)
            .map(({ exit }) => exit)
          if (exits.length === 0) {
            exits.push(core.exitVoid)
          }
          return exits
        }
        const runFiber = <A, E, R>(eff: Effect.Effect<A, E, R>, interruptImmediately = false) => {
          const runnable = core.uninterruptible(graft(eff))
          const fiber = unsafeForkUnstarted(
            runnable,
            parent,
            parent.currentRuntimeFlags,
            fiberScope.globalScope
          )
          parent.currentScheduler.scheduleTask(
            () => {
              if (interruptImmediately) {
                fiber.unsafeInterruptAsFork(parent.id())
              }
              fiber.resume(runnable)
            },
            0,
            fiber
          )
          return fiber
        }
        const onInterruptSignal = () => {
          if (!processAll) {
            target -= todos.length
            todos = []
          }
          interrupted = true
          interruptAll()
        }
        const stepOrExit = batching ? core.step : core.exit
        const processingFiber = runFiber(
          core.async<any, any, any>((resume) => {
            const pushResult = <X, E>(res: Exit.Exit<X, E> | Effect.Blocked<X, E>, index: number) => {
              if (res._op === "Blocked") {
                residual.push(res as core.Blocked)
              } else {
                results.push({ index, exit: res })
                if (res._op === "Failure" && !interrupted) {
                  onInterruptSignal()
                }
              }
            }
            const next = () => {
              if (todos.length > 0) {
                const a = todos.pop()!
                let index = counter++
                const returnNextElement = () => {
                  const a = todos.pop()!
                  index = counter++
                  return core.flatMap(core.yieldNow(), () =>
                    core.flatMap(
                      stepOrExit(restore(f(a, index))),
                      onRes
                    ))
                }
                const onRes = (
                  res: Exit.Exit<X, E> | Effect.Blocked<X, E>
                ): Effect.Effect<Exit.Exit<X, E> | Effect.Blocked<X, E>, never, R> => {
                  if (todos.length > 0) {
                    pushResult(res, index)
                    if (todos.length > 0) {
                      return returnNextElement()
                    }
                  }
                  return core.succeed(res)
                }
                const todo = core.flatMap(
                  stepOrExit(restore(f(a, index))),
                  onRes
                )
                const fiber = runFiber(todo)
                startOrder.push(fiber)
                fibers.add(fiber)
                if (interrupted) {
                  fiber.currentScheduler.scheduleTask(
                    () => {
                      fiber.unsafeInterruptAsFork(parent.id())
                    },
                    0,
                    fiber
                  )
                }
                fiber.addObserver((wrapped) => {
                  let exit: Exit.Exit<any, any> | core.Blocked
                  if (wrapped._op === "Failure") {
                    exit = wrapped
                  } else {
                    exit = wrapped.effect_instruction_i0 as any
                  }
                  joinOrder.push(fiber)
                  fibers.delete(fiber)
                  pushResult(exit, index)
                  if (results.length === target) {
                    resume(core.succeed(Option.getOrElse(
                      core.exitCollectAll(collectExits(), { parallel: true }),
                      () => core.exitVoid
                    )))
                  } else if (residual.length + results.length === target) {
                    const exits = collectExits()
                    const requests = residual.map((blocked) => blocked.effect_instruction_i0).reduce(RequestBlock_.par)
                    resume(core.succeed(core.blocked(
                      requests,
                      forEachConcurrentDiscard(
                        [
                          Option.getOrElse(
                            core.exitCollectAll(exits, { parallel: true }),
                            () => core.exitVoid
                          ),
                          ...residual.map((blocked) => blocked.effect_instruction_i1)
                        ],
                        (i) => i,
                        batching,
                        true,
                        n
                      )
                    )))
                  } else {
                    next()
                  }
                })
              }
            }
            for (let i = 0; i < fibersCount; i++) {
              next()
            }
          })
        )
        return core.asVoid(
          core.onExit(
            core.flatten(restore(internalFiber.join(processingFiber))),
            core.exitMatch({
              onFailure: (cause) => {
                onInterruptSignal()
                const target = residual.length + 1
                const concurrency = Math.min(typeof n === "number" ? n : residual.length, residual.length)
                const toPop = Array.from(residual)
                return core.async<any, any>((cb) => {
                  const exits: Array<Exit.Exit<any, any>> = []
                  let count = 0
                  let index = 0
                  const check = (index: number, hitNext: boolean) => (exit: Exit.Exit<any, any>) => {
                    exits[index] = exit
                    count++
                    if (count === target) {
                      cb(core.exitSucceed(core.exitFailCause(cause)))
                    }
                    if (toPop.length > 0 && hitNext) {
                      next()
                    }
                  }
                  const next = () => {
                    runFiber(toPop.pop()!, true).addObserver(check(index, true))
                    index++
                  }
                  processingFiber.addObserver(check(index, false))
                  index++
                  for (let i = 0; i < concurrency; i++) {
                    next()
                  }
                }) as any
              },
              onSuccess: () => core.forEachSequential(joinOrder, (f) => f.inheritAll)
            })
          )
        )
      })
    )
  )

/* @internal */
export const forEachParN = <A, B, E, R>(
  self: Iterable<A>,
  n: number,
  f: (a: A, i: number) => Effect.Effect<B, E, R>,
  batching: boolean
): Effect.Effect<Array<B>, E, R> =>
  core.suspend(() => {
    const as = RA.fromIterable(self)
    const array = new Array<B>(as.length)
    const fn = (a: A, i: number) => core.map(f(a, i), (b) => array[i] = b)
    return core.zipRight(forEachConcurrentDiscard(as, fn, batching, false, n), core.succeed(array))
  })

/* @internal */
export const fork = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R> =>
  core.withFiberRuntime((state, status) => core.succeed(unsafeFork(self, state, status.runtimeFlags)))

/* @internal */
export const forkDaemon = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R> =>
  forkWithScopeOverride(self, fiberScope.globalScope)

/* @internal */
export const forkWithErrorHandler = dual<
  <E, X>(
    handler: (e: E) => Effect.Effect<X>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R>,
  <A, E, R, X>(
    self: Effect.Effect<A, E, R>,
    handler: (e: E) => Effect.Effect<X>
  ) => Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R>
>(2, (self, handler) =>
  fork(core.onError(self, (cause) => {
    const either = internalCause.failureOrCause(cause)
    switch (either._tag) {
      case "Left":
        return handler(either.left)
      case "Right":
        return core.failCause(either.right)
    }
  })))

/** @internal */
export const unsafeFork = <A, E, R, E2, B>(
  effect: Effect.Effect<A, E, R>,
  parentFiber: FiberRuntime<B, E2>,
  parentRuntimeFlags: RuntimeFlags.RuntimeFlags,
  overrideScope: fiberScope.FiberScope | null = null
): FiberRuntime<A, E> => {
  const childFiber = unsafeMakeChildFiber(effect, parentFiber, parentRuntimeFlags, overrideScope)
  childFiber.resume(effect)
  return childFiber
}

/** @internal */
export const unsafeForkUnstarted = <A, E, R, E2, B>(
  effect: Effect.Effect<A, E, R>,
  parentFiber: FiberRuntime<B, E2>,
  parentRuntimeFlags: RuntimeFlags.RuntimeFlags,
  overrideScope: fiberScope.FiberScope | null = null
): FiberRuntime<A, E> => {
  const childFiber = unsafeMakeChildFiber(effect, parentFiber, parentRuntimeFlags, overrideScope)
  return childFiber
}

/** @internal */
export const unsafeMakeChildFiber = <A, E, R, E2, B>(
  effect: Effect.Effect<A, E, R>,
  parentFiber: FiberRuntime<B, E2>,
  parentRuntimeFlags: RuntimeFlags.RuntimeFlags,
  overrideScope: fiberScope.FiberScope | null = null
): FiberRuntime<A, E> => {
  const childId = FiberId.unsafeMake()
  const parentFiberRefs = parentFiber.getFiberRefs()
  const childFiberRefs = fiberRefs.forkAs(parentFiberRefs, childId)
  const childFiber = new FiberRuntime<A, E>(childId, childFiberRefs, parentRuntimeFlags)
  const childContext = fiberRefs.getOrDefault(
    childFiberRefs,
    core.currentContext as unknown as FiberRef.FiberRef<Context.Context<R>>
  )
  const supervisor = childFiber.currentSupervisor

  supervisor.onStart(
    childContext,
    effect,
    Option.some(parentFiber),
    childFiber
  )

  childFiber.addObserver((exit) => supervisor.onEnd(exit, childFiber))

  const parentScope = overrideScope !== null ? overrideScope : pipe(
    parentFiber.getFiberRef(core.currentForkScopeOverride),
    Option.getOrElse(() => parentFiber.scope())
  )

  parentScope.add(parentRuntimeFlags, childFiber)

  return childFiber
}

/* @internal */
const forkWithScopeOverride = <A, E, R>(
  self: Effect.Effect<A, E, R>,
  scopeOverride: fiberScope.FiberScope
): Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R> =>
  core.withFiberRuntime((parentFiber, parentStatus) =>
    core.succeed(unsafeFork(self, parentFiber, parentStatus.runtimeFlags, scopeOverride))
  )

/* @internal */
export const mergeAll = dual<
  <Z, Eff extends Effect.Effect<any, any, any>>(
    zero: Z,
    f: (z: Z, a: Effect.Effect.Success<Eff>, i: number) => Z,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => (elements: Iterable<Eff>) => Effect.Effect<Z, Effect.Effect.Error<Eff>, Effect.Effect.Context<Eff>>,
  <Eff extends Effect.Effect<any, any, any>, Z>(
    elements: Iterable<Eff>,
    zero: Z,
    f: (z: Z, a: Effect.Effect.Success<Eff>, i: number) => Z,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => Effect.Effect<Z, Effect.Effect.Error<Eff>, Effect.Effect.Context<Eff>>
>(
  (args) => Predicate.isFunction(args[2]),
  <A, E, R, Z>(elements: Iterable<Effect.Effect<A, E, R>>, zero: Z, f: (z: Z, a: A, i: number) => Z, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }) =>
    concurrency.matchSimple(
      options?.concurrency,
      () =>
        RA.fromIterable(elements).reduce(
          (acc, a, i) => core.zipWith(acc, a, (acc, a) => f(acc, a, i)),
          core.succeed(zero) as Effect.Effect<Z, E, R>
        ),
      () =>
        core.flatMap(Ref.make(zero), (acc) =>
          core.flatMap(
            forEach(
              elements,
              (effect, i) => core.flatMap(effect, (a) => Ref.update(acc, (b) => f(b, a, i))),
              options
            ),
            () => Ref.get(acc)
          ))
    )
)

/* @internal */
export const partition = dual<
  <A, B, E, R>(
    f: (a: A, i: number) => Effect.Effect<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => (elements: Iterable<A>) => Effect.Effect<[excluded: Array<E>, satisfying: Array<B>], never, R>,
  <A, B, E, R>(
    elements: Iterable<A>,
    f: (a: A, i: number) => Effect.Effect<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => Effect.Effect<[excluded: Array<E>, satisfying: Array<B>], never, R>
>((args) => Predicate.isIterable(args[0]), (elements, f, options) =>
  pipe(
    forEach(elements, (a, i) => core.either(f(a, i)), options),
    core.map((chunk) => core.partitionMap(chunk, identity))
  ))

/* @internal */
export const validateAll = dual<
  {
    <A, B, E, R>(
      f: (a: A, i: number) => Effect.Effect<B, E, R>,
      options?: {
        readonly concurrency?: Concurrency | undefined
        readonly batching?: boolean | "inherit" | undefined
        readonly discard?: false | undefined
        readonly concurrentFinalizers?: boolean | undefined
      }
    ): (elements: Iterable<A>) => Effect.Effect<Array<B>, RA.NonEmptyArray<E>, R>
    <A, B, E, R>(
      f: (a: A, i: number) => Effect.Effect<B, E, R>,
      options: {
        readonly concurrency?: Concurrency | undefined
        readonly batching?: boolean | "inherit" | undefined
        readonly discard: true
        readonly concurrentFinalizers?: boolean | undefined
      }
    ): (elements: Iterable<A>) => Effect.Effect<void, RA.NonEmptyArray<E>, R>
  },
  {
    <A, B, E, R>(
      elements: Iterable<A>,
      f: (a: A, i: number) => Effect.Effect<B, E, R>,
      options?: {
        readonly concurrency?: Concurrency | undefined
        readonly batching?: boolean | "inherit" | undefined
        readonly discard?: false | undefined
        readonly concurrentFinalizers?: boolean | undefined
      }
    ): Effect.Effect<Array<B>, RA.NonEmptyArray<E>, R>
    <A, B, E, R>(
      elements: Iterable<A>,
      f: (a: A, i: number) => Effect.Effect<B, E, R>,
      options: {
        readonly concurrency?: Concurrency | undefined
        readonly batching?: boolean | "inherit" | undefined
        readonly discard: true
        readonly concurrentFinalizers?: boolean | undefined
      }
    ): Effect.Effect<void, RA.NonEmptyArray<E>, R>
  }
>(
  (args) => Predicate.isIterable(args[0]),
  <A, B, E, R>(elements: Iterable<A>, f: (a: A, i: number) => Effect.Effect<B, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly discard?: boolean | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }): Effect.Effect<any, RA.NonEmptyArray<E>, R> =>
    core.flatMap(
      partition(elements, f, {
        concurrency: options?.concurrency,
        batching: options?.batching,
        concurrentFinalizers: options?.concurrentFinalizers
      }),
      ([es, bs]) =>
        RA.isNonEmptyArray(es)
          ? core.fail(es)
          : options?.discard
          ? core.void
          : core.succeed(bs)
    )
)

/* @internal */
export const raceAll: <Eff extends Effect.Effect<any, any, any>>(
  all: Iterable<Eff>
) => Effect.Effect<Effect.Effect.Success<Eff>, Effect.Effect.Error<Eff>, Effect.Effect.Context<Eff>> = <
  A,
  E,
  R
>(all: Iterable<Effect.Effect<A, E, R>>): Effect.Effect<A, E, R> =>
  core.withFiberRuntime((state, status) =>
    core.async<A, E, R>((resume) => {
      const fibers = new Set<FiberRuntime<A, E>>()
      let winner: FiberRuntime<A, E> | undefined
      let failures: Cause.Cause<E> = internalCause.empty
      const interruptAll = () => {
        for (const fiber of fibers) {
          fiber.unsafeInterruptAsFork(state.id())
        }
      }
      let latch = false
      let empty = true
      for (const self of all) {
        empty = false
        const fiber = unsafeFork(
          core.interruptible(self),
          state,
          status.runtimeFlags
        )
        fibers.add(fiber)
        fiber.addObserver((exit) => {
          fibers.delete(fiber)
          if (!winner) {
            if (exit._tag === "Success") {
              latch = true
              winner = fiber
              failures = internalCause.empty
              interruptAll()
            } else {
              failures = internalCause.parallel(exit.cause, failures)
            }
          }
          if (latch && fibers.size === 0) {
            resume(
              winner ? core.zipRight(internalFiber.inheritAll(winner), winner.unsafePoll()!) : core.failCause(failures)
            )
          }
        })
        if (winner) break
      }
      if (empty) {
        return resume(core.dieSync(() => new core.IllegalArgumentException(`Received an empty collection of effects`)))
      }
      latch = true
      return internalFiber.interruptAllAs(fibers, state.id())
    })
  )

/* @internal */
export const reduceEffect = dual<
  <Z, E, R, Eff extends Effect.Effect<any, any, any>>(
    zero: Effect.Effect<Z, E, R>,
    f: (z: NoInfer<Z>, a: Effect.Effect.Success<Eff>, i: number) => Z,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => (elements: Iterable<Eff>) => Effect.Effect<Z, E | Effect.Effect.Error<Eff>, R | Effect.Effect.Context<Eff>>,
  <Eff extends Effect.Effect<any, any, any>, Z, E, R>(
    elements: Iterable<Eff>,
    zero: Effect.Effect<Z, E, R>,
    f: (z: NoInfer<Z>, a: Effect.Effect.Success<Eff>, i: number) => Z,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => Effect.Effect<Z, E | Effect.Effect.Error<Eff>, R | Effect.Effect.Context<Eff>>
>((args) => Predicate.isIterable(args[0]) && !core.isEffect(args[0]), <A, E, R, Z>(
  elements: Iterable<Effect.Effect<A, E, R>>,
  zero: Effect.Effect<Z, E, R>,
  f: (z: NoInfer<Z>, a: NoInfer<A>, i: number) => Z,
  options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }
) =>
  concurrency.matchSimple(
    options?.concurrency,
    () => RA.fromIterable(elements).reduce((acc, a, i) => core.zipWith(acc, a, (acc, a) => f(acc, a, i)), zero),
    () =>
      core.suspend(() =>
        pipe(
          mergeAll(
            [zero, ...elements],
            Option.none<Z>(),
            (acc, elem, i) => {
              switch (acc._tag) {
                case "None": {
                  return Option.some(elem as Z)
                }
                case "Some": {
                  return Option.some(f(acc.value, elem as A, i))
                }
              }
            },
            options
          ),
          core.map((option) => {
            switch (option._tag) {
              case "None": {
                throw new Error(
                  "BUG: Effect.reduceEffect - please report an issue at https://github.com/Effect-TS/effect/issues"
                )
              }
              case "Some": {
                return option.value
              }
            }
          })
        )
      )
  ))

/* @internal */
export const parallelFinalizers = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  core.contextWithEffect((context) =>
    Option.match(Context.getOption(context, scopeTag), {
      onNone: () => self,
      onSome: (scope) => {
        switch (scope.strategy._tag) {
          case "Parallel":
            return self
          case "Sequential":
          case "ParallelN":
            return core.flatMap(
              core.scopeFork(scope, ExecutionStrategy.parallel),
              (inner) => scopeExtend(self, inner)
            )
        }
      }
    })
  )

/* @internal */
export const parallelNFinalizers =
  (parallelism: number) => <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
    core.contextWithEffect((context) =>
      Option.match(Context.getOption(context, scopeTag), {
        onNone: () => self,
        onSome: (scope) => {
          if (scope.strategy._tag === "ParallelN" && scope.strategy.parallelism === parallelism) {
            return self
          }
          return core.flatMap(
            core.scopeFork(scope, ExecutionStrategy.parallelN(parallelism)),
            (inner) => scopeExtend(self, inner)
          )
        }
      })
    )

/* @internal */
export const finalizersMask = (strategy: ExecutionStrategy.ExecutionStrategy) =>
<A, E, R>(
  self: (
    restore: <A1, E1, R1>(self: Effect.Effect<A1, E1, R1>) => Effect.Effect<A1, E1, R1>
  ) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> => finalizersMaskInternal(strategy, true)(self)

/* @internal */
export const finalizersMaskInternal =
  (strategy: ExecutionStrategy.ExecutionStrategy, concurrentFinalizers?: boolean | undefined) =>
  <A, E, R>(
    self: (
      restore: <A1, E1, R1>(self: Effect.Effect<A1, E1, R1>) => Effect.Effect<A1, E1, R1>
    ) => Effect.Effect<A, E, R>
  ): Effect.Effect<A, E, R> =>
    core.contextWithEffect((context) =>
      Option.match(Context.getOption(context, scopeTag), {
        onNone: () => self(identity),
        onSome: (scope) => {
          if (concurrentFinalizers === true) {
            const patch = strategy._tag === "Parallel"
              ? parallelFinalizers
              : strategy._tag === "Sequential"
              ? sequentialFinalizers
              : parallelNFinalizers(strategy.parallelism)
            switch (scope.strategy._tag) {
              case "Parallel":
                return patch(self(parallelFinalizers))
              case "Sequential":
                return patch(self(sequentialFinalizers))
              case "ParallelN":
                return patch(self(parallelNFinalizers(scope.strategy.parallelism)))
            }
          } else {
            return self(identity)
          }
        }
      })
    )

/* @internal */
export const scopeWith = <A, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R | Scope.Scope> => core.flatMap(scopeTag, f)

/** @internal */
export const scopedWith = <A, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> => core.flatMap(scopeMake(), (scope) => core.onExit(f(scope), (exit) => scope.close(exit)))

/* @internal */
export const scopedEffect = <A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, Exclude<R, Scope.Scope>> =>
  core.flatMap(scopeMake(), (scope) => scopeUse(effect, scope))

/* @internal */
export const sequentialFinalizers = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  core.contextWithEffect((context) =>
    Option.match(Context.getOption(context, scopeTag), {
      onNone: () => self,
      onSome: (scope) => {
        switch (scope.strategy._tag) {
          case "Sequential":
            return self
          case "Parallel":
          case "ParallelN":
            return core.flatMap(
              core.scopeFork(scope, ExecutionStrategy.sequential),
              (inner) => scopeExtend(self, inner)
            )
        }
      }
    })
  )

/* @internal */
export const tagMetricsScoped = (key: string, value: string): Effect.Effect<void, never, Scope.Scope> =>
  labelMetricsScoped([metricLabel.make(key, value)])

/* @internal */
export const labelMetricsScoped = (
  labels: Iterable<MetricLabel.MetricLabel>
): Effect.Effect<void, never, Scope.Scope> =>
  fiberRefLocallyScopedWith(core.currentMetricLabels, (old) => RA.union(old, labels))

/* @internal */
export const using = dual<
  <A, A2, E2, R2>(
    use: (a: A) => Effect.Effect<A2, E2, R2>
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E | E2, Exclude<R, Scope.Scope> | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    use: (a: A) => Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<A2, E | E2, Exclude<R, Scope.Scope> | R2>
>(2, (self, use) => scopedWith((scope) => core.flatMap(scopeExtend(self, scope), use)))

/** @internal */
export const validate = dual<
  <B, E1, R1>(
    that: Effect.Effect<B, E1, R1>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<[A, B], E | E1, R | R1>,
  <A, E, R, B, E1, R1>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<B, E1, R1>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => Effect.Effect<[A, B], E | E1, R | R1>
>(
  (args) => core.isEffect(args[1]),
  (self, that, options) => validateWith(self, that, (a, b) => [a, b], options)
)

/** @internal */
export const validateWith = dual<
  <B, E1, R1, A, C>(
    that: Effect.Effect<B, E1, R1>,
    f: (a: A, b: B) => C,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<C, E | E1, R | R1>,
  <A, E, R, B, E1, R1, C>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<B, E1, R1>,
    f: (a: A, b: B) => C,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => Effect.Effect<C, E | E1, R | R1>
>((args) => core.isEffect(args[1]), (self, that, f, options) =>
  core.flatten(zipWithOptions(
    core.exit(self),
    core.exit(that),
    (ea, eb) =>
      core.exitZipWith(ea, eb, {
        onSuccess: f,
        onFailure: (ca, cb) => options?.concurrent ? internalCause.parallel(ca, cb) : internalCause.sequential(ca, cb)
      }),
    options
  )))

/* @internal */
export const validateAllPar = dual<
  <A, B, E, R>(
    f: (a: A) => Effect.Effect<B, E, R>
  ) => (elements: Iterable<A>) => Effect.Effect<Array<B>, Array<E>, R>,
  <A, B, E, R>(
    elements: Iterable<A>,
    f: (a: A) => Effect.Effect<B, E, R>
  ) => Effect.Effect<Array<B>, Array<E>, R>
>(2, (elements, f) =>
  core.flatMap(
    partition(elements, f),
    ([es, bs]) =>
      es.length === 0
        ? core.succeed(bs)
        : core.fail(es)
  ))

/* @internal */
export const validateAllParDiscard = dual<
  <A, B, E, R>(
    f: (a: A) => Effect.Effect<B, E, R>
  ) => (elements: Iterable<A>) => Effect.Effect<void, Array<E>, R>,
  <A, B, E, R>(elements: Iterable<A>, f: (a: A) => Effect.Effect<B, E, R>) => Effect.Effect<void, Array<E>, R>
>(2, (elements, f) =>
  core.flatMap(
    partition(elements, f),
    ([es, _]) =>
      es.length === 0
        ? core.void
        : core.fail(es)
  ))

/* @internal */
export const validateFirst = dual<
  <A, B, E, R>(f: (a: A, i: number) => Effect.Effect<B, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }) => (elements: Iterable<A>) => Effect.Effect<B, Array<E>, R>,
  <A, B, E, R>(elements: Iterable<A>, f: (a: A, i: number) => Effect.Effect<B, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }) => Effect.Effect<B, Array<E>, R>
>(
  (args) => Predicate.isIterable(args[0]),
  (elements, f, options) => core.flip(forEach(elements, (a, i) => core.flip(f(a, i)), options))
)

/* @internal */
export const withClockScoped = <C extends Clock.Clock>(c: C) =>
  fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(clock.clockTag, c))

/* @internal */
export const withRandomScoped = <A extends Random.Random>(value: A) =>
  fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(randomTag, value))

/* @internal */
export const withConfigProviderScoped = (provider: ConfigProvider) =>
  fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(configProviderTag, provider))

/* @internal */
export const withEarlyRelease = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<[Effect.Effect<void>, A], E, R | Scope.Scope> =>
  scopeWith((parent) =>
    core.flatMap(core.scopeFork(parent, executionStrategy.sequential), (child) =>
      pipe(
        self,
        scopeExtend(child),
        core.map((value) => [
          core.fiberIdWith((fiberId) => core.scopeClose(child, core.exitInterrupt(fiberId))),
          value
        ])
      ))
  )

/** @internal */
export const zipOptions = dual<
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<[A, A2], E | E2, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => Effect.Effect<[A, A2], E | E2, R | R2>
>((args) => core.isEffect(args[1]), (
  self,
  that,
  options
) => zipWithOptions(self, that, (a, b) => [a, b], options))

/** @internal */
export const zipLeftOptions = dual<
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<A, E | E2, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ) => Effect.Effect<A, E | E2, R | R2>
>(
  (args) => core.isEffect(args[1]),
  (self, that, options) => {
    if (options?.concurrent !== true && (options?.batching === undefined || options.batching === false)) {
      return core.zipLeft(self, that)
    }
    return zipWithOptions(self, that, (a, _) => a, options)
  }
)

/** @internal */
export const zipRightOptions: {
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect.Effect<A2, E2 | E, R2 | R>
} = dual((args) => core.isEffect(args[1]), <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>,
  options?: {
    readonly concurrent?: boolean | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }
): Effect.Effect<A2, E2 | E, R2 | R> => {
  if (options?.concurrent !== true && (options?.batching === undefined || options.batching === false)) {
    return core.zipRight(self, that)
  }
  return zipWithOptions(self, that, (_, b) => b, options)
})

/** @internal */
export const zipWithOptions: {
  <A2, E2, R2, A, B>(
    that: Effect.Effect<A2, E2, R2>,
    f: (a: A, b: A2) => B,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2, B>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>,
    f: (a: A, b: A2) => B,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect.Effect<B, E2 | E, R2 | R>
} = dual((args) => core.isEffect(args[1]), <A, E, R, A2, E2, R2, B>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>,
  f: (a: A, b: A2) => B,
  options?: {
    readonly concurrent?: boolean | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }
): Effect.Effect<B, E2 | E, R2 | R> =>
  core.map(
    all([self, that], {
      concurrency: options?.concurrent ? 2 : 1,
      batching: options?.batching,
      concurrentFinalizers: options?.concurrentFinalizers
    }),
    ([a, a2]) => f(a, a2)
  ))

/* @internal */
export const withRuntimeFlagsScoped = (
  update: RuntimeFlagsPatch.RuntimeFlagsPatch
): Effect.Effect<void, never, Scope.Scope> => {
  if (update === RuntimeFlagsPatch.empty) {
    return core.void
  }
  return pipe(
    core.runtimeFlags,
    core.flatMap((runtimeFlags) => {
      const updatedRuntimeFlags = runtimeFlags_.patch(runtimeFlags, update)
      const revertRuntimeFlags = runtimeFlags_.diff(updatedRuntimeFlags, runtimeFlags)
      return pipe(
        core.updateRuntimeFlags(update),
        core.zipRight(addFinalizer(() => core.updateRuntimeFlags(revertRuntimeFlags))),
        core.asVoid
      )
    }),
    core.uninterruptible
  )
}

// circular with Scope

/** @internal */
export const scopeTag = Context.GenericTag<Scope.Scope>("effect/Scope")

/* @internal */
export const scope: Effect.Effect<Scope.Scope, never, Scope.Scope> = scopeTag

/** @internal */
export interface ScopeImpl extends Scope.CloseableScope {
  state: {
    readonly _tag: "Open"
    readonly finalizers: Map<{}, Scope.Scope.Finalizer>
  } | {
    readonly _tag: "Closed"
    readonly exit: Exit.Exit<unknown, unknown>
  }
}

const scopeUnsafeAddFinalizer = (scope: ScopeImpl, fin: Scope.Scope.Finalizer): void => {
  if (scope.state._tag === "Open") {
    scope.state.finalizers.set({}, fin)
  }
}

const ScopeImplProto: Omit<ScopeImpl, "strategy" | "state"> = {
  [core.ScopeTypeId]: core.ScopeTypeId,
  [core.CloseableScopeTypeId]: core.CloseableScopeTypeId,
  pipe() {
    return pipeArguments(this, arguments)
  },
  fork(this: ScopeImpl, strategy) {
    return core.sync(() => {
      const newScope = scopeUnsafeMake(strategy)
      if (this.state._tag === "Closed") {
        newScope.state = this.state
        return newScope
      }
      const key = {}
      const fin = (exit: Exit.Exit<unknown, unknown>) => newScope.close(exit)
      this.state.finalizers.set(key, fin)
      scopeUnsafeAddFinalizer(newScope, (_) =>
        core.sync(() => {
          if (this.state._tag === "Open") {
            this.state.finalizers.delete(key)
          }
        }))
      return newScope
    })
  },
  close(this: ScopeImpl, exit) {
    return core.suspend(() => {
      if (this.state._tag === "Closed") {
        return core.void
      }
      const finalizers = Array.from(this.state.finalizers.values()).reverse()
      this.state = { _tag: "Closed", exit }
      if (finalizers.length === 0) {
        return core.void
      }
      return executionStrategy.isSequential(this.strategy) ?
        pipe(
          core.forEachSequential(finalizers, (fin) => core.exit(fin(exit))),
          core.flatMap((results) =>
            pipe(
              core.exitCollectAll(results),
              Option.map(core.exitAsVoid),
              Option.getOrElse(() => core.exitVoid)
            )
          )
        ) :
        executionStrategy.isParallel(this.strategy) ?
        pipe(
          forEachParUnbounded(finalizers, (fin) => core.exit(fin(exit)), false),
          core.flatMap((results) =>
            pipe(
              core.exitCollectAll(results, { parallel: true }),
              Option.map(core.exitAsVoid),
              Option.getOrElse(() => core.exitVoid)
            )
          )
        ) :
        pipe(
          forEachParN(finalizers, this.strategy.parallelism, (fin) => core.exit(fin(exit)), false),
          core.flatMap((results) =>
            pipe(
              core.exitCollectAll(results, { parallel: true }),
              Option.map(core.exitAsVoid),
              Option.getOrElse(() => core.exitVoid)
            )
          )
        )
    })
  },
  addFinalizer(this: ScopeImpl, fin) {
    return core.suspend(() => {
      if (this.state._tag === "Closed") {
        return fin(this.state.exit)
      }
      this.state.finalizers.set({}, fin)
      return core.void
    })
  }
}

const scopeUnsafeMake = (
  strategy: ExecutionStrategy.ExecutionStrategy = executionStrategy.sequential
): ScopeImpl => {
  const scope = Object.create(ScopeImplProto)
  scope.strategy = strategy
  scope.state = { _tag: "Open", finalizers: new Map() }
  return scope
}

/* @internal */
export const scopeMake = (
  strategy: ExecutionStrategy.ExecutionStrategy = executionStrategy.sequential
): Effect.Effect<Scope.Scope.Closeable> => core.sync(() => scopeUnsafeMake(strategy))

/* @internal */
export const scopeExtend = dual<
  (scope: Scope.Scope) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, Scope.Scope>>,
  <A, E, R>(effect: Effect.Effect<A, E, R>, scope: Scope.Scope) => Effect.Effect<A, E, Exclude<R, Scope.Scope>>
>(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, scope: Scope.Scope) =>
    core.mapInputContext<A, E, R, Exclude<R, Scope.Scope>>(
      effect,
      // @ts-expect-error
      Context.merge(Context.make(scopeTag, scope))
    )
)

/* @internal */
export const scopeUse = dual<
  (
    scope: Scope.Scope.Closeable
  ) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, Scope.Scope>>,
  <A, E, R>(
    effect: Effect.Effect<A, E, R>,
    scope: Scope.Scope.Closeable
  ) => Effect.Effect<A, E, Exclude<R, Scope.Scope>>
>(2, (effect, scope) =>
  pipe(
    effect,
    scopeExtend(scope),
    core.onExit((exit) => scope.close(exit))
  ))

// circular with Supervisor

/** @internal */
export const fiberRefUnsafeMakeSupervisor = (
  initial: Supervisor.Supervisor<any>
): FiberRef.FiberRef<Supervisor.Supervisor<any>> =>
  core.fiberRefUnsafeMakePatch(initial, {
    differ: SupervisorPatch.differ,
    fork: SupervisorPatch.empty
  })

// circular with FiberRef

/* @internal */
export const fiberRefLocallyScoped = dual<
  <A>(value: A) => (self: FiberRef.FiberRef<A>) => Effect.Effect<void, never, Scope.Scope>,
  <A>(self: FiberRef.FiberRef<A>, value: A) => Effect.Effect<void, never, Scope.Scope>
>(2, (self, value) =>
  core.asVoid(
    acquireRelease(
      core.flatMap(
        core.fiberRefGet(self),
        (oldValue) => core.as(core.fiberRefSet(self, value), oldValue)
      ),
      (oldValue) => core.fiberRefSet(self, oldValue)
    )
  ))

/* @internal */
export const fiberRefLocallyScopedWith = dual<
  <A>(f: (a: A) => A) => (self: FiberRef.FiberRef<A>) => Effect.Effect<void, never, Scope.Scope>,
  <A>(self: FiberRef.FiberRef<A>, f: (a: A) => A) => Effect.Effect<void, never, Scope.Scope>
>(2, (self, f) => core.fiberRefGetWith(self, (a) => fiberRefLocallyScoped(self, f(a))))

/* @internal */
export const fiberRefMake = <A>(
  initial: A,
  options?: {
    readonly fork?: ((a: A) => A) | undefined
    readonly join?: ((left: A, right: A) => A) | undefined
  }
): Effect.Effect<FiberRef.FiberRef<A>, never, Scope.Scope> =>
  fiberRefMakeWith(() => core.fiberRefUnsafeMake(initial, options))

/* @internal */
export const fiberRefMakeWith = <Value>(
  ref: LazyArg<FiberRef.FiberRef<Value>>
): Effect.Effect<FiberRef.FiberRef<Value>, never, Scope.Scope> =>
  acquireRelease(
    core.tap(core.sync(ref), (ref) => core.fiberRefUpdate(ref, identity)),
    (fiberRef) => core.fiberRefDelete(fiberRef)
  )

/* @internal */
export const fiberRefMakeContext = <A>(
  initial: Context.Context<A>
): Effect.Effect<FiberRef.FiberRef<Context.Context<A>>, never, Scope.Scope> =>
  fiberRefMakeWith(() => core.fiberRefUnsafeMakeContext(initial))

/* @internal */
export const fiberRefMakeRuntimeFlags = (
  initial: RuntimeFlags.RuntimeFlags
): Effect.Effect<FiberRef.FiberRef<RuntimeFlags.RuntimeFlags>, never, Scope.Scope> =>
  fiberRefMakeWith(() => core.fiberRefUnsafeMakeRuntimeFlags(initial))

/** @internal */
export const currentRuntimeFlags: FiberRef.FiberRef<RuntimeFlags.RuntimeFlags> = core.fiberRefUnsafeMakeRuntimeFlags(
  runtimeFlags_.none
)

/** @internal */
export const currentSupervisor: FiberRef.FiberRef<Supervisor.Supervisor<any>> = fiberRefUnsafeMakeSupervisor(
  supervisor.none
)

// circular with Fiber

/* @internal */
export const fiberAwaitAll = <const T extends Iterable<Fiber.Fiber<any, any>>>(
  fibers: T
): Effect.Effect<
  [T] extends [ReadonlyArray<infer U>]
    ? number extends T["length"] ? Array<U extends Fiber.Fiber<infer A, infer E> ? Exit.Exit<A, E> : never>
    : { -readonly [K in keyof T]: T[K] extends Fiber.Fiber<infer A, infer E> ? Exit.Exit<A, E> : never }
    : Array<T extends Iterable<infer U> ? U extends Fiber.Fiber<infer A, infer E> ? Exit.Exit<A, E> : never : never>
> => forEach(fibers, internalFiber._await) as any

/** @internal */
export const fiberAll = <A, E>(fibers: Iterable<Fiber.Fiber<A, E>>): Fiber.Fiber<Array<A>, E> => {
  const _fiberAll = {
    ...Effectable.CommitPrototype,
    commit() {
      return internalFiber.join(this)
    },
    [internalFiber.FiberTypeId]: internalFiber.fiberVariance,
    id: () =>
      RA.fromIterable(fibers).reduce((id, fiber) => FiberId.combine(id, fiber.id()), FiberId.none as FiberId.FiberId),
    await: core.exit(forEachParUnbounded(fibers, (fiber) => core.flatten(fiber.await), false)),
    children: core.map(forEachParUnbounded(fibers, (fiber) => fiber.children, false), RA.flatten),
    inheritAll: core.forEachSequentialDiscard(fibers, (fiber) => fiber.inheritAll),
    poll: core.map(
      core.forEachSequential(fibers, (fiber) => fiber.poll),
      RA.reduceRight(
        Option.some<Exit.Exit<Array<A>, E>>(core.exitSucceed(new Array())),
        (optionB, optionA) => {
          switch (optionA._tag) {
            case "None": {
              return Option.none()
            }
            case "Some": {
              switch (optionB._tag) {
                case "None": {
                  return Option.none()
                }
                case "Some": {
                  return Option.some(
                    core.exitZipWith(optionA.value, optionB.value, {
                      onSuccess: (a, chunk) => [a, ...chunk],
                      onFailure: internalCause.parallel
                    })
                  )
                }
              }
            }
          }
        }
      )
    ),
    interruptAsFork: (fiberId: FiberId.FiberId) =>
      core.forEachSequentialDiscard(fibers, (fiber) => fiber.interruptAsFork(fiberId))
  }
  return _fiberAll
}

/* @internal */
export const fiberInterruptFork = <A, E>(self: Fiber.Fiber<A, E>): Effect.Effect<void> =>
  core.asVoid(forkDaemon(core.interruptFiber(self)))

/* @internal */
export const fiberJoinAll = <A, E>(fibers: Iterable<Fiber.Fiber<A, E>>): Effect.Effect<Array<A>, E> =>
  internalFiber.join(fiberAll(fibers))

/* @internal */
export const fiberScoped = <A, E>(self: Fiber.Fiber<A, E>): Effect.Effect<Fiber.Fiber<A, E>, never, Scope.Scope> =>
  acquireRelease(core.succeed(self), core.interruptFiber)

//
// circular race
//

/** @internal */
export const raceWith = dual<
  <A1, E1, R1, E, A, A2, E2, R2, A3, E3, R3>(
    other: Effect.Effect<A1, E1, R1>,
    options: {
      readonly onSelfDone: (exit: Exit.Exit<A, E>, fiber: Fiber.Fiber<A1, E1>) => Effect.Effect<A2, E2, R2>
      readonly onOtherDone: (exit: Exit.Exit<A1, E1>, fiber: Fiber.Fiber<A, E>) => Effect.Effect<A3, E3, R3>
    }
  ) => <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A3, E2 | E3, R | R1 | R2 | R3>,
  <A, E, R, A1, E1, R1, A2, E2, R2, A3, E3, R3>(
    self: Effect.Effect<A, E, R>,
    other: Effect.Effect<A1, E1, R1>,
    options: {
      readonly onSelfDone: (exit: Exit.Exit<A, E>, fiber: Fiber.Fiber<A1, E1>) => Effect.Effect<A2, E2, R2>
      readonly onOtherDone: (exit: Exit.Exit<A1, E1>, fiber: Fiber.Fiber<A, E>) => Effect.Effect<A3, E3, R3>
    }
  ) => Effect.Effect<A2 | A3, E2 | E3, R | R1 | R2 | R3>
>(3, (self, other, options) =>
  raceFibersWith(self, other, {
    onSelfWin: (winner, loser) =>
      core.flatMap(winner.await, (exit) => {
        switch (exit._tag) {
          case OpCodes.OP_SUCCESS: {
            return core.flatMap(
              winner.inheritAll,
              () => options.onSelfDone(exit, loser)
            )
          }
          case OpCodes.OP_FAILURE: {
            return options.onSelfDone(exit, loser)
          }
        }
      }),
    onOtherWin: (winner, loser) =>
      core.flatMap(winner.await, (exit) => {
        switch (exit._tag) {
          case OpCodes.OP_SUCCESS: {
            return core.flatMap(
              winner.inheritAll,
              () => options.onOtherDone(exit, loser)
            )
          }
          case OpCodes.OP_FAILURE: {
            return options.onOtherDone(exit, loser)
          }
        }
      })
  }))

/** @internal */
export const disconnect = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  core.uninterruptibleMask((restore) =>
    core.fiberIdWith((fiberId) =>
      core.flatMap(forkDaemon(restore(self)), (fiber) =>
        pipe(
          restore(internalFiber.join(fiber)),
          core.onInterrupt(() => pipe(fiber, internalFiber.interruptAsFork(fiberId)))
        ))
    )
  )

/** @internal */
export const race = dual<
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>
  ) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<A | A2, E | E2, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<A | A2, E | E2, R | R2>
>(
  2,
  (self, that) =>
    core.fiberIdWith((parentFiberId) =>
      raceWith(self, that, {
        onSelfDone: (exit, right) =>
          core.exitMatchEffect(exit, {
            onFailure: (cause) =>
              pipe(
                internalFiber.join(right),
                internalEffect.mapErrorCause((cause2) => internalCause.parallel(cause, cause2))
              ),
            onSuccess: (value) =>
              pipe(
                right,
                core.interruptAsFiber(parentFiberId),
                core.as(value)
              )
          }),
        onOtherDone: (exit, left) =>
          core.exitMatchEffect(exit, {
            onFailure: (cause) =>
              pipe(
                internalFiber.join(left),
                internalEffect.mapErrorCause((cause2) => internalCause.parallel(cause2, cause))
              ),
            onSuccess: (value) =>
              pipe(
                left,
                core.interruptAsFiber(parentFiberId),
                core.as(value)
              )
          })
      })
    )
)

/** @internal */
export const raceFibersWith = dual<
  <A1, E1, R1, E, A, A2, E2, R2, A3, E3, R3>(
    other: Effect.Effect<A1, E1, R1>,
    options: {
      readonly onSelfWin: (
        winner: Fiber.RuntimeFiber<A, E>,
        loser: Fiber.RuntimeFiber<A1, E1>
      ) => Effect.Effect<A2, E2, R2>
      readonly onOtherWin: (
        winner: Fiber.RuntimeFiber<A1, E1>,
        loser: Fiber.RuntimeFiber<A, E>
      ) => Effect.Effect<A3, E3, R3>
      readonly selfScope?: fiberScope.FiberScope | undefined
      readonly otherScope?: fiberScope.FiberScope | undefined
    }
  ) => <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A3, E2 | E3, R | R1 | R2 | R3>,
  <A, E, R, A1, E1, R1, A2, E2, R2, A3, E3, R3>(
    self: Effect.Effect<A, E, R>,
    other: Effect.Effect<A1, E1, R1>,
    options: {
      readonly onSelfWin: (
        winner: Fiber.RuntimeFiber<A, E>,
        loser: Fiber.RuntimeFiber<A1, E1>
      ) => Effect.Effect<A2, E2, R2>
      readonly onOtherWin: (
        winner: Fiber.RuntimeFiber<A1, E1>,
        loser: Fiber.RuntimeFiber<A, E>
      ) => Effect.Effect<A3, E3, R3>
      readonly selfScope?: fiberScope.FiberScope | undefined
      readonly otherScope?: fiberScope.FiberScope | undefined
    }
  ) => Effect.Effect<A2 | A3, E2 | E3, R | R1 | R2 | R3>
>(3, <A, E, R, A1, E1, R1, A2, E2, R2, A3, E3, R3>(
  self: Effect.Effect<A, E, R>,
  other: Effect.Effect<A1, E1, R1>,
  options: {
    readonly onSelfWin: (
      winner: Fiber.RuntimeFiber<A, E>,
      loser: Fiber.RuntimeFiber<A1, E1>
    ) => Effect.Effect<A2, E2, R2>
    readonly onOtherWin: (
      winner: Fiber.RuntimeFiber<A1, E1>,
      loser: Fiber.RuntimeFiber<A, E>
    ) => Effect.Effect<A3, E3, R3>
    readonly selfScope?: fiberScope.FiberScope | undefined
    readonly otherScope?: fiberScope.FiberScope | undefined
  }
) =>
  core.withFiberRuntime((parentFiber, parentStatus) => {
    const parentRuntimeFlags = parentStatus.runtimeFlags
    const raceIndicator = MRef.make(true)
    const leftFiber: FiberRuntime<A, E> = unsafeMakeChildFiber(
      self,
      parentFiber,
      parentRuntimeFlags,
      options.selfScope
    )
    const rightFiber: FiberRuntime<A1, E1> = unsafeMakeChildFiber(
      other,
      parentFiber,
      parentRuntimeFlags,
      options.otherScope
    )
    return core.async((cb) => {
      leftFiber.addObserver(() => completeRace(leftFiber, rightFiber, options.onSelfWin, raceIndicator, cb))
      rightFiber.addObserver(() => completeRace(rightFiber, leftFiber, options.onOtherWin, raceIndicator, cb))
      leftFiber.startFork(self)
      rightFiber.startFork(other)
    }, FiberId.combine(leftFiber.id(), rightFiber.id()))
  }))

const completeRace = <A2, A3, E2, E3, R, R1, R2, R3>(
  winner: Fiber.RuntimeFiber<any, any>,
  loser: Fiber.RuntimeFiber<any, any>,
  cont: (winner: Fiber.RuntimeFiber<any, any>, loser: Fiber.RuntimeFiber<any, any>) => Effect.Effect<any, any, any>,
  ab: MRef.MutableRef<boolean>,
  cb: (_: Effect.Effect<A2 | A3, E2 | E3, R | R1 | R2 | R3>) => void
): void => {
  if (MRef.compareAndSet(true, false)(ab)) {
    cb(cont(winner, loser))
  }
}

/** @internal */
export const ensuring: {
  <X, R1>(
    finalizer: Effect.Effect<X, never, R1>
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R1 | R>
  <A, E, R, X, R1>(self: Effect.Effect<A, E, R>, finalizer: Effect.Effect<X, never, R1>): Effect.Effect<A, E, R1 | R>
} = dual(
  2,
  <A, E, R, X, R1>(self: Effect.Effect<A, E, R>, finalizer: Effect.Effect<X, never, R1>): Effect.Effect<A, E, R1 | R> =>
    core.uninterruptibleMask((restore) =>
      core.matchCauseEffect(restore(self), {
        onFailure: (cause1) =>
          core.matchCauseEffect(finalizer, {
            onFailure: (cause2) => core.failCause(internalCause.sequential(cause1, cause2)),
            onSuccess: () => core.failCause(cause1)
          }),
        onSuccess: (a) => core.as(finalizer, a)
      })
    )
)

/** @internal */
export const invokeWithInterrupt: <A, E, R>(
  self: Effect.Effect<A, E, R>,
  entries: ReadonlyArray<Entry<unknown>>,
  onInterrupt?: () => void
) => Effect.Effect<void, E, R> = <A, E, R>(
  self: Effect.Effect<A, E, R>,
  entries: ReadonlyArray<Entry<unknown>>,
  onInterrupt?: () => void
) =>
  core.fiberIdWith((id) =>
    core.flatMap(
      core.flatMap(
        forkDaemon(core.interruptible(self)),
        (processing) =>
          core.async<void, E>((cb) => {
            const counts = entries.map((_) => _.listeners.count)
            const checkDone = () => {
              if (counts.every((count) => count === 0)) {
                if (
                  entries.every((_) => {
                    if (_.result.state.current._tag === "Pending") {
                      return true
                    } else if (
                      _.result.state.current._tag === "Done" &&
                      core.exitIsExit(_.result.state.current.effect) &&
                      _.result.state.current.effect._tag === "Failure" &&
                      internalCause.isInterrupted(_.result.state.current.effect.cause)
                    ) {
                      return true
                    } else {
                      return false
                    }
                  })
                ) {
                  cleanup.forEach((f) => f())
                  onInterrupt?.()
                  cb(core.interruptFiber(processing))
                }
              }
            }
            processing.addObserver((exit) => {
              cleanup.forEach((f) => f())
              cb(exit)
            })
            const cleanup = entries.map((r, i) => {
              const observer = (count: number) => {
                counts[i] = count
                checkDone()
              }
              r.listeners.addObserver(observer)
              return () => r.listeners.removeObserver(observer)
            })
            checkDone()
            return core.sync(() => {
              cleanup.forEach((f) => f())
            })
          })
      ),
      () =>
        core.suspend(() => {
          const residual = entries.flatMap((entry) => {
            if (!entry.state.completed) {
              return [entry]
            }
            return []
          })
          return core.forEachSequentialDiscard(
            residual,
            (entry) => complete(entry.request as any, core.exitInterrupt(id))
          )
        })
    )
  )

/** @internal */
export const interruptWhenPossible = dual<
  (all: Iterable<Request<any, any>>) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<void, E, R>,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    all: Iterable<Request<any, any>>
  ) => Effect.Effect<void, E, R>
>(2, (self, all) =>
  core.fiberRefGetWith(
    currentRequestMap,
    (map) =>
      core.suspend(() => {
        const entries = RA.fromIterable(all).flatMap((_) => map.has(_) ? [map.get(_)!] : [])
        return invokeWithInterrupt(self, entries)
      })
  ))

// circular Tracer

/** @internal */
export const makeSpanScoped = (
  name: string,
  options?: Tracer.SpanOptions | undefined
): Effect.Effect<Tracer.Span, never, Scope.Scope> => {
  options = tracer.addSpanStackTrace(options)
  return core.uninterruptible(
    core.withFiberRuntime((fiber) => {
      const scope = Context.unsafeGet(fiber.getFiberRef(core.currentContext), scopeTag)
      const span = internalEffect.unsafeMakeSpan(fiber, name, options)
      const timingEnabled = fiber.getFiberRef(core.currentTracerTimingEnabled)
      const clock_ = Context.get(fiber.getFiberRef(defaultServices.currentServices), clock.clockTag)
      return core.as(
        core.scopeAddFinalizerExit(scope, (exit) => internalEffect.endSpan(span, exit, clock_, timingEnabled)),
        span
      )
    })
  )
}

/* @internal */
export const withTracerScoped = (value: Tracer.Tracer): Effect.Effect<void, never, Scope.Scope> =>
  fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(tracer.tracerTag, value))

/** @internal */
export const withSpanScoped: {
  (
    name: string,
    options?: Tracer.SpanOptions
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Scope.Scope | Exclude<R, Tracer.ParentSpan>>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    name: string,
    options?: Tracer.SpanOptions
  ): Effect.Effect<A, E, Scope.Scope | Exclude<R, Tracer.ParentSpan>>
} = function() {
  const dataFirst = typeof arguments[0] !== "string"
  const name = dataFirst ? arguments[1] : arguments[0]
  const options = tracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1])
  if (dataFirst) {
    const self = arguments[0]
    return core.flatMap(
      makeSpanScoped(name, tracer.addSpanStackTrace(options)),
      (span) => internalEffect.provideService(self, tracer.spanTag, span)
    )
  }
  return (self: Effect.Effect<any, any, any>) =>
    core.flatMap(
      makeSpanScoped(name, tracer.addSpanStackTrace(options)),
      (span) => internalEffect.provideService(self, tracer.spanTag, span)
    )
} as any

import * as RA from "../Array.js";
import * as Boolean from "../Boolean.js";
import * as Chunk from "../Chunk.js";
import * as Context from "../Context.js";
import * as Effectable from "../Effectable.js";
import * as ExecutionStrategy from "../ExecutionStrategy.js";
import * as FiberId from "../FiberId.js";
import * as FiberRefs from "../FiberRefs.js";
import * as FiberRefsPatch from "../FiberRefsPatch.js";
import * as FiberStatus from "../FiberStatus.js";
import { dual, identity, pipe } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import * as HashMap from "../HashMap.js";
import * as HashSet from "../HashSet.js";
import * as Inspectable from "../Inspectable.js";
import * as LogLevel from "../LogLevel.js";
import * as Micro from "../Micro.js";
import * as MRef from "../MutableRef.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import * as Predicate from "../Predicate.js";
import * as Ref from "../Ref.js";
import * as RuntimeFlagsPatch from "../RuntimeFlagsPatch.js";
import { currentScheduler } from "../Scheduler.js";
import { internalCall, yieldWrapGet } from "../Utils.js";
import * as RequestBlock_ from "./blockedRequests.js";
import * as internalCause from "./cause.js";
import * as clock from "./clock.js";
import { currentRequestMap } from "./completedRequestMap.js";
import * as concurrency from "./concurrency.js";
import { configProviderTag } from "./configProvider.js";
import * as internalEffect from "./core-effect.js";
import * as core from "./core.js";
import * as defaultServices from "./defaultServices.js";
import { consoleTag } from "./defaultServices/console.js";
import * as executionStrategy from "./executionStrategy.js";
import * as internalFiber from "./fiber.js";
import * as FiberMessage from "./fiberMessage.js";
import * as fiberRefs from "./fiberRefs.js";
import * as fiberScope from "./fiberScope.js";
import * as internalLogger from "./logger.js";
import * as metric from "./metric.js";
import * as metricBoundaries from "./metric/boundaries.js";
import * as metricLabel from "./metric/label.js";
import * as OpCodes from "./opCodes/effect.js";
import { randomTag } from "./random.js";
import { complete } from "./request.js";
import * as runtimeFlags_ from "./runtimeFlags.js";
import { OpSupervision } from "./runtimeFlags.js";
import * as supervisor from "./supervisor.js";
import * as SupervisorPatch from "./supervisor/patch.js";
import * as tracer from "./tracer.js";
import * as version from "./version.js";
/** @internal */
export const fiberStarted = /*#__PURE__*/metric.counter("effect_fiber_started", {
  incremental: true
});
/** @internal */
export const fiberActive = /*#__PURE__*/metric.counter("effect_fiber_active");
/** @internal */
export const fiberSuccesses = /*#__PURE__*/metric.counter("effect_fiber_successes", {
  incremental: true
});
/** @internal */
export const fiberFailures = /*#__PURE__*/metric.counter("effect_fiber_failures", {
  incremental: true
});
/** @internal */
export const fiberLifetimes = /*#__PURE__*/metric.tagged(/*#__PURE__*/metric.histogram("effect_fiber_lifetimes", /*#__PURE__*/metricBoundaries.exponential({
  start: 0.5,
  factor: 2,
  count: 35
})), "time_unit", "milliseconds");
/** @internal */
const EvaluationSignalContinue = "Continue";
/** @internal */
const EvaluationSignalDone = "Done";
/** @internal */
const EvaluationSignalYieldNow = "Yield";
const runtimeFiberVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
const absurd = _ => {
  throw new Error(`BUG: FiberRuntime - ${Inspectable.toStringUnknown(_)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
};
const YieldedOp = /*#__PURE__*/Symbol.for("effect/internal/fiberRuntime/YieldedOp");
const yieldedOpChannel = /*#__PURE__*/globalValue("effect/internal/fiberRuntime/yieldedOpChannel", () => ({
  currentOp: null
}));
const contOpSuccess = {
  [OpCodes.OP_ON_SUCCESS]: (_, cont, value) => {
    return internalCall(() => cont.effect_instruction_i1(value));
  },
  ["OnStep"]: (_, _cont, value) => {
    return core.exitSucceed(core.exitSucceed(value));
  },
  [OpCodes.OP_ON_SUCCESS_AND_FAILURE]: (_, cont, value) => {
    return internalCall(() => cont.effect_instruction_i2(value));
  },
  [OpCodes.OP_REVERT_FLAGS]: (self, cont, value) => {
    self.patchRuntimeFlags(self.currentRuntimeFlags, cont.patch);
    if (runtimeFlags_.interruptible(self.currentRuntimeFlags) && self.isInterrupted()) {
      return core.exitFailCause(self.getInterruptedCause());
    } else {
      return core.exitSucceed(value);
    }
  },
  [OpCodes.OP_WHILE]: (self, cont, value) => {
    internalCall(() => cont.effect_instruction_i2(value));
    if (internalCall(() => cont.effect_instruction_i0())) {
      self.pushStack(cont);
      return internalCall(() => cont.effect_instruction_i1());
    } else {
      return core.void;
    }
  },
  [OpCodes.OP_ITERATOR]: (self, cont, value) => {
    while (true) {
      const state = internalCall(() => cont.effect_instruction_i0.next(value));
      if (state.done) {
        return core.exitSucceed(state.value);
      }
      const primitive = yieldWrapGet(state.value);
      if (!core.exitIsExit(primitive)) {
        self.pushStack(cont);
        return primitive;
      } else if (primitive._tag === "Failure") {
        return primitive;
      }
      value = primitive.value;
    }
  }
};
const drainQueueWhileRunningTable = {
  [FiberMessage.OP_INTERRUPT_SIGNAL]: (self, runtimeFlags, cur, message) => {
    self.processNewInterruptSignal(message.cause);
    return runtimeFlags_.interruptible(runtimeFlags) ? core.exitFailCause(message.cause) : cur;
  },
  [FiberMessage.OP_RESUME]: (_self, _runtimeFlags, _cur, _message) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
  },
  [FiberMessage.OP_STATEFUL]: (self, runtimeFlags, cur, message) => {
    message.onFiber(self, FiberStatus.running(runtimeFlags));
    return cur;
  },
  [FiberMessage.OP_YIELD_NOW]: (_self, _runtimeFlags, cur, _message) => {
    return core.flatMap(core.yieldNow(), () => cur);
  }
};
/**
 * Executes all requests, submitting requests to each data source in parallel.
 */
const runBlockedRequests = self => core.forEachSequentialDiscard(RequestBlock_.flatten(self), requestsByRequestResolver => forEachConcurrentDiscard(RequestBlock_.sequentialCollectionToChunk(requestsByRequestResolver), ([dataSource, sequential]) => {
  const map = new Map();
  const arr = [];
  for (const block of sequential) {
    arr.push(Chunk.toReadonlyArray(block));
    for (const entry of block) {
      map.set(entry.request, entry);
    }
  }
  const flat = arr.flat();
  return core.fiberRefLocally(invokeWithInterrupt(dataSource.runAll(arr), flat, () => flat.forEach(entry => {
    entry.listeners.interrupted = true;
  })), currentRequestMap, map);
}, false, false));
const _version = /*#__PURE__*/version.getCurrentVersion();
/** @internal */
export class FiberRuntime extends Effectable.Class {
  [internalFiber.FiberTypeId] = internalFiber.fiberVariance;
  [internalFiber.RuntimeFiberTypeId] = runtimeFiberVariance;
  _fiberRefs;
  _fiberId;
  _queue = /*#__PURE__*/new Array();
  _children = null;
  _observers = /*#__PURE__*/new Array();
  _running = false;
  _stack = [];
  _asyncInterruptor = null;
  _asyncBlockingOn = null;
  _exitValue = null;
  _steps = [];
  _isYielding = false;
  currentRuntimeFlags;
  currentOpCount = 0;
  currentSupervisor;
  currentScheduler;
  currentTracer;
  currentSpan;
  currentContext;
  currentDefaultServices;
  constructor(fiberId, fiberRefs0, runtimeFlags0) {
    super();
    this.currentRuntimeFlags = runtimeFlags0;
    this._fiberId = fiberId;
    this._fiberRefs = fiberRefs0;
    if (runtimeFlags_.runtimeMetrics(runtimeFlags0)) {
      const tags = this.getFiberRef(core.currentMetricLabels);
      fiberStarted.unsafeUpdate(1, tags);
      fiberActive.unsafeUpdate(1, tags);
    }
    this.refreshRefCache();
  }
  commit() {
    return internalFiber.join(this);
  }
  /**
   * The identity of the fiber.
   */
  id() {
    return this._fiberId;
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background. This can be called to "kick off" execution of a fiber after
   * it has been created.
   */
  resume(effect) {
    this.tell(FiberMessage.resume(effect));
  }
  /**
   * The status of the fiber.
   */
  get status() {
    return this.ask((_, status) => status);
  }
  /**
   * Gets the fiber runtime flags.
   */
  get runtimeFlags() {
    return this.ask((state, status) => {
      if (FiberStatus.isDone(status)) {
        return state.currentRuntimeFlags;
      }
      return status.runtimeFlags;
    });
  }
  /**
   * Returns the current `FiberScope` for the fiber.
   */
  scope() {
    return fiberScope.unsafeMake(this);
  }
  /**
   * Retrieves the immediate children of the fiber.
   */
  get children() {
    return this.ask(fiber => Array.from(fiber.getChildren()));
  }
  /**
   * Gets the fiber's set of children.
   */
  getChildren() {
    if (this._children === null) {
      this._children = new Set();
    }
    return this._children;
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
    return this.getFiberRef(core.currentInterruptedCause);
  }
  /**
   * Retrieves the whole set of fiber refs.
   */
  fiberRefs() {
    return this.ask(fiber => fiber.getFiberRefs());
  }
  /**
   * Returns an effect that will contain information computed from the fiber
   * state and status while running on the fiber.
   *
   * This allows the outside world to interact safely with mutable fiber state
   * without locks or immutable data.
   */
  ask(f) {
    return core.suspend(() => {
      const deferred = core.deferredUnsafeMake(this._fiberId);
      this.tell(FiberMessage.stateful((fiber, status) => {
        core.deferredUnsafeDone(deferred, core.sync(() => f(fiber, status)));
      }));
      return core.deferredAwait(deferred);
    });
  }
  /**
   * Adds a message to be processed by the fiber on the fiber.
   */
  tell(message) {
    this._queue.push(message);
    if (!this._running) {
      this._running = true;
      this.drainQueueLaterOnExecutor();
    }
  }
  get await() {
    return core.async(resume => {
      const cb = exit => resume(core.succeed(exit));
      if (this._exitValue !== null) {
        cb(this._exitValue);
        return;
      }
      this.tell(FiberMessage.stateful((fiber, _) => {
        if (fiber._exitValue !== null) {
          cb(this._exitValue);
        } else {
          fiber.addObserver(cb);
        }
      }));
      return core.sync(() => this.tell(FiberMessage.stateful((fiber, _) => {
        fiber.removeObserver(cb);
      })));
    }, this.id());
  }
  get inheritAll() {
    return core.withFiberRuntime((parentFiber, parentStatus) => {
      const parentFiberId = parentFiber.id();
      const parentFiberRefs = parentFiber.getFiberRefs();
      const parentRuntimeFlags = parentStatus.runtimeFlags;
      const childFiberRefs = this.getFiberRefs();
      const updatedFiberRefs = fiberRefs.joinAs(parentFiberRefs, parentFiberId, childFiberRefs);
      parentFiber.setFiberRefs(updatedFiberRefs);
      const updatedRuntimeFlags = parentFiber.getFiberRef(currentRuntimeFlags);
      const patch = pipe(runtimeFlags_.diff(parentRuntimeFlags, updatedRuntimeFlags),
      // Do not inherit WindDown or Interruption!
      RuntimeFlagsPatch.exclude(runtimeFlags_.Interruption), RuntimeFlagsPatch.exclude(runtimeFlags_.WindDown));
      return core.updateRuntimeFlags(patch);
    });
  }
  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  get poll() {
    return core.sync(() => Option.fromNullable(this._exitValue));
  }
  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll() {
    return this._exitValue;
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  interruptAsFork(fiberId) {
    return core.sync(() => this.tell(FiberMessage.interruptSignal(internalCause.interrupt(fiberId))));
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  unsafeInterruptAsFork(fiberId) {
    this.tell(FiberMessage.interruptSignal(internalCause.interrupt(fiberId)));
  }
  /**
   * Adds an observer to the list of observers.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addObserver(observer) {
    if (this._exitValue !== null) {
      observer(this._exitValue);
    } else {
      this._observers.push(observer);
    }
  }
  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeObserver(observer) {
    this._observers = this._observers.filter(o => o !== observer);
  }
  /**
   * Retrieves all fiber refs of the fiber.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRefs() {
    this.setFiberRef(currentRuntimeFlags, this.currentRuntimeFlags);
    return this._fiberRefs;
  }
  /**
   * Deletes the specified fiber ref.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeDeleteFiberRef(fiberRef) {
    this._fiberRefs = fiberRefs.delete_(this._fiberRefs, fiberRef);
  }
  /**
   * Retrieves the state of the fiber ref, or else its initial value.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRef(fiberRef) {
    if (this._fiberRefs.locals.has(fiberRef)) {
      return this._fiberRefs.locals.get(fiberRef)[0][1];
    }
    return fiberRef.initial;
  }
  /**
   * Sets the fiber ref to the specified value.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRef(fiberRef, value) {
    this._fiberRefs = fiberRefs.updateAs(this._fiberRefs, {
      fiberId: this._fiberId,
      fiberRef,
      value
    });
    this.refreshRefCache();
  }
  refreshRefCache() {
    this.currentDefaultServices = this.getFiberRef(defaultServices.currentServices);
    this.currentTracer = this.currentDefaultServices.unsafeMap.get(tracer.tracerTag.key);
    this.currentSupervisor = this.getFiberRef(currentSupervisor);
    this.currentScheduler = this.getFiberRef(currentScheduler);
    this.currentContext = this.getFiberRef(core.currentContext);
    this.currentSpan = this.currentContext.unsafeMap.get(tracer.spanTag.key);
  }
  /**
   * Wholesale replaces all fiber refs of this fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRefs(fiberRefs) {
    this._fiberRefs = fiberRefs;
    this.refreshRefCache();
  }
  /**
   * Adds a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addChild(child) {
    this.getChildren().add(child);
  }
  /**
   * Removes a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeChild(child) {
    this.getChildren().delete(child);
  }
  /**
   * Transfers all children of this fiber that are currently running to the
   * specified fiber scope.
   *
   * **NOTE**: This method must be invoked by the fiber itself after it has
   * evaluated the effects but prior to exiting.
   */
  transferChildren(scope) {
    const children = this._children;
    // Clear the children of the current fiber
    this._children = null;
    if (children !== null && children.size > 0) {
      for (const child of children) {
        // If the child is still running, add it to the scope
        if (child._exitValue === null) {
          scope.add(this.currentRuntimeFlags, child);
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
    let recurse = true;
    while (recurse) {
      let evaluationSignal = EvaluationSignalContinue;
      const prev = globalThis[internalFiber.currentFiberURI];
      globalThis[internalFiber.currentFiberURI] = this;
      try {
        while (evaluationSignal === EvaluationSignalContinue) {
          evaluationSignal = this._queue.length === 0 ? EvaluationSignalDone : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
        }
      } finally {
        this._running = false;
        globalThis[internalFiber.currentFiberURI] = prev;
      }
      // Maybe someone added something to the queue between us checking, and us
      // giving up the drain. If so, we need to restart the draining, but only
      // if we beat everyone else to the restart:
      if (this._queue.length > 0 && !this._running) {
        this._running = true;
        if (evaluationSignal === EvaluationSignalYieldNow) {
          this.drainQueueLaterOnExecutor();
          recurse = false;
        } else {
          recurse = true;
        }
      } else {
        recurse = false;
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
    this.currentScheduler.scheduleTask(this.run, this.getFiberRef(core.currentSchedulingPriority), this);
  }
  /**
   * Drains the fiber's message queue while the fiber is actively running,
   * returning the next effect to execute, which may be the input effect if no
   * additional effect needs to be executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueWhileRunning(runtimeFlags, cur0) {
    let cur = cur0;
    while (this._queue.length > 0) {
      const message = this._queue.splice(0, 1)[0];
      // @ts-expect-error
      cur = drainQueueWhileRunningTable[message._tag](this, runtimeFlags, cur, message);
    }
    return cur;
  }
  /**
   * Determines if the fiber is interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  isInterrupted() {
    return !internalCause.isEmpty(this.getFiberRef(core.currentInterruptedCause));
  }
  /**
   * Adds an interruptor to the set of interruptors that are interrupting this
   * fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addInterruptedCause(cause) {
    const oldSC = this.getFiberRef(core.currentInterruptedCause);
    this.setFiberRef(core.currentInterruptedCause, internalCause.sequential(oldSC, cause));
  }
  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(cause) {
    this.addInterruptedCause(cause);
    this.sendInterruptSignalToAllChildren();
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  sendInterruptSignalToAllChildren() {
    if (this._children === null || this._children.size === 0) {
      return false;
    }
    let told = false;
    for (const child of this._children) {
      child.tell(FiberMessage.interruptSignal(internalCause.interrupt(this.id())));
      told = true;
    }
    return told;
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
      const it = this._children.values();
      this._children = null;
      let isDone = false;
      const body = () => {
        const next = it.next();
        if (!next.done) {
          return core.asVoid(next.value.await);
        } else {
          return core.sync(() => {
            isDone = true;
          });
        }
      };
      return core.whileLoop({
        while: () => !isDone,
        body,
        step: () => {
          //
        }
      });
    }
    return null;
  }
  reportExitValue(exit) {
    if (runtimeFlags_.runtimeMetrics(this.currentRuntimeFlags)) {
      const tags = this.getFiberRef(core.currentMetricLabels);
      const startTimeMillis = this.id().startTimeMillis;
      const endTimeMillis = Date.now();
      fiberLifetimes.unsafeUpdate(endTimeMillis - startTimeMillis, tags);
      fiberActive.unsafeUpdate(-1, tags);
      switch (exit._tag) {
        case OpCodes.OP_SUCCESS:
          {
            fiberSuccesses.unsafeUpdate(1, tags);
            break;
          }
        case OpCodes.OP_FAILURE:
          {
            fiberFailures.unsafeUpdate(1, tags);
            break;
          }
      }
    }
    if (exit._tag === "Failure") {
      const level = this.getFiberRef(core.currentUnhandledErrorLogLevel);
      if (!internalCause.isInterruptedOnly(exit.cause) && level._tag === "Some") {
        this.log("Fiber terminated with an unhandled error", exit.cause, level);
      }
    }
  }
  setExitValue(exit) {
    this._exitValue = exit;
    this.reportExitValue(exit);
    for (let i = this._observers.length - 1; i >= 0; i--) {
      this._observers[i](exit);
    }
    this._observers = [];
  }
  getLoggers() {
    return this.getFiberRef(currentLoggers);
  }
  log(message, cause, overrideLogLevel) {
    const logLevel = Option.isSome(overrideLogLevel) ? overrideLogLevel.value : this.getFiberRef(core.currentLogLevel);
    const minimumLogLevel = this.getFiberRef(currentMinimumLogLevel);
    if (LogLevel.greaterThan(minimumLogLevel, logLevel)) {
      return;
    }
    const spans = this.getFiberRef(core.currentLogSpan);
    const annotations = this.getFiberRef(core.currentLogAnnotations);
    const loggers = this.getLoggers();
    const contextMap = this.getFiberRefs();
    if (HashSet.size(loggers) > 0) {
      const clockService = Context.get(this.getFiberRef(defaultServices.currentServices), clock.clockTag);
      const date = new Date(clockService.unsafeCurrentTimeMillis());
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
          });
        }
      });
    }
  }
  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(message) {
    switch (message._tag) {
      case FiberMessage.OP_YIELD_NOW:
        {
          return EvaluationSignalYieldNow;
        }
      case FiberMessage.OP_INTERRUPT_SIGNAL:
        {
          this.processNewInterruptSignal(message.cause);
          if (this._asyncInterruptor !== null) {
            this._asyncInterruptor(core.exitFailCause(message.cause));
            this._asyncInterruptor = null;
          }
          return EvaluationSignalContinue;
        }
      case FiberMessage.OP_RESUME:
        {
          this._asyncInterruptor = null;
          this._asyncBlockingOn = null;
          this.evaluateEffect(message.effect);
          return EvaluationSignalContinue;
        }
      case FiberMessage.OP_STATEFUL:
        {
          message.onFiber(this, this._exitValue !== null ? FiberStatus.done : FiberStatus.suspended(this.currentRuntimeFlags, this._asyncBlockingOn));
          return EvaluationSignalContinue;
        }
      default:
        {
          return absurd(message);
        }
    }
  }
  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(effect0) {
    this.currentSupervisor.onResume(this);
    try {
      let effect = runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted() ? core.exitFailCause(this.getInterruptedCause()) : effect0;
      while (effect !== null) {
        const eff = effect;
        const exit = this.runLoop(eff);
        if (exit === YieldedOp) {
          const op = yieldedOpChannel.currentOp;
          yieldedOpChannel.currentOp = null;
          if (op._op === OpCodes.OP_YIELD) {
            if (runtimeFlags_.cooperativeYielding(this.currentRuntimeFlags)) {
              this.tell(FiberMessage.yieldNow());
              this.tell(FiberMessage.resume(core.exitVoid));
              effect = null;
            } else {
              effect = core.exitVoid;
            }
          } else if (op._op === OpCodes.OP_ASYNC) {
            // Terminate this evaluation, async resumption will continue evaluation:
            effect = null;
          }
        } else {
          this.currentRuntimeFlags = pipe(this.currentRuntimeFlags, runtimeFlags_.enable(runtimeFlags_.WindDown));
          const interruption = this.interruptAllChildren();
          if (interruption !== null) {
            effect = core.flatMap(interruption, () => exit);
          } else {
            if (this._queue.length === 0) {
              // No more messages to process, so we will allow the fiber to end life:
              this.setExitValue(exit);
            } else {
              // There are messages, possibly added by the final op executed by
              // the fiber. To be safe, we should execute those now before we
              // allow the fiber to end life:
              this.tell(FiberMessage.resume(exit));
            }
            effect = null;
          }
        }
      }
    } finally {
      this.currentSupervisor.onSuspend(this);
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
  start(effect) {
    if (!this._running) {
      this._running = true;
      const prev = globalThis[internalFiber.currentFiberURI];
      globalThis[internalFiber.currentFiberURI] = this;
      try {
        this.evaluateEffect(effect);
      } finally {
        this._running = false;
        globalThis[internalFiber.currentFiberURI] = prev;
        // Because we're special casing `start`, we have to be responsible
        // for spinning up the fiber if there were new messages added to
        // the queue between the completion of the effect and the transition
        // to the not running state.
        if (this._queue.length > 0) {
          this.drainQueueLaterOnExecutor();
        }
      }
    } else {
      this.tell(FiberMessage.resume(effect));
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork(effect) {
    this.tell(FiberMessage.resume(effect));
  }
  /**
   * Takes the current runtime flags, patches them to return the new runtime
   * flags, and then makes any changes necessary to fiber state based on the
   * specified patch.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  patchRuntimeFlags(oldRuntimeFlags, patch) {
    const newRuntimeFlags = runtimeFlags_.patch(oldRuntimeFlags, patch);
    globalThis[internalFiber.currentFiberURI] = this;
    this.currentRuntimeFlags = newRuntimeFlags;
    return newRuntimeFlags;
  }
  /**
   * Initiates an asynchronous operation, by building a callback that will
   * resume execution, and then feeding that callback to the registration
   * function, handling error cases and repeated resumptions appropriately.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  initiateAsync(runtimeFlags, asyncRegister) {
    let alreadyCalled = false;
    const callback = effect => {
      if (!alreadyCalled) {
        alreadyCalled = true;
        this.tell(FiberMessage.resume(effect));
      }
    };
    if (runtimeFlags_.interruptible(runtimeFlags)) {
      this._asyncInterruptor = callback;
    }
    try {
      asyncRegister(callback);
    } catch (e) {
      callback(core.failCause(internalCause.die(e)));
    }
  }
  pushStack(cont) {
    this._stack.push(cont);
    if (cont._op === "OnStep") {
      this._steps.push({
        refs: this.getFiberRefs(),
        flags: this.currentRuntimeFlags
      });
    }
  }
  popStack() {
    const item = this._stack.pop();
    if (item) {
      if (item._op === "OnStep") {
        this._steps.pop();
      }
      return item;
    }
    return;
  }
  getNextSuccessCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OpCodes.OP_ON_FAILURE) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  getNextFailCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OpCodes.OP_ON_SUCCESS && frame._op !== OpCodes.OP_WHILE && frame._op !== OpCodes.OP_ITERATOR) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  [OpCodes.OP_TAG](op) {
    return core.sync(() => Context.unsafeGet(this.currentContext, op));
  }
  ["Left"](op) {
    return core.fail(op.left);
  }
  ["None"](_) {
    return core.fail(new core.NoSuchElementException());
  }
  ["Right"](op) {
    return core.exitSucceed(op.right);
  }
  ["Some"](op) {
    return core.exitSucceed(op.value);
  }
  ["Micro"](op) {
    return core.unsafeAsync(microResume => {
      let resume = microResume;
      const fiber = Micro.runFork(Micro.provideContext(op, this.currentContext));
      fiber.addObserver(exit => {
        if (exit._tag === "Success") {
          return resume(core.exitSucceed(exit.value));
        }
        switch (exit.cause._tag) {
          case "Interrupt":
            {
              return resume(core.exitFailCause(internalCause.interrupt(FiberId.none)));
            }
          case "Fail":
            {
              return resume(core.fail(exit.cause.error));
            }
          case "Die":
            {
              return resume(core.die(exit.cause.defect));
            }
        }
      });
      return core.unsafeAsync(abortResume => {
        resume = _ => {
          abortResume(core.void);
        };
        fiber.unsafeInterrupt();
      });
    });
  }
  [OpCodes.OP_SYNC](op) {
    const value = internalCall(() => op.effect_instruction_i0());
    const cont = this.getNextSuccessCont();
    if (cont !== undefined) {
      if (!(cont._op in contOpSuccess)) {
        // @ts-expect-error
        absurd(cont);
      }
      // @ts-expect-error
      return contOpSuccess[cont._op](this, cont, value);
    } else {
      yieldedOpChannel.currentOp = core.exitSucceed(value);
      return YieldedOp;
    }
  }
  [OpCodes.OP_SUCCESS](op) {
    const oldCur = op;
    const cont = this.getNextSuccessCont();
    if (cont !== undefined) {
      if (!(cont._op in contOpSuccess)) {
        // @ts-expect-error
        absurd(cont);
      }
      // @ts-expect-error
      return contOpSuccess[cont._op](this, cont, oldCur.effect_instruction_i0);
    } else {
      yieldedOpChannel.currentOp = oldCur;
      return YieldedOp;
    }
  }
  [OpCodes.OP_FAILURE](op) {
    const cause = op.effect_instruction_i0;
    const cont = this.getNextFailCont();
    if (cont !== undefined) {
      switch (cont._op) {
        case OpCodes.OP_ON_FAILURE:
        case OpCodes.OP_ON_SUCCESS_AND_FAILURE:
          {
            if (!(runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted())) {
              return internalCall(() => cont.effect_instruction_i1(cause));
            } else {
              return core.exitFailCause(internalCause.stripFailures(cause));
            }
          }
        case "OnStep":
          {
            if (!(runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted())) {
              return core.exitSucceed(core.exitFailCause(cause));
            } else {
              return core.exitFailCause(internalCause.stripFailures(cause));
            }
          }
        case OpCodes.OP_REVERT_FLAGS:
          {
            this.patchRuntimeFlags(this.currentRuntimeFlags, cont.patch);
            if (runtimeFlags_.interruptible(this.currentRuntimeFlags) && this.isInterrupted()) {
              return core.exitFailCause(internalCause.sequential(cause, this.getInterruptedCause()));
            } else {
              return core.exitFailCause(cause);
            }
          }
        default:
          {
            absurd(cont);
          }
      }
    } else {
      yieldedOpChannel.currentOp = core.exitFailCause(cause);
      return YieldedOp;
    }
  }
  [OpCodes.OP_WITH_RUNTIME](op) {
    return internalCall(() => op.effect_instruction_i0(this, FiberStatus.running(this.currentRuntimeFlags)));
  }
  ["Blocked"](op) {
    const refs = this.getFiberRefs();
    const flags = this.currentRuntimeFlags;
    if (this._steps.length > 0) {
      const frames = [];
      const snap = this._steps[this._steps.length - 1];
      let frame = this.popStack();
      while (frame && frame._op !== "OnStep") {
        frames.push(frame);
        frame = this.popStack();
      }
      this.setFiberRefs(snap.refs);
      this.currentRuntimeFlags = snap.flags;
      const patchRefs = FiberRefsPatch.diff(snap.refs, refs);
      const patchFlags = runtimeFlags_.diff(snap.flags, flags);
      return core.exitSucceed(core.blocked(op.effect_instruction_i0, core.withFiberRuntime(newFiber => {
        while (frames.length > 0) {
          newFiber.pushStack(frames.pop());
        }
        newFiber.setFiberRefs(FiberRefsPatch.patch(newFiber.id(), newFiber.getFiberRefs())(patchRefs));
        newFiber.currentRuntimeFlags = runtimeFlags_.patch(patchFlags)(newFiber.currentRuntimeFlags);
        return op.effect_instruction_i1;
      })));
    }
    return core.uninterruptibleMask(restore => core.flatMap(forkDaemon(core.runRequestBlock(op.effect_instruction_i0)), () => restore(op.effect_instruction_i1)));
  }
  ["RunBlocked"](op) {
    return runBlockedRequests(op.effect_instruction_i0);
  }
  [OpCodes.OP_UPDATE_RUNTIME_FLAGS](op) {
    const updateFlags = op.effect_instruction_i0;
    const oldRuntimeFlags = this.currentRuntimeFlags;
    const newRuntimeFlags = runtimeFlags_.patch(oldRuntimeFlags, updateFlags);
    // One more chance to short circuit: if we're immediately going
    // to interrupt. Interruption will cause immediate reversion of
    // the flag, so as long as we "peek ahead", there's no need to
    // set them to begin with.
    if (runtimeFlags_.interruptible(newRuntimeFlags) && this.isInterrupted()) {
      return core.exitFailCause(this.getInterruptedCause());
    } else {
      // Impossible to short circuit, so record the changes
      this.patchRuntimeFlags(this.currentRuntimeFlags, updateFlags);
      if (op.effect_instruction_i1) {
        // Since we updated the flags, we need to revert them
        const revertFlags = runtimeFlags_.diff(newRuntimeFlags, oldRuntimeFlags);
        this.pushStack(new core.RevertFlags(revertFlags, op));
        return internalCall(() => op.effect_instruction_i1(oldRuntimeFlags));
      } else {
        return core.exitVoid;
      }
    }
  }
  [OpCodes.OP_ON_SUCCESS](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  ["OnStep"](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OpCodes.OP_ON_FAILURE](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OpCodes.OP_ON_SUCCESS_AND_FAILURE](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OpCodes.OP_ASYNC](op) {
    this._asyncBlockingOn = op.effect_instruction_i1;
    this.initiateAsync(this.currentRuntimeFlags, op.effect_instruction_i0);
    yieldedOpChannel.currentOp = op;
    return YieldedOp;
  }
  [OpCodes.OP_YIELD](op) {
    this._isYielding = false;
    yieldedOpChannel.currentOp = op;
    return YieldedOp;
  }
  [OpCodes.OP_WHILE](op) {
    const check = op.effect_instruction_i0;
    const body = op.effect_instruction_i1;
    if (check()) {
      this.pushStack(op);
      return body();
    } else {
      return core.exitVoid;
    }
  }
  [OpCodes.OP_ITERATOR](op) {
    return contOpSuccess[OpCodes.OP_ITERATOR](this, op, undefined);
  }
  [OpCodes.OP_COMMIT](op) {
    return internalCall(() => op.commit());
  }
  /**
   * The main run-loop for evaluating effects.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  runLoop(effect0) {
    let cur = effect0;
    this.currentOpCount = 0;
    while (true) {
      if ((this.currentRuntimeFlags & OpSupervision) !== 0) {
        this.currentSupervisor.onEffect(this, cur);
      }
      if (this._queue.length > 0) {
        cur = this.drainQueueWhileRunning(this.currentRuntimeFlags, cur);
      }
      if (!this._isYielding) {
        this.currentOpCount += 1;
        const shouldYield = this.currentScheduler.shouldYield(this);
        if (shouldYield !== false) {
          this._isYielding = true;
          this.currentOpCount = 0;
          const oldCur = cur;
          cur = core.flatMap(core.yieldNow({
            priority: shouldYield
          }), () => oldCur);
        }
      }
      try {
        // @ts-expect-error
        cur = this.currentTracer.context(() => {
          if (_version !== cur[core.EffectTypeId]._V) {
            const level = this.getFiberRef(core.currentVersionMismatchErrorLogLevel);
            if (level._tag === "Some") {
              const effectVersion = cur[core.EffectTypeId]._V;
              this.log(`Executing an Effect versioned ${effectVersion} with a Runtime of version ${version.getCurrentVersion()}, you may want to dedupe the effect dependencies, you can use the language service plugin to detect this at compile time: https://github.com/Effect-TS/language-service`, internalCause.empty, level);
            }
          }
          // @ts-expect-error
          return this[cur._op](cur);
        }, this);
        if (cur === YieldedOp) {
          const op = yieldedOpChannel.currentOp;
          if (op._op === OpCodes.OP_YIELD || op._op === OpCodes.OP_ASYNC) {
            return YieldedOp;
          }
          yieldedOpChannel.currentOp = null;
          return op._op === OpCodes.OP_SUCCESS || op._op === OpCodes.OP_FAILURE ? op : core.exitFailCause(internalCause.die(op));
        }
      } catch (e) {
        if (cur !== YieldedOp && !Predicate.hasProperty(cur, "_op") || !(cur._op in this)) {
          cur = core.dieMessage(`Not a valid effect: ${Inspectable.toStringUnknown(cur)}`);
        } else if (core.isInterruptedException(e)) {
          cur = core.exitFailCause(internalCause.sequential(internalCause.die(e), internalCause.interrupt(FiberId.none)));
        } else {
          cur = core.die(e);
        }
      }
    }
  }
  run = () => {
    this.drainQueueOnCurrentThread();
  };
}
// circular with Logger
/** @internal */
export const currentMinimumLogLevel = /*#__PURE__*/globalValue("effect/FiberRef/currentMinimumLogLevel", () => core.fiberRefUnsafeMake(LogLevel.fromLiteral("Info")));
/** @internal */
export const loggerWithConsoleLog = self => internalLogger.makeLogger(opts => {
  const services = FiberRefs.getOrDefault(opts.context, defaultServices.currentServices);
  Context.get(services, consoleTag).unsafe.log(self.log(opts));
});
/** @internal */
export const loggerWithLeveledLog = self => internalLogger.makeLogger(opts => {
  const services = FiberRefs.getOrDefault(opts.context, defaultServices.currentServices);
  const unsafeLogger = Context.get(services, consoleTag).unsafe;
  switch (opts.logLevel._tag) {
    case "Debug":
      return unsafeLogger.debug(self.log(opts));
    case "Info":
      return unsafeLogger.info(self.log(opts));
    case "Trace":
      return unsafeLogger.trace(self.log(opts));
    case "Warning":
      return unsafeLogger.warn(self.log(opts));
    case "Error":
    case "Fatal":
      return unsafeLogger.error(self.log(opts));
    default:
      return unsafeLogger.log(self.log(opts));
  }
});
/** @internal */
export const loggerWithConsoleError = self => internalLogger.makeLogger(opts => {
  const services = FiberRefs.getOrDefault(opts.context, defaultServices.currentServices);
  Context.get(services, consoleTag).unsafe.error(self.log(opts));
});
/** @internal */
export const defaultLogger = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Logger/defaultLogger"), () => loggerWithConsoleLog(internalLogger.stringLogger));
/** @internal */
export const jsonLogger = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Logger/jsonLogger"), () => loggerWithConsoleLog(internalLogger.jsonLogger));
/** @internal */
export const logFmtLogger = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Logger/logFmtLogger"), () => loggerWithConsoleLog(internalLogger.logfmtLogger));
/** @internal */
export const prettyLogger = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Logger/prettyLogger"), () => internalLogger.prettyLoggerDefault);
/** @internal */
export const structuredLogger = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Logger/structuredLogger"), () => loggerWithConsoleLog(internalLogger.structuredLogger));
/** @internal */
export const tracerLogger = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Logger/tracerLogger"), () => internalLogger.makeLogger(({
  annotations,
  cause,
  context,
  fiberId,
  logLevel,
  message
}) => {
  const span = internalEffect.filterDisablePropagation(Context.getOption(fiberRefs.getOrDefault(context, core.currentContext), tracer.spanTag));
  if (span._tag === "None" || span.value._tag === "ExternalSpan") {
    return;
  }
  const clockService = Context.unsafeGet(fiberRefs.getOrDefault(context, defaultServices.currentServices), clock.clockTag);
  const attributes = {};
  for (const [key, value] of annotations) {
    attributes[key] = value;
  }
  attributes["effect.fiberId"] = FiberId.threadName(fiberId);
  attributes["effect.logLevel"] = logLevel.label;
  if (cause !== null && cause._tag !== "Empty") {
    attributes["effect.cause"] = internalCause.pretty(cause, {
      renderErrorCause: true
    });
  }
  span.value.event(Inspectable.toStringUnknown(Array.isArray(message) && message.length === 1 ? message[0] : message), clockService.unsafeCurrentTimeNanos(), attributes);
}));
/** @internal */
export const loggerWithSpanAnnotations = self => internalLogger.mapInputOptions(self, options => {
  const span = Option.flatMap(fiberRefs.get(options.context, core.currentContext), Context.getOption(tracer.spanTag));
  if (span._tag === "None") {
    return options;
  }
  return {
    ...options,
    annotations: pipe(options.annotations, HashMap.set("effect.traceId", span.value.traceId), HashMap.set("effect.spanId", span.value.spanId), span.value._tag === "Span" ? HashMap.set("effect.spanName", span.value.name) : identity)
  };
});
/** @internal */
export const currentLoggers = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentLoggers"), () => core.fiberRefUnsafeMakeHashSet(HashSet.make(defaultLogger, tracerLogger)));
/** @internal */
export const batchedLogger = /*#__PURE__*/dual(3, (self, window, f) => core.flatMap(scope, scope => {
  let buffer = [];
  const flush = core.suspend(() => {
    if (buffer.length === 0) {
      return core.void;
    }
    const arr = buffer;
    buffer = [];
    return f(arr);
  });
  return core.uninterruptibleMask(restore => pipe(internalEffect.sleep(window), core.zipRight(flush), internalEffect.forever, restore, forkDaemon, core.flatMap(fiber => core.scopeAddFinalizer(scope, core.interruptFiber(fiber))), core.zipRight(addFinalizer(() => flush)), core.as(internalLogger.makeLogger(options => {
    buffer.push(self.log(options));
  }))));
}));
export const annotateLogsScoped = function () {
  if (typeof arguments[0] === "string") {
    return fiberRefLocallyScopedWith(core.currentLogAnnotations, HashMap.set(arguments[0], arguments[1]));
  }
  const entries = Object.entries(arguments[0]);
  return fiberRefLocallyScopedWith(core.currentLogAnnotations, HashMap.mutate(annotations => {
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];
      HashMap.set(annotations, key, value);
    }
    return annotations;
  }));
};
/** @internal */
export const whenLogLevel = /*#__PURE__*/dual(2, (effect, level) => {
  const requiredLogLevel = typeof level === "string" ? LogLevel.fromLiteral(level) : level;
  return core.withFiberRuntime(fiberState => {
    const minimumLogLevel = fiberState.getFiberRef(currentMinimumLogLevel);
    // Imitate the behaviour of `FiberRuntime.log`
    if (LogLevel.greaterThan(minimumLogLevel, requiredLogLevel)) {
      return core.succeed(Option.none());
    }
    return core.map(effect, Option.some);
  });
});
// circular with Effect
/* @internal */
export const acquireRelease = /*#__PURE__*/dual(args => core.isEffect(args[0]), (acquire, release) => core.uninterruptible(core.tap(acquire, a => addFinalizer(exit => release(a, exit)))));
/* @internal */
export const acquireReleaseInterruptible = /*#__PURE__*/dual(args => core.isEffect(args[0]), (acquire, release) => ensuring(acquire, addFinalizer(exit => release(exit))));
/* @internal */
export const addFinalizer = finalizer => core.withFiberRuntime(runtime => {
  const acquireRefs = runtime.getFiberRefs();
  const acquireFlags = runtimeFlags_.disable(runtime.currentRuntimeFlags, runtimeFlags_.Interruption);
  return core.flatMap(scope, scope => core.scopeAddFinalizerExit(scope, exit => core.withFiberRuntime(runtimeFinalizer => {
    const preRefs = runtimeFinalizer.getFiberRefs();
    const preFlags = runtimeFinalizer.currentRuntimeFlags;
    const patchRefs = FiberRefsPatch.diff(preRefs, acquireRefs);
    const patchFlags = runtimeFlags_.diff(preFlags, acquireFlags);
    const inverseRefs = FiberRefsPatch.diff(acquireRefs, preRefs);
    runtimeFinalizer.setFiberRefs(FiberRefsPatch.patch(patchRefs, runtimeFinalizer.id(), acquireRefs));
    return ensuring(core.withRuntimeFlags(finalizer(exit), patchFlags), core.sync(() => {
      runtimeFinalizer.setFiberRefs(FiberRefsPatch.patch(inverseRefs, runtimeFinalizer.id(), runtimeFinalizer.getFiberRefs()));
    }));
  })));
});
/* @internal */
export const daemonChildren = self => {
  const forkScope = core.fiberRefLocally(core.currentForkScopeOverride, Option.some(fiberScope.globalScope));
  return forkScope(self);
};
/** @internal */
const _existsParFound = /*#__PURE__*/Symbol.for("effect/Effect/existsPar/found");
/* @internal */
export const exists = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]) && !core.isEffect(args[0]), (elements, predicate, options) => concurrency.matchSimple(options?.concurrency, () => core.suspend(() => existsLoop(elements[Symbol.iterator](), 0, predicate)), () => core.matchEffect(forEach(elements, (a, i) => core.if_(predicate(a, i), {
  onTrue: () => core.fail(_existsParFound),
  onFalse: () => core.void
}), options), {
  onFailure: e => e === _existsParFound ? core.succeed(true) : core.fail(e),
  onSuccess: () => core.succeed(false)
})));
const existsLoop = (iterator, index, f) => {
  const next = iterator.next();
  if (next.done) {
    return core.succeed(false);
  }
  return core.flatMap(f(next.value, index), b => b ? core.succeed(b) : existsLoop(iterator, index + 1, f));
};
/* @internal */
export const filter = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]) && !core.isEffect(args[0]), (elements, predicate, options) => {
  const predicate_ = options?.negate ? (a, i) => core.map(predicate(a, i), Boolean.not) : predicate;
  return concurrency.matchSimple(options?.concurrency, () => core.suspend(() => RA.fromIterable(elements).reduceRight((effect, a, i) => core.zipWith(effect, core.suspend(() => predicate_(a, i)), (list, b) => b ? [a, ...list] : list), core.sync(() => new Array()))), () => core.map(forEach(elements, (a, i) => core.map(predicate_(a, i), b => b ? Option.some(a) : Option.none()), options), RA.getSomes));
});
// === all
const allResolveInput = input => {
  if (Array.isArray(input) || Predicate.isIterable(input)) {
    return [input, Option.none()];
  }
  const keys = Object.keys(input);
  const size = keys.length;
  return [keys.map(k => input[k]), Option.some(values => {
    const res = {};
    for (let i = 0; i < size; i++) {
      ;
      res[keys[i]] = values[i];
    }
    return res;
  })];
};
const allValidate = (effects, reconcile, options) => {
  const eitherEffects = [];
  for (const effect of effects) {
    eitherEffects.push(core.either(effect));
  }
  return core.flatMap(forEach(eitherEffects, identity, {
    concurrency: options?.concurrency,
    batching: options?.batching,
    concurrentFinalizers: options?.concurrentFinalizers
  }), eithers => {
    const none = Option.none();
    const size = eithers.length;
    const errors = new Array(size);
    const successes = new Array(size);
    let errored = false;
    for (let i = 0; i < size; i++) {
      const either = eithers[i];
      if (either._tag === "Left") {
        errors[i] = Option.some(either.left);
        errored = true;
      } else {
        successes[i] = either.right;
        errors[i] = none;
      }
    }
    if (errored) {
      return reconcile._tag === "Some" ? core.fail(reconcile.value(errors)) : core.fail(errors);
    } else if (options?.discard) {
      return core.void;
    }
    return reconcile._tag === "Some" ? core.succeed(reconcile.value(successes)) : core.succeed(successes);
  });
};
const allEither = (effects, reconcile, options) => {
  const eitherEffects = [];
  for (const effect of effects) {
    eitherEffects.push(core.either(effect));
  }
  if (options?.discard) {
    return forEach(eitherEffects, identity, {
      concurrency: options?.concurrency,
      batching: options?.batching,
      discard: true,
      concurrentFinalizers: options?.concurrentFinalizers
    });
  }
  return core.map(forEach(eitherEffects, identity, {
    concurrency: options?.concurrency,
    batching: options?.batching,
    concurrentFinalizers: options?.concurrentFinalizers
  }), eithers => reconcile._tag === "Some" ? reconcile.value(eithers) : eithers);
};
/* @internal */
export const all = (arg, options) => {
  const [effects, reconcile] = allResolveInput(arg);
  if (options?.mode === "validate") {
    return allValidate(effects, reconcile, options);
  } else if (options?.mode === "either") {
    return allEither(effects, reconcile, options);
  }
  return options?.discard !== true && reconcile._tag === "Some" ? core.map(forEach(effects, identity, options), reconcile.value) : forEach(effects, identity, options);
};
/* @internal */
export const allWith = options => arg => all(arg, options);
/* @internal */
export const allSuccesses = (elements, options) => core.map(all(RA.fromIterable(elements).map(core.exit), options), RA.filterMap(exit => core.exitIsSuccess(exit) ? Option.some(exit.effect_instruction_i0) : Option.none()));
/* @internal */
export const replicate = /*#__PURE__*/dual(2, (self, n) => Array.from({
  length: n
}, () => self));
/* @internal */
export const replicateEffect = /*#__PURE__*/dual(args => core.isEffect(args[0]), (self, n, options) => all(replicate(self, n), options));
/* @internal */
export const forEach = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]), (self, f, options) => core.withFiberRuntime(r => {
  const isRequestBatchingEnabled = options?.batching === true || options?.batching === "inherit" && r.getFiberRef(core.currentRequestBatching);
  if (options?.discard) {
    return concurrency.match(options.concurrency, () => finalizersMaskInternal(ExecutionStrategy.sequential, options?.concurrentFinalizers)(restore => isRequestBatchingEnabled ? forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), true, false, 1) : core.forEachSequentialDiscard(self, (a, i) => restore(f(a, i)))), () => finalizersMaskInternal(ExecutionStrategy.parallel, options?.concurrentFinalizers)(restore => forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false)), n => finalizersMaskInternal(ExecutionStrategy.parallelN(n), options?.concurrentFinalizers)(restore => forEachConcurrentDiscard(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false, n)));
  }
  return concurrency.match(options?.concurrency, () => finalizersMaskInternal(ExecutionStrategy.sequential, options?.concurrentFinalizers)(restore => isRequestBatchingEnabled ? forEachParN(self, 1, (a, i) => restore(f(a, i)), true) : core.forEachSequential(self, (a, i) => restore(f(a, i)))), () => finalizersMaskInternal(ExecutionStrategy.parallel, options?.concurrentFinalizers)(restore => forEachParUnbounded(self, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)), n => finalizersMaskInternal(ExecutionStrategy.parallelN(n), options?.concurrentFinalizers)(restore => forEachParN(self, n, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)));
}));
/* @internal */
export const forEachParUnbounded = (self, f, batching) => core.suspend(() => {
  const as = RA.fromIterable(self);
  const array = new Array(as.length);
  const fn = (a, i) => core.flatMap(f(a, i), b => core.sync(() => array[i] = b));
  return core.zipRight(forEachConcurrentDiscard(as, fn, batching, false), core.succeed(array));
});
/** @internal */
export const forEachConcurrentDiscard = (self, f, batching, processAll, n) => core.uninterruptibleMask(restore => core.transplant(graft => core.withFiberRuntime(parent => {
  let todos = Array.from(self).reverse();
  let target = todos.length;
  if (target === 0) {
    return core.void;
  }
  let counter = 0;
  let interrupted = false;
  const fibersCount = n ? Math.min(todos.length, n) : todos.length;
  const fibers = new Set();
  const results = new Array();
  const interruptAll = () => fibers.forEach(fiber => {
    fiber.currentScheduler.scheduleTask(() => {
      fiber.unsafeInterruptAsFork(parent.id());
    }, 0, fiber);
  });
  const startOrder = new Array();
  const joinOrder = new Array();
  const residual = new Array();
  const collectExits = () => {
    const exits = results.filter(({
      exit
    }) => exit._tag === "Failure").sort((a, b) => a.index < b.index ? -1 : a.index === b.index ? 0 : 1).map(({
      exit
    }) => exit);
    if (exits.length === 0) {
      exits.push(core.exitVoid);
    }
    return exits;
  };
  const runFiber = (eff, interruptImmediately = false) => {
    const runnable = core.uninterruptible(graft(eff));
    const fiber = unsafeForkUnstarted(runnable, parent, parent.currentRuntimeFlags, fiberScope.globalScope);
    parent.currentScheduler.scheduleTask(() => {
      if (interruptImmediately) {
        fiber.unsafeInterruptAsFork(parent.id());
      }
      fiber.resume(runnable);
    }, 0, fiber);
    return fiber;
  };
  const onInterruptSignal = () => {
    if (!processAll) {
      target -= todos.length;
      todos = [];
    }
    interrupted = true;
    interruptAll();
  };
  const stepOrExit = batching ? core.step : core.exit;
  const processingFiber = runFiber(core.async(resume => {
    const pushResult = (res, index) => {
      if (res._op === "Blocked") {
        residual.push(res);
      } else {
        results.push({
          index,
          exit: res
        });
        if (res._op === "Failure" && !interrupted) {
          onInterruptSignal();
        }
      }
    };
    const next = () => {
      if (todos.length > 0) {
        const a = todos.pop();
        let index = counter++;
        const returnNextElement = () => {
          const a = todos.pop();
          index = counter++;
          return core.flatMap(core.yieldNow(), () => core.flatMap(stepOrExit(restore(f(a, index))), onRes));
        };
        const onRes = res => {
          if (todos.length > 0) {
            pushResult(res, index);
            if (todos.length > 0) {
              return returnNextElement();
            }
          }
          return core.succeed(res);
        };
        const todo = core.flatMap(stepOrExit(restore(f(a, index))), onRes);
        const fiber = runFiber(todo);
        startOrder.push(fiber);
        fibers.add(fiber);
        if (interrupted) {
          fiber.currentScheduler.scheduleTask(() => {
            fiber.unsafeInterruptAsFork(parent.id());
          }, 0, fiber);
        }
        fiber.addObserver(wrapped => {
          let exit;
          if (wrapped._op === "Failure") {
            exit = wrapped;
          } else {
            exit = wrapped.effect_instruction_i0;
          }
          joinOrder.push(fiber);
          fibers.delete(fiber);
          pushResult(exit, index);
          if (results.length === target) {
            resume(core.succeed(Option.getOrElse(core.exitCollectAll(collectExits(), {
              parallel: true
            }), () => core.exitVoid)));
          } else if (residual.length + results.length === target) {
            const exits = collectExits();
            const requests = residual.map(blocked => blocked.effect_instruction_i0).reduce(RequestBlock_.par);
            resume(core.succeed(core.blocked(requests, forEachConcurrentDiscard([Option.getOrElse(core.exitCollectAll(exits, {
              parallel: true
            }), () => core.exitVoid), ...residual.map(blocked => blocked.effect_instruction_i1)], i => i, batching, true, n))));
          } else {
            next();
          }
        });
      }
    };
    for (let i = 0; i < fibersCount; i++) {
      next();
    }
  }));
  return core.asVoid(core.onExit(core.flatten(restore(internalFiber.join(processingFiber))), core.exitMatch({
    onFailure: cause => {
      onInterruptSignal();
      const target = residual.length + 1;
      const concurrency = Math.min(typeof n === "number" ? n : residual.length, residual.length);
      const toPop = Array.from(residual);
      return core.async(cb => {
        const exits = [];
        let count = 0;
        let index = 0;
        const check = (index, hitNext) => exit => {
          exits[index] = exit;
          count++;
          if (count === target) {
            cb(core.exitSucceed(core.exitFailCause(cause)));
          }
          if (toPop.length > 0 && hitNext) {
            next();
          }
        };
        const next = () => {
          runFiber(toPop.pop(), true).addObserver(check(index, true));
          index++;
        };
        processingFiber.addObserver(check(index, false));
        index++;
        for (let i = 0; i < concurrency; i++) {
          next();
        }
      });
    },
    onSuccess: () => core.forEachSequential(joinOrder, f => f.inheritAll)
  })));
})));
/* @internal */
export const forEachParN = (self, n, f, batching) => core.suspend(() => {
  const as = RA.fromIterable(self);
  const array = new Array(as.length);
  const fn = (a, i) => core.map(f(a, i), b => array[i] = b);
  return core.zipRight(forEachConcurrentDiscard(as, fn, batching, false, n), core.succeed(array));
});
/* @internal */
export const fork = self => core.withFiberRuntime((state, status) => core.succeed(unsafeFork(self, state, status.runtimeFlags)));
/* @internal */
export const forkDaemon = self => forkWithScopeOverride(self, fiberScope.globalScope);
/* @internal */
export const forkWithErrorHandler = /*#__PURE__*/dual(2, (self, handler) => fork(core.onError(self, cause => {
  const either = internalCause.failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      return handler(either.left);
    case "Right":
      return core.failCause(either.right);
  }
})));
/** @internal */
export const unsafeFork = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect, parentFiber, parentRuntimeFlags, overrideScope);
  childFiber.resume(effect);
  return childFiber;
};
/** @internal */
export const unsafeForkUnstarted = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect, parentFiber, parentRuntimeFlags, overrideScope);
  return childFiber;
};
/** @internal */
export const unsafeMakeChildFiber = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childId = FiberId.unsafeMake();
  const parentFiberRefs = parentFiber.getFiberRefs();
  const childFiberRefs = fiberRefs.forkAs(parentFiberRefs, childId);
  const childFiber = new FiberRuntime(childId, childFiberRefs, parentRuntimeFlags);
  const childContext = fiberRefs.getOrDefault(childFiberRefs, core.currentContext);
  const supervisor = childFiber.currentSupervisor;
  supervisor.onStart(childContext, effect, Option.some(parentFiber), childFiber);
  childFiber.addObserver(exit => supervisor.onEnd(exit, childFiber));
  const parentScope = overrideScope !== null ? overrideScope : pipe(parentFiber.getFiberRef(core.currentForkScopeOverride), Option.getOrElse(() => parentFiber.scope()));
  parentScope.add(parentRuntimeFlags, childFiber);
  return childFiber;
};
/* @internal */
const forkWithScopeOverride = (self, scopeOverride) => core.withFiberRuntime((parentFiber, parentStatus) => core.succeed(unsafeFork(self, parentFiber, parentStatus.runtimeFlags, scopeOverride)));
/* @internal */
export const mergeAll = /*#__PURE__*/dual(args => Predicate.isFunction(args[2]), (elements, zero, f, options) => concurrency.matchSimple(options?.concurrency, () => RA.fromIterable(elements).reduce((acc, a, i) => core.zipWith(acc, a, (acc, a) => f(acc, a, i)), core.succeed(zero)), () => core.flatMap(Ref.make(zero), acc => core.flatMap(forEach(elements, (effect, i) => core.flatMap(effect, a => Ref.update(acc, b => f(b, a, i))), options), () => Ref.get(acc)))));
/* @internal */
export const partition = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]), (elements, f, options) => pipe(forEach(elements, (a, i) => core.either(f(a, i)), options), core.map(chunk => core.partitionMap(chunk, identity))));
/* @internal */
export const validateAll = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]), (elements, f, options) => core.flatMap(partition(elements, f, {
  concurrency: options?.concurrency,
  batching: options?.batching,
  concurrentFinalizers: options?.concurrentFinalizers
}), ([es, bs]) => RA.isNonEmptyArray(es) ? core.fail(es) : options?.discard ? core.void : core.succeed(bs)));
/* @internal */
export const raceAll = all => core.withFiberRuntime((state, status) => core.async(resume => {
  const fibers = new Set();
  let winner;
  let failures = internalCause.empty;
  const interruptAll = () => {
    for (const fiber of fibers) {
      fiber.unsafeInterruptAsFork(state.id());
    }
  };
  let latch = false;
  let empty = true;
  for (const self of all) {
    empty = false;
    const fiber = unsafeFork(core.interruptible(self), state, status.runtimeFlags);
    fibers.add(fiber);
    fiber.addObserver(exit => {
      fibers.delete(fiber);
      if (!winner) {
        if (exit._tag === "Success") {
          latch = true;
          winner = fiber;
          failures = internalCause.empty;
          interruptAll();
        } else {
          failures = internalCause.parallel(exit.cause, failures);
        }
      }
      if (latch && fibers.size === 0) {
        resume(winner ? core.zipRight(internalFiber.inheritAll(winner), winner.unsafePoll()) : core.failCause(failures));
      }
    });
    if (winner) break;
  }
  if (empty) {
    return resume(core.dieSync(() => new core.IllegalArgumentException(`Received an empty collection of effects`)));
  }
  latch = true;
  return internalFiber.interruptAllAs(fibers, state.id());
}));
/* @internal */
export const reduceEffect = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]) && !core.isEffect(args[0]), (elements, zero, f, options) => concurrency.matchSimple(options?.concurrency, () => RA.fromIterable(elements).reduce((acc, a, i) => core.zipWith(acc, a, (acc, a) => f(acc, a, i)), zero), () => core.suspend(() => pipe(mergeAll([zero, ...elements], Option.none(), (acc, elem, i) => {
  switch (acc._tag) {
    case "None":
      {
        return Option.some(elem);
      }
    case "Some":
      {
        return Option.some(f(acc.value, elem, i));
      }
  }
}, options), core.map(option => {
  switch (option._tag) {
    case "None":
      {
        throw new Error("BUG: Effect.reduceEffect - please report an issue at https://github.com/Effect-TS/effect/issues");
      }
    case "Some":
      {
        return option.value;
      }
  }
})))));
/* @internal */
export const parallelFinalizers = self => core.contextWithEffect(context => Option.match(Context.getOption(context, scopeTag), {
  onNone: () => self,
  onSome: scope => {
    switch (scope.strategy._tag) {
      case "Parallel":
        return self;
      case "Sequential":
      case "ParallelN":
        return core.flatMap(core.scopeFork(scope, ExecutionStrategy.parallel), inner => scopeExtend(self, inner));
    }
  }
}));
/* @internal */
export const parallelNFinalizers = parallelism => self => core.contextWithEffect(context => Option.match(Context.getOption(context, scopeTag), {
  onNone: () => self,
  onSome: scope => {
    if (scope.strategy._tag === "ParallelN" && scope.strategy.parallelism === parallelism) {
      return self;
    }
    return core.flatMap(core.scopeFork(scope, ExecutionStrategy.parallelN(parallelism)), inner => scopeExtend(self, inner));
  }
}));
/* @internal */
export const finalizersMask = strategy => self => finalizersMaskInternal(strategy, true)(self);
/* @internal */
export const finalizersMaskInternal = (strategy, concurrentFinalizers) => self => core.contextWithEffect(context => Option.match(Context.getOption(context, scopeTag), {
  onNone: () => self(identity),
  onSome: scope => {
    if (concurrentFinalizers === true) {
      const patch = strategy._tag === "Parallel" ? parallelFinalizers : strategy._tag === "Sequential" ? sequentialFinalizers : parallelNFinalizers(strategy.parallelism);
      switch (scope.strategy._tag) {
        case "Parallel":
          return patch(self(parallelFinalizers));
        case "Sequential":
          return patch(self(sequentialFinalizers));
        case "ParallelN":
          return patch(self(parallelNFinalizers(scope.strategy.parallelism)));
      }
    } else {
      return self(identity);
    }
  }
}));
/* @internal */
export const scopeWith = f => core.flatMap(scopeTag, f);
/** @internal */
export const scopedWith = f => core.flatMap(scopeMake(), scope => core.onExit(f(scope), exit => scope.close(exit)));
/* @internal */
export const scopedEffect = effect => core.flatMap(scopeMake(), scope => scopeUse(effect, scope));
/* @internal */
export const sequentialFinalizers = self => core.contextWithEffect(context => Option.match(Context.getOption(context, scopeTag), {
  onNone: () => self,
  onSome: scope => {
    switch (scope.strategy._tag) {
      case "Sequential":
        return self;
      case "Parallel":
      case "ParallelN":
        return core.flatMap(core.scopeFork(scope, ExecutionStrategy.sequential), inner => scopeExtend(self, inner));
    }
  }
}));
/* @internal */
export const tagMetricsScoped = (key, value) => labelMetricsScoped([metricLabel.make(key, value)]);
/* @internal */
export const labelMetricsScoped = labels => fiberRefLocallyScopedWith(core.currentMetricLabels, old => RA.union(old, labels));
/* @internal */
export const using = /*#__PURE__*/dual(2, (self, use) => scopedWith(scope => core.flatMap(scopeExtend(self, scope), use)));
/** @internal */
export const validate = /*#__PURE__*/dual(args => core.isEffect(args[1]), (self, that, options) => validateWith(self, that, (a, b) => [a, b], options));
/** @internal */
export const validateWith = /*#__PURE__*/dual(args => core.isEffect(args[1]), (self, that, f, options) => core.flatten(zipWithOptions(core.exit(self), core.exit(that), (ea, eb) => core.exitZipWith(ea, eb, {
  onSuccess: f,
  onFailure: (ca, cb) => options?.concurrent ? internalCause.parallel(ca, cb) : internalCause.sequential(ca, cb)
}), options)));
/* @internal */
export const validateAllPar = /*#__PURE__*/dual(2, (elements, f) => core.flatMap(partition(elements, f), ([es, bs]) => es.length === 0 ? core.succeed(bs) : core.fail(es)));
/* @internal */
export const validateAllParDiscard = /*#__PURE__*/dual(2, (elements, f) => core.flatMap(partition(elements, f), ([es, _]) => es.length === 0 ? core.void : core.fail(es)));
/* @internal */
export const validateFirst = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]), (elements, f, options) => core.flip(forEach(elements, (a, i) => core.flip(f(a, i)), options)));
/* @internal */
export const withClockScoped = c => fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(clock.clockTag, c));
/* @internal */
export const withRandomScoped = value => fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(randomTag, value));
/* @internal */
export const withConfigProviderScoped = provider => fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(configProviderTag, provider));
/* @internal */
export const withEarlyRelease = self => scopeWith(parent => core.flatMap(core.scopeFork(parent, executionStrategy.sequential), child => pipe(self, scopeExtend(child), core.map(value => [core.fiberIdWith(fiberId => core.scopeClose(child, core.exitInterrupt(fiberId))), value]))));
/** @internal */
export const zipOptions = /*#__PURE__*/dual(args => core.isEffect(args[1]), (self, that, options) => zipWithOptions(self, that, (a, b) => [a, b], options));
/** @internal */
export const zipLeftOptions = /*#__PURE__*/dual(args => core.isEffect(args[1]), (self, that, options) => {
  if (options?.concurrent !== true && (options?.batching === undefined || options.batching === false)) {
    return core.zipLeft(self, that);
  }
  return zipWithOptions(self, that, (a, _) => a, options);
});
/** @internal */
export const zipRightOptions = /*#__PURE__*/dual(args => core.isEffect(args[1]), (self, that, options) => {
  if (options?.concurrent !== true && (options?.batching === undefined || options.batching === false)) {
    return core.zipRight(self, that);
  }
  return zipWithOptions(self, that, (_, b) => b, options);
});
/** @internal */
export const zipWithOptions = /*#__PURE__*/dual(args => core.isEffect(args[1]), (self, that, f, options) => core.map(all([self, that], {
  concurrency: options?.concurrent ? 2 : 1,
  batching: options?.batching,
  concurrentFinalizers: options?.concurrentFinalizers
}), ([a, a2]) => f(a, a2)));
/* @internal */
export const withRuntimeFlagsScoped = update => {
  if (update === RuntimeFlagsPatch.empty) {
    return core.void;
  }
  return pipe(core.runtimeFlags, core.flatMap(runtimeFlags => {
    const updatedRuntimeFlags = runtimeFlags_.patch(runtimeFlags, update);
    const revertRuntimeFlags = runtimeFlags_.diff(updatedRuntimeFlags, runtimeFlags);
    return pipe(core.updateRuntimeFlags(update), core.zipRight(addFinalizer(() => core.updateRuntimeFlags(revertRuntimeFlags))), core.asVoid);
  }), core.uninterruptible);
};
// circular with Scope
/** @internal */
export const scopeTag = /*#__PURE__*/Context.GenericTag("effect/Scope");
/* @internal */
export const scope = scopeTag;
const scopeUnsafeAddFinalizer = (scope, fin) => {
  if (scope.state._tag === "Open") {
    scope.state.finalizers.set({}, fin);
  }
};
const ScopeImplProto = {
  [core.ScopeTypeId]: core.ScopeTypeId,
  [core.CloseableScopeTypeId]: core.CloseableScopeTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  fork(strategy) {
    return core.sync(() => {
      const newScope = scopeUnsafeMake(strategy);
      if (this.state._tag === "Closed") {
        newScope.state = this.state;
        return newScope;
      }
      const key = {};
      const fin = exit => newScope.close(exit);
      this.state.finalizers.set(key, fin);
      scopeUnsafeAddFinalizer(newScope, _ => core.sync(() => {
        if (this.state._tag === "Open") {
          this.state.finalizers.delete(key);
        }
      }));
      return newScope;
    });
  },
  close(exit) {
    return core.suspend(() => {
      if (this.state._tag === "Closed") {
        return core.void;
      }
      const finalizers = Array.from(this.state.finalizers.values()).reverse();
      this.state = {
        _tag: "Closed",
        exit
      };
      if (finalizers.length === 0) {
        return core.void;
      }
      return executionStrategy.isSequential(this.strategy) ? pipe(core.forEachSequential(finalizers, fin => core.exit(fin(exit))), core.flatMap(results => pipe(core.exitCollectAll(results), Option.map(core.exitAsVoid), Option.getOrElse(() => core.exitVoid)))) : executionStrategy.isParallel(this.strategy) ? pipe(forEachParUnbounded(finalizers, fin => core.exit(fin(exit)), false), core.flatMap(results => pipe(core.exitCollectAll(results, {
        parallel: true
      }), Option.map(core.exitAsVoid), Option.getOrElse(() => core.exitVoid)))) : pipe(forEachParN(finalizers, this.strategy.parallelism, fin => core.exit(fin(exit)), false), core.flatMap(results => pipe(core.exitCollectAll(results, {
        parallel: true
      }), Option.map(core.exitAsVoid), Option.getOrElse(() => core.exitVoid))));
    });
  },
  addFinalizer(fin) {
    return core.suspend(() => {
      if (this.state._tag === "Closed") {
        return fin(this.state.exit);
      }
      this.state.finalizers.set({}, fin);
      return core.void;
    });
  }
};
const scopeUnsafeMake = (strategy = executionStrategy.sequential) => {
  const scope = Object.create(ScopeImplProto);
  scope.strategy = strategy;
  scope.state = {
    _tag: "Open",
    finalizers: new Map()
  };
  return scope;
};
/* @internal */
export const scopeMake = (strategy = executionStrategy.sequential) => core.sync(() => scopeUnsafeMake(strategy));
/* @internal */
export const scopeExtend = /*#__PURE__*/dual(2, (effect, scope) => core.mapInputContext(effect,
// @ts-expect-error
Context.merge(Context.make(scopeTag, scope))));
/* @internal */
export const scopeUse = /*#__PURE__*/dual(2, (effect, scope) => pipe(effect, scopeExtend(scope), core.onExit(exit => scope.close(exit))));
// circular with Supervisor
/** @internal */
export const fiberRefUnsafeMakeSupervisor = initial => core.fiberRefUnsafeMakePatch(initial, {
  differ: SupervisorPatch.differ,
  fork: SupervisorPatch.empty
});
// circular with FiberRef
/* @internal */
export const fiberRefLocallyScoped = /*#__PURE__*/dual(2, (self, value) => core.asVoid(acquireRelease(core.flatMap(core.fiberRefGet(self), oldValue => core.as(core.fiberRefSet(self, value), oldValue)), oldValue => core.fiberRefSet(self, oldValue))));
/* @internal */
export const fiberRefLocallyScopedWith = /*#__PURE__*/dual(2, (self, f) => core.fiberRefGetWith(self, a => fiberRefLocallyScoped(self, f(a))));
/* @internal */
export const fiberRefMake = (initial, options) => fiberRefMakeWith(() => core.fiberRefUnsafeMake(initial, options));
/* @internal */
export const fiberRefMakeWith = ref => acquireRelease(core.tap(core.sync(ref), ref => core.fiberRefUpdate(ref, identity)), fiberRef => core.fiberRefDelete(fiberRef));
/* @internal */
export const fiberRefMakeContext = initial => fiberRefMakeWith(() => core.fiberRefUnsafeMakeContext(initial));
/* @internal */
export const fiberRefMakeRuntimeFlags = initial => fiberRefMakeWith(() => core.fiberRefUnsafeMakeRuntimeFlags(initial));
/** @internal */
export const currentRuntimeFlags = /*#__PURE__*/core.fiberRefUnsafeMakeRuntimeFlags(runtimeFlags_.none);
/** @internal */
export const currentSupervisor = /*#__PURE__*/fiberRefUnsafeMakeSupervisor(supervisor.none);
// circular with Fiber
/* @internal */
export const fiberAwaitAll = fibers => forEach(fibers, internalFiber._await);
/** @internal */
export const fiberAll = fibers => {
  const _fiberAll = {
    ...Effectable.CommitPrototype,
    commit() {
      return internalFiber.join(this);
    },
    [internalFiber.FiberTypeId]: internalFiber.fiberVariance,
    id: () => RA.fromIterable(fibers).reduce((id, fiber) => FiberId.combine(id, fiber.id()), FiberId.none),
    await: core.exit(forEachParUnbounded(fibers, fiber => core.flatten(fiber.await), false)),
    children: core.map(forEachParUnbounded(fibers, fiber => fiber.children, false), RA.flatten),
    inheritAll: core.forEachSequentialDiscard(fibers, fiber => fiber.inheritAll),
    poll: core.map(core.forEachSequential(fibers, fiber => fiber.poll), RA.reduceRight(Option.some(core.exitSucceed(new Array())), (optionB, optionA) => {
      switch (optionA._tag) {
        case "None":
          {
            return Option.none();
          }
        case "Some":
          {
            switch (optionB._tag) {
              case "None":
                {
                  return Option.none();
                }
              case "Some":
                {
                  return Option.some(core.exitZipWith(optionA.value, optionB.value, {
                    onSuccess: (a, chunk) => [a, ...chunk],
                    onFailure: internalCause.parallel
                  }));
                }
            }
          }
      }
    })),
    interruptAsFork: fiberId => core.forEachSequentialDiscard(fibers, fiber => fiber.interruptAsFork(fiberId))
  };
  return _fiberAll;
};
/* @internal */
export const fiberInterruptFork = self => core.asVoid(forkDaemon(core.interruptFiber(self)));
/* @internal */
export const fiberJoinAll = fibers => internalFiber.join(fiberAll(fibers));
/* @internal */
export const fiberScoped = self => acquireRelease(core.succeed(self), core.interruptFiber);
//
// circular race
//
/** @internal */
export const raceWith = /*#__PURE__*/dual(3, (self, other, options) => raceFibersWith(self, other, {
  onSelfWin: (winner, loser) => core.flatMap(winner.await, exit => {
    switch (exit._tag) {
      case OpCodes.OP_SUCCESS:
        {
          return core.flatMap(winner.inheritAll, () => options.onSelfDone(exit, loser));
        }
      case OpCodes.OP_FAILURE:
        {
          return options.onSelfDone(exit, loser);
        }
    }
  }),
  onOtherWin: (winner, loser) => core.flatMap(winner.await, exit => {
    switch (exit._tag) {
      case OpCodes.OP_SUCCESS:
        {
          return core.flatMap(winner.inheritAll, () => options.onOtherDone(exit, loser));
        }
      case OpCodes.OP_FAILURE:
        {
          return options.onOtherDone(exit, loser);
        }
    }
  })
}));
/** @internal */
export const disconnect = self => core.uninterruptibleMask(restore => core.fiberIdWith(fiberId => core.flatMap(forkDaemon(restore(self)), fiber => pipe(restore(internalFiber.join(fiber)), core.onInterrupt(() => pipe(fiber, internalFiber.interruptAsFork(fiberId)))))));
/** @internal */
export const race = /*#__PURE__*/dual(2, (self, that) => core.fiberIdWith(parentFiberId => raceWith(self, that, {
  onSelfDone: (exit, right) => core.exitMatchEffect(exit, {
    onFailure: cause => pipe(internalFiber.join(right), internalEffect.mapErrorCause(cause2 => internalCause.parallel(cause, cause2))),
    onSuccess: value => pipe(right, core.interruptAsFiber(parentFiberId), core.as(value))
  }),
  onOtherDone: (exit, left) => core.exitMatchEffect(exit, {
    onFailure: cause => pipe(internalFiber.join(left), internalEffect.mapErrorCause(cause2 => internalCause.parallel(cause2, cause))),
    onSuccess: value => pipe(left, core.interruptAsFiber(parentFiberId), core.as(value))
  })
})));
/** @internal */
export const raceFibersWith = /*#__PURE__*/dual(3, (self, other, options) => core.withFiberRuntime((parentFiber, parentStatus) => {
  const parentRuntimeFlags = parentStatus.runtimeFlags;
  const raceIndicator = MRef.make(true);
  const leftFiber = unsafeMakeChildFiber(self, parentFiber, parentRuntimeFlags, options.selfScope);
  const rightFiber = unsafeMakeChildFiber(other, parentFiber, parentRuntimeFlags, options.otherScope);
  return core.async(cb => {
    leftFiber.addObserver(() => completeRace(leftFiber, rightFiber, options.onSelfWin, raceIndicator, cb));
    rightFiber.addObserver(() => completeRace(rightFiber, leftFiber, options.onOtherWin, raceIndicator, cb));
    leftFiber.startFork(self);
    rightFiber.startFork(other);
  }, FiberId.combine(leftFiber.id(), rightFiber.id()));
}));
const completeRace = (winner, loser, cont, ab, cb) => {
  if (MRef.compareAndSet(true, false)(ab)) {
    cb(cont(winner, loser));
  }
};
/** @internal */
export const ensuring = /*#__PURE__*/dual(2, (self, finalizer) => core.uninterruptibleMask(restore => core.matchCauseEffect(restore(self), {
  onFailure: cause1 => core.matchCauseEffect(finalizer, {
    onFailure: cause2 => core.failCause(internalCause.sequential(cause1, cause2)),
    onSuccess: () => core.failCause(cause1)
  }),
  onSuccess: a => core.as(finalizer, a)
})));
/** @internal */
export const invokeWithInterrupt = (self, entries, onInterrupt) => core.fiberIdWith(id => core.flatMap(core.flatMap(forkDaemon(core.interruptible(self)), processing => core.async(cb => {
  const counts = entries.map(_ => _.listeners.count);
  const checkDone = () => {
    if (counts.every(count => count === 0)) {
      if (entries.every(_ => {
        if (_.result.state.current._tag === "Pending") {
          return true;
        } else if (_.result.state.current._tag === "Done" && core.exitIsExit(_.result.state.current.effect) && _.result.state.current.effect._tag === "Failure" && internalCause.isInterrupted(_.result.state.current.effect.cause)) {
          return true;
        } else {
          return false;
        }
      })) {
        cleanup.forEach(f => f());
        onInterrupt?.();
        cb(core.interruptFiber(processing));
      }
    }
  };
  processing.addObserver(exit => {
    cleanup.forEach(f => f());
    cb(exit);
  });
  const cleanup = entries.map((r, i) => {
    const observer = count => {
      counts[i] = count;
      checkDone();
    };
    r.listeners.addObserver(observer);
    return () => r.listeners.removeObserver(observer);
  });
  checkDone();
  return core.sync(() => {
    cleanup.forEach(f => f());
  });
})), () => core.suspend(() => {
  const residual = entries.flatMap(entry => {
    if (!entry.state.completed) {
      return [entry];
    }
    return [];
  });
  return core.forEachSequentialDiscard(residual, entry => complete(entry.request, core.exitInterrupt(id)));
})));
/** @internal */
export const interruptWhenPossible = /*#__PURE__*/dual(2, (self, all) => core.fiberRefGetWith(currentRequestMap, map => core.suspend(() => {
  const entries = RA.fromIterable(all).flatMap(_ => map.has(_) ? [map.get(_)] : []);
  return invokeWithInterrupt(self, entries);
})));
// circular Tracer
/** @internal */
export const makeSpanScoped = (name, options) => {
  options = tracer.addSpanStackTrace(options);
  return core.uninterruptible(core.withFiberRuntime(fiber => {
    const scope = Context.unsafeGet(fiber.getFiberRef(core.currentContext), scopeTag);
    const span = internalEffect.unsafeMakeSpan(fiber, name, options);
    const timingEnabled = fiber.getFiberRef(core.currentTracerTimingEnabled);
    const clock_ = Context.get(fiber.getFiberRef(defaultServices.currentServices), clock.clockTag);
    return core.as(core.scopeAddFinalizerExit(scope, exit => internalEffect.endSpan(span, exit, clock_, timingEnabled)), span);
  }));
};
/* @internal */
export const withTracerScoped = value => fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(tracer.tracerTag, value));
/** @internal */
export const withSpanScoped = function () {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = tracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return core.flatMap(makeSpanScoped(name, tracer.addSpanStackTrace(options)), span => internalEffect.provideService(self, tracer.spanTag, span));
  }
  return self => core.flatMap(makeSpanScoped(name, tracer.addSpanStackTrace(options)), span => internalEffect.provideService(self, tracer.spanTag, span));
};
//# sourceMappingURL=fiberRuntime.js.map
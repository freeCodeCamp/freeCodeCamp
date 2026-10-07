/**
 * @since 2.0.0
 */
import * as Chunk from "./Chunk.js";
import * as Context from "./Context.js";
import * as DateTime from "./DateTime.js";
import * as Duration from "./Duration.js";
import * as Equal from "./Equal.js";
import * as FiberStatus from "./FiberStatus.js";
import { constVoid, dual, identity, pipe } from "./Function.js";
import * as HashMap from "./HashMap.js";
import * as clock from "./internal/clock.js";
import * as effect from "./internal/core-effect.js";
import * as core from "./internal/core.js";
import * as defaultServices from "./internal/defaultServices.js";
import * as circular from "./internal/effect/circular.js";
import * as fiberRuntime from "./internal/fiberRuntime.js";
import * as layer from "./internal/layer.js";
import * as ref from "./internal/ref.js";
import * as synchronized from "./internal/synchronizedRef.js";
import * as SuspendedWarningData from "./internal/testing/suspendedWarningData.js";
import * as WarningData from "./internal/testing/warningData.js";
import * as number from "./Number.js";
import * as Option from "./Option.js";
import * as Order from "./Order.js";
import * as Annotations from "./TestAnnotations.js";
import * as Live from "./TestLive.js";
/**
 * @since 2.0.0
 */
export const makeData = (instant, sleeps) => ({
  instant,
  sleeps
});
/**
 * @since 2.0.0
 */
export const TestClock = /*#__PURE__*/Context.GenericTag("effect/TestClock");
/**
 * The warning message that will be displayed if a test is using time but is
 * not advancing the `TestClock`.
 *
 * @internal
 */
const warning = "Warning: A test is using time, but is not advancing " + "the test clock, which may result in the test hanging. Use TestClock.adjust to " + "manually advance the time.";
/**
 * The warning message that will be displayed if a test is advancing the clock
 * but a fiber is still running.
 *
 * @internal
 */
const suspendedWarning = "Warning: A test is advancing the test clock, " + "but a fiber is not suspending, which may result in the test hanging. Use " + "TestAspect.diagnose to identity the fiber that is not suspending.";
/** @internal */
export class TestClockImpl {
  clockState;
  live;
  annotations;
  warningState;
  suspendedWarningState;
  [clock.ClockTypeId] = clock.ClockTypeId;
  constructor(clockState, live, annotations, warningState, suspendedWarningState) {
    this.clockState = clockState;
    this.live = live;
    this.annotations = annotations;
    this.warningState = warningState;
    this.suspendedWarningState = suspendedWarningState;
    this.currentTimeMillis = core.map(ref.get(this.clockState), data => data.instant);
    this.currentTimeNanos = core.map(ref.get(this.clockState), data => BigInt(data.instant * 1000000));
  }
  /**
   * Unsafely returns the current time in milliseconds.
   */
  unsafeCurrentTimeMillis() {
    return ref.unsafeGet(this.clockState).instant;
  }
  /**
   * Unsafely returns the current time in nanoseconds.
   */
  unsafeCurrentTimeNanos() {
    return BigInt(ref.unsafeGet(this.clockState).instant * 1000000);
  }
  /**
   * Returns the current clock time in milliseconds.
   */
  currentTimeMillis;
  /**
   * Returns the current clock time in nanoseconds.
   */
  currentTimeNanos;
  /**
   * Saves the `TestClock`'s current state in an effect which, when run, will
   * restore the `TestClock` state to the saved state.
   */
  get save() {
    return core.map(ref.get(this.clockState), data => ref.set(this.clockState, data));
  }
  /**
   * Sets the current clock time to the specified instant. Any effects that
   * were scheduled to occur on or before the new time will be run in order.
   */
  setTime(instant) {
    return core.zipRight(this.warningDone(), this.run(() => instant));
  }
  /**
   * Semantically blocks the current fiber until the clock time is equal to or
   * greater than the specified duration. Once the clock time is adjusted to
   * on or after the duration, the fiber will automatically be resumed.
   */
  sleep(durationInput) {
    const duration = Duration.decode(durationInput);
    return core.flatMap(core.deferredMake(), deferred => pipe(ref.modify(this.clockState, data => {
      const end = data.instant + Duration.toMillis(duration);
      if (end > data.instant) {
        return [true, makeData(data.instant, pipe(data.sleeps, Chunk.prepend([end, deferred])))];
      }
      return [false, data];
    }), core.flatMap(shouldAwait => shouldAwait ? pipe(this.warningStart(), core.zipRight(core.deferredAwait(deferred))) : pipe(core.deferredSucceed(deferred, void 0), core.asVoid))));
  }
  /**
   * Returns a list of the times at which all queued effects are scheduled to
   * resume.
   */
  get sleeps() {
    return core.map(ref.get(this.clockState), data => Chunk.map(data.sleeps, _ => _[0]));
  }
  /**
   * Increments the current clock time by the specified duration. Any effects
   * that were scheduled to occur on or before the new time will be run in
   * order.
   */
  adjust(durationInput) {
    const duration = Duration.decode(durationInput);
    return core.zipRight(this.warningDone(), this.run(n => n + Duration.toMillis(duration)));
  }
  /**
   * Increments the current clock time by the specified duration. Any effects
   * that were scheduled to occur on or before the new time will be run in
   * order.
   */
  adjustWith(durationInput) {
    const duration = Duration.decode(durationInput);
    return effect => fiberRuntime.zipLeftOptions(effect, this.adjust(duration), {
      concurrent: true
    });
  }
  /**
   * Returns a set of all fibers in this test.
   */
  supervisedFibers() {
    return this.annotations.supervisedFibers;
  }
  /**
   * Captures a "snapshot" of the identifier and status of all fibers in this
   * test other than the current fiber. Fails with the `void` value if any of
   * these fibers are not done or suspended. Note that because we cannot
   * synchronize on the status of multiple fibers at the same time this
   * snapshot may not be fully consistent.
   */
  freeze() {
    return core.flatMap(this.supervisedFibers(), fibers => pipe(fibers, effect.reduce(HashMap.empty(), (map, fiber) => pipe(fiber.status, core.flatMap(status => {
      if (FiberStatus.isDone(status)) {
        return core.succeed(HashMap.set(map, fiber.id(), status));
      }
      if (FiberStatus.isSuspended(status)) {
        return core.succeed(HashMap.set(map, fiber.id(), status));
      }
      return core.fail(void 0);
    })))));
  }
  /**
   * Forks a fiber that will display a warning message if a test is using time
   * but is not advancing the `TestClock`.
   */
  warningStart() {
    return synchronized.updateSomeEffect(this.warningState, data => WarningData.isStart(data) ? Option.some(pipe(this.live.provide(pipe(effect.logWarning(warning), effect.delay(Duration.seconds(5)))), core.interruptible, fiberRuntime.fork, core.map(fiber => WarningData.pending(fiber)))) : Option.none());
  }
  /**
   * Cancels the warning message that is displayed if a test is using time but
   * is not advancing the `TestClock`.
   */
  warningDone() {
    return synchronized.updateSomeEffect(this.warningState, warningData => {
      if (WarningData.isStart(warningData)) {
        return Option.some(core.succeed(WarningData.done));
      }
      if (WarningData.isPending(warningData)) {
        return Option.some(pipe(core.interruptFiber(warningData.fiber), core.as(WarningData.done)));
      }
      return Option.none();
    });
  }
  yieldTimer = /*#__PURE__*/core.async(resume => {
    const timer = setTimeout(() => {
      resume(core.void);
    }, 0);
    return core.sync(() => clearTimeout(timer));
  });
  /**
   * Returns whether all descendants of this fiber are done or suspended.
   */
  suspended() {
    return pipe(this.freeze(), core.zip(pipe(this.yieldTimer, core.zipRight(this.freeze()))), core.flatMap(([first, last]) => Equal.equals(first, last) ? core.succeed(first) : core.fail(void 0)));
  }
  /**
   * Polls until all descendants of this fiber are done or suspended.
   */
  awaitSuspended() {
    return pipe(this.suspendedWarningStart(), core.zipRight(pipe(this.suspended(), core.zipWith(pipe(this.yieldTimer, core.zipRight(this.suspended())), Equal.equals), effect.filterOrFail(identity, constVoid), effect.eventually)), core.zipRight(this.suspendedWarningDone()));
  }
  /**
   * Forks a fiber that will display a warning message if a test is advancing
   * the `TestClock` but a fiber is not suspending.
   */
  suspendedWarningStart() {
    return synchronized.updateSomeEffect(this.suspendedWarningState, suspendedWarningData => {
      if (SuspendedWarningData.isStart(suspendedWarningData)) {
        return Option.some(pipe(this.live.provide(pipe(effect.logWarning(suspendedWarning), core.zipRight(ref.set(this.suspendedWarningState, SuspendedWarningData.done)), effect.delay(Duration.seconds(5)))), core.interruptible, fiberRuntime.fork, core.map(fiber => SuspendedWarningData.pending(fiber))));
      }
      return Option.none();
    });
  }
  /**
   * Cancels the warning message that is displayed if a test is advancing the
   * `TestClock` but a fiber is not suspending.
   */
  suspendedWarningDone() {
    return synchronized.updateSomeEffect(this.suspendedWarningState, suspendedWarningData => {
      if (SuspendedWarningData.isPending(suspendedWarningData)) {
        return Option.some(pipe(core.interruptFiber(suspendedWarningData.fiber), core.as(SuspendedWarningData.start)));
      }
      return Option.none();
    });
  }
  /**
   * Runs all effects scheduled to occur on or before the specified instant,
   * which may depend on the current time, in order.
   */
  run(f) {
    return pipe(this.awaitSuspended(), core.zipRight(pipe(ref.modify(this.clockState, data => {
      const end = f(data.instant);
      const sorted = pipe(data.sleeps, Chunk.sort(pipe(number.Order, Order.mapInput(_ => _[0]))));
      if (Chunk.isNonEmpty(sorted)) {
        const [instant, deferred] = Chunk.headNonEmpty(sorted);
        if (instant <= end) {
          return [Option.some([end, deferred]), makeData(instant, Chunk.tailNonEmpty(sorted))];
        }
      }
      return [Option.none(), makeData(end, data.sleeps)];
    }), core.flatMap(option => {
      switch (option._tag) {
        case "None":
          {
            return core.void;
          }
        case "Some":
          {
            const [end, deferred] = option.value;
            return pipe(core.deferredSucceed(deferred, void 0), core.zipRight(core.yieldNow()), core.zipRight(this.run(() => end)));
          }
      }
    }))));
  }
}
/**
 * @since 2.0.0
 */
export const live = data => layer.scoped(TestClock, core.gen(function* () {
  const live = yield* Live.TestLive;
  const annotations = yield* Annotations.TestAnnotations;
  const clockState = yield* core.sync(() => ref.unsafeMake(data));
  const warningState = yield* circular.makeSynchronized(WarningData.start);
  const suspendedWarningState = yield* circular.makeSynchronized(SuspendedWarningData.start);
  const testClock = new TestClockImpl(clockState, live, annotations, warningState, suspendedWarningState);
  yield* fiberRuntime.withClockScoped(testClock);
  yield* fiberRuntime.addFinalizer(() => core.zipRight(testClock.warningDone(), testClock.suspendedWarningDone()));
  return testClock;
}));
/**
 * @since 2.0.0
 */
export const defaultTestClock = /*#__PURE__*/live(/*#__PURE__*/makeData(/*#__PURE__*/new Date(0).getTime(), /*#__PURE__*/Chunk.empty()));
/**
 * Accesses a `TestClock` instance in the context and increments the time
 * by the specified duration, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
export const adjust = durationInput => {
  const duration = Duration.decode(durationInput);
  return testClockWith(testClock => testClock.adjust(duration));
};
/**
 * @since 2.0.0
 */
export const adjustWith = /*#__PURE__*/dual(2, (effect, durationInput) => {
  const duration = Duration.decode(durationInput);
  return testClockWith(testClock => testClock.adjustWith(duration)(effect));
});
/**
 * Accesses a `TestClock` instance in the context and saves the clock
 * state in an effect which, when run, will restore the `TestClock` to the
 * saved state.
 *
 * @since 2.0.0
 */
export const save = () => testClockWith(testClock => testClock.save);
/**
 * Accesses a `TestClock` instance in the context and sets the clock time
 * to the specified `Instant` or `Date`, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
export const setTime = input => testClockWith(testClock => testClock.setTime(typeof input === "number" ? input : DateTime.unsafeMake(input).epochMillis));
/**
 * Semantically blocks the current fiber until the clock time is equal to or
 * greater than the specified duration. Once the clock time is adjusted to
 * on or after the duration, the fiber will automatically be resumed.
 *
 * @since 2.0.0
 */
export const sleep = durationInput => {
  const duration = Duration.decode(durationInput);
  return testClockWith(testClock => testClock.sleep(duration));
};
/**
 * Accesses a `TestClock` instance in the context and returns a list of
 * times that effects are scheduled to run.
 *
 * @since 2.0.0
 */
export const sleeps = () => testClockWith(testClock => testClock.sleeps);
/**
 * Retrieves the `TestClock` service for this test.
 *
 * @since 2.0.0
 */
export const testClock = () => testClockWith(core.succeed);
/**
 * Retrieves the `TestClock` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const testClockWith = f => core.fiberRefGetWith(defaultServices.currentServices, services => f(pipe(services, Context.get(clock.clockTag))));
/**
 * Accesses the current time of a `TestClock` instance in the context in
 * milliseconds.
 *
 * @since 2.0.0
 */
export const currentTimeMillis = /*#__PURE__*/testClockWith(testClock => testClock.currentTimeMillis);
//# sourceMappingURL=TestClock.js.map
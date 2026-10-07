"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testClockWith = exports.testClock = exports.sleeps = exports.sleep = exports.setTime = exports.save = exports.makeData = exports.live = exports.defaultTestClock = exports.currentTimeMillis = exports.adjustWith = exports.adjust = exports.TestClockImpl = exports.TestClock = void 0;
var Chunk = _interopRequireWildcard(require("./Chunk.js"));
var Context = _interopRequireWildcard(require("./Context.js"));
var DateTime = _interopRequireWildcard(require("./DateTime.js"));
var Duration = _interopRequireWildcard(require("./Duration.js"));
var Equal = _interopRequireWildcard(require("./Equal.js"));
var FiberStatus = _interopRequireWildcard(require("./FiberStatus.js"));
var _Function = require("./Function.js");
var HashMap = _interopRequireWildcard(require("./HashMap.js"));
var clock = _interopRequireWildcard(require("./internal/clock.js"));
var effect = _interopRequireWildcard(require("./internal/core-effect.js"));
var core = _interopRequireWildcard(require("./internal/core.js"));
var defaultServices = _interopRequireWildcard(require("./internal/defaultServices.js"));
var circular = _interopRequireWildcard(require("./internal/effect/circular.js"));
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
var layer = _interopRequireWildcard(require("./internal/layer.js"));
var ref = _interopRequireWildcard(require("./internal/ref.js"));
var synchronized = _interopRequireWildcard(require("./internal/synchronizedRef.js"));
var SuspendedWarningData = _interopRequireWildcard(require("./internal/testing/suspendedWarningData.js"));
var WarningData = _interopRequireWildcard(require("./internal/testing/warningData.js"));
var number = _interopRequireWildcard(require("./Number.js"));
var Option = _interopRequireWildcard(require("./Option.js"));
var Order = _interopRequireWildcard(require("./Order.js"));
var Annotations = _interopRequireWildcard(require("./TestAnnotations.js"));
var Live = _interopRequireWildcard(require("./TestLive.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 */
const makeData = (instant, sleeps) => ({
  instant,
  sleeps
});
/**
 * @since 2.0.0
 */
exports.makeData = makeData;
const TestClock = exports.TestClock = /*#__PURE__*/Context.GenericTag("effect/TestClock");
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
class TestClockImpl {
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
    return core.flatMap(core.deferredMake(), deferred => (0, _Function.pipe)(ref.modify(this.clockState, data => {
      const end = data.instant + Duration.toMillis(duration);
      if (end > data.instant) {
        return [true, makeData(data.instant, (0, _Function.pipe)(data.sleeps, Chunk.prepend([end, deferred])))];
      }
      return [false, data];
    }), core.flatMap(shouldAwait => shouldAwait ? (0, _Function.pipe)(this.warningStart(), core.zipRight(core.deferredAwait(deferred))) : (0, _Function.pipe)(core.deferredSucceed(deferred, void 0), core.asVoid))));
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
    return core.flatMap(this.supervisedFibers(), fibers => (0, _Function.pipe)(fibers, effect.reduce(HashMap.empty(), (map, fiber) => (0, _Function.pipe)(fiber.status, core.flatMap(status => {
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
    return synchronized.updateSomeEffect(this.warningState, data => WarningData.isStart(data) ? Option.some((0, _Function.pipe)(this.live.provide((0, _Function.pipe)(effect.logWarning(warning), effect.delay(Duration.seconds(5)))), core.interruptible, fiberRuntime.fork, core.map(fiber => WarningData.pending(fiber)))) : Option.none());
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
        return Option.some((0, _Function.pipe)(core.interruptFiber(warningData.fiber), core.as(WarningData.done)));
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
    return (0, _Function.pipe)(this.freeze(), core.zip((0, _Function.pipe)(this.yieldTimer, core.zipRight(this.freeze()))), core.flatMap(([first, last]) => Equal.equals(first, last) ? core.succeed(first) : core.fail(void 0)));
  }
  /**
   * Polls until all descendants of this fiber are done or suspended.
   */
  awaitSuspended() {
    return (0, _Function.pipe)(this.suspendedWarningStart(), core.zipRight((0, _Function.pipe)(this.suspended(), core.zipWith((0, _Function.pipe)(this.yieldTimer, core.zipRight(this.suspended())), Equal.equals), effect.filterOrFail(_Function.identity, _Function.constVoid), effect.eventually)), core.zipRight(this.suspendedWarningDone()));
  }
  /**
   * Forks a fiber that will display a warning message if a test is advancing
   * the `TestClock` but a fiber is not suspending.
   */
  suspendedWarningStart() {
    return synchronized.updateSomeEffect(this.suspendedWarningState, suspendedWarningData => {
      if (SuspendedWarningData.isStart(suspendedWarningData)) {
        return Option.some((0, _Function.pipe)(this.live.provide((0, _Function.pipe)(effect.logWarning(suspendedWarning), core.zipRight(ref.set(this.suspendedWarningState, SuspendedWarningData.done)), effect.delay(Duration.seconds(5)))), core.interruptible, fiberRuntime.fork, core.map(fiber => SuspendedWarningData.pending(fiber))));
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
        return Option.some((0, _Function.pipe)(core.interruptFiber(suspendedWarningData.fiber), core.as(SuspendedWarningData.start)));
      }
      return Option.none();
    });
  }
  /**
   * Runs all effects scheduled to occur on or before the specified instant,
   * which may depend on the current time, in order.
   */
  run(f) {
    return (0, _Function.pipe)(this.awaitSuspended(), core.zipRight((0, _Function.pipe)(ref.modify(this.clockState, data => {
      const end = f(data.instant);
      const sorted = (0, _Function.pipe)(data.sleeps, Chunk.sort((0, _Function.pipe)(number.Order, Order.mapInput(_ => _[0]))));
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
            return (0, _Function.pipe)(core.deferredSucceed(deferred, void 0), core.zipRight(core.yieldNow()), core.zipRight(this.run(() => end)));
          }
      }
    }))));
  }
}
/**
 * @since 2.0.0
 */
exports.TestClockImpl = TestClockImpl;
const live = data => layer.scoped(TestClock, core.gen(function* () {
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
exports.live = live;
const defaultTestClock = exports.defaultTestClock = /*#__PURE__*/live(/*#__PURE__*/makeData(/*#__PURE__*/new Date(0).getTime(), /*#__PURE__*/Chunk.empty()));
/**
 * Accesses a `TestClock` instance in the context and increments the time
 * by the specified duration, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
const adjust = durationInput => {
  const duration = Duration.decode(durationInput);
  return testClockWith(testClock => testClock.adjust(duration));
};
/**
 * @since 2.0.0
 */
exports.adjust = adjust;
const adjustWith = exports.adjustWith = /*#__PURE__*/(0, _Function.dual)(2, (effect, durationInput) => {
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
const save = () => testClockWith(testClock => testClock.save);
/**
 * Accesses a `TestClock` instance in the context and sets the clock time
 * to the specified `Instant` or `Date`, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
exports.save = save;
const setTime = input => testClockWith(testClock => testClock.setTime(typeof input === "number" ? input : DateTime.unsafeMake(input).epochMillis));
/**
 * Semantically blocks the current fiber until the clock time is equal to or
 * greater than the specified duration. Once the clock time is adjusted to
 * on or after the duration, the fiber will automatically be resumed.
 *
 * @since 2.0.0
 */
exports.setTime = setTime;
const sleep = durationInput => {
  const duration = Duration.decode(durationInput);
  return testClockWith(testClock => testClock.sleep(duration));
};
/**
 * Accesses a `TestClock` instance in the context and returns a list of
 * times that effects are scheduled to run.
 *
 * @since 2.0.0
 */
exports.sleep = sleep;
const sleeps = () => testClockWith(testClock => testClock.sleeps);
/**
 * Retrieves the `TestClock` service for this test.
 *
 * @since 2.0.0
 */
exports.sleeps = sleeps;
const testClock = () => testClockWith(core.succeed);
/**
 * Retrieves the `TestClock` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
exports.testClock = testClock;
const testClockWith = f => core.fiberRefGetWith(defaultServices.currentServices, services => f((0, _Function.pipe)(services, Context.get(clock.clockTag))));
/**
 * Accesses the current time of a `TestClock` instance in the context in
 * milliseconds.
 *
 * @since 2.0.0
 */
exports.testClockWith = testClockWith;
const currentTimeMillis = exports.currentTimeMillis = /*#__PURE__*/testClockWith(testClock => testClock.currentTimeMillis);
//# sourceMappingURL=TestClock.js.map
import * as Chunk from "../Chunk.js";
import * as Clock from "../Clock.js";
import * as Context from "../Context.js";
import * as Cron from "../Cron.js";
import * as Duration from "../Duration.js";
import * as Either from "../Either.js";
import * as Equal from "../Equal.js";
import { constVoid, dual, pipe } from "../Function.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as Random from "../Random.js";
import * as ScheduleDecision from "../ScheduleDecision.js";
import * as Interval from "../ScheduleInterval.js";
import * as Intervals from "../ScheduleIntervals.js";
import * as internalCause from "./cause.js";
import * as effect from "./core-effect.js";
import * as core from "./core.js";
import { forkScoped } from "./effect/circular.js";
import * as ref from "./ref.js";
/** @internal */
const ScheduleSymbolKey = "effect/Schedule";
/** @internal */
export const ScheduleTypeId = /*#__PURE__*/Symbol.for(ScheduleSymbolKey);
/** @internal */
export const isSchedule = u => hasProperty(u, ScheduleTypeId);
/** @internal */
const ScheduleDriverSymbolKey = "effect/ScheduleDriver";
/** @internal */
export const ScheduleDriverTypeId = /*#__PURE__*/Symbol.for(ScheduleDriverSymbolKey);
/** @internal */
const defaultIterationMetadata = {
  start: 0,
  now: 0,
  input: undefined,
  output: undefined,
  elapsed: Duration.zero,
  elapsedSincePrevious: Duration.zero,
  recurrence: 0
};
/** @internal */
export const CurrentIterationMetadata = /*#__PURE__*/Context.Reference()("effect/Schedule/CurrentIterationMetadata", {
  defaultValue: () => defaultIterationMetadata
});
const scheduleVariance = {
  /* c8 ignore next */
  _Out: _ => _,
  /* c8 ignore next */
  _In: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
const scheduleDriverVariance = {
  /* c8 ignore next */
  _Out: _ => _,
  /* c8 ignore next */
  _In: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
/** @internal */
class ScheduleImpl {
  initial;
  step;
  [ScheduleTypeId] = scheduleVariance;
  constructor(initial, step) {
    this.initial = initial;
    this.step = step;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
const updateInfo = (iterationMetaRef, now, input, output) => ref.update(iterationMetaRef, prev => prev.recurrence === 0 ? {
  now,
  input,
  output,
  recurrence: prev.recurrence + 1,
  elapsed: Duration.zero,
  elapsedSincePrevious: Duration.zero,
  start: now
} : {
  now,
  input,
  output,
  recurrence: prev.recurrence + 1,
  elapsed: Duration.millis(now - prev.start),
  elapsedSincePrevious: Duration.millis(now - prev.now),
  start: prev.start
});
/** @internal */
class ScheduleDriverImpl {
  schedule;
  ref;
  [ScheduleDriverTypeId] = scheduleDriverVariance;
  constructor(schedule, ref) {
    this.schedule = schedule;
    this.ref = ref;
  }
  get state() {
    return core.map(ref.get(this.ref), tuple => tuple[1]);
  }
  get last() {
    return core.flatMap(ref.get(this.ref), ([element, _]) => {
      switch (element._tag) {
        case "None":
          {
            return core.failSync(() => new core.NoSuchElementException());
          }
        case "Some":
          {
            return core.succeed(element.value);
          }
      }
    });
  }
  iterationMeta = /*#__PURE__*/ref.unsafeMake(defaultIterationMetadata);
  get reset() {
    return ref.set(this.ref, [Option.none(), this.schedule.initial]).pipe(core.zipLeft(ref.set(this.iterationMeta, defaultIterationMetadata)));
  }
  next(input) {
    return pipe(core.map(ref.get(this.ref), tuple => tuple[1]), core.flatMap(state => pipe(Clock.currentTimeMillis, core.flatMap(now => pipe(core.suspend(() => this.schedule.step(now, input, state)), core.flatMap(([state, out, decision]) => {
      const setState = ref.set(this.ref, [Option.some(out), state]);
      if (ScheduleDecision.isDone(decision)) {
        return setState.pipe(core.zipRight(core.fail(Option.none())));
      }
      const millis = Intervals.start(decision.intervals) - now;
      if (millis <= 0) {
        return setState.pipe(core.zipRight(updateInfo(this.iterationMeta, now, input, out)), core.as(out));
      }
      const duration = Duration.millis(millis);
      return pipe(setState, core.zipRight(updateInfo(this.iterationMeta, now, input, out)), core.zipRight(effect.sleep(duration)), core.as(out));
    }))))));
  }
}
/** @internal */
export const makeWithState = (initial, step) => new ScheduleImpl(initial, step);
/** @internal */
export const addDelay = /*#__PURE__*/dual(2, (self, f) => addDelayEffect(self, out => core.sync(() => f(out))));
/** @internal */
export const addDelayEffect = /*#__PURE__*/dual(2, (self, f) => modifyDelayEffect(self, (out, duration) => core.map(f(out), delay => Duration.sum(duration, Duration.decode(delay)))));
/** @internal */
export const andThen = /*#__PURE__*/dual(2, (self, that) => map(andThenEither(self, that), Either.merge));
/** @internal */
export const andThenEither = /*#__PURE__*/dual(2, (self, that) => makeWithState([self.initial, that.initial, true], (now, input, state) => state[2] ? core.flatMap(self.step(now, input, state[0]), ([lState, out, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.map(that.step(now, input, state[1]), ([rState, out, decision]) => [[lState, rState, false], Either.right(out), decision]);
  }
  return core.succeed([[lState, state[1], true], Either.left(out), decision]);
}) : core.map(that.step(now, input, state[1]), ([rState, out, decision]) => [[state[0], rState, false], Either.right(out), decision])));
/** @internal */
export const as = /*#__PURE__*/dual(2, (self, out) => map(self, () => out));
/** @internal */
export const asVoid = self => map(self, constVoid);
/** @internal */
export const bothInOut = /*#__PURE__*/dual(2, (self, that) => makeWithState([self.initial, that.initial], (now, [in1, in2], state) => core.zipWith(self.step(now, in1, state[0]), that.step(now, in2, state[1]), ([lState, out, lDecision], [rState, out2, rDecision]) => {
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    const interval = pipe(lDecision.intervals, Intervals.union(rDecision.intervals));
    return [[lState, rState], [out, out2], ScheduleDecision.continue(interval)];
  }
  return [[lState, rState], [out, out2], ScheduleDecision.done];
})));
/** @internal */
export const check = /*#__PURE__*/dual(2, (self, test) => checkEffect(self, (input, out) => core.sync(() => test(input, out))));
/** @internal */
export const checkEffect = /*#__PURE__*/dual(2, (self, test) => makeWithState(self.initial, (now, input, state) => core.flatMap(self.step(now, input, state), ([state, out, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.succeed([state, out, ScheduleDecision.done]);
  }
  return core.map(test(input, out), cont => cont ? [state, out, decision] : [state, out, ScheduleDecision.done]);
})));
/** @internal */
export const collectAllInputs = () => collectAllOutputs(identity());
/** @internal */
export const collectAllOutputs = self => reduce(self, Chunk.empty(), (outs, out) => pipe(outs, Chunk.append(out)));
/** @internal */
export const collectUntil = f => collectAllOutputs(recurUntil(f));
/** @internal */
export const collectUntilEffect = f => collectAllOutputs(recurUntilEffect(f));
/** @internal */
export const collectWhile = f => collectAllOutputs(recurWhile(f));
/** @internal */
export const collectWhileEffect = f => collectAllOutputs(recurWhileEffect(f));
/** @internal */
export const compose = /*#__PURE__*/dual(2, (self, that) => makeWithState([self.initial, that.initial], (now, input, state) => core.flatMap(self.step(now, input, state[0]), ([lState, out, lDecision]) => core.map(that.step(now, out, state[1]), ([rState, out2, rDecision]) => ScheduleDecision.isDone(lDecision) ? [[lState, rState], out2, ScheduleDecision.done] : ScheduleDecision.isDone(rDecision) ? [[lState, rState], out2, ScheduleDecision.done] : [[lState, rState], out2, ScheduleDecision.continue(pipe(lDecision.intervals, Intervals.max(rDecision.intervals)))]))));
/** @internal */
export const mapInput = /*#__PURE__*/dual(2, (self, f) => mapInputEffect(self, input2 => core.sync(() => f(input2))));
/** @internal */
export const mapInputContext = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => core.mapInputContext(self.step(now, input, state), f)));
/** @internal */
export const mapInputEffect = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input2, state) => core.flatMap(f(input2), input => self.step(now, input, state))));
/** @internal */
export const cron = (expression, tz) => {
  const parsed = Cron.isCron(expression) ? Either.right(expression) : Cron.parse(expression, tz);
  return makeWithState([true, [Number.MIN_SAFE_INTEGER, 0, 0]], (now, _, [initial, previous]) => {
    if (now < previous[0]) {
      return core.succeed([[false, previous], [previous[1], previous[2]], ScheduleDecision.continueWith(Interval.make(previous[1], previous[2]))]);
    }
    if (Either.isLeft(parsed)) {
      return core.die(parsed.left);
    }
    const cron = parsed.right;
    const date = new Date(now);
    let next;
    if (initial && Cron.match(cron, date)) {
      next = now;
    }
    next = Cron.next(cron, date).getTime();
    const start = beginningOfSecond(next);
    const end = endOfSecond(next);
    return core.succeed([[false, [next, start, end]], [start, end], ScheduleDecision.continueWith(Interval.make(start, end))]);
  });
};
/** @internal */
export const dayOfMonth = day => {
  return makeWithState([Number.NEGATIVE_INFINITY, 0], (now, _, state) => {
    if (!Number.isInteger(day) || day < 1 || 31 < day) {
      return core.dieSync(() => new core.IllegalArgumentException(`Invalid argument in: dayOfMonth(${day}). Must be in range 1...31`));
    }
    const n = state[1];
    const initial = n === 0;
    const day0 = nextDayOfMonth(now, day, initial);
    const start = beginningOfDay(day0);
    const end = endOfDay(day0);
    const interval = Interval.make(start, end);
    return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
  });
};
/** @internal */
export const dayOfWeek = day => {
  return makeWithState([Number.MIN_SAFE_INTEGER, 0], (now, _, state) => {
    if (!Number.isInteger(day) || day < 1 || 7 < day) {
      return core.dieSync(() => new core.IllegalArgumentException(`Invalid argument in: dayOfWeek(${day}). Must be in range 1 (Monday)...7 (Sunday)`));
    }
    const n = state[1];
    const initial = n === 0;
    const day0 = nextDay(now, day, initial);
    const start = beginningOfDay(day0);
    const end = endOfDay(day0);
    const interval = Interval.make(start, end);
    return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
  });
};
/** @internal */
export const delayed = /*#__PURE__*/dual(2, (self, f) => delayedEffect(self, duration => core.sync(() => f(duration))));
/** @internal */
export const delayedEffect = /*#__PURE__*/dual(2, (self, f) => modifyDelayEffect(self, (_, delay) => f(delay)));
/** @internal */
export const delayedSchedule = schedule => addDelay(schedule, x => x);
/** @internal */
export const delays = self => makeWithState(self.initial, (now, input, state) => pipe(self.step(now, input, state), core.flatMap(([state, _, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.succeed([state, Duration.zero, decision]);
  }
  return core.succeed([state, Duration.millis(Intervals.start(decision.intervals) - now), decision]);
})));
/** @internal */
export const mapBoth = /*#__PURE__*/dual(2, (self, {
  onInput,
  onOutput
}) => map(mapInput(self, onInput), onOutput));
/** @internal */
export const mapBothEffect = /*#__PURE__*/dual(2, (self, {
  onInput,
  onOutput
}) => mapEffect(mapInputEffect(self, onInput), onOutput));
/** @internal */
export const driver = self => pipe(ref.make([Option.none(), self.initial]), core.map(ref => new ScheduleDriverImpl(self, ref)));
/** @internal */
export const duration = durationInput => {
  const duration = Duration.decode(durationInput);
  const durationMillis = Duration.toMillis(duration);
  return makeWithState(true, (now, _, state) => core.succeed(state ? [false, duration, ScheduleDecision.continueWith(Interval.after(now + durationMillis))] : [false, Duration.zero, ScheduleDecision.done]));
};
/** @internal */
export const either = /*#__PURE__*/dual(2, (self, that) => union(self, that));
/** @internal */
export const eitherWith = /*#__PURE__*/dual(3, (self, that, f) => unionWith(self, that, f));
/** @internal */
export const ensuring = /*#__PURE__*/dual(2, (self, finalizer) => makeWithState(self.initial, (now, input, state) => core.flatMap(self.step(now, input, state), ([state, out, decision]) => ScheduleDecision.isDone(decision) ? core.as(finalizer, [state, out, decision]) : core.succeed([state, out, decision]))));
/** @internal */
export const exponential = (baseInput, factor = 2.0) => {
  const base = Duration.decode(baseInput);
  return delayedSchedule(map(forever, i => Duration.times(base, Math.pow(factor, i))));
};
/** @internal */
export const fibonacci = oneInput => {
  const one = Duration.decode(oneInput);
  return delayedSchedule(pipe(unfold([one, one], ([a, b]) => [b, Duration.sum(a, b)]), map(out => out[0])));
};
/** @internal */
export const fixed = intervalInput => {
  const interval = Duration.decode(intervalInput);
  const intervalMillis = Duration.toMillis(interval);
  return makeWithState([Option.none(), 0], (now, _, [option, n]) => core.sync(() => {
    switch (option._tag) {
      case "None":
        {
          return [[Option.some([now, now + intervalMillis]), n + 1], n, ScheduleDecision.continueWith(Interval.after(now + intervalMillis))];
        }
      case "Some":
        {
          const [startMillis, lastRun] = option.value;
          const runningBehind = now > lastRun + intervalMillis;
          const boundary = Equal.equals(interval, Duration.zero) ? interval : Duration.millis(intervalMillis - (now - startMillis) % intervalMillis);
          const sleepTime = Equal.equals(boundary, Duration.zero) ? interval : boundary;
          const nextRun = runningBehind ? now : now + Duration.toMillis(sleepTime);
          return [[Option.some([startMillis, nextRun]), n + 1], n, ScheduleDecision.continueWith(Interval.after(nextRun))];
        }
    }
  }));
};
/** @internal */
export const fromDelay = delay => duration(delay);
/** @internal */
export const fromDelays = (delay, ...delays) => makeWithState([[delay, ...delays].map(_ => Duration.decode(_)), true], (now, _, [durations, cont]) => core.sync(() => {
  if (cont) {
    const x = durations[0];
    const interval = Interval.after(now + Duration.toMillis(x));
    if (durations.length >= 2) {
      return [[durations.slice(1), true], x, ScheduleDecision.continueWith(interval)];
    }
    const y = durations.slice(1);
    return [[[x, ...y], false], x, ScheduleDecision.continueWith(interval)];
  }
  return [[durations, false], Duration.zero, ScheduleDecision.done];
}));
/** @internal */
export const fromFunction = f => map(identity(), f);
/** @internal */
export const hourOfDay = hour => makeWithState([Number.NEGATIVE_INFINITY, 0], (now, _, state) => {
  if (!Number.isInteger(hour) || hour < 0 || 23 < hour) {
    return core.dieSync(() => new core.IllegalArgumentException(`Invalid argument in: hourOfDay(${hour}). Must be in range 0...23`));
  }
  const n = state[1];
  const initial = n === 0;
  const hour0 = nextHour(now, hour, initial);
  const start = beginningOfHour(hour0);
  const end = endOfHour(hour0);
  const interval = Interval.make(start, end);
  return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
});
/** @internal */
export const identity = () => makeWithState(void 0, (now, input, state) => core.succeed([state, input, ScheduleDecision.continueWith(Interval.after(now))]));
/** @internal */
export const intersect = /*#__PURE__*/dual(2, (self, that) => intersectWith(self, that, Intervals.intersect));
/** @internal */
export const intersectWith = /*#__PURE__*/dual(3, (self, that, f) => makeWithState([self.initial, that.initial], (now, input, state) => pipe(core.zipWith(self.step(now, input, state[0]), that.step(now, input, state[1]), (a, b) => [a, b]), core.flatMap(([[lState, out, lDecision], [rState, out2, rDecision]]) => {
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    return intersectWithLoop(self, that, input, lState, out, lDecision.intervals, rState, out2, rDecision.intervals, f);
  }
  return core.succeed([[lState, rState], [out, out2], ScheduleDecision.done]);
}))));
/** @internal */
const intersectWithLoop = (self, that, input, lState, out, lInterval, rState, out2, rInterval, f) => {
  const combined = f(lInterval, rInterval);
  if (Intervals.isNonEmpty(combined)) {
    return core.succeed([[lState, rState], [out, out2], ScheduleDecision.continue(combined)]);
  }
  if (pipe(lInterval, Intervals.lessThan(rInterval))) {
    return core.flatMap(self.step(Intervals.end(lInterval), input, lState), ([lState, out, decision]) => {
      if (ScheduleDecision.isDone(decision)) {
        return core.succeed([[lState, rState], [out, out2], ScheduleDecision.done]);
      }
      return intersectWithLoop(self, that, input, lState, out, decision.intervals, rState, out2, rInterval, f);
    });
  }
  return core.flatMap(that.step(Intervals.end(rInterval), input, rState), ([rState, out2, decision]) => {
    if (ScheduleDecision.isDone(decision)) {
      return core.succeed([[lState, rState], [out, out2], ScheduleDecision.done]);
    }
    return intersectWithLoop(self, that, input, lState, out, lInterval, rState, out2, decision.intervals, f);
  });
};
/** @internal */
export const jittered = self => jitteredWith(self, {
  min: 0.8,
  max: 1.2
});
/** @internal */
export const jitteredWith = /*#__PURE__*/dual(2, (self, options) => {
  const {
    max,
    min
  } = Object.assign({
    min: 0.8,
    max: 1.2
  }, options);
  return delayedEffect(self, duration => core.map(Random.next, random => {
    const d = Duration.toMillis(duration);
    const jittered = d * min * (1 - random) + d * max * random;
    return Duration.millis(jittered);
  }));
});
/** @internal */
export const linear = baseInput => {
  const base = Duration.decode(baseInput);
  return delayedSchedule(map(forever, i => Duration.times(base, i + 1)));
};
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => mapEffect(self, out => core.sync(() => f(out))));
/** @internal */
export const mapEffect = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(self.step(now, input, state), ([state, out, decision]) => core.map(f(out), out2 => [state, out2, decision]))));
/** @internal */
export const minuteOfHour = minute => makeWithState([Number.MIN_SAFE_INTEGER, 0], (now, _, state) => {
  if (!Number.isInteger(minute) || minute < 0 || 59 < minute) {
    return core.dieSync(() => new core.IllegalArgumentException(`Invalid argument in: minuteOfHour(${minute}). Must be in range 0...59`));
  }
  const n = state[1];
  const initial = n === 0;
  const minute0 = nextMinute(now, minute, initial);
  const start = beginningOfMinute(minute0);
  const end = endOfMinute(minute0);
  const interval = Interval.make(start, end);
  return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
});
/** @internal */
export const modifyDelay = /*#__PURE__*/dual(2, (self, f) => modifyDelayEffect(self, (out, duration) => core.sync(() => f(out, duration))));
/** @internal */
export const modifyDelayEffect = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(self.step(now, input, state), ([state, out, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.succeed([state, out, decision]);
  }
  const intervals = decision.intervals;
  const delay = Interval.size(Interval.make(now, Intervals.start(intervals)));
  return core.map(f(out, delay), durationInput => {
    const duration = Duration.decode(durationInput);
    const oldStart = Intervals.start(intervals);
    const newStart = now + Duration.toMillis(duration);
    const delta = newStart - oldStart;
    const newEnd = Math.max(0, Intervals.end(intervals) + delta);
    const newInterval = Interval.make(newStart, newEnd);
    return [state, out, ScheduleDecision.continueWith(newInterval)];
  });
})));
/** @internal */
export const onDecision = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(self.step(now, input, state), ([state, out, decision]) => core.as(f(out, decision), [state, out, decision]))));
/** @internal */
export const passthrough = self => makeWithState(self.initial, (now, input, state) => pipe(self.step(now, input, state), core.map(([state, _, decision]) => [state, input, decision])));
/** @internal */
export const provideContext = /*#__PURE__*/dual(2, (self, context) => makeWithState(self.initial, (now, input, state) => core.provideContext(self.step(now, input, state), context)));
/** @internal */
export const provideService = /*#__PURE__*/dual(3, (self, tag, service) => makeWithState(self.initial, (now, input, state) => core.contextWithEffect(env => core.provideContext(
// @ts-expect-error
self.step(now, input, state), Context.add(env, tag, service)))));
/** @internal */
export const recurUntil = f => untilInput(identity(), f);
/** @internal */
export const recurUntilEffect = f => untilInputEffect(identity(), f);
/** @internal */
export const recurUntilOption = pf => untilOutput(map(identity(), pf), Option.isSome);
/** @internal */
export const recurUpTo = durationInput => {
  const duration = Duration.decode(durationInput);
  return whileOutput(elapsed, elapsed => Duration.lessThan(elapsed, duration));
};
/** @internal */
export const recurWhile = f => whileInput(identity(), f);
/** @internal */
export const recurWhileEffect = f => whileInputEffect(identity(), f);
/** @internal */
export const recurs = n => whileOutput(forever, out => out < n);
/** @internal */
export const reduce = /*#__PURE__*/dual(3, (self, zero, f) => reduceEffect(self, zero, (z, out) => core.sync(() => f(z, out))));
/** @internal */
export const reduceEffect = /*#__PURE__*/dual(3, (self, zero, f) => makeWithState([self.initial, zero], (now, input, [s, z]) => core.flatMap(self.step(now, input, s), ([s, out, decision]) => ScheduleDecision.isDone(decision) ? core.succeed([[s, z], z, decision]) : core.map(f(z, out), z2 => [[s, z2], z, decision]))));
/** @internal */
export const repeatForever = self => makeWithState(self.initial, (now, input, state) => {
  const step = (now, input, state) => core.flatMap(self.step(now, input, state), ([state, out, decision]) => ScheduleDecision.isDone(decision) ? step(now, input, self.initial) : core.succeed([state, out, decision]));
  return step(now, input, state);
});
/** @internal */
export const repetitions = self => reduce(self, 0, (n, _) => n + 1);
/** @internal */
export const resetAfter = /*#__PURE__*/dual(2, (self, durationInput) => {
  const duration = Duration.decode(durationInput);
  return pipe(self, intersect(elapsed), resetWhen(([, time]) => Duration.greaterThanOrEqualTo(time, duration)), map(out => out[0]));
});
/** @internal */
export const resetWhen = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(self.step(now, input, state), ([state, out, decision]) => f(out) ? self.step(now, input, self.initial) : core.succeed([state, out, decision]))));
/** @internal */
export const run = /*#__PURE__*/dual(3, (self, now, input) => pipe(runLoop(self, now, Chunk.fromIterable(input), self.initial, Chunk.empty()), core.map(list => Chunk.reverse(list))));
/** @internal */
const runLoop = (self, now, inputs, state, acc) => {
  if (!Chunk.isNonEmpty(inputs)) {
    return core.succeed(acc);
  }
  const input = Chunk.headNonEmpty(inputs);
  const nextInputs = Chunk.tailNonEmpty(inputs);
  return core.flatMap(self.step(now, input, state), ([state, out, decision]) => {
    if (ScheduleDecision.isDone(decision)) {
      return core.sync(() => pipe(acc, Chunk.prepend(out)));
    }
    return runLoop(self, Intervals.start(decision.intervals), nextInputs, state, Chunk.prepend(acc, out));
  });
};
/** @internal */
export const secondOfMinute = second => makeWithState([Number.NEGATIVE_INFINITY, 0], (now, _, state) => {
  if (!Number.isInteger(second) || second < 0 || 59 < second) {
    return core.dieSync(() => new core.IllegalArgumentException(`Invalid argument in: secondOfMinute(${second}). Must be in range 0...59`));
  }
  const n = state[1];
  const initial = n === 0;
  const second0 = nextSecond(now, second, initial);
  const start = beginningOfSecond(second0);
  const end = endOfSecond(second0);
  const interval = Interval.make(start, end);
  return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
});
/** @internal */
export const spaced = duration => addDelay(forever, () => duration);
/** @internal */
export const succeed = value => map(forever, () => value);
/** @internal */
export const sync = evaluate => map(forever, evaluate);
/** @internal */
export const tapInput = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => core.zipRight(f(input), self.step(now, input, state))));
/** @internal */
export const tapOutput = /*#__PURE__*/dual(2, (self, f) => makeWithState(self.initial, (now, input, state) => core.tap(self.step(now, input, state), ([, out]) => f(out))));
/** @internal */
export const unfold = (initial, f) => makeWithState(initial, (now, _, state) => core.sync(() => [f(state), state, ScheduleDecision.continueWith(Interval.after(now))]));
/** @internal */
export const union = /*#__PURE__*/dual(2, (self, that) => unionWith(self, that, Intervals.union));
/** @internal */
export const unionWith = /*#__PURE__*/dual(3, (self, that, f) => makeWithState([self.initial, that.initial], (now, input, state) => core.zipWith(self.step(now, input, state[0]), that.step(now, input, state[1]), ([lState, l, lDecision], [rState, r, rDecision]) => {
  if (ScheduleDecision.isDone(lDecision) && ScheduleDecision.isDone(rDecision)) {
    return [[lState, rState], [l, r], ScheduleDecision.done];
  }
  if (ScheduleDecision.isDone(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    return [[lState, rState], [l, r], ScheduleDecision.continue(rDecision.intervals)];
  }
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isDone(rDecision)) {
    return [[lState, rState], [l, r], ScheduleDecision.continue(lDecision.intervals)];
  }
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    const combined = f(lDecision.intervals, rDecision.intervals);
    return [[lState, rState], [l, r], ScheduleDecision.continue(combined)];
  }
  throw new Error("BUG: Schedule.unionWith - please report an issue at https://github.com/Effect-TS/effect/issues");
})));
/** @internal */
export const untilInput = /*#__PURE__*/dual(2, (self, f) => check(self, (input, _) => !f(input)));
/** @internal */
export const untilInputEffect = /*#__PURE__*/dual(2, (self, f) => checkEffect(self, (input, _) => effect.negate(f(input))));
/** @internal */
export const untilOutput = /*#__PURE__*/dual(2, (self, f) => check(self, (_, out) => !f(out)));
/** @internal */
export const untilOutputEffect = /*#__PURE__*/dual(2, (self, f) => checkEffect(self, (_, out) => effect.negate(f(out))));
/** @internal */
export const upTo = /*#__PURE__*/dual(2, (self, duration) => zipLeft(self, recurUpTo(duration)));
/** @internal */
export const whileInput = /*#__PURE__*/dual(2, (self, f) => check(self, (input, _) => f(input)));
/** @internal */
export const whileInputEffect = /*#__PURE__*/dual(2, (self, f) => checkEffect(self, (input, _) => f(input)));
/** @internal */
export const whileOutput = /*#__PURE__*/dual(2, (self, f) => check(self, (_, out) => f(out)));
/** @internal */
export const whileOutputEffect = /*#__PURE__*/dual(2, (self, f) => checkEffect(self, (_, out) => f(out)));
/** @internal */
export const windowed = intervalInput => {
  const interval = Duration.decode(intervalInput);
  const millis = Duration.toMillis(interval);
  return makeWithState([Option.none(), 0], (now, _, [option, n]) => {
    switch (option._tag) {
      case "None":
        {
          return core.succeed([[Option.some(now), n + 1], n, ScheduleDecision.continueWith(Interval.after(now + millis))]);
        }
      case "Some":
        {
          return core.succeed([[Option.some(option.value), n + 1], n, ScheduleDecision.continueWith(Interval.after(now + (millis - (now - option.value) % millis)))]);
        }
    }
  });
};
/** @internal */
export const zipLeft = /*#__PURE__*/dual(2, (self, that) => map(intersect(self, that), out => out[0]));
/** @internal */
export const zipRight = /*#__PURE__*/dual(2, (self, that) => map(intersect(self, that), out => out[1]));
/** @internal */
export const zipWith = /*#__PURE__*/dual(3, (self, that, f) => map(intersect(self, that), ([out, out2]) => f(out, out2)));
// -----------------------------------------------------------------------------
// Seconds
// -----------------------------------------------------------------------------
/** @internal */
export const beginningOfSecond = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0).getTime();
};
/** @internal */
export const endOfSecond = now => {
  const date = new Date(beginningOfSecond(now));
  return date.setSeconds(date.getSeconds() + 1);
};
/** @internal */
export const nextSecond = (now, second, initial) => {
  const date = new Date(now);
  if (date.getSeconds() === second && initial) {
    return now;
  }
  if (date.getSeconds() < second) {
    return date.setSeconds(second);
  }
  // Set seconds to the provided value and add one minute
  const newDate = new Date(date.setSeconds(second));
  return newDate.setTime(newDate.getTime() + 1000 * 60);
};
// -----------------------------------------------------------------------------
// Minutes
// -----------------------------------------------------------------------------
/** @internal */
export const beginningOfMinute = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0).getTime();
};
/** @internal */
export const endOfMinute = now => {
  const date = new Date(beginningOfMinute(now));
  return date.setMinutes(date.getMinutes() + 1);
};
/** @internal */
export const nextMinute = (now, minute, initial) => {
  const date = new Date(now);
  if (date.getMinutes() === minute && initial) {
    return now;
  }
  if (date.getMinutes() < minute) {
    return date.setMinutes(minute);
  }
  // Set minutes to the provided value and add one hour
  const newDate = new Date(date.setMinutes(minute));
  return newDate.setTime(newDate.getTime() + 1000 * 60 * 60);
};
// -----------------------------------------------------------------------------
// Hours
// -----------------------------------------------------------------------------
/** @internal */
export const beginningOfHour = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0).getTime();
};
/** @internal */
export const endOfHour = now => {
  const date = new Date(beginningOfHour(now));
  return date.setHours(date.getHours() + 1);
};
/** @internal */
export const nextHour = (now, hour, initial) => {
  const date = new Date(now);
  if (date.getHours() === hour && initial) {
    return now;
  }
  if (date.getHours() < hour) {
    return date.setHours(hour);
  }
  // Set hours to the provided value and add one day
  const newDate = new Date(date.setHours(hour));
  return newDate.setTime(newDate.getTime() + 1000 * 60 * 60 * 24);
};
// -----------------------------------------------------------------------------
// Days
// -----------------------------------------------------------------------------
/** @internal */
export const beginningOfDay = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();
};
/** @internal */
export const endOfDay = now => {
  const date = new Date(beginningOfDay(now));
  return date.setDate(date.getDate() + 1);
};
/** @internal */
export const nextDay = (now, dayOfWeek, initial) => {
  const date = new Date(now);
  if (date.getDay() === dayOfWeek && initial) {
    return now;
  }
  const nextDayOfWeek = (7 + dayOfWeek - date.getDay()) % 7;
  return date.setDate(date.getDate() + (nextDayOfWeek === 0 ? 7 : nextDayOfWeek));
};
/** @internal */
export const nextDayOfMonth = (now, day, initial) => {
  const date = new Date(now);
  if (date.getDate() === day && initial) {
    return now;
  }
  if (date.getDate() < day) {
    return date.setDate(day);
  }
  return findNextMonth(now, day, 1);
};
/** @internal */
export const findNextMonth = (now, day, months) => {
  const d = new Date(now);
  const tmp1 = new Date(d.setDate(day));
  const tmp2 = new Date(tmp1.setMonth(tmp1.getMonth() + months));
  if (tmp2.getDate() === day) {
    const d2 = new Date(now);
    const tmp3 = new Date(d2.setDate(day));
    return tmp3.setMonth(tmp3.getMonth() + months);
  }
  return findNextMonth(now, day, months + 1);
};
// circular with Effect
const ScheduleDefectTypeId = /*#__PURE__*/Symbol.for("effect/Schedule/ScheduleDefect");
class ScheduleDefect {
  error;
  [ScheduleDefectTypeId];
  constructor(error) {
    this.error = error;
    this[ScheduleDefectTypeId] = ScheduleDefectTypeId;
  }
}
const isScheduleDefect = u => hasProperty(u, ScheduleDefectTypeId);
const scheduleDefectWrap = self => core.catchAll(self, e => core.die(new ScheduleDefect(e)));
/** @internal */
export const scheduleDefectRefailCause = cause => Option.match(internalCause.find(cause, _ => internalCause.isDieType(_) && isScheduleDefect(_.defect) ? Option.some(_.defect) : Option.none()), {
  onNone: () => cause,
  onSome: error => internalCause.fail(error.error)
});
/** @internal */
export const scheduleDefectRefail = effect => core.catchAllCause(effect, cause => core.failCause(scheduleDefectRefailCause(cause)));
/** @internal */
export const repeat_Effect = /*#__PURE__*/dual(2, (self, schedule) => repeatOrElse_Effect(self, schedule, (e, _) => core.fail(e)));
/** @internal */
export const repeat_combined = /*#__PURE__*/dual(2, (self, options) => {
  if (isSchedule(options)) {
    return repeat_Effect(self, options);
  }
  const base = options.schedule ?? passthrough(forever);
  const withWhile = options.while ? whileInputEffect(base, a => {
    const applied = options.while(a);
    if (typeof applied === "boolean") {
      return core.succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : base;
  const withUntil = options.until ? untilInputEffect(withWhile, a => {
    const applied = options.until(a);
    if (typeof applied === "boolean") {
      return core.succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : withWhile;
  const withTimes = options.times ? intersect(withUntil, recurs(options.times)).pipe(map(intersectionPair => intersectionPair[0])) : withUntil;
  return scheduleDefectRefail(repeat_Effect(self, withTimes));
});
/** @internal */
export const repeatOrElse_Effect = /*#__PURE__*/dual(3, (self, schedule, orElse) => core.flatMap(driver(schedule), driver => core.matchEffect(self, {
  onFailure: error => orElse(error, Option.none()),
  onSuccess: value => repeatOrElseEffectLoop(effect.provideServiceEffect(self, CurrentIterationMetadata, ref.get(driver.iterationMeta)), driver, (error, option) => effect.provideServiceEffect(orElse(error, option), CurrentIterationMetadata, ref.get(driver.iterationMeta)), value)
})));
/** @internal */
const repeatOrElseEffectLoop = (self, driver, orElse, value) => core.matchEffect(driver.next(value), {
  onFailure: () => core.orDie(driver.last),
  onSuccess: b => core.matchEffect(self, {
    onFailure: error => orElse(error, Option.some(b)),
    onSuccess: value => repeatOrElseEffectLoop(self, driver, orElse, value)
  })
});
/** @internal */
export const retry_Effect = /*#__PURE__*/dual(2, (self, policy) => retryOrElse_Effect(self, policy, (e, _) => core.fail(e)));
/** @internal */
export const retry_combined = /*#__PURE__*/dual(2, (self, options) => {
  if (isSchedule(options)) {
    return retry_Effect(self, options);
  }
  return scheduleDefectRefail(retry_Effect(self, fromRetryOptions(options)));
});
/** @internal */
export const fromRetryOptions = options => {
  const base = options.schedule ?? forever;
  const withWhile = options.while ? whileInputEffect(base, e => {
    const applied = options.while(e);
    if (typeof applied === "boolean") {
      return core.succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : base;
  const withUntil = options.until ? untilInputEffect(withWhile, e => {
    const applied = options.until(e);
    if (typeof applied === "boolean") {
      return core.succeed(applied);
    }
    return scheduleDefectWrap(applied);
  }) : withWhile;
  return options.times !== undefined ? intersect(withUntil, recurs(options.times)) : withUntil;
};
/** @internal */
export const retryOrElse_Effect = /*#__PURE__*/dual(3, (self, policy, orElse) => core.flatMap(driver(policy), driver => retryOrElse_EffectLoop(effect.provideServiceEffect(self, CurrentIterationMetadata, ref.get(driver.iterationMeta)), driver, (e, out) => effect.provideServiceEffect(orElse(e, out), CurrentIterationMetadata, ref.get(driver.iterationMeta)))));
/** @internal */
const retryOrElse_EffectLoop = (self, driver, orElse) => {
  return core.catchAll(self, e => core.matchEffect(driver.next(e), {
    onFailure: () => pipe(driver.last, core.orDie, core.flatMap(out => orElse(e, out))),
    onSuccess: () => retryOrElse_EffectLoop(self, driver, orElse)
  }));
};
/** @internal */
export const schedule_Effect = /*#__PURE__*/dual(2, (self, schedule) => scheduleFrom_Effect(self, void 0, schedule));
/** @internal */
export const scheduleFrom_Effect = /*#__PURE__*/dual(3, (self, initial, schedule) => core.flatMap(driver(schedule), driver => scheduleFrom_EffectLoop(effect.provideServiceEffect(self, CurrentIterationMetadata, ref.get(driver.iterationMeta)), initial, driver)));
/** @internal */
const scheduleFrom_EffectLoop = (self, initial, driver) => core.matchEffect(driver.next(initial), {
  onFailure: () => core.orDie(driver.last),
  onSuccess: () => core.flatMap(self, a => scheduleFrom_EffectLoop(self, a, driver))
});
/** @internal */
export const count = /*#__PURE__*/unfold(0, n => n + 1);
/** @internal */
export const elapsed = /*#__PURE__*/makeWithState(/*#__PURE__*/Option.none(), (now, _, state) => {
  switch (state._tag) {
    case "None":
      {
        return core.succeed([Option.some(now), Duration.zero, ScheduleDecision.continueWith(Interval.after(now))]);
      }
    case "Some":
      {
        return core.succeed([Option.some(state.value), Duration.millis(now - state.value), ScheduleDecision.continueWith(Interval.after(now))]);
      }
  }
});
/** @internal */
export const forever = /*#__PURE__*/unfold(0, n => n + 1);
/** @internal */
export const once = /*#__PURE__*/asVoid(/*#__PURE__*/recurs(1));
/** @internal */
export const stop = /*#__PURE__*/asVoid(/*#__PURE__*/recurs(0));
/** @internal */
export const scheduleForked = /*#__PURE__*/dual(2, (self, schedule) => forkScoped(schedule_Effect(self, schedule)));
//# sourceMappingURL=schedule.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withScheduler = exports.timerBatched = exports.timer = exports.makeMatrix = exports.makeBatched = exports.make = exports.defaultShouldYield = exports.defaultScheduler = exports.currentScheduler = exports.SyncScheduler = exports.SchedulerRunner = exports.PriorityBuckets = exports.MixedScheduler = exports.ControlledScheduler = void 0;
var _Function = require("./Function.js");
var _GlobalValue = require("./GlobalValue.js");
var core = _interopRequireWildcard(require("./internal/core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 3.20.0
 * @category models
 */
class SchedulerRunner {
  scheduleDrain;
  running = false;
  tasks = /*#__PURE__*/new PriorityBuckets();
  constructor(scheduleDrain) {
    this.scheduleDrain = scheduleDrain;
  }
  starveInternal = depth => {
    const tasks = this.tasks.buckets;
    this.tasks.buckets = [];
    for (const [_, toRun] of tasks) {
      for (let i = 0; i < toRun.length; i++) {
        toRun[i]();
      }
    }
    if (this.tasks.buckets.length === 0) {
      this.running = false;
    } else {
      this.starve(depth);
    }
  };
  starve(depth = 0) {
    this.scheduleDrain(depth, this.starveInternal);
  }
  scheduleTask(task, priority) {
    this.tasks.scheduleTask(task, priority);
    if (!this.running) {
      this.running = true;
      this.starve();
    }
  }
  /**
   * @since 3.20.0
   * @category constructors
   */
  static cached(scheduleDrain) {
    const fallback = new SchedulerRunner(scheduleDrain);
    const runners = new WeakMap();
    return fiber => {
      if (fiber === undefined) {
        return fallback;
      }
      let runner = runners.get(fiber);
      if (runner === undefined) {
        runner = new SchedulerRunner(scheduleDrain);
        runners.set(fiber, runner);
      }
      return runner;
    };
  }
}
/**
 * @since 2.0.0
 * @category utils
 */
exports.SchedulerRunner = SchedulerRunner;
class PriorityBuckets {
  /**
   * @since 2.0.0
   */
  buckets = [];
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    const length = this.buckets.length;
    let bucket = undefined;
    let index = 0;
    for (; index < length; index++) {
      if (this.buckets[index][0] <= priority) {
        bucket = this.buckets[index];
      } else {
        break;
      }
    }
    if (bucket && bucket[0] === priority) {
      bucket[1].push(task);
    } else if (index === length) {
      this.buckets.push([priority, [task]]);
    } else {
      this.buckets.splice(index, 0, [priority, [task]]);
    }
  }
}
/**
 * @since 2.0.0
 * @category constructors
 */
exports.PriorityBuckets = PriorityBuckets;
class MixedScheduler {
  maxNextTickBeforeTimer;
  getRunner = /*#__PURE__*/SchedulerRunner.cached((depth, drain) => {
    if (depth >= this.maxNextTickBeforeTimer) {
      setTimeout(() => drain(0), 0);
    } else {
      Promise.resolve(void 0).then(() => drain(depth + 1));
    }
  });
  constructor(
  /**
   * @since 2.0.0
   */
  maxNextTickBeforeTimer) {
    this.maxNextTickBeforeTimer = maxNextTickBeforeTimer;
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(core.currentMaxOpsBeforeYield) ? fiber.getFiberRef(core.currentSchedulingPriority) : false;
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority, fiber) {
    this.getRunner(fiber).scheduleTask(task, priority);
  }
}
/**
 * @since 2.0.0
 * @category schedulers
 */
exports.MixedScheduler = MixedScheduler;
const defaultScheduler = exports.defaultScheduler = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/Scheduler/defaultScheduler"), () => new MixedScheduler(2048));
/**
 * @since 2.0.0
 * @category constructors
 */
class SyncScheduler {
  /**
   * @since 2.0.0
   */
  tasks = /*#__PURE__*/new PriorityBuckets();
  /**
   * @since 2.0.0
   */
  deferred = false;
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority, fiber) {
    if (this.deferred) {
      defaultScheduler.scheduleTask(task, priority, fiber);
    } else {
      this.tasks.scheduleTask(task, priority);
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(core.currentMaxOpsBeforeYield) ? fiber.getFiberRef(core.currentSchedulingPriority) : false;
  }
  /**
   * @since 2.0.0
   */
  flush() {
    while (this.tasks.buckets.length > 0) {
      const tasks = this.tasks.buckets;
      this.tasks.buckets = [];
      for (const [_, toRun] of tasks) {
        for (let i = 0; i < toRun.length; i++) {
          toRun[i]();
        }
      }
    }
    this.deferred = true;
  }
}
/**
 * @since 2.0.0
 * @category constructors
 */
exports.SyncScheduler = SyncScheduler;
class ControlledScheduler {
  /**
   * @since 2.0.0
   */
  tasks = /*#__PURE__*/new PriorityBuckets();
  /**
   * @since 2.0.0
   */
  deferred = false;
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority, fiber) {
    if (this.deferred) {
      defaultScheduler.scheduleTask(task, priority, fiber);
    } else {
      this.tasks.scheduleTask(task, priority);
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(core.currentMaxOpsBeforeYield) ? fiber.getFiberRef(core.currentSchedulingPriority) : false;
  }
  /**
   * @since 2.0.0
   */
  step() {
    const tasks = this.tasks.buckets;
    this.tasks.buckets = [];
    for (const [_, toRun] of tasks) {
      for (let i = 0; i < toRun.length; i++) {
        toRun[i]();
      }
    }
  }
}
/**
 * @since 2.0.0
 * @category constructors
 */
exports.ControlledScheduler = ControlledScheduler;
const makeMatrix = (...record) => {
  const index = record.sort(([p0], [p1]) => p0 < p1 ? -1 : p0 > p1 ? 1 : 0);
  return {
    shouldYield(fiber) {
      for (const scheduler of record) {
        const priority = scheduler[1].shouldYield(fiber);
        if (priority !== false) {
          return priority;
        }
      }
      return false;
    },
    scheduleTask(task, priority, fiber) {
      let scheduler = undefined;
      for (const i of index) {
        if (priority >= i[0]) {
          scheduler = i[1];
        } else {
          return (scheduler ?? defaultScheduler).scheduleTask(task, priority, fiber);
        }
      }
      return (scheduler ?? defaultScheduler).scheduleTask(task, priority, fiber);
    }
  };
};
/**
 * @since 2.0.0
 * @category utilities
 */
exports.makeMatrix = makeMatrix;
const defaultShouldYield = fiber => {
  return fiber.currentOpCount > fiber.getFiberRef(core.currentMaxOpsBeforeYield) ? fiber.getFiberRef(core.currentSchedulingPriority) : false;
};
/**
 * @since 2.0.0
 * @category constructors
 */
exports.defaultShouldYield = defaultShouldYield;
const make = (scheduleTask, shouldYield = defaultShouldYield) => ({
  scheduleTask,
  shouldYield
});
/**
 * @since 2.0.0
 * @category constructors
 */
exports.make = make;
const makeBatched = (callback, shouldYield = defaultShouldYield) => {
  const getRunner = SchedulerRunner.cached((_, drain) => {
    callback(() => drain(0));
  });
  return make((task, priority, fiber) => {
    getRunner(fiber).scheduleTask(task, priority);
  }, shouldYield);
};
/**
 * @since 2.0.0
 * @category constructors
 */
exports.makeBatched = makeBatched;
const timer = (ms, shouldYield = defaultShouldYield) => make(task => setTimeout(task, ms), shouldYield);
/**
 * @since 2.0.0
 * @category constructors
 */
exports.timer = timer;
const timerBatched = (ms, shouldYield = defaultShouldYield) => makeBatched(task => setTimeout(task, ms), shouldYield);
/** @internal */
exports.timerBatched = timerBatched;
const currentScheduler = exports.currentScheduler = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentScheduler"), () => core.fiberRefUnsafeMake(defaultScheduler));
/** @internal */
const withScheduler = exports.withScheduler = /*#__PURE__*/(0, _Function.dual)(2, (self, scheduler) => core.fiberRefLocally(self, currentScheduler, scheduler));
//# sourceMappingURL=Scheduler.js.map
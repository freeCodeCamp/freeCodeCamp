/**
 * @since 2.0.0
 */
import { dual } from "./Function.js";
import { globalValue } from "./GlobalValue.js";
import * as core from "./internal/core.js";
/**
 * @since 3.20.0
 * @category models
 */
export class SchedulerRunner {
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
export class PriorityBuckets {
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
export class MixedScheduler {
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
export const defaultScheduler = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Scheduler/defaultScheduler"), () => new MixedScheduler(2048));
/**
 * @since 2.0.0
 * @category constructors
 */
export class SyncScheduler {
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
export class ControlledScheduler {
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
export const makeMatrix = (...record) => {
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
export const defaultShouldYield = fiber => {
  return fiber.currentOpCount > fiber.getFiberRef(core.currentMaxOpsBeforeYield) ? fiber.getFiberRef(core.currentSchedulingPriority) : false;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = (scheduleTask, shouldYield = defaultShouldYield) => ({
  scheduleTask,
  shouldYield
});
/**
 * @since 2.0.0
 * @category constructors
 */
export const makeBatched = (callback, shouldYield = defaultShouldYield) => {
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
export const timer = (ms, shouldYield = defaultShouldYield) => make(task => setTimeout(task, ms), shouldYield);
/**
 * @since 2.0.0
 * @category constructors
 */
export const timerBatched = (ms, shouldYield = defaultShouldYield) => makeBatched(task => setTimeout(task, ms), shouldYield);
/** @internal */
export const currentScheduler = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentScheduler"), () => core.fiberRefUnsafeMake(defaultScheduler));
/** @internal */
export const withScheduler = /*#__PURE__*/dual(2, (self, scheduler) => core.fiberRefLocally(self, currentScheduler, scheduler));
//# sourceMappingURL=Scheduler.js.map
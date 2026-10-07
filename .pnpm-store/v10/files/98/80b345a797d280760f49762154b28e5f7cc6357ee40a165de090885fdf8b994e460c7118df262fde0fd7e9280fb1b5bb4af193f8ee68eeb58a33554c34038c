import * as Either from "../Either.js";
import { dual } from "../Function.js";
import * as Predicate from "../Predicate.js";
import * as core from "./core.js";
import * as layer from "./layer.js";
import * as InternalSchedule from "./schedule.js";
/** @internal */
export const TypeId = /*#__PURE__*/Symbol.for("effect/ExecutionPlan");
/** @internal */
export const isExecutionPlan = u => Predicate.hasProperty(u, TypeId);
/** @internal */
export const withExecutionPlan = /*#__PURE__*/dual(2, (effect, plan) => core.suspend(() => {
  let i = 0;
  let result;
  return core.flatMap(core.whileLoop({
    while: () => i < plan.steps.length && (result === undefined || Either.isLeft(result)),
    body: () => {
      const step = plan.steps[i];
      let nextEffect = layer.effect_provide(effect, step.provide);
      if (result) {
        let attempted = false;
        const wrapped = nextEffect;
        // ensure the schedule is applied at least once
        nextEffect = core.suspend(() => {
          if (attempted) return wrapped;
          attempted = true;
          return result;
        });
        nextEffect = InternalSchedule.scheduleDefectRefail(InternalSchedule.retry_Effect(nextEffect, scheduleFromStep(step, false)));
      } else {
        const schedule = scheduleFromStep(step, true);
        nextEffect = schedule ? InternalSchedule.scheduleDefectRefail(InternalSchedule.retry_Effect(nextEffect, schedule)) : nextEffect;
      }
      return core.either(nextEffect);
    },
    step: either => {
      result = either;
      i++;
    }
  }), () => result);
}));
/** @internal */
export const scheduleFromStep = (step, first) => {
  if (!first) {
    return InternalSchedule.fromRetryOptions({
      schedule: step.schedule ? step.schedule : step.attempts ? undefined : InternalSchedule.once,
      times: step.attempts,
      while: step.while
    });
  } else if (step.attempts === 1 || !(step.schedule || step.attempts)) {
    return undefined;
  }
  return InternalSchedule.fromRetryOptions({
    schedule: step.schedule,
    while: step.while,
    times: step.attempts ? step.attempts - 1 : undefined
  });
};
//# sourceMappingURL=executionPlan.js.map
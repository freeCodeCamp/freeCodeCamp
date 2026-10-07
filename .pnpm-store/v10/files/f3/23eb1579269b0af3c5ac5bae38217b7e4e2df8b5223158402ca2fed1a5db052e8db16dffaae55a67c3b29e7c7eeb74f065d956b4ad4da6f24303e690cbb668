"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withExecutionPlan = exports.scheduleFromStep = exports.isExecutionPlan = exports.TypeId = void 0;
var Either = _interopRequireWildcard(require("../Either.js"));
var _Function = require("../Function.js");
var Predicate = _interopRequireWildcard(require("../Predicate.js"));
var core = _interopRequireWildcard(require("./core.js"));
var layer = _interopRequireWildcard(require("./layer.js"));
var InternalSchedule = _interopRequireWildcard(require("./schedule.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/ExecutionPlan");
/** @internal */
const isExecutionPlan = u => Predicate.hasProperty(u, TypeId);
/** @internal */
exports.isExecutionPlan = isExecutionPlan;
const withExecutionPlan = exports.withExecutionPlan = /*#__PURE__*/(0, _Function.dual)(2, (effect, plan) => core.suspend(() => {
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
const scheduleFromStep = (step, first) => {
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
exports.scheduleFromStep = scheduleFromStep;
//# sourceMappingURL=executionPlan.js.map
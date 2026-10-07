import { buildSchedulerFor } from './_internals/helpers/BuildSchedulerFor.js';
import { SchedulerArbitrary } from './_internals/SchedulerArbitrary.js';
export function scheduler(constraints) {
    const { act = (f) => f() } = constraints || {};
    return new SchedulerArbitrary(act);
}
function schedulerFor(customOrderingOrConstraints, constraintsOrUndefined) {
    const { act = (f) => f() } = Array.isArray(customOrderingOrConstraints)
        ? constraintsOrUndefined || {}
        : customOrderingOrConstraints || {};
    if (Array.isArray(customOrderingOrConstraints)) {
        return buildSchedulerFor(act, customOrderingOrConstraints);
    }
    return function (_strs, ...ordering) {
        return buildSchedulerFor(act, ordering);
    };
}
export { schedulerFor };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduler = scheduler;
exports.schedulerFor = schedulerFor;
const BuildSchedulerFor_1 = require("./_internals/helpers/BuildSchedulerFor");
const SchedulerArbitrary_1 = require("./_internals/SchedulerArbitrary");
function scheduler(constraints) {
    const { act = (f) => f() } = constraints || {};
    return new SchedulerArbitrary_1.SchedulerArbitrary(act);
}
function schedulerFor(customOrderingOrConstraints, constraintsOrUndefined) {
    const { act = (f) => f() } = Array.isArray(customOrderingOrConstraints)
        ? constraintsOrUndefined || {}
        : customOrderingOrConstraints || {};
    if (Array.isArray(customOrderingOrConstraints)) {
        return (0, BuildSchedulerFor_1.buildSchedulerFor)(act, customOrderingOrConstraints);
    }
    return function (_strs, ...ordering) {
        return (0, BuildSchedulerFor_1.buildSchedulerFor)(act, ordering);
    };
}

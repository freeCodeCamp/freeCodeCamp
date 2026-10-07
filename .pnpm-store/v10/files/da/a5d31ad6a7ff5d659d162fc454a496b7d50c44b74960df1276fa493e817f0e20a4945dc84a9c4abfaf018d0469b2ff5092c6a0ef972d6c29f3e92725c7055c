"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerArbitrary = void 0;
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const Stream_1 = require("../../stream/Stream");
const SchedulerImplem_1 = require("./implementations/SchedulerImplem");
function buildNextTaskIndex(mrng) {
    const clonedMrng = mrng.clone();
    return {
        clone: () => buildNextTaskIndex(clonedMrng),
        nextTaskIndex: (scheduledTasks) => {
            return mrng.nextInt(0, scheduledTasks.length - 1);
        },
    };
}
class SchedulerArbitrary extends Arbitrary_1.Arbitrary {
    constructor(act) {
        super();
        this.act = act;
    }
    generate(mrng, _biasFactor) {
        return new Value_1.Value(new SchedulerImplem_1.SchedulerImplem(this.act, buildNextTaskIndex(mrng.clone())), undefined);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    shrink(_value, _context) {
        return Stream_1.Stream.nil();
    }
}
exports.SchedulerArbitrary = SchedulerArbitrary;

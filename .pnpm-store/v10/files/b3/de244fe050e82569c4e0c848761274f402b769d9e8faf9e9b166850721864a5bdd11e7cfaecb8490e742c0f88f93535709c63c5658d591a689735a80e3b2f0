"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerIterator = void 0;
const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
const RunExecution_1 = require("./reporter/RunExecution");
class RunnerIterator {
    constructor(sourceValues, shrink, verbose, interruptedAsFailure) {
        this.sourceValues = sourceValues;
        this.shrink = shrink;
        this.runExecution = new RunExecution_1.RunExecution(verbose, interruptedAsFailure);
        this.currentIdx = -1;
        this.nextValues = sourceValues;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        const nextValue = this.nextValues.next();
        if (nextValue.done || this.runExecution.interrupted) {
            return { done: true, value: undefined };
        }
        this.currentValue = nextValue.value;
        ++this.currentIdx;
        return { done: false, value: nextValue.value.value_ };
    }
    handleResult(result) {
        if (result != null && typeof result === 'object' && !PreconditionFailure_1.PreconditionFailure.isFailure(result)) {
            this.runExecution.fail(this.currentValue.value_, this.currentIdx, result);
            this.currentIdx = -1;
            this.nextValues = this.shrink(this.currentValue);
        }
        else if (result != null) {
            if (!result.interruptExecution) {
                this.runExecution.skip(this.currentValue.value_);
                this.sourceValues.skippedOne();
            }
            else {
                this.runExecution.interrupt();
            }
        }
        else {
            this.runExecution.success(this.currentValue.value_);
        }
    }
}
exports.RunnerIterator = RunnerIterator;

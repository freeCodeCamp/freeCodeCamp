import { PreconditionFailure } from '../precondition/PreconditionFailure.js';
import { RunExecution } from './reporter/RunExecution.js';
export class RunnerIterator {
    constructor(sourceValues, shrink, verbose, interruptedAsFailure) {
        this.sourceValues = sourceValues;
        this.shrink = shrink;
        this.runExecution = new RunExecution(verbose, interruptedAsFailure);
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
        if (result != null && typeof result === 'object' && !PreconditionFailure.isFailure(result)) {
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

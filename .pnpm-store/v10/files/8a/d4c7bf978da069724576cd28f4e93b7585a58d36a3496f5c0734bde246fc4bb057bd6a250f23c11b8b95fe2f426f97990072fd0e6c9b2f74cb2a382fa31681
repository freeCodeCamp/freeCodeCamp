import { PreconditionFailure } from '../precondition/PreconditionFailure.js';
function interruptAfter(timeMs, setTimeoutSafe, clearTimeoutSafe) {
    let timeoutHandle = null;
    const promise = new Promise((resolve) => {
        timeoutHandle = setTimeoutSafe(() => {
            const preconditionFailure = new PreconditionFailure(true);
            resolve(preconditionFailure);
        }, timeMs);
    });
    return {
        clear: () => clearTimeoutSafe(timeoutHandle),
        promise,
    };
}
export class SkipAfterProperty {
    constructor(property, getTime, timeLimit, interruptExecution, setTimeoutSafe, clearTimeoutSafe) {
        this.property = property;
        this.getTime = getTime;
        this.interruptExecution = interruptExecution;
        this.setTimeoutSafe = setTimeoutSafe;
        this.clearTimeoutSafe = clearTimeoutSafe;
        this.skipAfterTime = this.getTime() + timeLimit;
        if (this.property.runBeforeEach !== undefined && this.property.runAfterEach !== undefined) {
            this.runBeforeEach = () => this.property.runBeforeEach();
            this.runAfterEach = () => this.property.runAfterEach();
        }
    }
    isAsync() {
        return this.property.isAsync();
    }
    generate(mrng, runId) {
        return this.property.generate(mrng, runId);
    }
    shrink(value) {
        return this.property.shrink(value);
    }
    run(v, dontRunHook) {
        const remainingTime = this.skipAfterTime - this.getTime();
        if (remainingTime <= 0) {
            const preconditionFailure = new PreconditionFailure(this.interruptExecution);
            if (this.isAsync()) {
                return Promise.resolve(preconditionFailure);
            }
            else {
                return preconditionFailure;
            }
        }
        if (this.interruptExecution && this.isAsync()) {
            const t = interruptAfter(remainingTime, this.setTimeoutSafe, this.clearTimeoutSafe);
            const propRun = Promise.race([this.property.run(v, dontRunHook), t.promise]);
            propRun.then(t.clear, t.clear);
            return propRun;
        }
        return this.property.run(v, dontRunHook);
    }
}

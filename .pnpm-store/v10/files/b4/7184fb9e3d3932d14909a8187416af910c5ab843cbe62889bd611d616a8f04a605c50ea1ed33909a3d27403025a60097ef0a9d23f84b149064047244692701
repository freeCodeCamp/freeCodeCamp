import { Error } from '../../utils/globals.js';
const timeoutAfter = (timeMs, setTimeoutSafe, clearTimeoutSafe) => {
    let timeoutHandle = null;
    const promise = new Promise((resolve) => {
        timeoutHandle = setTimeoutSafe(() => {
            resolve({
                error: new Error(`Property timeout: exceeded limit of ${timeMs} milliseconds`),
                errorMessage: `Property timeout: exceeded limit of ${timeMs} milliseconds`,
            });
        }, timeMs);
    });
    return {
        clear: () => clearTimeoutSafe(timeoutHandle),
        promise,
    };
};
export class TimeoutProperty {
    constructor(property, timeMs, setTimeoutSafe, clearTimeoutSafe) {
        this.property = property;
        this.timeMs = timeMs;
        this.setTimeoutSafe = setTimeoutSafe;
        this.clearTimeoutSafe = clearTimeoutSafe;
        if (this.property.runBeforeEach !== undefined && this.property.runAfterEach !== undefined) {
            this.runBeforeEach = () => Promise.resolve(this.property.runBeforeEach());
            this.runAfterEach = () => Promise.resolve(this.property.runAfterEach());
        }
    }
    isAsync() {
        return true;
    }
    generate(mrng, runId) {
        return this.property.generate(mrng, runId);
    }
    shrink(value) {
        return this.property.shrink(value);
    }
    async run(v, dontRunHook) {
        const t = timeoutAfter(this.timeMs, this.setTimeoutSafe, this.clearTimeoutSafe);
        const propRun = Promise.race([this.property.run(v, dontRunHook), t.promise]);
        propRun.then(t.clear, t.clear);
        return propRun;
    }
}

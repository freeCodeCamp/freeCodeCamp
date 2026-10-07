import { stringify } from '../../utils/stringify.js';
import { PreconditionFailure } from '../precondition/PreconditionFailure.js';
function fromSyncCached(cachedValue) {
    return cachedValue === null ? new PreconditionFailure() : cachedValue;
}
function fromCached(...data) {
    if (data[1])
        return data[0].then(fromSyncCached);
    return fromSyncCached(data[0]);
}
function fromCachedUnsafe(cachedValue, isAsync) {
    return fromCached(cachedValue, isAsync);
}
export class IgnoreEqualValuesProperty {
    constructor(property, skipRuns) {
        this.property = property;
        this.skipRuns = skipRuns;
        this.coveredCases = new Map();
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
        const stringifiedValue = stringify(v);
        if (this.coveredCases.has(stringifiedValue)) {
            const lastOutput = this.coveredCases.get(stringifiedValue);
            if (!this.skipRuns) {
                return lastOutput;
            }
            return fromCachedUnsafe(lastOutput, this.property.isAsync());
        }
        const out = this.property.run(v, dontRunHook);
        this.coveredCases.set(stringifiedValue, out);
        return out;
    }
}

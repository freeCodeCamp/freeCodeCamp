"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnbiasedProperty = void 0;
class UnbiasedProperty {
    constructor(property) {
        this.property = property;
        if (this.property.runBeforeEach !== undefined && this.property.runAfterEach !== undefined) {
            this.runBeforeEach = () => this.property.runBeforeEach();
            this.runAfterEach = () => this.property.runAfterEach();
        }
    }
    isAsync() {
        return this.property.isAsync();
    }
    generate(mrng, _runId) {
        return this.property.generate(mrng, undefined);
    }
    shrink(value) {
        return this.property.shrink(value);
    }
    run(v, dontRunHook) {
        return this.property.run(v, dontRunHook);
    }
}
exports.UnbiasedProperty = UnbiasedProperty;

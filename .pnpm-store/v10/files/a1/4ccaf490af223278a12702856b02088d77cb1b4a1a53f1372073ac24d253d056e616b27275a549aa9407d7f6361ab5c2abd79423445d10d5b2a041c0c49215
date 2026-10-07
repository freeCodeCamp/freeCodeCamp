"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncProperty = void 0;
const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
const IRawProperty_1 = require("./IRawProperty");
const GlobalParameters_1 = require("../runner/configuration/GlobalParameters");
const Stream_1 = require("../../stream/Stream");
const NoUndefinedAsContext_1 = require("../../arbitrary/_internals/helpers/NoUndefinedAsContext");
const globals_1 = require("../../utils/globals");
class AsyncProperty {
    constructor(arb, predicate) {
        this.arb = arb;
        this.predicate = predicate;
        const { asyncBeforeEach, asyncAfterEach, beforeEach, afterEach } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
        if (asyncBeforeEach !== undefined && beforeEach !== undefined) {
            throw (0, globals_1.Error)('Global "asyncBeforeEach" and "beforeEach" parameters can\'t be set at the same time when running async properties');
        }
        if (asyncAfterEach !== undefined && afterEach !== undefined) {
            throw (0, globals_1.Error)('Global "asyncAfterEach" and "afterEach" parameters can\'t be set at the same time when running async properties');
        }
        this.beforeEachHook = asyncBeforeEach || beforeEach || AsyncProperty.dummyHook;
        this.afterEachHook = asyncAfterEach || afterEach || AsyncProperty.dummyHook;
    }
    isAsync() {
        return true;
    }
    generate(mrng, runId) {
        const value = this.arb.generate(mrng, runId != null ? (0, IRawProperty_1.runIdToFrequency)(runId) : undefined);
        return (0, NoUndefinedAsContext_1.noUndefinedAsContext)(value);
    }
    shrink(value) {
        if (value.context === undefined && !this.arb.canShrinkWithoutContext(value.value_)) {
            return Stream_1.Stream.nil();
        }
        const safeContext = value.context !== NoUndefinedAsContext_1.UndefinedContextPlaceholder ? value.context : undefined;
        return this.arb.shrink(value.value_, safeContext).map(NoUndefinedAsContext_1.noUndefinedAsContext);
    }
    async runBeforeEach() {
        await this.beforeEachHook();
    }
    async runAfterEach() {
        await this.afterEachHook();
    }
    async run(v, dontRunHook) {
        if (!dontRunHook) {
            await this.beforeEachHook();
        }
        try {
            const output = await this.predicate(v);
            return output == null || output === true
                ? null
                : {
                    error: new globals_1.Error('Property failed by returning false'),
                    errorMessage: 'Error: Property failed by returning false',
                };
        }
        catch (err) {
            if (PreconditionFailure_1.PreconditionFailure.isFailure(err))
                return err;
            if (err instanceof globals_1.Error && err.stack) {
                return { error: err, errorMessage: err.stack };
            }
            return { error: err, errorMessage: (0, globals_1.String)(err) };
        }
        finally {
            if (!dontRunHook) {
                await this.afterEachHook();
            }
        }
    }
    beforeEach(hookFunction) {
        const previousBeforeEachHook = this.beforeEachHook;
        this.beforeEachHook = () => hookFunction(previousBeforeEachHook);
        return this;
    }
    afterEach(hookFunction) {
        const previousAfterEachHook = this.afterEachHook;
        this.afterEachHook = () => hookFunction(previousAfterEachHook);
        return this;
    }
}
exports.AsyncProperty = AsyncProperty;
AsyncProperty.dummyHook = () => { };

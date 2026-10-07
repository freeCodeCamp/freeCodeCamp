import { PreconditionFailure } from '../precondition/PreconditionFailure.js';
import { runIdToFrequency } from './IRawProperty.js';
import { readConfigureGlobal } from '../runner/configuration/GlobalParameters.js';
import { Stream } from '../../stream/Stream.js';
import { noUndefinedAsContext, UndefinedContextPlaceholder, } from '../../arbitrary/_internals/helpers/NoUndefinedAsContext.js';
import { Error, String } from '../../utils/globals.js';
export class AsyncProperty {
    constructor(arb, predicate) {
        this.arb = arb;
        this.predicate = predicate;
        const { asyncBeforeEach, asyncAfterEach, beforeEach, afterEach } = readConfigureGlobal() || {};
        if (asyncBeforeEach !== undefined && beforeEach !== undefined) {
            throw Error('Global "asyncBeforeEach" and "beforeEach" parameters can\'t be set at the same time when running async properties');
        }
        if (asyncAfterEach !== undefined && afterEach !== undefined) {
            throw Error('Global "asyncAfterEach" and "afterEach" parameters can\'t be set at the same time when running async properties');
        }
        this.beforeEachHook = asyncBeforeEach || beforeEach || AsyncProperty.dummyHook;
        this.afterEachHook = asyncAfterEach || afterEach || AsyncProperty.dummyHook;
    }
    isAsync() {
        return true;
    }
    generate(mrng, runId) {
        const value = this.arb.generate(mrng, runId != null ? runIdToFrequency(runId) : undefined);
        return noUndefinedAsContext(value);
    }
    shrink(value) {
        if (value.context === undefined && !this.arb.canShrinkWithoutContext(value.value_)) {
            return Stream.nil();
        }
        const safeContext = value.context !== UndefinedContextPlaceholder ? value.context : undefined;
        return this.arb.shrink(value.value_, safeContext).map(noUndefinedAsContext);
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
                    error: new Error('Property failed by returning false'),
                    errorMessage: 'Error: Property failed by returning false',
                };
        }
        catch (err) {
            if (PreconditionFailure.isFailure(err))
                return err;
            if (err instanceof Error && err.stack) {
                return { error: err, errorMessage: err.stack };
            }
            return { error: err, errorMessage: String(err) };
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
AsyncProperty.dummyHook = () => { };

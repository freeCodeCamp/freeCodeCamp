import { PreconditionFailure } from '../precondition/PreconditionFailure.js';
import { runIdToFrequency } from './IRawProperty.js';
import { readConfigureGlobal } from '../runner/configuration/GlobalParameters.js';
import { Stream } from '../../stream/Stream.js';
import { noUndefinedAsContext, UndefinedContextPlaceholder, } from '../../arbitrary/_internals/helpers/NoUndefinedAsContext.js';
import { Error, String } from '../../utils/globals.js';
export class Property {
    constructor(arb, predicate) {
        this.arb = arb;
        this.predicate = predicate;
        const { beforeEach = Property.dummyHook, afterEach = Property.dummyHook, asyncBeforeEach, asyncAfterEach, } = readConfigureGlobal() || {};
        if (asyncBeforeEach !== undefined) {
            throw Error('"asyncBeforeEach" can\'t be set when running synchronous properties');
        }
        if (asyncAfterEach !== undefined) {
            throw Error('"asyncAfterEach" can\'t be set when running synchronous properties');
        }
        this.beforeEachHook = beforeEach;
        this.afterEachHook = afterEach;
    }
    isAsync() {
        return false;
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
    runBeforeEach() {
        this.beforeEachHook();
    }
    runAfterEach() {
        this.afterEachHook();
    }
    run(v, dontRunHook) {
        if (!dontRunHook) {
            this.beforeEachHook();
        }
        try {
            const output = this.predicate(v);
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
                this.afterEachHook();
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
Property.dummyHook = () => { };

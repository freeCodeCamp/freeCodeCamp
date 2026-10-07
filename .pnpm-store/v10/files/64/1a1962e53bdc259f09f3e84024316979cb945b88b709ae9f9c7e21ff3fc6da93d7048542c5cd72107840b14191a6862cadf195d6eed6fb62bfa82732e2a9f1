import type { IRawProperty } from './IRawProperty.js';
import type { GlobalAsyncPropertyHookFunction } from '../runner/configuration/GlobalParameters.js';
/**
 * Type of legal hook function that can be used to call `beforeEach` or `afterEach`
 * on a {@link IAsyncPropertyWithHooks}
 *
 * @remarks Since 2.2.0
 * @public
 */
export type AsyncPropertyHookFunction = ((previousHookFunction: GlobalAsyncPropertyHookFunction) => Promise<unknown>) | ((previousHookFunction: GlobalAsyncPropertyHookFunction) => void);
/**
 * Interface for asynchronous property, see {@link IRawProperty}
 * @remarks Since 1.19.0
 * @public
 */
export interface IAsyncProperty<Ts> extends IRawProperty<Ts, true> {
}
/**
 * Interface for asynchronous property defining hooks, see {@link IAsyncProperty}
 * @remarks Since 2.2.0
 * @public
 */
export interface IAsyncPropertyWithHooks<Ts> extends IAsyncProperty<Ts> {
    /**
     * Define a function that should be called before all calls to the predicate
     * @param hookFunction - Function to be called
     * @remarks Since 1.6.0
     */
    beforeEach(hookFunction: AsyncPropertyHookFunction): IAsyncPropertyWithHooks<Ts>;
    /**
     * Define a function that should be called after all calls to the predicate
     * @param hookFunction - Function to be called
     * @remarks Since 1.6.0
     */
    afterEach(hookFunction: AsyncPropertyHookFunction): IAsyncPropertyWithHooks<Ts>;
}

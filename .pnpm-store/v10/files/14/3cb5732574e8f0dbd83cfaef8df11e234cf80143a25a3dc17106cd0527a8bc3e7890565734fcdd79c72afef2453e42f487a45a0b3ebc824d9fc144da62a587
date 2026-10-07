import type { IRawProperty } from './IRawProperty.js';
import type { GlobalPropertyHookFunction } from '../runner/configuration/GlobalParameters.js';
/**
 * Type of legal hook function that can be used to call `beforeEach` or `afterEach`
 * on a {@link IPropertyWithHooks}
 *
 * @remarks Since 2.2.0
 * @public
 */
export type PropertyHookFunction = (globalHookFunction: GlobalPropertyHookFunction) => void;
/**
 * Interface for synchronous property, see {@link IRawProperty}
 * @remarks Since 1.19.0
 * @public
 */
export interface IProperty<Ts> extends IRawProperty<Ts, false> {
}
/**
 * Interface for synchronous property defining hooks, see {@link IProperty}
 * @remarks Since 2.2.0
 * @public
 */
export interface IPropertyWithHooks<Ts> extends IProperty<Ts> {
    /**
     * Define a function that should be called before all calls to the predicate
     * @param invalidHookFunction - Function to be called, please provide a valid hook function
     * @remarks Since 1.6.0
     */
    beforeEach(invalidHookFunction: (hookFunction: GlobalPropertyHookFunction) => Promise<unknown>): 'beforeEach expects a synchronous function but was given a function returning a Promise';
    /**
     * Define a function that should be called before all calls to the predicate
     * @param hookFunction - Function to be called
     * @remarks Since 1.6.0
     */
    beforeEach(hookFunction: PropertyHookFunction): IPropertyWithHooks<Ts>;
    /**
     * Define a function that should be called after all calls to the predicate
     * @param invalidHookFunction - Function to be called, please provide a valid hook function
     * @remarks Since 1.6.0
     */
    afterEach(invalidHookFunction: (hookFunction: GlobalPropertyHookFunction) => Promise<unknown>): 'afterEach expects a synchronous function but was given a function returning a Promise';
    /**
     * Define a function that should be called after all calls to the predicate
     * @param hookFunction - Function to be called
     * @remarks Since 1.6.0
     */
    afterEach(hookFunction: PropertyHookFunction): IPropertyWithHooks<Ts>;
}

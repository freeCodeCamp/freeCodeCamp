import type { Arbitrary } from '../arbitrary/definition/Arbitrary.js';
import type { IAsyncProperty, IAsyncPropertyWithHooks, AsyncPropertyHookFunction } from './AsyncProperty.generic.js';
/**
 * Instantiate a new {@link fast-check#IAsyncProperty}
 * @param predicate - Assess the success of the property. Would be considered falsy if it throws or if its output evaluates to false
 * @remarks Since 0.0.7
 * @public
 */
declare function asyncProperty<Ts extends [unknown, ...unknown[]]>(...args: [...arbitraries: {
    [K in keyof Ts]: Arbitrary<Ts[K]>;
}, predicate: (...args: Ts) => Promise<boolean | void>]): IAsyncPropertyWithHooks<Ts>;
export type { IAsyncProperty, IAsyncPropertyWithHooks, AsyncPropertyHookFunction };
export { asyncProperty };

import type { Arbitrary } from '../../../check/arbitrary/definition/Arbitrary.js';
export type ArbitraryGeneratorCache = <T, TArgs extends unknown[]>(builder: (...params: TArgs) => Arbitrary<T>, args: TArgs) => Arbitrary<T>;
export declare function buildStableArbitraryGeneratorCache(isEqual: (v1: unknown, v2: unknown) => boolean): ArbitraryGeneratorCache;
export declare function naiveIsEqual(v1: unknown, v2: unknown): boolean;

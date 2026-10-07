import type { FloatConstraints } from '../../float.js';
export declare const maxNonIntegerValue = 8388607.5;
export declare const onlyIntegersAfterThisValue = 8388608;
/**
 * Refine source constraints receive by a float to focus only on non-integer values.
 * @param constraints - Source constraints to be refined
 */
export declare function refineConstraintsForFloatOnly(constraints: Omit<FloatConstraints, 'noInteger'>): Required<Omit<FloatConstraints, 'noInteger'>>;
export declare function floatOnlyMapper(value: number): number;
export declare function floatOnlyUnmapper(value: unknown): number;

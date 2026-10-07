/**
 * @since 2.0.0
 */
import type * as Equal from "./Equal.js";
import type { Pipeable } from "./Pipeable.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MetricBoundariesTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricBoundariesTypeId = typeof MetricBoundariesTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface MetricBoundaries extends Equal.Equal, Pipeable {
    readonly [MetricBoundariesTypeId]: MetricBoundariesTypeId;
    readonly values: ReadonlyArray<number>;
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isMetricBoundaries: (u: unknown) => u is MetricBoundaries;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: (iterable: Iterable<number>) => MetricBoundaries;
/**
 * A helper method to create histogram bucket boundaries for a histogram
 * with linear increasing values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const linear: (options: {
    readonly start: number;
    readonly width: number;
    readonly count: number;
}) => MetricBoundaries;
/**
 * A helper method to create histogram bucket boundaries for a histogram
 * with exponentially increasing values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const exponential: (options: {
    readonly start: number;
    readonly factor: number;
    readonly count: number;
}) => MetricBoundaries;
//# sourceMappingURL=MetricBoundaries.d.ts.map
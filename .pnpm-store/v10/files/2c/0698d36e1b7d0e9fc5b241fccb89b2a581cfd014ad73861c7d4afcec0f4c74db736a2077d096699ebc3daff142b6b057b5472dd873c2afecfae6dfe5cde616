import type * as MetricKey from "./MetricKey.js";
import type * as MetricKeyType from "./MetricKeyType.js";
import type * as MetricState from "./MetricState.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MetricPairTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricPairTypeId = typeof MetricPairTypeId;
/**
 * @since 2.0.0
 * @category model
 */
export interface MetricPair<out Type extends MetricKeyType.MetricKeyType<any, any>> extends MetricPair.Variance<Type>, Pipeable {
    readonly metricKey: MetricKey.MetricKey<Type>;
    readonly metricState: MetricState.MetricState<MetricKeyType.MetricKeyType.OutType<Type>>;
}
/**
 * @since 2.0.0
 */
export declare namespace MetricPair {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Untyped extends MetricPair<MetricKeyType.MetricKeyType<any, any>> {
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<out Type extends MetricKeyType.MetricKeyType<any, any>> {
        readonly [MetricPairTypeId]: {
            readonly _Type: Types.Covariant<Type>;
        };
    }
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <Type extends MetricKeyType.MetricKeyType<any, any>>(metricKey: MetricKey.MetricKey<Type>, metricState: MetricState.MetricState<MetricKeyType.MetricKeyType.OutType<Type>>) => MetricPair.Untyped;
/**
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeMake: <Type extends MetricKeyType.MetricKeyType<any, any>>(metricKey: MetricKey.MetricKey<Type>, metricState: MetricState.MetricState.Untyped) => MetricPair.Untyped;
//# sourceMappingURL=MetricPair.d.ts.map
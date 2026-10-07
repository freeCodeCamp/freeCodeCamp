import { Event } from '../types/event';
/**
 * Ordered LRU cache for storing feature flags in the scope context. The name
 * of each flag in the buffer is unique, and the output of getAll() is ordered
 * from oldest to newest.
 */
export type FeatureFlag = {
    readonly flag: string;
    readonly result: boolean;
};
/**
 * Max size of the LRU flag buffer stored in Sentry scope and event contexts.
 */
export declare const _INTERNAL_FLAG_BUFFER_SIZE = 100;
/**
 * Max number of flag evaluations to record per span.
 */
export declare const _INTERNAL_MAX_FLAGS_PER_SPAN = 10;
/**
 * Copies feature flags that are in current scope context to the event context
 */
export declare function _INTERNAL_copyFlagsFromScopeToEvent(event: Event): Event;
/**
 * Inserts a flag into the current scope's context while maintaining ordered LRU properties.
 * Not thread-safe. After inserting:
 * - The flag buffer is sorted in order of recency, with the newest evaluation at the end.
 * - The names in the buffer are always unique.
 * - The length of the buffer never exceeds `maxSize`.
 *
 * @param name     Name of the feature flag to insert.
 * @param value    Value of the feature flag.
 * @param maxSize  Max number of flags the buffer should store. Default value should always be used in production.
 */
export declare function _INTERNAL_insertFlagToScope(name: string, value: unknown, maxSize?: number): void;
/**
 * Exported for tests only. Currently only accepts boolean values (otherwise no-op).
 * Inserts a flag into a FeatureFlag array while maintaining the following properties:
 * - Flags are sorted in order of recency, with the newest evaluation at the end.
 * - The flag names are always unique.
 * - The length of the array never exceeds `maxSize`.
 *
 * @param flags      The buffer to insert the flag into.
 * @param name       Name of the feature flag to insert.
 * @param value      Value of the feature flag.
 * @param maxSize    Max number of flags the buffer should store. Default value should always be used in production.
 */
export declare function _INTERNAL_insertToFlagBuffer(flags: FeatureFlag[], name: string, value: unknown, maxSize: number): void;
/**
 * Records a feature flag evaluation for the active span. This is a no-op for non-boolean values.
 * The flag and its value is stored in span attributes with the `flag.evaluation` prefix. Once the
 * unique flags for a span reaches maxFlagsPerSpan, subsequent flags are dropped.
 *
 * @param name             Name of the feature flag.
 * @param value            Value of the feature flag. Non-boolean values are ignored.
 * @param maxFlagsPerSpan  Max number of flags a buffer should store. Default value should always be used in production.
 */
export declare function _INTERNAL_addFeatureFlagToActiveSpan(name: string, value: unknown, maxFlagsPerSpan?: number): void;
//# sourceMappingURL=featureFlags.d.ts.map

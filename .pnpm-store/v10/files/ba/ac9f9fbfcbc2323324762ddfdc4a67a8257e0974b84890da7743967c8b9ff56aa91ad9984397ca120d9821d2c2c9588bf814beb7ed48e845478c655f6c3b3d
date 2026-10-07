/**
 * @since 3.19.4
 * @experimental
 */
import * as Effect from "./Effect.js";
/**
 * @since 3.19.4
 * @category Models
 * @experimental
 */
export declare const TypeId: TypeId;
/**
 * @since 3.19.4
 * @category Models
 * @experimental
 */
export type TypeId = "~effect/PartitionedSemaphore";
/**
 * A `PartitionedSemaphore` is a concurrency primitive that can be used to
 * control concurrent access to a resource across multiple partitions identified
 * by keys.
 *
 * The total number of permits is shared across all partitions, with waiting
 * permits equally distributed among partitions using a round-robin strategy.
 *
 * This is useful when you want to limit the total number of concurrent accesses
 * to a resource, while still allowing for fair distribution of access across
 * different partitions.
 *
 * @since 3.19.4
 * @category Models
 * @experimental
 */
export interface PartitionedSemaphore<in K> {
    readonly [TypeId]: TypeId;
    readonly withPermits: (key: K, permits: number) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
}
/**
 * A `PartitionedSemaphore` is a concurrency primitive that can be used to
 * control concurrent access to a resource across multiple partitions identified
 * by keys.
 *
 * The total number of permits is shared across all partitions, with waiting
 * permits equally distributed among partitions using a round-robin strategy.
 *
 * This is useful when you want to limit the total number of concurrent accesses
 * to a resource, while still allowing for fair distribution of access across
 * different partitions.
 *
 * @since 3.19.4
 * @category Constructors
 * @experimental
 */
export declare const makeUnsafe: <K = unknown>(options: {
    readonly permits: number;
}) => PartitionedSemaphore<K>;
/**
 * A `PartitionedSemaphore` is a concurrency primitive that can be used to
 * control concurrent access to a resource across multiple partitions identified
 * by keys.
 *
 * The total number of permits is shared across all partitions, with waiting
 * permits equally distributed among partitions using a round-robin strategy.
 *
 * This is useful when you want to limit the total number of concurrent accesses
 * to a resource, while still allowing for fair distribution of access across
 * different partitions.
 *
 * @since 3.19.4
 * @category Constructors
 * @experimental
 */
export declare const make: <K = unknown>(options: {
    readonly permits: number;
}) => Effect.Effect<PartitionedSemaphore<K>>;
//# sourceMappingURL=PartitionedSemaphore.d.ts.map
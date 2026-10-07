import { type Pipeable } from "./Pipeable.js";
import * as PrimaryKey from "./PrimaryKey.js";
declare const TypeId: "~effect/cluster/HashRing";
/**
 * @since 3.19.0
 * @category Models
 * @experimental
 */
export interface HashRing<A extends PrimaryKey.PrimaryKey> extends Pipeable, Iterable<A> {
    readonly [TypeId]: typeof TypeId;
    readonly baseWeight: number;
    totalWeightCache: number;
    readonly nodes: Map<string, [node: A, weight: number]>;
    ring: Array<[hash: number, node: string]>;
}
/**
 * @since 3.19.0
 * @category Guards
 * @experimental
 */
export declare const isHashRing: (u: unknown) => u is HashRing<any>;
/**
 * @since 3.19.0
 * @category Constructors
 * @experimental
 */
export declare const make: <A extends PrimaryKey.PrimaryKey>(options?: {
    readonly baseWeight?: number | undefined;
}) => HashRing<A>;
/**
 * Add new nodes to the ring. If a node already exists in the ring, it
 * will be updated. For example, you can use this to update the node's weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export declare const addMany: {
    /**
     * Add new nodes to the ring. If a node already exists in the ring, it
     * will be updated. For example, you can use this to update the node's weight.
     *
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(nodes: Iterable<A>, options?: {
        readonly weight?: number | undefined;
    }): (self: HashRing<A>) => HashRing<A>;
    /**
     * Add new nodes to the ring. If a node already exists in the ring, it
     * will be updated. For example, you can use this to update the node's weight.
     *
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, nodes: Iterable<A>, options?: {
        readonly weight?: number | undefined;
    }): HashRing<A>;
};
/**
 * Add a new node to the ring. If the node already exists in the ring, it
 * will be updated. For example, you can use this to update the node's weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export declare const add: {
    /**
     * Add a new node to the ring. If the node already exists in the ring, it
     * will be updated. For example, you can use this to update the node's weight.
     *
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(node: A, options?: {
        readonly weight?: number | undefined;
    }): (self: HashRing<A>) => HashRing<A>;
    /**
     * Add a new node to the ring. If the node already exists in the ring, it
     * will be updated. For example, you can use this to update the node's weight.
     *
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A, options?: {
        readonly weight?: number | undefined;
    }): HashRing<A>;
};
/**
 * Removes the node from the ring. No-op's if the node does not exist.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export declare const remove: {
    /**
     * Removes the node from the ring. No-op's if the node does not exist.
     *
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(node: A): (self: HashRing<A>) => HashRing<A>;
    /**
     * Removes the node from the ring. No-op's if the node does not exist.
     *
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A): HashRing<A>;
};
/**
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export declare const has: {
    /**
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(node: A): (self: HashRing<A>) => boolean;
    /**
     * @since 3.19.0
     * @category Combinators
     * @experimental
     */
    <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A): boolean;
};
/**
 * Gets the node which should handle the given input. Returns undefined if
 * the hashring has no elements with weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export declare const get: <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, input: string) => A | undefined;
/**
 * Distributes `count` shards across the nodes in the ring, attempting to
 * balance the number of shards allocated to each node. Returns undefined if
 * the hashring has no elements with weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export declare const getShards: <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, count: number) => Array<A> | undefined;
export {};
//# sourceMappingURL=HashRing.d.ts.map
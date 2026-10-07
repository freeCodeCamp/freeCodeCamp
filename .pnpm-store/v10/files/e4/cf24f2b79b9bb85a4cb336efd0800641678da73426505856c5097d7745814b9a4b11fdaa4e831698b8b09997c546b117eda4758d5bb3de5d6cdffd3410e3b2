import type { Document } from './doc/Document';
import type { Alias } from './nodes/Alias';
import type { Node } from './nodes/Node';
import type { Pair } from './nodes/Pair';
import type { Scalar } from './nodes/Scalar';
import type { YAMLMap } from './nodes/YAMLMap';
import type { YAMLSeq } from './nodes/YAMLSeq';
export type visitorFn<T> = (key: number | 'key' | 'value' | null, node: T, path: readonly (Document | Node | Pair)[]) => void | symbol | number | Node | Pair;
export type visitor = visitorFn<unknown> | {
    Alias?: visitorFn<Alias>;
    Collection?: visitorFn<YAMLMap | YAMLSeq>;
    Map?: visitorFn<YAMLMap>;
    Node?: visitorFn<Alias | Scalar | YAMLMap | YAMLSeq>;
    Pair?: visitorFn<Pair>;
    Scalar?: visitorFn<Scalar>;
    Seq?: visitorFn<YAMLSeq>;
    Value?: visitorFn<Scalar | YAMLMap | YAMLSeq>;
};
export type asyncVisitorFn<T> = (key: number | 'key' | 'value' | null, node: T, path: readonly (Document | Node | Pair)[]) => void | symbol | number | Node | Pair | Promise<void | symbol | number | Node | Pair>;
export type asyncVisitor = asyncVisitorFn<unknown> | {
    Alias?: asyncVisitorFn<Alias>;
    Collection?: asyncVisitorFn<YAMLMap | YAMLSeq>;
    Map?: asyncVisitorFn<YAMLMap>;
    Node?: asyncVisitorFn<Alias | Scalar | YAMLMap | YAMLSeq>;
    Pair?: asyncVisitorFn<Pair>;
    Scalar?: asyncVisitorFn<Scalar>;
    Seq?: asyncVisitorFn<YAMLSeq>;
    Value?: asyncVisitorFn<Scalar | YAMLMap | YAMLSeq>;
};
/**
 * Apply a visitor to an AST node or document.
 *
 * Walks through the tree (depth-first) starting from `node`, calling a
 * `visitor` function with three arguments:
 *   - `key`: For sequence values and map `Pair`, the node's index in the
 *     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
 *     `null` for the root node.
 *   - `node`: The current node.
 *   - `path`: The ancestry of the current node.
 *
 * The return value of the visitor may be used to control the traversal:
 *   - `undefined` (default): Do nothing and continue
 *   - `visit.SKIP`: Do not visit the children of this node, continue with next
 *     sibling
 *   - `visit.BREAK`: Terminate traversal completely
 *   - `visit.REMOVE`: Remove the current node, then continue with the next one
 *   - `Node`: Replace the current node, then continue by visiting it
 *   - `number`: While iterating the items of a sequence or map, set the index
 *     of the next step. This is useful especially if the index of the current
 *     node has changed.
 *
 * If `visitor` is a single function, it will be called with all values
 * encountered in the tree, including e.g. `null` values. Alternatively,
 * separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
 * `Alias` and `Scalar` node. To define the same visitor function for more than
 * one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
 * and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
 * specific defined one will be used for each node.
 */
export declare function visit(node: Node | Document | null, visitor: visitor): void;
export declare namespace visit {
    var BREAK: symbol;
    var SKIP: symbol;
    var REMOVE: symbol;
}
/**
 * Apply an async visitor to an AST node or document.
 *
 * Walks through the tree (depth-first) starting from `node`, calling a
 * `visitor` function with three arguments:
 *   - `key`: For sequence values and map `Pair`, the node's index in the
 *     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
 *     `null` for the root node.
 *   - `node`: The current node.
 *   - `path`: The ancestry of the current node.
 *
 * The return value of the visitor may be used to control the traversal:
 *   - `Promise`: Must resolve to one of the following values
 *   - `undefined` (default): Do nothing and continue
 *   - `visit.SKIP`: Do not visit the children of this node, continue with next
 *     sibling
 *   - `visit.BREAK`: Terminate traversal completely
 *   - `visit.REMOVE`: Remove the current node, then continue with the next one
 *   - `Node`: Replace the current node, then continue by visiting it
 *   - `number`: While iterating the items of a sequence or map, set the index
 *     of the next step. This is useful especially if the index of the current
 *     node has changed.
 *
 * If `visitor` is a single function, it will be called with all values
 * encountered in the tree, including e.g. `null` values. Alternatively,
 * separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
 * `Alias` and `Scalar` node. To define the same visitor function for more than
 * one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
 * and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
 * specific defined one will be used for each node.
 */
export declare function visitAsync(node: Node | Document | null, visitor: asyncVisitor): Promise<void>;
export declare namespace visitAsync {
    var BREAK: symbol;
    var SKIP: symbol;
    var REMOVE: symbol;
}

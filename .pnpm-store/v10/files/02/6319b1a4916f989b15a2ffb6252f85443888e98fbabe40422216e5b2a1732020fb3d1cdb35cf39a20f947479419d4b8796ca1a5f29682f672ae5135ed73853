import type { BlockMap, BlockSequence, CollectionItem, Document, FlowCollection } from './cst';
export type VisitPath = readonly ['key' | 'value', number][];
export type Visitor = (item: CollectionItem, path: VisitPath) => number | symbol | Visitor | void;
/**
 * Apply a visitor to a CST document or item.
 *
 * Walks through the tree (depth-first) starting from the root, calling a
 * `visitor` function with two arguments when entering each item:
 *   - `item`: The current item, which included the following members:
 *     - `start: SourceToken[]` – Source tokens before the key or value,
 *       possibly including its anchor or tag.
 *     - `key?: Token | null` – Set for pair values. May then be `null`, if
 *       the key before the `:` separator is empty.
 *     - `sep?: SourceToken[]` – Source tokens between the key and the value,
 *       which should include the `:` map value indicator if `value` is set.
 *     - `value?: Token` – The value of a sequence item, or of a map pair.
 *   - `path`: The steps from the root to the current node, as an array of
 *     `['key' | 'value', number]` tuples.
 *
 * The return value of the visitor may be used to control the traversal:
 *   - `undefined` (default): Do nothing and continue
 *   - `visit.SKIP`: Do not visit the children of this token, continue with
 *      next sibling
 *   - `visit.BREAK`: Terminate traversal completely
 *   - `visit.REMOVE`: Remove the current item, then continue with the next one
 *   - `number`: Set the index of the next step. This is useful especially if
 *     the index of the current token has changed.
 *   - `function`: Define the next visitor for this item. After the original
 *     visitor is called on item entry, next visitors are called after handling
 *     a non-empty `key` and when exiting the item.
 */
export declare function visit(cst: Document | CollectionItem, visitor: Visitor): void;
export declare namespace visit {
    var BREAK: symbol;
    var SKIP: symbol;
    var REMOVE: symbol;
    var itemAtPath: (cst: Document | CollectionItem, path: VisitPath) => CollectionItem | undefined;
    var parentCollection: (cst: Document | CollectionItem, path: VisitPath) => BlockMap | BlockSequence | FlowCollection;
}

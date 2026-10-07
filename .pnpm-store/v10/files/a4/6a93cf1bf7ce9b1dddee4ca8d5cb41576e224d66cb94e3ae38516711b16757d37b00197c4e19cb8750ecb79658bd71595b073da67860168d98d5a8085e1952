import type { CompiledQuery, Options, Query, Adapter } from "./types";
export type { Options };
/**
 * Compiles the query, returns a function.
 */
export declare const compile: <Node_1, ElementNode extends Node_1>(selector: string | import("css-what").Selector[][], options?: Options<Node_1, ElementNode> | undefined, context?: Node_1 | Node_1[] | undefined) => CompiledQuery<Node_1>;
export declare const _compileUnsafe: <Node_1, ElementNode extends Node_1>(selector: string | import("css-what").Selector[][], options?: Options<Node_1, ElementNode> | undefined, context?: Node_1 | Node_1[] | undefined) => CompiledQuery<ElementNode>;
export declare const _compileToken: <Node_1, ElementNode extends Node_1>(selector: import("./types").InternalSelector[][], options?: Options<Node_1, ElementNode> | undefined, context?: Node_1 | Node_1[] | undefined) => CompiledQuery<ElementNode>;
export declare function prepareContext<Node, ElementNode extends Node>(elems: Node | Node[], adapter: Adapter<Node, ElementNode>, shouldTestNextSiblings?: boolean): Node[];
/**
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elems Elements to query. If it is an element, its children will be queried..
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns All matching elements.
 *
 */
export declare const selectAll: <Node_1, ElementNode extends Node_1>(query: Query<ElementNode>, elements: Node_1 | Node_1[], options?: Options<Node_1, ElementNode> | undefined) => ElementNode[];
/**
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elems Elements to query. If it is an element, its children will be queried..
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns the first match, or null if there was no match.
 */
export declare const selectOne: <Node_1, ElementNode extends Node_1>(query: Query<ElementNode>, elements: Node_1 | Node_1[], options?: Options<Node_1, ElementNode> | undefined) => ElementNode | null;
/**
 * Tests whether or not an element is matched by query.
 *
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elem The element to test if it matches the query.
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns
 */
export declare function is<Node, ElementNode extends Node>(elem: ElementNode, query: Query<ElementNode>, options?: Options<Node, ElementNode>): boolean;
/**
 * Alias for selectAll(query, elems, options).
 * @see [compile] for supported selector queries.
 */
export default selectAll;
export { filters, pseudos, aliases } from "./pseudo-selectors";
//# sourceMappingURL=index.d.ts.map
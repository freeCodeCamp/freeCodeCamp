import { CompileToken } from "./../types";
import type { Selector } from "css-what";
import type { CompiledQuery, InternalOptions, Adapter } from "../types";
/** Used as a placeholder for :has. Will be replaced with the actual element. */
export declare const PLACEHOLDER_ELEMENT: {};
export declare function ensureIsTag<Node, ElementNode extends Node>(next: CompiledQuery<ElementNode>, adapter: Adapter<Node, ElementNode>): CompiledQuery<Node>;
export declare type Subselect = <Node, ElementNode extends Node>(next: CompiledQuery<ElementNode>, subselect: Selector[][], options: InternalOptions<Node, ElementNode>, context: Node[] | undefined, compileToken: CompileToken<Node, ElementNode>) => CompiledQuery<ElementNode>;
export declare function getNextSiblings<Node, ElementNode extends Node>(elem: Node, adapter: Adapter<Node, ElementNode>): ElementNode[];
export declare const subselects: Record<string, Subselect>;
//# sourceMappingURL=subselects.d.ts.map
import { InternalSelector } from "./types";
import { Selector } from "css-what";
import type { CompiledQuery, InternalOptions } from "./types";
/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */
export declare function compile<Node, ElementNode extends Node>(selector: string | Selector[][], options: InternalOptions<Node, ElementNode>, context?: Node[] | Node): CompiledQuery<Node>;
export declare function compileUnsafe<Node, ElementNode extends Node>(selector: string | Selector[][], options: InternalOptions<Node, ElementNode>, context?: Node[] | Node): CompiledQuery<ElementNode>;
export declare function compileToken<Node, ElementNode extends Node>(token: InternalSelector[][], options: InternalOptions<Node, ElementNode>, context?: Node[] | Node): CompiledQuery<ElementNode>;
//# sourceMappingURL=compile.d.ts.map
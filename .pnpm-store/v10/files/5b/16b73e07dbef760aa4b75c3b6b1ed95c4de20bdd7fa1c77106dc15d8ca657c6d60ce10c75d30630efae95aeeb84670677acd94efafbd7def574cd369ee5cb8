import { Parser, ParserOptions } from "./Parser";
export { Parser, ParserOptions };
import { DomHandler, DomHandlerOptions, Node, Element, Document } from "domhandler";
export { DomHandler, DomHandlerOptions };
declare type Options = ParserOptions & DomHandlerOptions;
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
export declare function parseDocument(data: string, options?: Options): Document;
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */
export declare function parseDOM(data: string, options?: Options): Node[];
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
export declare function createDomStream(cb: (error: Error | null, dom: Node[]) => void, options?: Options, elementCb?: (element: Element) => void): Parser;
export { default as Tokenizer, Callbacks as TokenizerCallbacks, } from "./Tokenizer";
import * as ElementType from "domelementtype";
export { ElementType };
export * from "./FeedHandler";
export * as DomUtils from "domutils";
export { DomHandler as DefaultHandler };
export { FeedHandler as RssHandler } from "./FeedHandler";
//# sourceMappingURL=index.d.ts.map
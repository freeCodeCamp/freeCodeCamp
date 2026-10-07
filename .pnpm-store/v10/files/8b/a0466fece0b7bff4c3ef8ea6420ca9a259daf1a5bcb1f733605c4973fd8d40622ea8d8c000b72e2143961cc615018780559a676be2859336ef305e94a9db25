import { ChildNode, Element, DataNode, Document, ParentNode } from "./node.js";
export * from "./node.js";
export interface DomHandlerOptions {
    /**
     * Add a `startIndex` property to nodes.
     * When the parser is used in a non-streaming fashion, `startIndex` is an integer
     * indicating the position of the start of the node in the document.
     *
     * @default false
     */
    withStartIndices?: boolean;
    /**
     * Add an `endIndex` property to nodes.
     * When the parser is used in a non-streaming fashion, `endIndex` is an integer
     * indicating the position of the end of the node in the document.
     *
     * @default false
     */
    withEndIndices?: boolean;
    /**
     * Treat the markup as XML.
     *
     * @default false
     */
    xmlMode?: boolean;
}
interface ParserInterface {
    startIndex: number | null;
    endIndex: number | null;
}
declare type Callback = (error: Error | null, dom: ChildNode[]) => void;
declare type ElementCallback = (element: Element) => void;
export declare class DomHandler {
    /** The elements of the DOM */
    dom: ChildNode[];
    /** The root element for the DOM */
    root: Document;
    /** Called once parsing has completed. */
    private readonly callback;
    /** Settings for the handler. */
    private readonly options;
    /** Callback whenever a tag is closed. */
    private readonly elementCB;
    /** Indicated whether parsing has been completed. */
    private done;
    /** Stack of open tags. */
    protected tagStack: ParentNode[];
    /** A data node that is still being written to. */
    protected lastNode: DataNode | null;
    /** Reference to the parser instance. Used for location information. */
    private parser;
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    constructor(callback?: Callback | null, options?: DomHandlerOptions | null, elementCB?: ElementCallback);
    onparserinit(parser: ParserInterface): void;
    onreset(): void;
    onend(): void;
    onerror(error: Error): void;
    onclosetag(): void;
    onopentag(name: string, attribs: {
        [key: string]: string;
    }): void;
    ontext(data: string): void;
    oncomment(data: string): void;
    oncommentend(): void;
    oncdatastart(): void;
    oncdataend(): void;
    onprocessinginstruction(name: string, data: string): void;
    protected handleCallback(error: Error | null): void;
    protected addNode(node: ChildNode): void;
}
export default DomHandler;
//# sourceMappingURL=index.d.ts.map
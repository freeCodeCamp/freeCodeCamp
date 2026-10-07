import Tokenizer, { Callbacks, QuoteType } from "./Tokenizer.js";
export interface ParserOptions {
    /**
     * Indicates whether special tags (`<script>`, `<style>`, and `<title>`) should get special treatment
     * and if "empty" tags (eg. `<br>`) can have children.  If `false`, the content of special tags
     * will be text only. For feeds and other XML content (documents that don't consist of HTML),
     * set this to `true`.
     *
     * @default false
     */
    xmlMode?: boolean;
    /**
     * Decode entities within the document.
     *
     * @default true
     */
    decodeEntities?: boolean;
    /**
     * If set to true, all tags will be lowercased.
     *
     * @default !xmlMode
     */
    lowerCaseTags?: boolean;
    /**
     * If set to `true`, all attribute names will be lowercased. This has noticeable impact on speed.
     *
     * @default !xmlMode
     */
    lowerCaseAttributeNames?: boolean;
    /**
     * If set to true, CDATA sections will be recognized as text even if the xmlMode option is not enabled.
     * NOTE: If xmlMode is set to `true` then CDATA sections will always be recognized as text.
     *
     * @default xmlMode
     */
    recognizeCDATA?: boolean;
    /**
     * If set to `true`, self-closing tags will trigger the onclosetag event even if xmlMode is not set to `true`.
     * NOTE: If xmlMode is set to `true` then self-closing tags will always be recognized.
     *
     * @default xmlMode
     */
    recognizeSelfClosing?: boolean;
    /**
     * Allows the default tokenizer to be overwritten.
     */
    Tokenizer?: typeof Tokenizer;
}
export interface Handler {
    onparserinit(parser: Parser): void;
    /**
     * Resets the handler back to starting state
     */
    onreset(): void;
    /**
     * Signals the handler that parsing is done
     */
    onend(): void;
    onerror(error: Error): void;
    onclosetag(name: string, isImplied: boolean): void;
    onopentagname(name: string): void;
    /**
     *
     * @param name Name of the attribute
     * @param value Value of the attribute.
     * @param quote Quotes used around the attribute. `null` if the attribute has no quotes around the value, `undefined` if the attribute has no value.
     */
    onattribute(name: string, value: string, quote?: string | undefined | null): void;
    onopentag(name: string, attribs: {
        [s: string]: string;
    }, isImplied: boolean): void;
    ontext(data: string): void;
    oncomment(data: string): void;
    oncdatastart(): void;
    oncdataend(): void;
    oncommentend(): void;
    onprocessinginstruction(name: string, data: string): void;
}
export declare class Parser implements Callbacks {
    private readonly options;
    /** The start index of the last event. */
    startIndex: number;
    /** The end index of the last event. */
    endIndex: number;
    /**
     * Store the start index of the current open tag,
     * so we can update the start index for attributes.
     */
    private openTagStart;
    private tagname;
    private attribname;
    private attribvalue;
    private attribs;
    private readonly stack;
    private readonly foreignContext;
    private readonly cbs;
    private readonly lowerCaseTagNames;
    private readonly lowerCaseAttributeNames;
    private readonly tokenizer;
    private readonly buffers;
    private bufferOffset;
    /** The index of the last written buffer. Used when resuming after a `pause()`. */
    private writeIndex;
    /** Indicates whether the parser has finished running / `.end` has been called. */
    private ended;
    constructor(cbs?: Partial<Handler> | null, options?: ParserOptions);
    /** @internal */
    ontext(start: number, endIndex: number): void;
    /** @internal */
    ontextentity(cp: number): void;
    protected isVoidElement(name: string): boolean;
    /** @internal */
    onopentagname(start: number, endIndex: number): void;
    private emitOpenTag;
    private endOpenTag;
    /** @internal */
    onopentagend(endIndex: number): void;
    /** @internal */
    onclosetag(start: number, endIndex: number): void;
    /** @internal */
    onselfclosingtag(endIndex: number): void;
    private closeCurrentTag;
    /** @internal */
    onattribname(start: number, endIndex: number): void;
    /** @internal */
    onattribdata(start: number, endIndex: number): void;
    /** @internal */
    onattribentity(cp: number): void;
    /** @internal */
    onattribend(quote: QuoteType, endIndex: number): void;
    private getInstructionName;
    /** @internal */
    ondeclaration(start: number, endIndex: number): void;
    /** @internal */
    onprocessinginstruction(start: number, endIndex: number): void;
    /** @internal */
    oncomment(start: number, endIndex: number, offset: number): void;
    /** @internal */
    oncdata(start: number, endIndex: number, offset: number): void;
    /** @internal */
    onend(): void;
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    reset(): void;
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    parseComplete(data: string): void;
    private getSlice;
    private shiftBuffer;
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    write(chunk: string): void;
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    end(chunk?: string): void;
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    pause(): void;
    /**
     * Resumes parsing after `pause` was called.
     */
    resume(): void;
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    parseChunk(chunk: string): void;
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    done(chunk?: string): void;
}
//# sourceMappingURL=Parser.d.ts.map
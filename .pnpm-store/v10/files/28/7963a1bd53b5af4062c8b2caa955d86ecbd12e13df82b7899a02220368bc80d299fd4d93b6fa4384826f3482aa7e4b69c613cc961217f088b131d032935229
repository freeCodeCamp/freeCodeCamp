import { Tree, NodePropSource, ParseWrapper, Parser, NodeSet, Input, TreeFragment, PartialParse, NodeType } from '@lezer/common';

/**
A parse stack. These are used internally by the parser to track
parsing progress. They also provide some properties and methods
that external code such as a tokenizer can use to get information
about the parse state.
*/
declare class Stack {
    /**
    The input position up to which this stack has parsed.
    */
    pos: number;
    /**
    The stack's current [context](#lr.ContextTracker) value, if
    any. Its type will depend on the context tracker's type
    parameter, or it will be `null` if there is no context
    tracker.
    */
    get context(): any;
    /**
    Check if the given term would be able to be shifted (optionally
    after some reductions) on this stack. This can be useful for
    external tokenizers that want to make sure they only provide a
    given token when it applies.
    */
    canShift(term: number): boolean;
    /**
    Get the parser used by this stack.
    */
    get parser(): LRParser;
    /**
    Test whether a given dialect (by numeric ID, as exported from
    the terms file) is enabled.
    */
    dialectEnabled(dialectID: number): boolean;
    private shiftContext;
    private reduceContext;
    private updateContext;
}

/**
[Tokenizers](#lr.ExternalTokenizer) interact with the input
through this interface. It presents the input as a stream of
characters, tracking lookahead and hiding the complexity of
[ranges](#common.Parser.parse^ranges) from tokenizer code.
*/
declare class InputStream {
    /**
    Backup chunk
    */
    private chunk2;
    private chunk2Pos;
    /**
    The character code of the next code unit in the input, or -1
    when the stream is at the end of the input.
    */
    next: number;
    /**
    The current position of the stream. Note that, due to parses
    being able to cover non-contiguous
    [ranges](#common.Parser.startParse), advancing the stream does
    not always mean its position moves a single unit.
    */
    pos: number;
    private rangeIndex;
    private range;
    /**
    Look at a code unit near the stream position. `.peek(0)` equals
    `.next`, `.peek(-1)` gives you the previous character, and so
    on.
    
    Note that looking around during tokenizing creates dependencies
    on potentially far-away content, which may reduce the
    effectiveness incremental parsing—when looking forward—or even
    cause invalid reparses when looking backward more than 25 code
    units, since the library does not track lookbehind.
    */
    peek(offset: number): number;
    /**
    Accept a token. By default, the end of the token is set to the
    current stream position, but you can pass an offset (relative to
    the stream position) to change that.
    */
    acceptToken(token: number, endOffset?: number): void;
    /**
    Accept a token ending at a specific given position.
    */
    acceptTokenTo(token: number, endPos: number): void;
    private getChunk;
    private readNext;
    /**
    Move the stream forward N (defaults to 1) code units. Returns
    the new value of [`next`](#lr.InputStream.next).
    */
    advance(n?: number): number;
    private setDone;
}
interface Tokenizer {
}
/**
@hide
*/
declare class LocalTokenGroup implements Tokenizer {
    readonly precTable: number;
    readonly elseToken?: number | undefined;
    contextual: boolean;
    fallback: boolean;
    extend: boolean;
    readonly data: Readonly<Uint16Array>;
    constructor(data: Readonly<Uint16Array> | string, precTable: number, elseToken?: number | undefined);
    token(input: InputStream, stack: Stack): void;
}
interface ExternalOptions {
    /**
    When set to true, mark this tokenizer as depending on the
    current parse stack, which prevents its result from being cached
    between parser actions at the same positions.
    */
    contextual?: boolean;
    /**
    By defaults, when a tokenizer returns a token, that prevents
    tokenizers with lower precedence from even running. When
    `fallback` is true, the tokenizer is allowed to run when a
    previous tokenizer returned a token that didn't match any of the
    current state's actions.
    */
    fallback?: boolean;
    /**
    When set to true, tokenizing will not stop after this tokenizer
    has produced a token. (But it will still fail to reach this one
    if a higher-precedence tokenizer produced a token.)
    */
    extend?: boolean;
}
/**
`@external tokens` declarations in the grammar should resolve to
an instance of this class.
*/
declare class ExternalTokenizer {
    /**
    Create a tokenizer. The first argument is the function that,
    given an input stream, scans for the types of tokens it
    recognizes at the stream's position, and calls
    [`acceptToken`](#lr.InputStream.acceptToken) when it finds
    one.
    */
    constructor(
    /**
    @internal
    */
    token: (input: InputStream, stack: Stack) => void, options?: ExternalOptions);
}

/**
Context trackers are used to track stateful context (such as
indentation in the Python grammar, or parent elements in the XML
grammar) needed by external tokenizers. You declare them in a
grammar file as `@context exportName from "module"`.

Context values should be immutable, and can be updated (replaced)
on shift or reduce actions.

The export used in a `@context` declaration should be of this
type.
*/
declare class ContextTracker<T> {
    /**
    Define a context tracker.
    */
    constructor(spec: {
        /**
        The initial value of the context at the start of the parse.
        */
        start: T;
        /**
        Update the context when the parser executes a
        [shift](https://en.wikipedia.org/wiki/LR_parser#Shift_and_reduce_actions)
        action.
        */
        shift?(context: T, term: number, stack: Stack, input: InputStream): T;
        /**
        Update the context when the parser executes a reduce action.
        */
        reduce?(context: T, term: number, stack: Stack, input: InputStream): T;
        /**
        Update the context when the parser reuses a node from a tree
        fragment.
        */
        reuse?(context: T, node: Tree, stack: Stack, input: InputStream): T;
        /**
        Reduce a context value to a number (for cheap storage and
        comparison). Only needed for strict contexts.
        */
        hash?(context: T): number;
        /**
        By default, nodes can only be reused during incremental
        parsing if they were created in the same context as the one in
        which they are reused. Set this to false to disable that
        check (and the overhead of storing the hashes).
        */
        strict?: boolean;
    });
}
/**
Configuration options when
[reconfiguring](#lr.LRParser.configure) a parser.
*/
interface ParserConfig {
    /**
    Node prop values to add to the parser's node set.
    */
    props?: readonly NodePropSource[];
    /**
    The name of the `@top` declaration to parse from. If not
    specified, the first top rule declaration in the grammar is
    used.
    */
    top?: string;
    /**
    A space-separated string of dialects to enable.
    */
    dialect?: string;
    /**
    Replace the given external tokenizers with new ones.
    */
    tokenizers?: {
        from: ExternalTokenizer;
        to: ExternalTokenizer;
    }[];
    /**
    Replace external specializers with new ones.
    */
    specializers?: {
        from: (value: string, stack: Stack) => number;
        to: (value: string, stack: Stack) => number;
    }[];
    /**
    Replace the context tracker with a new one.
    */
    contextTracker?: ContextTracker<any>;
    /**
    When true, the parser will raise an exception, rather than run
    its error-recovery strategies, when the input doesn't match the
    grammar.
    */
    strict?: boolean;
    /**
    Add a wrapper, which can extend parses created by this parser
    with additional logic (usually used to add
    [mixed-language](#common.parseMixed) parsing).
    */
    wrap?: ParseWrapper;
    /**
    The maximum length of the TreeBuffers generated in the output
    tree. Defaults to 1024.
    */
    bufferLength?: number;
}
/**
Holds the parse tables for a given grammar, as generated by
`lezer-generator`, and provides [methods](#common.Parser) to parse
content with.
*/
declare class LRParser extends Parser {
    /**
    The nodes used in the trees emitted by this parser.
    */
    readonly nodeSet: NodeSet;
    createParse(input: Input, fragments: readonly TreeFragment[], ranges: readonly {
        from: number;
        to: number;
    }[]): PartialParse;
    /**
    Configure the parser. Returns a new parser instance that has the
    given settings modified. Settings not provided in `config` are
    kept from the original parser.
    */
    configure(config: ParserConfig): LRParser;
    /**
    Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
    are registered for this parser.
    */
    hasWrappers(): boolean;
    /**
    Returns the name associated with a given term. This will only
    work for all terms when the parser was generated with the
    `--names` option. By default, only the names of tagged terms are
    stored.
    */
    getName(term: number): string;
    /**
    The type of top node produced by the parser.
    */
    get topNode(): NodeType;
    /**
    Used by the output of the parser generator. Not available to
    user code. @hide
    */
    static deserialize(spec: any): LRParser;
}

export { ContextTracker, ExternalTokenizer, InputStream, LRParser, LocalTokenGroup, ParserConfig, Stack };

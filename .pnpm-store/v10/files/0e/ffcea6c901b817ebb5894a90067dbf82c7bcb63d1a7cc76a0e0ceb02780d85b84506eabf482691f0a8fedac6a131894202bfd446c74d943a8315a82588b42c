import { NodeProp, SyntaxNode, Parser, Tree, Input, TreeFragment, NodeType } from '@lezer/common';
import { LRParser, ParserConfig } from '@lezer/lr';
import * as _codemirror_state from '@codemirror/state';
import { Facet, EditorState, Extension, Text, StateField, Range } from '@codemirror/state';
import { EditorView, DecorationSet, Command, KeyBinding, ViewUpdate, BlockInfo, Decoration } from '@codemirror/view';
import { Highlighter, Tag } from '@lezer/highlight';
import { StyleModule, StyleSpec } from 'style-mod';

/**
Node prop stored in a parser's top syntax node to provide the
facet that stores language-specific data for that language.
*/
declare const languageDataProp: NodeProp<Facet<{
    [name: string]: any;
}, readonly {
    [name: string]: any;
}[]>>;
/**
Helper function to define a facet (to be added to the top syntax
node(s) for a language via
[`languageDataProp`](https://codemirror.net/6/docs/ref/#language.languageDataProp)), that will be
used to associate language data with the language. You
probably only need this when subclassing
[`Language`](https://codemirror.net/6/docs/ref/#language.Language).
*/
declare function defineLanguageFacet(baseData?: {
    [name: string]: any;
}): Facet<{
    [name: string]: any;
}, readonly {
    [name: string]: any;
}[]>;
/**
Some languages need to return different [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) for some parts of their
tree. Sublanguages, registered by adding a [node
prop](https://codemirror.net/6/docs/ref/#language.sublanguageProp) to the language's top syntax
node, provide a mechanism to do this.

(Note that when using nested parsing, where nested syntax is
parsed by a different parser and has its own top node type, you
don't need a sublanguage.)
*/
interface Sublanguage {
    /**
    Determines whether the data provided by this sublanguage should
    completely replace the regular data or be added to it (with
    higher-precedence). The default is `"extend"`.
    */
    type?: "replace" | "extend";
    /**
    A predicate that returns whether the node at the queried
    position is part of the sublanguage.
    */
    test: (node: SyntaxNode, state: EditorState) => boolean;
    /**
    The language data facet that holds the sublanguage's data.
    You'll want to use
    [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet) to create
    this.
    */
    facet: Facet<{
        [name: string]: any;
    }>;
}
/**
Syntax node prop used to register sublanguages. Should be added to
the top level node type for the language.
*/
declare const sublanguageProp: NodeProp<Sublanguage[]>;
/**
A language object manages parsing and per-language
[metadata](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt). Parse data is
managed as a [Lezer](https://lezer.codemirror.net) tree. The class
can be used directly, via the [`LRLanguage`](https://codemirror.net/6/docs/ref/#language.LRLanguage)
subclass for [Lezer](https://lezer.codemirror.net/) LR parsers, or
via the [`StreamLanguage`](https://codemirror.net/6/docs/ref/#language.StreamLanguage) subclass
for stream parsers.
*/
declare class Language {
    /**
    The [language data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) facet
    used for this language.
    */
    readonly data: Facet<{
        [name: string]: any;
    }>;
    /**
    A language name.
    */
    readonly name: string;
    /**
    The extension value to install this as the document language.
    */
    readonly extension: Extension;
    /**
    The parser object. Can be useful when using this as a [nested
    parser](https://lezer.codemirror.net/docs/ref#common.Parser).
    */
    parser: Parser;
    /**
    Construct a language object. If you need to invoke this
    directly, first define a data facet with
    [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
    configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
    to the language's outer syntax node.
    */
    constructor(
    /**
    The [language data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) facet
    used for this language.
    */
    data: Facet<{
        [name: string]: any;
    }>, parser: Parser, extraExtensions?: Extension[], 
    /**
    A language name.
    */
    name?: string);
    /**
    Query whether this language is active at the given position.
    */
    isActiveAt(state: EditorState, pos: number, side?: -1 | 0 | 1): boolean;
    /**
    Find the document regions that were parsed using this language.
    The returned regions will _include_ any nested languages rooted
    in this language, when those exist.
    */
    findRegions(state: EditorState): {
        from: number;
        to: number;
    }[];
    /**
    Indicates whether this language allows nested languages. The
    default implementation returns true.
    */
    get allowsNesting(): boolean;
}
/**
A subclass of [`Language`](https://codemirror.net/6/docs/ref/#language.Language) for use with Lezer
[LR parsers](https://lezer.codemirror.net/docs/ref#lr.LRParser)
parsers.
*/
declare class LRLanguage extends Language {
    readonly parser: LRParser;
    private constructor();
    /**
    Define a language from a parser.
    */
    static define(spec: {
        /**
        The [name](https://codemirror.net/6/docs/ref/#Language.name) of the language.
        */
        name?: string;
        /**
        The parser to use. Should already have added editor-relevant
        node props (and optionally things like dialect and top rule)
        configured.
        */
        parser: LRParser;
        /**
        [Language data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt)
        to register for this language.
        */
        languageData?: {
            [name: string]: any;
        };
    }): LRLanguage;
    /**
    Create a new instance of this language with a reconfigured
    version of its parser and optionally a new name.
    */
    configure(options: ParserConfig, name?: string): LRLanguage;
    get allowsNesting(): boolean;
}
/**
Get the syntax tree for a state, which is the current (possibly
incomplete) parse tree of the active
[language](https://codemirror.net/6/docs/ref/#language.Language), or the empty tree if there is no
language available.
*/
declare function syntaxTree(state: EditorState): Tree;
/**
Try to get a parse tree that spans at least up to `upto`. The
method will do at most `timeout` milliseconds of work to parse
up to that point if the tree isn't already available.
*/
declare function ensureSyntaxTree(state: EditorState, upto: number, timeout?: number): Tree | null;
/**
Queries whether there is a full syntax tree available up to the
given document position. If there isn't, the background parse
process _might_ still be working and update the tree further, but
there is no guarantee of that—the parser will [stop
working](https://codemirror.net/6/docs/ref/#language.syntaxParserRunning) when it has spent a
certain amount of time or has moved beyond the visible viewport.
Always returns false if no language has been enabled.
*/
declare function syntaxTreeAvailable(state: EditorState, upto?: number): boolean;
/**
Move parsing forward, and update the editor state afterwards to
reflect the new tree. Will work for at most `timeout`
milliseconds. Returns true if the parser managed get to the given
position in that time.
*/
declare function forceParsing(view: EditorView, upto?: number, timeout?: number): boolean;
/**
Tells you whether the language parser is planning to do more
parsing work (in a `requestIdleCallback` pseudo-thread) or has
stopped running, either because it parsed the entire document,
because it spent too much time and was cut off, or because there
is no language parser enabled.
*/
declare function syntaxParserRunning(view: EditorView): boolean;
/**
Lezer-style
[`Input`](https://lezer.codemirror.net/docs/ref#common.Input)
object for a [`Text`](https://codemirror.net/6/docs/ref/#state.Text) object.
*/
declare class DocInput implements Input {
    readonly doc: Text;
    private cursor;
    private cursorPos;
    private string;
    /**
    Create an input object for the given document.
    */
    constructor(doc: Text);
    get length(): number;
    private syncTo;
    chunk(pos: number): string;
    get lineChunks(): boolean;
    read(from: number, to: number): string;
}
/**
A parse context provided to parsers working on the editor content.
*/
declare class ParseContext {
    private parser;
    /**
    The current editor state.
    */
    readonly state: EditorState;
    /**
    Tree fragments that can be reused by incremental re-parses.
    */
    fragments: readonly TreeFragment[];
    /**
    The current editor viewport (or some overapproximation
    thereof). Intended to be used for opportunistically avoiding
    work (in which case
    [`skipUntilInView`](https://codemirror.net/6/docs/ref/#language.ParseContext.skipUntilInView)
    should be called to make sure the parser is restarted when the
    skipped region becomes visible).
    */
    viewport: {
        from: number;
        to: number;
    };
    private parse;
    private constructor();
    private startParse;
    private withContext;
    private withoutTempSkipped;
    /**
    Notify the parse scheduler that the given region was skipped
    because it wasn't in view, and the parse should be restarted
    when it comes into view.
    */
    skipUntilInView(from: number, to: number): void;
    /**
    Returns a parser intended to be used as placeholder when
    asynchronously loading a nested parser. It'll skip its input and
    mark it as not-really-parsed, so that the next update will parse
    it again.
    
    When `until` is given, a reparse will be scheduled when that
    promise resolves.
    */
    static getSkippingParser(until?: Promise<unknown>): Parser;
    /**
    Get the context for the current parse, or `null` if no editor
    parse is in progress.
    */
    static get(): ParseContext | null;
}
/**
The facet used to associate a language with an editor state. Used
by `Language` object's `extension` property (so you don't need to
manually wrap your languages in this). Can be used to access the
current language on a state.
*/
declare const language: Facet<Language, Language | null>;
/**
This class bundles a [language](https://codemirror.net/6/docs/ref/#language.Language) with an
optional set of supporting extensions. Language packages are
encouraged to export a function that optionally takes a
configuration object and returns a `LanguageSupport` instance, as
the main way for client code to use the package.
*/
declare class LanguageSupport {
    /**
    The language object.
    */
    readonly language: Language;
    /**
    An optional set of supporting extensions. When nesting a
    language in another language, the outer language is encouraged
    to include the supporting extensions for its inner languages
    in its own set of support extensions.
    */
    readonly support: Extension;
    /**
    An extension including both the language and its support
    extensions. (Allowing the object to be used as an extension
    value itself.)
    */
    extension: Extension;
    /**
    Create a language support object.
    */
    constructor(
    /**
    The language object.
    */
    language: Language, 
    /**
    An optional set of supporting extensions. When nesting a
    language in another language, the outer language is encouraged
    to include the supporting extensions for its inner languages
    in its own set of support extensions.
    */
    support?: Extension);
}
/**
Language descriptions are used to store metadata about languages
and to dynamically load them. Their main role is finding the
appropriate language for a filename or dynamically loading nested
parsers.
*/
declare class LanguageDescription {
    /**
    The name of this language.
    */
    readonly name: string;
    /**
    Alternative names for the mode (lowercased, includes `this.name`).
    */
    readonly alias: readonly string[];
    /**
    File extensions associated with this language.
    */
    readonly extensions: readonly string[];
    /**
    Optional filename pattern that should be associated with this
    language.
    */
    readonly filename: RegExp | undefined;
    private loadFunc;
    /**
    If the language has been loaded, this will hold its value.
    */
    support: LanguageSupport | undefined;
    private loading;
    private constructor();
    /**
    Start loading the the language. Will return a promise that
    resolves to a [`LanguageSupport`](https://codemirror.net/6/docs/ref/#language.LanguageSupport)
    object when the language successfully loads.
    */
    load(): Promise<LanguageSupport>;
    /**
    Create a language description.
    */
    static of(spec: {
        /**
        The language's name.
        */
        name: string;
        /**
        An optional array of alternative names.
        */
        alias?: readonly string[];
        /**
        An optional array of filename extensions associated with this
        language.
        */
        extensions?: readonly string[];
        /**
        An optional filename pattern associated with this language.
        */
        filename?: RegExp;
        /**
        A function that will asynchronously load the language.
        */
        load?: () => Promise<LanguageSupport>;
        /**
        Alternatively to `load`, you can provide an already loaded
        support object. Either this or `load` should be provided.
        */
        support?: LanguageSupport;
    }): LanguageDescription;
    /**
    Look for a language in the given array of descriptions that
    matches the filename. Will first match
    [`filename`](https://codemirror.net/6/docs/ref/#language.LanguageDescription.filename) patterns,
    and then [extensions](https://codemirror.net/6/docs/ref/#language.LanguageDescription.extensions),
    and return the first language that matches.
    */
    static matchFilename(descs: readonly LanguageDescription[], filename: string): LanguageDescription | null;
    /**
    Look for a language whose name or alias matches the the given
    name (case-insensitively). If `fuzzy` is true, and no direct
    matchs is found, this'll also search for a language whose name
    or alias occurs in the string (for names shorter than three
    characters, only when surrounded by non-word characters).
    */
    static matchLanguageName(descs: readonly LanguageDescription[], name: string, fuzzy?: boolean): LanguageDescription | null;
}

/**
Facet that defines a way to provide a function that computes the
appropriate indentation depth, as a column number (see
[`indentString`](https://codemirror.net/6/docs/ref/#language.indentString)), at the start of a given
line. A return value of `null` indicates no indentation can be
determined, and the line should inherit the indentation of the one
above it. A return value of `undefined` defers to the next indent
service.
*/
declare const indentService: Facet<(context: IndentContext, pos: number) => number | null | undefined, readonly ((context: IndentContext, pos: number) => number | null | undefined)[]>;
/**
Facet for overriding the unit by which indentation happens. Should
be a string consisting entirely of the same whitespace character.
When not set, this defaults to 2 spaces.
*/
declare const indentUnit: Facet<string, string>;
/**
Return the _column width_ of an indent unit in the state.
Determined by the [`indentUnit`](https://codemirror.net/6/docs/ref/#language.indentUnit)
facet, and [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) when that
contains tabs.
*/
declare function getIndentUnit(state: EditorState): number;
/**
Create an indentation string that covers columns 0 to `cols`.
Will use tabs for as much of the columns as possible when the
[`indentUnit`](https://codemirror.net/6/docs/ref/#language.indentUnit) facet contains
tabs.
*/
declare function indentString(state: EditorState, cols: number): string;
/**
Get the indentation, as a column number, at the given position.
Will first consult any [indent services](https://codemirror.net/6/docs/ref/#language.indentService)
that are registered, and if none of those return an indentation,
this will check the syntax tree for the [indent node
prop](https://codemirror.net/6/docs/ref/#language.indentNodeProp) and use that if found. Returns a
number when an indentation could be determined, and null
otherwise.
*/
declare function getIndentation(context: IndentContext | EditorState, pos: number): number | null;
/**
Create a change set that auto-indents all lines touched by the
given document range.
*/
declare function indentRange(state: EditorState, from: number, to: number): _codemirror_state.ChangeSet;
/**
Indentation contexts are used when calling [indentation
services](https://codemirror.net/6/docs/ref/#language.indentService). They provide helper utilities
useful in indentation logic, and can selectively override the
indentation reported for some lines.
*/
declare class IndentContext {
    /**
    The editor state.
    */
    readonly state: EditorState;
    /**
    The indent unit (number of columns per indentation level).
    */
    unit: number;
    /**
    Create an indent context.
    */
    constructor(
    /**
    The editor state.
    */
    state: EditorState, 
    /**
    @internal
    */
    options?: {
        /**
        Override line indentations provided to the indentation
        helper function, which is useful when implementing region
        indentation, where indentation for later lines needs to refer
        to previous lines, which may have been reindented compared to
        the original start state. If given, this function should
        return -1 for lines (given by start position) that didn't
        change, and an updated indentation otherwise.
        */
        overrideIndentation?: (pos: number) => number;
        /**
        Make it look, to the indent logic, like a line break was
        added at the given position (which is mostly just useful for
        implementing something like
        [`insertNewlineAndIndent`](https://codemirror.net/6/docs/ref/#commands.insertNewlineAndIndent)).
        */
        simulateBreak?: number;
        /**
        When `simulateBreak` is given, this can be used to make the
        simulated break behave like a double line break.
        */
        simulateDoubleBreak?: boolean;
    });
    /**
    Get a description of the line at the given position, taking
    [simulated line
    breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
    into account. If there is such a break at `pos`, the `bias`
    argument determines whether the part of the line line before or
    after the break is used.
    */
    lineAt(pos: number, bias?: -1 | 1): {
        text: string;
        from: number;
    };
    /**
    Get the text directly after `pos`, either the entire line
    or the next 100 characters, whichever is shorter.
    */
    textAfterPos(pos: number, bias?: -1 | 1): string;
    /**
    Find the column for the given position.
    */
    column(pos: number, bias?: -1 | 1): number;
    /**
    Find the column position (taking tabs into account) of the given
    position in the given string.
    */
    countColumn(line: string, pos?: number): number;
    /**
    Find the indentation column of the line at the given point.
    */
    lineIndent(pos: number, bias?: -1 | 1): number;
    /**
    Returns the [simulated line
    break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
    for this context, if any.
    */
    get simulatedBreak(): number | null;
}
/**
A syntax tree node prop used to associate indentation strategies
with node types. Such a strategy is a function from an indentation
context to a column number (see also
[`indentString`](https://codemirror.net/6/docs/ref/#language.indentString)) or null, where null
indicates that no definitive indentation can be determined.
*/
declare const indentNodeProp: NodeProp<(context: TreeIndentContext) => number | null>;
/**
Objects of this type provide context information and helper
methods to indentation functions registered on syntax nodes.
*/
declare class TreeIndentContext extends IndentContext {
    private base;
    /**
    The position at which indentation is being computed.
    */
    readonly pos: number;
    private constructor();
    /**
    The syntax tree node to which the indentation strategy
    applies.
    */
    get node(): SyntaxNode;
    /**
    Get the text directly after `this.pos`, either the entire line
    or the next 100 characters, whichever is shorter.
    */
    get textAfter(): string;
    /**
    Get the indentation at the reference line for `this.node`, which
    is the line on which it starts, unless there is a node that is
    _not_ a parent of this node covering the start of that line. If
    so, the line at the start of that node is tried, again skipping
    on if it is covered by another such node.
    */
    get baseIndent(): number;
    /**
    Get the indentation for the reference line of the given node
    (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
    */
    baseIndentFor(node: SyntaxNode): number;
    /**
    Continue looking for indentations in the node's parent nodes,
    and return the result of that.
    */
    continue(): number | null;
}
/**
An indentation strategy for delimited (usually bracketed) nodes.
Will, by default, indent one unit more than the parent's base
indent unless the line starts with a closing token. When `align`
is true and there are non-skipped nodes on the node's opening
line, the content of the node will be aligned with the end of the
opening node, like this:

    foo(bar,
        baz)
*/
declare function delimitedIndent({ closing, align, units }: {
    closing: string;
    align?: boolean;
    units?: number;
}): (context: TreeIndentContext) => number;
/**
An indentation strategy that aligns a node's content to its base
indentation.
*/
declare const flatIndent: (context: TreeIndentContext) => number;
/**
Creates an indentation strategy that, by default, indents
continued lines one unit more than the node's base indentation.
You can provide `except` to prevent indentation of lines that
match a pattern (for example `/^else\b/` in `if`/`else`
constructs), and you can change the amount of units used with the
`units` option.
*/
declare function continuedIndent({ except, units }?: {
    except?: RegExp;
    units?: number;
}): (context: TreeIndentContext) => number;
/**
Enables reindentation on input. When a language defines an
`indentOnInput` field in its [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt), which must hold a regular
expression, the line at the cursor will be reindented whenever new
text is typed and the input from the start of the line up to the
cursor matches that regexp.

To avoid unneccesary reindents, it is recommended to start the
regexp with `^` (usually followed by `\s*`), and end it with `$`.
For example, `/^\s*\}$/` will reindent when a closing brace is
added at the start of a line.
*/
declare function indentOnInput(): Extension;

/**
A facet that registers a code folding service. When called with
the extent of a line, such a function should return a foldable
range that starts on that line (but continues beyond it), if one
can be found.
*/
declare const foldService: Facet<(state: EditorState, lineStart: number, lineEnd: number) => ({
    from: number;
    to: number;
} | null), readonly ((state: EditorState, lineStart: number, lineEnd: number) => ({
    from: number;
    to: number;
} | null))[]>;
/**
This node prop is used to associate folding information with
syntax node types. Given a syntax node, it should check whether
that tree is foldable and return the range that can be collapsed
when it is.
*/
declare const foldNodeProp: NodeProp<(node: SyntaxNode, state: EditorState) => ({
    from: number;
    to: number;
} | null)>;
/**
[Fold](https://codemirror.net/6/docs/ref/#language.foldNodeProp) function that folds everything but
the first and the last child of a syntax node. Useful for nodes
that start and end with delimiters.
*/
declare function foldInside(node: SyntaxNode): {
    from: number;
    to: number;
} | null;
/**
Check whether the given line is foldable. First asks any fold
services registered through
[`foldService`](https://codemirror.net/6/docs/ref/#language.foldService), and if none of them return
a result, tries to query the [fold node
prop](https://codemirror.net/6/docs/ref/#language.foldNodeProp) of syntax nodes that cover the end
of the line.
*/
declare function foldable(state: EditorState, lineStart: number, lineEnd: number): {
    from: number;
    to: number;
} | null;
type DocRange = {
    from: number;
    to: number;
};
/**
State effect that can be attached to a transaction to fold the
given range. (You probably only need this in exceptional
circumstances—usually you'll just want to let
[`foldCode`](https://codemirror.net/6/docs/ref/#language.foldCode) and the [fold
gutter](https://codemirror.net/6/docs/ref/#language.foldGutter) create the transactions.)
*/
declare const foldEffect: _codemirror_state.StateEffectType<DocRange>;
/**
State effect that unfolds the given range (if it was folded).
*/
declare const unfoldEffect: _codemirror_state.StateEffectType<DocRange>;
/**
The state field that stores the folded ranges (as a [decoration
set](https://codemirror.net/6/docs/ref/#view.DecorationSet)). Can be passed to
[`EditorState.toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) and
[`fromJSON`](https://codemirror.net/6/docs/ref/#state.EditorState^fromJSON) to serialize the fold
state.
*/
declare const foldState: StateField<DecorationSet>;
/**
Get a [range set](https://codemirror.net/6/docs/ref/#state.RangeSet) containing the folded ranges
in the given state.
*/
declare function foldedRanges(state: EditorState): DecorationSet;
/**
Fold the lines that are selected, if possible.
*/
declare const foldCode: Command;
/**
Unfold folded ranges on selected lines.
*/
declare const unfoldCode: Command;
/**
Fold all top-level foldable ranges. Note that, in most cases,
folding information will depend on the [syntax
tree](https://codemirror.net/6/docs/ref/#language.syntaxTree), and folding everything may not work
reliably when the document hasn't been fully parsed (either
because the editor state was only just initialized, or because the
document is so big that the parser decided not to parse it
entirely).
*/
declare const foldAll: Command;
/**
Unfold all folded code.
*/
declare const unfoldAll: Command;
/**
Toggle folding at cursors. Unfolds if there is an existing fold
starting in that line, tries to find a foldable range around it
otherwise.
*/
declare const toggleFold: Command;
/**
Default fold-related key bindings.

 - Ctrl-Shift-[ (Cmd-Alt-[ on macOS): [`foldCode`](https://codemirror.net/6/docs/ref/#language.foldCode).
 - Ctrl-Shift-] (Cmd-Alt-] on macOS): [`unfoldCode`](https://codemirror.net/6/docs/ref/#language.unfoldCode).
 - Ctrl-Alt-[: [`foldAll`](https://codemirror.net/6/docs/ref/#language.foldAll).
 - Ctrl-Alt-]: [`unfoldAll`](https://codemirror.net/6/docs/ref/#language.unfoldAll).
*/
declare const foldKeymap: readonly KeyBinding[];
interface FoldConfig {
    /**
    A function that creates the DOM element used to indicate the
    position of folded code. The `onclick` argument is the default
    click event handler, which toggles folding on the line that
    holds the element, and should probably be added as an event
    handler to the returned element. If
    [`preparePlaceholder`](https://codemirror.net/6/docs/ref/#language.FoldConfig.preparePlaceholder)
    is given, its result will be passed as 3rd argument. Otherwise,
    this will be null.
    
    When this option isn't given, the `placeholderText` option will
    be used to create the placeholder element.
    */
    placeholderDOM?: ((view: EditorView, onclick: (event: Event) => void, prepared: any) => HTMLElement) | null;
    /**
    Text to use as placeholder for folded text. Defaults to `"…"`.
    Will be styled with the `"cm-foldPlaceholder"` class.
    */
    placeholderText?: string;
    /**
    Given a range that is being folded, create a value that
    describes it, to be used by `placeholderDOM` to render a custom
    widget that, for example, indicates something about the folded
    range's size or type.
    */
    preparePlaceholder?: (state: EditorState, range: {
        from: number;
        to: number;
    }) => any;
}
/**
Create an extension that configures code folding.
*/
declare function codeFolding(config?: FoldConfig): Extension;
type Handlers = {
    [event: string]: (view: EditorView, line: BlockInfo, event: Event) => boolean;
};
interface FoldGutterConfig {
    /**
    A function that creates the DOM element used to indicate a
    given line is folded or can be folded.
    When not given, the `openText`/`closeText` option will be used instead.
    */
    markerDOM?: ((open: boolean) => HTMLElement) | null;
    /**
    Text used to indicate that a given line can be folded.
    Defaults to `"⌄"`.
    */
    openText?: string;
    /**
    Text used to indicate that a given line is folded.
    Defaults to `"›"`.
    */
    closedText?: string;
    /**
    Supply event handlers for DOM events on this gutter.
    */
    domEventHandlers?: Handlers;
    /**
    When given, if this returns true for a given view update,
    recompute the fold markers.
    */
    foldingChanged?: (update: ViewUpdate) => boolean;
}
/**
Create an extension that registers a fold gutter, which shows a
fold status indicator before foldable lines (which can be clicked
to fold or unfold the line).
*/
declare function foldGutter(config?: FoldGutterConfig): Extension;

/**
A highlight style associates CSS styles with higlighting
[tags](https://lezer.codemirror.net/docs/ref#highlight.Tag).
*/
declare class HighlightStyle implements Highlighter {
    /**
    The tag styles used to create this highlight style.
    */
    readonly specs: readonly TagStyle[];
    /**
    A style module holding the CSS rules for this highlight style.
    When using
    [`highlightTree`](https://lezer.codemirror.net/docs/ref#highlight.highlightTree)
    outside of the editor, you may want to manually mount this
    module to show the highlighting.
    */
    readonly module: StyleModule | null;
    readonly style: (tags: readonly Tag[]) => string | null;
    readonly scope?: (type: NodeType) => boolean;
    private constructor();
    /**
    Create a highlighter style that associates the given styles to
    the given tags. The specs must be objects that hold a style tag
    or array of tags in their `tag` property, and either a single
    `class` property providing a static CSS class (for highlighter
    that rely on external styling), or a
    [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
    set of CSS properties (which define the styling for those tags).
    
    The CSS rules created for a highlighter will be emitted in the
    order of the spec's properties. That means that for elements that
    have multiple tags associated with them, styles defined further
    down in the list will have a higher CSS precedence than styles
    defined earlier.
    */
    static define(specs: readonly TagStyle[], options?: {
        /**
        By default, highlighters apply to the entire document. You can
        scope them to a single language by providing the language
        object or a language's top node type here.
        */
        scope?: Language | NodeType;
        /**
        Add a style to _all_ content. Probably only useful in
        combination with `scope`.
        */
        all?: string | StyleSpec;
        /**
        Specify that this highlight style should only be active then
        the theme is dark or light. By default, it is active
        regardless of theme.
        */
        themeType?: "dark" | "light";
    }): HighlightStyle;
}
/**
Wrap a highlighter in an editor extension that uses it to apply
syntax highlighting to the editor content.

When multiple (non-fallback) styles are provided, the styling
applied is the union of the classes they emit.
*/
declare function syntaxHighlighting(highlighter: Highlighter, options?: {
    /**
    When enabled, this marks the highlighter as a fallback, which
    only takes effect if no other highlighters are registered.
    */
    fallback: boolean;
}): Extension;
/**
Returns the CSS classes (if any) that the highlighters active in
the state would assign to the given style
[tags](https://lezer.codemirror.net/docs/ref#highlight.Tag) and
(optional) language
[scope](https://codemirror.net/6/docs/ref/#language.HighlightStyle^define^options.scope).
*/
declare function highlightingFor(state: EditorState, tags: readonly Tag[], scope?: NodeType): string | null;
/**
The type of object used in
[`HighlightStyle.define`](https://codemirror.net/6/docs/ref/#language.HighlightStyle^define).
Assigns a style to one or more highlighting
[tags](https://lezer.codemirror.net/docs/ref#highlight.Tag), which can either be a fixed class name
(which must be defined elsewhere), or a set of CSS properties, for
which the library will define an anonymous class.
*/
interface TagStyle {
    /**
    The tag or tags to target.
    */
    tag: Tag | readonly Tag[];
    /**
    If given, this maps the tags to a fixed class name.
    */
    class?: string;
    /**
    Any further properties (if `class` isn't given) will be
    interpreted as in style objects given to
    [style-mod](https://github.com/marijnh/style-mod#documentation).
    (The type here is `any` because of TypeScript limitations.)
    */
    [styleProperty: string]: any;
}
/**
A default highlight style (works well with light themes).
*/
declare const defaultHighlightStyle: HighlightStyle;

interface Config {
    /**
    Whether the bracket matching should look at the character after
    the cursor when matching (if the one before isn't a bracket).
    Defaults to true.
    */
    afterCursor?: boolean;
    /**
    The bracket characters to match, as a string of pairs. Defaults
    to `"()[]{}"`. Note that these are only used as fallback when
    there is no [matching
    information](https://lezer.codemirror.net/docs/ref/#common.NodeProp^closedBy)
    in the syntax tree.
    */
    brackets?: string;
    /**
    The maximum distance to scan for matching brackets. This is only
    relevant for brackets not encoded in the syntax tree. Defaults
    to 10 000.
    */
    maxScanDistance?: number;
    /**
    Can be used to configure the way in which brackets are
    decorated. The default behavior is to add the
    `cm-matchingBracket` class for matching pairs, and
    `cm-nonmatchingBracket` for mismatched pairs or single brackets.
    */
    renderMatch?: (match: MatchResult, state: EditorState) => readonly Range<Decoration>[];
}
/**
Create an extension that enables bracket matching. Whenever the
cursor is next to a bracket, that bracket and the one it matches
are highlighted. Or, when no matching bracket is found, another
highlighting style is used to indicate this.
*/
declare function bracketMatching(config?: Config): Extension;
/**
When larger syntax nodes, such as HTML tags, are marked as
opening/closing, it can be a bit messy to treat the whole node as
a matchable bracket. This node prop allows you to define, for such
a node, a ‘handle’—the part of the node that is highlighted, and
that the cursor must be on to activate highlighting in the first
place.
*/
declare const bracketMatchingHandle: NodeProp<(node: SyntaxNode) => SyntaxNode | null>;
/**
The result returned from `matchBrackets`.
*/
interface MatchResult {
    /**
    The extent of the bracket token found.
    */
    start: {
        from: number;
        to: number;
    };
    /**
    The extent of the matched token, if any was found.
    */
    end?: {
        from: number;
        to: number;
    };
    /**
    Whether the tokens match. This can be false even when `end` has
    a value, if that token doesn't match the opening token.
    */
    matched: boolean;
}
/**
Find the matching bracket for the token at `pos`, scanning
direction `dir`. Only the `brackets` and `maxScanDistance`
properties are used from `config`, if given. Returns null if no
bracket was found at `pos`, or a match result otherwise.
*/
declare function matchBrackets(state: EditorState, pos: number, dir: -1 | 1, config?: Config): MatchResult | null;

/**
Encapsulates a single line of input. Given to stream syntax code,
which uses it to tokenize the content.
*/
declare class StringStream {
    /**
    The line.
    */
    string: string;
    private tabSize;
    /**
    The current indent unit size.
    */
    indentUnit: number;
    private overrideIndent?;
    /**
    The current position on the line.
    */
    pos: number;
    /**
    The start position of the current token.
    */
    start: number;
    private lastColumnPos;
    private lastColumnValue;
    /**
    Create a stream.
    */
    constructor(
    /**
    The line.
    */
    string: string, tabSize: number, 
    /**
    The current indent unit size.
    */
    indentUnit: number, overrideIndent?: number | undefined);
    /**
    True if we are at the end of the line.
    */
    eol(): boolean;
    /**
    True if we are at the start of the line.
    */
    sol(): boolean;
    /**
    Get the next code unit after the current position, or undefined
    if we're at the end of the line.
    */
    peek(): string | undefined;
    /**
    Read the next code unit and advance `this.pos`.
    */
    next(): string | void;
    /**
    Match the next character against the given string, regular
    expression, or predicate. Consume and return it if it matches.
    */
    eat(match: string | RegExp | ((ch: string) => boolean)): string | void;
    /**
    Continue matching characters that match the given string,
    regular expression, or predicate function. Return true if any
    characters were consumed.
    */
    eatWhile(match: string | RegExp | ((ch: string) => boolean)): boolean;
    /**
    Consume whitespace ahead of `this.pos`. Return true if any was
    found.
    */
    eatSpace(): boolean;
    /**
    Move to the end of the line.
    */
    skipToEnd(): void;
    /**
    Move to directly before the given character, if found on the
    current line.
    */
    skipTo(ch: string): boolean | void;
    /**
    Move back `n` characters.
    */
    backUp(n: number): void;
    /**
    Get the column position at `this.pos`.
    */
    column(): number;
    /**
    Get the indentation column of the current line.
    */
    indentation(): number;
    /**
    Match the input against the given string or regular expression
    (which should start with a `^`). Return true or the regexp match
    if it matches.
    
    Unless `consume` is set to `false`, this will move `this.pos`
    past the matched text.
    
    When matching a string `caseInsensitive` can be set to true to
    make the match case-insensitive.
    */
    match(pattern: string | RegExp, consume?: boolean, caseInsensitive?: boolean): boolean | RegExpMatchArray | null;
    /**
    Get the current token.
    */
    current(): string;
}

/**
A stream parser parses or tokenizes content from start to end,
emitting tokens as it goes over it. It keeps a mutable (but
copyable) object with state, in which it can store information
about the current context.
*/
interface StreamParser<State> {
    /**
    A name for this language.
    */
    name?: string;
    /**
    Produce a start state for the parser.
    */
    startState?(indentUnit: number): State;
    /**
    Read one token, advancing the stream past it, and returning a
    string indicating the token's style tag—either the name of one
    of the tags in
    [`tags`](https://lezer.codemirror.net/docs/ref#highlight.tags)
    or [`tokenTable`](https://codemirror.net/6/docs/ref/#language.StreamParser.tokenTable), or such a
    name suffixed by one or more tag
    [modifier](https://lezer.codemirror.net/docs/ref#highlight.Tag^defineModifier)
    names, separated by periods. For example `"keyword"` or
    "`variableName.constant"`, or a space-separated set of such
    token types.
    
    It is okay to return a zero-length token, but only if that
    updates the state so that the next call will return a non-empty
    token again.
    */
    token(stream: StringStream, state: State): string | null;
    /**
    This notifies the parser of a blank line in the input. It can
    update its state here if it needs to.
    */
    blankLine?(state: State, indentUnit: number): void;
    /**
    Copy a given state. By default, a shallow object copy is done
    which also copies arrays held at the top level of the object.
    */
    copyState?(state: State): State;
    /**
    Compute automatic indentation for the line that starts with the
    given state and text.
    */
    indent?(state: State, textAfter: string, context: IndentContext): number | null;
    /**
    Default [language data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) to
    attach to this language.
    */
    languageData?: {
        [name: string]: any;
    };
    /**
    Extra tokens to use in this parser. When the tokenizer returns a
    token name that exists as a property in this object, the
    corresponding tags will be assigned to the token.
    */
    tokenTable?: {
        [name: string]: Tag | readonly Tag[];
    };
    /**
    By default, adjacent tokens of the same type are merged in the
    output tree. Set this to false to disable that.
    */
    mergeTokens?: boolean;
}
/**
A [language](https://codemirror.net/6/docs/ref/#language.Language) class based on a CodeMirror
5-style [streaming parser](https://codemirror.net/6/docs/ref/#language.StreamParser).
*/
declare class StreamLanguage<State> extends Language {
    private constructor();
    /**
    Define a stream language.
    */
    static define<State>(spec: StreamParser<State>): StreamLanguage<State>;
    get allowsNesting(): boolean;
}

/**
Make sure nodes
[marked](https://lezer.codemirror.net/docs/ref/#common.NodeProp^isolate)
as isolating for bidirectional text are rendered in a way that
isolates them from the surrounding text.
*/
declare function bidiIsolates(options?: {
    /**
    By default, isolating elements are only added when the editor
    direction isn't uniformly left-to-right, or if it is, on lines
    that contain right-to-left character. When true, disable this
    optimization and add them everywhere.
    */
    alwaysIsolate?: boolean;
}): Extension;

export { type Config, DocInput, HighlightStyle, IndentContext, LRLanguage, Language, LanguageDescription, LanguageSupport, type MatchResult, ParseContext, StreamLanguage, type StreamParser, StringStream, type Sublanguage, type TagStyle, TreeIndentContext, bidiIsolates, bracketMatching, bracketMatchingHandle, codeFolding, continuedIndent, defaultHighlightStyle, defineLanguageFacet, delimitedIndent, ensureSyntaxTree, flatIndent, foldAll, foldCode, foldEffect, foldGutter, foldInside, foldKeymap, foldNodeProp, foldService, foldState, foldable, foldedRanges, forceParsing, getIndentUnit, getIndentation, highlightingFor, indentNodeProp, indentOnInput, indentRange, indentService, indentString, indentUnit, language, languageDataProp, matchBrackets, sublanguageProp, syntaxHighlighting, syntaxParserRunning, syntaxTree, syntaxTreeAvailable, toggleFold, unfoldAll, unfoldCode, unfoldEffect };

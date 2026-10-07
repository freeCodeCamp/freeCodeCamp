export interface CssLocation {
    source: string;
    start: {
        offset: number;
        line: number;
        column: number;
    };
    end: {
        offset: number;
        line: number;
        column: number;
    };
}

export interface ListItem<TData> {
    prev: ListItem<TData> | null;
    next: ListItem<TData> | null;
    data: TData;
}

export type IteratorFn<TData, TResult, TContext = List<TData>> = (
    this: TContext,
    item: TData,
    node: ListItem<TData>,
    list: List<TData>,
) => TResult;
export type FilterFn<TData, TResult extends TData, TContext = List<TData>> = (
    this: TContext,
    item: TData,
    node: ListItem<TData>,
    list: List<TData>,
) => item is TResult;
export type ReduceFn<TData, TValue, TContext = List<TData>> = (this: TContext, accum: TValue, data: TData) => TValue;

export class List<TData> {
    constructor();
    get size(): number;
    get isEmpty(): boolean;
    get first(): TData | null;
    get last(): TData | null;
    [Symbol.iterator](): IterableIterator<TData>;
    fromArray(array: TData[]): List<TData>;
    createItem(data: TData): ListItem<TData>;
    toArray(): TData[];
    toJSON(): TData[];
    forEach<TContext>(fn: IteratorFn<TData, void, TContext>, context: TContext): void;
    forEach(fn: IteratorFn<TData, void>): void;
    forEachRight<TContext>(fn: IteratorFn<TData, void, TContext>, context: TContext): void;
    forEachRight(fn: IteratorFn<TData, void>): void;
    nextUntil<TContext>(start: ListItem<TData>, fn: IteratorFn<TData, boolean, TContext>, context: TContext): void;
    nextUntil(start: ListItem<TData>, fn: IteratorFn<TData, boolean>): void;
    prevUntil<TContext>(start: ListItem<TData>, fn: IteratorFn<TData, boolean, TContext>, context: TContext): void;
    prevUntil(start: ListItem<TData>, fn: IteratorFn<TData, boolean>): void;
    reduce<TValue, TContext>(fn: ReduceFn<TData, TValue, TContext>, initialValue: TValue, context: TContext): TValue;
    reduce<TValue>(fn: ReduceFn<TData, TValue>, initialValue: TValue): TValue;
    reduceRight<TValue, TContext>(
        fn: ReduceFn<TData, TValue, TContext>,
        initialValue: TValue,
        context: TContext,
    ): TValue;
    reduceRight<TValue>(fn: ReduceFn<TData, TValue>, initialValue: TValue): TValue;
    some<TContext>(fn: IteratorFn<TData, boolean, TContext>, context: TContext): boolean;
    some(fn: IteratorFn<TData, boolean>): boolean;
    map<TContext, TResult>(fn: IteratorFn<TData, TResult, TContext>, context: TContext): List<TResult>;
    map<TResult>(fn: IteratorFn<TData, TResult>): List<TResult>;
    filter<TContext, TResult extends TData>(fn: FilterFn<TData, TResult, TContext>, context: TContext): List<TResult>;
    filter<TResult extends TData>(fn: FilterFn<TData, TResult>): List<TResult>;
    filter<TContext>(fn: IteratorFn<TData, boolean, TContext>, context: TContext): List<TData>;
    filter(fn: IteratorFn<TData, boolean>): List<TData>;
    clear(): void;
    copy(): List<TData>;
    prepend(item: ListItem<TData>): List<TData>;
    prependData(data: TData): List<TData>;
    append(item: ListItem<TData>): List<TData>;
    appendData(data: TData): List<TData>;
    insert(item: ListItem<TData>, before: ListItem<TData>): List<TData>;
    insertData(data: TData, before: ListItem<TData>): List<TData>;
    remove(item: ListItem<TData>): ListItem<TData>;
    push(item: TData): void;
    pop(): ListItem<TData> | undefined;
    unshift(data: TData): void;
    shift(): ListItem<TData> | undefined;
    prependList(list: List<TData>): List<TData>;
    appendList(list: List<TData>): List<TData>;
    insertList(list: List<TData>, before: ListItem<TData>): List<TData>;
    replace(oldItem: ListItem<TData>, newItemOrList: List<TData> | ListItem<TData>): List<TData>;
}

export interface CssNodeCommon {
    type: string;
    loc?: CssLocation | undefined;
}

export interface AnPlusB extends CssNodeCommon {
    type: "AnPlusB";
    a: string | null;
    b: string | null;
}

export interface Atrule extends CssNodeCommon {
    type: "Atrule";
    name: string;
    prelude: AtrulePrelude | Raw | null;
    block: Block | null;
}

export interface AtrulePlain extends CssNodeCommon {
    type: "Atrule";
    name: string;
    prelude: AtrulePreludePlain | Raw | null;
    block: BlockPlain | null;
}

export interface AtrulePrelude extends CssNodeCommon {
    type: "AtrulePrelude";
    children: List<CssNode>;
}

export interface AtrulePreludePlain extends CssNodeCommon {
    type: "AtrulePrelude";
    children: CssNodePlain[];
}

export interface AttributeSelector extends CssNodeCommon {
    type: "AttributeSelector";
    name: Identifier;
    matcher: string | null;
    value: StringNode | Identifier | null;
    flags: string | null;
}

export interface Block extends CssNodeCommon {
    type: "Block";
    children: List<CssNode>;
}

export interface BlockPlain extends CssNodeCommon {
    type: "Block";
    children: CssNodePlain[];
}

export interface Brackets extends CssNodeCommon {
    type: "Brackets";
    children: List<CssNode>;
}

export interface BracketsPlain extends CssNodeCommon {
    type: "Brackets";
    children: CssNodePlain[];
}

export interface CDC extends CssNodeCommon {
    type: "CDC";
}

export interface CDO extends CssNodeCommon {
    type: "CDO";
}

export interface ClassSelector extends CssNodeCommon {
    type: "ClassSelector";
    name: string;
}

export interface Combinator extends CssNodeCommon {
    type: "Combinator";
    name: string;
}

export interface Comment extends CssNodeCommon {
    type: "Comment";
    value: string;
}

export interface Declaration extends CssNodeCommon {
    type: "Declaration";
    important: boolean | string;
    property: string;
    value: Value | Raw;
}

export interface DeclarationPlain extends CssNodeCommon {
    type: "Declaration";
    important: boolean | string;
    property: string;
    value: ValuePlain | Raw;
}

export interface DeclarationList extends CssNodeCommon {
    type: "DeclarationList";
    children: List<CssNode>;
}

export interface DeclarationListPlain extends CssNodeCommon {
    type: "DeclarationList";
    children: CssNodePlain[];
}

export interface Dimension extends CssNodeCommon {
    type: "Dimension";
    value: string;
    unit: string;
}

export interface FunctionNode extends CssNodeCommon {
    type: "Function";
    name: string;
    children: List<CssNode>;
}

export interface FunctionNodePlain extends CssNodeCommon {
    type: "Function";
    name: string;
    children: CssNodePlain[];
}

export interface Hash extends CssNodeCommon {
    type: "Hash";
    value: string;
}

export interface IdSelector extends CssNodeCommon {
    type: "IdSelector";
    name: string;
}

export interface Identifier extends CssNodeCommon {
    type: "Identifier";
    name: string;
}

export interface MediaFeature extends CssNodeCommon {
    type: "MediaFeature";
    name: string;
    value: Identifier | NumberNode | Dimension | Ratio | null;
}

export interface MediaQuery extends CssNodeCommon {
    type: "MediaQuery";
    children: List<CssNode>;
}

export interface MediaQueryPlain extends CssNodeCommon {
    type: "MediaQuery";
    children: CssNodePlain[];
}

export interface MediaQueryList extends CssNodeCommon {
    type: "MediaQueryList";
    children: List<CssNode>;
}

export interface MediaQueryListPlain extends CssNodeCommon {
    type: "MediaQueryList";
    children: CssNodePlain[];
}

export interface NestingSelector extends CssNodeCommon {
    type: "NestingSelector";
}

export interface Nth extends CssNodeCommon {
    type: "Nth";
    nth: AnPlusB | Identifier;
    selector: SelectorList | null;
}

export interface NthPlain extends CssNodeCommon {
    type: "Nth";
    nth: AnPlusB | Identifier;
    selector: SelectorListPlain | null;
}

export interface NumberNode extends CssNodeCommon {
    type: "Number";
    value: string;
}

export interface Operator extends CssNodeCommon {
    type: "Operator";
    value: string;
}

export interface Parentheses extends CssNodeCommon {
    type: "Parentheses";
    children: List<CssNode>;
}

export interface ParenthesesPlain extends CssNodeCommon {
    type: "Parentheses";
    children: CssNodePlain[];
}

export interface Percentage extends CssNodeCommon {
    type: "Percentage";
    value: string;
}

export interface PseudoClassSelector extends CssNodeCommon {
    type: "PseudoClassSelector";
    name: string;
    children: List<CssNode> | null;
}

export interface PseudoClassSelectorPlain extends CssNodeCommon {
    type: "PseudoClassSelector";
    name: string;
    children: CssNodePlain[] | null;
}

export interface PseudoElementSelector extends CssNodeCommon {
    type: "PseudoElementSelector";
    name: string;
    children: List<CssNode> | null;
}

export interface PseudoElementSelectorPlain extends CssNodeCommon {
    type: "PseudoElementSelector";
    name: string;
    children: CssNodePlain[] | null;
}

export interface Ratio extends CssNodeCommon {
    type: "Ratio";
    left: string;
    right: string;
}

export interface Raw extends CssNodeCommon {
    type: "Raw";
    value: string;
}

export interface Rule extends CssNodeCommon {
    type: "Rule";
    prelude: SelectorList | Raw;
    block: Block;
}

export interface RulePlain extends CssNodeCommon {
    type: "Rule";
    prelude: SelectorListPlain | Raw;
    block: BlockPlain;
}

export interface Selector extends CssNodeCommon {
    type: "Selector";
    children: List<CssNode>;
}

export interface SelectorPlain extends CssNodeCommon {
    type: "Selector";
    children: CssNodePlain[];
}

export interface SelectorList extends CssNodeCommon {
    type: "SelectorList";
    children: List<CssNode>;
}

export interface SelectorListPlain extends CssNodeCommon {
    type: "SelectorList";
    children: CssNodePlain[];
}

export interface StringNode extends CssNodeCommon {
    type: "String";
    value: string;
}

export interface StyleSheet extends CssNodeCommon {
    type: "StyleSheet";
    children: List<CssNode>;
}

export interface StyleSheetPlain extends CssNodeCommon {
    type: "StyleSheet";
    children: CssNodePlain[];
}

export interface TypeSelector extends CssNodeCommon {
    type: "TypeSelector";
    name: string;
}

export interface UnicodeRange extends CssNodeCommon {
    type: "UnicodeRange";
    value: string;
}

export interface Url extends CssNodeCommon {
    type: "Url";
    value: string;
}

export interface Value extends CssNodeCommon {
    type: "Value";
    children: List<CssNode>;
}

export interface ValuePlain extends CssNodeCommon {
    type: "Value";
    children: CssNodePlain[];
}

export interface WhiteSpace extends CssNodeCommon {
    type: "WhiteSpace";
    value: string;
}

export type CssNode =
    | AnPlusB
    | Atrule
    | AtrulePrelude
    | AttributeSelector
    | Block
    | Brackets
    | CDC
    | CDO
    | ClassSelector
    | Combinator
    | Comment
    | Declaration
    | DeclarationList
    | Dimension
    | FunctionNode
    | Hash
    | IdSelector
    | Identifier
    | MediaFeature
    | MediaQuery
    | MediaQueryList
    | NestingSelector
    | Nth
    | NumberNode
    | Operator
    | Parentheses
    | Percentage
    | PseudoClassSelector
    | PseudoElementSelector
    | Ratio
    | Raw
    | Rule
    | Selector
    | SelectorList
    | StringNode
    | StyleSheet
    | TypeSelector
    | UnicodeRange
    | Url
    | Value
    | WhiteSpace;

export type CssNodePlain =
    | AnPlusB
    | AtrulePlain
    | AtrulePreludePlain
    | AttributeSelector
    | BlockPlain
    | BracketsPlain
    | CDC
    | CDO
    | ClassSelector
    | Combinator
    | Comment
    | DeclarationPlain
    | DeclarationListPlain
    | Dimension
    | FunctionNodePlain
    | Hash
    | IdSelector
    | Identifier
    | MediaFeature
    | MediaQueryPlain
    | MediaQueryListPlain
    | NthPlain
    | NumberNode
    | Operator
    | ParenthesesPlain
    | Percentage
    | PseudoClassSelectorPlain
    | PseudoElementSelectorPlain
    | Ratio
    | Raw
    | RulePlain
    | SelectorPlain
    | SelectorListPlain
    | StringNode
    | StyleSheetPlain
    | TypeSelector
    | UnicodeRange
    | Url
    | ValuePlain
    | WhiteSpace;

export interface SyntaxParseError extends SyntaxError {
    input: string;
    offset: number;
    rawMessage: string;
    formattedMessage: string;
}

export interface ParseOptions {
    context?: string | undefined;
    atrule?: string | undefined;
    positions?: boolean | undefined;
    onComment?: (value: string, loc: CssLocation) => void;
    onParseError?: ((error: SyntaxParseError, fallbackNode: CssNode) => void) | undefined;
    filename?: string | undefined;
    offset?: number | undefined;
    line?: number | undefined;
    column?: number | undefined;
    parseAtrulePrelude?: boolean | undefined;
    parseRulePrelude?: boolean | undefined;
    parseValue?: boolean | undefined;
    parseCustomProperty?: boolean | undefined;
}

export function parse(text: string, options?: ParseOptions): CssNode;

export interface GenerateHandlers {
    children: (node: CssNode, delimiter?: (node: CssNode) => void) => void;
    node: (node: CssNode) => void;
    chunk: (chunk: string) => void;
    result: () => string;
}

export interface GenerateOptions {
    sourceMap?: boolean | undefined;
    decorator?: ((handlers: GenerateHandlers) => GenerateHandlers) | undefined;
    mode?: "safe" | "spec" | undefined;
}

export function generate(ast: CssNode, options?: GenerateOptions): string;

export interface WalkContext {
    /**
     * Stops traversal. No visitor function will be invoked once this value is
     * returned by a visitor.
     */
    break: symbol;
    /**
     * Prevent the current node from being iterated. No visitor function will be
     * invoked for its properties or children nodes; note that this value only
     * has an effect for enter visitor as leave visitor invokes after iterating
     * over all node's properties and children.
     */
    skip: symbol;
    root: CssNode;
    stylesheet: StyleSheet | null;
    atrule: Atrule | null;
    atrulePrelude: AtrulePrelude | null;
    rule: Rule | null;
    selector: SelectorList | null;
    block: Block | null;
    declaration: Declaration | null;
    function: FunctionNode | PseudoClassSelector | PseudoElementSelector | null;
}

export type EnterOrLeaveFn<NodeType = CssNode> = (
    this: WalkContext,
    node: NodeType,
    item: ListItem<CssNode>,
    list: List<CssNode>,
) => void;

export interface WalkOptionsNoVisit {
    visit?: never;
    enter?: EnterOrLeaveFn | undefined;
    leave?: EnterOrLeaveFn | undefined;
    reverse?: boolean | undefined;
}

export interface WalkOptionsVisit<NodeType extends CssNode = CssNode> {
    visit: NodeType["type"];
    enter?: EnterOrLeaveFn<NodeType> | undefined;
    leave?: EnterOrLeaveFn<NodeType> | undefined;
    reverse?: boolean | undefined;
}

export type WalkOptions =
    | WalkOptionsVisit<AnPlusB>
    | WalkOptionsVisit<Atrule>
    | WalkOptionsVisit<AtrulePrelude>
    | WalkOptionsVisit<AttributeSelector>
    | WalkOptionsVisit<Block>
    | WalkOptionsVisit<Brackets>
    | WalkOptionsVisit<CDC>
    | WalkOptionsVisit<CDO>
    | WalkOptionsVisit<ClassSelector>
    | WalkOptionsVisit<Combinator>
    | WalkOptionsVisit<Comment>
    | WalkOptionsVisit<Declaration>
    | WalkOptionsVisit<DeclarationList>
    | WalkOptionsVisit<Dimension>
    | WalkOptionsVisit<FunctionNode>
    | WalkOptionsVisit<Hash>
    | WalkOptionsVisit<IdSelector>
    | WalkOptionsVisit<Identifier>
    | WalkOptionsVisit<MediaFeature>
    | WalkOptionsVisit<MediaQuery>
    | WalkOptionsVisit<MediaQueryList>
    | WalkOptionsVisit<Nth>
    | WalkOptionsVisit<NumberNode>
    | WalkOptionsVisit<Operator>
    | WalkOptionsVisit<Parentheses>
    | WalkOptionsVisit<Percentage>
    | WalkOptionsVisit<PseudoClassSelector>
    | WalkOptionsVisit<PseudoElementSelector>
    | WalkOptionsVisit<Ratio>
    | WalkOptionsVisit<Raw>
    | WalkOptionsVisit<Rule>
    | WalkOptionsVisit<Selector>
    | WalkOptionsVisit<SelectorList>
    | WalkOptionsVisit<StringNode>
    | WalkOptionsVisit<StyleSheet>
    | WalkOptionsVisit<TypeSelector>
    | WalkOptionsVisit<UnicodeRange>
    | WalkOptionsVisit<Url>
    | WalkOptionsVisit<Value>
    | WalkOptionsVisit<WhiteSpace>
    | WalkOptionsNoVisit;

export const walk: {
    (ast: CssNode, options: EnterOrLeaveFn | WalkOptions): void;
    /**
     * Stops traversal. No visitor function will be invoked once this value is returned by a visitor.
     */
    readonly break: symbol;
    /**
     * Prevent the current node from being iterated. No visitor function will be invoked for its properties or children
     * nodes; note that this value only has an effect for enter visitor as leave visitor invokes after iterating over
     * all node's properties and children.
     */
    readonly skip: symbol;
};

export type FindFn = (this: WalkContext, node: CssNode, item: ListItem<CssNode>, list: List<CssNode>) => boolean;

export function find(ast: CssNode, fn: FindFn): CssNode | null;
export function findLast(ast: CssNode, fn: FindFn): CssNode | null;
export function findAll(ast: CssNode, fn: FindFn): CssNode[];

export interface Property {
    readonly basename: string;
    readonly name: string;
    readonly hack: string;
    readonly vendor: string;
    readonly prefix: string;
    readonly custom: boolean;
}

export function property(value: string): Property;

export interface Keyword {
    readonly basename: string;
    readonly name: string;
    readonly vendor: string;
    readonly prefix: string;
    readonly custom: boolean;
}

export function keyword(value: string): Keyword;

export function clone(node: CssNode): CssNode;

export function fromPlainObject(node: CssNodePlain): CssNode;
export function toPlainObject(node: CssNode): CssNodePlain;

/**
 * Definition syntax AtWord node
 */
export interface DSNodeAtWord {
    type: "AtKeyword";
    name: string;
}

/**
 * Definition syntax Comma node
 */
export interface DSNodeComma {
    type: "Comma";
}

/**
 * Definition syntax Function node
 */
export interface DSNodeFunction {
    type: "Function";
    name: string;
}

export type DSNodeCombinator = "|" | "||" | "&&" | " ";

/**
 * Definition syntax Group node
 */
export interface DSNodeGroup {
    type: "Group";
    terms: DSNode[];
    combinator: DSNodeCombinator;
    disallowEmpty: boolean;
    explicit: boolean;
}

/**
 * Definition syntax Keyword node
 */
export interface DSNodeKeyword {
    type: "Keyword";
    name: string;
}

/**
 * Definition syntax Multiplier node
 */
export interface DSNodeMultiplier {
    type: "Multiplier";
    comma: boolean;
    min: number;
    max: number;
    term: DSNodeMultiplied;
}

/**
 * Definition syntax Property node
 */
export interface DSNodeProperty {
    type: "Property";
    name: string;
}

/**
 * Definition syntax String node
 */
export interface DSNodeString {
    type: "String";
    value: string;
}

/**
 * Definition syntax Token node
 */
export interface DSNodeToken {
    type: "Token";
    value: string;
}

/**
 * Definition syntax Type node options
 */
export interface DSNodeTypeOpts {
    type: "Range";
    min: number | null;
    max: number | null;
}

/**
 * Definition syntax Type node
 */
export interface DSNodeType {
    type: "Type";
    name: string;
    opts: DSNodeTypeOpts | null;
}

/**
 * Definition syntax node
 */
export type DSNode =
    | DSNodeAtWord
    | DSNodeComma
    | DSNodeFunction
    | DSNodeGroup
    | DSNodeKeyword
    | DSNodeMultiplier
    | DSNodeProperty
    | DSNodeString
    | DSNodeToken
    | DSNodeType;

/**
 * Definition syntax node compatible with a multiplier
 */
export type DSNodeMultiplied =
    | DSNodeFunction
    | DSNodeGroup
    | DSNodeKeyword
    | DSNodeProperty
    | DSNodeString
    | DSNodeType;

/**
 * Definition syntax generate options
 */
export interface DSGenerateOptions {
    forceBraces?: boolean | undefined;
    compact?: boolean | undefined;
    decorate?: ((result: string, node: DSNode) => void) | undefined;
}

/**
 * Definition syntax walk options
 */
export interface DSWalkOptions {
    enter?: DSWalkEnterOrLeaveFn | undefined;
    leave?: DSWalkEnterOrLeaveFn | undefined;
}

/**
 * Definition syntax walk callback
 */
export type DSWalkEnterOrLeaveFn = (node: DSNode) => void;

/**
 * DefinitionSyntax
 */
export interface DefinitionSyntax {
    /**
     * Generates CSS value definition syntax from an AST
     *
     * @param node - The AST
     * @param options - Options that affect generation
     *
     * @example
     *  generate({type: 'Keyword', name: 'foo'}) => 'foo'
     */
    generate(node: DSNode, options?: DSGenerateOptions): string;

    /**
     * Generates an AST from a CSS value syntax
     *
     * @param source - The CSS value syntax to parse
     *
     * @example
     *  parse('foo | bar') =>
     *    {
     *      type: 'Group',
     *      terms: [
     *        { type: 'Keyword', name: 'foo' },
     *        { type: 'Keyword', name: 'bar' }
     *      ],
     *      combinator: '|',
     *      disallowEmpty: false,
     *      explicit: false
     *    }
     */
    parse(source: string): DSNodeGroup;

    /**
     * Walks definition syntax AST
     */
    walk(node: DSNode, options: DSWalkEnterOrLeaveFn | DSWalkOptions, context?: any): void;

    /**
     * Wrapper for syntax errors
     */
    syntaxError: SyntaxError;
}

export const definitionSyntax: DefinitionSyntax;

export const ident: {
    decode(input: string): string;
    encode(input: string): string;
};

export const string: {
    encode(input: string, apostrophe?: boolean): string;
    decode(input: string): string;
};

export const url: {
    decode(input: string): string;
    encode(input: string): string;
};

export class SyntaxMatchError extends SyntaxError {
    rawMessage: string;
    syntax: string;
    css: string;
    mismatchOffset: number;
    mismatchLength: number;
    offset: number;
    line: number;
    column: number;
    loc: {
        source: string;
        start: { offset: number; line: number; column: number };
        end: { offset: number; line: number; column: number };
    };
}

export class SyntaxReferenceError extends SyntaxError {
    reference: string;
}

export interface LexerMatchResult {
    error: Error | SyntaxMatchError | SyntaxReferenceError | null;
}

export class Lexer {
    matchAtruleDescriptor(atruleName: string, descriptorName: string, value: CssNode | string): LexerMatchResult;
    matchAtrulePrelude(atruleName: string, prelude: CssNode | string): LexerMatchResult;
    matchDeclaration(node: CssNode): LexerMatchResult;
    matchProperty(propertyName: string, value: CssNode | string): LexerMatchResult;
    matchType(typeName: string, value: CssNode | string): LexerMatchResult;
    match(syntax: DSNode | string, value: CssNode | string): LexerMatchResult;
}

export const lexer: Lexer;

export function fork(extension: {
    atrules?: Record<string, string> | undefined;
    properties?: Record<string, string> | undefined;
    types?: Record<string, string> | undefined;
    cssWideKeywords?: Array<string> | undefined;
}): { lexer: Lexer };

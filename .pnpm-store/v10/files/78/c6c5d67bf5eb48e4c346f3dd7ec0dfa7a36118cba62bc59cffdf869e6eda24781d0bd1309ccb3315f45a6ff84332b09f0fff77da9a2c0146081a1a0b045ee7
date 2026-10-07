// Type definitions for postcss-selector-parser 2.2.3
// Definitions by: Chris Eppstein <chris@eppsteins.net>

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = parser;

// A type that's T but not U.
type Diff<T, U> = T extends U ? never : T;

// TODO: Conditional types in TS 1.8 will really clean this up.
declare function parser(): parser.Processor<never>;
declare function parser<Transform>(processor: parser.AsyncProcessor<Transform>): parser.Processor<Transform, never>;
declare function parser(processor: parser.AsyncProcessor<void>): parser.Processor<never, never>;
declare function parser<Transform>(processor: parser.SyncProcessor<Transform>): parser.Processor<Transform>;
declare function parser(processor: parser.SyncProcessor<void>): parser.Processor<never>;
declare function parser<Transform>(processor?: parser.SyncProcessor<Transform> | parser.AsyncProcessor<Transform>): parser.Processor<Transform>;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 */
declare namespace parser {
    /* copied from postcss -- so we don't need to add a dependency */
    type ErrorOptions = {
        plugin?: string;
        word?: string;
        index?: number
    };
    /* the bits we use of postcss.Rule, copied from postcss -- so we don't need to add a dependency */
    type PostCSSRuleNode = {
        selector: string
        /**
         * @returns postcss.CssSyntaxError but it's a complex object, caller
         *   should cast to it if they have a dependency on postcss.
         */
        error(message: string, options?: ErrorOptions): Error;
    };
    /** Accepts a string  */
    type Selectors = string | PostCSSRuleNode
    type ProcessorFn<ReturnType = void> = (root: parser.Root) => ReturnType;
    type SyncProcessor<Transform = void> = ProcessorFn<Transform>;
    type AsyncProcessor<Transform = void> = ProcessorFn<PromiseLike<Transform>>;

    const TAG: "tag";
    const STRING: "string";
    const SELECTOR: "selector";
    const ROOT: "root";
    const PSEUDO: "pseudo";
    const NESTING: "nesting";
    const ID: "id";
    const COMMENT: "comment";
    const COMBINATOR: "combinator";
    const CLASS: "class";
    const ATTRIBUTE: "attribute";
    const UNIVERSAL: "universal";

    interface NodeTypes {
        tag: Tag,
        string: String,
        selector: Selector,
        root: Root,
        pseudo: Pseudo,
        nesting: Nesting,
        id: Identifier,
        comment: Comment,
        combinator: Combinator,
        class: ClassName,
        attribute: Attribute,
        universal: Universal
    }

    type Node = NodeTypes[keyof NodeTypes];

    function isNode(node: any): node is Node;

    interface Options {
        /**
         * Preserve whitespace when true. Default: true;
         */
        lossless: boolean;
        /**
         * When true and a postcss.Rule is passed, set the result of
         * processing back onto the rule when done. Default: true.
         */
        updateSelector: boolean;
    }
    class Processor<
        TransformType = never,
        SyncSelectorsType extends Selectors | never = Selectors
    > {
        res: Root;
        readonly result: String;
        ast(selectors: Selectors, options?: Partial<Options>): Promise<Root>;
        astSync(selectors: SyncSelectorsType, options?: Partial<Options>): Root;
        transform(selectors: Selectors, options?: Partial<Options>): Promise<TransformType>;
        transformSync(selectors: SyncSelectorsType, options?: Partial<Options>): TransformType;
        process(selectors: Selectors, options?: Partial<Options>): Promise<string>;
        processSync(selectors: SyncSelectorsType, options?: Partial<Options>): string;
    }
    interface ParserOptions {
        css: string;
        error: (message: string, options: ErrorOptions) => Error;
        options: Options;
    }
    class Parser {
        input: ParserOptions;
        lossy: boolean;
        position: number;
        root: Root;
        selectors: string;
        current: Selector;
        constructor(input: ParserOptions);
        /**
         * Raises an error, if the processor is invoked on
         * a postcss Rule node, a better error message is raised.
         */
        error(message: string, options?: ErrorOptions): void;
    }
    interface NodeSource {
        start?: {
            line: number,
            column: number
        },
        end?: {
            line: number,
            column: number
        }
    }
    interface SpaceAround {
      before: string;
      after: string;
    }
    interface Spaces extends SpaceAround {
      [spaceType: string]: string | Partial<SpaceAround> | undefined;
    }
    interface NodeOptions<Value = string> {
        value: Value;
        spaces?: Partial<Spaces>;
        source?: NodeSource;
        sourceIndex?: number;
    }
    interface Base<
        Value extends string | undefined = string,
        ParentType extends Container | undefined = Container | undefined
    > {
        type: keyof NodeTypes;
        parent: ParentType;
        value: Value;
        spaces: Spaces;
        source?: NodeSource;
        sourceIndex: number;
        rawSpaceBefore: string;
        rawSpaceAfter: string;
        remove(): Node;
        replaceWith(...nodes: Node[]): Node;
        next(): Node | undefined;
        prev(): Node | undefined;
        clone(opts?: {[override: string]:any}): this;
        /**
         * Return whether this node includes the character at the position of the given line and column.
         * Returns undefined if the nodes lack sufficient source metadata to determine the position.
         * @param line 1-index based line number relative to the start of the selector.
         * @param column 1-index based column number relative to the start of the selector.
         */
        isAtPosition(line: number, column: number): boolean | undefined;
        /**
         * Some non-standard syntax doesn't follow normal escaping rules for css,
         * this allows the escaped value to be specified directly, allowing illegal characters to be
         * directly inserted into css output.
         * @param name the property to set
         * @param value the unescaped value of the property
         * @param valueEscaped optional. the escaped value of the property.
         */
        setPropertyAndEscape(name: string, value: any, valueEscaped: string): void;
        /**
         * When you want a value to passed through to CSS directly. This method
         * deletes the corresponding raw value causing the stringifier to fallback
         * to the unescaped value.
         * @param name the property to set.
         * @param value The value that is both escaped and unescaped.
         */
        setPropertyWithoutEscape(name: string, value: any): void;
        /**
         * Some non-standard syntax doesn't follow normal escaping rules for css.
         * This allows non standard syntax to be appended to an existing property
         * by specifying the escaped value. By specifying the escaped value,
         * illegal characters are allowed to be directly inserted into css output.
         * @param {string} name the property to set
         * @param {any} value the unescaped value of the property
         * @param {string} valueEscaped optional. the escaped value of the property.
         */
        appendToPropertyAndEscape(name: string, value: any, valueEscaped: string): void;
        toString(): string;
    }
    interface ContainerOptions extends NodeOptions {
        nodes?: Array<Node>;
    }
    interface Container<
        Value extends string | undefined = string,
        Child extends Node = Node
    > extends Base<Value> {
        nodes: Array<Child>;
        append(selector: Child): this;
        prepend(selector: Child): this;
        at(index: number): Child;
        /**
         * Return the most specific node at the line and column number given.
         * The source location is based on the original parsed location, locations aren't
         * updated as selector nodes are mutated.
         *
         * Note that this location is relative to the location of the first character
         * of the selector, and not the location of the selector in the overall document
         * when used in conjunction with postcss.
         *
         * If not found, returns undefined.
         * @param line The line number of the node to find. (1-based index)
         * @param col  The column number of the node to find. (1-based index)
         */
        atPosition(line: number, column: number): Child;
        index(child: Child): number;
        readonly first: Child;
        readonly last: Child;
        readonly length: number;
        removeChild(child: Child): this;
        removeAll(): this;
        empty(): this;
        insertAfter(oldNode: Child, newNode: Child, ...restNode: Child[]): this;
        insertBefore(oldNode: Child, newNode: Child, ...restNode: Child[]): this;
        each(callback: (node: Child, index: number) => boolean | void): boolean | undefined;
        walk(
            callback: (node: Node, index: number) => boolean | void
        ): boolean | undefined;
        walkAttributes(
            callback: (node: Attribute) => boolean | void
        ): boolean | undefined;
        walkClasses(
            callback: (node: ClassName) => boolean | void
        ): boolean | undefined;
        walkCombinators(
            callback: (node: Combinator) => boolean | void
        ): boolean | undefined;
        walkComments(
            callback: (node: Comment) => boolean | void
        ): boolean | undefined;
        walkIds(
            callback: (node: Identifier) => boolean | void
        ): boolean | undefined;
        walkNesting(
            callback: (node: Nesting) => boolean | void
        ): boolean | undefined;
        walkPseudos(
            callback: (node: Pseudo) => boolean | void
        ): boolean | undefined;
        walkTags(callback: (node: Tag) => boolean | void): boolean | undefined;
        walkUniversals(callback: (node: Universal) => boolean | void): boolean | undefined;
        split(callback: (node: Child) => boolean): [Child[], Child[]];
        map<T>(callback: (node: Child) => T): T[];
        reduce(
            callback: (
                previousValue: Child,
                currentValue: Child,
                currentIndex: number,
                array: readonly Child[]
            ) => Child
        ): Child;
        reduce(
            callback: (
                previousValue: Child,
                currentValue: Child,
                currentIndex: number,
                array: readonly Child[]
            ) => Child,
            initialValue: Child
        ): Child;
        reduce<T>(
            callback: (
                previousValue: T,
                currentValue: Child,
                currentIndex: number,
                array: readonly Child[]
            ) => T,
            initialValue: T
        ): T;
        every(callback: (node: Child) => boolean): boolean;
        some(callback: (node: Child) => boolean): boolean;
        filter(callback: (node: Child) => boolean): Child[];
        sort(callback: (nodeA: Child, nodeB: Child) => number): Child[];
        toString(): string;
    }
    function isContainer(node: any): node is Root | Selector | Pseudo;

    interface NamespaceOptions<Value extends string | undefined = string> extends NodeOptions<Value> {
        namespace?: string | true;
    }
    interface Namespace<Value extends string | undefined = string> extends Base<Value> {
        /** alias for namespace */
        ns: string | true;
        /**
         *  namespace prefix.
         */
        namespace: string | true;
        /**
         * If a namespace exists, prefix the value provided with it, separated by |.
         */
        qualifiedName(value: string): string;
        /**
         * A string representing the namespace suitable for output.
         */
        readonly namespaceString: string;
    }
    function isNamespace(node: any): node is Attribute | Tag;

    interface Root extends Container<undefined, Selector> {
        type: "root";
        /**
         * Raises an error, if the processor is invoked on
         * a postcss Rule node, a better error message is raised.
         */
        error(message: string, options?: ErrorOptions): Error;
        nodeAt(line: number, column: number): Node
    }
    function root(opts: ContainerOptions): Root;
    function isRoot(node: any): node is Root;

    interface _Selector<S> extends Container<string, Diff<Node, S>> {
        type: "selector";
    }
    type Selector = _Selector<Selector>;
    function selector(opts: ContainerOptions): Selector;
    function isSelector(node: any): node is Selector;

    interface CombinatorRaws {
        value?: string;
        spaces?: {
            before?: string;
            after?: string;
        };
    }
    interface Combinator extends Base {
        type: "combinator";
        raws?: CombinatorRaws;
    }
    function combinator(opts: NodeOptions): Combinator;
    function isCombinator(node: any): node is Combinator;

    interface ClassName extends Base {
        type: "class";
    }
    function className(opts: NamespaceOptions): ClassName;
    function isClassName(node: any): node is ClassName;

    type AttributeOperator = "=" | "~=" | "|=" | "^=" | "$=" | "*=";
    type QuoteMark = '"' | "'" | null;
    interface PreferredQuoteMarkOptions {
        quoteMark?: QuoteMark;
        preferCurrentQuoteMark?: boolean;
    }
    interface SmartQuoteMarkOptions extends PreferredQuoteMarkOptions {
        smart?: boolean;
    }
    interface AttributeOptions extends NamespaceOptions<string | undefined> {
        attribute: string;
        operator?: AttributeOperator;
        insensitive?: boolean;
        quoteMark?: QuoteMark;
        /** @deprecated Use quoteMark instead. */
        quoted?: boolean;
        spaces?: {
            before?: string;
            after?: string;
            attribute?: Partial<SpaceAround>;
            operator?: Partial<SpaceAround>;
            value?: Partial<SpaceAround>;
            insensitive?: Partial<SpaceAround>;
        }
        raws: {
            unquoted?: string;
            attribute?: string;
            operator?: string;
            value?: string;
            insensitive?: string;
            spaces?: {
                attribute?: Partial<Spaces>;
                operator?: Partial<Spaces>;
                value?: Partial<Spaces>;
                insensitive?: Partial<Spaces>;
            }
        };
    }
    interface Attribute extends Namespace<string | undefined> {
        type: "attribute";
        attribute: string;
        operator?: AttributeOperator;
        insensitive?: boolean;
        quoteMark: QuoteMark;
        quoted?: boolean;
        spaces: {
            before: string;
            after: string;
            attribute?: Partial<Spaces>;
            operator?: Partial<Spaces>;
            value?: Partial<Spaces>;
            insensitive?: Partial<Spaces>;
        }
        raws: {
            /** @deprecated The attribute value is unquoted, use that instead.. */
            unquoted?: string;
            attribute?: string;
            operator?: string;
            /** The value of the attribute with quotes and escapes. */
            value?: string;
            insensitive?: string;
            spaces?: {
                attribute?: Partial<Spaces>;
                operator?: Partial<Spaces>;
                value?: Partial<Spaces>;
                insensitive?: Partial<Spaces>;
            }
        };
        /**
         * The attribute name after having been qualified with a namespace.
         */
        readonly qualifiedAttribute: string;

        /**
         * The case insensitivity flag or an empty string depending on whether this
         * attribute is case insensitive.
         */
        readonly insensitiveFlag : 'i' | '';

        /**
         * Returns the attribute's value quoted such that it would be legal to use
         * in the value of a css file. The original value's quotation setting
         * used for stringification is left unchanged. See `setValue(value, options)`
         * if you want to control the quote settings of a new value for the attribute or
         * `set quoteMark(mark)` if you want to change the quote settings of the current
         * value.
         *
         * You can also change the quotation used for the current value by setting quoteMark.
         **/
        getQuotedValue(options?: SmartQuoteMarkOptions): string;

        /**
         * Set the unescaped value with the specified quotation options. The value
         * provided must not include any wrapping quote marks -- those quotes will
         * be interpreted as part of the value and escaped accordingly.
         * @param value
         */
        setValue(value: string, options?: SmartQuoteMarkOptions): void;

        /**
         * Intelligently select a quoteMark value based on the value's contents. If
         * the value is a legal CSS ident, it will not be quoted. Otherwise a quote
         * mark will be picked that minimizes the number of escapes.
         *
         * If there's no clear winner, the quote mark from these options is used,
         * then the source quote mark (this is inverted if `preferCurrentQuoteMark` is
         * true). If the quoteMark is unspecified, a double quote is used.
         **/
        smartQuoteMark(options: PreferredQuoteMarkOptions): QuoteMark;

        /**
         * Selects the preferred quote mark based on the options and the current quote mark value.
         * If you want the quote mark to depend on the attribute value, call `smartQuoteMark(opts)`
         * instead.
         */
        preferredQuoteMark(options: PreferredQuoteMarkOptions): QuoteMark

        /**
         * returns the offset of the attribute part specified relative to the
         * start of the node of the output string.
         *
         * * "ns" - alias for "namespace"
         * * "namespace" - the namespace if it exists.
         * * "attribute" - the attribute name
         * * "attributeNS" - the start of the attribute or its namespace
         * * "operator" - the match operator of the attribute
         * * "value" - The value (string or identifier)
         * * "insensitive" - the case insensitivity flag;
         * @param part One of the possible values inside an attribute.
         * @returns -1 if the name is invalid or the value doesn't exist in this attribute.
         */
        offsetOf(part: "ns" | "namespace" | "attribute" | "attributeNS" | "operator" | "value" | "insensitive"): number;
    }
    function attribute(opts: AttributeOptions): Attribute;
    function isAttribute(node: any): node is Attribute;

    interface Pseudo extends Container<string, Selector> {
        type: "pseudo";
    }
    function pseudo(opts: ContainerOptions): Pseudo;
    /**
     * Checks whether the node is the Pseudo subtype of node.
     */
    function isPseudo(node: any): node is Pseudo;

    /**
     * Checks whether the node is, specifically, a pseudo element instead of
     * pseudo class.
     */
    function isPseudoElement(node: any): node is Pseudo;

    /**
     * Checks whether the node is, specifically, a pseudo class instead of
     * pseudo element.
     */
    function isPseudoClass(node: any): node is Pseudo;


    interface Tag extends Namespace {
        type: "tag";
    }
    function tag(opts: NamespaceOptions): Tag;
    function isTag(node: any): node is Tag;

    interface Comment extends Base {
        type: "comment";
    }
    function comment(opts: NodeOptions): Comment;
    function isComment(node: any): node is Comment;

    interface Identifier extends Base {
        type: "id";
    }
    function id(opts: any): Identifier;
    function isIdentifier(node: any): node is Identifier;

    interface Nesting extends Base {
        type: "nesting";
    }
    function nesting(opts?: any): Nesting;
    function isNesting(node: any): node is Nesting;

    interface String extends Base {
        type: "string";
    }
    function string(opts: NodeOptions): String;
    function isString(node: any): node is String;

    interface Universal extends Base {
        type: "universal";
    }
    function universal(opts?: NamespaceOptions): Universal;
    function isUniversal(node: any): node is Universal;
}

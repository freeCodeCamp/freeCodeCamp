/**
 * markdown-to-jsx is a fork of
 * [simple-markdown v0.2.2](https://github.com/Khan/simple-markdown)
 * from Khan Academy. Thank you Khan devs for making such an awesome
 * and extensible parsing infra... without it, half of the
 * optimizations here wouldn't be feasible. 🙏🏼
 */
import * as React from 'react';
/**
 * Analogous to `node.type`. Please note that the values here may change at any time,
 * so do not hard code against the value directly.
 */
export declare const RuleType: {
    readonly blockQuote: "0";
    readonly breakLine: "1";
    readonly breakThematic: "2";
    readonly codeBlock: "3";
    readonly codeFenced: "4";
    readonly codeInline: "5";
    readonly footnote: "6";
    readonly footnoteReference: "7";
    readonly gfmTask: "8";
    readonly heading: "9";
    readonly headingSetext: "10";
    /** only available if not `disableHTMLParsing` */
    readonly htmlBlock: "11";
    readonly htmlComment: "12";
    /** only available if not `disableHTMLParsing` */
    readonly htmlSelfClosing: "13";
    readonly image: "14";
    readonly link: "15";
    /** emits a `link` 'node', does not render directly */
    readonly linkAngleBraceStyleDetector: "16";
    /** emits a `link` 'node', does not render directly */
    readonly linkBareUrlDetector: "17";
    /** @deprecated merged into linkAngleBraceStyleDetector
     *
     * emits a `link` 'node', does not render directly */
    readonly linkMailtoDetector: "18";
    readonly newlineCoalescer: "19";
    readonly orderedList: "20";
    readonly paragraph: "21";
    readonly ref: "22";
    readonly refImage: "23";
    readonly refLink: "24";
    readonly table: "25";
    readonly tableSeparator: "26";
    readonly text: "27";
    readonly textBolded: "28";
    readonly textEmphasized: "29";
    readonly textEscaped: "30";
    readonly textMarked: "31";
    readonly textStrikethroughed: "32";
    readonly unorderedList: "33";
};
export type RuleType = (typeof RuleType)[keyof typeof RuleType];
declare const Priority: {
    /**
     * anything that must scan the tree before everything else
     */
    MAX: number;
    /**
     * scans for block-level constructs
     */
    HIGH: number;
    /**
     * inline w/ more priority than other inline
     */
    MED: number;
    /**
     * inline elements
     */
    LOW: number;
    /**
     * bare text and stuff that is considered leftovers
     */
    MIN: number;
};
export declare function slugify(str: string): string;
export declare function sanitizer(input: string): string;
export declare function compiler(markdown: string, options: MarkdownToJSX.Options & {
    wrapper: null;
}): React.ReactNode[];
export declare function compiler(markdown: string, options?: MarkdownToJSX.Options): React.JSX.Element;
/**
 * A simple HOC for easy React use. Feed the markdown content as a direct child
 * and the rest is taken care of automatically.
 */
declare const Markdown: React.FC<Omit<React.HTMLAttributes<Element>, 'children'> & {
    children: string;
    options?: MarkdownToJSX.Options;
}>;
export declare namespace MarkdownToJSX {
    /**
     * RequireAtLeastOne<{ ... }> <- only requires at least one key
     */
    type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];
    export type CreateElement = typeof React.createElement;
    export type HTMLTags = keyof React.JSX.IntrinsicElements;
    export type State = {
        /** true if the current content is inside anchor link grammar */
        inAnchor?: boolean;
        /** true if parsing in an HTML context */
        inHTML?: boolean;
        /** true if parsing in an inline context (subset of rules around formatting and links) */
        inline?: boolean;
        /** true if in a table */
        inTable?: boolean;
        /** use this for the `key` prop */
        key?: React.Key;
        /** true if in a list */
        list?: boolean;
        /** used for lookbacks */
        prevCapture?: string;
        /** true if parsing in inline context w/o links */
        simple?: boolean;
    };
    export interface BlockQuoteNode {
        alert?: string;
        children: MarkdownToJSX.ParserResult[];
        type: typeof RuleType.blockQuote;
    }
    export interface BreakLineNode {
        type: typeof RuleType.breakLine;
    }
    export interface BreakThematicNode {
        type: typeof RuleType.breakThematic;
    }
    export interface CodeBlockNode {
        type: typeof RuleType.codeBlock;
        attrs?: React.JSX.IntrinsicAttributes;
        lang?: string;
        text: string;
    }
    export interface CodeFencedNode {
        type: typeof RuleType.codeFenced;
    }
    export interface CodeInlineNode {
        type: typeof RuleType.codeInline;
        text: string;
    }
    export interface FootnoteNode {
        type: typeof RuleType.footnote;
    }
    export interface FootnoteReferenceNode {
        type: typeof RuleType.footnoteReference;
        target: string;
        text: string;
    }
    export interface GFMTaskNode {
        type: typeof RuleType.gfmTask;
        completed: boolean;
    }
    export interface HeadingNode {
        type: typeof RuleType.heading;
        children: MarkdownToJSX.ParserResult[];
        id: string;
        level: 1 | 2 | 3 | 4 | 5 | 6;
    }
    export interface HeadingSetextNode {
        type: typeof RuleType.headingSetext;
    }
    export interface HTMLCommentNode {
        type: typeof RuleType.htmlComment;
    }
    export interface ImageNode {
        type: typeof RuleType.image;
        alt?: string;
        target: string;
        title?: string;
    }
    export interface LinkNode {
        type: typeof RuleType.link;
        children: MarkdownToJSX.ParserResult[];
        target: string;
        title?: string;
    }
    export interface LinkAngleBraceNode {
        type: typeof RuleType.linkAngleBraceStyleDetector;
    }
    export interface LinkBareURLNode {
        type: typeof RuleType.linkBareUrlDetector;
    }
    export interface LinkMailtoNode {
        type: typeof RuleType.linkMailtoDetector;
    }
    export interface OrderedListNode {
        type: typeof RuleType.orderedList;
        items: MarkdownToJSX.ParserResult[][];
        ordered: true;
        start?: number;
    }
    export interface UnorderedListNode {
        type: typeof RuleType.unorderedList;
        items: MarkdownToJSX.ParserResult[][];
        ordered: false;
    }
    export interface NewlineNode {
        type: typeof RuleType.newlineCoalescer;
    }
    export interface ParagraphNode {
        type: typeof RuleType.paragraph;
        children: MarkdownToJSX.ParserResult[];
    }
    export interface ReferenceNode {
        type: typeof RuleType.ref;
    }
    export interface ReferenceImageNode {
        type: typeof RuleType.refImage;
        alt?: string;
        ref: string;
    }
    export interface ReferenceLinkNode {
        type: typeof RuleType.refLink;
        children: MarkdownToJSX.ParserResult[];
        fallbackChildren: string;
        ref: string;
    }
    export interface TableNode {
        type: typeof RuleType.table;
        /**
         * alignment for each table column
         */
        align: ('left' | 'right' | 'center')[];
        cells: MarkdownToJSX.ParserResult[][][];
        header: MarkdownToJSX.ParserResult[][];
    }
    export interface TableSeparatorNode {
        type: typeof RuleType.tableSeparator;
    }
    export interface TextNode {
        type: typeof RuleType.text;
        text: string;
    }
    export interface BoldTextNode {
        type: typeof RuleType.textBolded;
        children: MarkdownToJSX.ParserResult[];
    }
    export interface ItalicTextNode {
        type: typeof RuleType.textEmphasized;
        children: MarkdownToJSX.ParserResult[];
    }
    export interface EscapedTextNode {
        type: typeof RuleType.textEscaped;
    }
    export interface MarkedTextNode {
        type: typeof RuleType.textMarked;
        children: MarkdownToJSX.ParserResult[];
    }
    export interface StrikethroughTextNode {
        type: typeof RuleType.textStrikethroughed;
        children: MarkdownToJSX.ParserResult[];
    }
    export interface HTMLNode {
        type: typeof RuleType.htmlBlock;
        attrs: React.JSX.IntrinsicAttributes;
        children?: ReturnType<MarkdownToJSX.NestedParser> | undefined;
        noInnerParse: Boolean;
        tag: MarkdownToJSX.HTMLTags;
        text?: string | undefined;
    }
    export interface HTMLSelfClosingNode {
        type: typeof RuleType.htmlSelfClosing;
        attrs: React.JSX.IntrinsicAttributes;
        tag: string;
    }
    export type ParserResult = BlockQuoteNode | BreakLineNode | BreakThematicNode | CodeBlockNode | CodeFencedNode | CodeInlineNode | FootnoteNode | FootnoteReferenceNode | GFMTaskNode | HeadingNode | HeadingSetextNode | HTMLCommentNode | ImageNode | LinkNode | LinkAngleBraceNode | LinkBareURLNode | LinkMailtoNode | OrderedListNode | UnorderedListNode | NewlineNode | ParagraphNode | ReferenceNode | ReferenceImageNode | ReferenceLinkNode | TableNode | TableSeparatorNode | TextNode | BoldTextNode | ItalicTextNode | EscapedTextNode | MarkedTextNode | StrikethroughTextNode | HTMLNode | HTMLSelfClosingNode;
    export type NestedParser = (input: string, state?: MarkdownToJSX.State) => MarkdownToJSX.ParserResult[];
    export type Parser<ParserOutput> = (capture: RegExpMatchArray, nestedParse: NestedParser, state?: MarkdownToJSX.State) => ParserOutput;
    export type RuleOutput = (ast: MarkdownToJSX.ParserResult | MarkdownToJSX.ParserResult[], state: MarkdownToJSX.State) => React.ReactNode;
    export type Rule<ParserOutput = MarkdownToJSX.ParserResult> = {
        _match: (source: string, state: MarkdownToJSX.State, prevCapturedString?: string) => RegExpMatchArray;
        _order: (typeof Priority)[keyof typeof Priority];
        _parse: MarkdownToJSX.Parser<Omit<ParserOutput, 'type'>>;
        /**
         * Optional fast check that can quickly determine if this rule
         * should even be attempted. Should check the start of the source string
         * for quick patterns without expensive regex operations.
         *
         * @param source The input source string (already trimmed of leading whitespace)
         * @param state Current parser state
         * @returns true if the rule should be attempted, false to skip
         */
        _qualify?: string[] | ((source: string, state: MarkdownToJSX.State) => boolean);
        _render?: (node: ParserOutput, 
        /**
         * Continue rendering AST nodes if applicable.
         */
        render: RuleOutput, state?: MarkdownToJSX.State) => React.ReactNode;
    };
    export type Rules = {
        [K in ParserResult['type']]: K extends typeof RuleType.table ? Rule<Extract<ParserResult, {
            type: K | typeof RuleType.paragraph;
        }>> : Rule<Extract<ParserResult, {
            type: K;
        }>>;
    };
    export type Override = RequireAtLeastOne<{
        component: React.ElementType;
        props: Object;
    }> | React.ElementType;
    export type Overrides = {
        [tag in HTMLTags]?: Override;
    } & {
        [customComponent: string]: Override;
    };
    export type Options = Partial<{
        /**
         * Ultimate control over the output of all rendered JSX.
         */
        createElement: (tag: Parameters<CreateElement>[0], props: React.JSX.IntrinsicAttributes, ...children: React.ReactNode[]) => React.ReactNode;
        /**
         * The library automatically generates an anchor tag for bare URLs included in the markdown
         * document, but this behavior can be disabled if desired.
         */
        disableAutoLink: boolean;
        /**
         * Disable the compiler's best-effort transcription of provided raw HTML
         * into JSX-equivalent. This is the functionality that prevents the need to
         * use `dangerouslySetInnerHTML` in React.
         */
        disableParsingRawHTML: boolean;
        /**
         * Forces the compiler to have space between hash sign and the header text which
         * is explicitly stated in the most of the markdown specs.
         * https://github.github.com/gfm/#atx-heading
         * `The opening sequence of # characters must be followed by a space or by the end of line.`
         */
        enforceAtxHeadings: boolean;
        /**
         * Forces the compiler to always output content with a block-level wrapper
         * (`<p>` or any block-level syntax your markdown already contains.)
         */
        forceBlock: boolean;
        /**
         * Forces the compiler to always output content with an inline wrapper (`<span>`)
         */
        forceInline: boolean;
        /**
         * Forces the compiler to wrap results, even if there is only a single
         * child or no children.
         */
        forceWrapper: boolean;
        /**
         * Supply additional HTML entity: unicode replacement mappings.
         *
         * Pass only the inner part of the entity as the key,
         * e.g. `&le;` -> `{ "le": "\u2264" }`
         *
         * By default
         * the following entities are replaced with their unicode equivalents:
         *
         * ```
         * &amp;
         * &apos;
         * &gt;
         * &lt;
         * &nbsp;
         * &quot;
         * ```
         */
        namedCodesToUnicode: {
            [key: string]: string;
        };
        /**
         * Selectively control the output of particular HTML tags as they would be
         * emitted by the compiler.
         */
        overrides: Overrides;
        /**
         * Allows for full control over rendering of particular rules.
         * For example, to implement a LaTeX renderer such as `react-katex`:
         *
         * ```
         * renderRule(next, node, renderChildren, state) {
         *   if (node.type === RuleType.codeBlock && node.lang === 'latex') {
         *     return (
         *       <TeX as="div" key={state.key}>
         *         {String.raw`${node.text}`}
         *       </TeX>
         *     )
         *   }
         *
         *   return next();
         * }
         * ```
         *
         * Thar be dragons obviously, but you can do a lot with this
         * (have fun!) To see how things work internally, check the `render`
         * method in source for a particular rule.
         */
        renderRule: (
        /** Resume normal processing, call this function as a fallback if you are not returning custom JSX. */
        next: () => React.ReactNode, 
        /** the current AST node, use `RuleType` against `node.type` for identification */
        node: ParserResult, 
        /** use as `renderChildren(node.children)` for block nodes */
        renderChildren: RuleOutput, 
        /** contains `key` which should be supplied to the topmost JSX element */
        state: State) => React.ReactNode;
        /**
         * Override the built-in sanitizer function for URLs, etc if desired. The built-in version is available as a library export called `sanitizer`.
         */
        sanitizer: (value: string, tag: HTMLTags, attribute: string) => string | null;
        /**
         * Override normalization of non-URI-safe characters for use in generating
         * HTML IDs for anchor linking purposes.
         */
        slugify: (input: string, defaultFn: (input: string) => string) => string;
        /**
         * Declare the type of the wrapper to be used when there are multiple
         * children to render. Set to `null` to get an array of children back
         * without any wrapper, or use `React.Fragment` to get a React element
         * that won't show up in the DOM.
         */
        wrapper: React.ElementType | null;
    }>;
    export {};
}
export default Markdown;

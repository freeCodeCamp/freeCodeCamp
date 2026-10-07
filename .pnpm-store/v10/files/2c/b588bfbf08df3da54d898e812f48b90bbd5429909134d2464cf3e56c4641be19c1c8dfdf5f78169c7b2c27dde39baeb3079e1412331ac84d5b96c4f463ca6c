// Adapted from
// - https://katex.org/docs/options
// - https://katex.org/docs/api
// - https://katex.org/docs/error
// for v0.16.11 on 2024/12/01
// with some references from https://www.npmjs.com/package/@types/katex

/**
 * For the `trust` option in `KatexOptions`, a custom function
 * `handler(context)` can be provided to customize behavior depending on the
 * context (command, arguments e.g. a URL, etc.)
 * @see https://katex.org/docs/options
 */
export type TrustContext =
    | { command: "\\url", url: string, protocol?: string }
    | { command: "\\href", url: string, protocol?: string }
    | { command: "\\includegraphics", url: string, protocol?: string }
    | { command: "\\htmlClass", class: string }
    | { command: "\\htmlId", id: string }
    | { command: "\\htmlStyle", style: string }
    | { command: "\\htmlData", attributes: Record<string, string> }


export type Catcodes = Record<string, number>;

export interface Lexer {
  input: string;
  tokenRegex: RegExp;
  settings: Required<KatexOptions>;
  catcodes: Catcodes;
}

export interface SourceLocation {
  start: number;
  end: number;
  lexer: Lexer;
}

export interface Token {
  text: string;
  loc: SourceLocation | undefined;
  noexpand?: boolean;
  treatAsRelax?: boolean;
}


export type StrictFunction = (
  errorCode:
    | "unknownSymbol"
    | "unicodeTextInMathMode"
    | "mathVsTextUnits"
    | "commentAtEnd"
    | "htmlExtension"
    | "newLineInDisplayMode",
  errorMsg: string,
  token: Token,
) => boolean | "error" | "warn" | "ignore" | undefined;


/**
 * Options for `katex.render` and `katex.renderToString`.
 * @see https://katex.org/docs/options
 */
export interface KatexOptions {
    /**
     * If `true` the math will be rendered in display mode.
     * If `false` the math will be rendered in inline mode.
     * @see https://katex.org/docs/options
     *
     * @default false
     */
    displayMode?: boolean;
    /**
     * Determines the markup language of the output. The valid choices are:
     * - `html`: Outputs KaTeX in HTML only.
     * - `mathml`: Outputs KaTeX in MathML only.
     * - `htmlAndMathml`: Outputs HTML for visual rendering and includes MathML
     * for accessibility.
     *
     * @default "htmlAndMathml"
     */
    output?: "html" | "mathml" | "htmlAndMathml";
    /**
     * If `true`, display math has `\tag`s rendered on the left instead of the
     * right, like `\usepackage[leqno]{amsmath}` in LaTeX.
     *
     * @default false
     */
    leqno?: boolean;
    /**
     * If `true`, display math renders flush left with a `2em` left margin,
     * like `\documentclass[fleqn]` in LaTeX with the `amsmath` package.
     *
     * @default false
     */
    fleqn?: boolean;
    /**
     * If `true`, KaTeX will throw a `ParseError` when it encounters an
     * unsupported command or invalid LaTeX.
     * If `false`, KaTeX will render unsupported commands as text, and render
     * invalid LaTeX as its source code with hover text giving the error, in
     * the color given by `errorColor`.
     *
     * @default true
     */
    throwOnError?: boolean;
    /**
     * A color string given in the format `"#XXX"` or `"#XXXXXX"`. This option
     * determines the color that unsupported commands and invalid LaTeX are
     * rendered in when `throwOnError` is set to `false`.
     *
     * @default "#cc0000"
     */
    errorColor?: string;
    /**
     * A collection of custom macros.
     * @see https://katex.org/docs/options
     */
    macros?: Record<string, string | object | ((macroExpander:object)
        => string | object)>;
    /**
     * Specifies a minimum thickness, in ems, for fraction lines, `\sqrt` top
     * lines, `{array}` vertical lines, `\hline`, `\hdashline`, `\underline`,
     * `\overline`, and the borders of `\fbox`, `\boxed`, and `\fcolorbox`.
     * The usual value for these items is `0.04`, so for `minRuleThickness`
     * to be effective it should probably take a value slightly above `0.04`,
     * say `0.05` or `0.06`. Negative values will be ignored.
     */
    minRuleThickness?: number;
    /**
     * In early versions of both KaTeX (<0.8.0) and MathJax, the `\color`
     * function expected the content to be a function argument, as in
     * `\color{blue}{hello}`. In current KaTeX, `\color` is a switch, as in
     * `\color{blue}` hello. This matches LaTeX behavior. If you want the old
     * `\color` behavior, set option colorIsTextColor to true.
     */
    colorIsTextColor?: boolean;
    /**
     * All user-specified sizes, e.g. in `\rule{500em}{500em}`, will be capped
     * to `maxSize` ems. If set to `Infinity` (the default), users can make
     * elements and spaces arbitrarily large.
     *
     * @default Infinity
     */
    maxSize?: number;
    /**
     * Limit the number of macro expansions to the specified number, to prevent
     * e.g. infinite macro loops. `\edef` expansion counts all expanded tokens.
     * If set to `Infinity`, the macro expander will try to fully expand as in
     * LaTeX.
     *
     * @default 1000
     */
    maxExpand?: number;
    /**
     * If `false` or `"ignore"`, allow features that make writing LaTeX
     * convenient but are not actually supported by (Xe)LaTeX
     * (similar to MathJax).
     * If `true` or `"error"` (LaTeX faithfulness mode), throw an error for any
     * such transgressions.
     * If `"warn"` (the default), warn about such behavior via `console.warn`.
     * Provide a custom function `handler(errorCode, errorMsg, token)` to
     * customize behavior depending on the type of transgression (summarized by
     * the string code `errorCode` and detailed in `errorMsg`); this function
     * can also return `"ignore"`, `"error"`, or `"warn"` to use a built-in
     * behavior.
     * @see https://katex.org/docs/options
     *
     * @default "warn"
     */
    strict?:
        | boolean
        | "ignore" | "warn" | "error"
        | StrictFunction;
    /**
     * If `false` (do not trust input), prevent any commands like
     * `\includegraphics` that could enable adverse behavior, rendering them
     * instead in `errorColor`.
     * If `true` (trust input), allow all such commands.
     * Provide a custom function `handler(context)` to customize behavior
     * depending on the context (command, arguments e.g. a URL, etc.).
     * @see https://katex.org/docs/options
     *
     * @default false
    */
    trust?: boolean | ((context: TrustContext) => boolean);
    /**
     * Run KaTeX code in the global group. As a consequence, macros defined at
     * the top level by `\def` and `\newcommand` are added to the macros
     * argument and can be used in subsequent render calls. In LaTeX,
     * constructs such as `\begin{equation}` and `$$` create a local group and
     * prevent definitions other than `\gdef` from becoming visible outside of
     * those blocks, so this is KaTeX's default behavior.
     *
     * @default false
     */
    globalGroup?: boolean;
}

/**
 * In-browser rendering
 *
 * Call the `render` function with a TeX expression and a DOM element to
 * render into.
 *
 * @param {string} tex A TeX expression.
 * @param {HTMLElement} element A HTML DOM element.
 * @param {KatexOptions} options An options object.
 * @returns {void}
 * @see https://katex.org/docs/api
 */
export function render(
    tex: string,
    element: HTMLElement,
    options?: KatexOptions,
): void;

/**
 * Server-side rendering or rendering to a string
 *
 * Use the `renderToString` function to generate HTML on the server or to
 * generate an HTML string of the rendered math.
 *
 * @param {string} tex A TeX expression.
 * @param {KatexOptions} options An options object.
 * @returns {string} The HTML string of the rendered math.
 * @see https://katex.org/docs/api
 */
export function renderToString(tex: string, options?: KatexOptions): string;

/**
 * If KaTeX encounters an error (invalid or unsupported LaTeX) and
 * `throwOnError` hasn't been set to `false`, then `katex.render` and
 * `katex.renderToString` will throw an exception of type
 * `ParseError`. The message in this error includes some of the LaTeX source
 * code, so needs to be escaped if you want to render it to HTML.
 * @see https://katex.org/docs/error
 */
export class ParseError implements Error {
    constructor(message: string, token?: object);
    name: "ParseError";
    position: number;
    length: number;
    rawMessage: string;
    message: string;
}

export const version: string;

export as namespace katex;

declare const katex: {
    version: string;
    render: typeof render;
    renderToString: typeof renderToString;
    ParseError: typeof ParseError;
};

export default katex;

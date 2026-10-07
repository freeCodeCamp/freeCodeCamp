/* eslint no-console:0 */
/**
 * This is the main entry point for KaTeX. Here, we expose functions for
 * rendering expressions either to DOM nodes or to markup strings.
 *
 * We also expose the ParseError class to check if errors thrown from KaTeX are
 * errors in the expression, or errors in javascript handling.
 */

import ParseError from "./src/ParseError";
import Settings, {SETTINGS_SCHEMA} from "./src/Settings";

import {buildTree, buildHTMLTree} from "./src/buildTree";
import parseTree from "./src/parseTree";
import {makeSpan} from "./src/buildCommon";
import {
    Span,
    Anchor,
    SymbolNode,
    SvgNode,
    PathNode,
    LineNode,
} from "./src/domTree";

import type {SettingsOptions} from "./src/Settings";
import type {AnyParseNode} from "./src/parseNode";
import type {DomSpan} from "./src/domTree";

import {defineSymbol} from './src/symbols';
import defineFunction from './src/defineFunction';
import defineMacro from './src/defineMacro';
import {setFontMetrics} from './src/fontMetrics';

declare let __VERSION__: string;

/**
 * Parse and build an expression, and place that expression in the DOM node
 * given.
 */
let render: (
    expression: string,
    baseNode: Node,
    options: SettingsOptions,
) => void = function(
    expression: string,
    baseNode: Node,
    options: SettingsOptions,
) {
    baseNode.textContent = "";
    const node = renderToDomTree(expression, options).toNode();
    baseNode.appendChild(node);
};

// KaTeX's styles don't work properly in quirks mode. Print out an error, and
// disable rendering.
if (typeof document !== "undefined") {
    if (document.compatMode !== "CSS1Compat") {
        typeof console !== "undefined" && console.warn(
            "Warning: KaTeX doesn't work in quirks mode. Make sure your " +
                "website has a suitable doctype.");

        render = function() {
            throw new ParseError("KaTeX doesn't work in quirks mode.");
        };
    }
}

/**
 * Parse and build an expression, and return the markup for that.
 */
const renderToString = function(
    expression: string,
    options: SettingsOptions,
): string {
    const markup = renderToDomTree(expression, options).toMarkup();
    return markup;
};

/**
 * Parse an expression and return the parse tree.
 */
const generateParseTree = function(
    expression: string,
    options?: SettingsOptions,
): AnyParseNode[] {
    const settings = new Settings(options);
    return parseTree(expression, settings);
};

/**
 * If the given error is a KaTeX ParseError and options.throwOnError is false,
 * renders the invalid LaTeX as a span with hover title giving the KaTeX
 * error message.  Otherwise, simply throws the error.
 */
const renderError = function(
    error: unknown,
    expression: string,
    options: Settings,
) {
    if (options.throwOnError || !(error instanceof ParseError)) {
        throw error;
    }
    const node = makeSpan(["katex-error"],
        [new SymbolNode(expression)]);
    node.setAttribute("title", error.toString());
    node.setAttribute("style", `color:${options.errorColor}`);
    return node;
};

/**
 * Generates and returns the katex build tree. This is used for advanced
 * use cases (like rendering to custom output).
 */
const renderToDomTree = function(
    expression: string,
    options: SettingsOptions,
): DomSpan {
    const settings = new Settings(options);
    try {
        const tree = parseTree(expression, settings);
        return buildTree(tree, expression, settings);
    } catch (error) {
        return renderError(error, expression, settings);
    }
};

/**
 * Generates and returns the katex build tree, with just HTML (no MathML).
 * This is used for advanced use cases (like rendering to custom output).
 */
const renderToHTMLTree = function(
    expression: string,
    options: SettingsOptions,
): DomSpan {
    const settings = new Settings(options);
    try {
        const tree = parseTree(expression, settings);
        return buildHTMLTree(tree, expression, settings);
    } catch (error) {
        return renderError(error, expression, settings);
    }
};

const version = __VERSION__;

const __domTree = {
    Span,
    Anchor,
    SymbolNode,
    SvgNode,
    PathNode,
    LineNode,
};

// ESM exports
export {
    version,
    render,
    renderToString,
    ParseError,
    SETTINGS_SCHEMA,
    generateParseTree as __parse,
    renderToDomTree as __renderToDomTree,
    renderToHTMLTree as __renderToHTMLTree,
    setFontMetrics as __setFontMetrics,
    defineSymbol as __defineSymbol,
    defineFunction as __defineFunction,
    defineMacro as __defineMacro,
    __domTree,
};

// CJS exports and ESM default export
export default {
    /**
     * Current KaTeX version
     */
    version,
    /**
     * Renders the given LaTeX into an HTML+MathML combination, and adds
     * it as a child to the specified DOM node.
     */
    render,
    /**
     * Renders the given LaTeX into an HTML+MathML combination string,
     * for sending to the client.
     */
    renderToString,
    /**
     * KaTeX error, usually during parsing.
     */
    ParseError,
    /**
     * The schema of Settings
     */
    SETTINGS_SCHEMA,
    /**
     * Parses the given LaTeX into KaTeX's internal parse tree structure,
     * without rendering to HTML or MathML.
     *
     * NOTE: This method is not currently recommended for public use.
     * The internal tree representation is unstable and is very likely
     * to change. Use at your own risk.
     */
    __parse: generateParseTree,
    /**
     * Renders the given LaTeX into an HTML+MathML internal DOM tree
     * representation, without flattening that representation to a string.
     *
     * NOTE: This method is not currently recommended for public use.
     * The internal tree representation is unstable and is very likely
     * to change. Use at your own risk.
     */
    __renderToDomTree: renderToDomTree,
    /**
     * Renders the given LaTeX into an HTML internal DOM tree representation,
     * without MathML and without flattening that representation to a string.
     *
     * NOTE: This method is not currently recommended for public use.
     * The internal tree representation is unstable and is very likely
     * to change. Use at your own risk.
     */
    __renderToHTMLTree: renderToHTMLTree,
    /**
     * extends internal font metrics object with a new object
     * each key in the new object represents a font name
    */
    __setFontMetrics: setFontMetrics,
    /**
     * adds a new symbol to builtin symbols table
     */
    __defineSymbol: defineSymbol,
    /**
     * adds a new function to builtin function list,
     * which directly produce parse tree elements
     * and have their own html/mathml builders
     */
    __defineFunction: defineFunction,
    /**
     * adds a new macro to builtin macro list
     */
    __defineMacro: defineMacro,
    /**
     * Expose the dom tree node types, which can be useful for type checking nodes.
     *
     * NOTE: These methods are not currently recommended for public use.
     * The internal tree representation is unstable and is very likely
     * to change. Use at your own risk.
     */
    __domTree,
};

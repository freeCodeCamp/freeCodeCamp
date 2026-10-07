/**
 * This file converts a parse tree into a corresponding MathML tree. The main
 * entry point is the `buildMathML` function, which takes a parse tree from the
 * parser.
 */

import {fontMap, makeSpan} from "./buildCommon";
import {getCharacterMetrics} from "./fontMetrics";
import ParseError from "./ParseError";
import symbols, {ligatures} from "./symbols";
import {_mathmlGroupBuilders as groupBuilders} from "./defineFunction";
import {MathNode, TextNode} from "./mathMLTree";

import type Options from "./Options";
import type {AnyParseNode, SymbolParseNode} from "./parseNode";
import type {DomSpan} from "./domTree";
import type {MathDomNode} from "./mathMLTree";
import type {FontVariant, Mode} from "./types";

const noVariantSymbols = new Set(["\\imath", "\\jmath"]);
const rowLikeTypes = new Set(["mrow", "mtable"]);

/**
 * Takes a symbol and converts it into a MathML text node after performing
 * optional replacement from symbols.js.
 */
export const makeText = function(
    text: string,
    mode: Mode,
    options?: Options,
): TextNode {
    if (symbols[mode][text] && symbols[mode][text].replace &&
        text.charCodeAt(0) !== 0xD835 &&
        !(ligatures.hasOwnProperty(text) && options &&
          ((options.fontFamily && options.fontFamily.slice(4, 6) === "tt") ||
           (options.font && options.font.slice(4, 6) === "tt")))) {
        text = symbols[mode][text].replace!;
    }

    return new TextNode(text);
};

/**
 * Wrap the given array of nodes in an <mrow> node if needed, i.e.,
 * unless the array has length 1.  Always returns a single node.
 */
export const makeRow = function(body: MathDomNode[]): MathDomNode {
    if (body.length === 1) {
        return body[0];
    } else {
        return new MathNode("mrow", body);
    }
};

/**
 * Returns the math variant as a string or null if none is required.
 */
export const getVariant = function(
    group: SymbolParseNode,
    options: Options,
): FontVariant | null | undefined {
    // Handle \text... font specifiers as best we can.
    // MathML has a limited list of allowable mathvariant specifiers; see
    // https://www.w3.org/TR/MathML3/chapter3.html#presm.commatt
    if (options.fontFamily === "texttt") {
        return "monospace";
    } else if (options.fontFamily === "textsf") {
        if (options.fontShape === "textit" &&
            options.fontWeight === "textbf") {
            return "sans-serif-bold-italic";
        } else if (options.fontShape === "textit") {
            return "sans-serif-italic";
        } else if (options.fontWeight === "textbf") {
            return "bold-sans-serif";
        } else {
            return "sans-serif";
        }
    } else if (options.fontShape === "textit" &&
               options.fontWeight === "textbf") {
        return "bold-italic";
    } else if (options.fontShape === "textit") {
        return "italic";
    } else if (options.fontWeight === "textbf") {
        return "bold";
    }

    const font = options.font;
    if (!font || font === "mathnormal") {
        return null;
    }

    const mode = group.mode;
    if (font === "mathit") {
        return "italic";
    } else if (font === "boldsymbol") {
        return group.type === "textord" ? "bold" : "bold-italic";
    } else if (font === "mathbf") {
        return "bold";
    } else if (font === "mathbb") {
        return "double-struck";
    } else if (font === "mathsfit") {
        return "sans-serif-italic";
    } else if (font === "mathfrak") {
        return "fraktur";
    } else if (font === "mathscr" || font === "mathcal") {
        // MathML makes no distinction between script and calligraphic
        return "script";
    } else if (font === "mathsf") {
        return "sans-serif";
    } else if (font === "mathtt") {
        return "monospace";
    }

    let text = group.text;
    if (noVariantSymbols.has(text)) {
        return null;
    }

    if (symbols[mode][text]) {
        const replacement = symbols[mode][text].replace;
        if (replacement) {
            text = replacement;
        }
    }

    const fontName = fontMap[font].fontName;
    if (getCharacterMetrics(text, fontName, mode)) {
        return fontMap[font].variant;
    }

    return null;
};

/**
 * Check for <mi>.</mi> which is how a dot renders in MathML,
 * or <mo separator="true" lspace="0em" rspace="0em">,</mo>
 * which is how a braced comma {,} renders in MathML
 */
function isNumberPunctuation(group: MathNode | null | undefined): boolean {
    if (!group) {
        return false;
    }
    if (group.type === 'mi' && group.children.length === 1) {
        const child = group.children[0];
        return child instanceof TextNode && child.text === '.';
    } else if (group.type === 'mo' && group.children.length === 1 &&
        group.getAttribute('separator') === 'true' &&
        group.getAttribute('lspace') === '0em' &&
        group.getAttribute('rspace') === '0em'
    ) {
        const child = group.children[0];
        return child instanceof TextNode && child.text === ',';
    } else {
        return false;
    }
}

/**
 * Takes a list of nodes, builds them, and returns a list of the generated
 * MathML nodes.  Also combine consecutive <mtext> outputs into a single
 * <mtext> tag.
 */
export const buildExpression = function(
    expression: AnyParseNode[],
    options: Options,
    isOrdgroup?: boolean,
): MathNode[] {
    if (expression.length === 1) {
        const group = buildGroup(expression[0], options);
        if (isOrdgroup && group instanceof MathNode && group.type === "mo") {
            // When TeX writers want to suppress spacing on an operator,
            // they often put the operator by itself inside braces.
            group.setAttribute("lspace", "0em");
            group.setAttribute("rspace", "0em");
        }
        return [group];
    }

    const groups = [];
    let lastGroup;
    for (let i = 0; i < expression.length; i++) {
        const group = buildGroup(expression[i], options);
        if (group instanceof MathNode && lastGroup instanceof MathNode) {
            // Concatenate adjacent <mtext>s
            if (group.type === 'mtext' && lastGroup.type === 'mtext'
                && group.getAttribute('mathvariant') ===
                   lastGroup.getAttribute('mathvariant')) {
                lastGroup.children.push(...group.children);
                continue;
            // Concatenate adjacent <mn>s
            } else if (group.type === 'mn' && lastGroup.type === 'mn') {
                lastGroup.children.push(...group.children);
                continue;
            // Concatenate <mn>...</mn> followed by <mi>.</mi>
            } else if (isNumberPunctuation(group) && lastGroup.type === 'mn') {
                lastGroup.children.push(...group.children);
                continue;
            // Concatenate <mi>.</mi> followed by <mn>...</mn>
            } else if (group.type === 'mn' && isNumberPunctuation(lastGroup)) {
                group.children = [...lastGroup.children, ...group.children];
                groups.pop();
            // Put preceding <mn>...</mn> or <mi>.</mi> inside base of
            // <msup><mn>...base...</mn>...exponent...</msup> (or <msub>)
            } else if ((group.type === 'msup' || group.type === 'msub') &&
                group.children.length >= 1 &&
                (lastGroup.type === 'mn' || isNumberPunctuation(lastGroup))
            ) {
                const base = group.children[0];
                if (base instanceof MathNode && base.type === 'mn') {
                    base.children = [...lastGroup.children, ...base.children];
                    groups.pop();
                }
            // \not
            } else if (lastGroup.type === 'mi' && lastGroup.children.length === 1) {
                const lastChild = lastGroup.children[0];
                if (lastChild instanceof TextNode && lastChild.text === '\u0338' &&
                    (group.type === 'mo' || group.type === 'mi' ||
                        group.type === 'mn')) {
                    const child = group.children[0];
                    if (child instanceof TextNode && child.text.length > 0) {
                        // Overlay with combining character long solidus
                        child.text = child.text.slice(0, 1) + "\u0338" +
                            child.text.slice(1);
                        groups.pop();
                    }
                }
            }
        }
        groups.push(group);
        lastGroup = group;
    }
    return groups;
};

/**
 * Equivalent to buildExpression, but wraps the elements in an <mrow>
 * if there's more than one.  Returns a single node instead of an array.
 */
export const buildExpressionRow = function(
    expression: AnyParseNode[],
    options: Options,
    isOrdgroup?: boolean,
): MathDomNode {
    return makeRow(buildExpression(expression, options, isOrdgroup));
};

/**
 * Takes a group from the parser and calls the appropriate groupBuilders function
 * on it to produce a MathML node.
 */
export const buildGroup = function(
    group: AnyParseNode | null | undefined,
    options: Options,
): MathNode {
    if (!group) {
        return new MathNode("mrow");
    }

    if (groupBuilders[group.type]) {
        // Call the groupBuilders function
        // TODO(ts)
        const result: MathDomNode = groupBuilders[group.type](group, options);
        // TODO(ts)
        return result as MathNode;
    } else {
        throw new ParseError(
            "Got group of unknown type: '" + group.type + "'");
    }
};

/**
 * Takes a full parse tree and settings and builds a MathML representation of
 * it. In particular, we put the elements from building the parse tree into a
 * <semantics> tag so we can also include that TeX source as an annotation.
 *
 * Note that we actually return a domTree element with a `<math>` inside it so
 * we can do appropriate styling.
 */
export default function buildMathML(
    tree: AnyParseNode[],
    texExpression: string,
    options: Options,
    isDisplayMode: boolean,
    forMathmlOnly: boolean,
): DomSpan {
    const expression = buildExpression(tree, options);

    // TODO: Make a pass thru the MathML similar to buildHTML.traverseNonSpaceNodes
    // and add spacing nodes. This is necessary only adjacent to math operators
    // like \sin or \lim or to subsup elements that contain math operators.
    // MathML takes care of the other spacing issues.

    // Wrap up the expression in an mrow so it is presented in the semantics
    // tag correctly, unless it's a single <mrow> or <mtable>.
    let wrapper;
    if (expression.length === 1 && expression[0] instanceof MathNode &&
        rowLikeTypes.has(expression[0].type)) {
        wrapper = expression[0];
    } else {
        wrapper = new MathNode("mrow", expression);
    }

    // Build a TeX annotation of the source
    const annotation = new MathNode(
        "annotation", [new TextNode(texExpression)]);

    annotation.setAttribute("encoding", "application/x-tex");

    const semantics = new MathNode(
        "semantics", [wrapper, annotation]);

    const math = new MathNode("math", [semantics]);
    math.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
    if (isDisplayMode) {
        math.setAttribute("display", "block");
    }

    // You can't style <math> nodes, so we wrap the node in a span.
    // NOTE: The span class is not typed to have <math> nodes as children, and
    // we don't want to make the children type more generic since the children
    // of span are expected to have more fields in `buildHtml` contexts.
    const wrapperClass = forMathmlOnly ? "katex" : "katex-mathml";
    // TODO(ts)
    return makeSpan([wrapperClass], [math as any]);
}

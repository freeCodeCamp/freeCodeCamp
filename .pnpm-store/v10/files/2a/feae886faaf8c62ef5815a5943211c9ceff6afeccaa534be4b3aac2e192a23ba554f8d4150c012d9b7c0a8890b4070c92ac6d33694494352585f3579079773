/* eslint no-console:0 */
/**
 * This module contains general functions that can be used for building
 * different kinds of domTree nodes in a consistent manner.
 */

import {SymbolNode, Anchor, Span, PathNode, SvgNode, createClass} from "./domTree";
import {getCharacterMetrics} from "./fontMetrics";
import symbols, {ligatures} from "./symbols";
import {wideCharacterFont} from "./wide-character";
import {calculateSize, makeEm} from "./units";
import {DocumentFragment} from "./tree";

import type Options from "./Options";
import type {ParseNode} from "./parseNode";
import type {CharacterMetrics} from "./fontMetrics";
import type {FontVariant, Mode} from "./types";
import type {documentFragment as HtmlDocumentFragment} from "./domTree";
import type {HtmlDomNode, DomSpan, SvgSpan, CssStyle} from "./domTree";
import type {Measurement} from "./units";

/**
 * Looks up the given symbol in fontMetrics, after applying any symbol
 * replacements defined in symbol.js
 */
const lookupSymbol = function(
    value: string,
    // TODO(#963): Use a union type for this.
    fontName: string,
    mode: Mode,
): {
    value: string;
    metrics: CharacterMetrics | null | undefined;
} {
    // Replace the value with its replaced value from symbol.js
    if (symbols[mode][value]) {
        const replacement = symbols[mode][value].replace;
        if (replacement) {
            value = replacement;
        }
    }

    return {
        value,
        metrics: getCharacterMetrics(value, fontName, mode),
    };
};

/**
 * Makes a symbolNode after translation via the list of symbols in symbols.js.
 * Correctly pulls out metrics for the character, and optionally takes a list of
 * classes to be attached to the node.
 *
 * TODO: make argument order closer to makeSpan
 * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
 * should if present come first in `classes`.
 * TODO(#953): Make `options` mandatory and always pass it in.
 */
export const makeSymbol = function(
    value: string,
    fontName: string,
    mode: Mode,
    options?: Options,
    classes?: string[],
): SymbolNode {
    const lookup = lookupSymbol(value, fontName, mode);
    const metrics = lookup.metrics;
    value = lookup.value;

    let symbolNode;
    if (metrics) {
        let italic = metrics.italic;
        if (mode === "text" || (options && options.font === "mathit")) {
            italic = 0;
        }
        symbolNode = new SymbolNode(
            value, metrics.height, metrics.depth, italic, metrics.skew,
            metrics.width, classes);
    } else {
        // TODO(emily): Figure out a good way to only print this in development
        typeof console !== "undefined" && console.warn("No character metrics " +
            `for '${value}' in style '${fontName}' and mode '${mode}'`);
        symbolNode = new SymbolNode(value, 0, 0, 0, 0, 0, classes);
    }

    if (options) {
        symbolNode.maxFontSize = options.sizeMultiplier;
        if (options.style.isTight()) {
            symbolNode.classes.push("mtight");
        }
        const color = options.getColor();
        if (color) {
            symbolNode.style.color = color;
        }
    }

    return symbolNode;
};

/**
 * Makes a symbol in Main-Regular or AMS-Regular.
 * Used for rel, bin, open, close, inner, and punct.
 */
export const mathsym = function(
    value: string,
    mode: Mode,
    options: Options,
    classes: string[] = [],
): SymbolNode {
    // Decide what font to render the symbol in by its entry in the symbols
    // table.
    // Have a special case for when the value = \ because the \ is used as a
    // textord in unsupported command errors but cannot be parsed as a regular
    // text ordinal and is therefore not present as a symbol in the symbols
    // table for text, as well as a special case for boldsymbol because it
    // can be used for bold + and -
    if (options.font === "boldsymbol" &&
            lookupSymbol(value, "Main-Bold", mode).metrics) {
        return makeSymbol(value, "Main-Bold", mode, options,
            classes.concat(["mathbf"]));
    } else if (value === "\\" || symbols[mode][value].font === "main") {
        return makeSymbol(value, "Main-Regular", mode, options, classes);
    } else {
        return makeSymbol(
            value, "AMS-Regular", mode, options, classes.concat(["amsrm"]));
    }
};

/**
 * Determines which of the two font names (Main-Bold and Math-BoldItalic) and
 * corresponding style tags (mathbf or boldsymbol) to use for font "boldsymbol",
 * depending on the symbol.  Use this function instead of fontMap for font
 * "boldsymbol".
 */
const boldsymbol = function(
    value: string,
    mode: Mode,
    options: Options,
    classes: string[],
    type: "mathord" | "textord",
): {
    fontName: string;
    fontClass: string;
} {
    if (type !== "textord" &&
        lookupSymbol(value, "Math-BoldItalic", mode).metrics) {
        return {
            fontName: "Math-BoldItalic",
            fontClass: "boldsymbol",
        };
    } else {
        // Some glyphs do not exist in Math-BoldItalic so we need to use
        // Main-Bold instead.
        return {
            fontName: "Main-Bold",
            fontClass: "mathbf",
        };
    }
};

/**
 * Makes either a mathord or textord in the correct font and color.
 */
export const makeOrd = function<NODETYPE extends "spacing" | "mathord" | "textord">(
    group: ParseNode<NODETYPE>,
    options: Options,
    type: "mathord" | "textord",
): HtmlDocumentFragment | SymbolNode {
    const mode = group.mode;
    const text = group.text;

    const classes = ["mord"];

    // Math mode or Old font (i.e. \rm)
    const isFont = mode === "math" || (mode === "text" && options.font);
    const fontOrFamily = isFont ? options.font : options.fontFamily;
    let wideFontName = "";
    let wideFontClass = "";
    if (text.charCodeAt(0) === 0xD835) {
        [wideFontName, wideFontClass] = wideCharacterFont(text, mode);
    }
    if (wideFontName.length > 0) {
        // surrogate pairs get special treatment
        return makeSymbol(text, wideFontName, mode, options,
            classes.concat(wideFontClass));
    } else if (fontOrFamily) {
        let fontName;
        let fontClasses;
        if (fontOrFamily === "boldsymbol") {
            const fontData = boldsymbol(text, mode, options, classes, type);
            fontName = fontData.fontName;
            fontClasses = [fontData.fontClass];
        } else if (isFont) {
            fontName = fontMap[fontOrFamily].fontName;
            fontClasses = [fontOrFamily];
        } else {
            fontName = retrieveTextFontName(fontOrFamily, options.fontWeight,
                                            options.fontShape);
            fontClasses = [fontOrFamily, options.fontWeight, options.fontShape];
        }

        if (lookupSymbol(text, fontName, mode).metrics) {
            return makeSymbol(text, fontName, mode, options,
                classes.concat(fontClasses));
        } else if (ligatures.hasOwnProperty(text) &&
                   fontName.slice(0, 10) === "Typewriter") {
            // Deconstruct ligatures in monospace fonts (\texttt, \tt).
            const parts = [];
            for (let i = 0; i < text.length; i++) {
                parts.push(makeSymbol(text[i], fontName, mode, options,
                                      classes.concat(fontClasses)));
            }
            return makeFragment(parts);
        }
    }

    // Makes a symbol in the default font for mathords and textords.
    if (type === "mathord") {
        return makeSymbol(text, "Math-Italic", mode, options,
            classes.concat(["mathnormal"]));
    } else if (type === "textord") {
        const font = symbols[mode][text] && symbols[mode][text].font;
        if (font === "ams") {
            const fontName = retrieveTextFontName("amsrm", options.fontWeight,
                  options.fontShape);
            return makeSymbol(
                text, fontName, mode, options,
                classes.concat("amsrm", options.fontWeight, options.fontShape));
        } else if (font === "main" || !font) {
            const fontName = retrieveTextFontName("textrm", options.fontWeight,
                  options.fontShape);
            return makeSymbol(
                text, fontName, mode, options,
                classes.concat(options.fontWeight, options.fontShape));
        } else { // fonts added by plugins
            const fontName = retrieveTextFontName(font, options.fontWeight,
                  options.fontShape);
            // We add font name as a css class
            return makeSymbol(
                text, fontName, mode, options,
                classes.concat(fontName, options.fontWeight, options.fontShape));
        }
    } else {
        throw new Error("unexpected type: " + type + " in makeOrd");
    }
};

/**
 * Returns true if subsequent symbolNodes have the same classes, skew, maxFont,
 * and styles. For mathnormal text, the left node must also have zero italic
 * correction so we don't lose spacing between combined glyphs.
 */
const canCombine = (prev: SymbolNode, next: SymbolNode) => {
    if (createClass(prev.classes) !== createClass(next.classes)
        || prev.skew !== next.skew
        || prev.maxFontSize !== next.maxFontSize
        || (prev.italic !== 0 && prev.hasClass("mathnormal"))) {
        return false;
    }

    // If prev and next both are just "mbin"s or "mord"s we don't combine them
    // so that the proper spacing can be preserved.
    if (prev.classes.length === 1) {
        const cls = prev.classes[0];
        if (cls === "mbin" || cls === "mord") {
            return false;
        }
    }

    for (const key of Object.keys(prev.style) as Array<keyof CssStyle>) {
        if (prev.style[key] !== next.style[key]) {
            return false;
        }
    }

    for (const key of Object.keys(next.style) as Array<keyof CssStyle>) {
        if (prev.style[key] !== next.style[key]) {
            return false;
        }
    }

    return true;
};

/**
 * Combine consecutive domTree.symbolNodes into a single symbolNode.
 * Note: this function mutates the argument.
 */
export const tryCombineChars = (chars: HtmlDomNode[]): HtmlDomNode[] => {
    for (let i = 0; i < chars.length - 1; i++) {
        const prev = chars[i];
        const next = chars[i + 1];
        if (prev instanceof SymbolNode
            && next instanceof SymbolNode
            && canCombine(prev, next)) {

            prev.text += next.text;
            prev.height = Math.max(prev.height, next.height);
            prev.depth = Math.max(prev.depth, next.depth);
            // Use the last character's italic correction since we use
            // it to add padding to the right of the span created from
            // the combined characters.
            prev.italic = next.italic;
            chars.splice(i + 1, 1);
            i--;
        }
    }
    return chars;
};

/**
 * Calculate the height, depth, and maxFontSize of an element based on its
 * children.
 */
const sizeElementFromChildren = function(
    elem: DomSpan | Anchor | HtmlDocumentFragment,
) {
    let height = 0;
    let depth = 0;
    let maxFontSize = 0;

    for (let i = 0; i < elem.children.length; i++) {
        const child = elem.children[i];
        if (child.height > height) {
            height = child.height;
        }
        if (child.depth > depth) {
            depth = child.depth;
        }
        if (child.maxFontSize > maxFontSize) {
            maxFontSize = child.maxFontSize;
        }
    }

    elem.height = height;
    elem.depth = depth;
    elem.maxFontSize = maxFontSize;
};

/**
 * Makes a span with the given list of classes, list of children, and options.
 *
 * TODO(#953): Ensure that `options` is always provided (currently some call
 * sites don't pass it) and make the type below mandatory.
 * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
 * should if present come first in `classes`.
 */
export const makeSpan = function(
    classes?: string[],
    children?: HtmlDomNode[],
    options?: Options,
    style?: CssStyle,
): DomSpan {
    const span = new Span(classes, children, options, style);

    sizeElementFromChildren(span);

    return span;
};

// SVG one is simpler -- doesn't require height, depth, max-font setting.
// This is also a separate method for typesafety.
export const makeSvgSpan = (
    classes?: string[],
    children?: SvgNode[],
    options?: Options,
    style?: CssStyle,
): SvgSpan => new Span(classes, children, options, style);

export const makeLineSpan = function(
    className: string,
    options: Options,
    thickness?: number,
): DomSpan {
    const line = makeSpan([className], [], options);
    line.height = Math.max(
        thickness || options.fontMetrics().defaultRuleThickness,
        options.minRuleThickness,
    );
    line.style.borderBottomWidth = makeEm(line.height);
    line.maxFontSize = 1.0;
    return line;
};

/**
 * Makes an anchor with the given href, list of classes, list of children,
 * and options.
 */
export const makeAnchor = function(
    href: string,
    classes: string[],
    children: HtmlDomNode[],
    options: Options,
): Anchor {
    const anchor = new Anchor(href, classes, children, options);

    sizeElementFromChildren(anchor);

    return anchor;
};

/**
 * Makes a document fragment with the given list of children.
 */
export const makeFragment = function(
    children: HtmlDomNode[],
): HtmlDocumentFragment {
    const fragment = new DocumentFragment(children);

    sizeElementFromChildren(fragment);

    return fragment;
};

/**
 * Wraps group in a span if it's a document fragment, allowing to apply classes
 * and styles
 */
export const wrapFragment = function(
    group: HtmlDomNode,
    options: Options,
): HtmlDomNode {
    if (group instanceof DocumentFragment) {
        return makeSpan([], [group], options);
    }
    return group;
};

export type VListElem = {
    type: "elem";
    elem: HtmlDomNode;
    marginLeft?: string | null | undefined;
    marginRight?: string;
    wrapperClasses?: string[];
    wrapperStyle?: CssStyle;
};
type VListElemAndShift = {
    type: "elem";
    elem: HtmlDomNode;
    shift: number;
    marginLeft?: string | null | undefined;
    marginRight?: string;
    wrapperClasses?: string[];
    wrapperStyle?: CssStyle;
};
type VListKern = {
    type: "kern";
    size: number;
};

// A list of child or kern nodes to be stacked on top of each other (i.e. the
// first element will be at the bottom, and the last at the top).
type VListChild = VListElem | VListKern;
type VListParam = {
    // Each child contains how much it should be shifted downward.
    positionType: "individualShift";
    children: VListElemAndShift[];
} | {
    // "top": The positionData specifies the topmost point of the vlist (note this
    //        is expected to be a height, so positive values move up).
    // "bottom": The positionData specifies the bottommost point of the vlist (note
    //           this is expected to be a depth, so positive values move down).
    // "shift": The vlist will be positioned such that its baseline is positionData
    //          away from the baseline of the first child which MUST be an
    //          "elem". Positive values move downwards.
    positionType: "top" | "bottom" | "shift";
    positionData: number;
    children: VListChild[];
} | {
    // The vlist is positioned so that its baseline is aligned with the baseline
    // of the first child which MUST be an "elem". This is equivalent to "shift"
    // with positionData=0.
    positionType: "firstBaseline";
    children: VListChild[];
};

// Computes the updated `children` list and the overall depth.
//
// This helper function for makeVList makes it easier to enforce type safety by
// allowing early exits (returns) in the logic.
const getVListChildrenAndDepth = function(params: VListParam): {
    children: (VListChild | VListElemAndShift)[] | VListChild[];
    depth: number;
} {
    if (params.positionType === "individualShift") {
        const oldChildren = params.children;
        const children: (VListChild | VListElemAndShift)[] = [oldChildren[0]];

        // Add in kerns to the list of params.children to get each element to be
        // shifted to the correct specified shift
        const depth = -oldChildren[0].shift - oldChildren[0].elem.depth;
        let currPos = depth;
        for (let i = 1; i < oldChildren.length; i++) {
            const diff = -oldChildren[i].shift - currPos -
                oldChildren[i].elem.depth;
            const size = diff -
                (oldChildren[i - 1].elem.height +
                 oldChildren[i - 1].elem.depth);

            currPos = currPos + diff;
            children.push({type: "kern", size});
            children.push(oldChildren[i]);
        }

        return {children, depth};
    }

    let depth;
    if (params.positionType === "top") {
        // We always start at the bottom, so calculate the bottom by adding up
        // all the sizes
        let bottom = params.positionData;
        for (let i = 0; i < params.children.length; i++) {
            const child = params.children[i];
            bottom -= child.type === "kern"
                ? child.size
                : child.elem.height + child.elem.depth;
        }
        depth = bottom;
    } else if (params.positionType === "bottom") {
        depth = -params.positionData;
    } else {
        const firstChild = params.children[0];
        if (firstChild.type !== "elem") {
            throw new Error('First child must have type "elem".');
        }
        if (params.positionType === "shift") {
            depth = -firstChild.elem.depth - params.positionData;
        } else if (params.positionType === "firstBaseline") {
            depth = -firstChild.elem.depth;
        } else {
            throw new Error(`Invalid positionType ${params.positionType}.`);
        }
    }

    return {children: params.children, depth};
};

/**
 * Makes a vertical list by stacking elements and kerns on top of each other.
 * Allows for many different ways of specifying the positioning method.
 *
 * See VListParam documentation above.
 */
export const makeVList = function(params: VListParam, options: Options): DomSpan {
    const {children, depth} = getVListChildrenAndDepth(params);

    // Create a strut that is taller than any list item. The strut is added to
    // each item, where it will determine the item's baseline. Since it has
    // `overflow:hidden`, the strut's top edge will sit on the item's line box's
    // top edge and the strut's bottom edge will sit on the item's baseline,
    // with no additional line-height spacing. This allows the item baseline to
    // be positioned precisely without worrying about font ascent and
    // line-height.
    let pstrutSize = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type === "elem") {
            const elem = child.elem;
            pstrutSize = Math.max(pstrutSize, elem.maxFontSize, elem.height);
        }
    }
    pstrutSize += 2;
    const pstrut = makeSpan(["pstrut"], []);
    pstrut.style.height = makeEm(pstrutSize);

    // Create a new list of actual children at the correct offsets
    const realChildren = [];
    let minPos = depth;
    let maxPos = depth;
    let currPos = depth;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type === "kern") {
            currPos += child.size;
        } else {
            const elem = child.elem;
            const classes = child.wrapperClasses || [];
            const style = child.wrapperStyle || {};

            const childWrap = makeSpan(classes, [pstrut, elem], undefined, style);
            childWrap.style.top = makeEm(-pstrutSize - currPos - elem.depth);
            if (child.marginLeft) {
                childWrap.style.marginLeft = child.marginLeft;
            }
            if (child.marginRight) {
                childWrap.style.marginRight = child.marginRight;
            }

            realChildren.push(childWrap);
            currPos += elem.height + elem.depth;
        }
        minPos = Math.min(minPos, currPos);
        maxPos = Math.max(maxPos, currPos);
    }

    // The vlist contents go in a table-cell with `vertical-align:bottom`.
    // This cell's bottom edge will determine the containing table's baseline
    // without overly expanding the containing line-box.
    const vlist = makeSpan(["vlist"], realChildren);
    vlist.style.height = makeEm(maxPos);

    // A second row is used if necessary to represent the vlist's depth.
    let rows;
    if (minPos < 0) {
        // We will define depth in an empty span with display: table-cell.
        // It should render with the height that we define. But Chrome, in
        // contenteditable mode only, treats that span as if it contains some
        // text content. And that min-height over-rides our desired height.
        // So we put another empty span inside the depth strut span.
        const emptySpan = makeSpan([], []);
        const depthStrut = makeSpan(["vlist"], [emptySpan]);
        depthStrut.style.height = makeEm(-minPos);

        // Safari wants the first row to have inline content; otherwise it
        // puts the bottom of the *second* row on the baseline.
        const topStrut = makeSpan(["vlist-s"], [new SymbolNode("\u200b")]);

        rows = [makeSpan(["vlist-r"], [vlist, topStrut]),
            makeSpan(["vlist-r"], [depthStrut])];
    } else {
        rows = [makeSpan(["vlist-r"], [vlist])];
    }

    const vtable = makeSpan(["vlist-t"], rows);
    if (rows.length === 2) {
        vtable.classes.push("vlist-t2");
    }
    vtable.height = maxPos;
    vtable.depth = -minPos;
    return vtable;
};

// Glue is a concept from TeX which is a flexible space between elements in
// either a vertical or horizontal list. In KaTeX, at least for now, it's
// static space between elements in a horizontal layout.
export const makeGlue = (measurement: Measurement, options: Options): DomSpan => {
    // Make an empty span for the space
    const rule = makeSpan(["mspace"], [], options);
    const size = calculateSize(measurement, options);
    rule.style.marginRight = makeEm(size);
    return rule;
};

// Takes font options, and returns the appropriate fontLookup name
const retrieveTextFontName = function(
    fontFamily: string,
    fontWeight: string,
    fontShape: string,
): string {
    let baseFontName = "";
    switch (fontFamily) {
        case "amsrm":
            baseFontName = "AMS";
            break;
        case "textrm":
            baseFontName = "Main";
            break;
        case "textsf":
            baseFontName = "SansSerif";
            break;
        case "texttt":
            baseFontName = "Typewriter";
            break;
        default:
            baseFontName = fontFamily; // use fonts added by a plugin
    }

    let fontStylesName;
    if (fontWeight === "textbf" && fontShape === "textit") {
        fontStylesName = "BoldItalic";
    } else if (fontWeight === "textbf") {
        fontStylesName = "Bold";
    } else if (fontWeight === "textit") {
        fontStylesName = "Italic";
    } else {
        fontStylesName = "Regular";
    }

    return `${baseFontName}-${fontStylesName}`;
};

/**
 * Maps TeX font commands to objects containing:
 * - variant: string used for "mathvariant" attribute in buildMathML.js
 * - fontName: the "style" parameter to fontMetrics.getCharacterMetrics
 */
// A map between tex font commands an MathML mathvariant attribute values
export const fontMap: Record<string, {
    variant: FontVariant;
    fontName: string;
}> = {
    // styles
    "mathbf": {
        variant: "bold",
        fontName: "Main-Bold",
    },
    "mathrm": {
        variant: "normal",
        fontName: "Main-Regular",
    },
    "textit": {
        variant: "italic",
        fontName: "Main-Italic",
    },
    "mathit": {
        variant: "italic",
        fontName: "Main-Italic",
    },
    "mathnormal": {
        variant: "italic",
        fontName: "Math-Italic",
    },
    "mathsfit": {
        variant: "sans-serif-italic",
        fontName: "SansSerif-Italic",
    },
    // "boldsymbol" is missing because they require the use of multiple fonts:
    // Math-BoldItalic and Main-Bold.  This is handled by a special case in
    // makeOrd which ends up calling boldsymbol.

    // families
    "mathbb": {
        variant: "double-struck",
        fontName: "AMS-Regular",
    },
    "mathcal": {
        variant: "script",
        fontName: "Caligraphic-Regular",
    },
    "mathfrak": {
        variant: "fraktur",
        fontName: "Fraktur-Regular",
    },
    "mathscr": {
        variant: "script",
        fontName: "Script-Regular",
    },
    "mathsf": {
        variant: "sans-serif",
        fontName: "SansSerif-Regular",
    },
    "mathtt": {
        variant: "monospace",
        fontName: "Typewriter-Regular",
    },
};

export const svgData: Record<string, [string, number, number]> = {
    //   path, width, height
    vec: ["vec", 0.471, 0.714],                // values from the font glyph
    oiintSize1: ["oiintSize1", 0.957, 0.499],  // oval to overlay the integrand
    oiintSize2: ["oiintSize2", 1.472, 0.659],
    oiiintSize1: ["oiiintSize1", 1.304, 0.499],
    oiiintSize2: ["oiiintSize2", 1.98, 0.659],
};

export const staticSvg = function(value: string, options: Options): SvgSpan {
    // Create a span with inline SVG for the element.
    const [pathName, width, height] = svgData[value];
    const path = new PathNode(pathName);
    const svgNode = new SvgNode([path], {
        "width": makeEm(width),
        "height": makeEm(height),
        // Override CSS rule `.katex svg { width: 100% }`
        "style": "width:" + makeEm(width),
        "viewBox": "0 0 " + 1000 * width + " " + 1000 * height,
        "preserveAspectRatio": "xMinYMin",
    });
    const span = makeSvgSpan(["overlay"], [svgNode], options);
    span.height = height;
    span.style.height = makeEm(height);
    span.style.width = makeEm(width);
    return span;
};

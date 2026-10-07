/**
 * This file deals with creating delimiters of various sizes. The TeXbook
 * discusses these routines on page 441-442, in the "Another subroutine sets box
 * x to a specified variable delimiter" paragraph.
 *
 * There are three main routines here. `makeSmallDelim` makes a delimiter in the
 * normal font, but in either text, script, or scriptscript style.
 * `makeLargeDelim` makes a delimiter in textstyle, but in one of the Size1,
 * Size2, Size3, or Size4 fonts. `makeStackedDelim` makes a delimiter out of
 * smaller pieces that are stacked on top of one another.
 *
 * The functions take a parameter `center`, which determines if the delimiter
 * should be centered around the axis.
 *
 * Then, there are three exposed functions. `sizedDelim` makes a delimiter in
 * one of the given sizes. This is used for things like `\bigl`.
 * `customSizedDelim` makes a delimiter with a given total height+depth. It is
 * called in places like `\sqrt`. `leftRightDelim` makes an appropriate
 * delimiter which surrounds an expression of a given height an depth. It is
 * used in `\left` and `\right`.
 */

import ParseError from "./ParseError";
import Style from "./Style";

import {PathNode, SvgNode, SymbolNode} from "./domTree";
import {sqrtPath, innerPath, tallDelim} from "./svgGeometry";
import {makeSpan, makeSymbol, makeSvgSpan, makeVList} from "./buildCommon";
import {getCharacterMetrics} from "./fontMetrics";
import symbols from "./symbols";
import {makeEm} from "./units";
import fontMetricsData from "./fontMetricsData";

import type Options from "./Options";
import type {CharacterMetrics} from "./fontMetrics";
import type {HtmlDomNode, DomSpan, SvgSpan} from "./domTree";
import type {Mode} from "./types";
import type {StyleInterface} from "./Style";
import type {VListElem} from "./buildCommon";

type StackedDelimiterFont = "Size1-Regular" | "Size4-Regular";

/**
 * Get the metrics for a given symbol and font, after transformation (i.e.
 * after following replacement from symbols.js)
 */
const getMetrics = function(
    symbol: string,
    font: string,
    mode: Mode,
): CharacterMetrics {
    const replace = symbols.math[symbol] && symbols.math[symbol].replace;
    const metrics =
        getCharacterMetrics(replace || symbol, font, mode);
    if (!metrics) {
        throw new Error(`Unsupported symbol ${symbol} and font size ${font}.`);
    }
    return metrics;
};

/**
 * Puts a delimiter span in a given style, and adds appropriate height, depth,
 * and maxFontSizes.
 */
const styleWrap = function(
    delim: HtmlDomNode,
    toStyle: StyleInterface,
    options: Options,
    classes: string[],
): DomSpan {
    const newOptions = options.havingBaseStyle(toStyle);

    const span = makeSpan(
        classes.concat(newOptions.sizingClasses(options)),
        [delim], options);

    const delimSizeMultiplier =
        newOptions.sizeMultiplier / options.sizeMultiplier;
    span.height *= delimSizeMultiplier;
    span.depth *= delimSizeMultiplier;
    span.maxFontSize = newOptions.sizeMultiplier;

    return span;
};

const centerSpan = function(
    span: DomSpan,
    options: Options,
    style: StyleInterface,
) {
    const newOptions = options.havingBaseStyle(style);
    const shift =
        (1 - options.sizeMultiplier / newOptions.sizeMultiplier) *
        options.fontMetrics().axisHeight;

    span.classes.push("delimcenter");
    span.style.top = makeEm(shift);
    span.height -= shift;
    span.depth += shift;
};

/**
 * Makes a small delimiter. This is a delimiter that comes in the Main-Regular
 * font, but is restyled to either be in textstyle, scriptstyle, or
 * scriptscriptstyle.
 */
const makeSmallDelim = function(
    delim: string,
    style: StyleInterface,
    center: boolean,
    options: Options,
    mode: Mode,
    classes: string[],
): DomSpan {
    const text = makeSymbol(delim, "Main-Regular", mode, options);
    const span = styleWrap(text, style, options, classes);
    if (center) {
        centerSpan(span, options, style);
    }
    return span;
};

/**
 * Builds a symbol in the given font size (note size is an integer)
 */
const mathrmSize = function(
    value: string,
    size: number,
    mode: Mode,
    options: Options,
): SymbolNode {
    return makeSymbol(value, "Size" + size + "-Regular",
        mode, options);
};

/**
 * Makes a large delimiter. This is a delimiter that comes in the Size1, Size2,
 * Size3, or Size4 fonts. It is always rendered in textstyle.
 */
const makeLargeDelim = function(delim: string,
    size: number,
    center: boolean,
    options: Options,
    mode: Mode,
    classes: string[],
): DomSpan {
    const inner = mathrmSize(delim, size, mode, options);
    const span = styleWrap(
        makeSpan(["delimsizing", "size" + size], [inner], options),
        Style.TEXT, options, classes);
    if (center) {
        centerSpan(span, options, Style.TEXT);
    }
    return span;
};

/**
 * Make a span from a font glyph with the given offset and in the given font.
 * This is used in makeStackedDelim to make the stacking pieces for the delimiter.
 */
const makeGlyphSpan = function(
    symbol: string,
    font: StackedDelimiterFont,
    mode: Mode,
): VListElem {
    let sizeClass;
    // Apply the correct CSS class to choose the right font.
    if (font === "Size1-Regular") {
        sizeClass = "delim-size1";
    } else /* if (font === "Size4-Regular") */ {
        sizeClass = "delim-size4";
    }

    const corner = makeSpan(
        ["delimsizinginner", sizeClass],
        [makeSpan([], [makeSymbol(symbol, font, mode)])]);

    // Since this will be passed into `makeVList` in the end, wrap the element
    // in the appropriate tag that VList uses.
    return {type: "elem", elem: corner};
};

const makeInner = function(
    ch: string,
    height: number,
    options: Options
): VListElem {
    // Create a span with inline SVG for the inner part of a tall stacked delimiter.
    const width = fontMetricsData['Size4-Regular'][ch.charCodeAt(0)]
        ? fontMetricsData['Size4-Regular'][ch.charCodeAt(0)][4]
        : fontMetricsData['Size1-Regular'][ch.charCodeAt(0)][4];
    const path = new PathNode("inner", innerPath(ch,  Math.round(1000 * height)));
    const svgNode = new SvgNode([path], {
        "width": makeEm(width),
        "height": makeEm(height),
        // Override CSS rule `.katex svg { width: 100% }`
        "style": "width:" + makeEm(width),
        "viewBox": "0 0 " + 1000 * width + " " + Math.round(1000 * height),
        "preserveAspectRatio": "xMinYMin",
    });
    const span = makeSvgSpan([], [svgNode], options);
    span.height = height;
    span.style.height = makeEm(height);
    span.style.width = makeEm(width);
    return {type: "elem", elem: span};
};

// Helpers for makeStackedDelim
const lapInEms = 0.008;
const lap: {type: "kern"; size: number} = {type: "kern", size: -1 * lapInEms};
const verts = new Set(["|", "\\lvert", "\\rvert", "\\vert"]);
const doubleVerts = new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]);

/**
 * Make a stacked delimiter out of a given delimiter, with the total height at
 * least `heightTotal`. This routine is mentioned on page 442 of the TeXbook.
 */
const makeStackedDelim = function(
    delim: string,
    heightTotal: number,
    center: boolean,
    options: Options,
    mode: Mode,
    classes: string[],
): DomSpan {
    // There are four parts, the top, an optional middle, a repeated part, and a
    // bottom.
    let top;
    let middle;
    let repeat;
    let bottom;
    let svgLabel = "";
    let viewBoxWidth = 0;
    top = repeat = bottom = delim;
    middle = null;
    // Also keep track of what font the delimiters are in
    let font: StackedDelimiterFont = "Size1-Regular";

    // We set the parts and font based on the symbol. Note that we use
    // '\u23d0' instead of '|' and '\u2016' instead of '\\|' for the
    // repeats of the arrows
    if (delim === "\\uparrow") {
        repeat = bottom = "\u23d0";
    } else if (delim === "\\Uparrow") {
        repeat = bottom = "\u2016";
    } else if (delim === "\\downarrow") {
        top = repeat = "\u23d0";
    } else if (delim === "\\Downarrow") {
        top = repeat = "\u2016";
    } else if (delim === "\\updownarrow") {
        top = "\\uparrow";
        repeat = "\u23d0";
        bottom = "\\downarrow";
    } else if (delim === "\\Updownarrow") {
        top = "\\Uparrow";
        repeat = "\u2016";
        bottom = "\\Downarrow";
    } else if (verts.has(delim)) {
        repeat = "\u2223";
        svgLabel = "vert";
        viewBoxWidth = 333;
    } else if (doubleVerts.has(delim)) {
        repeat = "\u2225";
        svgLabel = "doublevert";
        viewBoxWidth = 556;
    } else if (delim === "[" || delim === "\\lbrack") {
        top = "\u23a1";
        repeat = "\u23a2";
        bottom = "\u23a3";
        font = "Size4-Regular";
        svgLabel = "lbrack";
        viewBoxWidth = 667;
    } else if (delim === "]" || delim === "\\rbrack") {
        top = "\u23a4";
        repeat = "\u23a5";
        bottom = "\u23a6";
        font = "Size4-Regular";
        svgLabel = "rbrack";
        viewBoxWidth = 667;
    } else if (delim === "\\lfloor" || delim === "\u230a") {
        repeat = top = "\u23a2";
        bottom = "\u23a3";
        font = "Size4-Regular";
        svgLabel = "lfloor";
        viewBoxWidth = 667;
    } else if (delim === "\\lceil" || delim === "\u2308") {
        top = "\u23a1";
        repeat = bottom = "\u23a2";
        font = "Size4-Regular";
        svgLabel = "lceil";
        viewBoxWidth = 667;
    } else if (delim === "\\rfloor" || delim === "\u230b") {
        repeat = top = "\u23a5";
        bottom = "\u23a6";
        font = "Size4-Regular";
        svgLabel = "rfloor";
        viewBoxWidth = 667;
    } else if (delim === "\\rceil" || delim === "\u2309") {
        top = "\u23a4";
        repeat = bottom = "\u23a5";
        font = "Size4-Regular";
        svgLabel = "rceil";
        viewBoxWidth = 667;
    } else if (delim === "(" || delim === "\\lparen") {
        top = "\u239b";
        repeat = "\u239c";
        bottom = "\u239d";
        font = "Size4-Regular";
        svgLabel = "lparen";
        viewBoxWidth = 875;
    } else if (delim === ")" || delim === "\\rparen") {
        top = "\u239e";
        repeat = "\u239f";
        bottom = "\u23a0";
        font = "Size4-Regular";
        svgLabel = "rparen";
        viewBoxWidth = 875;
    } else if (delim === "\\{" || delim === "\\lbrace") {
        top = "\u23a7";
        middle = "\u23a8";
        bottom = "\u23a9";
        repeat = "\u23aa";
        font = "Size4-Regular";
    } else if (delim === "\\}" || delim === "\\rbrace") {
        top = "\u23ab";
        middle = "\u23ac";
        bottom = "\u23ad";
        repeat = "\u23aa";
        font = "Size4-Regular";
    } else if (delim === "\\lgroup" || delim === "\u27ee") {
        top = "\u23a7";
        bottom = "\u23a9";
        repeat = "\u23aa";
        font = "Size4-Regular";
    } else if (delim === "\\rgroup" || delim === "\u27ef") {
        top = "\u23ab";
        bottom = "\u23ad";
        repeat = "\u23aa";
        font = "Size4-Regular";
    } else if (delim === "\\lmoustache" || delim === "\u23b0") {
        top = "\u23a7";
        bottom = "\u23ad";
        repeat = "\u23aa";
        font = "Size4-Regular";
    } else if (delim === "\\rmoustache" || delim === "\u23b1") {
        top = "\u23ab";
        bottom = "\u23a9";
        repeat = "\u23aa";
        font = "Size4-Regular";
    }

    // Get the metrics of the four sections
    const topMetrics = getMetrics(top, font, mode);
    const topHeightTotal = topMetrics.height + topMetrics.depth;
    const repeatMetrics = getMetrics(repeat, font, mode);
    const repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
    const bottomMetrics = getMetrics(bottom, font, mode);
    const bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
    let middleHeightTotal = 0;
    let middleFactor = 1;
    if (middle !== null) {
        const middleMetrics = getMetrics(middle, font, mode);
        middleHeightTotal = middleMetrics.height + middleMetrics.depth;
        middleFactor = 2; // repeat symmetrically above and below middle
    }

    // Calculate the minimal height that the delimiter can have.
    // It is at least the size of the top, bottom, and optional middle combined.
    const minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal;

    // Compute the number of copies of the repeat symbol we will need
    const repeatCount = Math.max(0, Math.ceil(
        (heightTotal - minHeight) / (middleFactor * repeatHeightTotal)));

    // Compute the total height of the delimiter including all the symbols
    const realHeightTotal =
        minHeight + repeatCount * middleFactor * repeatHeightTotal;

    // The center of the delimiter is placed at the center of the axis. Note
    // that in this context, "center" means that the delimiter should be
    // centered around the axis in the current style, while normally it is
    // centered around the axis in textstyle.
    let axisHeight = options.fontMetrics().axisHeight;
    if (center) {
        axisHeight *= options.sizeMultiplier;
    }
    // Calculate the depth
    const depth = realHeightTotal / 2 - axisHeight;

    // Now, we start building the pieces that will go into the vlist
    // Keep a list of the pieces of the stacked delimiter
    const stack: Array<VListElem | {type: "kern"; size: number}> = [];

    if (svgLabel.length > 0) {
        // Instead of stacking glyphs, create a single SVG.
        // This evades browser problems with imprecise positioning of spans.
        const midHeight = realHeightTotal - topHeightTotal - bottomHeightTotal;
        const viewBoxHeight = Math.round(realHeightTotal  * 1000);
        const pathStr = tallDelim(svgLabel, Math.round(midHeight * 1000));
        const path = new PathNode(svgLabel, pathStr);
        const width = makeEm(viewBoxWidth / 1000);
        const height = makeEm(viewBoxHeight / 1000);
        const svg = new SvgNode([path], {
            "width": width,
            "height": height,
            "viewBox": `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        });
        const wrapper = makeSvgSpan([], [svg], options);
        wrapper.height = viewBoxHeight / 1000;
        wrapper.style.width = width;
        wrapper.style.height = height;
        stack.push({type: "elem", elem: wrapper});
    } else {
        // Stack glyphs
        // Start by adding the bottom symbol
        stack.push(makeGlyphSpan(bottom, font, mode));
        stack.push(lap); // overlap

        if (middle === null) {
            // The middle section will be an SVG. Make it an extra 0.016em tall.
            // We'll overlap by 0.008em at top and bottom.
            const innerHeight = realHeightTotal - topHeightTotal - bottomHeightTotal
                + 2 * lapInEms;
            stack.push(makeInner(repeat, innerHeight, options));
        } else {
            // When there is a middle bit, we need the middle part and two repeated
            // sections
            const innerHeight = (realHeightTotal - topHeightTotal -
                bottomHeightTotal - middleHeightTotal) / 2 + 2 * lapInEms;
            stack.push(makeInner(repeat, innerHeight, options));
            // Now insert the middle of the brace.
            stack.push(lap);
            stack.push(makeGlyphSpan(middle, font, mode));
            stack.push(lap);
            stack.push(makeInner(repeat, innerHeight, options));
        }

        // Add the top symbol
        stack.push(lap);
        stack.push(makeGlyphSpan(top, font, mode));
    }

    // Finally, build the vlist
    const newOptions = options.havingBaseStyle(Style.TEXT);
    const inner = makeVList({
        positionType: "bottom",
        positionData: depth,
        children: stack,
    }, newOptions);

    return styleWrap(
        makeSpan(["delimsizing", "mult"], [inner], newOptions),
        Style.TEXT, options, classes);
};

// All surds have 0.08em padding above the vinculum inside the SVG.
// That keeps browser span height rounding error from pinching the line.
const vbPad = 80;   // padding above the surd, measured inside the viewBox.
const emPad = 0.08; // padding, in ems, measured in the document.

const sqrtSvg = function(
    sqrtName: string,
    height: number,
    viewBoxHeight: number,
    extraVinculum: number,
    options: Options,
): SvgSpan {
    const path = sqrtPath(sqrtName, extraVinculum, viewBoxHeight);
    const pathNode = new PathNode(sqrtName, path);

    const svg =  new SvgNode([pathNode], {
        // Note: 1000:1 ratio of viewBox to document em width.
        "width": "400em",
        "height": makeEm(height),
        "viewBox": "0 0 400000 " + viewBoxHeight,
        "preserveAspectRatio": "xMinYMin slice",
    });

    return makeSvgSpan(["hide-tail"], [svg], options);
};

/**
 * Make a sqrt image of the given height,
 */
export const makeSqrtImage = function(
    height: number,
    options: Options,
): {
    span: SvgSpan,
    ruleWidth: number,
    advanceWidth: number,
} {
    // Define a newOptions that removes the effect of size changes such as \Huge.
    // We don't pick different a height surd for \Huge. For it, we scale up.
    const newOptions = options.havingBaseSizing();

    // Pick the desired surd glyph from a sequence of surds.
    const delim = traverseSequence("\\surd", height * newOptions.sizeMultiplier,
        stackLargeDelimiterSequence, newOptions);

    let sizeMultiplier = newOptions.sizeMultiplier;  // default

    // The standard sqrt SVGs each have a 0.04em thick vinculum.
    // If Settings.minRuleThickness is larger than that, we add extraVinculum.
    const extraVinculum = Math.max(0,
        options.minRuleThickness - options.fontMetrics().sqrtRuleThickness);

    // Create a span containing an SVG image of a sqrt symbol.
    let span;
    let spanHeight = 0;
    let texHeight = 0;
    let viewBoxHeight = 0;
    let advanceWidth;

    // We create viewBoxes with 80 units of "padding" above each surd.
    // Then browser rounding error on the parent span height will not
    // encroach on the ink of the vinculum. But that padding is not
    // included in the TeX-like `height` used for calculation of
    // vertical alignment. So texHeight = span.height < span.style.height.

    if (delim.type === "small") {
        // Get an SVG that is derived from glyph U+221A in font KaTeX-Main.
        // 1000 unit normal glyph height.
        viewBoxHeight = 1000 + 1000 * extraVinculum + vbPad;
        if (height < 1.0) {
            sizeMultiplier = 1.0;   // mimic a \textfont radical
        } else if (height < 1.4) {
            sizeMultiplier = 0.7;   // mimic a \scriptfont radical
        }
        spanHeight = (1.0 + extraVinculum + emPad) / sizeMultiplier;
        texHeight = (1.00 + extraVinculum) / sizeMultiplier;
        span = sqrtSvg("sqrtMain", spanHeight, viewBoxHeight, extraVinculum,
            options);
        span.style.minWidth = "0.853em";
        advanceWidth = 0.833 / sizeMultiplier;  // from the font.

    } else if (delim.type === "large") {
        // These SVGs come from fonts: KaTeX_Size1, _Size2, etc.
        viewBoxHeight = (1000 + vbPad) * sizeToMaxHeight[delim.size];
        texHeight = (sizeToMaxHeight[delim.size] + extraVinculum) / sizeMultiplier;
        spanHeight = (sizeToMaxHeight[delim.size] + extraVinculum + emPad)
            / sizeMultiplier;
        span = sqrtSvg("sqrtSize" + delim.size, spanHeight, viewBoxHeight,
            extraVinculum, options);
        span.style.minWidth = "1.02em";
        advanceWidth = 1.0 / sizeMultiplier; // 1.0 from the font.

    } else {
        // Tall sqrt. In TeX, this would be stacked using multiple glyphs.
        // We'll use a single SVG to accomplish the same thing.
        spanHeight = height + extraVinculum + emPad;
        texHeight = height + extraVinculum;
        viewBoxHeight = Math.floor(1000 * height + extraVinculum) + vbPad;
        span = sqrtSvg("sqrtTall", spanHeight, viewBoxHeight, extraVinculum,
            options);
        span.style.minWidth = "0.742em";
        advanceWidth = 1.056;
    }

    span.height = texHeight;
    span.style.height = makeEm(spanHeight);

    return {
        span,
        advanceWidth,
        // Calculate the actual line width.
        // This actually should depend on the chosen font -- e.g. \boldmath
        // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
        // have thicker rules.
        ruleWidth: (options.fontMetrics().sqrtRuleThickness + extraVinculum)
            * sizeMultiplier,
    };
};

// There are three kinds of delimiters, delimiters that stack when they become
// too large
const stackLargeDelimiters = new Set([
    "(", "\\lparen", ")", "\\rparen",
    "[", "\\lbrack", "]", "\\rbrack",
    "\\{", "\\lbrace", "\\}", "\\rbrace",
    "\\lfloor", "\\rfloor", "\u230a", "\u230b",
    "\\lceil", "\\rceil", "\u2308", "\u2309",
    "\\surd",
]);

// delimiters that always stack
const stackAlwaysDelimiters = new Set([
    "\\uparrow", "\\downarrow", "\\updownarrow",
    "\\Uparrow", "\\Downarrow", "\\Updownarrow",
    "|", "\\|", "\\vert", "\\Vert",
    "\\lvert", "\\rvert", "\\lVert", "\\rVert",
    "\\lgroup", "\\rgroup", "\u27ee", "\u27ef",
    "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1",
]);

// and delimiters that never stack
const stackNeverDelimiters = new Set([
    "<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt",
]);

// Metrics of the different sizes. Found by looking at TeX's output of
// $\bigl| // \Bigl| \biggl| \Biggl| \showlists$
// Used to create stacked delimiters of appropriate sizes in makeSizedDelim.
export const sizeToMaxHeight = [0, 1.2, 1.8, 2.4, 3.0];

/**
 * Used to create a delimiter of a specific size, where `size` is 1, 2, 3, or 4.
 */
export const makeSizedDelim = function(
    delim: string,
    size: number,
    options: Options,
    mode: Mode,
    classes: string[],
): DomSpan {
    // < and > turn into \langle and \rangle in delimiters
    if (delim === "<" || delim === "\\lt" || delim === "\u27e8") {
        delim = "\\langle";
    } else if (delim === ">" || delim === "\\gt" || delim === "\u27e9") {
        delim = "\\rangle";
    }

    // Sized delimiters are never centered.
    if (stackLargeDelimiters.has(delim) ||
        stackNeverDelimiters.has(delim)) {
        return makeLargeDelim(delim, size, false, options, mode, classes);
    } else if (stackAlwaysDelimiters.has(delim)) {
        return makeStackedDelim(
            delim, sizeToMaxHeight[size], false, options, mode, classes);
    } else {
        throw new ParseError("Illegal delimiter: '" + delim + "'");
    }
};

/**
 * There are three different sequences of delimiter sizes that the delimiters
 * follow depending on the kind of delimiter. This is used when creating custom
 * sized delimiters to decide whether to create a small, large, or stacked
 * delimiter.
 *
 * In real TeX, these sequences aren't explicitly defined, but are instead
 * defined inside the font metrics. Since there are only three sequences that
 * are possible for the delimiters that TeX defines, it is easier to just encode
 * them explicitly here.
 */

type Delimiter =
    {type: "small", style: StyleInterface} |
    {type: "large", size: 1 | 2 | 3 | 4} |
    {type: "stack"};

// Delimiters that never stack try small delimiters and large delimiters only
const stackNeverDelimiterSequence: Delimiter[] = [
    {type: "small", style: Style.SCRIPTSCRIPT},
    {type: "small", style: Style.SCRIPT},
    {type: "small", style: Style.TEXT},
    {type: "large", size: 1},
    {type: "large", size: 2},
    {type: "large", size: 3},
    {type: "large", size: 4},
];

// Delimiters that always stack try the small delimiters first, then stack
const stackAlwaysDelimiterSequence: Delimiter[] = [
    {type: "small", style: Style.SCRIPTSCRIPT},
    {type: "small", style: Style.SCRIPT},
    {type: "small", style: Style.TEXT},
    {type: "stack"},
];

// Delimiters that stack when large try the small and then large delimiters, and
// stack afterwards
const stackLargeDelimiterSequence: Delimiter[] = [
    {type: "small", style: Style.SCRIPTSCRIPT},
    {type: "small", style: Style.SCRIPT},
    {type: "small", style: Style.TEXT},
    {type: "large", size: 1},
    {type: "large", size: 2},
    {type: "large", size: 3},
    {type: "large", size: 4},
    {type: "stack"},
];

/**
 * Get the font used in a delimiter based on what kind of delimiter it is.
 * TODO(#963) Use more specific font family return type once that is introduced.
 */
const delimTypeToFont = function(type: Delimiter): string {
    if (type.type === "small") {
        return "Main-Regular";
    } else if (type.type === "large") {
        return "Size" + type.size + "-Regular";
    } else if (type.type === "stack") {
        return "Size4-Regular";
    } else {
        const delimKind = (type as Delimiter).type;
        throw new Error(`Add support for delim type '${delimKind}' here.`);
    }
};

/**
 * Traverse a sequence of types of delimiters to decide what kind of delimiter
 * should be used to create a delimiter of the given height+depth.
 */
const traverseSequence = function(
    delim: string,
    height: number,
    sequence: Delimiter[],
    options: Options,
): Delimiter {
    // Here, we choose the index we should start at in the sequences. In smaller
    // sizes (which correspond to larger numbers in style.size) we start earlier
    // in the sequence. Thus, scriptscript starts at index 3-3=0, script starts
    // at index 3-2=1, text starts at 3-1=2, and display starts at min(2,3-0)=2
    const start = Math.min(2, 3 - options.style.size);
    for (let i = start; i < sequence.length; i++) {
        const delimType = sequence[i];
        if (delimType.type === "stack") {
            // This is always the last delimiter, so we just break the loop now.
            break;
        }

        const metrics = getMetrics(delim, delimTypeToFont(delimType), "math");
        let heightDepth = metrics.height + metrics.depth;

        // Small delimiters are scaled down versions of the same font, so we
        // account for the style change size.
        if (delimType.type === "small") {
            const newOptions = options.havingBaseStyle(delimType.style);
            heightDepth *= newOptions.sizeMultiplier;
        }

        // Check if the delimiter at this size works for the given height.
        if (heightDepth > height) {
            return delimType;
        }
    }

    // If we reached the end of the sequence, return the last sequence element.
    return sequence[sequence.length - 1];
};

/**
 * Make a delimiter of a given height+depth, with optional centering. Here, we
 * traverse the sequences, and create a delimiter that the sequence tells us to.
 */
export const makeCustomSizedDelim = function(
    delim: string,
    height: number,
    center: boolean,
    options: Options,
    mode: Mode,
    classes: string[],
): DomSpan {
    if (delim === "<" || delim === "\\lt" || delim === "\u27e8") {
        delim = "\\langle";
    } else if (delim === ">" || delim === "\\gt" || delim === "\u27e9") {
        delim = "\\rangle";
    }

    // Decide what sequence to use
    let sequence: Delimiter[];
    if (stackNeverDelimiters.has(delim)) {
        sequence = stackNeverDelimiterSequence;
    } else if (stackLargeDelimiters.has(delim)) {
        sequence = stackLargeDelimiterSequence;
    } else {
        sequence = stackAlwaysDelimiterSequence;
    }

    // Look through the sequence
    const delimType = traverseSequence(delim, height, sequence, options);

    // Get the delimiter from font glyphs.
    // Depending on the sequence element we decided on, call the
    // appropriate function.
    if (delimType.type === "small") {
        return makeSmallDelim(delim, delimType.style, center, options,
                              mode, classes);
    } else if (delimType.type === "large") {
        return makeLargeDelim(delim, delimType.size, center, options, mode,
                              classes);
    } else /* if (delimType.type === "stack") */ {
        return makeStackedDelim(delim, height, center, options, mode,
                                classes);
    }
};

/**
 * Make a delimiter for use with `\left` and `\right`, given a height and depth
 * of an expression that the delimiters surround.
 */
export const makeLeftRightDelim = function(
    delim: string,
    height: number,
    depth: number,
    options: Options,
    mode: Mode,
    classes: string[],
): DomSpan {
    // We always center \left/\right delimiters, so the axis is always shifted
    const axisHeight =
        options.fontMetrics().axisHeight * options.sizeMultiplier;

    // Taken from TeX source, tex.web, function make_left_right
    const delimiterFactor = 901;
    const delimiterExtend = 5.0 / options.fontMetrics().ptPerEm;

    const maxDistFromAxis = Math.max(
        height - axisHeight, depth + axisHeight);

    const totalHeight = Math.max(
        // In real TeX, calculations are done using integral values which are
        // 65536 per pt, or 655360 per em. So, the division here truncates in
        // TeX but doesn't here, producing different results. If we wanted to
        // exactly match TeX's calculation, we could do
        //   Math.floor(655360 * maxDistFromAxis / 500) *
        //    delimiterFactor / 655360
        // (To see the difference, compare
        //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
        // in TeX and KaTeX)
        maxDistFromAxis / 500 * delimiterFactor,
        2 * maxDistFromAxis - delimiterExtend);

    // Finally, we defer to `makeCustomSizedDelim` with our calculated total
    // height
    return makeCustomSizedDelim(delim, totalHeight, true, options, mode, classes);
};

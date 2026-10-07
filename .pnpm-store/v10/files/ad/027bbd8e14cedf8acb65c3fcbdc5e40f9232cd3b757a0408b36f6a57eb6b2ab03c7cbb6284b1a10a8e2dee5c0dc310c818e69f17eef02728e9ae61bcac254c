/**
 * This file provides support to buildMathML.js and buildHTML.js
 * for stretchy wide elements rendered from SVG files
 * and other CSS trickery.
 */

import {LineNode, PathNode, SvgNode} from "./domTree";
import {makeSpan, makeSvgSpan} from "./buildCommon";
import {MathNode, TextNode} from "./mathMLTree";
import {makeEm} from "./units";

import type Options from "./Options";
import type {ParseNode} from "./parseNode";
import type {DomSpan, HtmlDomNode, SvgSpan} from "./domTree";

const stretchyCodePoint: Record<string, string> = {
    widehat: "^",
    widecheck: "ˇ",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "\u2190",
    underleftarrow: "\u2190",
    xleftarrow: "\u2190",
    overrightarrow: "\u2192",
    underrightarrow: "\u2192",
    xrightarrow: "\u2192",
    underbrace: "\u23df",
    overbrace: "\u23de",
    underbracket: "\u23b5",
    overbracket: "\u23b4",
    overgroup: "\u23e0",
    undergroup: "\u23e1",
    overleftrightarrow: "\u2194",
    underleftrightarrow: "\u2194",
    xleftrightarrow: "\u2194",
    Overrightarrow: "\u21d2",
    xRightarrow: "\u21d2",
    overleftharpoon: "\u21bc",
    xleftharpoonup: "\u21bc",
    overrightharpoon: "\u21c0",
    xrightharpoonup: "\u21c0",
    xLeftarrow: "\u21d0",
    xLeftrightarrow: "\u21d4",
    xhookleftarrow: "\u21a9",
    xhookrightarrow: "\u21aa",
    xmapsto: "\u21a6",
    xrightharpoondown: "\u21c1",
    xleftharpoondown: "\u21bd",
    xrightleftharpoons: "\u21cc",
    xleftrightharpoons: "\u21cb",
    xtwoheadleftarrow: "\u219e",
    xtwoheadrightarrow: "\u21a0",
    xlongequal: "=",
    xtofrom: "\u21c4",
    xrightleftarrows: "\u21c4",
    xrightequilibrium: "\u21cc",  // Not a perfect match.
    xleftequilibrium: "\u21cb",   // None better available.
    "\\cdrightarrow": "\u2192",
    "\\cdleftarrow": "\u2190",
    "\\cdlongequal": "=",
};

export const stretchyMathML = function(label: string): MathNode {
    const node = new MathNode(
        "mo",
        [new TextNode(stretchyCodePoint[label.replace(/^\\/, '')])],
    );
    node.setAttribute("stretchy", "true");
    return node;
};

// Many of the KaTeX SVG images have been adapted from glyphs in KaTeX fonts.
// Copyright (c) 2009-2010, Design Science, Inc. (<www.mathjax.org>)
// Copyright (c) 2014-2017 Khan Academy (<www.khanacademy.org>)
// Licensed under the SIL Open Font License, Version 1.1.
// See \nhttp://scripts.sil.org/OFL

// Very Long SVGs
//    Many of the KaTeX stretchy wide elements use a long SVG image and an
//    overflow: hidden tactic to achieve a stretchy image while avoiding
//    distortion of arrowheads or brace corners.

//    The SVG typically contains a very long (400 em) arrow.

//    The SVG is in a container span that has overflow: hidden, so the span
//    acts like a window that exposes only part of the  SVG.

//    The SVG always has a longer, thinner aspect ratio than the container span.
//    After the SVG fills 100% of the height of the container span,
//    there is a long arrow shaft left over. That left-over shaft is not shown.
//    Instead, it is sliced off because the span's CSS has overflow: hidden.

//    Thus, the reader sees an arrow that matches the subject matter width
//    without distortion.

//    Some functions, such as \cancel, need to vary their aspect ratio. These
//    functions do not get the overflow SVG treatment.

// In the katexImagesData object just below, the dimensions all
// correspond to path geometry inside the relevant SVG.
// For example, \overrightarrow uses the same arrowhead as glyph U+2192
// from the KaTeX Main font. The scaling factor is 1000.
// That is, inside the font, that arrowhead is 522 units tall, which
// corresponds to 0.522 em inside the document.

const katexImagesData: {
    [key: string]: ([string[], number, number] | [[string], number, number, string])
} = {
                   //   path(s), minWidth, height, align
    overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
    "\\cdrightarrow": [["rightarrow"], 3.0, 522, "xMaxYMin"], // CD minwwidth2.5pc
    xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
    "\\cdleftarrow": [["leftarrow"], 3.0, 522, "xMinYMin"],
    Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
    xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
    xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
    overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
    overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
    xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
    "\\cdlongequal": [["longequal"], 3.0, 334, "xMinYMin"],
    xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
    xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],

    overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
    underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"],
        1.6, 548],
    underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
    xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
    xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
    xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"],
        1.75, 716],
    xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
    xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
    overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440],
    underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410],
    overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
    undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
    xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
    xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],

    // The next three arrows are from the mhchem package.
    // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
    // document as \xrightarrow or \xrightleftharpoons. Those have
    // min-length = 1.75em, so we set min-length on these next three to match.
    xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
    xrightequilibrium: [["baraboveshortleftharpoon",
        "rightharpoonaboveshortbar"], 1.75, 716],
    xleftequilibrium: [["shortbaraboveleftharpoon",
        "shortrightharpoonabovebar"], 1.75, 716],
};

const wideAccentLabels =
    new Set(["widehat", "widecheck", "widetilde", "utilde"]);

export const stretchySvg = function(
    group: ParseNode<"accent"> | ParseNode<"accentUnder"> | ParseNode<"xArrow">
         | ParseNode<"horizBrace">,
    options: Options,
): DomSpan | SvgSpan {
    // Create a span with inline SVG for the element.
    function buildSvgSpan_(): {
        span: DomSpan | SvgSpan,
        minWidth: number,
        height: number,
    } {
        let viewBoxWidth = 400000;  // default
        const label = group.label.slice(1);
        if (wideAccentLabels.has(label)) {
            // Each type in the `if` statement corresponds to one of the ParseNode
            // types below. This narrowing is required to access `grp.base`.
            // TODO(ts)
            const grp = group as ParseNode<"accent"> | ParseNode<"accentUnder">;
            // There are four SVG images available for each function.
            // Choose a taller image when there are more characters.
            const numChars = grp.base.type === "ordgroup" ?
                grp.base.body.length : 1;
            let viewBoxHeight;
            let pathName;
            let height;

            if (numChars > 5) {
                if (label === "widehat" || label === "widecheck") {
                    viewBoxHeight = 420;
                    viewBoxWidth = 2364;
                    height = 0.42;
                    pathName = label + "4";
                } else {
                    viewBoxHeight = 312;
                    viewBoxWidth = 2340;
                    height = 0.34;
                    pathName = "tilde4";
                }
            } else {
                const imgIndex = [1, 1, 2, 2, 3, 3][numChars];
                if (label === "widehat" || label === "widecheck") {
                    viewBoxWidth = [0, 1062, 2364, 2364, 2364][imgIndex];
                    viewBoxHeight = [0, 239, 300, 360, 420][imgIndex];
                    height = [0, 0.24, 0.3, 0.3, 0.36, 0.42][imgIndex];
                    pathName = label + imgIndex;
                } else {
                    viewBoxWidth = [0, 600, 1033, 2339, 2340][imgIndex];
                    viewBoxHeight = [0, 260, 286, 306, 312][imgIndex];
                    height = [0, 0.26, 0.286, 0.3, 0.306, 0.34][imgIndex];
                    pathName = "tilde" + imgIndex;
                }
            }
            const path = new PathNode(pathName);
            const svgNode = new SvgNode([path], {
                "width": "100%",
                "height": makeEm(height),
                "viewBox": `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
                "preserveAspectRatio": "none",
            });
            return {
                span: makeSvgSpan([], [svgNode], options),
                minWidth: 0,
                height,
            };
        } else {
            const spans = [];

            const data = katexImagesData[label];
            const [paths, minWidth, viewBoxHeight] = data;
            const height = viewBoxHeight / 1000;

            const numSvgChildren = paths.length;
            let widthClasses;
            let aligns;
            if (numSvgChildren === 1) {
                // TODO(ts): All these cases must be of the 4-tuple type.
                const align1: string =
                    (data as [[string], number, number, string])[3];
                widthClasses = ["hide-tail"];
                aligns = [align1];
            } else if (numSvgChildren === 2) {
                widthClasses = ["halfarrow-left", "halfarrow-right"];
                aligns = ["xMinYMin", "xMaxYMin"];
            } else if (numSvgChildren === 3) {
                widthClasses = ["brace-left", "brace-center", "brace-right"];
                aligns = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            } else {
                throw new Error(
                    `Correct katexImagesData or update code here to support
                    ${numSvgChildren} children.`);
            }

            for (let i = 0; i < numSvgChildren; i++) {
                const path = new PathNode(paths[i]);

                const svgNode = new SvgNode([path], {
                    "width": "400em",
                    "height": makeEm(height),
                    "viewBox": `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
                    "preserveAspectRatio": aligns[i] + " slice",
                });

                const span = makeSvgSpan(
                    [widthClasses[i]], [svgNode], options);
                if (numSvgChildren === 1) {
                    return {span, minWidth, height};
                } else {
                    span.style.height = makeEm(height);
                    spans.push(span);
                }
            }

            return {
                span: makeSpan(["stretchy"], spans, options),
                minWidth,
                height,
            };
        }
    } // buildSvgSpan_()
    const {span, minWidth, height} = buildSvgSpan_();

    // Note that we are returning span.depth = 0.
    // Any adjustments relative to the baseline must be done in buildHTML.
    span.height = height;
    span.style.height = makeEm(height);
    if (minWidth > 0) {
        span.style.minWidth = makeEm(minWidth);
    }

    return span;
};

export const stretchyEnclose = function(
    inner: HtmlDomNode,
    label: string,
    topPad: number,
    bottomPad: number,
    options: Options,
): DomSpan | SvgSpan {
    // Return an image span for \cancel, \bcancel, \xcancel, \fbox, or \angl
    let img;
    const totalHeight = inner.height + inner.depth + topPad + bottomPad;

    if (/fbox|color|angl/.test(label)) {
        img = makeSpan(["stretchy", label], [], options);

        if (label === "fbox") {
            const color = options.color && options.getColor();
            if (color) {
                img.style.borderColor = color;
            }
        }

    } else {
        // \cancel, \bcancel, or \xcancel
        // Since \cancel's SVG is inline and it omits the viewBox attribute,
        // its stroke-width will not vary with span area.

        const lines = [];
        if (/^[bx]cancel$/.test(label)) {
            lines.push(new LineNode({
                "x1": "0",
                "y1": "0",
                "x2": "100%",
                "y2": "100%",
                "stroke-width": "0.046em",
            }));
        }

        if (/^x?cancel$/.test(label)) {
            lines.push(new LineNode({
                "x1": "0",
                "y1": "100%",
                "x2": "100%",
                "y2": "0",
                "stroke-width": "0.046em",
            }));
        }

        const svgNode = new SvgNode(lines, {
            "width": "100%",
            "height": makeEm(totalHeight),
        });

        img = makeSvgSpan([], [svgNode], options);
    }

    img.height = totalHeight;
    img.style.height = makeEm(totalHeight);

    return img;
};

import defineFunction, {normalizeArgument} from "../defineFunction";
import {makeOrd, makeSpan, makeVList, staticSvg, svgData} from "../buildCommon";
import {isCharacterBox} from "../utils";
import {MathNode} from "../mathMLTree";
import {stretchyMathML, stretchySvg} from "../stretchy";
import {assertNodeType} from "../parseNode";
import {assertSpan, assertSymbolDomNode, hasHtmlDomChildren, SymbolNode} from "../domTree";
import {makeEm} from "../units";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

import type {ParseNode, AnyParseNode} from "../parseNode";
import type {HtmlBuilderSupSub, MathMLBuilder} from "../defineFunction";
import type {HtmlDomNode} from "../domTree";

const getBaseSymbol = (group: HtmlDomNode): SymbolNode | undefined => {
    if (group instanceof SymbolNode) {
        return group;
    }
    if (hasHtmlDomChildren(group) && group.children.length === 1) {
        return getBaseSymbol(group.children[0]);
    }
};

// NOTE: Unlike most `htmlBuilder`s, this one handles not only "accent", but
// also "supsub" since an accent can affect super/subscripting.
export const htmlBuilder: HtmlBuilderSupSub<"accent"> = (grp, options) => {
    // Accents are handled in the TeXbook pg. 443, rule 12.
    let base: AnyParseNode;
    let group: ParseNode<"accent">;

    let supSubGroup;
    if (grp && grp.type === "supsub") {
        // If our base is a character box, and we have superscripts and
        // subscripts, the supsub will defer to us. In particular, we want
        // to attach the superscripts and subscripts to the inner body (so
        // that the position of the superscripts and subscripts won't be
        // affected by the height of the accent). We accomplish this by
        // sticking the base of the accent into the base of the supsub, and
        // rendering that, while keeping track of where the accent is.

        // The real accent group is the base of the supsub group
        group = assertNodeType(grp.base, "accent");
        // The character box is the base of the accent group
        base = group.base;
        // Stick the character box into the base of the supsub group
        grp.base = base;

        // Rerender the supsub group with its new base, and store that
        // result.
        supSubGroup = assertSpan(html.buildGroup(grp, options));

        // reset original base
        grp.base = group;
    } else {
        group = assertNodeType(grp, "accent");
        base = group.base;
    }

    // Build the base group
    const body = html.buildGroup(base, options.havingCrampedStyle());

    // Does the accent need to shift for the skew of a character?
    const mustShift = group.isShifty && isCharacterBox(base);

    // Calculate the skew of the accent. This is based on the line "If the
    // nucleus is not a single character, let s = 0; otherwise set s to the
    // kern amount for the nucleus followed by the \skewchar of its font."
    // Note that our skew metrics are just the kern between each character
    // and the skewchar.
    let skew = 0;
    if (mustShift) {
        // Read the skew from the rendered base symbol.
        // This preserves font metrics from font wrappers like \mathbb.
        skew = getBaseSymbol(body)?.skew ?? 0;
    }

    const accentBelow = group.label === "\\c";

    // calculate the amount of space between the body and the accent
    let clearance = accentBelow
        ? body.height + body.depth
        : Math.min(
            body.height,
            options.fontMetrics().xHeight);

    // Build the accent
    let accentBody;
    if (!group.isStretchy) {
        let accent;
        let width: number;
        if (group.label === "\\vec") {
            // Before version 0.9, \vec used the combining font glyph U+20D7.
            // But browsers, especially Safari, are not consistent in how they
            // render combining characters when not preceded by a character.
            // So now we use an SVG.
            // If Safari reforms, we should consider reverting to the glyph.
            accent = staticSvg("vec", options);
            width = svgData.vec[1];
        } else {
            accent = makeOrd({type: "textord", mode: group.mode, text: group.label},
                options, "textord");
            accent = assertSymbolDomNode(accent);
            // Remove the italic correction of the accent, because it only serves to
            // shift the accent over to a place we don't want.
            accent.italic = 0;
            width = accent.width;
            if (accentBelow) {
                clearance += accent.depth;
            }
        }

        accentBody = makeSpan(["accent-body"], [accent]);

        // "Full" accents expand the width of the resulting symbol to be
        // at least the width of the accent, and overlap directly onto the
        // character without any vertical offset.
        const accentFull = (group.label === "\\textcircled");
        if (accentFull) {
            accentBody.classes.push('accent-full');
            clearance = body.height;
        }

        // Shift the accent over by the skew.
        let left = skew;

        // CSS defines `.katex .accent .accent-body:not(.accent-full) { width: 0 }`
        // so that the accent doesn't contribute to the bounding box.
        // We need to shift the character by its width (effectively half
        // its width) to compensate.
        if (!accentFull) {
            left -= width / 2;
        }

        accentBody.style.left = makeEm(left);

        // \textcircled uses the \bigcirc glyph, so it needs some
        // vertical adjustment to match LaTeX.
        if (group.label === "\\textcircled") {
            accentBody.style.top = ".2em";
        }

        accentBody = makeVList({
            positionType: "firstBaseline",
            children: [
                {type: "elem", elem: body},
                {type: "kern", size: -clearance},
                {type: "elem", elem: accentBody},
            ],
        }, options);

    } else {
        accentBody = stretchySvg(group, options);

        accentBody = makeVList({
            positionType: "firstBaseline",
            children: [
                {type: "elem", elem: body},
                {
                    type: "elem",
                    elem: accentBody,
                    wrapperClasses: ["svg-align"],
                    wrapperStyle: skew > 0
                        ? {
                            width: `calc(100% - ${makeEm(2 * skew)})`,
                            marginLeft: makeEm(2 * skew),
                        }
                        : undefined,
                },
            ],
        }, options);
    }

    const accentWrap =
        makeSpan(["mord", "accent"], [accentBody], options);

    if (supSubGroup) {
        // Here, we replace the "base" child of the supsub with our newly
        // generated accent.
        supSubGroup.children[0] = accentWrap;

        // Since we don't rerun the height calculation after replacing the
        // accent, we manually recalculate height.
        supSubGroup.height = Math.max(accentWrap.height, supSubGroup.height);

        // Accents should always be ords, even when their innards are not.
        supSubGroup.classes[0] = "mord";

        return supSubGroup;
    } else {
        return accentWrap;
    }
};

const mathmlBuilder: MathMLBuilder<"accent"> = (group, options) => {
    const accentNode =
        group.isStretchy ?
            stretchyMathML(group.label) :
            new MathNode("mo", [mml.makeText(group.label, group.mode)]);

    const node = new MathNode(
        "mover",
        [mml.buildGroup(group.base, options), accentNode]);

    node.setAttribute("accent", "true");

    return node;
};

const NON_STRETCHY_ACCENT_REGEX = new RegExp([
    "\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve",
    "\\check", "\\hat", "\\vec", "\\dot", "\\mathring",
].map(accent => `\\${accent}`).join("|"));

// Accents
defineFunction({
    type: "accent",
    names: [
        "\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve",
        "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck",
        "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow",
        "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup",
        "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon",
    ],
    props: {
        numArgs: 1,
    },
    handler: (context, args) => {
        const base = normalizeArgument(args[0]);

        const isStretchy = !NON_STRETCHY_ACCENT_REGEX.test(context.funcName);
        const isShifty = !isStretchy ||
            context.funcName === "\\widehat" ||
            context.funcName === "\\widetilde" ||
            context.funcName === "\\widecheck";

        return {
            type: "accent",
            mode: context.parser.mode,
            label: context.funcName,
            isStretchy: isStretchy,
            isShifty: isShifty,
            base: base,
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

// Text-mode accents
defineFunction({
    type: "accent",
    names: [
        "\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"',
        "\\c", "\\r", "\\H", "\\v", "\\textcircled",
    ],
    props: {
        numArgs: 1,
        allowedInText: true,
        allowedInMath: true, // unless in strict mode
        argTypes: ["primitive"],
    },
    handler: (context, args) => {
        const base = args[0];
        let mode = context.parser.mode;

        if (mode === "math") {
            context.parser.settings.reportNonstrict("mathVsTextAccents",
                `LaTeX's accent ${context.funcName} works only in text mode`);
            mode = "text";
        }

        return {
            type: "accent",
            mode: mode,
            label: context.funcName,
            isStretchy: false,
            isShifty: true,
            base: base,
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

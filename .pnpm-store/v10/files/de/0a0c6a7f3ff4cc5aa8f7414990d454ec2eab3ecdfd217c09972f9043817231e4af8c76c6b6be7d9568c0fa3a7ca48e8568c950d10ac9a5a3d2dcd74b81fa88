import defineFunction from "../defineFunction";
import {makeSpan, makeSvgSpan, makeVList, wrapFragment} from "../buildCommon";
import {isCharacterBox} from "../utils";
import {MathNode} from "../mathMLTree";
import {stretchyEnclose} from "../stretchy";
import {phasePath} from "../svgGeometry";
import {PathNode, SvgNode} from "../domTree";
import {calculateSize, makeEm} from "../units";
import {assertNodeType} from "../parseNode";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";
import type {HtmlBuilder, MathMLBuilder} from "../defineFunction";

const htmlBuilder: HtmlBuilder<"enclose"> = (group, options) => {
    // \cancel, \bcancel, \xcancel, \sout, \fbox, \colorbox, \fcolorbox, \phase
    // Some groups can return document fragments.  Handle those by wrapping
    // them in a span.
    const inner = wrapFragment(
        html.buildGroup(group.body, options), options);

    const label = group.label.slice(1);
    let scale = options.sizeMultiplier;
    let img;
    let imgShift = 0;

    // In the LaTeX cancel package, line geometry is slightly different
    // depending on whether the subject is wider than it is tall, or vice versa.
    // We don't know the width of a group, so as a proxy, we test if
    // the subject is a single character. This captures most of the
    // subjects that should get the "tall" treatment.
    const isSingleChar = isCharacterBox(group.body);

    if (label === "sout") {
        img = makeSpan(["stretchy", "sout"]);
        img.height = options.fontMetrics().defaultRuleThickness / scale;
        imgShift = -0.5 * options.fontMetrics().xHeight;

    } else if (label === "phase") {
        // Set a couple of dimensions from the steinmetz package.
        const lineWeight = calculateSize({number: 0.6, unit: "pt"}, options);
        const clearance = calculateSize({number: 0.35, unit: "ex"}, options);

        // Prevent size changes like \Huge from affecting line thickness
        const newOptions = options.havingBaseSizing();
        scale = scale / newOptions.sizeMultiplier;

        const angleHeight = inner.height + inner.depth + lineWeight + clearance;
        // Reserve a left pad for the angle.
        inner.style.paddingLeft = makeEm(angleHeight / 2 + lineWeight);

        // Create an SVG
        const viewBoxHeight = Math.floor(1000 * angleHeight * scale);
        const path = phasePath(viewBoxHeight);
        const svgNode = new SvgNode([new PathNode("phase", path)], {
            "width": "400em",
            "height": makeEm(viewBoxHeight / 1000),
            "viewBox": `0 0 400000 ${viewBoxHeight}`,
            "preserveAspectRatio": "xMinYMin slice",
        });
        // Wrap it in a span with overflow: hidden.
        img = makeSvgSpan(["hide-tail"], [svgNode], options);
        img.style.height = makeEm(angleHeight);
        imgShift = inner.depth + lineWeight + clearance;

    } else {
        // Add horizontal padding
        if (/cancel/.test(label)) {
            if (!isSingleChar) {
                inner.classes.push("cancel-pad");
            }
        } else if (label === "angl") {
            inner.classes.push("anglpad");
        } else {
            inner.classes.push("boxpad");
        }

        // Add vertical padding
        let topPad = 0;
        let bottomPad = 0;
        let ruleThickness = 0;
        // ref: cancel package: \advance\totalheight2\p@ % "+2"
        if (/box/.test(label)) {
            ruleThickness = Math.max(
                options.fontMetrics().fboxrule, // default
                options.minRuleThickness, // User override.
            );
            topPad = options.fontMetrics().fboxsep +
                (label === "colorbox" ? 0 : ruleThickness);
            bottomPad =  topPad;
        } else if (label === "angl") {
            ruleThickness = Math.max(
                options.fontMetrics().defaultRuleThickness,
                options.minRuleThickness
            );
            topPad = 4 * ruleThickness; // gap = 3 × line, plus the line itself.
            bottomPad = Math.max(0, 0.25 - inner.depth);
        } else {
            topPad = isSingleChar ? 0.2 : 0;
            bottomPad =  topPad;
        }

        img = stretchyEnclose(inner, label, topPad, bottomPad, options);
        if (/fbox|boxed|fcolorbox/.test(label)) {
            img.style.borderStyle = "solid";
            img.style.borderWidth = makeEm(ruleThickness);
        } else if (label === "angl" && ruleThickness !== 0.049) {
            img.style.borderTopWidth = makeEm(ruleThickness);
            img.style.borderRightWidth = makeEm(ruleThickness);
        }
        imgShift = inner.depth + bottomPad;

        if (group.backgroundColor) {
            img.style.backgroundColor = group.backgroundColor;
            if (group.borderColor) {
                img.style.borderColor = group.borderColor;
            }
        }
    }

    let vlist;
    if (group.backgroundColor) {
        vlist = makeVList({
            positionType: "individualShift",
            children: [
                // Put the color background behind inner;
                {type: "elem", elem: img, shift: imgShift},
                {type: "elem", elem: inner, shift: 0},
            ],
        }, options);
    } else {
        const classes = /cancel|phase/.test(label) ? ["svg-align"] : [];
        vlist = makeVList({
            positionType: "individualShift",
            children: [
                // Write the \cancel stroke on top of inner.
                {
                    type: "elem",
                    elem: inner,
                    shift: 0,
                },
                {
                    type: "elem",
                    elem: img,
                    shift: imgShift,
                    wrapperClasses: classes,
                },
            ],
        }, options);
    }

    if (/cancel/.test(label)) {
        // The cancel package documentation says that cancel lines add their height
        // to the expression, but tests show that isn't how it actually works.
        vlist.height = inner.height;
        vlist.depth = inner.depth;
    }

    if (/cancel/.test(label) && !isSingleChar) {
        // cancel does not create horiz space for its line extension.
        return makeSpan(["mord", "cancel-lap"], [vlist], options);
    } else {
        return makeSpan(["mord"], [vlist], options);
    }
};

const mathmlBuilder: MathMLBuilder<"enclose"> = (group, options) => {
    let fboxsep = 0;
    const node = new MathNode(
        group.label.includes("colorbox") ? "mpadded" : "menclose",
        [mml.buildGroup(group.body, options)]
    );
    switch (group.label) {
        case "\\cancel":
            node.setAttribute("notation", "updiagonalstrike");
            break;
        case "\\bcancel":
            node.setAttribute("notation", "downdiagonalstrike");
            break;
        case "\\phase":
            node.setAttribute("notation", "phasorangle");
            break;
        case "\\sout":
            node.setAttribute("notation", "horizontalstrike");
            break;
        case "\\fbox":
            node.setAttribute("notation", "box");
            break;
        case "\\angl":
            node.setAttribute("notation", "actuarial");
            break;
        case "\\fcolorbox":
        case "\\colorbox":
            // <menclose> doesn't have a good notation option. So use <mpadded>
            // instead. Set some attributes that come included with <menclose>.
            fboxsep = options.fontMetrics().fboxsep *
                options.fontMetrics().ptPerEm;
            node.setAttribute("width", `+${2 * fboxsep}pt`);
            node.setAttribute("height", `+${2 * fboxsep}pt`);
            node.setAttribute("lspace", `${fboxsep}pt`); //
            node.setAttribute("voffset", `${fboxsep}pt`);
            if (group.label === "\\fcolorbox") {
                const thk = Math.max(
                    options.fontMetrics().fboxrule, // default
                    options.minRuleThickness, // user override
                );
                node.setAttribute("style", `border: ${makeEm(thk)} solid ${group.borderColor}`);
            }
            break;
        case "\\xcancel":
            node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            break;
    }
    if (group.backgroundColor) {
        node.setAttribute("mathbackground", group.backgroundColor);
    }
    return node;
};

defineFunction({
    type: "enclose",
    names: ["\\colorbox"],
    props: {
        numArgs: 2,
        allowedInText: true,
        argTypes: ["color", "text"],
    },
    handler({parser, funcName}, args, optArgs) {
        const color = assertNodeType(args[0], "color-token").color;
        const body = args[1];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            backgroundColor: color,
            body,
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

defineFunction({
    type: "enclose",
    names: ["\\fcolorbox"],
    props: {
        numArgs: 3,
        allowedInText: true,
        argTypes: ["color", "color", "text"],
    },
    handler({parser, funcName}, args, optArgs) {
        const borderColor = assertNodeType(args[0], "color-token").color;
        const backgroundColor = assertNodeType(args[1], "color-token").color;
        const body = args[2];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            backgroundColor,
            borderColor,
            body,
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

defineFunction({
    type: "enclose",
    names: ["\\fbox"],
    props: {
        numArgs: 1,
        argTypes: ["hbox"],
        allowedInText: true,
    },
    handler({parser}, args) {
        return {
            type: "enclose",
            mode: parser.mode,
            label: "\\fbox",
            body: args[0],
        };
    },
});

defineFunction({
    type: "enclose",
    names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
    props: {
        numArgs: 1,
    },
    handler({parser, funcName}, args) {
        const body = args[0];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            body,
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

defineFunction({
    type: "enclose",
    names: ["\\sout"],
    props: {
        numArgs: 1,
        allowedInText: true,
    },
    handler({parser, funcName}, args) {
        if (parser.mode === "math") {
            parser.settings.reportNonstrict("mathVsSout",
                `LaTeX's \\sout works only in text mode`);
        }
        const body = args[0];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            body,
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

defineFunction({
    type: "enclose",
    names: ["\\angl"],
    props: {
        numArgs: 1,
        argTypes: ["hbox"],
        allowedInText: false,
    },
    handler({parser}, args) {
        return {
            type: "enclose",
            mode: parser.mode,
            label: "\\angl",
            body: args[0],
        };
    },
});

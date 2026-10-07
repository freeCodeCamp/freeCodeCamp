import defineFunction, {normalizeArgument} from "../defineFunction";
import {makeLineSpan, makeSpan, makeVList} from "../buildCommon";
import {makeCustomSizedDelim} from "../delimiter";
import {MathNode, TextNode} from "../mathMLTree";
import type {ParseNode} from "../parseNode";
import Style from "../Style";
import {assertNodeType} from "../parseNode";
import * as html from "../buildHTML";
import * as mml from "../buildMathML";
import {calculateSize, makeEm} from "../units";
import type {StyleStr} from "../types";
import type {HtmlBuilder, MathMLBuilder} from "../defineFunction";

const htmlBuilder: HtmlBuilder<"genfrac"> = (group, options) => {
    // Fractions are handled in the TeXbook on pages 444-445, rules 15(a-e).
    const style = options.style;

    const nstyle = style.fracNum();
    const dstyle = style.fracDen();
    let newOptions;

    newOptions = options.havingStyle(nstyle);
    const numerm = html.buildGroup(group.numer, newOptions, options);

    if (group.continued) {
        // \cfrac inserts a \strut into the numerator.
        // Get \strut dimensions from TeXbook page 353.
        const hStrut = 8.5 / options.fontMetrics().ptPerEm;
        const dStrut = 3.5 / options.fontMetrics().ptPerEm;
        numerm.height = numerm.height < hStrut ? hStrut : numerm.height;
        numerm.depth = numerm.depth < dStrut ? dStrut : numerm.depth;
    }

    newOptions = options.havingStyle(dstyle);
    const denomm = html.buildGroup(group.denom, newOptions, options);

    let rule;
    let ruleWidth;
    let ruleSpacing;
    if (group.hasBarLine) {
        if (group.barSize) {
            ruleWidth = calculateSize(group.barSize, options);
            rule = makeLineSpan("frac-line", options, ruleWidth);
        } else {
            rule = makeLineSpan("frac-line", options);
        }
        ruleWidth = rule.height;
        ruleSpacing = rule.height;
    } else {
        rule = null;
        ruleWidth = 0;
        ruleSpacing = options.fontMetrics().defaultRuleThickness;
    }

    // Rule 15b
    let numShift;
    let clearance;
    let denomShift;
    if (style.size === Style.DISPLAY.size) {
        numShift = options.fontMetrics().num1;
        if (ruleWidth > 0) {
            clearance = 3 * ruleSpacing;
        } else {
            clearance = 7 * ruleSpacing;
        }
        denomShift = options.fontMetrics().denom1;
    } else {
        if (ruleWidth > 0) {
            numShift = options.fontMetrics().num2;
            clearance = ruleSpacing;
        } else {
            numShift = options.fontMetrics().num3;
            clearance = 3 * ruleSpacing;
        }
        denomShift = options.fontMetrics().denom2;
    }

    let frac;
    if (!rule) {
        // Rule 15c
        const candidateClearance =
            (numShift - numerm.depth) - (denomm.height - denomShift);
        if (candidateClearance < clearance) {
            numShift += 0.5 * (clearance - candidateClearance);
            denomShift += 0.5 * (clearance - candidateClearance);
        }

        frac = makeVList({
            positionType: "individualShift",
            children: [
                {type: "elem", elem: denomm, shift: denomShift},
                {type: "elem", elem: numerm, shift: -numShift},
            ],
        }, options);
    } else {
        // Rule 15d
        const axisHeight = options.fontMetrics().axisHeight;

        if ((numShift - numerm.depth) - (axisHeight + 0.5 * ruleWidth) <
                clearance) {
            numShift +=
                clearance - ((numShift - numerm.depth) -
                            (axisHeight + 0.5 * ruleWidth));
        }

        if ((axisHeight - 0.5 * ruleWidth) - (denomm.height - denomShift) <
                clearance) {
            denomShift +=
                clearance - ((axisHeight - 0.5 * ruleWidth) -
                            (denomm.height - denomShift));
        }

        const midShift = -(axisHeight - 0.5 * ruleWidth);

        frac = makeVList({
            positionType: "individualShift",
            children: [
                {type: "elem", elem: denomm, shift: denomShift},
                {type: "elem", elem: rule,   shift: midShift},
                {type: "elem", elem: numerm, shift: -numShift},
            ],
        }, options);
    }

    // Since we manually change the style sometimes (with \dfrac or \tfrac),
    // account for the possible size change here.
    newOptions = options.havingStyle(style);
    frac.height *= newOptions.sizeMultiplier / options.sizeMultiplier;
    frac.depth *= newOptions.sizeMultiplier / options.sizeMultiplier;

    // Rule 15e
    let delimSize;
    if (style.size === Style.DISPLAY.size) {
        delimSize = options.fontMetrics().delim1;
    } else if (style.size === Style.SCRIPTSCRIPT.size) {
        delimSize = options.havingStyle(Style.SCRIPT).fontMetrics().delim2;
    } else {
        delimSize = options.fontMetrics().delim2;
    }

    let leftDelim;
    let rightDelim;
    if (group.leftDelim == null) {
        leftDelim = html.makeNullDelimiter(options, ["mopen"]);
    } else {
        leftDelim = makeCustomSizedDelim(
            group.leftDelim, delimSize, true,
            options.havingStyle(style), group.mode, ["mopen"]);
    }

    if (group.continued) {
        rightDelim = makeSpan([]); // zero width for \cfrac
    } else if (group.rightDelim == null) {
        rightDelim = html.makeNullDelimiter(options, ["mclose"]);
    } else {
        rightDelim = makeCustomSizedDelim(
            group.rightDelim, delimSize, true,
            options.havingStyle(style), group.mode, ["mclose"]);
    }

    return makeSpan(
        ["mord"].concat(newOptions.sizingClasses(options)),
        [leftDelim, makeSpan(["mfrac"], [frac]), rightDelim],
        options);
};

const mathmlBuilder: MathMLBuilder<"genfrac"> = (group, options) => {
    const node = new MathNode(
        "mfrac",
        [
            mml.buildGroup(group.numer, options),
            mml.buildGroup(group.denom, options),
        ]);

    if (!group.hasBarLine) {
        node.setAttribute("linethickness", "0px");
    } else if (group.barSize) {
        const ruleWidth = calculateSize(group.barSize, options);
        node.setAttribute("linethickness", makeEm(ruleWidth));
    }

    if (group.leftDelim != null || group.rightDelim != null) {
        const withDelims = [];

        if (group.leftDelim != null) {
            const leftOp = new MathNode(
                "mo",
                [new TextNode(group.leftDelim.replace("\\", ""))]
            );

            leftOp.setAttribute("fence", "true");

            withDelims.push(leftOp);
        }

        withDelims.push(node);

        if (group.rightDelim != null) {
            const rightOp = new MathNode(
                "mo",
                [new TextNode(group.rightDelim.replace("\\", ""))]
            );

            rightOp.setAttribute("fence", "true");

            withDelims.push(rightOp);
        }

        return mml.makeRow(withDelims);
    }

    return node;
};

const wrapWithStyle = (
    frac: ParseNode<"genfrac">,
    style?: StyleStr | null,
): ParseNode<"genfrac"> => {
    if (!style) {
        return frac;
    }

    const wrapper: ParseNode<"styling"> = {
        type: "styling",
        mode: frac.mode,
        style,
        body: [frac],
    };

    // @ts-ignore defineFunction handler needs to return ParseNode<"genfrac">
    return wrapper;
};

defineFunction({
    type: "genfrac",
    names: [
        "\\cfrac", "\\dfrac", "\\frac", "\\tfrac",
        "\\dbinom", "\\binom", "\\tbinom",
        "\\\\atopfrac", // can’t be entered directly
        "\\\\bracefrac", "\\\\brackfrac",   // ditto
    ],
    props: {
        numArgs: 2,
        allowedInArgument: true,
    },
    handler: ({parser, funcName}, args) => {
        const numer = args[0];
        const denom = args[1];
        let hasBarLine: boolean;
        let leftDelim: string | null = null;
        let rightDelim: string | null = null;

        switch (funcName) {
            case "\\cfrac":
            case "\\dfrac":
            case "\\frac":
            case "\\tfrac":
                hasBarLine = true;
                break;
            case "\\\\atopfrac":
                hasBarLine = false;
                break;
            case "\\dbinom":
            case "\\binom":
            case "\\tbinom":
                hasBarLine = false;
                leftDelim = "(";
                rightDelim = ")";
                break;
            case "\\\\bracefrac":
                hasBarLine = false;
                leftDelim = "\\{";
                rightDelim = "\\}";
                break;
            case "\\\\brackfrac":
                hasBarLine = false;
                leftDelim = "[";
                rightDelim = "]";
                break;
            default:
                throw new Error("Unrecognized genfrac command");
        }

        const continued = funcName === "\\cfrac";
        let style = null;
        if (continued || funcName.startsWith("\\d")) {
            style = "display" as StyleStr;
        } else if (funcName.startsWith("\\t")) {
            style = "text" as StyleStr;
        }

        return wrapWithStyle({
            type: "genfrac",
            mode: parser.mode,
            numer,
            denom,
            continued,
            hasBarLine,
            leftDelim,
            rightDelim,
            barSize: null,
        }, style);
    },

    htmlBuilder,
    mathmlBuilder,
});

// Infix generalized fractions -- these are not rendered directly, but replaced
// immediately by one of the variants above.
defineFunction({
    type: "infix",
    names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
    props: {
        numArgs: 0,
        infix: true,
    },
    handler({parser, funcName, token}) {
        let replaceWith;
        switch (funcName) {
            case "\\over":
                replaceWith = "\\frac";
                break;
            case "\\choose":
                replaceWith = "\\binom";
                break;
            case "\\atop":
                replaceWith = "\\\\atopfrac";
                break;
            case "\\brace":
                replaceWith = "\\\\bracefrac";
                break;
            case "\\brack":
                replaceWith = "\\\\brackfrac";
                break;
            default:
                throw new Error("Unrecognized infix genfrac command");
        }
        return {
            type: "infix",
            mode: parser.mode,
            replaceWith,
            token,
        };
    },
});

const stylArray: StyleStr[] = ["display", "text", "script", "scriptscript"];

const delimFromValue = function(delimString: string): string | null {
    let delim = null;
    if (delimString.length > 0) {
        delim = delimString;
        delim = delim === "." ? null : delim;
    }
    return delim;
};

defineFunction({
    type: "genfrac",
    names: ["\\genfrac"],
    props: {
        numArgs: 6,
        allowedInArgument: true,
        argTypes: ["math", "math", "size", "text", "math", "math"],
    },
    handler({parser}, args) {
        const numer = args[4];
        const denom = args[5];

        // Look into the parse nodes to get the desired delimiters.
        const leftNode = normalizeArgument(args[0]);
        const leftDelim = leftNode.type === "atom" && leftNode.family === "open"
            ? delimFromValue(leftNode.text) : null;
        const rightNode = normalizeArgument(args[1]);
        const rightDelim = rightNode.type === "atom" && rightNode.family === "close"
            ? delimFromValue(rightNode.text) : null;

        const barNode = assertNodeType(args[2], "size");
        let hasBarLine: boolean;
        let barSize = null;
        if (barNode.isBlank) {
            // \genfrac acts differently than \above.
            // \genfrac treats an empty size group as a signal to use a
            // standard bar size. \above would see size = 0 and omit the bar.
            hasBarLine = true;
        } else {
            barSize = barNode.value;
            hasBarLine = barSize.number > 0;
        }

        // Find out if we want displaystyle, textstyle, etc.
        let size = null;
        let styl = args[3];
        if (styl.type === "ordgroup") {
            if (styl.body.length > 0) {
                const textOrd = assertNodeType(styl.body[0], "textord");
                size = stylArray[Number(textOrd.text)] as StyleStr;
            }
        } else {
            styl = assertNodeType(styl, "textord");
            size = stylArray[Number(styl.text)] as StyleStr;
        }

        return wrapWithStyle({
            type: "genfrac",
            mode: parser.mode,
            numer,
            denom,
            continued: false,
            hasBarLine,
            barSize,
            leftDelim,
            rightDelim,
        }, size);
    },
});

// \above is an infix fraction that also defines a fraction bar size.
defineFunction({
    type: "infix",
    names: ["\\above"],
    props: {
        numArgs: 1,
        argTypes: ["size"],
        infix: true,
    },
    handler({parser, funcName, token}, args) {
        return {
            type: "infix",
            mode: parser.mode,
            replaceWith: "\\\\abovefrac",
            size: assertNodeType(args[0], "size").value,
            token,
        };
    },
});

defineFunction({
    type: "genfrac",
    names: ["\\\\abovefrac"],
    props: {
        numArgs: 3,
        argTypes: ["math", "size", "math"],
    },
    handler: ({parser, funcName}, args) => {
        const numer = args[0];
        const barSize = assertNodeType(args[1], "infix").size;

        if (!barSize) {
            throw new Error(
                `\\\\abovefrac expected size, but got ${String(barSize)}`);
        }

        const denom = args[2];

        const hasBarLine = barSize.number > 0;
        return {
            type: "genfrac",
            mode: parser.mode,
            numer,
            denom,
            continued: false,
            hasBarLine,
            barSize,
            leftDelim: null,
            rightDelim: null,
        };
    },
});

import defineFunction from "../defineFunction";
import {makeSpan, makeVList, wrapFragment} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import {makeSqrtImage} from "../delimiter";
import Style from "../Style";
import {makeEm} from "../units";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

defineFunction({
    type: "sqrt",
    names: ["\\sqrt"],
    props: {
        numArgs: 1,
        numOptionalArgs: 1,
    },
    handler({parser}, args, optArgs) {
        const index = optArgs[0];
        const body = args[0];
        return {
            type: "sqrt",
            mode: parser.mode,
            body,
            index,
        };
    },
    htmlBuilder(group, options) {
        // Square roots are handled in the TeXbook pg. 443, Rule 11.

        // First, we do the same steps as in overline to build the inner group
        // and line
        let inner = html.buildGroup(group.body, options.havingCrampedStyle());
        if (inner.height === 0) {
            // Render a small surd.
            inner.height = options.fontMetrics().xHeight;
        }

        // Some groups can return document fragments.  Handle those by wrapping
        // them in a span.
        inner = wrapFragment(inner, options);

        // Calculate the minimum size for the \surd delimiter
        const metrics = options.fontMetrics();
        const theta = metrics.defaultRuleThickness;

        let phi = theta;
        if (options.style.id < Style.TEXT.id) {
            phi = options.fontMetrics().xHeight;
        }

        // Calculate the clearance between the body and line
        let lineClearance = theta + phi / 4;

        const minDelimiterHeight = (inner.height + inner.depth +
            lineClearance + theta);

        // Create a sqrt SVG of the required minimum size
        const {span: img, ruleWidth, advanceWidth} =
            makeSqrtImage(minDelimiterHeight, options);

        const delimDepth = img.height - ruleWidth;

        // Adjust the clearance based on the delimiter size
        if (delimDepth > inner.height + inner.depth + lineClearance) {
            lineClearance =
                (lineClearance + delimDepth - inner.height - inner.depth) / 2;
        }

        // Shift the sqrt image
        const imgShift = img.height - inner.height - lineClearance - ruleWidth;

        inner.style.paddingLeft = makeEm(advanceWidth);

        // Overlay the image and the argument.
        const body = makeVList({
            positionType: "firstBaseline",
            children: [
                {type: "elem", elem: inner, wrapperClasses: ["svg-align"]},
                {type: "kern", size: -(inner.height + imgShift)},
                {type: "elem", elem: img},
                {type: "kern", size: ruleWidth},
            ],
        }, options);

        if (!group.index) {
            return makeSpan(["mord", "sqrt"], [body], options);
        } else {
            // Handle the optional root index

            // The index is always in scriptscript style
            const newOptions = options.havingStyle(Style.SCRIPTSCRIPT);
            const rootm = html.buildGroup(group.index, newOptions, options);

            // The amount the index is shifted by. This is taken from the TeX
            // source, in the definition of `\r@@t`.
            const toShift = 0.6 * (body.height - body.depth);

            // Build a VList with the superscript shifted up correctly
            const rootVList = makeVList({
                positionType: "shift",
                positionData: -toShift,
                children: [{type: "elem", elem: rootm}],
            }, options);
            // Add a class surrounding it so we can add on the appropriate
            // kerning
            const rootVListWrap = makeSpan(["root"], [rootVList]);

            return makeSpan(["mord", "sqrt"],
                [rootVListWrap, body], options);
        }
    },
    mathmlBuilder(group, options) {
        const {body, index} = group;
        return index ?
            new MathNode(
                "mroot", [
                    mml.buildGroup(body, options),
                    mml.buildGroup(index, options),
                ]) :
            new MathNode(
                "msqrt", [mml.buildGroup(body, options)]);
    },
});

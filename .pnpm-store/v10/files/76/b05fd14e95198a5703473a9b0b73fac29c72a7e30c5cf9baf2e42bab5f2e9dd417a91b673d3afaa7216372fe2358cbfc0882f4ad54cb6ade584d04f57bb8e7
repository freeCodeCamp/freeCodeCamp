import {makeSpan} from "../buildCommon";
import defineFunction from "../defineFunction";
import {MathNode} from "../mathMLTree";
import {assertNodeType} from "../parseNode";
import {calculateSize, makeEm} from "../units";

defineFunction({
    type: "rule",
    names: ["\\rule"],
    props: {
        numArgs: 2,
        numOptionalArgs: 1,
        allowedInText: true,
        allowedInMath: true,
        argTypes: ["size", "size", "size"],
    },
    handler({parser}, args, optArgs) {
        const shift = optArgs[0];
        const width = assertNodeType(args[0], "size");
        const height = assertNodeType(args[1], "size");
        return {
            type: "rule",
            mode: parser.mode,
            shift: shift && assertNodeType(shift, "size").value,
            width: width.value,
            height: height.value,
        };
    },
    htmlBuilder(group, options) {
        // Make an empty span for the rule
        const rule = makeSpan(["mord", "rule"], [], options);

        // Calculate the shift, width, and height of the rule, and account for units
        const width = calculateSize(group.width, options);
        const height = calculateSize(group.height, options);
        const shift = (group.shift) ? calculateSize(group.shift, options) : 0;

        // Style the rule to the right size
        rule.style.borderRightWidth = makeEm(width);
        rule.style.borderTopWidth = makeEm(height);
        rule.style.bottom = makeEm(shift);

        // Record the height and width
        rule.width = width;
        rule.height = height + shift;
        rule.depth = -shift;
        // Font size is the number large enough that the browser will
        // reserve at least `absHeight` space above the baseline.
        // The 1.125 factor was empirically determined
        rule.maxFontSize = height * 1.125 * options.sizeMultiplier;

        return rule;
    },
    mathmlBuilder(group, options) {
        const width = calculateSize(group.width, options);
        const height = calculateSize(group.height, options);
        const shift = (group.shift) ? calculateSize(group.shift, options) : 0;
        const color = options.color && options.getColor() || "black";

        const rule = new MathNode("mspace");
        rule.setAttribute("mathbackground", color);
        rule.setAttribute("width", makeEm(width));
        rule.setAttribute("height", makeEm(height));

        const wrapper = new MathNode("mpadded", [rule]);
        if (shift >= 0) {
            wrapper.setAttribute("height", makeEm(shift));
        } else {
            wrapper.setAttribute("height", makeEm(shift));
            wrapper.setAttribute("depth", makeEm(-shift));
        }
        wrapper.setAttribute("voffset", makeEm(shift));

        return wrapper;
    },
});

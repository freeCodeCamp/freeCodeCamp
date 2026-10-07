// Horizontal spacing commands

import defineFunction from "../defineFunction";
import {makeGlue} from "../buildCommon";
import {SpaceNode} from "../mathMLTree";
import {calculateSize} from "../units";
import {assertNodeType} from "../parseNode";

// TODO: \hskip and \mskip should support plus and minus in lengths

defineFunction({
    type: "kern",
    names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
    props: {
        numArgs: 1,
        argTypes: ["size"],
        primitive: true,
        allowedInText: true,
    },
    handler({parser, funcName}, args) {
        const size = assertNodeType(args[0], "size");
        if (parser.settings.strict) {
            const mathFunction = (funcName[1] === 'm');  // \mkern, \mskip
            const muUnit = (size.value.unit === 'mu');
            if (mathFunction) {
                if (!muUnit) {
                    parser.settings.reportNonstrict("mathVsTextUnits",
                        `LaTeX's ${funcName} supports only mu units, ` +
                        `not ${size.value.unit} units`);
                }
                if (parser.mode !== "math") {
                    parser.settings.reportNonstrict("mathVsTextUnits",
                        `LaTeX's ${funcName} works only in math mode`);
                }
            } else {  // !mathFunction
                if (muUnit) {
                    parser.settings.reportNonstrict("mathVsTextUnits",
                        `LaTeX's ${funcName} doesn't support mu units`);
                }
            }
        }
        return {
            type: "kern",
            mode: parser.mode,
            dimension: size.value,
        };
    },
    htmlBuilder(group, options) {
        return makeGlue(group.dimension, options);
    },
    mathmlBuilder(group, options) {
        const dimension = calculateSize(group.dimension, options);
        return new SpaceNode(dimension);
    },
});

import defineFunction, {ordargument} from "../defineFunction";
import {makeFragment} from "../buildCommon";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

defineFunction({
    type: "htmlmathml",
    names: ["\\html@mathml"],
    props: {
        numArgs: 2,
        allowedInArgument: true,
        allowedInText: true,
    },
    handler: ({parser}, args) => {
        return {
            type: "htmlmathml",
            mode: parser.mode,
            html:   ordargument(args[0]),
            mathml: ordargument(args[1]),
        };
    },
    htmlBuilder: (group, options) => {
        const elements = html.buildExpression(
            group.html,
            options,
            false
        );
        return makeFragment(elements);
    },
    mathmlBuilder: (group, options) => {
        return mml.buildExpressionRow(group.mathml, options);
    },
});

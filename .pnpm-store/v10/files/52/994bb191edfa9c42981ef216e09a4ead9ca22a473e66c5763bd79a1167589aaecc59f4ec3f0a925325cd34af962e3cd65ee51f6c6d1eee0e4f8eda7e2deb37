import {defineFunctionBuilders} from "../defineFunction";
import {makeFragment, makeSpan} from "../buildCommon";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

defineFunctionBuilders({
    type: "ordgroup",
    htmlBuilder(group, options) {
        if (group.semisimple) {
            return makeFragment(
                html.buildExpression(group.body, options, false));
        }
        return makeSpan(
            ["mord"], html.buildExpression(group.body, options, true), options);
    },
    mathmlBuilder(group, options) {
        return mml.buildExpressionRow(group.body, options, true);
    },
});

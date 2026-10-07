import defineFunction, {ordargument} from "../defineFunction";
import {makeFragment} from "../buildCommon";
import {MathNode} from "../mathMLTree";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

// \hbox is provided for compatibility with LaTeX \vcenter.
// In LaTeX, \vcenter can act only on a box, as in
// \vcenter{\hbox{$\frac{a+b}{\dfrac{c}{d}}$}}
// This function by itself doesn't do anything but prevent a soft line break.

defineFunction({
    type: "hbox",
    names: ["\\hbox"],
    props: {
        numArgs: 1,
        argTypes: ["text"],
        allowedInText: true,
        primitive: true,
    },
    handler({parser}, args) {
        return {
            type: "hbox",
            mode: parser.mode,
            body: ordargument(args[0]),
        };
    },
    htmlBuilder(group, options) {
        const elements = html.buildExpression(group.body, options, false);
        return makeFragment(elements);
    },
    mathmlBuilder(group, options) {
        return new MathNode(
          "mrow", mml.buildExpression(group.body, options)
        );
    },
});

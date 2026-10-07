import defineFunction, {ordargument} from "../defineFunction";
import {makeSpan} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import * as html from "../buildHTML";
import * as mml from "../buildMathML";
import {binrelClass} from "./mclass";

import type {ParseNode} from "../parseNode";

// \pmb is a simulation of bold font.
// The version of \pmb in ambsy.sty works by typesetting three copies
// with small offsets. We use CSS text-shadow.
// It's a hack. Not as good as a real bold font. Better than nothing.

defineFunction({
    type: "pmb",
    names: ["\\pmb"],
    props: {
        numArgs: 1,
        allowedInText: true,
    },
    handler({parser}, args) {
        return {
            type: "pmb",
            mode: parser.mode,
            mclass: binrelClass(args[0]),
            body: ordargument(args[0]),
        };
    },
    htmlBuilder(group: ParseNode<"pmb">, options) {
        const elements = html.buildExpression(group.body, options, true);
        const node = makeSpan([group.mclass], elements, options);
        node.style.textShadow = "0.02em 0.01em 0.04px";
        return node;
    },
    mathmlBuilder(group: ParseNode<"pmb">, style) {
        const inner = mml.buildExpression(group.body, style);
        // Wrap with an <mstyle> element.
        const node = new MathNode("mstyle", inner);
        node.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px");
        return node;
    },
});

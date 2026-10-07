// Horizontal overlap functions
import defineFunction from "../defineFunction";
import {makeSpan, makeVList} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import {stretchyMathML, stretchySvg} from "../stretchy";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

import type {ParseNode} from "../parseNode";

defineFunction({
    type: "accentUnder",
    names: [
        "\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow",
        "\\undergroup", "\\underlinesegment", "\\utilde",
    ],
    props: {
        numArgs: 1,
    },
    handler: ({parser, funcName}, args) => {
        const base = args[0];
        return {
            type: "accentUnder",
            mode: parser.mode,
            label: funcName,
            base: base,
        };
    },
    htmlBuilder: (group: ParseNode<"accentUnder">, options) => {
        // Treat under accents much like underlines.
        const innerGroup = html.buildGroup(group.base, options);

        const accentBody = stretchySvg(group, options);
        const kern = group.label === "\\utilde" ? 0.12 : 0;

        // Generate the vlist, with the appropriate kerns
        const vlist = makeVList({
            positionType: "top",
            positionData: innerGroup.height,
            children: [
                {type: "elem", elem: accentBody, wrapperClasses: ["svg-align"]},
                {type: "kern", size: kern},
                {type: "elem", elem: innerGroup},
            ],
        }, options);

        return makeSpan(["mord", "accentunder"], [vlist], options);
    },
    mathmlBuilder: (group, options) => {
        const accentNode = stretchyMathML(group.label);
        const node = new MathNode(
            "munder",
            [mml.buildGroup(group.base, options), accentNode]
        );
        node.setAttribute("accentunder", "true");
        return node;
    },
});

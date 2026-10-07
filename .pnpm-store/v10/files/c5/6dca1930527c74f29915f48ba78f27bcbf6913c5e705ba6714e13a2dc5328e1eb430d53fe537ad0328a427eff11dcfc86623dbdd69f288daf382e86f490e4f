import defineFunction from "../defineFunction";
import {makeVList} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import {assertNodeType} from "../parseNode";
import {calculateSize} from "../units";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

// Box manipulation
defineFunction({
    type: "raisebox",
    names: ["\\raisebox"],
    props: {
        numArgs: 2,
        argTypes: ["size", "hbox"],
        allowedInText: true,
    },
    handler({parser}, args) {
        const amount = assertNodeType(args[0], "size").value;
        const body = args[1];
        return {
            type: "raisebox",
            mode: parser.mode,
            dy: amount,
            body,
        };
    },
    htmlBuilder(group, options) {
        const body = html.buildGroup(group.body, options);
        const dy = calculateSize(group.dy, options);
        return makeVList({
            positionType: "shift",
            positionData: -dy,
            children: [{type: "elem", elem: body}],
        }, options);
    },
    mathmlBuilder(group, options) {
        const node = new MathNode(
            "mpadded", [mml.buildGroup(group.body, options)]);
        const dy = group.dy.number + group.dy.unit;
        node.setAttribute("voffset", dy);
        return node;
    },
});

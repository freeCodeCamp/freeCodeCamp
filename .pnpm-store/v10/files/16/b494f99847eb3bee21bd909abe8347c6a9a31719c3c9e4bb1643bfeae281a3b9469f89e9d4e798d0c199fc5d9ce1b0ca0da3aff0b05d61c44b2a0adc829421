import defineFunction, {ordargument} from "../defineFunction";
import defineMacro from "../defineMacro";
import {makeFragment, makeSpan} from "../buildCommon";
import {MathNode} from "../mathMLTree";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

defineFunction({
    type: "phantom",
    names: ["\\phantom"],
    props: {
        numArgs: 1,
        allowedInText: true,
    },
    handler: ({parser}, args) => {
        const body = args[0];
        return {
            type: "phantom",
            mode: parser.mode,
            body: ordargument(body),
        };
    },
    htmlBuilder: (group, options) => {
        const elements = html.buildExpression(
            group.body,
            options.withPhantom(),
            false
        );

        // \phantom isn't supposed to affect the elements it contains.
        // See "color" for more details.
        return makeFragment(elements);
    },
    mathmlBuilder: (group, options) => {
        const inner = mml.buildExpression(group.body, options);
        return new MathNode("mphantom", inner);
    },
});

defineMacro("\\hphantom", "\\smash{\\phantom{#1}}");

defineFunction({
    type: "vphantom",
    names: ["\\vphantom"],
    props: {
        numArgs: 1,
        allowedInText: true,
    },
    handler: ({parser}, args) => {
        const body = args[0];
        return {
            type: "vphantom",
            mode: parser.mode,
            body,
        };
    },
    htmlBuilder: (group, options) => {
        const inner = makeSpan(
            ["inner"],
            [html.buildGroup(group.body, options.withPhantom())]);
        const fix = makeSpan(["fix"], []);
        return makeSpan(
            ["mord", "rlap"], [inner, fix], options);
    },
    mathmlBuilder: (group, options) => {
        const inner = mml.buildExpression(ordargument(group.body), options);
        const phantom = new MathNode("mphantom", inner);
        const node = new MathNode("mpadded", [phantom]);
        node.setAttribute("width", "0px");
        return node;
    },
});

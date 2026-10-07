import defineFunction, {ordargument} from "../defineFunction";
import {makeAnchor} from "../buildCommon";
import {assertNodeType} from "../parseNode";
import {MathNode} from "../mathMLTree";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";
import type {ParseNode} from "../parseNode";

defineFunction({
    type: "href",
    names: ["\\href"],
    props: {
        numArgs: 2,
        argTypes: ["url", "original"],
        allowedInText: true,
    },
    handler: ({parser}, args) => {
        const body = args[1];
        const href = assertNodeType(args[0], "url").url;

        if (!parser.settings.isTrusted({
            command: "\\href",
            url: href,
        })) {
            return parser.formatUnsupportedCmd("\\href");
        }

        return {
            type: "href",
            mode: parser.mode,
            href,
            body: ordargument(body),
        };
    },
    htmlBuilder: (group, options) => {
        const elements = html.buildExpression(group.body, options, false);
        return makeAnchor(group.href, [], elements, options);
    },
    mathmlBuilder: (group, options) => {
        let math = mml.buildExpressionRow(group.body, options);
        if (!(math instanceof MathNode)) {
            math = new MathNode("mrow", [math]);
        }
        (math as MathNode).setAttribute("href", group.href);
        return math;
    },
});

defineFunction({
    type: "href",
    names: ["\\url"],
    props: {
        numArgs: 1,
        argTypes: ["url"],
        allowedInText: true,
    },
    handler: ({parser}, args) => {
        const href = assertNodeType(args[0], "url").url;

        if (!parser.settings.isTrusted({
            command: "\\url",
            url: href,
        })) {
            return parser.formatUnsupportedCmd("\\url");
        }

        const chars: ParseNode<"textord">[] = [];
        for (let i = 0; i < href.length; i++) {
            let c = href[i];
            if (c === "~") {
                c = "\\textasciitilde";
            }
            chars.push({
                type: "textord",
                mode: "text",
                text: c,
            });
        }
        const body: ParseNode<"text"> = {
            type: "text",
            mode: parser.mode,
            font: "\\texttt",
            body: chars,
        };
        return {
            type: "href",
            mode: parser.mode,
            href,
            body: ordargument(body),
        };
    },
});

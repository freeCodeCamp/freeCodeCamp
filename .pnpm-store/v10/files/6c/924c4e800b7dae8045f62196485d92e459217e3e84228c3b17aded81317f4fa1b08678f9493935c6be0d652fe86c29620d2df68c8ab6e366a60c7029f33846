import {defineFunctionBuilders} from "../defineFunction";
import {makeOrd} from "../buildCommon";
import {MathNode} from "../mathMLTree";

import * as mml from "../buildMathML";

import type {ParseNode} from "../parseNode";

// "mathord" and "textord" ParseNodes created in Parser.js from symbol Groups in
// src/symbols.js.

const defaultVariant: Record<string, string> = {
    "mi": "italic",
    "mn": "normal",
    "mtext": "normal",
};

defineFunctionBuilders({
    type: "mathord",
    htmlBuilder(group, options) {
        return makeOrd(group, options, "mathord");
    },
    mathmlBuilder(group: ParseNode<"mathord">, options) {
        const node = new MathNode(
            "mi",
            [mml.makeText(group.text, group.mode, options)]);

        const variant = mml.getVariant(group, options) || "italic";
        if (variant !== defaultVariant[node.type]) {
            node.setAttribute("mathvariant", variant);
        }
        return node;
    },
});

defineFunctionBuilders({
    type: "textord",
    htmlBuilder(group, options) {
        return makeOrd(group, options, "textord");
    },
    mathmlBuilder(group: ParseNode<"textord">, options) {
        const text = mml.makeText(group.text, group.mode, options);
        const variant = mml.getVariant(group, options) || "normal";

        let node;
        if (group.mode === 'text') {
            node = new MathNode("mtext", [text]);
        } else if (/[0-9]/.test(group.text)) {
            node = new MathNode("mn", [text]);
        } else if (group.text === "\\prime") {
            node = new MathNode("mo", [text]);
        } else {
            node = new MathNode("mi", [text]);
        }
        if (variant !== defaultVariant[node.type]) {
            node.setAttribute("mathvariant", variant);
        }

        return node;
    },
});

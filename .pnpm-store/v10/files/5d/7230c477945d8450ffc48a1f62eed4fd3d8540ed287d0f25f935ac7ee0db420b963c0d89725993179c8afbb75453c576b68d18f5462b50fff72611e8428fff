import {defineFunctionBuilders} from "../defineFunction";
import {mathsym} from "../buildCommon";
import {MathNode} from "../mathMLTree";

import * as mml from "../buildMathML";

// Operator ParseNodes created in Parser.js from symbol Groups in src/symbols.js.

defineFunctionBuilders({
    type: "atom",
    htmlBuilder(group, options) {
        return mathsym(
            group.text, group.mode, options, ["m" + group.family]);
    },
    mathmlBuilder(group, options) {
        const node = new MathNode(
            "mo", [mml.makeText(group.text, group.mode)]);
        if (group.family === "bin") {
            const variant = mml.getVariant(group, options);
            if (variant === "bold-italic") {
                node.setAttribute("mathvariant", variant);
            }
        } else if (group.family === "punct") {
            node.setAttribute("separator", "true");
        } else if (group.family === "open" || group.family === "close") {
            // Delims built here should not stretch vertically.
            // See delimsizing.js for stretchy delims.
            node.setAttribute("stretchy", "false");
        }
        return node;
    },
});

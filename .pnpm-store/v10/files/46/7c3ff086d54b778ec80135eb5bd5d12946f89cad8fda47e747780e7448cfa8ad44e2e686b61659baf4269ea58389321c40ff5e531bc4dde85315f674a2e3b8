// Row breaks within tabular environments, and line breaks at top level

import defineFunction from "../defineFunction";
import {makeSpan} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import {calculateSize, makeEm} from "../units";
import {assertNodeType} from "../parseNode";

// \DeclareRobustCommand\\{...\@xnewline}
defineFunction({
    type: "cr",
    names: ["\\\\"],
    props: {
        numArgs: 0,
        numOptionalArgs: 0,
        allowedInText: true,
    },

    handler({parser}, args, optArgs) {
        const size = parser.gullet.future().text === "[" ?
            parser.parseSizeGroup(true) : null;
        const newLine = !parser.settings.displayMode ||
            !parser.settings.useStrictBehavior(
                "newLineInDisplayMode", "In LaTeX, \\\\ or \\newline " +
                "does nothing in display mode");
        return {
            type: "cr",
            mode: parser.mode,
            newLine,
            size: size && assertNodeType(size, "size").value,
        };
    },

    // The following builders are called only at the top level,
    // not within tabular/array environments.

    htmlBuilder(group, options) {
        const span = makeSpan(["mspace"], [], options);
        if (group.newLine) {
            span.classes.push("newline");
            if (group.size) {
                span.style.marginTop =
                    makeEm(calculateSize(group.size, options));
            }
        }
        return span;
    },

    mathmlBuilder(group, options) {
        const node = new MathNode("mspace");
        if (group.newLine) {
            node.setAttribute("linebreak", "newline");
            if (group.size) {
                node.setAttribute("height",
                    makeEm(calculateSize(group.size, options)));
            }
        }
        return node;
    },
});

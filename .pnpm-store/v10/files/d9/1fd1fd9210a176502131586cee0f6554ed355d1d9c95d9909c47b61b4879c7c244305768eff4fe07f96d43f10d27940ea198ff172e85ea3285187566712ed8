// Horizontal overlap functions
import defineFunction from "../defineFunction";
import {makeSpan} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import {makeEm} from "../units";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

defineFunction({
    type: "lap",
    names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
    props: {
        numArgs: 1,
        allowedInText: true,
    },
    handler: ({parser, funcName}, args) => {
        const body = args[0];
        return {
            type: "lap",
            mode: parser.mode,
            alignment: funcName.slice(5),
            body,
        };
    },
    htmlBuilder: (group, options) => {
        // mathllap, mathrlap, mathclap
        let inner;
        if (group.alignment === "clap") {
            // ref: https://www.math.lsu.edu/~aperlis/publications/mathclap/
            inner = makeSpan(
                [], [html.buildGroup(group.body, options)]);
            // wrap, since CSS will center a .clap > .inner > span
            inner = makeSpan(["inner"], [inner], options);
        } else {
            inner = makeSpan(
                ["inner"], [html.buildGroup(group.body, options)]);
        }
        const fix = makeSpan(["fix"], []);
        let node = makeSpan(
            [group.alignment], [inner, fix], options);

        // At this point, we have correctly set horizontal alignment of the
        // two items involved in the lap.
        // Next, use a strut to set the height of the HTML bounding box.
        // Otherwise, a tall argument may be misplaced.
        // This code resolved issue #1153
        const strut = makeSpan(["strut"]);
        strut.style.height = makeEm(node.height + node.depth);
        if (node.depth) {
            strut.style.verticalAlign = makeEm(-node.depth);
        }
        node.children.unshift(strut);

        // Next, prevent vertical misplacement when next to something tall.
        // This code resolves issue #1234
        node = makeSpan(["thinbox"], [node], options);
        return makeSpan(["mord", "vbox"], [node], options);
    },
    mathmlBuilder: (group, options) => {
        // mathllap, mathrlap, mathclap
        const node = new MathNode(
            "mpadded", [mml.buildGroup(group.body, options)]);

        if (group.alignment !== "rlap")    {
            const offset = (group.alignment === "llap" ? "-1" : "-0.5");
            node.setAttribute("lspace", offset + "width");
        }
        node.setAttribute("width", "0px");

        return node;
    },
});

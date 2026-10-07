// smash, with optional [tb], as in AMS
import defineFunction from "../defineFunction";
import {makeSpan, makeVList} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import {assertNodeType, assertSymbolNodeType} from "../parseNode";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

defineFunction({
    type: "smash",
    names: ["\\smash"],
    props: {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: true,
    },
    handler: ({parser}, args, optArgs) => {
        let smashHeight = false;
        let smashDepth = false;
        const tbArg = optArgs[0] && assertNodeType(optArgs[0], "ordgroup");
        if (tbArg) {
            // Optional [tb] argument is engaged.
            // ref: amsmath: \renewcommand{\smash}[1][tb]{%
            //               def\mb@t{\ht}\def\mb@b{\dp}\def\mb@tb{\ht\z@\z@\dp}%
            let letter = "";
            for (let i = 0; i < tbArg.body.length; ++i) {
                const node = tbArg.body[i];
                letter = assertSymbolNodeType(node).text;
                if (letter === "t") {
                    smashHeight = true;
                } else if (letter === "b") {
                    smashDepth = true;
                } else {
                    smashHeight = false;
                    smashDepth = false;
                    break;
                }
            }
        } else {
            smashHeight = true;
            smashDepth = true;
        }

        const body = args[0];
        return {
            type: "smash",
            mode: parser.mode,
            body,
            smashHeight,
            smashDepth,
        };
    },
    htmlBuilder: (group, options) => {
        const node = makeSpan(
            [], [html.buildGroup(group.body, options)]);

        if (!group.smashHeight && !group.smashDepth) {
            return node;
        }

        if (group.smashHeight) {
            node.height = 0;
        }

        if (group.smashDepth) {
            node.depth = 0;
        }

        if (group.smashHeight && group.smashDepth) {
            // Symmetric \smash can stay in inline layout.
            return makeSpan(["mord", "smash"], [node], options);
        }

        // In order to influence makeVList for asymmetric smashing, we have to
        // reset the children.
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                if (group.smashHeight) {
                    node.children[i].height = 0;
                }
                if (group.smashDepth) {
                    node.children[i].depth = 0;
                }
            }
        }

        // At this point, we've reset the TeX-like height and depth values.
        // But the span still has an HTML line height.
        // makeVList applies "display: table-cell", which prevents the browser
        // from acting on that line height. So we'll call makeVList now.

        const smashedNode = makeVList({
            positionType: "firstBaseline",
            children: [{type: "elem", elem: node}],
        }, options);

        // For spacing, TeX treats \smash as a math group (same spacing as ord).
        return makeSpan(["mord"], [smashedNode], options);
    },
    mathmlBuilder: (group, options) => {
        const node = new MathNode(
            "mpadded", [mml.buildGroup(group.body, options)]);

        if (group.smashHeight) {
            node.setAttribute("height", "0px");
        }

        if (group.smashDepth) {
            node.setAttribute("depth", "0px");
        }

        return node;
    },
});

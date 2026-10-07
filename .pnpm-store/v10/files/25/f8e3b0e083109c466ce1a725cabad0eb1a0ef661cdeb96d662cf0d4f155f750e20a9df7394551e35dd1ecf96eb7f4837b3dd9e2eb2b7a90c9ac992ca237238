import defineFunction from "../defineFunction";
import {makeSpan, makeVList} from "../buildCommon";
import {MathNode} from "../mathMLTree";
import {stretchyMathML, stretchySvg} from "../stretchy";
import Style from "../Style";
import {assertNodeType} from "../parseNode";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

import type {HtmlBuilderSupSub, MathMLBuilder} from "../defineFunction";
import type {ParseNode} from "../parseNode";

// NOTE: Unlike most `htmlBuilder`s, this one handles not only "horizBrace", but
// also "supsub" since an over/underbrace can affect super/subscripting.
export const htmlBuilder: HtmlBuilderSupSub<"horizBrace"> = (grp, options) => {
    const style = options.style;

    // Pull out the `ParseNode<"horizBrace">` if `grp` is a "supsub" node.
    let supSubGroup;
    let group: ParseNode<"horizBrace">;
    if (grp.type === "supsub") {
        // Ref: LaTeX source2e: }}}}\limits}
        // i.e. LaTeX treats the brace similar to an op and passes it
        // with \limits, so we need to assign supsub style.
        supSubGroup = grp.sup ?
            html.buildGroup(grp.sup, options.havingStyle(style.sup()), options) :
            html.buildGroup(grp.sub, options.havingStyle(style.sub()), options);
        group = assertNodeType(grp.base, "horizBrace");
    } else {
        group = assertNodeType(grp, "horizBrace");
    }

    // Build the base group
    const body = html.buildGroup(
        group.base, options.havingBaseStyle(Style.DISPLAY));

    // Create the stretchy element
    const braceBody = stretchySvg(group, options);

    // Generate the vlist, with the appropriate kerns        ┏━━━━━━━━┓
    // This first vlist contains the content and the brace:   equation
    let vlist;
    if (group.isOver) {
        vlist = makeVList({
            positionType: "firstBaseline",
            children: [
                {type: "elem", elem: body},
                {type: "kern", size: 0.1},
                {type: "elem", elem: braceBody},
            ],
        }, options);
        // TODO(ts): Replace this with passing "svg-align" into makeVList.
        (vlist as any).children[0].children[0].children[1].classes.push("svg-align");
    } else {
        vlist = makeVList({
            positionType: "bottom",
            positionData: body.depth + 0.1 + braceBody.height,
            children: [
                {type: "elem", elem: braceBody},
                {type: "kern", size: 0.1},
                {type: "elem", elem: body},
            ],
        }, options);
        // TODO(ts): Replace this with passing "svg-align" into makeVList.
        (vlist as any).children[0].children[0].children[0].classes.push("svg-align");
    }

    if (supSubGroup) {
        // To write the supsub, wrap the first vlist in another vlist:
        // They can't all go in the same vlist, because the note might be
        // wider than the equation. We want the equation to control the
        // brace width.

        //      note          long note           long note
        //   ┏━━━━━━━━┓   or    ┏━━━┓     not    ┏━━━━━━━━━┓
        //    equation           eqn                 eqn

        const vSpan = makeSpan(
            ["minner", (group.isOver ? "mover" : "munder")],
            [vlist], options);

        if (group.isOver) {
            vlist = makeVList({
                positionType: "firstBaseline",
                children: [
                    {type: "elem", elem: vSpan},
                    {type: "kern", size: 0.2},
                    {type: "elem", elem: supSubGroup},
                ],
            }, options);
        } else {
            vlist = makeVList({
                positionType: "bottom",
                positionData: vSpan.depth + 0.2 + supSubGroup.height +
                    supSubGroup.depth,
                children: [
                    {type: "elem", elem: supSubGroup},
                    {type: "kern", size: 0.2},
                    {type: "elem", elem: vSpan},
                ],
            }, options);
        }
    }

    return makeSpan(
        ["minner", (group.isOver ? "mover" : "munder")], [vlist], options);
};

const mathmlBuilder: MathMLBuilder<"horizBrace"> = (group, options) => {
    const accentNode = stretchyMathML(group.label);
    return new MathNode(
        (group.isOver ? "mover" : "munder"),
        [mml.buildGroup(group.base, options), accentNode]
    );
};

// Horizontal stretchy braces
defineFunction({
    type: "horizBrace",
    names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"],
    props: {
        numArgs: 1,
    },
    handler({parser, funcName}, args) {
        return {
            type: "horizBrace",
            mode: parser.mode,
            label: funcName,
            isOver: funcName.includes("\\over"),
            base: args[0],
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

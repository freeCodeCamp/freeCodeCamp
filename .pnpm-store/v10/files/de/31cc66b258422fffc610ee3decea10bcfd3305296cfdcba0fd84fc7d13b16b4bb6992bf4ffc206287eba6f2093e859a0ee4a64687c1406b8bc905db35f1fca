import {makeSpan} from "../buildCommon";
import defineFunction from "../defineFunction";
import {makeLeftRightDelim, makeSizedDelim, sizeToMaxHeight} from "../delimiter";
import {MathNode} from "../mathMLTree";
import ParseError from "../ParseError";
import {assertNodeType, checkSymbolNodeType} from "../parseNode";
import {makeEm} from "../units";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

import type Options from "../Options";
import type {AnyParseNode, ParseNode, SymbolParseNode} from "../parseNode";
import type {FunctionContext} from "../defineFunction";

// Extra data needed for the delimiter handler down below
const delimiterSizes: Record<string, {
    mclass: "mopen" | "mclose" | "mrel" | "mord";
    size: 1 | 2 | 3 | 4;
}> = {
    "\\bigl" : {mclass: "mopen",    size: 1},
    "\\Bigl" : {mclass: "mopen",    size: 2},
    "\\biggl": {mclass: "mopen",    size: 3},
    "\\Biggl": {mclass: "mopen",    size: 4},
    "\\bigr" : {mclass: "mclose",   size: 1},
    "\\Bigr" : {mclass: "mclose",   size: 2},
    "\\biggr": {mclass: "mclose",   size: 3},
    "\\Biggr": {mclass: "mclose",   size: 4},
    "\\bigm" : {mclass: "mrel",     size: 1},
    "\\Bigm" : {mclass: "mrel",     size: 2},
    "\\biggm": {mclass: "mrel",     size: 3},
    "\\Biggm": {mclass: "mrel",     size: 4},
    "\\big"  : {mclass: "mord",     size: 1},
    "\\Big"  : {mclass: "mord",     size: 2},
    "\\bigg" : {mclass: "mord",     size: 3},
    "\\Bigg" : {mclass: "mord",     size: 4},
};

const delimiters = new Set([
    "(", "\\lparen", ")", "\\rparen",
    "[", "\\lbrack", "]", "\\rbrack",
    "\\{", "\\lbrace", "\\}", "\\rbrace",
    "\\lfloor", "\\rfloor", "\u230a", "\u230b",
    "\\lceil", "\\rceil", "\u2308", "\u2309",
    "<", ">", "\\langle", "\u27e8", "\\rangle", "\u27e9", "\\lt", "\\gt",
    "\\lvert", "\\rvert", "\\lVert", "\\rVert",
    "\\lgroup", "\\rgroup", "\u27ee", "\u27ef",
    "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1",
    "/", "\\backslash",
    "|", "\\vert", "\\|", "\\Vert",
    "\\uparrow", "\\Uparrow",
    "\\downarrow", "\\Downarrow",
    "\\updownarrow", "\\Updownarrow",
    ".",
]);

type IsMiddle = {delim: string, options: Options};

// Delimiter functions
function checkDelimiter(
    delim: AnyParseNode,
    context: FunctionContext,
): SymbolParseNode {
    const symDelim = checkSymbolNodeType(delim);
    if (symDelim && delimiters.has(symDelim.text)) {
        return symDelim;
    } else if (symDelim) {
        throw new ParseError(
            `Invalid delimiter '${symDelim.text}' after '${context.funcName}'`,
            delim);
    } else {
        throw new ParseError(`Invalid delimiter type '${delim.type}'`, delim);
    }
}

defineFunction({
    type: "delimsizing",
    names: [
        "\\bigl", "\\Bigl", "\\biggl", "\\Biggl",
        "\\bigr", "\\Bigr", "\\biggr", "\\Biggr",
        "\\bigm", "\\Bigm", "\\biggm", "\\Biggm",
        "\\big",  "\\Big",  "\\bigg",  "\\Bigg",
    ],
    props: {
        numArgs: 1,
        argTypes: ["primitive"],
    },
    handler: (context, args) => {
        const delim = checkDelimiter(args[0], context);

        return {
            type: "delimsizing",
            mode: context.parser.mode,
            size: delimiterSizes[context.funcName].size,
            mclass: delimiterSizes[context.funcName].mclass,
            delim: delim.text,
        };
    },
    htmlBuilder: (group, options) => {
        if (group.delim === ".") {
            // Empty delimiters still count as elements, even though they don't
            // show anything.
            return makeSpan([group.mclass]);
        }

        return makeSizedDelim(
                group.delim, group.size, options, group.mode, [group.mclass]);
    },
    mathmlBuilder: (group) => {
        const children = [];

        if (group.delim !== ".") {
            children.push(mml.makeText(group.delim, group.mode));
        }

        const node = new MathNode("mo", children);

        if (group.mclass === "mopen" ||
            group.mclass === "mclose") {
            // Only some of the delimsizing functions act as fences, and they
            // return "mopen" or "mclose" mclass.
            node.setAttribute("fence", "true");
        } else {
            // Explicitly disable fencing if it's not a fence, to override the
            // defaults.
            node.setAttribute("fence", "false");
        }

        node.setAttribute("stretchy", "true");
        const size = makeEm(sizeToMaxHeight[group.size]);
        node.setAttribute("minsize", size);
        node.setAttribute("maxsize", size);

        return node;
    },
});


function assertParsed(group: ParseNode<"leftright">) {
    if (!group.body) {
        throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
    }
}


defineFunction({
    type: "leftright-right",
    names: ["\\right"],
    props: {
        numArgs: 1,
        primitive: true,
    },
    handler: (context, args) => {
        // \left case below triggers parsing of \right in
        //   `const right = parser.parseFunction();`
        // uses this return value.
        const color = context.parser.gullet.macros.get("\\current@color");
        if (color && typeof color !== "string") {
            throw new ParseError(
                "\\current@color set to non-string in \\right");
        }
        return {
            type: "leftright-right",
            mode: context.parser.mode,
            delim: checkDelimiter(args[0], context).text,
            color: color as string | null | undefined, // undefined if not set via \color
        };
    },
});


defineFunction({
    type: "leftright",
    names: ["\\left"],
    props: {
        numArgs: 1,
        primitive: true,
    },
    handler: (context, args) => {
        const delim = checkDelimiter(args[0], context);

        const parser = context.parser;
        // Parse out the implicit body
        ++parser.leftrightDepth;
        // parseExpression stops before '\\right'
        const body = parser.parseExpression(false);
        --parser.leftrightDepth;
        // Check the next token
        parser.expect("\\right", false);
        const right = assertNodeType(parser.parseFunction(), "leftright-right");
        return {
            type: "leftright",
            mode: parser.mode,
            body,
            left: delim.text,
            right: right.delim,
            rightColor: right.color,
        };
    },
    htmlBuilder: (group, options) => {
        assertParsed(group);
        // Build the inner expression
        const inner = html.buildExpression(group.body, options, true,
            ["mopen", "mclose"]);

        let innerHeight = 0;
        let innerDepth = 0;
        let hadMiddle = false;

        // Calculate its height and depth
        for (let i = 0; i < inner.length; i++) {
            // Property `isMiddle` not defined on `span`. See comment in
            // "middle"'s htmlBuilder.
            // TODO(ts)
            if ((inner[i] as any).isMiddle) {
                hadMiddle = true;
            } else {
                innerHeight = Math.max(inner[i].height, innerHeight);
                innerDepth = Math.max(inner[i].depth, innerDepth);
            }
        }

        // The size of delimiters is the same, regardless of what style we are
        // in. Thus, to correctly calculate the size of delimiter we need around
        // a group, we scale down the inner size based on the size.
        innerHeight *= options.sizeMultiplier;
        innerDepth *= options.sizeMultiplier;

        let leftDelim;
        if (group.left === ".") {
            // Empty delimiters in \left and \right make null delimiter spaces.
            leftDelim = html.makeNullDelimiter(options, ["mopen"]);
        } else {
            // Otherwise, use leftRightDelim to generate the correct sized
            // delimiter.
            leftDelim = makeLeftRightDelim(
                group.left, innerHeight, innerDepth, options,
                group.mode, ["mopen"]);
        }
        // Add it to the beginning of the expression
        inner.unshift(leftDelim);

        // Handle middle delimiters
        if (hadMiddle) {
            for (let i = 1; i < inner.length; i++) {
                const middleDelim = inner[i];
                // Property `isMiddle` not defined on `span`. See comment in
                // "middle"'s htmlBuilder.
                // TODO(ts)
                const isMiddle: IsMiddle = (middleDelim as any).isMiddle;
                if (isMiddle) {
                    // Apply the options that were active when \middle was called
                    inner[i] = makeLeftRightDelim(
                        isMiddle.delim, innerHeight, innerDepth,
                        isMiddle.options, group.mode, []);
                }
            }
        }

        let rightDelim;
        // Same for the right delimiter, but using color specified by \color
        if (group.right === ".") {
            rightDelim = html.makeNullDelimiter(options, ["mclose"]);
        } else {
            const colorOptions = group.rightColor ?
                options.withColor(group.rightColor) : options;
            rightDelim = makeLeftRightDelim(
                group.right, innerHeight, innerDepth, colorOptions,
                group.mode, ["mclose"]);
        }
        // Add it to the end of the expression.
        inner.push(rightDelim);

        return makeSpan(["minner"], inner, options);
    },
    mathmlBuilder: (group, options) => {
        assertParsed(group);
        const inner = mml.buildExpression(group.body, options);

        if (group.left !== ".") {
            const leftNode = new MathNode(
                "mo", [mml.makeText(group.left, group.mode)]);

            leftNode.setAttribute("fence", "true");

            inner.unshift(leftNode);
        }

        if (group.right !== ".") {
            const rightNode = new MathNode(
                "mo", [mml.makeText(group.right, group.mode)]);

            rightNode.setAttribute("fence", "true");

            if (group.rightColor) {
                rightNode.setAttribute("mathcolor", group.rightColor);
            }

            inner.push(rightNode);
        }

        return mml.makeRow(inner);
    },
});

defineFunction({
    type: "middle",
    names: ["\\middle"],
    props: {
        numArgs: 1,
        primitive: true,
    },
    handler: (context, args) => {
        const delim = checkDelimiter(args[0], context);
        if (!context.parser.leftrightDepth) {
            throw new ParseError("\\middle without preceding \\left", delim);
        }

        return {
            type: "middle",
            mode: context.parser.mode,
            delim: delim.text,
        };
    },
    htmlBuilder: (group, options) => {
        let middleDelim;
        if (group.delim === ".") {
            middleDelim = html.makeNullDelimiter(options, []);
        } else {
            middleDelim = makeSizedDelim(
                group.delim, 1, options,
                group.mode, []);

            const isMiddle: IsMiddle = {delim: group.delim, options};
            // Property `isMiddle` not defined on `span`. It is only used in
            // this file above.
            // TODO: Fix this violation of the `span` type and possibly rename
            // things since `isMiddle` sounds like a boolean, but is a struct.
            // TODO(ts)
            (middleDelim as any).isMiddle = isMiddle;
        }
        return middleDelim;
    },
    mathmlBuilder: (group, options) => {
        // A Firefox \middle will stretch a character vertically only if it
        // is in the fence part of the operator dictionary at:
        // https://www.w3.org/TR/MathML3/appendixc.html.
        // So we need to avoid U+2223 and use plain "|" instead.
        const textNode = (group.delim === "\\vert" || group.delim === "|")
            ? mml.makeText("|", "text")
            : mml.makeText(group.delim, group.mode);
        const middleNode = new MathNode("mo", [textNode]);
        middleNode.setAttribute("fence", "true");
        // MathML gives 5/18em spacing to each <mo> element.
        // \middle should get delimiter spacing instead.
        middleNode.setAttribute("lspace", "0.05em");
        middleNode.setAttribute("rspace", "0.05em");
        return middleNode;
    },
});

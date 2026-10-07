import {wrapFragment} from "../buildCommon";
import defineFunction from "../defineFunction";
import {MathNode} from "../mathMLTree";
import * as html from "../buildHTML";
import * as mml from "../buildMathML";
import {assertSymbolNodeType} from "../parseNode";
import ParseError from "../ParseError";
import {makeEm} from "../units";

import type Parser from "../Parser";
import type {ParseNode, AnyParseNode} from "../parseNode";

const cdArrowFunctionName: Record<string, string> = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    "A": "\\uparrow",
    "V": "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow",
};

const newCell = (): ParseNode<"styling"> => {
    // Create an empty cell, to be filled below with parse nodes.
    // The parseTree from this module must be constructed like the
    // one created by parseArray(), so an empty CD cell must
    // be a ParseNode<"styling">. And CD is always displaystyle.
    return {type: "styling", body: [], mode: "math", style: "display"};
};

const isStartOfArrow = (node: AnyParseNode) => {
    return (node.type === "textord" && node.text === "@");
};

const isLabelEnd = (node: AnyParseNode, endChar: string): boolean => {
    return ((node.type === "mathord" || node.type === "atom") &&
        node.text === endChar);
};

function cdArrow(
    arrowChar: string,
    labels: ParseNode<"ordgroup">[],
    parser: Parser
): AnyParseNode {
    // Return a parse tree of an arrow and its labels.
    // This acts in a way similar to a macro expansion.
    const funcName = cdArrowFunctionName[arrowChar];
    switch (funcName) {
        case "\\\\cdrightarrow":
        case "\\\\cdleftarrow":
            return parser.callFunction(
                funcName, [labels[0]], [labels[1]]
            );
        case "\\uparrow":
        case "\\downarrow": {
            const leftLabel = parser.callFunction(
                "\\\\cdleft", [labels[0]], []
            );
            const bareArrow: ParseNode<"atom"> = {
                type: "atom",
                text: funcName,
                mode: "math",
                family: "rel",
            };
            const sizedArrow = parser.callFunction("\\Big", [bareArrow], []);
            const rightLabel = parser.callFunction(
                "\\\\cdright", [labels[1]], []
            );
            const arrowGroup: ParseNode<"ordgroup"> = {
                type: "ordgroup",
                mode: "math",
                body: [leftLabel, sizedArrow, rightLabel],
            };
            return parser.callFunction("\\\\cdparent", [arrowGroup], []);
        }
        case "\\\\cdlongequal":
            return parser.callFunction("\\\\cdlongequal", [], []);
        case "\\Vert": {
            const arrow: ParseNode<"textord"> = {type: "textord", text: "\\Vert", mode: "math"};
            return parser.callFunction("\\Big", [arrow], []);
        }
        default:
            return {type: "textord", text: " ", mode: "math"};
    }
}

export function parseCD(parser: Parser): ParseNode<"array"> {
    // Get the array's parse nodes with \\ temporarily mapped to \cr.
    const parsedRows: AnyParseNode[][] = [];
    parser.gullet.beginGroup();
    parser.gullet.macros.set("\\cr", "\\\\\\relax");
    parser.gullet.beginGroup();
    while (true) {  // eslint-disable-line no-constant-condition
        // Get the parse nodes for the next row.
        parsedRows.push(parser.parseExpression(false, "\\\\"));
        parser.gullet.endGroup();
        parser.gullet.beginGroup();
        const next = parser.fetch().text;
        if (next === "&" || next === "\\\\") {
            parser.consume();
        } else if (next === "\\end") {
            if (parsedRows[parsedRows.length - 1].length === 0) {
                parsedRows.pop(); // final row ended in \\
            }
            break;
        } else {
            throw new ParseError("Expected \\\\ or \\cr or \\end",
                                 parser.nextToken);
        }
    }

    let row: ParseNode<"styling">[] = [];
    const body: ParseNode<"styling">[][] = [row];

    // Loop thru the parse nodes. Collect them into cells and arrows.
    for (let i = 0; i < parsedRows.length; i++) {
        // Start a new row.
        const rowNodes = parsedRows[i];
        // Create the first cell.
        let cell = newCell();

        for (let j = 0; j < rowNodes.length; j++) {
            if (!isStartOfArrow(rowNodes[j])) {
                // If a parseNode is not an arrow, it goes into a cell.
                cell.body.push(rowNodes[j]);
            } else {
                // Parse node j is an "@", the start of an arrow.
                // Before starting on the arrow, push the cell into `row`.
                row.push(cell);

                // Now collect parseNodes into an arrow.
                // The character after "@" defines the arrow type.
                j += 1;
                const arrowChar = assertSymbolNodeType(rowNodes[j]).text;

                // Create two empty label nodes. We may or may not use them.
                const labels: ParseNode<"ordgroup">[] = new Array(2);
                labels[0] = {type: "ordgroup", mode: "math", body: []};
                labels[1] = {type: "ordgroup", mode: "math", body: []};

                // Process the arrow.
                if ("=|.".includes(arrowChar)) {
                    // Three "arrows", ``@=`, `@|`, and `@.`, do not take labels.
                    // Do nothing here.
                } else if ("<>AV".includes(arrowChar)) {
                    // Four arrows, `@>>>`, `@<<<`, `@AAA`, and `@VVV`, each take
                    // two optional labels. E.g. the right-point arrow syntax is
                    // really:  @>{optional label}>{optional label}>
                    // Collect parseNodes into labels.
                    for (let labelNum = 0; labelNum < 2; labelNum++) {
                        let inLabel = true;
                        for (let k = j + 1; k < rowNodes.length; k++) {
                            if (isLabelEnd(rowNodes[k], arrowChar)) {
                                inLabel = false;
                                j = k;
                                break;
                            }
                            if (isStartOfArrow(rowNodes[k])) {
                                throw new ParseError("Missing a " + arrowChar +
                                " character to complete a CD arrow.", rowNodes[k]);
                            }

                            labels[labelNum].body.push(rowNodes[k]);
                        }
                        if (inLabel) {
                            // isLabelEnd never returned a true.
                            throw new ParseError("Missing a " + arrowChar +
                                " character to complete a CD arrow.", rowNodes[j]);
                        }
                    }
                } else {
                    throw new ParseError(`Expected one of "<>AV=|." after @`,
                        rowNodes[j]);
                }

                // Now join the arrow to its labels.
                const arrow: AnyParseNode = cdArrow(arrowChar, labels, parser);

                // Wrap the arrow in  ParseNode<"styling">.
                // This is done to match parseArray() behavior.
                const wrappedArrow: ParseNode<"styling"> = {
                    type: "styling",
                    body: [arrow],
                    mode: "math",
                    style: "display", // CD is always displaystyle.
                };
                row.push(wrappedArrow);
                // In CD's syntax, cells are implicit. That is, everything that
                // is not an arrow gets collected into a cell. So create an empty
                // cell now. It will collect upcoming parseNodes.
                cell = newCell();
            }
        }
        if (i % 2 === 0) {
            // Even-numbered rows consist of: cell, arrow, cell, arrow, ... cell
            // The last cell is not yet pushed into `row`, so:
            row.push(cell);
        } else {
            // Odd-numbered rows consist of: vert arrow, empty cell, ... vert arrow
            // Remove the empty cell that was placed at the beginning of `row`.
            row.shift();
        }
        row = [];
        body.push(row);
    }

    // End row group
    parser.gullet.endGroup();
    // End array group defining \\
    parser.gullet.endGroup();

    // define column separation.
    const cols = new Array(body[0].length).fill({
        type: "align",
        align: "c",
        pregap: 0.25,  // CD package sets \enskip between columns.
        postgap: 0.25, // So pre and post each get half an \enskip, i.e. 0.25em.
    });

    return {
        type: "array",
        mode: "math",
        body,
        arraystretch: 1,
        addJot: true,
        rowGaps: [null],
        cols,
        colSeparationType: "CD",
        hLinesBeforeRow: new Array(body.length + 1).fill([]),
    };
}

// The functions below are not available for general use.
// They are here only for internal use by the {CD} environment in placing labels
// next to vertical arrows.

// We don't need any such functions for horizontal arrows because we can reuse
// the functionality that already exists for extensible arrows.

defineFunction({
    type: "cdlabel",
    names: ["\\\\cdleft", "\\\\cdright"],
    props: {
        numArgs: 1,
    },
    handler({parser, funcName}, args) {
        return {
            type: "cdlabel",
            mode: parser.mode,
            side: funcName.slice(4),
            label: args[0],
        };
    },
    htmlBuilder(group, options) {
        const newOptions = options.havingStyle(options.style.sup());
        const label = wrapFragment(
            html.buildGroup(group.label, newOptions, options), options);
        label.classes.push("cd-label-" + group.side);
        label.style.bottom = makeEm(0.8 - label.depth);
        // Zero out label height & depth, so vertical align of arrow is set
        // by the arrow height, not by the label.
        label.height = 0;
        label.depth = 0;
        return label;
    },
    mathmlBuilder(group, options) {
        let label = new MathNode("mrow",
            [mml.buildGroup(group.label, options)]);
        label = new MathNode("mpadded", [label]);
        label.setAttribute("width", "0");
        if (group.side === "left") {
            label.setAttribute("lspace", "-1width");
        }
        // We have to guess at vertical alignment. We know the arrow is 1.8em tall,
        // But we don't know the height or depth of the label.
        label.setAttribute("voffset", "0.7em");
        label = new MathNode("mstyle", [label]);
        label.setAttribute("displaystyle", "false");
        label.setAttribute("scriptlevel", "1");
        return label;
    },
});

defineFunction({
    type: "cdlabelparent",
    names: ["\\\\cdparent"],
    props: {
        numArgs: 1,
    },
    handler({parser}, args) {
        return {
            type: "cdlabelparent",
            mode: parser.mode,
            fragment: args[0],
        };
    },
    htmlBuilder(group, options) {
        // Wrap the vertical arrow and its labels.
        // The parent gets position: relative. The child gets position: absolute.
        // So CSS can locate the label correctly.
        const parent = wrapFragment(
            html.buildGroup(group.fragment, options), options
        );
        parent.classes.push("cd-vert-arrow");
        return parent;
    },
    mathmlBuilder(group, options) {
        return new MathNode("mrow",
            [mml.buildGroup(group.fragment, options)]);
    },
});

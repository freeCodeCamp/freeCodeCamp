/**
 * This file does the main work of building a domTree structure from a parse
 * tree. The entry point is the `buildHTML` function, which takes a parse tree.
 * Then, the buildExpression, buildGroup, and various groupBuilders functions
 * are called, to produce a final HTML tree.
 */

import ParseError from "./ParseError";
import Style from "./Style";
import {makeGlue, makeSpan, tryCombineChars} from "./buildCommon";
import {Span, Anchor} from "./domTree";
import {makeEm} from "./units";
import {spacings, tightSpacings} from "./spacingData";
import {_htmlGroupBuilders as groupBuilders} from "./defineFunction";
import {DocumentFragment} from "./tree";

import type Options from "./Options";
import type {AnyParseNode} from "./parseNode";
import type {HtmlDomNode, DomSpan} from "./domTree";

// Binary atoms (first class `mbin`) change into ordinary atoms (`mord`)
// depending on their surroundings. See TeXbook pg. 442-446, Rules 5 and 6,
// and the text before Rule 19.
const binLeftCanceller = new Set([
    "leftmost", "mbin", "mopen", "mrel", "mop", "mpunct",
]);
const binRightCanceller = new Set([
    "rightmost", "mrel", "mclose", "mpunct",
]);

const styleMap = {
    "display": Style.DISPLAY,
    "text": Style.TEXT,
    "script": Style.SCRIPT,
    "scriptscript": Style.SCRIPTSCRIPT,
};

type Side = "left" | "right";

const DomEnum = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner",
};
type DomType = keyof typeof DomEnum;

/**
 * Take a list of nodes, build them in order, and return a list of the built
 * nodes. documentFragments are flattened into their contents, so the
 * returned list contains no fragments. `isRealGroup` is true if `expression`
 * is a real group (no atoms will be added on either side), as opposed to
 * a partial group (e.g. one created by \color). `surrounding` is an array
 * consisting type of nodes that will be added to the left and right.
 */
export const buildExpression = function(
    expression: AnyParseNode[],
    options: Options,
    isRealGroup: boolean | "root",
    surrounding: [DomType | null | undefined, DomType | null | undefined] = [null, null],
): HtmlDomNode[] {
    // Parse expressions into `groups`.
    const groups: HtmlDomNode[] = [];
    for (let i = 0; i < expression.length; i++) {
        const output = buildGroup(expression[i], options);
        if (output instanceof DocumentFragment) {
            const children: ReadonlyArray<HtmlDomNode> = output.children;
            groups.push(...children);
        } else {
            groups.push(output);
        }
    }

    // Combine consecutive domTree.symbolNodes into a single symbolNode.
    tryCombineChars(groups);

    // If `expression` is a partial group, let the parent handle spacings
    // to avoid processing groups multiple times.
    if (!isRealGroup) {
        return groups;
    }

    let glueOptions = options;
    if (expression.length === 1) {
        const node = expression[0];
        if (node.type === "sizing") {
            glueOptions = options.havingSize(node.size);
        } else if (node.type === "styling") {
            glueOptions = options.havingStyle(styleMap[node.style]);
        }
    }

    // Dummy spans for determining spacings between surrounding atoms.
    // If `expression` has no atoms on the left or right, class "leftmost"
    // or "rightmost", respectively, is used to indicate it.
    const dummyPrev = makeSpan([surrounding[0] || "leftmost"], [], options);
    const dummyNext = makeSpan([surrounding[1] || "rightmost"], [], options);

    // TODO: These code assumes that a node's math class is the first element
    // of its `classes` array. A later cleanup should ensure this, for
    // instance by changing the signature of `makeSpan`.

    // Before determining what spaces to insert, perform bin cancellation.
    // Binary operators change to ordinary symbols in some contexts.
    const isRoot = (isRealGroup === "root");
    traverseNonSpaceNodes(groups, (node, prev): void => {
        const prevType = prev.classes[0];
        const type = node.classes[0];
        if (prevType === "mbin" && binRightCanceller.has(type)) {
            prev.classes[0] = "mord";
        } else if (type === "mbin" && binLeftCanceller.has(prevType)) {
            node.classes[0] = "mord";
        }
    }, {node: dummyPrev}, dummyNext, isRoot);

    traverseNonSpaceNodes(groups, (node, prev): HtmlDomNode | undefined => {
        const prevType = getTypeOfDomTree(prev);
        const type = getTypeOfDomTree(node);

        // 'mtight' indicates that the node is script or scriptscript style.
        const space = prevType && type ? (node.hasClass("mtight")
            ? tightSpacings[prevType]?.[type]
            : spacings[prevType]?.[type]) : null;

        if (space) { // Insert glue (spacing) after the `prev`.
            return makeGlue(space, glueOptions);
        }
    }, {node: dummyPrev}, dummyNext, isRoot);

    return groups;
};

// Depth-first traverse non-space `nodes`, calling `callback` with the current and
// previous node as arguments, optionally returning a node to insert after the
// previous node. `prev` is an object with the previous node and `insertAfter`
// function to insert after it. `next` is a node that will be added to the right.
// Used for bin cancellation and inserting spacings.
const traverseNonSpaceNodes = function(
    nodes: HtmlDomNode[],
    callback: (arg0: HtmlDomNode, arg1: HtmlDomNode) =>
        HtmlDomNode | null | void,
    prev: {
        node: HtmlDomNode,
        insertAfter?: (arg0: HtmlDomNode) => void,
    },
    next: HtmlDomNode | null | undefined,
    isRoot: boolean,
) {
    if (next) { // temporarily append the right node, if exists
        nodes.push(next);
    }
    let i = 0;
    for (; i < nodes.length; i++) {
        const node = nodes[i];
        const partialGroup = checkPartialGroup(node);

        if (partialGroup) { // Recursive DFS
            // TODO(ts): make nodes a $ReadOnlyArray by returning a new array
            traverseNonSpaceNodes(partialGroup.children as HtmlDomNode[],
                callback, prev, null, isRoot);
            continue;
        }

        // Ignore explicit spaces (e.g., \;, \,) when determining what implicit
        // spacing should go between atoms of different classes
        const nonspace = !node.hasClass("mspace");
        if (nonspace) {
            const result = callback(node, prev.node);
            if (result) {
                if (prev.insertAfter) {
                    prev.insertAfter(result);
                } else { // insert at front
                    nodes.unshift(result);
                    i++;
                }
            }
        }

        if (nonspace) {
            prev.node = node;
        } else if (isRoot && node.hasClass("newline")) {
            prev.node = makeSpan(["leftmost"]); // treat like beginning of line
        }
        prev.insertAfter = (index => n => {
            nodes.splice(index + 1, 0, n);
            i++;
        })(i);
    }

    if (next) {
        nodes.pop();
    }
};

// Check if given node is a partial group, i.e., does not affect spacing around.
const checkPartialGroup = function(
    node: HtmlDomNode,
): DocumentFragment<HtmlDomNode> | Anchor | DomSpan | null | undefined {
    if (node instanceof DocumentFragment || node instanceof Anchor
        || (node instanceof Span && node.hasClass("enclosing"))) {
        return node;
    }
    return null;
};

// Return the outermost node of a domTree.
const getOutermostNode = function(
    node: HtmlDomNode,
    side: Side,
): HtmlDomNode {
    const partialGroup = checkPartialGroup(node);
    if (partialGroup) {
        const children = partialGroup.children;
        if (children.length) {
            if (side === "right") {
                return getOutermostNode(children[children.length - 1], "right");
            } else if (side === "left") {
                return getOutermostNode(children[0], "left");
            }
        }
    }
    return node;
};

// Return math atom class (mclass) of a domTree.
// If `side` is given, it will get the type of the outermost node at given side.
export const getTypeOfDomTree = function(
    node: HtmlDomNode | null | undefined,
    side?: Side | null | undefined,
): DomType | null | undefined {
    if (!node) {
        return null;
    }
    if (side) {
        node = getOutermostNode(node, side);
    }
    // This makes a lot of assumptions as to where the type of atom
    // appears.  We should do a better job of enforcing this.
    const className = node.classes[0] as keyof typeof DomEnum;
    return (DomEnum[className] as DomType | undefined) || null;
};
export const makeNullDelimiter = function(
    options: Options,
    classes: string[],
): DomSpan {
    const moreClasses = ["nulldelimiter"].concat(options.baseSizingClasses());
    return makeSpan(classes.concat(moreClasses));
};

/**
 * buildGroup is the function that takes a group and calls the correct groupType
 * function for it. It also handles the interaction of size and style changes
 * between parents and children.
 */
export const buildGroup = function(
    group: AnyParseNode | null | undefined,
    options: Options,
    baseOptions?: Options,
): HtmlDomNode {
    if (!group) {
        return makeSpan();
    }

    if (groupBuilders[group.type]) {
        // Call the groupBuilders function
        // TODO(ts)
        let groupNode: HtmlDomNode = groupBuilders[group.type](group, options);

        // If the size changed between the parent and the current group, account
        // for that size difference.
        if (baseOptions && options.size !== baseOptions.size) {
            groupNode = makeSpan(options.sizingClasses(baseOptions),
                [groupNode], options);

            const multiplier =
                options.sizeMultiplier / baseOptions.sizeMultiplier;

            groupNode.height *= multiplier;
            groupNode.depth *= multiplier;
        }

        return groupNode;
    } else {
        throw new ParseError(
            "Got group of unknown type: '" + group.type + "'");
    }
};

/**
 * Combine an array of HTML DOM nodes (e.g., the output of `buildExpression`)
 * into an unbreakable HTML node of class .base, with proper struts to
 * guarantee correct vertical extent.  `buildHTML` calls this repeatedly to
 * make up the entire expression as a sequence of unbreakable units.
 */
function buildHTMLUnbreakable(children: HtmlDomNode[], options: Options) {
    // Compute height and depth of this chunk.
    const body = makeSpan(["base"], children, options);

    // Add strut, which ensures that the top of the HTML element falls at
    // the height of the expression, and the bottom of the HTML element
    // falls at the depth of the expression.
    const strut = makeSpan(["strut"]);
    strut.style.height = makeEm(body.height + body.depth);
    if (body.depth) {
        strut.style.verticalAlign = makeEm(-body.depth);
    }
    body.children.unshift(strut);

    return body;
}

/**
 * Take an entire parse tree, and build it into an appropriate set of HTML
 * nodes.
 */
export default function buildHTML(tree: AnyParseNode[], options: Options): DomSpan {
    // Strip off outer tag wrapper for processing below.
    let tag = null;
    if (tree.length === 1 && tree[0].type === "tag") {
        tag = tree[0].tag;
        tree = tree[0].body;
    }

    // Build the expression contained in the tree
    const expression = buildExpression(tree, options, "root");

    let eqnNum;
    if (expression.length === 2 && expression[1].hasClass("tag")) {
        // An environment with automatic equation numbers, e.g. {gather}.
        eqnNum = expression.pop();
    }

    const children = [];

    // Create one base node for each chunk between potential line breaks.
    // The TeXBook [p.173] says "A formula will be broken only after a
    // relation symbol like $=$ or $<$ or $\rightarrow$, or after a binary
    // operation symbol like $+$ or $-$ or $\times$, where the relation or
    // binary operation is on the ``outer level'' of the formula (i.e., not
    // enclosed in {...} and not part of an \over construction)."

    let parts = [];
    for (let i = 0; i < expression.length; i++) {
        parts.push(expression[i]);
        if (expression[i].hasClass("mbin") ||
            expression[i].hasClass("mrel") ||
            expression[i].hasClass("allowbreak")) {
            // Put any post-operator glue on same line as operator.
            // Watch for \nobreak along the way, and stop at \newline.
            let nobreak = false;
            while (i < expression.length - 1 &&
                   expression[i + 1].hasClass("mspace") &&
                   !expression[i + 1].hasClass("newline")) {
                i++;
                parts.push(expression[i]);
                if (expression[i].hasClass("nobreak")) {
                    nobreak = true;
                }
            }
            // Don't allow break if \nobreak among the post-operator glue.
            if (!nobreak) {
                children.push(buildHTMLUnbreakable(parts, options));
                parts = [];
            }
        } else if (expression[i].hasClass("newline")) {
            // Write the line except the newline
            parts.pop();
            if (parts.length > 0) {
                children.push(buildHTMLUnbreakable(parts, options));
                parts = [];
            }
            // Put the newline at the top level
            children.push(expression[i]);
        }
    }
    if (parts.length > 0) {
        children.push(buildHTMLUnbreakable(parts, options));
    }

    // Now, if there was a tag, build it too and append it as a final child.
    let tagChild;
    if (tag) {
        tagChild = buildHTMLUnbreakable(
            buildExpression(tag, options, true),
            options,
        );
        tagChild.classes = ["tag"];
        children.push(tagChild);
    } else if (eqnNum) {
        children.push(eqnNum);
    }

    const htmlNode = makeSpan(["katex-html"], children);
    htmlNode.setAttribute("aria-hidden", "true");

    // Adjust the strut of the tag to be the maximum height of all children
    // (the height of the enclosing htmlNode) for proper vertical alignment.
    if (tagChild) {
        const strut = tagChild.children[0];
        strut.style.height = makeEm(htmlNode.height + htmlNode.depth);
        if (htmlNode.depth) {
            strut.style.verticalAlign = makeEm(-htmlNode.depth);
        }
    }

    return htmlNode;
}

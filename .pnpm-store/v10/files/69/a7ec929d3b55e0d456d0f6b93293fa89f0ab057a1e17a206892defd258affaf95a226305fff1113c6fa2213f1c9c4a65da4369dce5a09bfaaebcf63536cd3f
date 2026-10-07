"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertAst = void 0;
const ts = require("typescript");
const util_1 = require("./util");
/**
 * Takes a `ts.SourceFile` and creates data structures that are easier (or more performant) to traverse.
 * Note that there is only a performance gain if you can reuse these structures. It's not recommended for one-time AST walks.
 */
function convertAst(sourceFile) {
    const wrapped = {
        node: sourceFile,
        parent: undefined,
        kind: ts.SyntaxKind.SourceFile,
        children: [],
        next: undefined,
        skip: undefined,
    };
    const flat = [];
    let current = wrapped;
    function collectChildren(node) {
        current.children.push({
            node,
            parent: current,
            kind: node.kind,
            children: [],
            next: undefined,
            skip: undefined,
        });
    }
    const stack = [];
    while (true) {
        if (current.children.length === 0) {
            ts.forEachChild(current.node, collectChildren);
            if (current.children.length === 0) {
                current = current.parent; // nothing to do here, go back to parent
            }
            else {
                // recurse into first child
                const firstChild = current.children[0];
                current.next = firstChild;
                flat.push(firstChild.node);
                if (util_1.isNodeKind(firstChild.kind))
                    current = firstChild;
                stack.push(1); // set index in stack so we know where to continue processing children
            }
        }
        else {
            const index = stack[stack.length - 1];
            if (index < current.children.length) { // handles 2nd child to the last
                const currentChild = current.children[index];
                flat.push(currentChild.node);
                let previous = current.children[index - 1];
                while (previous.children.length !== 0) {
                    previous.skip = currentChild;
                    previous = previous.children[previous.children.length - 1];
                }
                previous.skip = previous.next = currentChild;
                ++stack[stack.length - 1];
                if (util_1.isNodeKind(currentChild.kind))
                    current = currentChild; // recurse into child
            }
            else {
                // done on this node
                if (stack.length === 1)
                    break;
                // remove index from stack and go back to parent
                stack.pop();
                current = current.parent;
            }
        }
    }
    return {
        wrapped,
        flat,
    };
}
exports.convertAst = convertAst;
//# sourceMappingURL=convert-ast.js.map
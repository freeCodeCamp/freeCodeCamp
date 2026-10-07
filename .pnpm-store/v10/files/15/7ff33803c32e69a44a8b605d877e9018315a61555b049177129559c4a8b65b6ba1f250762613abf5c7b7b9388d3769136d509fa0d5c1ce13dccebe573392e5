"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearParent = clearParent;
function clearParent(ast) {
    const cleanAst = ast;
    delete cleanAst.parentRef;
    if (Array.isArray(ast.children)) {
        // @ts-ignore
        cleanAst.children = ast.children.map((node) => {
            return clearParent(node);
        });
    }
    return cleanAst;
}

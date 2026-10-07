import * as ts from 'typescript';
/** Wraps an AST node. Can be used as a tree using `children` or a linked list using `next` and `skip`. */
export interface NodeWrap {
    /** The real AST node. */
    node: ts.Node;
    /** The SyntaxKind of `node`. */
    kind: ts.SyntaxKind;
    /** All immediate children of `node` that would be visited by `ts.forEachChild(node, cb)`. */
    children: NodeWrap[];
    /** Link to the next NodeWrap, depth-first. */
    next?: NodeWrap;
    /** Link to the next NodeWrap skipping all children of the current node. */
    skip?: NodeWrap;
    /** Link to the parent NodeWrap */
    parent?: NodeWrap;
}
export interface WrappedAst extends NodeWrap {
    node: ts.SourceFile;
    next: NodeWrap;
    skip: undefined;
    parent: undefined;
}
export interface ConvertedAst {
    /** nodes wrapped in a data structure with useful links */
    wrapped: WrappedAst;
    /** depth-first array of all nodes excluding SourceFile */
    flat: ReadonlyArray<ts.Node>;
}
/**
 * Takes a `ts.SourceFile` and creates data structures that are easier (or more performant) to traverse.
 * Note that there is only a performance gain if you can reuse these structures. It's not recommended for one-time AST walks.
 */
export declare function convertAst(sourceFile: ts.SourceFile): ConvertedAst;

import type { ASTNode } from './ast';
import { Kind } from './kinds';
/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */
export declare type ASTVisitor = EnterLeaveVisitor<ASTNode> | KindVisitor;
declare type KindVisitor = {
  readonly [NodeT in ASTNode as NodeT['kind']]?:
    | ASTVisitFn<NodeT>
    | EnterLeaveVisitor<NodeT>;
};
interface EnterLeaveVisitor<TVisitedNode extends ASTNode> {
  readonly enter?: ASTVisitFn<TVisitedNode>;
  readonly leave?: ASTVisitFn<TVisitedNode>;
}
/**
 * A visitor is comprised of visit functions, which are called on each node
 * during the visitor's traversal.
 */
export declare type ASTVisitFn<TVisitedNode extends ASTNode> = (
  /** The current node being visiting. */
  node: TVisitedNode,
  /** The index or key to this node from the parent node or Array. */
  key: string | number | undefined,
  /** The parent immediately above this node, which may be an Array. */
  parent: ASTNode | ReadonlyArray<ASTNode> | undefined,
  /** The key path to get to this node from the root node. */
  path: ReadonlyArray<string | number>,
  /**
   * All nodes and Arrays visited before reaching parent of this node.
   * These correspond to array indices in `path`.
   * Note: ancestors includes arrays which contain the parent of visited node.
   */
  ancestors: ReadonlyArray<ASTNode | ReadonlyArray<ASTNode>>,
) => any;
/**
 * A reducer is comprised of reducer functions which convert AST nodes into
 * another form.
 */
export declare type ASTReducer<R> = {
  readonly [NodeT in ASTNode as NodeT['kind']]?: {
    readonly enter?: ASTVisitFn<NodeT>;
    readonly leave: ASTReducerFn<NodeT, R>;
  };
};
declare type ASTReducerFn<TReducedNode extends ASTNode, R> = (
  /** The current node being visiting. */
  node: {
    [K in keyof TReducedNode]: ReducedField<TReducedNode[K], R>;
  },
  /** The index or key to this node from the parent node or Array. */
  key: string | number | undefined,
  /** The parent immediately above this node, which may be an Array. */
  parent: ASTNode | ReadonlyArray<ASTNode> | undefined,
  /** The key path to get to this node from the root node. */
  path: ReadonlyArray<string | number>,
  /**
   * All nodes and Arrays visited before reaching parent of this node.
   * These correspond to array indices in `path`.
   * Note: ancestors includes arrays which contain the parent of visited node.
   */
  ancestors: ReadonlyArray<ASTNode | ReadonlyArray<ASTNode>>,
) => R;
declare type ReducedField<T, R> = T extends null | undefined
  ? T
  : T extends ReadonlyArray<any>
  ? ReadonlyArray<R>
  : R;
/**
 * A KeyMap describes each the traversable properties of each kind of node.
 *
 * @deprecated Please inline it. Will be removed in v17
 */
export declare type ASTVisitorKeyMap = {
  [NodeT in ASTNode as NodeT['kind']]?: ReadonlyArray<keyof NodeT>;
};
export declare const BREAK: unknown;
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */
export declare function visit<N extends ASTNode>(
  root: N,
  visitor: ASTVisitor,
  visitorKeys?: ASTVisitorKeyMap,
): N;
export declare function visit<R>(
  root: ASTNode,
  visitor: ASTReducer<R>,
  visitorKeys?: ASTVisitorKeyMap,
): R;
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
export declare function visitInParallel(
  visitors: ReadonlyArray<ASTVisitor>,
): ASTVisitor;
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */
export declare function getEnterLeaveForKind(
  visitor: ASTVisitor,
  kind: Kind,
): EnterLeaveVisitor<ASTNode>;
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */
export declare function getVisitFn(
  visitor: ASTVisitor,
  kind: Kind,
  isLeaving: boolean,
): ASTVisitFn<ASTNode> | undefined;
export {};

// TypeScript Version: 3.5

import {Node, Parent} from 'unist'
import {Test} from 'unist-util-is'
import {
  Action,
  ActionTuple,
  Continue,
  Exit,
  Index,
  Skip
} from 'unist-util-visit-parents'

declare namespace visit {
  /**
   * Invoked when a node (matching test, if given) is found.
   * Visitors are free to transform node.
   * They can also transform the parent of node.
   * Replacing node itself, if visit.SKIP is not returned, still causes its descendants to be visited.
   * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
   * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
   * Adding or removing next siblings of node (or previous siblings, in case of reverse)
   * is handled as expected without needing to return a new index.
   * Removing the children property of the parent still result in them being traversed.
   *
   * @param node Found node
   * @param index Position of found node within Parent
   * @param parent Parent of found node
   * @paramType V node type found
   * @returns
   * When Action is passed, treated as a tuple of [Action]
   * When Index is passed, treated as a tuple of [CONTINUE, Index]
   * When ActionTuple is passed,
   *   Note that passing a tuple only makes sense if the action is SKIP.
   *   If the action is EXIT, that action can be returned.
   *   If the action is CONTINUE, index can be returned.
   */
  type Visitor<V extends Node> = (
    node: V,
    index: number,
    parent: Parent | undefined
  ) => void | Action | Index | ActionTuple
}

declare const visit: {
  /**
   * Visit children of tree which pass a test
   *
   * @param tree abstract syntax tree to visit
   * @param test test node
   * @param visitor function to run for each node
   * @param reverse visit the tree in reverse, defaults to false
   * @typeParam T tree node
   * @typeParam V node type found
   */
  <V extends Node>(
    tree: Node,
    test: Test<V> | Array<Test<any>>,
    visitor: visit.Visitor<V>,
    reverse?: boolean
  ): void

  /**
   * Visit children of a tree
   *
   * @param tree abstract syntax tree to visit
   * @param visitor function to run for each node
   * @param reverse visit the tree in reverse, defaults to false
   */
  (tree: Node, visitor: visit.Visitor<Node>, reverse?: boolean): void

  /**
   * Continue traversing as normal
   */
  CONTINUE: Continue

  /**
   * Do not traverse this node’s children
   */
  SKIP: Skip

  /**
   * Stop traversing immediately
   */
  EXIT: Exit
}

export = visit

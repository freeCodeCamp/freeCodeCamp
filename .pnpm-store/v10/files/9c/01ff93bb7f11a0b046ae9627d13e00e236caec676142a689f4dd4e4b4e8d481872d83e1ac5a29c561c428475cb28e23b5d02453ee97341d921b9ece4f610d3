// TypeScript Version: 3.5

import {Node, Parent} from 'unist'
import {Test} from 'unist-util-is'

declare namespace visitParents {
  /**
   * Continue traversing as normal
   */
  type Continue = true

  /**
   * Do not traverse this node’s children
   */
  type Skip = 'skip'

  /**
   * Stop traversing immediately
   */
  type Exit = false

  /**
   * Union of the action types
   */
  type Action = Continue | Skip | Exit

  /**
   * List with one or two values, the first an action, the second an index.
   */
  type ActionTuple = [Action, Index]

  /**
   * Move to the sibling at index next (after node itself is completely traversed).
   * Useful if mutating the tree, such as removing the node the visitor is currently on,
   * or any of its previous siblings (or next siblings, in case of reverse)
   * Results less than 0 or greater than or equal to children.length stop traversing the parent
   */
  type Index = number

  /**
   * Invoked when a node (matching test, if given) is found.
   * Visitors are free to transform node.
   * They can also transform the parent of node (the last of ancestors).
   * Replacing node itself, if visit.SKIP is not returned, still causes its descendants to be visited.
   * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
   * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
   * Adding or removing next siblings of node (or previous siblings, in case of reverse)
   * is handled as expected without needing to return a new index.
   * Removing the children property of an ancestor still results in them being traversed.
   *
   * @param node Found node
   * @param ancestors Ancestors of node
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
    ancestors: Node[]
  ) => void | Action | Index | ActionTuple
}

declare const visitParents: {
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
    visitor: visitParents.Visitor<V>,
    reverse?: boolean
  ): void

  /**
   * Visit children of a tree
   *
   * @param tree abstract syntax tree to visit
   * @param visitor function to run for each node
   * @param reverse visit the tree in reverse, defaults to false
   */
  (tree: Node, visitor: visitParents.Visitor<Node>, reverse?: boolean): void

  /**
   * Continue traversing as normal
   */
  CONTINUE: visitParents.Continue

  /**
   * Do not traverse this node’s children
   */
  SKIP: visitParents.Skip

  /**
   * Stop traversing immediately
   */
  EXIT: visitParents.Exit
}

export = visitParents

// TypeScript Version: 3.5

import {Node, Parent} from 'unist'

declare namespace unistUtilModifyChildren {
  type Modifier = (node: Node, index: number, parent: Parent) => number | void

  type Modify = (tree: Node) => void
}

/**
 * Unist utility to modify direct children of a parent.
 *
 * @param callback modifier function that (optionally) returns a next position (number) to iterate.
 * @returns callback to be used on the tree.
 */
declare function unistUtilModifyChildren(
  modifier: unistUtilModifyChildren.Modifier
): unistUtilModifyChildren.Modify

export = unistUtilModifyChildren

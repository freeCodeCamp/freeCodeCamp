// TypeScript Version: 3.5

import {Node} from 'unist'

declare namespace unistUtilRemovePosition {
  interface NodeWithUndefinedPosition extends Node {
    position: undefined
  }

  interface NodeWithoutPosition extends Omit<Node, 'position'> {}
}

/**
 * Utility to remove positions from a tree
 *
 * @param node the unist tree
 * @param force if `force` is given, uses `delete`, otherwise, sets positions to `undefined`.
 */
declare function unistUtilRemovePosition(
  tree: Node,
  force?: false
): unistUtilRemovePosition.NodeWithUndefinedPosition
declare function unistUtilRemovePosition(
  tree: Node,
  force: true
): unistUtilRemovePosition.NodeWithoutPosition

export = unistUtilRemovePosition

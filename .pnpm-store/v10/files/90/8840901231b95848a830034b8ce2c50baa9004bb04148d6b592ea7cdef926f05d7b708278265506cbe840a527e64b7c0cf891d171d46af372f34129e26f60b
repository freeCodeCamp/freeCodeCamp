// TypeScript Version: 3.5

import {Node, Parent} from 'unist';
import {Test} from 'unist-util-is';

export = findAllBetween;

/**
 * A unist utility to get all children of a parent between two nodes or indices.
 *
 * @param parent Parent node to search in
 * @param start A node or index to start search with
 * @param end A node or index to end search with
 * @param test A test passed to unist-util-is for nodes to pass to be returns in result
 */
declare function findAllBetween<T extends Node>(
  parent: Parent,
  start: Node | number,
  end: Node | number,
  test?: Test<T> | Array<Test<T>>
): Node[];

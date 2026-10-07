import { NonRootResult } from './result/NonRootResult'
import { RootResult } from './result/RootResult'
import { visitorKeys } from './visitorKeys'

/**
 * A node visitor function.
 * @param node the visited node.
 * @param parentNode the parent node.
 * @param property the property on the parent node that contains the visited node. It can be the node itself or
 *  an array of nodes.
 */
export type NodeVisitor = (node: NonRootResult, parentNode?: NonRootResult, property?: string) => void

function _traverse<T extends NonRootResult, U extends NonRootResult> (node: T, parentNode?: U, property?: keyof U, onEnter?: NodeVisitor, onLeave?: NodeVisitor): void {
  onEnter?.(node, parentNode, property as string)

  const keysToVisit = visitorKeys[node.type] as Array<keyof T>

  for (const key of keysToVisit) {
    const value = node[key]
    if (value !== undefined) {
      if (Array.isArray(value)) {
        for (const element of value) {
          _traverse(element as unknown as NonRootResult, node, key, onEnter, onLeave)
        }
      } else {
        _traverse(value as unknown as NonRootResult, node, key, onEnter, onLeave)
      }
    }
  }

  onLeave?.(node, parentNode, property as string)
}

/**
 * A function to traverse an AST. It traverses it depth first.
 * @param node the node to start traversing at.
 * @param onEnter node visitor function that will be called on entering the node. This corresponds to preorder traversing.
 * @param onLeave node visitor function that will be called on leaving the node. This corresponds to postorder traversing.
 */
export function traverse (node: RootResult, onEnter?: NodeVisitor, onLeave?: NodeVisitor): void {
  _traverse(node, undefined, undefined, onEnter, onLeave)
}

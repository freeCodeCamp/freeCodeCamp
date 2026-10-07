// Minimum TypeScript Version: 3.2
import {Node} from 'unist'
import {Definition} from 'mdast'

declare namespace definitions {
  /**
   * @param identifier [Identifier](https://github.com/syntax-tree/mdast#association) of [definition](https://github.com/syntax-tree/mdast#definition).
   */
  type DefinitionCache = (identifier: string) => Definition | null
}

/**
 * Create a cache of all [definition](https://github.com/syntax-tree/mdast#definition)s in [`node`](https://github.com/syntax-tree/unist#node).
 */
declare function definitions(node: Node): definitions.DefinitionCache

export = definitions

// Minimum TypeScript Version: 3.2
import {Node} from 'unist'
import {Definition} from 'mdast'

declare namespace definitions {
  interface Options {
    /**
     * Turn on (`true`) to use CommonMark precedence: ignore definitions found later for duplicate definitions. The default behavior is to prefer the last found definition.
     *
     * @default false
     */
    commonmark: boolean
  }

  /**
   * @param identifier [Identifier](https://github.com/syntax-tree/mdast#association) of [definition](https://github.com/syntax-tree/mdast#definition).
   */
  type DefinitionCache = (identifier: string) => Definition | null
}

/**
 * Create a cache of all [definition](https://github.com/syntax-tree/mdast#definition)s in [`node`](https://github.com/syntax-tree/unist#node).
 */
declare function definitions(
  node: Node,
  options?: definitions.Options
): definitions.DefinitionCache

export = definitions

// Minimum TypeScript Version: 3.2

import {Node} from 'hast'
import {VFile} from 'vfile'

declare namespace raw {
  interface Options {
    /**
     * List of custom hast node types to pass through (keep) in hast.
     * If the passed through nodes have children, those children are expected to
     * be hast and will be handled.
     */
    passThrough?: string[]
  }
}

/**
 * Given a hast tree and an optional vfile (for positional info), return a new parsed-again hast tree.
 * @param tree original hast tree
 * @param file positional info
 * @param options settings
 */
declare function raw(tree: Node, file?: VFile, options?: raw.Options): Node
declare function raw(tree: Node, options?: raw.Options): Node

export = raw

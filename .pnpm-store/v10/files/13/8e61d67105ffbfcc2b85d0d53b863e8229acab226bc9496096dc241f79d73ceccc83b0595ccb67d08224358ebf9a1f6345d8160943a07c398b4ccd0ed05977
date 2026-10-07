// TypeScript Version: 3.0

import {Node} from 'unist'
import {Parent, Heading, Link, Paragraph, List, ListItem} from 'mdast'
import {Test} from 'unist-util-is'

declare namespace mdastUtilToc {
  interface TOCOptions {
    /**
     * Heading to look for, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
     */
    heading?: string

    /**
     * Maximum heading depth to include in the table of contents,
     * This is inclusive: when set to `3`,
     * level three headings are included (those with three hashes, `###`).
     *
     * @default 6
     */
    maxDepth?: Heading['depth']

    /**
     * Headings to skip, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
     * Any heading matching this expression will not be present in the table of contents.
     */
    skip?: string

    /**
     * Whether to compile list-items tightly.
     *
     * @default false
     */
    tight?: boolean

    /**
     * Whether to compile list-items as an ordered list, otherwise they are unordered.
     *
     * @default false
     */
    ordered?: boolean

    /**
     * Add a prefix to links to headings in the table of contents.
     * Useful for example when later going from mdast to hast and sanitizing with `hast-util-sanitize`.
     *
     * @default null
     */
    prefix?: string

    /**
     * Allows headings to be children of certain node types
     * Internally, uses `unist-util-is` to check, so `parents` can be any `is`-compatible test.
     *
     * For example, this would allow headings under either `root` or `blockquote` to be used:
     *
     * ```ts
     * toc(tree, {parents: ['root', 'blockquote']})
     * ```
     *
     * @default the to `toc` given `tree`, to only allow top-level headings
     */
    parents?: Test<Node> | Array<Test<Node>>
  }

  interface TOCResult {
    index: number | null
    endIndex: number | null
    map: List | null
  }
}

/**
 * Generate a Table of Contents from a tree.
 *
 * @param node searched for headings
 * @param options configuration and settings
 */
declare function mdastUtilToc(
  node: Node,
  options?: mdastUtilToc.TOCOptions
): mdastUtilToc.TOCResult

export = mdastUtilToc

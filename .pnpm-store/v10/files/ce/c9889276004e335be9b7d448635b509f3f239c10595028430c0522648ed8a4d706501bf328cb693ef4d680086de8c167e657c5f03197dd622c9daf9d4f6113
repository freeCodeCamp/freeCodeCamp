// Minimum TypeScript Version: 3.2
import {Definition} from 'mdast'
import {DefinitionCache} from 'mdast-util-definitions'
import {Node} from 'unist'

declare namespace toHast {
  interface H {
    dangerous?: boolean
    definition: DefinitionCache
    footnoteById: Definition
    footnoteOrder: string[]
    handlers: Handlers
    unknownHandler: Handler
    (node: Node, tagName: string, props?: object, children?: Node[]): Node
    augment(left: Node, right: Node): Node
  }

  type Handler = (h: H, node: Node) => any

  interface Handlers {
    [type: string]: Handler
  }

  interface Options {
    /**
     * Whether to allow [`html`](https://github.com/syntax-tree/mdast#html) nodes and inject them as raw HTML
     *
     * Only do this when using [`hast-util-to-html`](https://github.com/syntax-tree/hast-util-to-html)
     * ([`rehype-stringify`](https://github.com/rehypejs/rehype/tree/HEAD/packages/rehype-stringify)) or
     * [`hast-util-raw`](https://github.com/syntax-tree/hast-util-raw)
     * ([`rehype-raw`](https://github.com/rehypejs/rehype-raw)) later: `raw` nodes are not a standard part of
     * [hast](https://github.com/syntax-tree/hast).
     *
     * @default false
     */
    allowDangerousHtml?: boolean

    /**
     * Object mapping [mdast](https://github.com/syntax-tree/mdast)
     * [nodes](https://github.com/syntax-tree/mdast#nodes) to functions handling them.
     * Take a look at
     * [`lib/handlers/`](https://github.com/syntax-tree/mdast-util-to-hast/blob/HEAD/lib/handlers)
     * for examples.
     */
    handlers?: Handlers

    /**
     * List of custom mdast node types to pass through (keep) in hast.
     * If the passed through nodes have children, those children are expected to
     * be mdast and will be handled.
     */
    passThrough?: string[]

    /**
     * Handler for all unknown nodes.
     *
     * Default behavior:
     *
     * * Unknown nodes with [`children`][child] are transformed to `div` elements
     * * Unknown nodes with `value` are transformed to [`text`][hast-text] nodes
     */
    unknownHandler?: Handler
  }
}

/**
 * Transform the given [mdast](https://github.com/syntax-tree/mdast)
 * [tree](https://github.com/syntax-tree/unist#tree) to a
 * [hast](https://github.com/syntax-tree/hast) [tree](https://github.com/syntax-tree/unist#tree).
 */
declare function toHast(node: Node, options?: toHast.Options): Node

export = toHast

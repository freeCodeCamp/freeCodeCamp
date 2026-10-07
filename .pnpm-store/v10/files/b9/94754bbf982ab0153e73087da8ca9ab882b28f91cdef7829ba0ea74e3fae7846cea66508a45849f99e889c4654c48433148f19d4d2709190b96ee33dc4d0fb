// TypeScript Version: 3.5
import {Node} from 'unist'
import {Document} from 'parse5'
import {VFile} from 'vfile'

declare namespace hastUtilFromParse5 {
  interface HastUtilFromParse5Options {
    /**
     * Whether the [*root*](https://github.com/syntax-tree/unist#root) of the
     * [*tree*](https://github.com/syntax-tree/unist#tree) is in the `'html'` or `'svg'`
     * space.
     *
     * If an element in with the SVG namespace is found in `ast`, `fromParse5`
     * automatically switches to the SVG space when entering the element, and switches
     * back when leaving.
     *
     * @default 'html'
     */
    space?: 'html' | 'svg'

    /**
     * [`VFile`](https://github.com/vfile/vfile), used to add
     * [positional information](https://github.com/syntax-tree/unist#positional-information)
     * to [*nodes*](https://github.com/syntax-tree/hast#nodes).
     * If given, the [*file*](https://github.com/syntax-tree/unist#file) should have the
     * original HTML source as its contents.
     */
    file?: VFile
    /**
     *
     * Whether to add extra positional information about starting tags, closing tags,
     * and attributes to elements.
     *
     * Note: not used without `file`.
     *
     * @default: false
     */
    verbose?: boolean
  }
}

/**
 * Transform [Parse5’s AST](https://github.com/inikulin/parse5/blob/HEAD/packages/parse5/docs/tree-adapter/default/interface-list.md)
 * to a [**hast**](https://github.com/syntax-tree/hast)
 * [*tree*](https://github.com/syntax-tree/unist#tree).
 *
 * @param options If `options` is a [`VFile`](https://github.com/vfile/vfile), it’s treated
 *                 as `{file: options}`.
 */
declare function hastUtilFromParse5(
  ast: Document,
  options?: hastUtilFromParse5.HastUtilFromParse5Options | VFile
): Node

export = hastUtilFromParse5

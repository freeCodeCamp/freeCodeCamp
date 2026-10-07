// TypeScript Version: 3.4

import {Plugin} from 'unified'

declare namespace remarkGfm {
  type Gfm = Plugin<[RemarkGfmOptions?]>

  interface RemarkGfmOptions {
    /**
     * Whether to support `~single tilde~` strikethrough.
     *
     * @defaultValue true
     */
    singleTilde?: boolean
    /**
     * Create tables with a space between cell delimiters (`|`) and content.
     *
     * @defaultValue true
     */
    tableCellPadding?: boolean
    /**
     * Align the delimiters (`|`) between table cells so that they all align
     * nicely and form a grid.
     *
     * @defaultValue true
     */
    tablePipeAlign?: boolean
    /**
     * Function to detect the length of a table cell. Used to align tables.
     *
     * @defaultValue s => s.length
     */
    stringLength?: (s: string) => number
  }
}

declare const remarkGfm: remarkGfm.Gfm

export = remarkGfm

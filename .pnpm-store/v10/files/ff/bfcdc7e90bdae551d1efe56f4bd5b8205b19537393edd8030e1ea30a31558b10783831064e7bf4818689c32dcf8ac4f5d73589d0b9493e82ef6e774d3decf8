import type {Align} from './lib/infer.js'

export {gfmTableHtml} from './lib/html.js'
export {gfmTable} from './lib/syntax.js'

/**
 * Augment types.
 */
declare module 'micromark-util-types' {
  /**
   * State tracked to compile events as HTML,
   * extended by `micromark-extension-gfm-table`.
   */
  interface CompileData {
    /**
     * Alignment of current table.
     */
    tableAlign?: Array<Align> | undefined
    /**
     * Current table column.
     */
    tableColumn?: number | undefined
  }

  /**
   * Augment token;
   * `align` is patched on `table` tokens by
   * `micromark-extension-gfm-table`.
   */
  interface Token {
    /**
     * Alignment of current table.
     */
    _align?: Array<Align> | undefined
  }

  /**
   * Map of allowed token types,
   * extended by `micromark-extension-gfm-table`.
   */
  interface TokenTypeMap {
    tableBody: 'tableBody'
    tableCellDivider: 'tableCellDivider'
    tableContent: 'tableContent'
    tableData: 'tableData'
    tableDelimiterFiller: 'tableDelimiterFiller'
    tableDelimiterMarker: 'tableDelimiterMarker'
    tableDelimiterRow: 'tableDelimiterRow'
    tableDelimiter: 'tableDelimiter'
    tableHeader: 'tableHeader'
    tableHead: 'tableHead'
    tableRow: 'tableRow'
    table: 'table'
  }
}

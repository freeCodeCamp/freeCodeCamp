import { RangePosition } from './css-syntax-error.js'
import Node from './node.js'

declare namespace Warning {
  export interface WarningOptions {
    /**
     * End position, exclusive, in CSS node string that caused the warning.
     */
    end?: RangePosition

    /**
     * End index, exclusive, in CSS node string that caused the warning.
     */
    endIndex?: number

    /**
     * Start index, inclusive, in CSS node string that caused the warning.
     */
    index?: number

    /**
     * CSS node that caused the warning.
     */
    node?: Node

    /**
     * Name of the plugin that created this warning. `Result#warn` fills
     * this property automatically.
     */
    plugin?: string

    /**
     * Start position, inclusive, in CSS node string that caused the warning.
     */
    start?: RangePosition

    /**
     * Word in CSS source that caused the warning.
     */
    word?: string
  }

  export { Warning_ as default }
}

/**
 * Represents a plugin’s warning. It can be created using `Node#warn`.
 *
 * ```js
 * if (decl.important) {
 *   decl.warn(result, 'Avoid !important', { word: '!important' })
 * }
 * ```
 */
declare class Warning_ {
  /**
   * Column for inclusive start position in the input file with this warning’s source.
   *
   * ```js
   * warning.column //=> 6
   * ```
   */
  column: number

  /**
   * Column for exclusive end position in the input file with this warning’s source.
   *
   * ```js
   * warning.endColumn //=> 4
   * ```
   */
  endColumn?: number

  /**
   * Line for exclusive end position in the input file with this warning’s source.
   *
   * ```js
   * warning.endLine //=> 6
   * ```
   */
  endLine?: number

  /**
   * Line for inclusive start position in the input file with this warning’s source.
   *
   * ```js
   * warning.line //=> 5
   * ```
   */
  line: number

  /**
   * Contains the CSS node that caused the warning.
   *
   * ```js
   * warning.node.toString() //=> 'color: white !important'
   * ```
   */
  node: Node

  /**
   * The name of the plugin that created this warning.
   * When you call `Node#warn` it will fill this property automatically.
   *
   * ```js
   * warning.plugin //=> 'postcss-important'
   * ```
   */
  plugin: string

  /**
   * The warning message.
   *
   * ```js
   * warning.text //=> 'Try to avoid !important'
   * ```
   */
  text: string

  /**
   * Type to filter warnings from `Result#messages`.
   * Always equal to `"warning"`.
   */
  type: 'warning'

  /**
   * @param text Warning message.
   * @param opts Warning options.
   */
  constructor(text: string, opts?: Warning.WarningOptions)

  /**
   * Returns a warning position and message.
   *
   * ```js
   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
   * ```
   *
   * @return Warning position and message.
   */
  toString(): string
}

declare class Warning extends Warning_ {}

export = Warning

import { FilePosition } from './input.js'

declare namespace CssSyntaxError {
  /**
   * A position that is part of a range.
   */
  export interface RangePosition {
    /**
     * The column number in the input.
     */
    column: number

    /**
     * The line number in the input.
     */
    line: number
  }

  export { CssSyntaxError_ as default }
}

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the `Node#error` method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * ```js
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' })
 * ```
 *
 * ```js
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if (error.name === 'CssSyntaxError') {
 *     error //=> CssSyntaxError
 *   }
 * }
 * ```
 */
declare class CssSyntaxError_ extends Error {
  /**
   * Source column of the error.
   *
   * ```js
   * error.column       //=> 1
   * error.input.column //=> 4
   * ```
   *
   * PostCSS will use the input source map to detect the original location.
   * If you need the position in the PostCSS input, use `error.input.column`.
   */
  column?: number

  /**
   * Source column of the error's end, exclusive. Provided if the error pertains
   * to a range.
   *
   * ```js
   * error.endColumn       //=> 1
   * error.input.endColumn //=> 4
   * ```
   *
   * PostCSS will use the input source map to detect the original location.
   * If you need the position in the PostCSS input, use `error.input.endColumn`.
   */
  endColumn?: number

  /**
   * Source line of the error's end, exclusive. Provided if the error pertains
   * to a range.
   *
   * ```js
   * error.endLine       //=> 3
   * error.input.endLine //=> 4
   * ```
   *
   * PostCSS will use the input source map to detect the original location.
   * If you need the position in the PostCSS input, use `error.input.endLine`.
   */
  endLine?: number

  /**
   * Absolute path to the broken file.
   *
   * ```js
   * error.file       //=> 'a.sass'
   * error.input.file //=> 'a.css'
   * ```
   *
   * PostCSS will use the input source map to detect the original location.
   * If you need the position in the PostCSS input, use `error.input.file`.
   */
  file?: string

  /**
   * Input object with PostCSS internal information
   * about input file. If input has source map
   * from previous tool, PostCSS will use origin
   * (for example, Sass) source. You can use this
   * object to get PostCSS input source.
   *
   * ```js
   * error.input.file //=> 'a.css'
   * error.file       //=> 'a.sass'
   * ```
   */
  input?: FilePosition

  /**
   * Source line of the error.
   *
   * ```js
   * error.line       //=> 2
   * error.input.line //=> 4
   * ```
   *
   * PostCSS will use the input source map to detect the original location.
   * If you need the position in the PostCSS input, use `error.input.line`.
   */
  line?: number

  /**
   * Full error text in the GNU error format
   * with plugin, file, line and column.
   *
   * ```js
   * error.message //=> 'a.css:1:1: Unclosed block'
   * ```
   */
  message: string

  /**
   * Always equal to `'CssSyntaxError'`. You should always check error type
   * by `error.name === 'CssSyntaxError'`
   * instead of `error instanceof CssSyntaxError`,
   * because npm could have several PostCSS versions.
   *
   * ```js
   * if (error.name === 'CssSyntaxError') {
   *   error //=> CssSyntaxError
   * }
   * ```
   */
  name: 'CssSyntaxError'

  /**
   * Plugin name, if error came from plugin.
   *
   * ```js
   * error.plugin //=> 'postcss-vars'
   * ```
   */
  plugin?: string

  /**
   * Error message.
   *
   * ```js
   * error.message //=> 'Unclosed block'
   * ```
   */
  reason: string

  /**
   * Source code of the broken file.
   *
   * ```js
   * error.source       //=> 'a { b {} }'
   * error.input.source //=> 'a b { }'
   * ```
   */
  source?: string

  stack: string

  /**
   * Instantiates a CSS syntax error. Can be instantiated for a single position
   * or for a range.
   * @param message        Error message.
   * @param lineOrStartPos If for a single position, the line number, or if for
   *                       a range, the inclusive start position of the error.
   * @param columnOrEndPos If for a single position, the column number, or if for
   *                       a range, the exclusive end position of the error.
   * @param source         Source code of the broken file.
   * @param file           Absolute path to the broken file.
   * @param plugin         PostCSS plugin name, if error came from plugin.
   */
  constructor(
    message: string,
    lineOrStartPos?: CssSyntaxError.RangePosition | number,
    columnOrEndPos?: CssSyntaxError.RangePosition | number,
    source?: string,
    file?: string,
    plugin?: string
  )

  /**
   * Returns a few lines of CSS source that caused the error.
   *
   * If the CSS has an input source map without `sourceContent`,
   * this method will return an empty string.
   *
   * ```js
   * error.showSourceCode() //=> "  4 | }
   *                        //      5 | a {
   *                        //    > 6 |   bad
   *                        //        |   ^
   *                        //      7 | }
   *                        //      8 | b {"
   * ```
   *
   * @param color Whether arrow will be colored red by terminal
   *              color codes. By default, PostCSS will detect
   *              color support by `process.stdout.isTTY`
   *              and `process.env.NODE_DISABLE_COLORS`.
   * @return Few lines of CSS source that caused the error.
   */
  showSourceCode(color?: boolean): string

  /**
   * Returns error position, message and source code of the broken part.
   *
   * ```js
   * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
   *                  //    > 1 | a {
   *                  //        | ^"
   * ```
   *
   * @return Error position, message and source code.
   */
  toString(): string
}

declare class CssSyntaxError extends CssSyntaxError_ {}

export = CssSyntaxError

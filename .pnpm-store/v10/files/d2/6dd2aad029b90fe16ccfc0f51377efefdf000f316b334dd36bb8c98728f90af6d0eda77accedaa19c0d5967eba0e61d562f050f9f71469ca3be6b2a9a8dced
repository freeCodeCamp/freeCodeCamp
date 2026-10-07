import { CssSyntaxError, ProcessOptions } from './postcss.js'
import PreviousMap from './previous-map.js'

declare namespace Input {
  export interface FilePosition {
    /**
     * Column of inclusive start position in source file.
     */
    column: number

    /**
     * Column of exclusive end position in source file.
     */
    endColumn?: number

    /**
     * Line of exclusive end position in source file.
     */
    endLine?: number

    /**
     * Offset of exclusive end position in source file.
     */
    endOffset?: number

    /**
     * Absolute path to the source file.
     */
    file?: string

    /**
     * Line of inclusive start position in source file.
     */
    line: number

    /**
     * Offset of inclusive start position in source file.
     */
    offset: number

    /**
     * Source code.
     */
    source?: string

    /**
     * URL for the source file.
     */
    url: string
  }

  export { Input_ as default }
}

/**
 * Represents the source CSS.
 *
 * ```js
 * const root  = postcss.parse(css, { from: file })
 * const input = root.source.input
 * ```
 */
declare class Input_ {
  /**
   * Input CSS source.
   *
   * ```js
   * const input = postcss.parse('a{}', { from: file }).input
   * input.css //=> "a{}"
   * ```
   */
  css: string

  /**
   * Input source with support for non-CSS documents.
   *
   * ```js
   * const input = postcss.parse('a{}', { from: file, document: '<style>a {}</style>' }).input
   * input.document //=> "<style>a {}</style>"
   * input.css //=> "a{}"
   * ```
   */
  document: string

  /**
   * The absolute path to the CSS source file defined
   * with the `from` option.
   *
   * ```js
   * const root = postcss.parse(css, { from: 'a.css' })
   * root.source.input.file //=> '/home/ai/a.css'
   * ```
   */
  file?: string

  /**
   * The flag to indicate whether or not the source code has Unicode BOM.
   */
  hasBOM: boolean

  /**
   * The unique ID of the CSS source. It will be created if `from` option
   * is not provided (because PostCSS does not know the file path).
   *
   * ```js
   * const root = postcss.parse(css)
   * root.source.input.file //=> undefined
   * root.source.input.id   //=> "<input css 8LZeVF>"
   * ```
   */
  id?: string

  /**
   * The input source map passed from a compilation step before PostCSS
   * (for example, from Sass compiler).
   *
   * ```js
   * root.source.input.map.consumer().sources //=> ['a.sass']
   * ```
   */
  map: PreviousMap

  /**
   * The CSS source identifier. Contains `Input#file` if the user
   * set the `from` option, or `Input#id` if they did not.
   *
   * ```js
   * const root = postcss.parse(css, { from: 'a.css' })
   * root.source.input.from //=> "/home/ai/a.css"
   *
   * const root = postcss.parse(css)
   * root.source.input.from //=> "<input css 1>"
   * ```
   */
  get from(): string

  /**
   * @param css  Input CSS source.
   * @param opts Process options.
   */
  constructor(css: string, opts?: ProcessOptions)

  /**
   * Returns `CssSyntaxError` with information about the error and its position.
   */
  error(
    message: string,
    start:
      | {
          column: number
          line: number
        }
      | {
          offset: number
        },
    end:
      | {
          column: number
          line: number
        }
      | {
          offset: number
        },
    opts?: { plugin?: CssSyntaxError['plugin'] }
  ): CssSyntaxError
  error(
    message: string,
    line: number,
    column: number,
    opts?: { plugin?: CssSyntaxError['plugin'] }
  ): CssSyntaxError
  error(
    message: string,
    offset: number,
    opts?: { plugin?: CssSyntaxError['plugin'] }
  ): CssSyntaxError

  /**
   * Converts source line and column to offset.
   *
   * @param line   Source line.
   * @param column Source column.
   * @return Source offset.
   */
  fromLineAndColumn(line: number, column: number): number

  /**
   * Converts source offset to line and column.
   *
   * @param offset Source offset.
   */
  fromOffset(offset: number): { col: number; line: number } | null

  /**
   * Reads the input source map and returns a symbol position
   * in the input source (e.g., in a Sass file that was compiled
   * to CSS before being passed to PostCSS). Optionally takes an
   * end position, exclusive.
   *
   * ```js
   * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
   * root.source.input.origin(1, 1, 1, 4)
   * //=> { file: 'a.css', line: 3, column: 1, endLine: 3, endColumn: 4 }
   * ```
   *
   * @param line      Line for inclusive start position in input CSS.
   * @param column    Column for inclusive start position in input CSS.
   * @param endLine   Line for exclusive end position in input CSS.
   * @param endColumn Column for exclusive end position in input CSS.
   *
   * @return Position in input source.
   */
  origin(
    line: number,
    column: number,
    endLine?: number,
    endColumn?: number
  ): false | Input.FilePosition

  /** Converts this to a JSON-friendly object representation. */
  toJSON(): object
}

declare class Input extends Input_ {}

export = Input

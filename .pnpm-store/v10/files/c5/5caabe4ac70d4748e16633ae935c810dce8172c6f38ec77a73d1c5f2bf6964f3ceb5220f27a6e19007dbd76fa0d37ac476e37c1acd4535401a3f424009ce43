import Container, { ContainerProps } from './container.js'
import { ProcessOptions } from './postcss.js'
import Result from './result.js'
import Root from './root.js'

declare namespace Document {
  export interface DocumentProps extends ContainerProps {
    nodes?: readonly Root[]

    /**
     * Information to generate byte-to-byte equal node string as it was
     * in the origin input.
     *
     * Every parser saves its own properties.
     */
    raws?: Record<string, any>
  }

  export { Document_ as default }
}

/**
 * Represents a file and contains all its parsed nodes.
 *
 * **Experimental:** some aspects of this node could change within minor
 * or patch version releases.
 *
 * ```js
 * const document = htmlParser(
 *   '<html><style>a{color:black}</style><style>b{z-index:2}</style>'
 * )
 * document.type         //=> 'document'
 * document.nodes.length //=> 2
 * ```
 */
declare class Document_ extends Container<Root> {
  nodes: Root[]
  parent: undefined
  type: 'document'

  constructor(defaults?: Document.DocumentProps)

  assign(overrides: Document.DocumentProps | object): this
  clone(overrides?: Partial<Document.DocumentProps>): this
  cloneAfter(overrides?: Partial<Document.DocumentProps>): this
  cloneBefore(overrides?: Partial<Document.DocumentProps>): this

  /**
   * Returns a `Result` instance representing the document’s CSS roots.
   *
   * ```js
   * const root1 = postcss.parse(css1, { from: 'a.css' })
   * const root2 = postcss.parse(css2, { from: 'b.css' })
   * const document = postcss.document()
   * document.append(root1)
   * document.append(root2)
   * const result = document.toResult({ to: 'all.css', map: true })
   * ```
   *
   * @param opts Options.
   * @return Result with current document’s CSS.
   */
  toResult(options?: ProcessOptions): Result
}

declare class Document extends Document_ {}

export = Document

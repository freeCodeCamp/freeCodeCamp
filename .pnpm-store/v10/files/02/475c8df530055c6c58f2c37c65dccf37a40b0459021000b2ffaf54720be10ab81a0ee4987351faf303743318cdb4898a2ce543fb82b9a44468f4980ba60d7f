import Container, { ContainerProps } from './container.js'
import Document from './document.js'
import { ProcessOptions } from './postcss.js'
import Result from './result.js'

declare namespace Root {
  export interface RootRaws extends Record<string, any> {
    /**
     * The space symbols after the last child to the end of file.
     */
    after?: string

    /**
     * Non-CSS code after `Root`, when `Root` is inside `Document`.
     *
     * **Experimental:** some aspects of this node could change within minor
     * or patch version releases.
     */
    codeAfter?: string

    /**
     * Non-CSS code before `Root`, when `Root` is inside `Document`.
     *
     * **Experimental:** some aspects of this node could change within minor
     * or patch version releases.
     */
    codeBefore?: string

    /**
     * Is the last child has an (optional) semicolon.
     */
    semicolon?: boolean
  }

  export interface RootProps extends ContainerProps {
    /**
     * Information used to generate byte-to-byte equal node string
     * as it was in the origin input.
     * */
    raws?: RootRaws
  }

  export { Root_ as default }
}

/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * ```js
 * const root = postcss.parse('a{color:black} b{z-index:2}')
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 * ```
 */
declare class Root_ extends Container {
  nodes: NonNullable<Container['nodes']>
  parent: Document | undefined
  raws: Root.RootRaws
  type: 'root'

  constructor(defaults?: Root.RootProps)

  assign(overrides: object | Root.RootProps): this
  clone(overrides?: Partial<Root.RootProps>): this
  cloneAfter(overrides?: Partial<Root.RootProps>): this
  cloneBefore(overrides?: Partial<Root.RootProps>): this

  /**
   * Returns a `Result` instance representing the root’s CSS.
   *
   * ```js
   * const root1 = postcss.parse(css1, { from: 'a.css' })
   * const root2 = postcss.parse(css2, { from: 'b.css' })
   * root1.append(root2)
   * const result = root1.toResult({ to: 'all.css', map: true })
   * ```
   *
   * @param options Options.
   * @return Result with current root’s CSS.
   */
  toResult(options?: ProcessOptions): Result
}

declare class Root extends Root_ {}

export = Root

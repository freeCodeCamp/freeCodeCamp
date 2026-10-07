import { ContainerWithChildren } from './container.js'
import Node from './node.js'

declare namespace Declaration {
  export interface DeclarationRaws extends Record<string, unknown> {
    /**
     * The space symbols before the node. It also stores `*`
     * and `_` symbols before the declaration (IE hack).
     */
    before?: string

    /**
     * The symbols between the property and value for declarations.
     */
    between?: string

    /**
     * The content of the important statement, if it is not just `!important`.
     */
    important?: string

    /**
     * Declaration value with comments.
     */
    value?: {
      raw: string
      value: string
    }
  }

  export interface DeclarationProps {
    /** Whether the declaration has an `!important` annotation. */
    important?: boolean
    /** Name of the declaration. */
    prop: string
    /** Information used to generate byte-to-byte equal node string as it was in the origin input. */
    raws?: DeclarationRaws
    /** Value of the declaration. */
    value: string
  }

  export { Declaration_ as default }
}

/**
 * It represents a class that handles
 * [CSS declarations](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declarations)
 *
 * ```js
 * Once (root, { Declaration }) {
 *   const color = new Declaration({ prop: 'color', value: 'black' })
 *   root.append(color)
 * }
 * ```
 *
 * ```js
 * const root = postcss.parse('a { color: black }')
 * const decl = root.first?.first
 *
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 * ```
 */
declare class Declaration_ extends Node {
  parent: ContainerWithChildren | undefined
  raws: Declaration.DeclarationRaws

  type: 'decl'

  /**
   * It represents a specificity of the declaration.
   *
   * If true, the CSS declaration will have an
   * [important](https://developer.mozilla.org/en-US/docs/Web/CSS/important)
   * specifier.
   *
   * ```js
   * const root = postcss.parse('a { color: black !important; color: red }')
   *
   * root.first.first.important //=> true
   * root.first.last.important  //=> undefined
   * ```
   */
  get important(): boolean
  set important(value: boolean)

  /**
   * The property name for a CSS declaration.
   *
   * ```js
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   *
   * decl.prop //=> 'color'
   * ```
   */
  get prop(): string

  set prop(value: string)

  /**
   * The property value for a CSS declaration.
   *
   * Any CSS comments inside the value string will be filtered out.
   * CSS comments present in the source value will be available in
   * the `raws` property.
   *
   * Assigning new `value` would ignore the comments in `raws`
   * property while compiling node to string.
   *
   * ```js
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   *
   * decl.value //=> 'black'
   * ```
   */
  get value(): string
  set value(value: string)

  /**
   * It represents a getter that returns `true` if a declaration starts with
   * `--` or `$`, which are used to declare variables in CSS and SASS/SCSS.
   *
   * ```js
   * const root = postcss.parse(':root { --one: 1 }')
   * const one = root.first.first
   *
   * one.variable //=> true
   * ```
   *
   * ```js
   * const root = postcss.parse('$one: 1')
   * const one = root.first
   *
   * one.variable //=> true
   * ```
   */
  get variable(): boolean
  constructor(defaults?: Declaration.DeclarationProps)

  assign(overrides: Declaration.DeclarationProps | object): this
  clone(overrides?: Partial<Declaration.DeclarationProps>): this
  cloneAfter(overrides?: Partial<Declaration.DeclarationProps>): this
  cloneBefore(overrides?: Partial<Declaration.DeclarationProps>): this
}

declare class Declaration extends Declaration_ {}

export = Declaration

import Container, {
  ContainerProps,
  ContainerWithChildren
} from './container.js'

declare namespace Rule {
  export interface RuleRaws extends Record<string, unknown> {
    /**
     * The space symbols after the last child of the node to the end of the node.
     */
    after?: string

    /**
     * The space symbols before the node. It also stores `*`
     * and `_` symbols before the declaration (IE hack).
     */
    before?: string

    /**
     * The symbols between the selector and `{` for rules.
     */
    between?: string

    /**
     * Contains the text of the semicolon after this rule.
     */
    ownSemicolon?: string

    /**
     * The rule’s selector with comments.
     */
    selector?: {
      raw: string
      value: string
    }

    /**
     * Contains `true` if the last child has an (optional) semicolon.
     */
    semicolon?: boolean
  }

  export type RuleProps = {
    /** Information used to generate byte-to-byte equal node string as it was in the origin input. */
    raws?: RuleRaws
  } & (
    | {
        /** Selector or selectors of the rule. */
        selector: string
        selectors?: never
      }
    | {
        selector?: never
        /** Selectors of the rule represented as an array of strings. */
        selectors: readonly string[]
      }
  ) &
    ContainerProps

  export { Rule_ as default }
}

/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * ```js
 * Once (root, { Rule }) {
 *   let a = new Rule({ selector: 'a' })
 *   a.append(…)
 *   root.append(a)
 * }
 * ```
 *
 * ```js
 * const root = postcss.parse('a{}')
 * const rule = root.first
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 * ```
 */
declare class Rule_ extends Container {
  nodes: NonNullable<Container['nodes']>
  parent: ContainerWithChildren | undefined
  raws: Rule.RuleRaws
  type: 'rule'
  /**
   * The rule’s full selector represented as a string.
   *
   * ```js
   * const root = postcss.parse('a, b { }')
   * const rule = root.first
   * rule.selector //=> 'a, b'
   * ```
   */
  get selector(): string

  set selector(value: string)
  /**
   * An array containing the rule’s individual selectors.
   * Groups of selectors are split at commas.
   *
   * ```js
   * const root = postcss.parse('a, b { }')
   * const rule = root.first
   *
   * rule.selector  //=> 'a, b'
   * rule.selectors //=> ['a', 'b']
   *
   * rule.selectors = ['a', 'strong']
   * rule.selector //=> 'a, strong'
   * ```
   */
  get selectors(): string[]

  set selectors(values: string[])

  constructor(defaults?: Rule.RuleProps)
  assign(overrides: object | Rule.RuleProps): this
  clone(overrides?: Partial<Rule.RuleProps>): this
  cloneAfter(overrides?: Partial<Rule.RuleProps>): this
  cloneBefore(overrides?: Partial<Rule.RuleProps>): this
}

declare class Rule extends Rule_ {}

export = Rule

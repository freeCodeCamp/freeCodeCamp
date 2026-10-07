declare namespace list {
  type List = {
    /**
     * Safely splits comma-separated values (such as those for `transition-*`
     * and `background` properties).
     *
     * ```js
     * Once (root, { list }) {
     *   list.comma('black, linear-gradient(white, black)')
     *   //=> ['black', 'linear-gradient(white, black)']
     * }
     * ```
     *
     * @param str Comma-separated values.
     * @return Split values.
     */
    comma(str: string): string[]

    default: List

    /**
     * Safely splits space-separated values (such as those for `background`,
     * `border-radius`, and other shorthand properties).
     *
     * ```js
     * Once (root, { list }) {
     *   list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
     * }
     * ```
     *
     * @param str Space-separated values.
     * @return Split values.
     */
    space(str: string): string[]

    /**
     * Safely splits values.
     *
     * ```js
     * Once (root, { list }) {
     *   list.split('1px calc(10% + 1px)', [' ', '\n', '\t']) //=> ['1px', 'calc(10% + 1px)']
     * }
     * ```
     *
     * @param string separated values.
     * @param separators array of separators.
     * @param last boolean indicator.
     * @return Split values.
     */
    split(
      string: string,
      separators: readonly string[],
      last: boolean
    ): string[]
  }
}

declare let list: list.List

export = list

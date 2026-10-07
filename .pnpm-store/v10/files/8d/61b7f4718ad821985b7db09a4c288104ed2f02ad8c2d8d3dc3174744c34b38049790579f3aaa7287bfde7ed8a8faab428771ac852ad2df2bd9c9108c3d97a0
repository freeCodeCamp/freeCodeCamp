/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
export declare function dedentBlockStringLines(
  lines: ReadonlyArray<string>,
): Array<string>;
/**
 * @internal
 */
export declare function isPrintableAsBlockString(value: string): boolean;
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */
export declare function printBlockString(
  value: string,
  options?: {
    minimize?: boolean;
  },
): string;

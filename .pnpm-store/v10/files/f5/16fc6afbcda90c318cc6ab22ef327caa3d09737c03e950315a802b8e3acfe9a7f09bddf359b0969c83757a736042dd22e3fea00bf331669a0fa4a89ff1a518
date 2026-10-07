// TypeScript Version: 3.0

declare namespace stringifyEntities {
  interface StringifyEntitiesOptions {
    /**
     * Whether to only escape possibly dangerous characters (`boolean`, default: `false`).
     * Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
     */
    escapeOnly?: boolean

    /**
     * Whether to only escape the given subset of characters (`Array.<string>`).
     */
    subset?: string[]

    /**
     * Prefer named character references (`&amp;`) where possible (`boolean?`, default: `false`).
     */
    useNamedReferences?: boolean

    /**
     * Prefer the shortest possible reference, if that results in less bytes (`boolean?`, default: `false`).
     * **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.
     */
    useShortestReferences?: boolean

    /**
     * Whether to omit semicolons when possible (`boolean?`, default: `false`).
     * **Note**: This creates what HTML calls “parse errors” but is otherwise still valid HTML — don’t use this except when building a minifier.
     *
     * Omitting semicolons is possible for legacy named references in certain cases, and numeric references in some cases.
     */
    omitOptionalSemicolons?: boolean

    /**
     * Only needed when operating dangerously with `omitOptionalSemicolons: true`.
     * Create character references which don’t fail in attributes (`boolean?`, default: `false`).
     */
    attribute?: boolean
  }
}

/**
 * Encode special characters in `value`.
 */
declare function stringifyEntities(
  value: string,
  options?: stringifyEntities.StringifyEntitiesOptions
): string

export = stringifyEntities

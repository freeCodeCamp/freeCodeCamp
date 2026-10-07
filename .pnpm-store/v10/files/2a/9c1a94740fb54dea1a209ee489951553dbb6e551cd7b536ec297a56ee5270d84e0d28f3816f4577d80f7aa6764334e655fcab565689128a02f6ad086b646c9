interface InformativeDocsOptions {
    /**
     * Words that can be considered synonyms (aliases) of each other.
     *
     * @default
     * ```json
     * {
     *   "a": ["an", "our"]
     * }
     * ```
     *
     * @example
     * With `{ aliases: { emoji: ["smiley", "winkey"] } }`,
     * the following comment would be considered uninformative:
     * ```js
     * /** Default smiley/winkey. *\/
     * export const defaultSmiley = "🙂";
     * ```
     */
    aliases?: Record<string, string[]>;
    /**
     * Words that are ignored when searching for one that adds meaning.
     *
     * @default
     * ```json
     * ["a", "an", "i", "in", "of", "s", "the"]
     * ```
     *
     * @example
     * With `{ uselessWords: ["our"] }`, the following comment would
     * be considered uninformative:
     * ```js
     * /** Our text. *\/
     * export const text = ":)";
     * ```
     */
    uselessWords?: string[];
}

/**
 * @param docs - Any amount of docs text, such as from a JSDoc description.
 * @param name - Name of the entity the docs text is describing.
 * @param options - Additional options to customize informativity checking.
 * @returns Whether the docs include at least one word with new information.
 *
 * @example
 * ```js
 * areDocsInformative("The user id.", "userId"); // false
 * ```
 * @example
 * ```js
 * areDocsInformative("Retrieved user id.", "userId"); // true
 * ```
 */
declare function areDocsInformative(docs: string | string[], name: string | string[], { aliases, uselessWords, }?: InformativeDocsOptions): boolean;

export { InformativeDocsOptions, areDocsInformative };

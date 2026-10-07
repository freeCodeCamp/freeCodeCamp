/**
 * Normalises alias mappings, ensuring that more specific aliases are resolved before less specific ones.
 * This function also ensures that aliases do not resolve to themselves cyclically.
 *
 * @param _aliases - A set of alias mappings where each key is an alias and its value is the actual path it points to.
 * @returns a set of normalised alias mappings.
 */
declare function normalizeAliases(_aliases: Record<string, string>): Record<string, string>;
/**
 * Resolves a path string to its alias if applicable, otherwise returns the original path.
 * This function normalises the path, resolves the alias and then joins it to the alias target if necessary.
 *
 * @param path - The path string to resolve.
 * @param aliases - A set of alias mappings to use for resolution.
 * @returns the resolved path as a string.
 */
declare function resolveAlias(path: string, aliases: Record<string, string>): string;
/**
 * Resolves a path string to its possible alias.
 *
 * Returns an array of possible alias resolutions (could be empty), sorted by specificity (longest first).
 */
declare function reverseResolveAlias(path: string, aliases: Record<string, string>): string[];
/**
 * Extracts the filename from a given path, excluding any directory paths and the file extension.
 *
 * @param path - The full path of the file from which to extract the filename.
 * @returns the filename without the extension, or `undefined` if the filename cannot be extracted.
 */
declare function filename(path: string): string | undefined;

export { filename, normalizeAliases, resolveAlias, reverseResolveAlias };

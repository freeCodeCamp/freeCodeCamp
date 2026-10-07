const REDUNDANT_CHARACTERS_EXP = /[?|#].*$/g

/**
 * Removes search parameters and the fragment
 * from a given URL string.
 */
export function cleanUrl(path: string): string {
  // If the path ends with an optional path parameter,
  // return it as-is.
  if (path.endsWith('?')) {
    return path
  }

  // Otherwise, remove the search and fragment from it.
  return path.replace(REDUNDANT_CHARACTERS_EXP, '')
}

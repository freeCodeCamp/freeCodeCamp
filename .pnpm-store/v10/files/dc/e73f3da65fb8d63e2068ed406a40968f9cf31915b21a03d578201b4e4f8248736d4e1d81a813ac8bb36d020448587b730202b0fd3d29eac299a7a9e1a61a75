import {ARIARole} from 'aria-query'

export type MatcherFunction = (
  content: string,
  element: Element | null,
) => boolean
export type Matcher = MatcherFunction | RegExp | number | string

// Get autocomplete for ARIARole union types, while still supporting another string
// Ref: https://github.com/microsoft/TypeScript/issues/29729#issuecomment-567871939
export type ByRoleMatcher = ARIARole | (string & {})

export type NormalizerFn = (text: string) => string

export interface NormalizerOptions extends DefaultNormalizerOptions {
  normalizer?: NormalizerFn
}

export interface MatcherOptions {
  exact?: boolean
  /** Use normalizer with getDefaultNormalizer instead */
  trim?: boolean
  /** Use normalizer with getDefaultNormalizer instead */
  collapseWhitespace?: boolean
  normalizer?: NormalizerFn
  /** suppress suggestions for a specific query */
  suggest?: boolean
}

export type Match = (
  textToMatch: string,
  node: HTMLElement | null,
  matcher: Matcher,
  options?: MatcherOptions,
) => boolean

export interface DefaultNormalizerOptions {
  trim?: boolean
  collapseWhitespace?: boolean
}

export function getDefaultNormalizer(
  options?: DefaultNormalizerOptions,
): NormalizerFn

// N.B. Don't expose fuzzyMatches + matches here: they're not public API

// TypeScript Version: 4.0

import {SyntaxExtension} from 'micromark/dist/shared-types'

/**
 * Support strikethrough (~~like this~~). The export of `syntax` is a function
 * that can be called with options and returns an extension for the micromark
 * parser (to tokenize strikethrough; can be passed in `extensions`).
 */
declare function syntax(
  options?: syntax.GfmStrikethroughOptions
): SyntaxExtension

declare namespace syntax {
  interface GfmStrikethroughOptions {
    /**
     * Whether to support strikethrough with a single tilde. Single tildes work
     * on github.com, but are technically prohibited by the GFM spec.
     *
     * @default true
     */
    singleTilde?: boolean
  }
}

export = syntax

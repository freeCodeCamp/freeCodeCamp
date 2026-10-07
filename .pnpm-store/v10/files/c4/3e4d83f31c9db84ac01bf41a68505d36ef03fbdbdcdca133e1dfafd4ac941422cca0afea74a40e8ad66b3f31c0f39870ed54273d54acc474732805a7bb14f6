// TypeScript Version: 4.0

import {SyntaxExtension} from 'micromark/dist/shared-types'
import {GfmStrikethroughOptions} from 'micromark-extension-gfm-strikethrough'

/**
 * Support GFM or markdown on github.com.
 *
 * The export of `syntax` is a function that can be called with options and
 * returns extension for the micromark parser (to tokenize GFM; can be passed
 * in `extensions`).
 */
declare function syntax(options?: syntax.GfmOptions): SyntaxExtension

declare namespace syntax {
  type GfmOptions = GfmStrikethroughOptions
}

export = syntax

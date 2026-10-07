export {gfmAutolinkLiteral} from './lib/syntax.js'
export {gfmAutolinkLiteralHtml} from './lib/html.js'

/**
 * Augment types.
 */
declare module 'micromark-util-types' {
  /**
   * Augment token with a field to improve performance.
   */
  interface Token {
    _gfmAutolinkLiteralWalkedInto?: boolean
  }

  /**
   * Token types.
   */
  interface TokenTypeMap {
    literalAutolink: 'literalAutolink'
    literalAutolinkEmail: 'literalAutolinkEmail'
    literalAutolinkHttp: 'literalAutolinkHttp'
    literalAutolinkWww: 'literalAutolinkWww'
  }
}

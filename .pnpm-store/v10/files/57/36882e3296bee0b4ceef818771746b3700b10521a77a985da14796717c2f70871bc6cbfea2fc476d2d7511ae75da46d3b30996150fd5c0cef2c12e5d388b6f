/**
 * @import {CompileContext, Handle, HtmlExtension, Token} from 'micromark-util-types'
 */

import { sanitizeUri } from 'micromark-util-sanitize-uri';

/**
 * Create an HTML extension for `micromark` to support GitHub autolink literal
 * when serializing to HTML.
 *
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions` to
 *   support GitHub autolink literal when serializing to HTML.
 */
export function gfmAutolinkLiteralHtml() {
  return {
    exit: {
      literalAutolinkEmail,
      literalAutolinkHttp,
      literalAutolinkWww
    }
  };
}

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function literalAutolinkWww(token) {
  anchorFromToken.call(this, token, 'http://');
}

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function literalAutolinkEmail(token) {
  anchorFromToken.call(this, token, 'mailto:');
}

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function literalAutolinkHttp(token) {
  anchorFromToken.call(this, token);
}

/**
 * @this CompileContext
 * @param {Token} token
 * @param {string | null | undefined} [protocol]
 * @returns {undefined}
 */
function anchorFromToken(token, protocol) {
  const url = this.sliceSerialize(token);
  this.tag('<a href="' + sanitizeUri((protocol || '') + url) + '">');
  this.raw(this.encode(url));
  this.tag('</a>');
}
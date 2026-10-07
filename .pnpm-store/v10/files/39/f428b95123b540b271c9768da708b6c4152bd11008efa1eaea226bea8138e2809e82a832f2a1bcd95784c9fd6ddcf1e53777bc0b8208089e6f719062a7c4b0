/**
 * @import {Code, ConstructRecord, Event, Extension, Previous, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

import {
  asciiAlpha,
  asciiAlphanumeric,
  asciiControl,
  markdownLineEndingOrSpace,
  unicodePunctuation,
  unicodeWhitespace
} from 'micromark-util-character'
import {codes} from 'micromark-util-symbol'

const wwwPrefix = {tokenize: tokenizeWwwPrefix, partial: true}
const domain = {tokenize: tokenizeDomain, partial: true}
const path = {tokenize: tokenizePath, partial: true}
const trail = {tokenize: tokenizeTrail, partial: true}
const emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
}

const wwwAutolink = {
  name: 'wwwAutolink',
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
}

const protocolAutolink = {
  name: 'protocolAutolink',
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
}

const emailAutolink = {
  name: 'emailAutolink',
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
}

/** @type {ConstructRecord} */
const text = {}

/**
 * Create an extension for `micromark` to support GitHub autolink literal
 * syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable GFM
 *   autolink literal syntax.
 */
export function gfmAutolinkLiteral() {
  return {text}
}

/** @type {Code} */
let code = codes.digit0

// Add alphanumerics.
while (code < codes.leftCurlyBrace) {
  text[code] = emailAutolink
  code++
  if (code === codes.colon) code = codes.uppercaseA
  else if (code === codes.leftSquareBracket) code = codes.lowercaseA
}

text[codes.plusSign] = emailAutolink
text[codes.dash] = emailAutolink
text[codes.dot] = emailAutolink
text[codes.underscore] = emailAutolink
text[codes.uppercaseH] = [emailAutolink, protocolAutolink]
text[codes.lowercaseH] = [emailAutolink, protocolAutolink]
text[codes.uppercaseW] = [emailAutolink, wwwAutolink]
text[codes.lowercaseW] = [emailAutolink, wwwAutolink]

// To do: perform email autolink literals on events, afterwards.
// That’s where `markdown-rs` and `cmark-gfm` perform it.
// It should look for `@`, then for atext backwards, and then for a label
// forwards.
// To do: `mailto:`, `xmpp:` protocol as prefix.

/**
 * Email autolink literal.
 *
 * ```markdown
 * > | a contact@example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeEmailAutolink(effects, ok, nok) {
  const self = this
  /** @type {boolean | undefined} */
  let dot
  /** @type {boolean} */
  let data

  return start

  /**
   * Start of email autolink literal.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (
      !gfmAtext(code) ||
      !previousEmail.call(self, self.previous) ||
      previousUnbalanced(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkEmail')
    return atext(code)
  }

  /**
   * In email atext.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */
  function atext(code) {
    if (gfmAtext(code)) {
      effects.consume(code)
      return atext
    }

    if (code === codes.atSign) {
      effects.consume(code)
      return emailDomain
    }

    return nok(code)
  }

  /**
   * In email domain.
   *
   * The reference code is a bit overly complex as it handles the `@`, of which
   * there may be just one.
   * Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L318>
   *
   * ```markdown
   * > | a contact@example.org b
   *               ^
   * ```
   *
   * @type {State}
   */
  function emailDomain(code) {
    // Dot followed by alphanumerical (not `-` or `_`).
    if (code === codes.dot) {
      return effects.check(
        emailDomainDotTrail,
        emailDomainAfter,
        emailDomainDot
      )(code)
    }

    // Alphanumerical, `-`, and `_`.
    if (
      code === codes.dash ||
      code === codes.underscore ||
      asciiAlphanumeric(code)
    ) {
      data = true
      effects.consume(code)
      return emailDomain
    }

    // To do: `/` if xmpp.

    // Note: normally we’d truncate trailing punctuation from the link.
    // However, email autolink literals cannot contain any of those markers,
    // except for `.`, but that can only occur if it isn’t trailing.
    // So we can ignore truncating!
    return emailDomainAfter(code)
  }

  /**
   * In email domain, on dot that is not a trail.
   *
   * ```markdown
   * > | a contact@example.org b
   *                      ^
   * ```
   *
   * @type {State}
   */
  function emailDomainDot(code) {
    effects.consume(code)
    dot = true
    return emailDomain
  }

  /**
   * After email domain.
   *
   * ```markdown
   * > | a contact@example.org b
   *                          ^
   * ```
   *
   * @type {State}
   */
  function emailDomainAfter(code) {
    // Domain must not be empty, must include a dot, and must end in alphabetical.
    // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L332>.
    if (data && dot && asciiAlpha(self.previous)) {
      effects.exit('literalAutolinkEmail')
      effects.exit('literalAutolink')
      return ok(code)
    }

    return nok(code)
  }
}

/**
 * `www` autolink literal.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeWwwAutolink(effects, ok, nok) {
  const self = this

  return wwwStart

  /**
   * Start of www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */
  function wwwStart(code) {
    if (
      (code !== codes.uppercaseW && code !== codes.lowercaseW) ||
      !previousWww.call(self, self.previous) ||
      previousUnbalanced(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkWww')
    // Note: we *check*, so we can discard the `www.` we parsed.
    // If it worked, we consider it as a part of the domain.
    return effects.check(
      wwwPrefix,
      effects.attempt(domain, effects.attempt(path, wwwAfter), nok),
      nok
    )(code)
  }

  /**
   * After a www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *                          ^
   * ```
   *
   * @type {State}
   */
  function wwwAfter(code) {
    effects.exit('literalAutolinkWww')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

/**
 * Protocol autolink literal.
 *
 * ```markdown
 * > | a https://example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeProtocolAutolink(effects, ok, nok) {
  const self = this
  let buffer = ''
  let seen = false

  return protocolStart

  /**
   * Start of protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */
  function protocolStart(code) {
    if (
      (code === codes.uppercaseH || code === codes.lowercaseH) &&
      previousProtocol.call(self, self.previous) &&
      !previousUnbalanced(self.events)
    ) {
      effects.enter('literalAutolink')
      effects.enter('literalAutolinkHttp')
      buffer += String.fromCodePoint(code)
      effects.consume(code)
      return protocolPrefixInside
    }

    return nok(code)
  }

  /**
   * In protocol.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^^^^^
   * ```
   *
   * @type {State}
   */
  function protocolPrefixInside(code) {
    // `5` is size of `https`
    if (asciiAlpha(code) && buffer.length < 5) {
      // @ts-expect-error: definitely number.
      buffer += String.fromCodePoint(code)
      effects.consume(code)
      return protocolPrefixInside
    }

    if (code === codes.colon) {
      const protocol = buffer.toLowerCase()

      if (protocol === 'http' || protocol === 'https') {
        effects.consume(code)
        return protocolSlashesInside
      }
    }

    return nok(code)
  }

  /**
   * In slashes.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *           ^^
   * ```
   *
   * @type {State}
   */
  function protocolSlashesInside(code) {
    if (code === codes.slash) {
      effects.consume(code)

      if (seen) {
        return afterProtocol
      }

      seen = true
      return protocolSlashesInside
    }

    return nok(code)
  }

  /**
   * After protocol, before domain.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *             ^
   * ```
   *
   * @type {State}
   */
  function afterProtocol(code) {
    // To do: this is different from `markdown-rs`:
    // https://github.com/wooorm/markdown-rs/blob/b3a921c761309ae00a51fe348d8a43adbc54b518/src/construct/gfm_autolink_literal.rs#L172-L182
    return code === codes.eof ||
      asciiControl(code) ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code) ||
      unicodePunctuation(code)
      ? nok(code)
      : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code)
  }

  /**
   * After a protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *                              ^
   * ```
   *
   * @type {State}
   */
  function protocolAfter(code) {
    effects.exit('literalAutolinkHttp')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

/**
 * `www` prefix.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeWwwPrefix(effects, ok, nok) {
  let size = 0

  return wwwPrefixInside

  /**
   * In www prefix.
   *
   * ```markdown
   * > | www.example.com
   *     ^^^^
   * ```
   *
   * @type {State}
   */
  function wwwPrefixInside(code) {
    if ((code === codes.uppercaseW || code === codes.lowercaseW) && size < 3) {
      size++
      effects.consume(code)
      return wwwPrefixInside
    }

    if (code === codes.dot && size === 3) {
      effects.consume(code)
      return wwwPrefixAfter
    }

    return nok(code)
  }

  /**
   * After www prefix.
   *
   * ```markdown
   * > | www.example.com
   *         ^
   * ```
   *
   * @type {State}
   */
  function wwwPrefixAfter(code) {
    // If there is *anything*, we can link.
    return code === codes.eof ? nok(code) : ok(code)
  }
}

/**
 * Domain.
 *
 * ```markdown
 * > | a https://example.org b
 *               ^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDomain(effects, ok, nok) {
  /** @type {boolean | undefined} */
  let underscoreInLastSegment
  /** @type {boolean | undefined} */
  let underscoreInLastLastSegment
  /** @type {boolean | undefined} */
  let seen

  return domainInside

  /**
   * In domain.
   *
   * ```markdown
   * > | https://example.com/a
   *             ^^^^^^^^^^^
   * ```
   *
   * @type {State}
   */
  function domainInside(code) {
    // Check whether this marker, which is a trailing punctuation
    // marker, optionally followed by more trailing markers, and then
    // followed by an end.
    if (code === codes.dot || code === codes.underscore) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code)
    }

    // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
    // occur, which sounds like ASCII only, but they also support `www.點看.com`,
    // so that’s Unicode.
    // Instead of some new production for Unicode alphanumerics, markdown
    // already has that for Unicode punctuation and whitespace, so use those.
    // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L12>.
    if (
      code === codes.eof ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code) ||
      (code !== codes.dash && unicodePunctuation(code))
    ) {
      return domainAfter(code)
    }

    seen = true
    effects.consume(code)
    return domainInside
  }

  /**
   * In domain, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com
   *                    ^
   * ```
   *
   * @type {State}
   */
  function domainAtPunctuation(code) {
    // There is an underscore in the last segment of the domain
    if (code === codes.underscore) {
      underscoreInLastSegment = true
    }
    // Otherwise, it’s a `.`: save the last segment underscore in the
    // penultimate segment slot.
    else {
      underscoreInLastLastSegment = underscoreInLastSegment
      underscoreInLastSegment = undefined
    }

    effects.consume(code)
    return domainInside
  }

  /**
   * After domain.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^
   * ```
   *
   * @type {State} */
  function domainAfter(code) {
    // Note: that’s GH says a dot is needed, but it’s not true:
    // <https://github.com/github/cmark-gfm/issues/279>
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code)
    }

    return ok(code)
  }
}

/**
 * Path.
 *
 * ```markdown
 * > | a https://example.org/stuff b
 *                          ^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizePath(effects, ok) {
  let sizeOpen = 0
  let sizeClose = 0

  return pathInside

  /**
   * In path.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^^
   * ```
   *
   * @type {State}
   */
  function pathInside(code) {
    if (code === codes.leftParenthesis) {
      sizeOpen++
      effects.consume(code)
      return pathInside
    }

    // To do: `markdown-rs` also needs this.
    // If this is a paren, and there are less closings than openings,
    // we don’t check for a trail.
    if (code === codes.rightParenthesis && sizeClose < sizeOpen) {
      return pathAtPunctuation(code)
    }

    // Check whether this trailing punctuation marker is optionally
    // followed by more trailing markers, and then followed
    // by an end.
    if (
      code === codes.exclamationMark ||
      code === codes.quotationMark ||
      code === codes.ampersand ||
      code === codes.apostrophe ||
      code === codes.rightParenthesis ||
      code === codes.asterisk ||
      code === codes.comma ||
      code === codes.dot ||
      code === codes.colon ||
      code === codes.semicolon ||
      code === codes.lessThan ||
      code === codes.questionMark ||
      code === codes.rightSquareBracket ||
      code === codes.underscore ||
      code === codes.tilde
    ) {
      return effects.check(trail, ok, pathAtPunctuation)(code)
    }

    if (
      code === codes.eof ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      return ok(code)
    }

    effects.consume(code)
    return pathInside
  }

  /**
   * In path, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com/a"b
   *                          ^
   * ```
   *
   * @type {State}
   */
  function pathAtPunctuation(code) {
    // Count closing parens.
    if (code === codes.rightParenthesis) {
      sizeClose++
    }

    effects.consume(code)
    return pathInside
  }
}

/**
 * Trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the entire trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | https://example.com").
 *                        ^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTrail(effects, ok, nok) {
  return trail

  /**
   * In trail of domain or path.
   *
   * ```markdown
   * > | https://example.com").
   *                        ^
   * ```
   *
   * @type {State}
   */
  function trail(code) {
    // Regular trailing punctuation.
    if (
      code === codes.exclamationMark ||
      code === codes.quotationMark ||
      code === codes.apostrophe ||
      code === codes.rightParenthesis ||
      code === codes.asterisk ||
      code === codes.comma ||
      code === codes.dot ||
      code === codes.colon ||
      code === codes.semicolon ||
      code === codes.questionMark ||
      code === codes.underscore ||
      code === codes.tilde
    ) {
      effects.consume(code)
      return trail
    }

    // `&` followed by one or more alphabeticals and then a `;`, is
    // as a whole considered as trailing punctuation.
    // In all other cases, it is considered as continuation of the URL.
    if (code === codes.ampersand) {
      effects.consume(code)
      return trailCharacterReferenceStart
    }

    // Needed because we allow literals after `[`, as we fix:
    // <https://github.com/github/cmark-gfm/issues/278>.
    // Check that it is not followed by `(` or `[`.
    if (code === codes.rightSquareBracket) {
      effects.consume(code)
      return trailBracketAfter
    }

    if (
      // `<` is an end.
      code === codes.lessThan ||
      // So is whitespace.
      code === codes.eof ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      return ok(code)
    }

    return nok(code)
  }

  /**
   * In trail, after `]`.
   *
   * > 👉 **Note**: this deviates from `cmark-gfm` to fix a bug.
   * > See end of <https://github.com/github/cmark-gfm/issues/278> for more.
   *
   * ```markdown
   * > | https://example.com](
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailBracketAfter(code) {
    // Whitespace or something that could start a resource or reference is the end.
    // Switch back to trail otherwise.
    if (
      code === codes.eof ||
      code === codes.leftParenthesis ||
      code === codes.leftSquareBracket ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      return ok(code)
    }

    return trail(code)
  }

  /**
   * In character-reference like trail, after `&`.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailCharacterReferenceStart(code) {
    // When non-alpha, it’s not a trail.
    return asciiAlpha(code) ? trailCharacterReferenceInside(code) : nok(code)
  }

  /**
   * In character-reference like trail.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailCharacterReferenceInside(code) {
    // Switch back to trail if this is well-formed.
    if (code === codes.semicolon) {
      effects.consume(code)
      return trail
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return trailCharacterReferenceInside
    }

    // It’s not a trail.
    return nok(code)
  }
}

/**
 * Dot in email domain trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | contact@example.org.
 *                        ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeEmailDomainDotTrail(effects, ok, nok) {
  return start

  /**
   * Dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                    ^   ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // Must be dot.
    effects.consume(code)
    return after
  }

  /**
   * After dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                     ^   ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // Not a trail if alphanumeric.
    return asciiAlphanumeric(code) ? nok(code) : ok(code)
  }
}

/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L156>.
 *
 * @type {Previous}
 */
function previousWww(code) {
  return (
    code === codes.eof ||
    code === codes.leftParenthesis ||
    code === codes.asterisk ||
    code === codes.underscore ||
    code === codes.leftSquareBracket ||
    code === codes.rightSquareBracket ||
    code === codes.tilde ||
    markdownLineEndingOrSpace(code)
  )
}

/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L214>.
 *
 * @type {Previous}
 */
function previousProtocol(code) {
  return !asciiAlpha(code)
}

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previousEmail(code) {
  // Do not allow a slash “inside” atext.
  // The reference code is a bit weird, but that’s what it results in.
  // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L307>.
  // Other than slash, every preceding character is allowed.
  return !(code === codes.slash || gfmAtext(code))
}

/**
 * @param {Code} code
 * @returns {boolean}
 */
function gfmAtext(code) {
  return (
    code === codes.plusSign ||
    code === codes.dash ||
    code === codes.dot ||
    code === codes.underscore ||
    asciiAlphanumeric(code)
  )
}

/**
 * @param {Array<Event>} events
 * @returns {boolean}
 */
function previousUnbalanced(events) {
  let index = events.length
  let result = false

  while (index--) {
    const token = events[index][1]

    if (
      (token.type === 'labelLink' || token.type === 'labelImage') &&
      !token._balanced
    ) {
      result = true
      break
    }

    // If we’ve seen this token, and it was marked as not having any unbalanced
    // bracket before it, we can exit.
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false
      break
    }
  }

  if (events.length > 0 && !result) {
    // Mark the last token as “walked into” w/o finding
    // anything.
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true
  }

  return result
}

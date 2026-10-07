// Process [link](<to> "stuff")

import { normalizeReference, isSpace } from '../common/utils.mjs'

export default function link (state, silent) {
  let code, label, res, ref
  let href = ''
  let title = ''
  let start = state.pos
  let parseReference = true

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false }

  const oldPos = state.pos
  const max = state.posMax
  const labelStart = state.pos + 1
  const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true)

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false }

  let pos = labelEnd + 1
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos)
      if (!isSpace(code) && code !== 0x0A) { break }
    }
    if (pos >= max) { return false }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax)
    if (res.ok) {
      href = state.md.normalizeLink(res.str)
      if (state.md.validateLink(href)) {
        pos = res.pos
      } else {
        href = ''
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos)
        if (!isSpace(code) && code !== 0x0A) { break }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax)
      if (pos < max && start !== pos && res.ok) {
        title = res.str
        pos = res.pos

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos)
          if (!isSpace(code) && code !== 0x0A) { break }
        }
      }
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true
    }
    pos++
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1
      pos = state.md.helpers.parseLinkLabel(state, pos)
      if (pos >= 0) {
        label = state.src.slice(start, pos++)
      } else {
        pos = labelEnd + 1
      }
    } else {
      pos = labelEnd + 1
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd) }

    ref = state.env.references[normalizeReference(label)]
    if (!ref) {
      state.pos = oldPos
      return false
    }
    href = ref.href
    title = ref.title
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart
    state.posMax = labelEnd

    const token_o = state.push('link_open', 'a', 1)
    const attrs = [['href', href]]
    token_o.attrs  = attrs
    if (title) {
      attrs.push(['title', title])
    }

    state.linkLevel++
    state.md.inline.tokenize(state)
    state.linkLevel--

    state.push('link_close', 'a', -1)
  }

  state.pos = pos
  state.posMax = max
  return true
}

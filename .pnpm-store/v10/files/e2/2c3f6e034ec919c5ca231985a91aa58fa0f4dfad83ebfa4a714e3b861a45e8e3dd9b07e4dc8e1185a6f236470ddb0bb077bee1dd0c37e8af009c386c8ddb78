// Parse link title
//

import { unescapeAll } from '../common/utils.mjs'

// Parse link title within `str` in [start, max] range,
// or continue previous parsing if `prev_state` is defined (equal to result of last execution).
//
export default function parseLinkTitle (str, start, max, prev_state) {
  let code
  let pos = start

  const state = {
    // if `true`, this is a valid link title
    ok: false,
    // if `true`, this link can be continued on the next line
    can_continue: false,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: '',
    // expected closing marker character code
    marker: 0
  }

  if (prev_state) {
    // this is a continuation of a previous parseLinkTitle call on the next line,
    // used in reference links only
    state.str = prev_state.str
    state.marker = prev_state.marker
  } else {
    if (pos >= max) { return state }

    let marker = str.charCodeAt(pos)
    if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return state }

    start++
    pos++

    // if opening marker is "(", switch it to closing marker ")"
    if (marker === 0x28) { marker = 0x29 }

    state.marker = marker
  }

  while (pos < max) {
    code = str.charCodeAt(pos)
    if (code === state.marker) {
      state.pos = pos + 1
      state.str += unescapeAll(str.slice(start, pos))
      state.ok = true
      return state
    } else if (code === 0x28 /* ( */ && state.marker === 0x29 /* ) */) {
      return state
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++
    }

    pos++
  }

  // no closing marker found, but this link title may continue on the next line (for references)
  state.can_continue = true
  state.str += unescapeAll(str.slice(start, pos))
  return state
}

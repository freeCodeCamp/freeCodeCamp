// Process html entity - &#123;, &#xAF;, &quot;, ...

import { decodeHTML } from 'entities'
import { isValidEntityCode, fromCodePoint } from '../common/utils.mjs'

const DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i
const NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i

export default function entity (state, silent) {
  const pos = state.pos
  const max = state.posMax

  if (state.src.charCodeAt(pos) !== 0x26/* & */) return false

  if (pos + 1 >= max) return false

  const ch = state.src.charCodeAt(pos + 1)

  if (ch === 0x23 /* # */) {
    const match = state.src.slice(pos).match(DIGITAL_RE)
    if (match) {
      if (!silent) {
        const code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10)

        const token   = state.push('text_special', '', 0)
        token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD)
        token.markup  = match[0]
        token.info    = 'entity'
      }
      state.pos += match[0].length
      return true
    }
  } else {
    const match = state.src.slice(pos).match(NAMED_RE)
    if (match) {
      const decoded = decodeHTML(match[0])
      if (decoded !== match[0]) {
        if (!silent) {
          const token   = state.push('text_special', '', 0)
          token.content = decoded
          token.markup  = match[0]
          token.info    = 'entity'
        }
        state.pos += match[0].length
        return true
      }
    }
  }

  return false
}

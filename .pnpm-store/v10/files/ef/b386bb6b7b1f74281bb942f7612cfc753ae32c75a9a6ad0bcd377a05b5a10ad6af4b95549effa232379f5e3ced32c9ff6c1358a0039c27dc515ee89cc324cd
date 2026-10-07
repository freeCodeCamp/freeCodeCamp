// Process html tags

import { HTML_TAG_RE } from '../common/html_re.mjs'

function isLinkOpen (str) {
  return /^<a[>\s]/i.test(str)
}
function isLinkClose (str) {
  return /^<\/a\s*>/i.test(str)
}

function isLetter (ch) {
  /* eslint no-bitwise:0 */
  const lc = ch | 0x20 // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */)
}

export default function html_inline (state, silent) {
  if (!state.md.options.html) { return false }

  // Check start
  const max = state.posMax
  const pos = state.pos
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false
  }

  // Quick fail on second char
  const ch = state.src.charCodeAt(pos + 1)
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false
  }

  const match = state.src.slice(pos).match(HTML_TAG_RE)
  if (!match) { return false }

  if (!silent) {
    const token = state.push('html_inline', '', 0)
    token.content = match[0]

    if (isLinkOpen(token.content))  state.linkLevel++
    if (isLinkClose(token.content)) state.linkLevel--
  }
  state.pos += match[0].length
  return true
}

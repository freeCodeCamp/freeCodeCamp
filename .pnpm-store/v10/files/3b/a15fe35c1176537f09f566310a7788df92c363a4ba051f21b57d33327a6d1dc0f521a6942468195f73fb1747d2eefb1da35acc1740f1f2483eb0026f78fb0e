// Parse backticks

export default function backtick (state, silent) {
  let pos = state.pos
  const ch = state.src.charCodeAt(pos)

  if (ch !== 0x60/* ` */) { return false }

  const start = pos
  pos++
  const max = state.posMax

  // scan marker length
  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++ }

  const marker = state.src.slice(start, pos)
  const openerLength = marker.length

  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) state.pending += marker
    state.pos += openerLength
    return true
  }

  let matchEnd = pos
  let matchStart

  // Nothing found in the cache, scan until the end of the line (or until marker is found)
  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1

    // scan marker length
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++ }

    const closerLength = matchEnd - matchStart

    if (closerLength === openerLength) {
      // Found matching closer length.
      if (!silent) {
        const token = state.push('code_inline', 'code', 0)
        token.markup = marker
        token.content = state.src.slice(pos, matchStart)
          .replace(/\n/g, ' ')
          .replace(/^ (.+) $/, '$1')
      }
      state.pos = matchEnd
      return true
    }

    // Some different length found, put it in cache as upper limit of where closer can be found
    state.backticks[closerLength] = matchStart
  }

  // Scanned through the end, didn't find anything
  state.backticksScanned = true

  if (!silent) state.pending += marker
  state.pos += openerLength
  return true
}

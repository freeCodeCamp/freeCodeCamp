// Process autolinks '<protocol:...>'

/* eslint max-len:0 */
const EMAIL_RE    = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/
/* eslint-disable-next-line no-control-regex */
const AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/

export default function autolink (state, silent) {
  let pos = state.pos

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false }

  const start = state.pos
  const max = state.posMax

  for (;;) {
    if (++pos >= max) return false

    const ch = state.src.charCodeAt(pos)

    if (ch === 0x3C /* < */) return false
    if (ch === 0x3E /* > */) break
  }

  const url = state.src.slice(start + 1, pos)

  if (AUTOLINK_RE.test(url)) {
    const fullUrl = state.md.normalizeLink(url)
    if (!state.md.validateLink(fullUrl)) { return false }

    if (!silent) {
      const token_o   = state.push('link_open', 'a', 1)
      token_o.attrs   = [['href', fullUrl]]
      token_o.markup  = 'autolink'
      token_o.info    = 'auto'

      const token_t   = state.push('text', '', 0)
      token_t.content = state.md.normalizeLinkText(url)

      const token_c   = state.push('link_close', 'a', -1)
      token_c.markup  = 'autolink'
      token_c.info    = 'auto'
    }

    state.pos += url.length + 2
    return true
  }

  if (EMAIL_RE.test(url)) {
    const fullUrl = state.md.normalizeLink('mailto:' + url)
    if (!state.md.validateLink(fullUrl)) { return false }

    if (!silent) {
      const token_o   = state.push('link_open', 'a', 1)
      token_o.attrs   = [['href', fullUrl]]
      token_o.markup  = 'autolink'
      token_o.info    = 'auto'

      const token_t   = state.push('text', '', 0)
      token_t.content = state.md.normalizeLinkText(url)

      const token_c   = state.push('link_close', 'a', -1)
      token_c.markup  = 'autolink'
      token_c.info    = 'auto'
    }

    state.pos += url.length + 2
    return true
  }

  return false
}

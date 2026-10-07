// Process links like https://example.org/

// RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
const SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i

export default function linkify (state, silent) {
  if (!state.md.options.linkify) return false
  if (state.linkLevel > 0) return false

  const pos = state.pos
  const max = state.posMax

  if (pos + 3 > max) return false
  if (state.src.charCodeAt(pos) !== 0x3A/* : */) return false
  if (state.src.charCodeAt(pos + 1) !== 0x2F/* / */) return false
  if (state.src.charCodeAt(pos + 2) !== 0x2F/* / */) return false

  const match = state.pending.match(SCHEME_RE)
  if (!match) return false

  const proto = match[1]

  const link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length))
  if (!link) return false

  let url = link.url

  // invalid link, but still detected by linkify somehow;
  // need to check to prevent infinite loop below
  if (url.length <= proto.length) return false

  // disallow '*' at the end of the link (conflicts with emphasis)
  // do manual backsearch to avoid perf issues with regex /\*+$/ on "****...****a".
  let urlEnd = url.length
  while (urlEnd > 0 && url.charCodeAt(urlEnd - 1) === 0x2A/* * */) {
    urlEnd--
  }
  if (urlEnd !== url.length) {
    url = url.slice(0, urlEnd)
  }

  const fullUrl = state.md.normalizeLink(url)
  if (!state.md.validateLink(fullUrl)) return false

  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length)

    const token_o = state.push('link_open', 'a', 1)
    token_o.attrs = [['href', fullUrl]]
    token_o.markup = 'linkify'
    token_o.info = 'auto'

    const token_t = state.push('text', '', 0)
    token_t.content = state.md.normalizeLinkText(url)

    const token_c = state.push('link_close', 'a', -1)
    token_c.markup = 'linkify'
    token_c.info = 'auto'
  }

  state.pos += url.length - proto.length
  return true
}

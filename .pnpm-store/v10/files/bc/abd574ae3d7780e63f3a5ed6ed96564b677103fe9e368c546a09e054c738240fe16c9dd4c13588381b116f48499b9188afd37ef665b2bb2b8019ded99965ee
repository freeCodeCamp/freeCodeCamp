// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//

import { arrayReplaceAt } from '../common/utils.mjs'

function isLinkOpen (str) {
  return /^<a[>\s]/i.test(str)
}
function isLinkClose (str) {
  return /^<\/a\s*>/i.test(str)
}

export default function linkify (state) {
  const blockTokens = state.tokens

  if (!state.md.options.linkify) { return }

  for (let j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' ||
        !state.md.linkify.pretest(blockTokens[j].content)) {
      continue
    }

    let tokens = blockTokens[j].children

    let htmlLinkLevel = 0

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (let i = tokens.length - 1; i >= 0; i--) {
      const currentToken = tokens[i]

      // Skip content of markdown links
      if (currentToken.type === 'link_close') {
        i--
        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--
        }
        continue
      }

      // Skip content of html tag links
      if (currentToken.type === 'html_inline') {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++
        }
      }
      if (htmlLinkLevel > 0) { continue }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {
        const text = currentToken.content
        let links = state.md.linkify.match(text)

        // Now split string to nodes
        const nodes = []
        let level = currentToken.level
        let lastPos = 0

        // forbid escape sequence at the start of the string,
        // this avoids http\://example.com/ from being linkified as
        // http:<a href="//example.com/">//example.com/</a>
        if (links.length > 0 &&
            links[0].index === 0 &&
            i > 0 &&
            tokens[i - 1].type === 'text_special') {
          links = links.slice(1)
        }

        for (let ln = 0; ln < links.length; ln++) {
          const url = links[ln].url
          const fullUrl = state.md.normalizeLink(url)
          if (!state.md.validateLink(fullUrl)) { continue }

          let urlText = links[ln].text

          // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '')
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '')
          } else {
            urlText = state.md.normalizeLinkText(urlText)
          }

          const pos = links[ln].index

          if (pos > lastPos) {
            const token   = new state.Token('text', '', 0)
            token.content = text.slice(lastPos, pos)
            token.level   = level
            nodes.push(token)
          }

          const token_o   = new state.Token('link_open', 'a', 1)
          token_o.attrs   = [['href', fullUrl]]
          token_o.level   = level++
          token_o.markup  = 'linkify'
          token_o.info    = 'auto'
          nodes.push(token_o)

          const token_t   = new state.Token('text', '', 0)
          token_t.content = urlText
          token_t.level   = level
          nodes.push(token_t)

          const token_c   = new state.Token('link_close', 'a', -1)
          token_c.level   = --level
          token_c.markup  = 'linkify'
          token_c.info    = 'auto'
          nodes.push(token_c)

          lastPos = links[ln].lastIndex
        }
        if (lastPos < text.length) {
          const token   = new state.Token('text', '', 0)
          token.content = text.slice(lastPos)
          token.level   = level
          nodes.push(token)
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes)
      }
    }
  }
}

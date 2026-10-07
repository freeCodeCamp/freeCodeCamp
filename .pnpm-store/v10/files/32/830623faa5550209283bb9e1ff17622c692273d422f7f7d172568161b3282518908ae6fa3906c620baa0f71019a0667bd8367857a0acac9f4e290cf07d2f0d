// Simple typographic replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//

// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - multiplications 2 x 4 -> 2 × 4

const RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/

// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
const SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i

const SCOPED_ABBR_RE = /\((c|tm|r)\)/ig
const SCOPED_ABBR = {
  c: '©',
  r: '®',
  tm: '™'
}

function replaceFn (match, name) {
  return SCOPED_ABBR[name.toLowerCase()]
}

function replace_scoped (inlineTokens) {
  let inside_autolink = 0

  for (let i = inlineTokens.length - 1; i >= 0; i--) {
    const token = inlineTokens[i]

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn)
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++
    }
  }
}

function replace_rare (inlineTokens) {
  let inside_autolink = 0

  for (let i = inlineTokens.length - 1; i >= 0; i--) {
    const token = inlineTokens[i]

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content
          .replace(/\+-/g, '±')
          // .., ..., ....... -> …
          // but ?..... & !..... -> ?.. & !..
          .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
          .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
          // em-dash
          .replace(/(^|[^-])---(?=[^-]|$)/mg, '$1\u2014')
          // en-dash
          .replace(/(^|\s)--(?=\s|$)/mg, '$1\u2013')
          .replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, '$1\u2013')
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++
    }
  }
}

export default function replace (state) {
  let blkIdx

  if (!state.md.options.typographer) { return }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== 'inline') { continue }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children)
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children)
    }
  }
}

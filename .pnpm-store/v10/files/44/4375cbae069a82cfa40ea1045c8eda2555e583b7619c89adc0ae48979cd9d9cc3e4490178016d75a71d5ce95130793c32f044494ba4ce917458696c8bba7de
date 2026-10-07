// Join raw text tokens with the rest of the text
//
// This is set as a separate rule to provide an opportunity for plugins
// to run text replacements after text join, but before escape join.
//
// For example, `\:)` shouldn't be replaced with an emoji.
//

export default function text_join (state) {
  let curr, last
  const blockTokens = state.tokens
  const l = blockTokens.length

  for (let j = 0; j < l; j++) {
    if (blockTokens[j].type !== 'inline') continue

    const tokens = blockTokens[j].children
    const max = tokens.length

    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text_special') {
        tokens[curr].type = 'text'
      }
    }

    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text' &&
          curr + 1 < max &&
          tokens[curr + 1].type === 'text') {
        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content
      } else {
        if (curr !== last) { tokens[last] = tokens[curr] }

        last++
      }
    }

    if (curr !== last) {
      tokens.length = last
    }
  }
}

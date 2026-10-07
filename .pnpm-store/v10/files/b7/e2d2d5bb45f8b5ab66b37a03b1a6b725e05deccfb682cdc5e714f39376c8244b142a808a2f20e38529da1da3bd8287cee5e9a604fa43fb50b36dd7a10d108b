// Clean up tokens after emphasis and strikethrough postprocessing:
// merge adjacent text nodes into one and re-calculate all token levels
//
// This is necessary because initially emphasis delimiter markers (*, _, ~)
// are treated as their own separate text tokens. Then emphasis rule either
// leaves them as text (needed to merge with adjacent text) or turns them
// into opening/closing tags (which messes up levels inside).
//

export default function fragments_join (state) {
  let curr, last
  let level = 0
  const tokens = state.tokens
  const max = state.tokens.length

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels after emphasis/strikethrough turns some text nodes
    // into opening/closing tags
    if (tokens[curr].nesting < 0) level-- // closing tag
    tokens[curr].level = level
    if (tokens[curr].nesting > 0) level++ // opening tag

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

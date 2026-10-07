// Process *this* and _that_
//

// Insert each marker as a separate text token, and add it to delimiter list
//
function emphasis_tokenize (state, silent) {
  const start = state.pos
  const marker = state.src.charCodeAt(start)

  if (silent) { return false }

  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false }

  const scanned = state.scanDelims(state.pos, marker === 0x2A)

  for (let i = 0; i < scanned.length; i++) {
    const token = state.push('text', '', 0)
    token.content = String.fromCharCode(marker)

    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker,

      // Total length of these series of delimiters.
      //
      length: scanned.length,

      // A position of the token this delimiter corresponds to.
      //
      token: state.tokens.length - 1,

      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,

      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: scanned.can_open,
      close: scanned.can_close
    })
  }

  state.pos += scanned.length

  return true
}

function postProcess (state, delimiters) {
  const max = delimiters.length

  for (let i = max - 1; i >= 0; i--) {
    const startDelim = delimiters[i]

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
      continue
    }

    // Process only opening markers
    if (startDelim.end === -1) {
      continue
    }

    const endDelim = delimiters[startDelim.end]

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    const isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               // check that first two markers match and adjacent
               delimiters[i - 1].marker === startDelim.marker &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               // check that last two markers are adjacent (we can safely assume they match)
               delimiters[startDelim.end + 1].token === endDelim.token + 1

    const ch = String.fromCharCode(startDelim.marker)

    const token_o   = state.tokens[startDelim.token]
    token_o.type    = isStrong ? 'strong_open' : 'em_open'
    token_o.tag     = isStrong ? 'strong' : 'em'
    token_o.nesting = 1
    token_o.markup  = isStrong ? ch + ch : ch
    token_o.content = ''

    const token_c   = state.tokens[endDelim.token]
    token_c.type    = isStrong ? 'strong_close' : 'em_close'
    token_c.tag     = isStrong ? 'strong' : 'em'
    token_c.nesting = -1
    token_c.markup  = isStrong ? ch + ch : ch
    token_c.content = ''

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = ''
      state.tokens[delimiters[startDelim.end + 1].token].content = ''
      i--
    }
  }
}

// Walk through delimiter list and replace text tokens with tags
//
function emphasis_post_process (state) {
  const tokens_meta = state.tokens_meta
  const max = state.tokens_meta.length

  postProcess(state, state.delimiters)

  for (let curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters)
    }
  }
}

export default {
  tokenize: emphasis_tokenize,
  postProcess: emphasis_post_process
}

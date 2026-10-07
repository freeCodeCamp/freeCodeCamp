// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//

export default function parseLinkLabel (state, start, disableNested) {
  let level, found, marker, prevPos

  const max = state.posMax
  const oldPos = state.pos

  state.pos = start + 1
  level = 1

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos)
    if (marker === 0x5D /* ] */) {
      level--
      if (level === 0) {
        found = true
        break
      }
    }

    prevPos = state.pos
    state.md.inline.skipToken(state)
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++
      } else if (disableNested) {
        state.pos = oldPos
        return -1
      }
    }
  }

  let labelEnd = -1

  if (found) {
    labelEnd = state.pos
  }

  // restore old state
  state.pos = oldPos

  return labelEnd
}

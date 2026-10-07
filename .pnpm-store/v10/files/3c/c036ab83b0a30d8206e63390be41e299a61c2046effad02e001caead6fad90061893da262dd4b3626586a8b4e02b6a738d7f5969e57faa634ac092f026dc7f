// lheading (---, ===)

export default function lheading (state, startLine, endLine/*, silent */) {
  const terminatorRules = state.md.block.ruler.getRules('paragraph')

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false }

  const oldParentType = state.parentType
  state.parentType = 'paragraph' // use paragraph to match terminatorRules

  // jump line-by-line until empty one or EOF
  let level = 0
  let marker
  let nextLine = startLine + 1

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue }

    //
    // Check for underline in setext header
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      let pos = state.bMarks[nextLine] + state.tShift[nextLine]
      const max = state.eMarks[nextLine]

      if (pos < max) {
        marker = state.src.charCodeAt(pos)

        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
          pos = state.skipChars(pos, marker)
          pos = state.skipSpaces(pos)

          if (pos >= max) {
            level = (marker === 0x3D/* = */ ? 1 : 2)
            break
          }
        }
      }
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue }

    // Some tags can terminate paragraph without empty line.
    let terminate = false
    for (let i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true
        break
      }
    }
    if (terminate) { break }
  }

  if (!level) {
    // Didn't find valid underline
    return false
  }

  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim()

  state.line = nextLine + 1

  const token_o    = state.push('heading_open', 'h' + String(level), 1)
  token_o.markup   = String.fromCharCode(marker)
  token_o.map      = [startLine, state.line]

  const token_i    = state.push('inline', '', 0)
  token_i.content  = content
  token_i.map      = [startLine, state.line - 1]
  token_i.children = []

  const token_c    = state.push('heading_close', 'h' + String(level), -1)
  token_c.markup   = String.fromCharCode(marker)

  state.parentType = oldParentType

  return true
}

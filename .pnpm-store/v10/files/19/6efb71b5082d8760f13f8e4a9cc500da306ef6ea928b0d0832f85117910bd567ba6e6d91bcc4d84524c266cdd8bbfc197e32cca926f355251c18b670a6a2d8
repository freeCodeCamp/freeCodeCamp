// Convert straight quotation marks to typographic ones
//

import { isWhiteSpace, isPunctChar, isMdAsciiPunct } from '../common/utils.mjs'

const QUOTE_TEST_RE = /['"]/
const QUOTE_RE = /['"]/g
const APOSTROPHE = '\u2019' /* ’ */

function replaceAt (str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1)
}

function process_inlines (tokens, state) {
  let j

  const stack = []

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]

    const thisLevel = tokens[i].level

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) { break }
    }
    stack.length = j + 1

    if (token.type !== 'text') { continue }

    let text = token.content
    let pos = 0
    let max = text.length

    /* eslint no-labels:0,block-scoped-var:0 */
    OUTER:
    while (pos < max) {
      QUOTE_RE.lastIndex = pos
      const t = QUOTE_RE.exec(text)
      if (!t) { break }

      let canOpen = true
      let canClose = true
      pos = t.index + 1
      const isSingle = (t[0] === "'")

      // Find previous character,
      // default to space if it's the beginning of the line
      //
      let lastChar = 0x20

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1)
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break // lastChar defaults to 0x20
          if (!tokens[j].content) continue // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1)
          break
        }
      }

      // Find next character,
      // default to space if it's the end of the line
      //
      let nextChar = 0x20

      if (pos < max) {
        nextChar = text.charCodeAt(pos)
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break // nextChar defaults to 0x20
          if (!tokens[j].content) continue // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          nextChar = tokens[j].content.charCodeAt(0)
          break
        }
      }

      const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar))
      const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar))

      const isLastWhiteSpace = isWhiteSpace(lastChar)
      const isNextWhiteSpace = isWhiteSpace(nextChar)

      if (isNextWhiteSpace) {
        canOpen = false
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false
        }
      }

      if (isLastWhiteSpace) {
        canClose = false
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false
        }
      }

      if (nextChar === 0x22 /* " */ && t[0] === '"') {
        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false
        }
      }

      if (canOpen && canClose) {
        // Replace quotes in the middle of punctuation sequence, but not
        // in the middle of the words, i.e.:
        //
        // 1. foo " bar " baz - not replaced
        // 2. foo-"-bar-"-baz - replaced
        // 3. foo"bar"baz     - not replaced
        //
        canOpen = isLastPunctChar
        canClose = isNextPunctChar
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE)
        }
        continue
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          let item = stack[j]
          if (stack[j].level < thisLevel) { break }
          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j]

            let openQuote
            let closeQuote
            if (isSingle) {
              openQuote = state.md.options.quotes[2]
              closeQuote = state.md.options.quotes[3]
            } else {
              openQuote = state.md.options.quotes[0]
              closeQuote = state.md.options.quotes[1]
            }

            // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1
            token.content = replaceAt(token.content, t.index, closeQuote)
            tokens[item.token].content = replaceAt(
              tokens[item.token].content, item.pos, openQuote)

            pos += closeQuote.length - 1
            if (item.token === i) { pos += openQuote.length - 1 }

            text = token.content
            max = text.length

            stack.length = j
            continue OUTER
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        })
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE)
      }
    }
  }
}

export default function smartquotes (state) {
  /* eslint max-depth:0 */
  if (!state.md.options.typographer) { return }

  for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== 'inline' ||
        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue
    }

    process_inlines(state.tokens[blkIdx].children, state)
  }
}

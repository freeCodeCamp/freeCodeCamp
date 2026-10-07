// Parser state class

import Token from '../token.mjs'
import { isSpace } from '../common/utils.mjs'

function StateBlock (src, md, env, tokens) {
  this.src = src

  // link to parser instance
  this.md     = md

  this.env = env

  //
  // Internal state vartiables
  //

  this.tokens = tokens

  this.bMarks = []  // line begin offsets for fast jumps
  this.eMarks = []  // line end offsets for fast jumps
  this.tShift = []  // offsets of the first non-space characters (tabs not expanded)
  this.sCount = []  // indents for each line (tabs expanded)

  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //
  this.bsCount = []

  // block parser variables

  // required block content indent (for example, if we are
  // inside a list, it would be positioned after list marker)
  this.blkIndent  = 0
  this.line       = 0 // line index in src
  this.lineMax    = 0 // lines count
  this.tight      = false  // loose/tight mode for lists
  this.ddIndent   = -1 // indent of the current dd block (-1 if there isn't any)
  this.listIndent = -1 // indent of the current list block (-1 if there isn't any)

  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph
  this.parentType = 'root'

  this.level = 0

  // Create caches
  // Generate markers.
  const s = this.src

  for (let start = 0, pos = 0, indent = 0, offset = 0, len = s.length, indent_found = false; pos < len; pos++) {
    const ch = s.charCodeAt(pos)

    if (!indent_found) {
      if (isSpace(ch)) {
        indent++

        if (ch === 0x09) {
          offset += 4 - offset % 4
        } else {
          offset++
        }
        continue
      } else {
        indent_found = true
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++ }
      this.bMarks.push(start)
      this.eMarks.push(pos)
      this.tShift.push(indent)
      this.sCount.push(offset)
      this.bsCount.push(0)

      indent_found = false
      indent = 0
      offset = 0
      start = pos + 1
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length)
  this.eMarks.push(s.length)
  this.tShift.push(0)
  this.sCount.push(0)
  this.bsCount.push(0)

  this.lineMax = this.bMarks.length - 1 // don't count last fake line
}

// Push new token to "stream".
//
StateBlock.prototype.push = function (type, tag, nesting) {
  const token = new Token(type, tag, nesting)
  token.block = true

  if (nesting < 0) this.level-- // closing tag
  token.level = this.level
  if (nesting > 0) this.level++ // opening tag

  this.tokens.push(token)
  return token
}

StateBlock.prototype.isEmpty = function isEmpty (line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line]
}

StateBlock.prototype.skipEmptyLines = function skipEmptyLines (from) {
  for (let max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break
    }
  }
  return from
}

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces (pos) {
  for (let max = this.src.length; pos < max; pos++) {
    const ch = this.src.charCodeAt(pos)
    if (!isSpace(ch)) { break }
  }
  return pos
}

// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack = function skipSpacesBack (pos, min) {
  if (pos <= min) { return pos }

  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) { return pos + 1 }
  }
  return pos
}

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars (pos, code) {
  for (let max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break }
  }
  return pos
}

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack (pos, code, min) {
  if (pos <= min) { return pos }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1 }
  }
  return pos
}

// cut lines range from source.
StateBlock.prototype.getLines = function getLines (begin, end, indent, keepLastLF) {
  if (begin >= end) {
    return ''
  }

  const queue = new Array(end - begin)

  for (let i = 0, line = begin; line < end; line++, i++) {
    let lineIndent = 0
    const lineStart = this.bMarks[line]
    let first = lineStart
    let last

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1
    } else {
      last = this.eMarks[line]
    }

    while (first < last && lineIndent < indent) {
      const ch = this.src.charCodeAt(first)

      if (isSpace(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4
        } else {
          lineIndent++
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++
      } else {
        break
      }

      first++
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last)
    } else {
      queue[i] = this.src.slice(first, last)
    }
  }

  return queue.join('')
}

// re-export Token class to use in block rules
StateBlock.prototype.Token = Token

export default StateBlock

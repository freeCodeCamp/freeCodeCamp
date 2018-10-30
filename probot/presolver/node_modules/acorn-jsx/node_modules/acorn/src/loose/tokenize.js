import {tokTypes as tt, Token, isNewLine, SourceLocation, getLineInfo, lineBreakG} from "acorn"
import {LooseParser} from "./state"

const lp = LooseParser.prototype

function isSpace(ch) {
  return (ch < 14 && ch > 8) || ch === 32 || ch === 160 || isNewLine(ch)
}

lp.next = function() {
  this.last = this.tok
  if (this.ahead.length)
    this.tok = this.ahead.shift()
  else
    this.tok = this.readToken()

  if (this.tok.start >= this.nextLineStart) {
    while (this.tok.start >= this.nextLineStart) {
      this.curLineStart = this.nextLineStart
      this.nextLineStart = this.lineEnd(this.curLineStart) + 1
    }
    this.curIndent = this.indentationAfter(this.curLineStart)
  }
}

lp.readToken = function() {
  for (;;) {
    try {
      this.toks.next()
      if (this.toks.type === tt.dot &&
          this.input.substr(this.toks.end, 1) === "." &&
          this.options.ecmaVersion >= 6) {
        this.toks.end++
        this.toks.type = tt.ellipsis
      }
      return new Token(this.toks)
    } catch(e) {
      if (!(e instanceof SyntaxError)) throw e

      // Try to skip some text, based on the error message, and then continue
      let msg = e.message, pos = e.raisedAt, replace = true
      if (/unterminated/i.test(msg)) {
        pos = this.lineEnd(e.pos + 1)
        if (/string/.test(msg)) {
          replace = {start: e.pos, end: pos, type: tt.string, value: this.input.slice(e.pos + 1, pos)}
        } else if (/regular expr/i.test(msg)) {
          let re = this.input.slice(e.pos, pos)
          try { re = new RegExp(re) } catch(e) {}
          replace = {start: e.pos, end: pos, type: tt.regexp, value: re}
        } else if (/template/.test(msg)) {
          replace = {start: e.pos, end: pos,
                     type: tt.template,
                     value: this.input.slice(e.pos, pos)}
        } else {
          replace = false
        }
      } else if (/invalid (unicode|regexp|number)|expecting unicode|octal literal|is reserved|directly after number|expected number in radix/i.test(msg)) {
        while (pos < this.input.length && !isSpace(this.input.charCodeAt(pos))) ++pos
      } else if (/character escape|expected hexadecimal/i.test(msg)) {
        while (pos < this.input.length) {
          let ch = this.input.charCodeAt(pos++)
          if (ch === 34 || ch === 39 || isNewLine(ch)) break
        }
      } else if (/unexpected character/i.test(msg)) {
        pos++
        replace = false
      } else if (/regular expression/i.test(msg)) {
        replace = true
      } else {
        throw e
      }
      this.resetTo(pos)
      if (replace === true) replace = {start: pos, end: pos, type: tt.name, value: "✖"}
      if (replace) {
        if (this.options.locations)
          replace.loc = new SourceLocation(
            this.toks,
            getLineInfo(this.input, replace.start),
            getLineInfo(this.input, replace.end))
        return replace
      }
    }
  }
}

lp.resetTo = function(pos) {
  this.toks.pos = pos
  let ch = this.input.charAt(pos - 1)
  this.toks.exprAllowed = !ch || /[\[\{\(,;:?\/*=+\-~!|&%^<>]/.test(ch) ||
    /[enwfd]/.test(ch) &&
    /\b(keywords|case|else|return|throw|new|in|(instance|type)of|delete|void)$/.test(this.input.slice(pos - 10, pos))

  if (this.options.locations) {
    this.toks.curLine = 1
    this.toks.lineStart = lineBreakG.lastIndex = 0
    let match
    while ((match = lineBreakG.exec(this.input)) && match.index < pos) {
      ++this.toks.curLine
      this.toks.lineStart = match.index + match[0].length
    }
  }
}

lp.lookAhead = function(n) {
  while (n > this.ahead.length)
    this.ahead.push(this.readToken())
  return this.ahead[n - 1]
}

'use strict'

let pico = require('picocolors')

let terminalHighlight = require('./terminal-highlight')

class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin) {
    super(message)
    this.name = 'CssSyntaxError'
    this.reason = message

    if (file) {
      this.file = file
    }
    if (source) {
      this.source = source
    }
    if (plugin) {
      this.plugin = plugin
    }
    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      if (typeof line === 'number') {
        this.line = line
        this.column = column
      } else {
        this.line = line.line
        this.column = line.column
        this.endLine = column.line
        this.endColumn = column.column
      }
    }

    this.setMessage()

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError)
    }
  }

  setMessage() {
    this.message = this.plugin ? this.plugin + ': ' : ''
    this.message += this.file ? this.file : '<css input>'
    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column
    }
    this.message += ': ' + this.reason
  }

  showSourceCode(color) {
    if (!this.source) return ''

    let css = this.source
    if (color == null) color = pico.isColorSupported

    let aside = text => text
    let mark = text => text
    let highlight = text => text
    if (color) {
      let { bold, gray, red } = pico.createColors(true)
      mark = text => bold(red(text))
      aside = text => gray(text)
      if (terminalHighlight) {
        highlight = text => terminalHighlight(text)
      }
    }

    let lines = css.split(/\r?\n/)
    let start = Math.max(this.line - 3, 0)
    let end = Math.min(this.line + 2, lines.length)
    let maxWidth = String(end).length

    return lines
      .slice(start, end)
      .map((line, index) => {
        let number = start + 1 + index
        let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | '
        if (number === this.line) {
          if (line.length > 160) {
            let padding = 20
            let subLineStart = Math.max(0, this.column - padding)
            let subLineEnd = Math.max(
              this.column + padding,
              this.endColumn + padding
            )
            let subLine = line.slice(subLineStart, subLineEnd)

            let spacing =
              aside(gutter.replace(/\d/g, ' ')) +
              line
                .slice(0, Math.min(this.column - 1, padding - 1))
                .replace(/[^\t]/g, ' ')

            return (
              mark('>') +
              aside(gutter) +
              highlight(subLine) +
              '\n ' +
              spacing +
              mark('^')
            )
          }

          let spacing =
            aside(gutter.replace(/\d/g, ' ')) +
            line.slice(0, this.column - 1).replace(/[^\t]/g, ' ')

          return (
            mark('>') +
            aside(gutter) +
            highlight(line) +
            '\n ' +
            spacing +
            mark('^')
          )
        }

        return ' ' + aside(gutter) + highlight(line)
      })
      .join('\n')
  }

  toString() {
    let code = this.showSourceCode()
    if (code) {
      code = '\n\n' + code + '\n'
    }
    return this.name + ': ' + this.message + code
  }
}

module.exports = CssSyntaxError
CssSyntaxError.default = CssSyntaxError

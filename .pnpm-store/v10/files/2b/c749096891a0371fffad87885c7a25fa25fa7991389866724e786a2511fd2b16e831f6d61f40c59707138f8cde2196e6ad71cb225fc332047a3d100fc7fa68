'use strict'

const common = require('./common')

// get snippet for a single line, respecting maxLength
function getLine (buffer, lineStart, lineEnd, position, maxLineLength) {
  let head = ''
  let tail = ''
  const maxHalfLength = Math.floor(maxLineLength / 2) - 1

  if (position - lineStart > maxHalfLength) {
    head = ' ... '
    lineStart = position - maxHalfLength + head.length
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...'
    lineEnd = position + maxHalfLength - tail.length
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  }
}

function padStart (string, max) {
  return common.repeat(' ', max - string.length) + string
}

function makeSnippet (mark, options) {
  options = Object.create(options || null)

  if (!mark.buffer) return null

  if (!options.maxLength) options.maxLength = 79
  if (typeof options.indent !== 'number') options.indent = 1
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3
  if (typeof options.linesAfter !== 'number') options.linesAfter = 2

  const re = /\r?\n|\r|\0/g
  const lineStarts = [0]
  const lineEnds = []
  let match
  let foundLineNo = -1

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index)
    lineStarts.push(match.index + match[0].length)

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1

  let result = ''
  const lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length
  const maxLineLength = options.maxLength - (options.indent + lineNoLength + 3)

  for (let i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break
    const line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    )
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result
  }

  const line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength)
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n'
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n'

  for (let i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break
    const line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    )
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n'
  }

  return result.replace(/\n$/, '')
}

module.exports = makeSnippet

'use strict'

const tap = require('tap')
const joinLinesWithIndentation = require('./join-lines-with-indentation')

tap.test('joinLinesWithIndentation adds indentation to beginning of subsequent lines', async t => {
  const input = 'foo\nbar\nbaz'
  const result = joinLinesWithIndentation({ input })
  t.equal(result, 'foo\n    bar\n    baz')
})

tap.test('joinLinesWithIndentation accepts custom indentation, line breaks, and eol', async t => {
  const input = 'foo\nbar\r\nbaz'
  const result = joinLinesWithIndentation({ input, ident: '  ', eol: '^' })
  t.equal(result, 'foo^  bar^  baz')
})

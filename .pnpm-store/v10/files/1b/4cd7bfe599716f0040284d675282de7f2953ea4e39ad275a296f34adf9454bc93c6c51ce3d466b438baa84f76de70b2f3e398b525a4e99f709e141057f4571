'use strict'

const tap = require('tap')
const stringifySafe = require('fast-safe-stringify')
const prettifyError = require('./prettify-error')

tap.test('prettifies error', t => {
  const error = Error('Bad error!')
  const lines = stringifySafe(error, Object.getOwnPropertyNames(error), 2)

  const prettyError = prettifyError({ keyName: 'errorKey', lines, ident: '    ', eol: '\n' })
  t.match(prettyError, /\s*errorKey: {\n\s*"stack":[\s\S]*"message": "Bad error!"/)
  t.end()
})

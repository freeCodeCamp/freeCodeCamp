'use strict'
Object.freeze(console)
const test = require('tape')
const pino = require('../browser')

test('silent level', ({ end, fail, pass }) => {
  pino({
    level: 'silent',
    browser: { }
  })
  end()
})

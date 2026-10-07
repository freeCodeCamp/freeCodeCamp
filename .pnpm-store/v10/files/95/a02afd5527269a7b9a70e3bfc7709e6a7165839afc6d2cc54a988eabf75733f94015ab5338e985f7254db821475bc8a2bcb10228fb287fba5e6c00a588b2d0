'use strict'
const test = require('tape')
const pino = require('../browser')

test('set browser opts disabled to true', ({ end, same }) => {
  const instance = pino({
    browser: {
      disabled: true,
      write (actual) {
        checkLogObjects(same, actual, [])
      }
    }
  })
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('set browser opts disabled to false', ({ end, same }) => {
  const expected = [
    {
      level: 30,
      msg: 'hello world'
    },
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    browser: {
      disabled: false,
      write (actual) {
        checkLogObjects(same, actual, expected.shift())
      }
    }
  })
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('disabled is not set in browser opts', ({ end, same }) => {
  const expected = [
    {
      level: 30,
      msg: 'hello world'
    },
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    browser: {
      write (actual) {
        checkLogObjects(same, actual, expected.shift())
      }
    }
  })
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

function checkLogObjects (same, actual, expected, is) {
  const actualCopy = Object.assign({}, actual)
  const expectedCopy = Object.assign({}, expected)
  delete actualCopy.time
  delete expectedCopy.time

  same(actualCopy, expectedCopy)
}

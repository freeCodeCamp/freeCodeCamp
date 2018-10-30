const simple = require('simple-mock')
const test = require('tap').test

const wrapErrorHandler = require('../../event-handler/wrap-error-handler')

test('error thrown in error handler', t => {
  t.plan(2)

  const messages = []
  simple.mock(console, 'log', messages.push.bind(messages))
  t.doesNotThrow(() => {
    wrapErrorHandler(() => {
      throw new Error('oopsydoopsy')
    }, new Error('oops'))
  })

  t.ok(messages.find(message => /FATAL/.test(message)))
  simple.restore()
})

test('error handler returns rejected Error', t => {
  t.plan(2)

  const messages = []
  simple.mock(console, 'log', messages.push.bind(messages))
  const promise = Promise.reject(new Error('oopsydoopsy'))
  t.doesNotThrow(() => {
    wrapErrorHandler(() => promise, new Error('oops'))
  })

  promise.catch(() => {
    t.ok(messages.find(message => /FATAL/.test(message)))
    simple.restore()
  })
})

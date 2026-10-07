/* global test, expect */
'use strict'

const { createWarning } = require('..')

if (globalThis.test) {
  test('works with jest', done => {
    const code = createWarning({
      name: 'TestDeprecation',
      code: 'CODE',
      message: 'Hello world'
    })
    code('world')

    // we cannot actually listen to process warning event
    // because jest messes with it (that's the point of this test)
    // we can only test it was emitted indirectly
    // and test no exception is raised
    setImmediate(() => {
      expect(code.emitted).toBeTruthy()
      done()
    })
  })
}

'use strict'

const { Suite } = require('benchmark')
const { createWarning } = require('..')

const err1 = createWarning({
  name: 'TestWarning',
  code: 'TST_ERROR_CODE_1',
  message: 'message'
})
const err2 = createWarning({
  name: 'TestWarning',
  code: 'TST_ERROR_CODE_2',
  message: 'message'
})

new Suite()
  .add('warn', function () {
    err1()
    err2()
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run()

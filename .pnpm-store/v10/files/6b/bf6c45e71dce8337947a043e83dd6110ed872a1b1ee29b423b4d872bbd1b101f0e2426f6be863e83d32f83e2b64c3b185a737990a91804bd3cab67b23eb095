'use strict'

const t = require('tap')
const { register, unregister } = require('..')

process.on('warning', () => {
  t.fail('warning emitted')
})

const objs = []
for (let i = 0; i < 20; i++) {
  const obj = { i }
  objs.push(obj)
  register(obj, shutdown)
}

for (const obj of objs) {
  unregister(obj)
}

t.pass('completed')

function shutdown () {}

'use strict'

const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const fastify = require('../../fastify')()

test('should be the same as package.json', t => {
  t.plan(1)

  const json = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'package.json')).toString('utf8'))

  t.assert.strictEqual(fastify.version, json.version)
})

'use strict'

const { test } = require('node:test')
const FjsCompiler = require('../index')

test('Use input schema duplicate in the externalSchemas', async t => {
  t.plan(1)
  const externalSchemas = {
    schema1: {
      $id: 'schema1',
      type: 'number'
    },
    schema2: {
      $id: 'schema2',
      type: 'string'
    }
  }

  const factory = FjsCompiler()
  const compiler = factory(externalSchemas)

  compiler({ schema: externalSchemas.schema1 })
  compiler({ schema: externalSchemas.schema2 })

  t.assert.ok(true)
})

'use strict'

const { test } = require('node:test')
const AjvCompiler = require('../index')

const postSchema = Object.freeze({
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  $id: 'http://mydomain.com/user',
  title: 'User schema',
  description: 'Contains all user fields',
  properties: {
    username: { type: 'string', minLength: 4 },
    firstName: { type: 'string', minLength: 1 },
    lastName: { type: 'string', minLength: 1 },
    email: { type: 'string' },
    password: { type: 'string', minLength: 6 },
    bio: { type: 'string' }
  },
  required: ['username', 'firstName', 'lastName', 'email', 'bio', 'password']
})

const patchSchema = Object.freeze({
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  $id: 'http://mydomain.com/user',
  title: 'User schema',
  description: 'Contains all user fields',
  properties: {
    firstName: { type: 'string', minLength: 1 },
    lastName: { type: 'string', minLength: 1 },
    bio: { type: 'string' }
  }
})

const fastifyAjvOptionsDefault = Object.freeze({
  customOptions: {}
})

test('must not store schema on compile', t => {
  t.plan(5)
  const factory = AjvCompiler()
  const compiler = factory({}, fastifyAjvOptionsDefault)
  const postFn = compiler({ schema: postSchema })
  const patchFn = compiler({ schema: patchSchema })

  const resultForPost = postFn({})
  t.assert.deepStrictEqual(resultForPost, false)
  t.assert.deepStrictEqual(postFn.errors[0].keyword, 'required')
  t.assert.deepStrictEqual(postFn.errors[0].message, "must have required property 'username'")

  const resultForPatch = patchFn({})
  t.assert.ok(resultForPatch)
  t.assert.ok(!patchFn.errors)
})

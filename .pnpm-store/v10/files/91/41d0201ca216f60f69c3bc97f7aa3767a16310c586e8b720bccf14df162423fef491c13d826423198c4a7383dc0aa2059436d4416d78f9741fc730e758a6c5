'use strict'

const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const fastify = require('fastify')
const sanitize = require('sanitize-filename')

const { StandaloneValidator: AjvStandaloneValidator } = require('../')

function generateFileName (routeOpts) {
  return `/ajv-generated-${sanitize(routeOpts.schema.$id)}-${routeOpts.method}-${routeOpts.httpPart}-${sanitize(routeOpts.url)}.js`
}

const generatedFileNames = []

test('standalone', async t => {
  t.plan(4)

  t.after(async () => {
    for (const fileName of generatedFileNames) {
      await fs.promises.unlink(path.join(__dirname, fileName))
    }
  })

  t.test('errors', t => {
    t.plan(2)
    t.assert.throws(() => {
      AjvStandaloneValidator()
    }, 'missing restoreFunction')
    t.assert.throws(() => {
      AjvStandaloneValidator({ readMode: false })
    }, 'missing storeFunction')
  })

  t.test('generate standalone code', t => {
    t.plan(5)

    const base = {
      $id: 'urn:schema:base',
      definitions: {
        hello: { type: 'string' }
      },
      type: 'object',
      properties: {
        hello: { $ref: '#/definitions/hello' }
      }
    }

    const refSchema = {
      $id: 'urn:schema:ref',
      type: 'object',
      properties: {
        hello: { $ref: 'urn:schema:base#/definitions/hello' }
      }
    }

    const endpointSchema = {
      schema: {
        $id: 'urn:schema:endpoint',
        $ref: 'urn:schema:ref'
      }
    }

    const schemaMap = {
      [base.$id]: base,
      [refSchema.$id]: refSchema
    }

    const factory = AjvStandaloneValidator({
      readMode: false,
      storeFunction (routeOpts, schemaValidationCode) {
        t.assert.deepStrictEqual(routeOpts, endpointSchema)
        t.assert.ok(typeof schemaValidationCode === 'string')
        fs.writeFileSync(path.join(__dirname, '/ajv-generated.js'), schemaValidationCode)
        generatedFileNames.push('/ajv-generated.js')
        t.assert.ok('stored the validation function')
      }
    })

    const compiler = factory(schemaMap)
    compiler(endpointSchema)
    t.assert.ok('compiled the endpoint schema')

    t.test('usage standalone code', t => {
      t.plan(3)
      const standaloneValidate = require('./ajv-generated')

      const valid = standaloneValidate({ hello: 'world' })
      t.assert.ok(valid)

      const invalid = standaloneValidate({ hello: [] })
      t.assert.ok(!invalid)

      t.assert.ok(standaloneValidate)
    })
  })

  t.test('fastify integration - writeMode', async t => {
    t.plan(6)

    const factory = AjvStandaloneValidator({
      readMode: false,
      storeFunction (routeOpts, schemaValidationCode) {
        const fileName = generateFileName(routeOpts)
        t.assert.ok(routeOpts)
        fs.writeFileSync(path.join(__dirname, fileName), schemaValidationCode)
        t.assert.ok('stored the validation function')
        generatedFileNames.push(fileName)
      },
      restoreFunction () {
        t.assert.fail('write mode ON')
      }
    })

    const app = buildApp(factory)
    await app.ready()
  })

  await t.test('fastify integration - readMode', async t => {
    t.plan(6)

    const factory = AjvStandaloneValidator({
      readMode: true,
      storeFunction () {
        t.assert.fail('read mode ON')
      },
      restoreFunction (routeOpts) {
        t.assert.ok('restore the validation function')
        const fileName = generateFileName(routeOpts)
        return require(path.join(__dirname, fileName))
      }
    })

    const app = buildApp(factory)
    await app.ready()

    let res = await app.inject({
      url: '/foo',
      method: 'POST',
      payload: { hello: [] }
    })
    t.assert.deepStrictEqual(res.statusCode, 400)

    res = await app.inject({
      url: '/bar?lang=invalid',
      method: 'GET'
    })
    t.assert.deepStrictEqual(res.statusCode, 400)

    res = await app.inject({
      url: '/bar?lang=it',
      method: 'GET'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
  })

  function buildApp (factory) {
    const app = fastify({
      jsonShorthand: false,
      schemaController: {
        compilersFactory: {
          buildValidator: factory
        }
      }
    })

    app.addSchema({
      $id: 'urn:schema:foo',
      type: 'object',
      properties: {
        name: { type: 'string' },
        id: { type: 'integer' }
      }
    })

    app.post('/foo', {
      schema: {
        body: {
          $id: 'urn:schema:body',
          type: 'object',
          properties: {
            hello: { $ref: 'urn:schema:foo#/properties/name' }
          }
        }
      }
    }, () => { return 'ok' })

    app.get('/bar', {
      schema: {
        query: {
          $id: 'urn:schema:query',
          type: 'object',
          properties: {
            lang: { type: 'string', enum: ['it', 'en'] }
          }
        }
      }
    }, () => { return 'ok' })

    return app
  }
})

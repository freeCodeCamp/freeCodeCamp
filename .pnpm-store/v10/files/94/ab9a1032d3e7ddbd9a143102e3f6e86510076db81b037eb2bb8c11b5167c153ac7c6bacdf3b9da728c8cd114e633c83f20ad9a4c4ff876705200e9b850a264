'use strict'

const fs = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const fastify = require('fastify')
const sanitize = require('sanitize-filename')

const { StandaloneSerializer: FjsStandaloneCompiler } = require('../')

const generatedFileNames = []

function generateFileName (routeOpts) {
  const fileName = `/fjs-generated-${sanitize(routeOpts.schema.$id)}-${routeOpts.method}-${routeOpts.httpPart}-${sanitize(routeOpts.url)}.js`
  generatedFileNames.push(fileName)
  return fileName
}

test('standalone', async t => {
  t.plan(5)

  t.after(async () => {
    for (const fileName of generatedFileNames) {
      try {
        await fs.promises.unlink(path.join(__dirname, fileName))
      } catch {}
    }
  })

  t.test('errors', t => {
    t.plan(2)
    t.assert.throws(() => {
      FjsStandaloneCompiler()
    }, 'missing restoreFunction')
    t.assert.throws(() => {
      FjsStandaloneCompiler({ readMode: false })
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

    const factory = FjsStandaloneCompiler({
      readMode: false,
      storeFunction (routeOpts, schemaSerializerCode) {
        t.assert.deepStrictEqual(routeOpts, endpointSchema)
        t.assert.ok(typeof schemaSerializerCode === 'string')
        fs.writeFileSync(path.join(__dirname, '/fjs-generated.js'), schemaSerializerCode)
        generatedFileNames.push('/fjs-generated.js')
        t.assert.ok('stored the serializer function')
      }
    })

    const compiler = factory(schemaMap)
    compiler(endpointSchema)
    t.assert.ok('compiled the endpoint schema')

    t.test('usage standalone code', t => {
      t.plan(3)
      const standaloneSerializer = require('./fjs-generated')
      t.assert.ok(standaloneSerializer)

      const valid = standaloneSerializer({ hello: 'world' })
      t.assert.deepStrictEqual(valid, JSON.stringify({ hello: 'world' }))

      const invalid = standaloneSerializer({ hello: [] })
      t.assert.deepStrictEqual(invalid, '{"hello":""}')
    })
  })

  t.test('fastify integration - writeMode', async t => {
    t.plan(4)

    const factory = FjsStandaloneCompiler({
      readMode: false,
      storeFunction (routeOpts, schemaSerializationCode) {
        const fileName = generateFileName(routeOpts)
        t.assert.ok(routeOpts)
        fs.writeFileSync(path.join(__dirname, fileName), schemaSerializationCode)
        t.assert.ok(`stored the serializer function ${fileName}`)
      },
      restoreFunction () {
        t.fail('write mode ON')
      }
    })

    const app = buildApp(factory)
    await app.ready()
  })

  await t.test('fastify integration - writeMode forces standalone', async t => {
    t.plan(4)

    const factory = FjsStandaloneCompiler({
      readMode: false,
      storeFunction (routeOpts, schemaSerializationCode) {
        const fileName = generateFileName(routeOpts)
        t.assert.ok(routeOpts)
        fs.writeFileSync(path.join(__dirname, fileName), schemaSerializationCode)
        t.assert.ok(`stored the serializer function ${fileName}`)
      },
      restoreFunction () {
        t.fail('write mode ON')
      }
    })

    const app = buildApp(factory, {
      mode: 'not-standalone',
      rounding: 'ceil'
    })

    await app.ready()
  })

  await t.test('fastify integration - readMode', async t => {
    t.plan(6)

    const factory = FjsStandaloneCompiler({
      readMode: true,
      storeFunction () {
        t.fail('read mode ON')
      },
      restoreFunction (routeOpts) {
        const fileName = generateFileName(routeOpts)
        t.assert.ok(`restore the serializer function ${fileName}}`)
        return require(path.join(__dirname, fileName))
      }
    })

    const app = buildApp(factory)
    await app.ready()

    let res = await app.inject({
      url: '/foo',
      method: 'POST'
    })
    t.assert.equal(res.statusCode, 200)
    t.assert.equal(res.payload, JSON.stringify({ hello: 'world' }))

    res = await app.inject({
      url: '/bar?lang=it',
      method: 'GET'
    })
    t.assert.equal(res.statusCode, 200)
    t.assert.equal(res.payload, JSON.stringify({ lang: 'en' }))
  })

  function buildApp (factory, serializerOpts) {
    const app = fastify({
      exposeHeadRoutes: false,
      jsonShorthand: false,
      schemaController: {
        compilersFactory: {
          buildSerializer: factory
        }
      },
      serializerOpts
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
        response: {
          200: {
            $id: 'urn:schema:response',
            type: 'object',
            properties: {
              hello: { $ref: 'urn:schema:foo#/properties/name' }
            }
          }
        }
      }
    }, () => { return { hello: 'world' } })

    app.get('/bar', {
      schema: {
        response: {
          200: {
            $id: 'urn:schema:response:bar',
            type: 'object',
            properties: {
              lang: { type: 'string', enum: ['it', 'en'] }
            }
          }
        }
      }
    }, () => { return { lang: 'en' } })

    return app
  }
})

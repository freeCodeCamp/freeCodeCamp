const { sep } = require('node:path')
const { test } = require('node:test')
const Fastify = require('../../fastify')

test('SchemaController are NOT loaded when the controllers are custom', async t => {
  const app = Fastify({
    schemaController: {
      compilersFactory: {
        buildValidator: () => () => { },
        buildSerializer: () => () => { }
      }
    }
  })

  await app.ready()

  const loaded = Object.keys(require.cache)
  const ajvModule = loaded.find((path) => path.includes(`@fastify${sep}ajv-compiler`))
  const stringifyModule = loaded.find((path) => path.includes(`@fastify${sep}fast-json-stringify-compiler`))

  t.assert.equal(ajvModule, undefined, 'Ajv compiler is loaded')
  t.assert.equal(stringifyModule, undefined, 'Stringify compiler is loaded')
})

test('SchemaController are loaded when the controllers are not custom', async t => {
  const app = Fastify()
  await app.ready()

  const loaded = Object.keys(require.cache)
  const ajvModule = loaded.find((path) => path.includes(`@fastify${sep}ajv-compiler`))
  const stringifyModule = loaded.find((path) => path.includes(`@fastify${sep}fast-json-stringify-compiler`))

  t.after(() => {
    delete require.cache[ajvModule]
    delete require.cache[stringifyModule]
  })

  t.assert.ok(ajvModule, 'Ajv compiler is loaded')
  t.assert.ok(stringifyModule, 'Stringify compiler is loaded')
})

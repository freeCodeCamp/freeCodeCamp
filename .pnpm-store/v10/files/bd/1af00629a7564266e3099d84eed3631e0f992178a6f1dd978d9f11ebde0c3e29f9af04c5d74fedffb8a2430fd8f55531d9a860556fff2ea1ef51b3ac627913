'use strict'

const nodeTest = require('node:test')
const test = nodeTest.test
const Fastify = require('fastify')
const Swagger = require('@apidevtools/swagger-parser')
const yaml = require('yaml')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('../index')
const {
  schemaQuerystring,
  schemaBody,
  schemaParams,
  schemaSecurity,
  swaggerOption
} = require('../examples/options')

const resolve = require('node:path').resolve
const join = require('node:path').join
const readFileSync = require('node:fs').readFileSync

const schemaParamsWithoutDesc = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        }
      }
    }
  }
}

const schemaParamsWithKey = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'user id'
        },
        key: {
          type: 'string',
          description: 'just some random key'
        }
      }
    }
  }
}

test('/documentation/json route', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/json'
  })

  const payload = JSON.parse(res.payload)

  await Swagger.validate(payload)
  t.assert.ok(true, 'valid swagger object')
})

test('fastify.swagger should return a valid swagger yaml', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})
  fastify.all('/parametersWithoutDesc/:id', schemaParamsWithoutDesc, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/yaml'
  })

  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual(res.headers['content-type'], 'application/x-yaml')
  yaml.parse(res.payload)
  t.assert.ok(true, 'valid swagger yaml')
})

test('/documentation should display index html', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

test('/documentation/ should display index html ', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

test('/v1/documentation should display index html', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { routePrefix: '/v1/documentation' })

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/v1/documentation'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

test('/v1/documentation/ should display index html', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { routePrefix: '/v1/documentation' })

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/v1/documentation/'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

test('/v1/foobar should display index html', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.register(async function (fastify) {
    await fastify.register(fastifySwagger, swaggerOption)
    await fastify.register(fastifySwaggerUi, { routePrefix: '/foobar', noRedirect: true })

    fastify.get('/', () => {})
    fastify.post('/', () => {})
    fastify.get('/example', schemaQuerystring, () => {})
    fastify.post('/example', schemaBody, () => {})
    fastify.get('/parameters/:id', schemaParams, () => {})
    fastify.get('/example1', schemaSecurity, () => {})
  }, { prefix: '/v1' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/v1/foobar'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

test('/v1/foobar/ should display index html', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.register(async function (fastify) {
    await fastify.register(fastifySwagger, swaggerOption)
    await fastify.register(fastifySwaggerUi, { routePrefix: '/foobar' })

    fastify.get('/', () => {})
    fastify.post('/', () => {})
    fastify.get('/example', schemaQuerystring, () => {})
    fastify.post('/example', schemaBody, () => {})
    fastify.get('/parameters/:id', schemaParams, () => {})
    fastify.get('/example1', schemaSecurity, () => {})
  }, { prefix: '/v1' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/v1/foobar/'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

test('with routePrefix: \'/\' should display index html', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { routePrefix: '/' })

  fastify.get('/foo', () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

test('/documentation/static/:file should send back the correct file', async (t) => {
  t.plan(21)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  await fastify.ready()

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/index.html'
    })
    t.assert.deepStrictEqual(res.statusCode, 302)
    t.assert.deepStrictEqual(res.headers.location, '/documentation/')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/'
    })
    t.assert.deepStrictEqual(typeof res.payload, 'string')
    t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
    t.assert.deepStrictEqual(
      readFileSync(
        resolve(__dirname, '..', 'static', 'index.html'),
        'utf8'
      ),
      res.payload
    )
    t.assert.ok(res.payload.indexOf('swagger-initializer.js') !== -1)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/swagger-initializer.js'
    })
    t.assert.deepStrictEqual(typeof res.payload, 'string')
    t.assert.deepStrictEqual(res.headers['content-type'], 'application/javascript; charset=utf-8')
    t.assert.ok(res.payload.indexOf('resolveUrl') !== -1)
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/oauth2-redirect.html'
    })
    t.assert.deepStrictEqual(typeof res.payload, 'string')
    t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
    t.assert.deepStrictEqual(
      readFileSync(
        resolve(__dirname, '..', 'static', 'oauth2-redirect.html'),
        'utf8'
      ),
      res.payload
    )
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/swagger-ui.css'
    })
    t.assert.deepStrictEqual(typeof res.payload, 'string')
    t.assert.deepStrictEqual(res.headers['content-type'], 'text/css; charset=utf-8')
    t.assert.deepStrictEqual(
      readFileSync(
        resolve(__dirname, '..', 'static', 'swagger-ui.css'),
        'utf8'
      ),
      res.payload
    )
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/swagger-ui-bundle.js'
    })
    t.assert.deepStrictEqual(typeof res.payload, 'string')
    t.assert.deepStrictEqual(res.headers['content-type'], 'application/javascript; charset=utf-8')
    t.assert.deepStrictEqual(
      readFileSync(
        resolve(__dirname, '..', 'static', 'swagger-ui-bundle.js'),
        'utf8'
      ),
      res.payload
    )
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/swagger-ui-standalone-preset.js'
    })
    t.assert.deepStrictEqual(typeof res.payload, 'string')
    t.assert.deepStrictEqual(res.headers['content-type'], 'application/javascript; charset=utf-8')
    t.assert.deepStrictEqual(
      readFileSync(
        resolve(__dirname, '..', 'static', 'swagger-ui-standalone-preset.js'),
        'utf8'
      ),
      res.payload
    )
  }
})

test('/documentation/static/:file should send back file from baseDir', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  const uiConfig = {
    baseDir: resolve(__dirname, '..', 'examples', 'static')
  }

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, uiConfig)

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/example-logo.svg'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(
      res.payload,
      readFileSync(
        resolve(__dirname, '..', 'examples', 'static', 'example-logo.svg'),
        'utf8'
      )
    )
  }
})

test('/documentation/static/:file 404', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/static/stuff.css'
  })
  const payload = JSON.parse(res.payload)
  t.assert.deepStrictEqual(res.statusCode, 404)
  t.assert.deepStrictEqual(payload, {
    error: 'Not Found',
    message: 'Route GET:/documentation/static/stuff.css not found',
    statusCode: 404
  })
})

test('/documentation2/json route (overwrite)', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { routePrefix: '/documentation2' })

  fastify.get('/', () => {})
  fastify.post('/', () => {})
  fastify.get('/example', schemaQuerystring, () => {})
  fastify.post('/example', schemaBody, () => {})
  fastify.get('/parameters/:id', schemaParams, () => {})
  fastify.get('/example1', schemaSecurity, () => {})
  fastify.get('/parameters/:id/:key', schemaParamsWithKey, () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation2/json'
  })

  const payload = JSON.parse(res.payload)

  await Swagger.validate(payload)
  t.assert.ok(true, 'valid swagger object')
})

test('/documentation/:myfile should return 404 in dynamic mode', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/swagger-ui.js'
  })
  t.assert.deepStrictEqual(res.statusCode, 404)
})

test('/documentation/:myfile should run custom NotFoundHandler in dynamic mode', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  const notFoundHandler = function (_req, reply) {
    reply.code(410).send()
  }
  fastify.setNotFoundHandler(notFoundHandler)
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/swagger-ui.js'
  })
  t.assert.deepStrictEqual(res.statusCode, 410)
})

test('/documentation/* should not return module files when baseDir not set', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/README.md'
  })
  t.assert.deepStrictEqual(res.statusCode, 404)
})

test('should return silent log level of route /documentation', async (t) => {
  const fastify = Fastify()

  fastify.addHook('onRoute', function (route) {
    t.assert.deepStrictEqual(route.logLevel, 'silent')
  })

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { logLevel: 'silent' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
})

test('should return empty log level of route /documentation', async (t) => {
  const fastify = Fastify()

  fastify.addHook('onRoute', function (route) {
    t.assert.deepStrictEqual(route.logLevel, '')
  })

  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi)

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
})

const assertIndexUrls = (t, indexHtml, prefix) => {
  t.assert.deepStrictEqual(indexHtml.includes(`href="${prefix}/static/index.css"`), true)
  t.assert.deepStrictEqual(indexHtml.includes(`src="${prefix}/static/theme/theme-js.js"`), true)
  t.assert.deepStrictEqual(indexHtml.includes(`href="${prefix}/index.css"`), false)
  t.assert.deepStrictEqual(indexHtml.includes(`src="${prefix}/theme/theme-js.js"`), false)
}

const validateIndexUrls = async (t, fastify, indexHtml, prefix = '') => {
  const hrefs = indexHtml.matchAll(/href="([^"]*)"/g)
  for (const [, path] of hrefs) {
    const res = await fastify.inject({
      method: 'GET',
      url: join(prefix, path)
    })

    t.assert.equal(res.statusCode, 200)
  }
  const srcs = indexHtml.matchAll(/src="([^"]*)"/g)
  for (const [, path] of srcs) {
    const res = await fastify.inject({
      method: 'GET',
      url: join(prefix, path)
    })
    t.assert.equal(res.statusCode, 200)
  }
}

test('/documentation should display index html with correct asset urls', async (t) => {
  t.plan(13)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] } })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })
  t.assert.equal(res.statusCode, 200)

  assertIndexUrls(t, res.payload, '/documentation')
  await validateIndexUrls(t, fastify, res.payload)
})

/**
 * This emulates when the server is inside an NGINX application that routes by path
 */
const testCases = [
  ['/swagger-app', undefined],
  ['/swagger-app/', undefined],
  ['/swagger-app', 'documentation']
]
testCases.forEach(([prefix, pluginPrefix]) => {
  test(`${prefix} ${pluginPrefix} should display index html with correct asset urls when nested`, async (t) => {
    t.plan(13)
    const fastify = Fastify()
    await fastify.register(
      async (childFastify) => {
        await childFastify.register(fastifySwagger, swaggerOption)
        await childFastify.register(fastifySwaggerUi, { indexPrefix: prefix, routePrefix: pluginPrefix, theme: { js: [{ filename: 'theme-js.js' }] } })
      },
      {
        prefix: '/swagger-app'
      }
    )

    const res = await fastify.inject({
      method: 'GET',
      url: '/swagger-app/documentation'
    })
    t.assert.equal(res.statusCode, 200)

    assertIndexUrls(t, res.payload, '/swagger-app/documentation')

    await validateIndexUrls(t, fastify, res.payload)
  })
})

/**
 * This emulates when the server is inside an NGINX application that routes by path
 */
test('/api/v1/docs should display index html with correct asset urls', async (t) => {
  t.plan(13)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { routePrefix: '/api/v1/docs', theme: { js: [{ filename: 'theme-js.js' }] } })

  const res = await fastify.inject({
    method: 'GET',
    url: '/api/v1/docs'
  })
  t.assert.equal(res.statusCode, 200)
  assertIndexUrls(t, res.payload, '/api/v1/docs')
  await validateIndexUrls(t, fastify, res.payload)
})

test('/documentation/ should display index html with correct asset urls', async (t) => {
  t.plan(13)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] } })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/'
  })
  t.assert.equal(res.statusCode, 200)

  assertIndexUrls(t, res.payload, '.')
  await validateIndexUrls(t, fastify, res.payload, '/documentation/')
})

test('/docs should display index html with correct asset urls when documentation prefix is set', async (t) => {
  t.plan(13)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] }, routePrefix: '/docs' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/docs'
  })
  t.assert.equal(res.statusCode, 200)

  assertIndexUrls(t, res.payload, '/docs')
  await validateIndexUrls(t, fastify, res.payload)
})

test('/docs should display index html with correct asset urls when documentation prefix is set with no leading slash', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] }, routePrefix: 'docs' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/docs'
  })

  t.assert.strictEqual(res.payload.includes('href="docs/static/index.css"'), true)
  t.assert.strictEqual(res.payload.includes('src="docs/static/theme/theme-js.js"'), true)
  t.assert.strictEqual(res.payload.includes('href="docs/index.css"'), false)
  t.assert.strictEqual(res.payload.includes('src="docs/theme/theme-js.js"'), false)
})

test('/docs/ should display index html with correct asset urls when documentation prefix is set', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] }, routePrefix: '/docs' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/docs/'
  })

  t.assert.strictEqual(res.payload.includes('href="./static/index.css"'), true)
  t.assert.strictEqual(res.payload.includes('src="./static/theme/theme-js.js"'), true)
  t.assert.strictEqual(res.payload.includes('href="./index.css"'), false)
  t.assert.strictEqual(res.payload.includes('src="./theme/theme-js.js"'), false)
})

test('/documentation/ should display index html with correct asset urls', async (t) => {
  t.plan(13)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] } })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation/'
  })
  t.assert.equal(res.statusCode, 200)

  assertIndexUrls(t, res.payload, '.')

  await validateIndexUrls(t, fastify, res.payload, '/documentation')
})

test('/docs should display index html with correct asset urls when documentation prefix is set', async (t) => {
  t.plan(13)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] }, routePrefix: '/docs' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/docs'
  })
  t.assert.equal(res.statusCode, 200)

  assertIndexUrls(t, res.payload, '/docs')

  await validateIndexUrls(t, fastify, res.payload)
})

test('/docs/ should display index html with correct asset urls when documentation prefix is set', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { theme: { js: [{ filename: 'theme-js.js' }] }, routePrefix: '/docs' })

  const res = await fastify.inject({
    method: 'GET',
    url: '/docs/'
  })

  t.assert.strictEqual(res.payload.includes('href="./static/index.css"'), true)
  t.assert.strictEqual(res.payload.includes('src="./static/theme/theme-js.js"'), true)
  t.assert.strictEqual(res.payload.includes('href="./index.css"'), false)
  t.assert.strictEqual(res.payload.includes('src="./theme/theme-js.js"'), false)
})

test('should ignore prefix when register plugin', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, swaggerOption)
  await fastify.register(fastifySwaggerUi, { routePrefix: '/v1/documentation', prefix: '/' })

  fastify.get('/', () => {})

  const res = await fastify.inject({
    method: 'GET',
    url: '/v1/documentation'
  })
  t.assert.deepStrictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(res.headers.location, undefined)
  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual('text/html; charset=utf-8', res.headers['content-type'])
})

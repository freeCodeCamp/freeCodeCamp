'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('../index')

test('swagger route does not return additional theme', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  t.plan(5)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, { theme: null })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })

  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.deepStrictEqual(/theme\/special\.js/.test(res.payload), false)
  t.assert.deepStrictEqual(/theme\/favicon\.png/.test(res.payload), false)
  t.assert.deepStrictEqual(/theme\/theme\.css/.test(res.payload), false)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
})

test('swagger route returns additional theme', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  t.plan(9)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, {
    theme: {
      js: [
        { filename: 'special.js', content: 'alert("loaded test-theme")' }
      ],
      css: [
        { filename: 'theme.css', content: '* {border: 1px red solid;}' }
      ],
      favicon: [
        {
          filename: 'favicon.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          content: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAQAAABjX+2PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+cCEQ06N8A8CiUAAADnSURBVBjTrdE/K8QBAMbxz/0TLrnUWcTg7ySLewGEwWDRzSYpyULJbGG6wWBTlMEbkHsFNnVloAwXudIlnDru1O9nOCex3rM89TzL0/eh1Ypo//Zk5CdM6JP2IWFOxbmMKZVmPWzbrJSamG5FNXUFx42yV16oqCQUerNr2pghsSgS1sw4kxNVVvbu3rwjSwJ67Kgq2XMjtO/AnWsnVgwQNy6rQ8GkURWBpCebXnR5gA11j5b1OxT4EKq6dGurMWvQqqw2LPoUKDq1LqPzN4q0rCuvckbE/pOakHdhQfwvwKan8Nzad74AkR8/Ir6qAvAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMTdUMTM6NTg6NTUrMDA6MDBjkr64AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTE3VDEzOjU4OjU1KzAwOjAwEs8GBAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xN1QxMzo1ODo1NSswMDowMEXaJ9sAAAAASUVORK5CYII=', 'base64')
        }
      ]
    }
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })

  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.match(res.payload, /theme\/special\.js/)
  t.assert.match(res.payload, /theme\/favicon\.png/)
  t.assert.match(res.payload, /theme\/theme\.css/)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/theme/special.js'
    })
    t.assert.deepStrictEqual(res.payload, 'alert("loaded test-theme")')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/theme/favicon.png'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-type'], 'image/png')
  }

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/theme/theme.css'
    })
    t.assert.deepStrictEqual(res.payload, '* {border: 1px red solid;}')
  }
})

test('swagger route returns additional theme - only js', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, {
    theme: {
      js: [
        { filename: 'special.js', content: 'alert("loaded test-theme")' }
      ]
    }
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })

  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.match(res.payload, /theme\/special\.js/)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/theme/special.js'
    })
    t.assert.deepStrictEqual(res.payload, 'alert("loaded test-theme")')
  }
})

test('swagger route returns additional theme - only css', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  t.plan(4)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, {
    theme: {
      css: [
        { filename: 'theme.css', content: '* {border: 1px red solid;}' }
      ]
    }
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })

  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.match(res.payload, /theme\/theme\.css/)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/theme/theme.css'
    })
    t.assert.deepStrictEqual(res.payload, '* {border: 1px red solid;}')
  }
})

test('swagger route returns additional theme - only favicon', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  t.plan(5)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, {
    theme: {
      favicon: [
        {
          filename: 'favicon.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          content: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAQAAABjX+2PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+cCEQ06N8A8CiUAAADnSURBVBjTrdE/K8QBAMbxz/0TLrnUWcTg7ySLewGEwWDRzSYpyULJbGG6wWBTlMEbkHsFNnVloAwXudIlnDru1O9nOCex3rM89TzL0/eh1Ypo//Zk5CdM6JP2IWFOxbmMKZVmPWzbrJSamG5FNXUFx42yV16oqCQUerNr2pghsSgS1sw4kxNVVvbu3rwjSwJ67Kgq2XMjtO/AnWsnVgwQNy6rQ8GkURWBpCebXnR5gA11j5b1OxT4EKq6dGurMWvQqqw2LPoUKDq1LqPzN4q0rCuvckbE/pOakHdhQfwvwKan8Nzad74AkR8/Ir6qAvAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMTdUMTM6NTg6NTUrMDA6MDBjkr64AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTE3VDEzOjU4OjU1KzAwOjAwEs8GBAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xN1QxMzo1ODo1NSswMDowMEXaJ9sAAAAASUVORK5CYII=', 'base64')
        }
      ]
    }
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })

  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.match(res.payload, /theme\/favicon\.png/)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')

  {
    const res = await fastify.inject({
      method: 'GET',
      url: '/documentation/static/theme/favicon.png'
    })
    t.assert.deepStrictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(res.headers['content-type'], 'image/png')
  }
})

test('swagger route returns additional theme - only title', async (t) => {
  const config = {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.yaml'
    }
  }

  t.plan(3)
  const fastify = Fastify()
  await fastify.register(fastifySwagger, config)
  await fastify.register(fastifySwaggerUi, {
    theme: {
      title: 'My custom title'
    }
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/documentation'
  })

  t.assert.deepStrictEqual(typeof res.payload, 'string')
  t.assert.match(res.payload, /<title>My custom title<\/title>/)
  t.assert.deepStrictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
})

'use strict'

const path = require('node:path')
const yaml = require('yaml')
const fastifyStatic = require('@fastify/static')
const rfdc = require('rfdc')()
const swaggerInitializer = require('./swagger-initializer')
const indexHtml = require('./index-html')

// URI prefix to separate static assets for swagger UI
const staticPrefix = '/static'

function fastifySwagger (fastify, opts, done) {
  let staticCSP = false
  if (opts.staticCSP === true) {
    const csp = fastify.swaggerCSP
    staticCSP = `default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data: validator.swagger.io; object-src 'none'; script-src 'self' ${csp.script.join(' ')}; script-src-attr 'none'; style-src 'self' https: ${csp.style.join(' ')}; upgrade-insecure-requests;`
  }
  if (typeof opts.staticCSP === 'string') {
    staticCSP = opts.staticCSP
  }
  if (typeof opts.staticCSP === 'object' && opts.staticCSP !== null) {
    staticCSP = ''
    Object.keys(opts.staticCSP).forEach(function (key) {
      const value = Array.isArray(opts.staticCSP[key]) ? opts.staticCSP[key].join(' ') : opts.staticCSP[key]
      staticCSP += `${key.toLowerCase()} ${value}; `
    })
  }

  if (typeof staticCSP === 'string' || typeof opts.transformStaticCSP === 'function') {
    fastify.addHook('onSend', function (_request, reply, _payload, done) {
      // set static csp when it is passed
      if (typeof staticCSP === 'string') {
        reply.header('content-security-policy', staticCSP.trim())
      }
      // mutate the header when it is passed
      const header = reply.getHeader('content-security-policy')
      if (header && typeof opts.transformStaticCSP === 'function') {
        reply.header('content-security-policy', opts.transformStaticCSP(header))
      }
      done()
    })
  }

  const hooks = Object.create(null)
  if (opts.hooks) {
    const additionalHooks = [
      'onRequest',
      'preHandler'
    ]
    for (const hook of additionalHooks) {
      hooks[hook] = opts.hooks[hook]
    }
  }

  if (opts.theme) {
    const themePrefix = `${staticPrefix}/theme`
    if (opts.theme.css) {
      for (const cssFile of opts.theme.css) {
        fastify.route({
          url: `${themePrefix}/${cssFile.filename}`,
          method: 'GET',
          schema: { hide: true },
          ...hooks,
          handler: (_req, reply) => {
            reply
              .header('content-type', 'text/css; charset=UTF-8')
              .send(cssFile.content)
          }
        })
      }
    }

    if (opts.theme.js) {
      for (const jsFile of opts.theme.js) {
        fastify.route({
          url: `${themePrefix}/${jsFile.filename}`,
          method: 'GET',
          schema: { hide: true },
          ...hooks,
          handler: (_req, reply) => {
            reply
              .header('content-type', 'application/javascript; charset=utf-8')
              .send(jsFile.content)
          }
        })
      }
    }

    if (opts.theme.favicon) {
      for (const favicon of opts.theme.favicon) {
        fastify.route({
          url: `${themePrefix}/${favicon.filename}`,
          method: 'GET',
          schema: { hide: true },
          ...hooks,
          handler: (_req, reply) => {
            reply
              .header('content-type', favicon.type)
              .send(favicon.content)
          }
        })
      }
    }
  }

  const indexHtmlContent = indexHtml({ ...opts, staticPrefix })

  fastify.route({
    url: '/',
    method: 'GET',
    schema: { hide: true },
    ...hooks,
    handler: (req, reply) => {
      reply
        .header('content-type', 'text/html; charset=utf-8')
        .send(indexHtmlContent(req.url)) // trailing slash alters the relative urls generated in the html
    }
  })

  fastify.route({
    url: `${staticPrefix}/index.html`,
    method: 'GET',
    schema: { hide: true },
    ...hooks,
    handler: (req, reply) => {
      reply.redirect(req.url.replace(/\/static\/index\.html$/, '/'))
    }
  })

  const swaggerInitializerContent = swaggerInitializer(opts)

  fastify.route({
    url: `${staticPrefix}/swagger-initializer.js`,
    method: 'GET',
    schema: { hide: true },
    ...hooks,
    handler: (_req, reply) => {
      reply
        .header('content-type', 'application/javascript; charset=utf-8')
        .send(swaggerInitializerContent)
    }
  })

  const hasTransformSpecificationFn = typeof opts.transformSpecification === 'function'
  const shouldCloneSwaggerObject = opts.transformSpecificationClone ?? true
  const transformSpecification = opts.transformSpecification
  fastify.route({
    url: '/json',
    method: 'GET',
    schema: { hide: true },
    ...hooks,
    handler: hasTransformSpecificationFn
      ? shouldCloneSwaggerObject
        ? function (req, reply) {
          reply.send(transformSpecification(rfdc(fastify.swagger()), req, reply))
        }
        : function (req, reply) {
          reply.send(transformSpecification(fastify.swagger(), req, reply))
        }
      : function (_req, reply) {
        reply.send(fastify.swagger())
      }
  })

  fastify.route({
    url: '/yaml',
    method: 'GET',
    schema: { hide: true },
    ...hooks,
    handler: hasTransformSpecificationFn
      ? shouldCloneSwaggerObject
        ? function (req, reply) {
          reply
            .type('application/x-yaml')
            .send(yaml.stringify(transformSpecification(rfdc(fastify.swagger()), req, reply)))
        }
        : function (req, reply) {
          reply
            .type('application/x-yaml')
            .send(yaml.stringify(transformSpecification(fastify.swagger(), req, reply)))
        }
      : function (_req, reply) {
        reply
          .type('application/x-yaml')
          .send(fastify.swagger({ yaml: true }))
      }
  })

  // serve swagger-ui with the help of @fastify/static
  fastify.register(fastifyStatic, {
    root: opts.baseDir || path.join(__dirname, '..', 'static'),
    prefix: staticPrefix,
    decorateReply: false
  })

  if (opts.baseDir) {
    fastify.register(fastifyStatic, {
      root: opts.baseDir,
      serve: false
    })

    // Handler for external documentation files passed via $ref
    fastify.route({
      url: '/*',
      method: 'GET',
      schema: { hide: true },
      ...hooks,
      handler: function (req, reply) {
        const file = req.params['*']
        reply.sendFile(file)
      }
    })
  }

  done()
}

module.exports = fastifySwagger

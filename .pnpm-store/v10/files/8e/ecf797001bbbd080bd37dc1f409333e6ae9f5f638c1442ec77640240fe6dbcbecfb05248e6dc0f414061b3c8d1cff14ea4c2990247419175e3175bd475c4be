'use strict'

const Fastify = require('fastify')
const readFileSync = require('node:fs').readFileSync
const resolve = require('node:path').resolve

const exampleLogo = readFileSync(
  resolve(__dirname, '..', 'examples/static', 'example-logo.svg'),
  'utf8'
)

; (async () => {
  const fastify = Fastify({ logger: true })

  await fastify.register(require('@fastify/swagger'), {
    mode: 'static',
    specification: {
      path: './examples/example-static-specification.json'
    }
  })

  await fastify.register(require('../index'), {
    theme: {
      js: [
        { filename: 'unloaded.js', content: 'window.onbeforeunload = function(){alert("unloaded test-theme")}' }
      ],
      css: [
        { filename: 'theme.css', content: '.download-url-button {background: red !important;}' }
      ],
      favicon: [
        {
          filename: 'favicon.svg',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/svg+xml',
          content: exampleLogo
        }
      ]
    },
    logo: {
      type: 'image/svg+xml',
      content: exampleLogo
    }
  })

  fastify.listen({ port: process.env.PORT }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/documentation/`)
  })
})()

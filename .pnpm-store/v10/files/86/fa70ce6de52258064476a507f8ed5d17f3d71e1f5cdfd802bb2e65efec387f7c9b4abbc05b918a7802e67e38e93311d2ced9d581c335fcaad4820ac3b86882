'use strict'

const Fastify = require('fastify')

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

  fastify.listen({ port: 3000 }, (err, addr) => {
    if (err) throw err
    fastify.log.info(`Visit the documentation at ${addr}/documentation/`)
  })
})()

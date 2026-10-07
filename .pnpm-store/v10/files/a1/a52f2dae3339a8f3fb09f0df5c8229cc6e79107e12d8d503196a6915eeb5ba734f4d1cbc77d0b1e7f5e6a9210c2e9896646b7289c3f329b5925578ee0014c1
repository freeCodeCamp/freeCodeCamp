'use strict'

const fs = require('node:fs')
const path = require('node:path')

// package.json:version -> fastify.js:VERSION
const { version } = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json')).toString('utf8'))

const fastifyJs = path.join(__dirname, '..', 'fastify.js')

fs.writeFileSync(fastifyJs, fs.readFileSync(fastifyJs).toString('utf8').replace(/const\s*VERSION\s*=.*/, `const VERSION = '${version}'`))

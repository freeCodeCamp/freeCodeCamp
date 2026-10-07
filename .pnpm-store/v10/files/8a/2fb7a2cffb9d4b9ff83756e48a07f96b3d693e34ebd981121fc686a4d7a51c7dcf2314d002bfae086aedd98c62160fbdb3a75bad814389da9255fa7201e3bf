'use strict'

const accepts = require('accepts')

const fp = require('fastify-plugin')

const acceptsObjectSymbol = Symbol('acceptsObject')

const methodNames = [
  'charset', 'charsets',
  'encoding', 'encodings',
  'language', 'languages',
  'type', 'types'
]

/** @this {import('fastify').FastifyRequest} */
function acceptsMethod () {
  if (!this.raw[acceptsObjectSymbol]) {
    this.raw[acceptsObjectSymbol] = accepts(this.raw)
  }
  return this.raw[acceptsObjectSymbol]
}

/** @this {import('fastify').FastifyReply} */
function replyAcceptMethod () {
  if (!this.request[acceptsObjectSymbol]) {
    this.request[acceptsObjectSymbol] = accepts(this.request.raw)
  }
  return this.request[acceptsObjectSymbol]
}

/** @type {typeof import('./types/index').fastifyAccepts} */
function fastifyAccepts (fastify, options, done) {
  fastify.decorateRequest('accepts', acceptsMethod)

  const methodNamesLength = methodNames.length
  for (let i = 0; i < methodNamesLength; i += 1) {
    const methodName = methodNames[i]
    // Defining methods this way to ensure named functions show in stack traces
    fastify.decorateRequest(methodName, {
      [methodName]: function (arr) {
        const acceptsObject = this.accepts()
        if (arguments.length === 0) return acceptsObject[methodName]()
        return acceptsObject[methodName](arr)
      }
    }[methodName])
  }

  if (options.decorateReply === true) {
    fastify.decorateReply('requestAccepts', replyAcceptMethod)

    for (let i = 0; i < methodNamesLength; i += 1) {
      const methodName = methodNames[i]
      const capitalizedMethodName = methodName.replace(/(?:^|\s)\S/gu, a => a.toUpperCase())
      const replyMethodName = 'request' + capitalizedMethodName
      const acceptsMethodName = 'accepts' + capitalizedMethodName
      // Defining methods this way to ensure named functions show in stack traces
      fastify.decorateReply(replyMethodName, {
        [acceptsMethodName]: function (arr) {
          const acceptsObject = this.requestAccepts()
          if (arguments.length === 0) return acceptsObject[methodName]()
          return acceptsObject[methodName](arr)
        }
      }[acceptsMethodName])
    }
  }

  done()
}

module.exports = fp(fastifyAccepts, {
  fastify: '5.x',
  name: '@fastify/accepts'
})
module.exports.default = fastifyAccepts
module.exports.fastifyAccepts = fastifyAccepts

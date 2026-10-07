'use strict'
function headRouteOnSendHandler (req, reply, payload, done) {
  // If payload is undefined
  if (payload === undefined) {
    reply.header('content-length', '0')
    done(null, null)
    return
  }

  // node:stream
  if (typeof payload.resume === 'function') {
    payload.on('error', (err) => {
      reply.log.error({ err }, 'Error on Stream found for HEAD route')
    })
    payload.resume()
    done(null, null)
    return
  }

  // node:stream/web
  if (typeof payload.getReader === 'function') {
    payload.cancel('Stream cancelled by HEAD route').catch((err) => {
      reply.log.error({ err }, 'Error on Stream found for HEAD route')
    })
    done(null, null)
    return
  }

  const size = '' + Buffer.byteLength(payload)

  reply.header('content-length', size)

  done(null, null)
}

function parseHeadOnSendHandlers (onSendHandlers) {
  if (onSendHandlers == null) return headRouteOnSendHandler
  return Array.isArray(onSendHandlers)
    ? [...onSendHandlers, headRouteOnSendHandler]
    : [onSendHandlers, headRouteOnSendHandler]
}

module.exports = {
  parseHeadOnSendHandlers
}

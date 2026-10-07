'use strict'

const { randomUUID } = require('node:crypto')
const { Readable } = require('node:stream')

let textEncoder

function isFormDataLike (payload) {
  return (
    payload &&
    typeof payload === 'object' &&
    typeof payload.append === 'function' &&
    typeof payload.delete === 'function' &&
    typeof payload.get === 'function' &&
    typeof payload.getAll === 'function' &&
    typeof payload.has === 'function' &&
    typeof payload.set === 'function' &&
    payload[Symbol.toStringTag] === 'FormData'
  )
}

/*
  partial code extraction and refactoring of `undici`.
  MIT License. https://github.com/nodejs/undici/blob/043d8f1a89f606b1db259fc71f4c9bc8eb2aa1e6/lib/web/fetch/LICENSE
  Reference https://github.com/nodejs/undici/blob/043d8f1a89f606b1db259fc71f4c9bc8eb2aa1e6/lib/web/fetch/body.js#L102-L168
*/
function formDataToStream (formdata) {
  // lazy creation of TextEncoder
  textEncoder = textEncoder ?? new TextEncoder()

  // we expect the function argument must be FormData
  const boundary = `----formdata-${randomUUID()}`
  const prefix = `--${boundary}\r\nContent-Disposition: form-data`

  /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
  const escape = (str) =>
    str.replace(/\n/g, '%0A').replace(/\r/g, '%0D').replace(/"/g, '%22')
  const normalizeLinefeeds = (value) => value.replace(/\r?\n|\r/g, '\r\n')

  const linebreak = new Uint8Array([13, 10]) // '\r\n'

  async function * asyncIterator () {
    for (const [name, value] of formdata) {
      if (typeof value === 'string') {
        // header
        yield textEncoder.encode(`${prefix}; name="${escape(normalizeLinefeeds(name))}"\r\n\r\n`)
        // body
        yield textEncoder.encode(`${normalizeLinefeeds(value)}\r\n`)
      } else {
        let header = `${prefix}; name="${escape(normalizeLinefeeds(name))}"`
        value.name && (header += `; filename="${escape(value.name)}"`)
        header += `\r\nContent-Type: ${value.type || 'application/octet-stream'}\r\n\r\n`
        // header
        yield textEncoder.encode(header)
        // body
        if (value.stream) {
          yield * value.stream()
        } /* c8 ignore start */ else {
          // shouldn't be here since Blob / File should provide .stream
          // and FormData always convert to USVString
          yield value
        } /* c8 ignore stop */
        yield linebreak
      }
    }
    // end
    yield textEncoder.encode(`--${boundary}--`)
  }

  const stream = Readable.from(asyncIterator())

  return {
    stream,
    contentType: `multipart/form-data; boundary=${boundary}`
  }
}

module.exports.isFormDataLike = isFormDataLike
module.exports.formDataToStream = formDataToStream

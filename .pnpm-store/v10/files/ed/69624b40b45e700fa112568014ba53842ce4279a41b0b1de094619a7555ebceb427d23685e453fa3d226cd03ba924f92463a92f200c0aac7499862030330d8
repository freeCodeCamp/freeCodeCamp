'use strict'

const http = require('node:http')
const os = require('node:os')
const fs = require('node:fs')

const path = require('node:path')

function createDeferredPromise () {
  const promise = {}
  promise.promise = new Promise(function (resolve) {
    promise.resolve = resolve
  })
  return promise
}

let count = 0
function createTempFile () {
  const file = path.join(os.tmpdir(), `sonic-boom-${process.pid}-${count++}`)
  function cleanup () {
    try {
      fs.unlinkSync(file)
    } catch { }
  }
  return { file, cleanup }
}

function request (url, cleanup = () => { }) {
  const promise = createDeferredPromise()
  http.get(url, (res) => {
    const chunks = []
    // we consume the response
    res.on('data', function (chunk) {
      chunks.push(chunk)
    })
    res.once('end', function () {
      cleanup(res, Buffer.concat(chunks).toString())
      promise.resolve()
    })
  })
  return promise.promise
}

module.exports = {
  request,
  createTempFile
}

'use strict'

const benchmark = require('benchmark')
const isUtf8MimeType = require('../lib/isUtf8MimeType').isUtf8MimeType

const applicationJson = 'application/json'
const applicationJavascript = 'application/javascript'
const textJson = 'text/json'
const textHtml = 'text/html'
const textJavascript = 'text/javascript'
const imagePng = 'image/png'

new benchmark.Suite()
  .add('isUtf8MimeType', function () {
    isUtf8MimeType(applicationJson)
    isUtf8MimeType(applicationJavascript)
    isUtf8MimeType(imagePng)
    isUtf8MimeType(textJson)
    isUtf8MimeType(textHtml)
    isUtf8MimeType(textJavascript)
  }, { minSamples: 100 })
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })

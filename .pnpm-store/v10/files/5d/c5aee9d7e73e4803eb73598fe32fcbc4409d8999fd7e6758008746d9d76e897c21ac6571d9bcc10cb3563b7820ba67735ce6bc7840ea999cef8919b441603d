'use strict'

const fastDecode = require('fast-decode-uri-component')

const Benchmark = require('benchmark')
Benchmark.options.minSamples = 500

const suite = Benchmark.Suite()

const uri = [
  encodeURIComponent(' /?!#@=[](),\'"'),
  encodeURIComponent('algunas palabras aquí'),
  encodeURIComponent('acde=bdfd'),
  encodeURIComponent('много русских букв'),
  encodeURIComponent('這裡有些話'),
  encodeURIComponent('कुछ शब्द यहाँ'),
  encodeURIComponent('✌👀🎠🎡🍺')
]

function safeFastDecode (uri) {
  if (uri.indexOf('%') < 0) return uri
  try {
    return fastDecode(uri)
  } catch (e) {
    return null // or it can be null
  }
}

function safeDecodeURIComponent (uri) {
  if (uri.indexOf('%') < 0) return uri
  try {
    return decodeURIComponent(uri)
  } catch (e) {
    return null // or it can be null
  }
}

uri.forEach(function (u, i) {
  suite.add(`safeDecodeURIComponent(${i}) [${u}]`, function () {
    safeDecodeURIComponent(u)
  })
  suite.add(`fastDecode(${i}) [${u}]`, function () {
    fastDecode(u)
  })
  suite.add(`safeFastDecode(${i}) [${u}]`, function () {
    safeFastDecode(u)
  })
})
suite
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
  })
  .run()

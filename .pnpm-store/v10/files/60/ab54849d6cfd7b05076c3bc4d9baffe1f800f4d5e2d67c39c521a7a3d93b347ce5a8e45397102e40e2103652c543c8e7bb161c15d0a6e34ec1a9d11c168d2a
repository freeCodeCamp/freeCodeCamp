'use strict'

const bench = require('nanobench')
const fastDecode = require('./index')

const uri = [
  'test', 'a+b+c+d', '=a', '%25', '%%25%%', 'st%C3%A5le', 'st%C3%A5le%', '%st%C3%A5le%', '%%7Bst%C3%A5le%7D%',
  '%ab%C3%A5le%', '%C3%A5%able%', '%7B%ab%7C%de%7D', '%7B%ab%%7C%de%%7D', '%7 B%ab%%7C%de%%7 D', '%61+%4d%4D',
  '\uFEFFtest', '\uFEFF', '%EF%BB%BFtest', '%EF%BB%BF', '†', '%C2%B5', '%C2%B5%', '%%C2%B5%', '%ab', '%ab%ab%ab',
  '%', '%E0%A4%A', '/test/hel%"Flo', '/test/hel%2Flo'
]

const uriLen = uri.length

bench('fast-decode-uri-component', b => {
  b.start()
  for (var round = 0; round < 100000; round++) {
    for (var i = 0; i < uriLen; i++) {
      fastDecode(uri[i])
    }
  }
  b.end()
})

bench('decodeURIComponent', b => {
  b.start()
  for (var round = 0; round < 100000; round++) {
    for (var i = 0; i < uriLen; i++) {
      try {
        decodeURIComponent(uri[i])
      } catch (e) {}
    }
  }
  b.end()
})

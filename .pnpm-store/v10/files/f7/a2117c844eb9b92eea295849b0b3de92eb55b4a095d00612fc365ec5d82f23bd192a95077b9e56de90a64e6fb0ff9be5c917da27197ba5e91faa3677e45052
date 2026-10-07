'use strict'

const benchmark = require('benchmark')
const suite = new benchmark.Suite()
const fasturi = require('./')
const urijs = require('uri-js')

const base = 'uri://a/b/c/d;p?q'

const domain = 'https://example.com/foo#bar$fiz'
const ipv4 = '//10.10.10.10'
const ipv6 = '//[2001:db8::7]'
const urn = 'urn:foo:a123,456'
const urnuuid = 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6'

// Initialization as there is a lot to parse at first
// eg: regexes
fasturi.parse(domain)
urijs.parse(domain)

suite.add('fast-uri: parse domain', function () {
  fasturi.parse(domain)
})
suite.add('urijs: parse domain', function () {
  urijs.parse(domain)
})
suite.add('WHATWG URL: parse domain', function () {
  // eslint-disable-next-line
  new URL(domain)
})
suite.add('fast-uri: parse IPv4', function () {
  fasturi.parse(ipv4)
})
suite.add('urijs: parse IPv4', function () {
  urijs.parse(ipv4)
})
suite.add('fast-uri: parse IPv6', function () {
  fasturi.parse(ipv6)
})
suite.add('urijs: parse IPv6', function () {
  urijs.parse(ipv6)
})
suite.add('fast-uri: parse URN', function () {
  fasturi.parse(urn)
})
suite.add('urijs: parse URN', function () {
  urijs.parse(urn)
})
suite.add('WHATWG URL: parse URN', function () {
  // eslint-disable-next-line
  new URL(urn)
})
suite.add('fast-uri: parse URN uuid', function () {
  fasturi.parse(urnuuid)
})
suite.add('urijs: parse URN uuid', function () {
  urijs.parse(urnuuid)
})
suite.add('fast-uri: serialize uri', function () {
  fasturi.serialize({
    scheme: 'uri',
    userinfo: 'foo:bar',
    host: 'example.com',
    port: 1,
    path: 'path',
    query: 'query',
    fragment: 'fragment'
  })
})
suite.add('urijs: serialize uri', function () {
  urijs.serialize({
    scheme: 'uri',
    userinfo: 'foo:bar',
    host: 'example.com',
    port: 1,
    path: 'path',
    query: 'query',
    fragment: 'fragment'
  })
})
suite.add('fast-uri: serialize IPv6', function () {
  fasturi.serialize({ host: '2606:2800:220:1:248:1893:25c8:1946' })
})
suite.add('urijs: serialize IPv6', function () {
  urijs.serialize({ host: '2606:2800:220:1:248:1893:25c8:1946' })
})
suite.add('fast-uri: serialize ws', function () {
  fasturi.serialize({ scheme: 'ws', host: 'example.com', resourceName: '/foo?bar', secure: true })
})
suite.add('urijs: serialize ws', function () {
  urijs.serialize({ scheme: 'ws', host: 'example.com', resourceName: '/foo?bar', secure: true })
})
suite.add('fast-uri: resolve', function () {
  fasturi.resolve(base, '../../../g')
})
suite.add('urijs: resolve', function () {
  urijs.resolve(base, '../../../g')
})
suite.on('cycle', cycle)

suite.run()

function cycle (e) {
  console.log(e.target.toString())
}

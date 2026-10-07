'use strict'

const tap = require('tap')
const test = tap.test
const fastifyURI = require('../')
const urijs = require('uri-js')

test('compatibility Parse', (t) => {
  const toParse = [
    '//www.g.com/error\n/bleh/bleh',
    'https://fastify.org',
    '/definitions/Record%3Cstring%2CPerson%3E',
    '//10.10.10.10',
    '//10.10.000.10',
    '//[2001:db8::7%en0]',
    '//[2001:dbZ::1]:80',
    '//[2001:db8::1]:80',
    '//[2001:db8::001]:80',
    'uri://user:pass@example.com:123/one/two.three?q1=a1&q2=a2#body',
    'http://user:pass@example.com:123/one/space in.url?q1=a1&q2=a2#body',
    '//[::ffff:129.144.52.38]',
    'uri://10.10.10.10.example.com/en/process',
    '//[2606:2800:220:1:248:1893:25c8:1946]/test',
    'ws://example.com/chat',
    'ws://example.com/foo?bar=baz',
    'wss://example.com/?bar=baz',
    'wss://example.com/chat',
    'wss://example.com/foo?bar=baz',
    'wss://example.com/?bar=baz',
    'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
    'urn:uuid:notauuid-7dec-11d0-a765-00a0c91e6bf6',
    'urn:example:%D0%B0123,z456',
    '//[2606:2800:220:1:248:1893:25c8:1946:43209]',
    'http://foo.bar',
    'http://',
    '#/$defs/stringMap',
    '#/$defs/string%20Map',
    '#/$defs/string Map',
    '//?json=%7B%22foo%22%3A%22bar%22%7D'
    //  'mailto:chris@example.com'-203845,
    //  'mailto:infobot@example.com?subject=current-issue',
    //  'mailto:infobot@example.com?body=send%20current-issue',
    //  'mailto:infobot@example.com?body=send%20current-issue%0D%0Asend%20index',
    //  'mailto:list@example.org?In-Reply-To=%3C3469A91.D10AF4C@example.com%3E',
    //  'mailto:majordomo@example.com?body=subscribe%20bamboo-l',
    //  'mailto:joe@example.com?cc=bob@example.com&body=hello',
    //  'mailto:gorby%25kremvax@example.com',
    //  'mailto:unlikely%3Faddress@example.com?blat=foop',
    //  'mailto:Mike%26family@example.org',
    //  'mailto:%22not%40me%22@example.org',
    //  'mailto:%22oh%5C%5Cno%22@example.org',
    //  'mailto:%22%5C%5C%5C%22it\'s%5C%20ugly%5C%5C%5C%22%22@example.org',
    //  'mailto:user@example.org?subject=caf%C3%A9',
    //  'mailto:user@example.org?subject=%3D%3Futf-8%3FQ%3Fcaf%3DC3%3DA9%3F%3D',
    //  'mailto:user@example.org?subject=%3D%3Fiso-8859-1%3FQ%3Fcaf%3DE9%3F%3D',
    //  'mailto:user@example.org?subject=caf%C3%A9&body=caf%C3%A9',
    //  'mailto:user@%E7%B4%8D%E8%B1%86.example.org?subject=Test&body=NATTO'
  ]
  toParse.forEach((x) => {
    t.same(fastifyURI.parse(x), urijs.parse(x), 'Compatibility parse: ' + x)
  })
  t.end()
})

test('compatibility serialize', (t) => {
  const toSerialize = [
    { host: '10.10.10.10.example.com' },
    { host: '2001:db8::7' },
    { host: '::ffff:129.144.52.38' },
    { host: '2606:2800:220:1:248:1893:25c8:1946' },
    { host: '10.10.10.10.example.com' },
    { host: '10.10.10.10' },
    { path: '?query' },
    { path: 'foo:bar' },
    { path: '//path' },
    {
      scheme: 'uri',
      host: 'example.com',
      port: '9000'
    },
    {
      scheme: 'uri',
      userinfo: 'foo:bar',
      host: 'example.com',
      port: 1,
      path: 'path',
      query: 'query',
      fragment: 'fragment'
    },
    {
      scheme: '',
      userinfo: '',
      host: '',
      port: 0,
      path: '',
      query: '',
      fragment: ''
    },
    {
      scheme: undefined,
      userinfo: undefined,
      host: undefined,
      port: undefined,
      path: undefined,
      query: undefined,
      fragment: undefined
    },
    { host: 'fe80::a%en1' },
    { host: 'fe80::a%25en1' },
    {
      scheme: 'ws',
      host: 'example.com',
      resourceName: '/foo?bar',
      secure: true
    },
    {
      scheme: 'scheme',
      path: 'with:colon'
    }
  ]
  toSerialize.forEach((x) => {
    const r = JSON.stringify(x)
    t.same(
      fastifyURI.serialize(x),
      urijs.serialize(x),
      'Compatibility serialize: ' + JSON.stringify(r)
    )
  })
  t.end()
})

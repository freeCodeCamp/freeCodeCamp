'use strict'

const tap = require('tap')
const test = tap.test
const URI = require('../')

const fn = URI.equal
const runTest = (t, suite) => {
  suite.forEach(s => {
    const operator = s.result ? '==' : '!='
    t.equal(fn(s.pair[0], s.pair[1]), s.result, `${s.pair[0]} ${operator} ${s.pair[1]}`)
    t.equal(fn(s.pair[1], s.pair[0]), s.result, `${s.pair[1]} ${operator} ${s.pair[0]}`)
  })
}

test('URI Equals', (t) => {
  const suite = [
    { pair: ['example://a/b/c/%7Bfoo%7D', 'eXAMPLE://a/./b/../b/%63/%7bfoo%7d'], result: true }, // test from RFC 3986
    { pair: ['http://example.org/~user', 'http://example.org/%7euser'], result: true } // test from RFC 3987
  ]
  runTest(t, suite)
  t.end()
})

//   test('IRI Equals', (t) => {
//     // example from RFC 3987
//     t.equal(URI.equal('example://a/b/c/%7Bfoo%7D/ros\xE9', 'eXAMPLE://a/./b/../b/%63/%7bfoo%7d/ros%C3%A9', IRI_OPTION), true)
//     t.end()
//   })

test('HTTP Equals', (t) => {
  const suite = [
    // test from RFC 2616
    { pair: ['http://abc.com:80/~smith/home.html', 'http://abc.com/~smith/home.html'], result: true },
    { pair: [{ scheme: 'http', host: 'abc.com', port: 80, path: '/~smith/home.html' }, 'http://abc.com/~smith/home.html'], result: true },
    { pair: ['http://ABC.com/%7Esmith/home.html', 'http://abc.com/~smith/home.html'], result: true },
    { pair: ['http://ABC.com:/%7esmith/home.html', 'http://abc.com/~smith/home.html'], result: true },
    { pair: ['HTTP://ABC.COM', 'http://abc.com/'], result: true },
    // test from RFC 3986
    { pair: ['http://example.com:/', 'http://example.com:80/'], result: true }
  ]
  runTest(t, suite)
  t.end()
})

test('HTTPS Equals', (t) => {
  const suite = [
    { pair: ['https://example.com', 'https://example.com:443/'], result: true },
    { pair: ['https://example.com:/', 'https://example.com:443/'], result: true }
  ]
  runTest(t, suite)
  t.end()
})

test('URN Equals', (t) => {
  const suite = [
    // test from RFC 2141
    { pair: ['urn:foo:a123,456', 'urn:foo:a123,456'], result: true },
    { pair: ['urn:foo:a123,456', 'URN:foo:a123,456'], result: true },
    { pair: ['urn:foo:a123,456', 'urn:FOO:a123,456'], result: true }
  ]

  // Disabling for now as the whole equal logic might need
  // to be refactored
  // t.equal(URI.equal('urn:foo:a123,456', 'urn:foo:A123,456'), false)
  // t.equal(URI.equal('urn:foo:a123%2C456', 'URN:FOO:a123%2c456'), true)

  runTest(t, suite)
  t.end()
})

test('UUID Equals', (t) => {
  const suite = [
    { pair: ['URN:UUID:F81D4FAE-7DEC-11D0-A765-00A0C91E6BF6', 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6'], result: true }
  ]

  runTest(t, suite)
  t.end()
})

// test('Mailto Equals', (t) => {
//   // tests from RFC 6068
//   t.equal(URI.equal('mailto:addr1@an.example,addr2@an.example', 'mailto:?to=addr1@an.example,addr2@an.example'), true)
//   t.equal(URI.equal('mailto:?to=addr1@an.example,addr2@an.example', 'mailto:addr1@an.example?to=addr2@an.example'), true)
//   t.end()
// })

test('WS Equal', (t) => {
  const suite = [
    { pair: ['WS://ABC.COM:80/chat#one', 'ws://abc.com/chat'], result: true }
  ]

  runTest(t, suite)
  t.end()
})

test('WSS Equal', (t) => {
  const suite = [
    { pair: ['WSS://ABC.COM:443/chat#one', 'wss://abc.com/chat'], result: true }
  ]

  runTest(t, suite)
  t.end()
})

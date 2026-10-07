'use strict'

const test = require('tape')
const URI = require('../index')

/**
 * URI.js
 *
 * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/normalizing/resolving/serializing library for JavaScript.
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/uri-js
 */

/**
 * Copyright 2011 Gary Court. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 *
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the
 * authors and should not be interpreted as representing official policies, either expressed
 * or implied, of Gary Court.
 */

test('Acquire URI', (t) => {
  t.ok(URI)
  t.end()
})

test('URI Parsing', (t) => {
  let components

  // scheme
  components = URI.parse('uri:')
  t.equal(components.error, undefined, 'scheme errors')
  t.equal(components.scheme, 'uri', 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // userinfo
  components = URI.parse('//@')
  t.equal(components.error, undefined, 'userinfo errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, '', 'userinfo')
  t.equal(components.host, '', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // host
  components = URI.parse('//')
  t.equal(components.error, undefined, 'host errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // port
  components = URI.parse('//:')
  t.equal(components.error, undefined, 'port errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '', 'host')
  t.equal(components.port, '', 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // path
  components = URI.parse('')
  t.equal(components.error, undefined, 'path errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // query
  components = URI.parse('?')
  t.equal(components.error, undefined, 'query errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, '', 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // fragment
  components = URI.parse('#')
  t.equal(components.error, undefined, 'fragment errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, '', 'fragment')

  // fragment with character tabulation
  components = URI.parse('#\t')
  t.equal(components.error, undefined, 'path errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, '%09', 'fragment')

  // fragment with line feed
  components = URI.parse('#\n')
  t.equal(components.error, undefined, 'path errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, '%0A', 'fragment')

  // fragment with line tabulation
  components = URI.parse('#\v')
  t.equal(components.error, undefined, 'path errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, '%0B', 'fragment')

  // fragment with form feed
  components = URI.parse('#\f')
  t.equal(components.error, undefined, 'path errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, '%0C', 'fragment')

  // fragment with carriage return
  components = URI.parse('#\r')
  t.equal(components.error, undefined, 'path errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, '%0D', 'fragment')

  // all
  components = URI.parse('uri://user:pass@example.com:123/one/two.three?q1=a1&q2=a2#body')
  t.equal(components.error, undefined, 'all errors')
  t.equal(components.scheme, 'uri', 'scheme')
  t.equal(components.userinfo, 'user:pass', 'userinfo')
  t.equal(components.host, 'example.com', 'host')
  t.equal(components.port, 123, 'port')
  t.equal(components.path, '/one/two.three', 'path')
  t.equal(components.query, 'q1=a1&q2=a2', 'query')
  t.equal(components.fragment, 'body', 'fragment')

  // IPv4address
  components = URI.parse('//10.10.10.10')
  t.equal(components.error, undefined, 'IPv4address errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '10.10.10.10', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // IPv6address
  components = URI.parse('//[2001:db8::7]')
  t.equal(components.error, undefined, 'IPv4address errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '2001:db8::7', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // mixed IPv4address & IPv6address
  components = URI.parse('//[::ffff:129.144.52.38]')
  t.equal(components.error, undefined, 'IPv4address errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '::ffff:129.144.52.38', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // mixed IPv4address & reg-name, example from terion-name (https://github.com/garycourt/uri-js/issues/4)
  components = URI.parse('uri://10.10.10.10.example.com/en/process')
  t.equal(components.error, undefined, 'mixed errors')
  t.equal(components.scheme, 'uri', 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '10.10.10.10.example.com', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '/en/process', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // IPv6address, example from bkw (https://github.com/garycourt/uri-js/pull/16)
  components = URI.parse('//[2606:2800:220:1:248:1893:25c8:1946]/test')
  t.equal(components.error, undefined, 'IPv6address errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '2606:2800:220:1:248:1893:25c8:1946', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '/test', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // IPv6address, example from RFC 5952
  components = URI.parse('//[2001:db8::1]:80')
  t.equal(components.error, undefined, 'IPv6address errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '2001:db8::1', 'host')
  t.equal(components.port, 80, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // IPv6address with zone identifier, RFC 6874
  components = URI.parse('//[fe80::a%25en1]')
  t.equal(components.error, undefined, 'IPv4address errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, 'fe80::a%en1', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  // IPv6address with an unescaped interface specifier, example from pekkanikander (https://github.com/garycourt/uri-js/pull/22)
  components = URI.parse('//[2001:db8::7%en0]')
  t.equal(components.error, undefined, 'IPv6address interface errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '2001:db8::7%en0', 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, '', 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')

  t.end()
})

test('URI Serialization', (t) => {
  let components = {
    scheme: undefined,
    userinfo: undefined,
    host: undefined,
    port: undefined,
    path: undefined,
    query: undefined,
    fragment: undefined
  }
  t.equal(URI.serialize(components), '', 'Undefined Components')

  components = {
    scheme: '',
    userinfo: '',
    host: '',
    port: 0,
    path: '',
    query: '',
    fragment: ''
  }
  t.equal(URI.serialize(components), '//@:0?#', 'Empty Components')

  components = {
    scheme: 'uri',
    userinfo: 'foo:bar',
    host: 'example.com',
    port: 1,
    path: 'path',
    query: 'query',
    fragment: 'fragment'
  }
  t.equal(URI.serialize(components), 'uri://foo:bar@example.com:1/path?query#fragment', 'All Components')

  components = {
    scheme: 'uri',
    host: 'example.com',
    port: '9000'
  }
  t.equal(URI.serialize(components), 'uri://example.com:9000', 'String port')

  t.equal(URI.serialize({ path: '//path' }), '/%2Fpath', 'Double slash path')
  t.equal(URI.serialize({ path: 'foo:bar' }), 'foo%3Abar', 'Colon path')
  t.equal(URI.serialize({ path: '?query' }), '%3Fquery', 'Query path')

  // mixed IPv4address & reg-name, example from terion-name (https://github.com/garycourt/uri-js/issues/4)
  t.equal(URI.serialize({ host: '10.10.10.10.example.com' }), '//10.10.10.10.example.com', 'Mixed IPv4address & reg-name')

  // IPv6address
  t.equal(URI.serialize({ host: '2001:db8::7' }), '//[2001:db8::7]', 'IPv6 Host')
  t.equal(URI.serialize({ host: '::ffff:129.144.52.38' }), '//[::ffff:129.144.52.38]', 'IPv6 Mixed Host')
  t.equal(URI.serialize({ host: '2606:2800:220:1:248:1893:25c8:1946' }), '//[2606:2800:220:1:248:1893:25c8:1946]', 'IPv6 Full Host')

  // IPv6address with zone identifier, RFC 6874
  t.equal(URI.serialize({ host: 'fe80::a%en1' }), '//[fe80::a%25en1]', 'IPv6 Zone Unescaped Host')
  t.equal(URI.serialize({ host: 'fe80::a%25en1' }), '//[fe80::a%25en1]', 'IPv6 Zone Escaped Host')

  t.end()
})

test('URI Resolving', { skip: true }, (t) => {
  // normal examples from RFC 3986
  const base = 'uri://a/b/c/d;p?q'
  t.equal(URI.resolve(base, 'g:h'), 'g:h', 'g:h')
  t.equal(URI.resolve(base, 'g'), 'uri://a/b/c/g', 'g')
  t.equal(URI.resolve(base, './g'), 'uri://a/b/c/g', './g')
  t.equal(URI.resolve(base, 'g/'), 'uri://a/b/c/g/', 'g/')
  t.equal(URI.resolve(base, '/g'), 'uri://a/g', '/g')
  t.equal(URI.resolve(base, '//g'), 'uri://g', '//g')
  t.equal(URI.resolve(base, '?y'), 'uri://a/b/c/d;p?y', '?y')
  t.equal(URI.resolve(base, 'g?y'), 'uri://a/b/c/g?y', 'g?y')
  t.equal(URI.resolve(base, '#s'), 'uri://a/b/c/d;p?q#s', '#s')
  t.equal(URI.resolve(base, 'g#s'), 'uri://a/b/c/g#s', 'g#s')
  t.equal(URI.resolve(base, 'g?y#s'), 'uri://a/b/c/g?y#s', 'g?y#s')
  t.equal(URI.resolve(base, ';x'), 'uri://a/b/c/;x', ';x')
  t.equal(URI.resolve(base, 'g;x'), 'uri://a/b/c/g;x', 'g;x')
  t.equal(URI.resolve(base, 'g;x?y#s'), 'uri://a/b/c/g;x?y#s', 'g;x?y#s')
  t.equal(URI.resolve(base, ''), 'uri://a/b/c/d;p?q', '')
  t.equal(URI.resolve(base, '.'), 'uri://a/b/c/', '.')
  t.equal(URI.resolve(base, './'), 'uri://a/b/c/', './')
  t.equal(URI.resolve(base, '..'), 'uri://a/b/', '..')
  t.equal(URI.resolve(base, '../'), 'uri://a/b/', '../')
  t.equal(URI.resolve(base, '../g'), 'uri://a/b/g', '../g')
  t.equal(URI.resolve(base, '../..'), 'uri://a/', '../..')
  t.equal(URI.resolve(base, '../../'), 'uri://a/', '../../')
  t.equal(URI.resolve(base, '../../g'), 'uri://a/g', '../../g')

  // abnormal examples from RFC 3986
  t.equal(URI.resolve(base, '../../../g'), 'uri://a/g', '../../../g')
  t.equal(URI.resolve(base, '../../../../g'), 'uri://a/g', '../../../../g')

  t.equal(URI.resolve(base, '/./g'), 'uri://a/g', '/./g')
  t.equal(URI.resolve(base, '/../g'), 'uri://a/g', '/../g')
  t.equal(URI.resolve(base, 'g.'), 'uri://a/b/c/g.', 'g.')
  t.equal(URI.resolve(base, '.g'), 'uri://a/b/c/.g', '.g')
  t.equal(URI.resolve(base, 'g..'), 'uri://a/b/c/g..', 'g..')
  t.equal(URI.resolve(base, '..g'), 'uri://a/b/c/..g', '..g')

  t.equal(URI.resolve(base, './../g'), 'uri://a/b/g', './../g')
  t.equal(URI.resolve(base, './g/.'), 'uri://a/b/c/g/', './g/.')
  t.equal(URI.resolve(base, 'g/./h'), 'uri://a/b/c/g/h', 'g/./h')
  t.equal(URI.resolve(base, 'g/../h'), 'uri://a/b/c/h', 'g/../h')
  t.equal(URI.resolve(base, 'g;x=1/./y'), 'uri://a/b/c/g;x=1/y', 'g;x=1/./y')
  t.equal(URI.resolve(base, 'g;x=1/../y'), 'uri://a/b/c/y', 'g;x=1/../y')

  t.equal(URI.resolve(base, 'g?y/./x'), 'uri://a/b/c/g?y/./x', 'g?y/./x')
  t.equal(URI.resolve(base, 'g?y/../x'), 'uri://a/b/c/g?y/../x', 'g?y/../x')
  t.equal(URI.resolve(base, 'g#s/./x'), 'uri://a/b/c/g#s/./x', 'g#s/./x')
  t.equal(URI.resolve(base, 'g#s/../x'), 'uri://a/b/c/g#s/../x', 'g#s/../x')

  t.equal(URI.resolve(base, 'uri:g'), 'uri:g', 'uri:g')
  t.equal(URI.resolve(base, 'uri:g', { tolerant: true }), 'uri://a/b/c/g', 'uri:g')

  // examples by PAEz
  t.equal(URI.resolve('//www.g.com/', '/adf\ngf'), '//www.g.com/adf%0Agf', '/adf\\ngf')
  t.equal(URI.resolve('//www.g.com/error\n/bleh/bleh', '..'), '//www.g.com/error%0A/', '//www.g.com/error\\n/bleh/bleh')

  t.end()
})

test('URI Normalizing', { skip: true }, (t) => {
  // test from RFC 3987
  t.equal(URI.normalize('uri://www.example.org/red%09ros\xE9#red'), 'uri://www.example.org/red%09ros%C3%A9#red')

  // IPv4address
  t.equal(URI.normalize('//192.068.001.000'), '//192.68.1.0')

  // IPv6address, example from RFC 3513
  t.equal(URI.normalize('http://[1080::8:800:200C:417A]/'), 'http://[1080::8:800:200c:417a]/')

  // IPv6address, examples from RFC 5952
  t.equal(URI.normalize('//[2001:0db8::0001]/'), '//[2001:db8::1]/')
  t.equal(URI.normalize('//[2001:db8::1:0000:1]/'), '//[2001:db8::1:0:1]/')
  t.equal(URI.normalize('//[2001:db8:0:0:0:0:2:1]/'), '//[2001:db8::2:1]/')
  t.equal(URI.normalize('//[2001:db8:0:1:1:1:1:1]/'), '//[2001:db8:0:1:1:1:1:1]/')
  t.equal(URI.normalize('//[2001:0:0:1:0:0:0:1]/'), '//[2001:0:0:1::1]/')
  t.equal(URI.normalize('//[2001:db8:0:0:1:0:0:1]/'), '//[2001:db8::1:0:0:1]/')
  t.equal(URI.normalize('//[2001:DB8::1]/'), '//[2001:db8::1]/')
  t.equal(URI.normalize('//[0:0:0:0:0:ffff:192.0.2.1]/'), '//[::ffff:192.0.2.1]/')

  // Mixed IPv4 and IPv6 address
  t.equal(URI.normalize('//[1:2:3:4:5:6:192.0.2.1]/'), '//[1:2:3:4:5:6:192.0.2.1]/')
  t.equal(URI.normalize('//[1:2:3:4:5:6:192.068.001.000]/'), '//[1:2:3:4:5:6:192.68.1.0]/')

  t.end()
})

test('URI Equals', (t) => {
  // test from RFC 3986
  t.equal(URI.equal('example://a/b/c/%7Bfoo%7D', 'eXAMPLE://a/./b/../b/%63/%7bfoo%7d'), true)

  // test from RFC 3987
  t.equal(URI.equal('http://example.org/~user', 'http://example.org/%7euser'), true)

  t.end()
})

test('Escape Component', { skip: true }, (t) => {
  let chr
  for (let d = 0; d <= 129; ++d) {
    chr = String.fromCharCode(d)
    if (!chr.match(/[$&+,;=]/)) {
      t.equal(URI.escapeComponent(chr), encodeURIComponent(chr))
    } else {
      t.equal(URI.escapeComponent(chr), chr)
    }
  }
  t.equal(URI.escapeComponent('\u00c0'), encodeURIComponent('\u00c0'))
  t.equal(URI.escapeComponent('\u07ff'), encodeURIComponent('\u07ff'))
  t.equal(URI.escapeComponent('\u0800'), encodeURIComponent('\u0800'))
  t.equal(URI.escapeComponent('\u30a2'), encodeURIComponent('\u30a2'))
  t.end()
})

test('Unescape Component', { skip: true }, (t) => {
  let chr
  for (let d = 0; d <= 129; ++d) {
    chr = String.fromCharCode(d)
    t.equal(URI.unescapeComponent(encodeURIComponent(chr)), chr)
  }
  t.equal(URI.unescapeComponent(encodeURIComponent('\u00c0')), '\u00c0')
  t.equal(URI.unescapeComponent(encodeURIComponent('\u07ff')), '\u07ff')
  t.equal(URI.unescapeComponent(encodeURIComponent('\u0800')), '\u0800')
  t.equal(URI.unescapeComponent(encodeURIComponent('\u30a2')), '\u30a2')
  t.end()
})

const IRI_OPTION = { iri: true, unicodeSupport: true }

test('IRI Parsing', { skip: true }, (t) => {
  const components = URI.parse('uri://us\xA0er:pa\uD7FFss@example.com:123/o\uF900ne/t\uFDCFwo.t\uFDF0hree?q1=a1\uF8FF\uE000&q2=a2#bo\uFFEFdy', IRI_OPTION)
  t.equal(components.error, undefined, 'all errors')
  t.equal(components.scheme, 'uri', 'scheme')
  t.equal(components.userinfo, 'us\xA0er:pa\uD7FFss', 'userinfo')
  t.equal(components.host, 'example.com', 'host')
  t.equal(components.port, 123, 'port')
  t.equal(components.path, '/o\uF900ne/t\uFDCFwo.t\uFDF0hree', 'path')
  t.equal(components.query, 'q1=a1\uF8FF\uE000&q2=a2', 'query')
  t.equal(components.fragment, 'bo\uFFEFdy', 'fragment')
  t.end()
})

test('IRI Serialization', { skip: true }, (t) => {
  const components = {
    scheme: 'uri',
    userinfo: 'us\xA0er:pa\uD7FFss',
    host: 'example.com',
    port: 123,
    path: '/o\uF900ne/t\uFDCFwo.t\uFDF0hree',
    query: 'q1=a1\uF8FF\uE000&q2=a2',
    fragment: 'bo\uFFEFdy\uE001'
  }
  t.equal(URI.serialize(components, IRI_OPTION), 'uri://us\xA0er:pa\uD7FFss@example.com:123/o\uF900ne/t\uFDCFwo.t\uFDF0hree?q1=a1\uF8FF\uE000&q2=a2#bo\uFFEFdy%EE%80%81')
  t.end()
})

test('IRI Normalizing', { skip: true }, (t) => {
  t.equal(URI.normalize('uri://www.example.org/red%09ros\xE9#red', IRI_OPTION), 'uri://www.example.org/red%09ros\xE9#red')
  t.end()
})

test('IRI Equals', { skip: true }, (t) => {
  // example from RFC 3987
  t.equal(URI.equal('example://a/b/c/%7Bfoo%7D/ros\xE9', 'eXAMPLE://a/./b/../b/%63/%7bfoo%7d/ros%C3%A9', IRI_OPTION), true)
  t.end()
})

test('Convert IRI to URI', { skip: true }, (t) => {
  // example from RFC 3987
  t.equal(URI.serialize(URI.parse('uri://www.example.org/red%09ros\xE9#red', IRI_OPTION)), 'uri://www.example.org/red%09ros%C3%A9#red')

  // Internationalized Domain Name conversion via punycode example from RFC 3987
  t.equal(URI.serialize(URI.parse('uri://r\xE9sum\xE9.example.org', { iri: true, domainHost: true }), { domainHost: true }), 'uri://xn--rsum-bpad.example.org')
  t.end()
})

test('Convert URI to IRI', { skip: true }, (t) => {
  // examples from RFC 3987
  t.equal(URI.serialize(URI.parse('uri://www.example.org/D%C3%BCrst'), IRI_OPTION), 'uri://www.example.org/D\xFCrst')
  t.equal(URI.serialize(URI.parse('uri://www.example.org/D%FCrst'), IRI_OPTION), 'uri://www.example.org/D%FCrst')
  t.equal(URI.serialize(URI.parse('uri://xn--99zt52a.example.org/%e2%80%ae'), IRI_OPTION), 'uri://xn--99zt52a.example.org/%E2%80%AE') // or uri://\u7D0D\u8C46.example.org/%E2%80%AE

  // Internationalized Domain Name conversion via punycode example from RFC 3987
  t.equal(URI.serialize(URI.parse('uri://xn--rsum-bpad.example.org', { domainHost: true }), { iri: true, domainHost: true }), 'uri://r\xE9sum\xE9.example.org')
  t.end()
})

if (URI.SCHEMES.http) {
  test('HTTP Equals', (t) => {
    // test from RFC 2616
    t.equal(URI.equal('http://abc.com:80/~smith/home.html', 'http://abc.com/~smith/home.html'), true)
    t.equal(URI.equal('http://ABC.com/%7Esmith/home.html', 'http://abc.com/~smith/home.html'), true)
    t.equal(URI.equal('http://ABC.com:/%7esmith/home.html', 'http://abc.com/~smith/home.html'), true)
    t.equal(URI.equal('HTTP://ABC.COM', 'http://abc.com/'), true)
    // test from RFC 3986
    t.equal(URI.equal('http://example.com:/', 'http://example.com:80/'), true)
    t.end()
  })
}

if (URI.SCHEMES.https) {
  test('HTTPS Equals', (t) => {
    t.equal(URI.equal('https://example.com', 'https://example.com:443/'), true)
    t.equal(URI.equal('https://example.com:/', 'https://example.com:443/'), true)
    t.end()
  })
}

if (URI.SCHEMES.urn) {
  test('URN Parsing', (t) => {
    // example from RFC 2141
    const components = URI.parse('urn:foo:a123,456')
    t.equal(components.error, undefined, 'errors')
    t.equal(components.scheme, 'urn', 'scheme')
    t.equal(components.userinfo, undefined, 'userinfo')
    t.equal(components.host, undefined, 'host')
    t.equal(components.port, undefined, 'port')
    t.equal(components.path, undefined, 'path')
    t.equal(components.query, undefined, 'query')
    t.equal(components.fragment, undefined, 'fragment')
    t.equal(components.nid, 'foo', 'nid')
    t.equal(components.nss, 'a123,456', 'nss')
    t.end()
  })

  test('URN Serialization', (t) => {
    // example from RFC 2141
    const components = {
      scheme: 'urn',
      nid: 'foo',
      nss: 'a123,456'
    }
    t.equal(URI.serialize(components), 'urn:foo:a123,456')
    t.end()
  })

  test('URN Equals', { skip: true }, (t) => {
    // test from RFC 2141
    t.equal(URI.equal('urn:foo:a123,456', 'urn:foo:a123,456'), true)
    t.equal(URI.equal('urn:foo:a123,456', 'URN:foo:a123,456'), true)
    t.equal(URI.equal('urn:foo:a123,456', 'urn:FOO:a123,456'), true)
    t.equal(URI.equal('urn:foo:a123,456', 'urn:foo:A123,456'), false)
    t.equal(URI.equal('urn:foo:a123%2C456', 'URN:FOO:a123%2c456'), true)
    t.end()
  })

  test('URN Resolving', (t) => {
    // example from epoberezkin
    t.equal(URI.resolve('', 'urn:some:ip:prop'), 'urn:some:ip:prop')
    t.equal(URI.resolve('#', 'urn:some:ip:prop'), 'urn:some:ip:prop')
    t.equal(URI.resolve('urn:some:ip:prop', 'urn:some:ip:prop'), 'urn:some:ip:prop')
    t.equal(URI.resolve('urn:some:other:prop', 'urn:some:ip:prop'), 'urn:some:ip:prop')
    t.end()
  })

  test('UUID Parsing', (t) => {
    // example from RFC 4122
    let components = URI.parse('urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
    t.equal(components.error, undefined, 'errors')
    t.equal(components.scheme, 'urn', 'scheme')
    t.equal(components.userinfo, undefined, 'userinfo')
    t.equal(components.host, undefined, 'host')
    t.equal(components.port, undefined, 'port')
    t.equal(components.path, undefined, 'path')
    t.equal(components.query, undefined, 'query')
    t.equal(components.fragment, undefined, 'fragment')
    t.equal(components.nid, 'uuid', 'nid')
    t.equal(components.nss, undefined, 'nss')
    t.equal(components.uuid, 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6', 'uuid')

    components = URI.parse('urn:uuid:notauuid-7dec-11d0-a765-00a0c91e6bf6')
    t.notEqual(components.error, undefined, 'errors')
    t.end()
  })

  test('UUID Serialization', (t) => {
    // example from RFC 4122
    let components = {
      scheme: 'urn',
      nid: 'uuid',
      uuid: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6'
    }
    t.equal(URI.serialize(components), 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')

    components = {
      scheme: 'urn',
      nid: 'uuid',
      uuid: 'notauuid-7dec-11d0-a765-00a0c91e6bf6'
    }
    t.equal(URI.serialize(components), 'urn:uuid:notauuid-7dec-11d0-a765-00a0c91e6bf6')
    t.end()
  })

  test('UUID Equals', (t) => {
    t.equal(URI.equal('URN:UUID:F81D4FAE-7DEC-11D0-A765-00A0C91E6BF6', 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6'), true)
    t.end()
  })

  test('URN NID Override', (t) => {
    let components = URI.parse('urn:foo:f81d4fae-7dec-11d0-a765-00a0c91e6bf6', { nid: 'uuid' })
    t.equal(components.error, undefined, 'errors')
    t.equal(components.scheme, 'urn', 'scheme')
    t.equal(components.path, undefined, 'path')
    t.equal(components.nid, 'foo', 'nid')
    t.equal(components.nss, undefined, 'nss')
    t.equal(components.uuid, 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6', 'uuid')

    components = {
      scheme: 'urn',
      nid: 'foo',
      uuid: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6'
    }
    t.equal(URI.serialize(components, { nid: 'uuid' }), 'urn:foo:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
    t.end()
  })
}

if (URI.SCHEMES.mailto) {
  test('Mailto Parse', (t) => {
    let components

    // tests from RFC 6068

    components = URI.parse('mailto:chris@example.com')
    t.equal(components.error, undefined, 'error')
    t.equal(components.scheme, 'mailto', 'scheme')
    t.equal(components.userinfo, undefined, 'userinfo')
    t.equal(components.host, undefined, 'host')
    t.equal(components.port, undefined, 'port')
    t.equal(components.path, undefined, 'path')
    t.equal(components.query, undefined, 'query')
    t.equal(components.fragment, undefined, 'fragment')
    t.deepEqual(components.to, ['chris@example.com'], 'to')
    t.equal(components.subject, undefined, 'subject')
    t.equal(components.body, undefined, 'body')
    t.equal(components.headers, undefined, 'headers')

    components = URI.parse('mailto:infobot@example.com?subject=current-issue')
    t.deepEqual(components.to, ['infobot@example.com'], 'to')
    t.equal(components.subject, 'current-issue', 'subject')

    components = URI.parse('mailto:infobot@example.com?body=send%20current-issue')
    t.deepEqual(components.to, ['infobot@example.com'], 'to')
    t.equal(components.body, 'send current-issue', 'body')

    components = URI.parse('mailto:infobot@example.com?body=send%20current-issue%0D%0Asend%20index')
    t.deepEqual(components.to, ['infobot@example.com'], 'to')
    t.equal(components.body, 'send current-issue\x0D\x0Asend index', 'body')

    components = URI.parse('mailto:list@example.org?In-Reply-To=%3C3469A91.D10AF4C@example.com%3E')
    t.deepEqual(components.to, ['list@example.org'], 'to')
    t.deepEqual(components.headers, { 'In-Reply-To': '<3469A91.D10AF4C@example.com>' }, 'headers')

    components = URI.parse('mailto:majordomo@example.com?body=subscribe%20bamboo-l')
    t.deepEqual(components.to, ['majordomo@example.com'], 'to')
    t.equal(components.body, 'subscribe bamboo-l', 'body')

    components = URI.parse('mailto:joe@example.com?cc=bob@example.com&body=hello')
    t.deepEqual(components.to, ['joe@example.com'], 'to')
    t.equal(components.body, 'hello', 'body')
    t.deepEqual(components.headers, { cc: 'bob@example.com' }, 'headers')

    components = URI.parse('mailto:joe@example.com?cc=bob@example.com?body=hello')
    if (URI.VALIDATE_SUPPORT) t.ok(components.error, 'invalid header fields')

    components = URI.parse('mailto:gorby%25kremvax@example.com')
    t.deepEqual(components.to, ['gorby%kremvax@example.com'], 'to gorby%kremvax@example.com')

    components = URI.parse('mailto:unlikely%3Faddress@example.com?blat=foop')
    t.deepEqual(components.to, ['unlikely?address@example.com'], 'to unlikely?address@example.com')
    t.deepEqual(components.headers, { blat: 'foop' }, 'headers')

    components = URI.parse('mailto:Mike%26family@example.org')
    t.deepEqual(components.to, ['Mike&family@example.org'], 'to Mike&family@example.org')

    components = URI.parse('mailto:%22not%40me%22@example.org')
    t.deepEqual(components.to, ['"not@me"@example.org'], 'to ' + '"not@me"@example.org')

    components = URI.parse('mailto:%22oh%5C%5Cno%22@example.org')
    t.deepEqual(components.to, ['"oh\\\\no"@example.org'], 'to ' + '"oh\\\\no"@example.org')

    components = URI.parse("mailto:%22%5C%5C%5C%22it's%5C%20ugly%5C%5C%5C%22%22@example.org")
    t.deepEqual(components.to, ['"\\\\\\"it\'s\\ ugly\\\\\\""@example.org'], 'to ' + '"\\\\\\"it\'s\\ ugly\\\\\\""@example.org')

    components = URI.parse('mailto:user@example.org?subject=caf%C3%A9')
    t.deepEqual(components.to, ['user@example.org'], 'to')
    t.equal(components.subject, 'caf\xE9', 'subject')

    components = URI.parse('mailto:user@example.org?subject=%3D%3Futf-8%3FQ%3Fcaf%3DC3%3DA9%3F%3D')
    t.deepEqual(components.to, ['user@example.org'], 'to')
    t.equal(components.subject, '=?utf-8?Q?caf=C3=A9?=', 'subject') // TODO: Verify this

    components = URI.parse('mailto:user@example.org?subject=%3D%3Fiso-8859-1%3FQ%3Fcaf%3DE9%3F%3D')
    t.deepEqual(components.to, ['user@example.org'], 'to')
    t.equal(components.subject, '=?iso-8859-1?Q?caf=E9?=', 'subject') // TODO: Verify this

    components = URI.parse('mailto:user@example.org?subject=caf%C3%A9&body=caf%C3%A9')
    t.deepEqual(components.to, ['user@example.org'], 'to')
    t.equal(components.subject, 'caf\xE9', 'subject')
    t.equal(components.body, 'caf\xE9', 'body')

    if (URI.IRI_SUPPORT) {
      components = URI.parse('mailto:user@%E7%B4%8D%E8%B1%86.example.org?subject=Test&body=NATTO')
      t.deepEqual(components.to, ['user@xn--99zt52a.example.org'], 'to')
      t.equal(components.subject, 'Test', 'subject')
      t.equal(components.body, 'NATTO', 'body')
    }

    t.end()
  })

  test('Mailto Serialize', (t) => {
    // tests from RFC 6068
    t.equal(URI.serialize({ scheme: 'mailto', to: ['chris@example.com'] }), 'mailto:chris@example.com')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['infobot@example.com'], body: 'current-issue' }), 'mailto:infobot@example.com?body=current-issue')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['infobot@example.com'], body: 'send current-issue' }), 'mailto:infobot@example.com?body=send%20current-issue')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['infobot@example.com'], body: 'send current-issue\x0D\x0Asend index' }), 'mailto:infobot@example.com?body=send%20current-issue%0D%0Asend%20index')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['list@example.org'], headers: { 'In-Reply-To': '<3469A91.D10AF4C@example.com>' } }), 'mailto:list@example.org?In-Reply-To=%3C3469A91.D10AF4C@example.com%3E')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['majordomo@example.com'], body: 'subscribe bamboo-l' }), 'mailto:majordomo@example.com?body=subscribe%20bamboo-l')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['joe@example.com'], headers: { cc: 'bob@example.com', body: 'hello' } }), 'mailto:joe@example.com?cc=bob@example.com&body=hello')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['gorby%25kremvax@example.com'] }), 'mailto:gorby%25kremvax@example.com')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['unlikely%3Faddress@example.com'], headers: { blat: 'foop' } }), 'mailto:unlikely%3Faddress@example.com?blat=foop')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['Mike&family@example.org'] }), 'mailto:Mike%26family@example.org')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['"not@me"@example.org'] }), 'mailto:%22not%40me%22@example.org')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['"oh\\\\no"@example.org'] }), 'mailto:%22oh%5C%5Cno%22@example.org')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['"\\\\\\"it\'s\\ ugly\\\\\\""@example.org'] }), "mailto:%22%5C%5C%5C%22it's%5C%20ugly%5C%5C%5C%22%22@example.org")
    t.equal(URI.serialize({ scheme: 'mailto', to: ['user@example.org'], subject: 'caf\xE9' }), 'mailto:user@example.org?subject=caf%C3%A9')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['user@example.org'], subject: '=?utf-8?Q?caf=C3=A9?=' }), 'mailto:user@example.org?subject=%3D%3Futf-8%3FQ%3Fcaf%3DC3%3DA9%3F%3D')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['user@example.org'], subject: '=?iso-8859-1?Q?caf=E9?=' }), 'mailto:user@example.org?subject=%3D%3Fiso-8859-1%3FQ%3Fcaf%3DE9%3F%3D')
    t.equal(URI.serialize({ scheme: 'mailto', to: ['user@example.org'], subject: 'caf\xE9', body: 'caf\xE9' }), 'mailto:user@example.org?subject=caf%C3%A9&body=caf%C3%A9')
    if (URI.IRI_SUPPORT) {
      t.equal(URI.serialize({ scheme: 'mailto', to: ['us\xE9r@\u7d0d\u8c46.example.org'], subject: 'Test', body: 'NATTO' }), 'mailto:us%C3%A9r@xn--99zt52a.example.org?subject=Test&body=NATTO')
    }
    t.end()
  })

  test('Mailto Equals', (t) => {
    // tests from RFC 6068
    t.equal(URI.equal('mailto:addr1@an.example,addr2@an.example', 'mailto:?to=addr1@an.example,addr2@an.example'), true)
    t.equal(URI.equal('mailto:?to=addr1@an.example,addr2@an.example', 'mailto:addr1@an.example?to=addr2@an.example'), true)
    t.end()
  })
}

if (URI.SCHEMES.ws) {
  test('WS Parse', (t) => {
    let components

    // example from RFC 6455, Sec 4.1
    components = URI.parse('ws://example.com/chat')
    t.equal(components.error, undefined, 'error')
    t.equal(components.scheme, 'ws', 'scheme')
    t.equal(components.userinfo, undefined, 'userinfo')
    t.equal(components.host, 'example.com', 'host')
    t.equal(components.port, undefined, 'port')
    t.equal(components.path, undefined, 'path')
    t.equal(components.query, undefined, 'query')
    t.equal(components.fragment, undefined, 'fragment')
    t.equal(components.resourceName, '/chat', 'resourceName')
    t.equal(components.secure, false, 'secure')

    components = URI.parse('ws://example.com/foo?bar=baz')
    t.equal(components.error, undefined, 'error')
    t.equal(components.scheme, 'ws', 'scheme')
    t.equal(components.userinfo, undefined, 'userinfo')
    t.equal(components.host, 'example.com', 'host')
    t.equal(components.port, undefined, 'port')
    t.equal(components.path, undefined, 'path')
    t.equal(components.query, undefined, 'query')
    t.equal(components.fragment, undefined, 'fragment')
    t.equal(components.resourceName, '/foo?bar=baz', 'resourceName')
    t.equal(components.secure, false, 'secure')

    components = URI.parse('ws://example.com/?bar=baz')
    t.equal(components.resourceName, '/?bar=baz', 'resourceName')

    t.end()
  })

  test('WS Serialize', (t) => {
    t.equal(URI.serialize({ scheme: 'ws' }), 'ws:')
    t.equal(URI.serialize({ scheme: 'ws', host: 'example.com' }), 'ws://example.com')
    t.equal(URI.serialize({ scheme: 'ws', resourceName: '/' }), 'ws:')
    t.equal(URI.serialize({ scheme: 'ws', resourceName: '/foo' }), 'ws:/foo')
    t.equal(URI.serialize({ scheme: 'ws', resourceName: '/foo?bar' }), 'ws:/foo?bar')
    t.equal(URI.serialize({ scheme: 'ws', secure: false }), 'ws:')
    t.equal(URI.serialize({ scheme: 'ws', secure: true }), 'wss:')
    t.equal(URI.serialize({ scheme: 'ws', host: 'example.com', resourceName: '/foo' }), 'ws://example.com/foo')
    t.equal(URI.serialize({ scheme: 'ws', host: 'example.com', resourceName: '/foo?bar' }), 'ws://example.com/foo?bar')
    t.equal(URI.serialize({ scheme: 'ws', host: 'example.com', secure: false }), 'ws://example.com')
    t.equal(URI.serialize({ scheme: 'ws', host: 'example.com', secure: true }), 'wss://example.com')
    t.equal(URI.serialize({ scheme: 'ws', host: 'example.com', resourceName: '/foo?bar', secure: false }), 'ws://example.com/foo?bar')
    t.equal(URI.serialize({ scheme: 'ws', host: 'example.com', resourceName: '/foo?bar', secure: true }), 'wss://example.com/foo?bar')
    t.end()
  })

  test('WS Equal', (t) => {
    t.equal(URI.equal('WS://ABC.COM:80/chat#one', 'ws://abc.com/chat'), true)
    t.end()
  })

  test('WS Normalize', (t) => {
    t.equal(URI.normalize('ws://example.com:80/foo#hash'), 'ws://example.com/foo')
    t.end()
  })
}

if (URI.SCHEMES.wss) {
  test('WSS Parse', (t) => {
    let components

    // example from RFC 6455, Sec 4.1
    components = URI.parse('wss://example.com/chat')
    t.equal(components.error, undefined, 'error')
    t.equal(components.scheme, 'wss', 'scheme')
    t.equal(components.userinfo, undefined, 'userinfo')
    t.equal(components.host, 'example.com', 'host')
    t.equal(components.port, undefined, 'port')
    t.equal(components.path, undefined, 'path')
    t.equal(components.query, undefined, 'query')
    t.equal(components.fragment, undefined, 'fragment')
    t.equal(components.resourceName, '/chat', 'resourceName')
    t.equal(components.secure, true, 'secure')

    components = URI.parse('wss://example.com/foo?bar=baz')
    t.equal(components.error, undefined, 'error')
    t.equal(components.scheme, 'wss', 'scheme')
    t.equal(components.userinfo, undefined, 'userinfo')
    t.equal(components.host, 'example.com', 'host')
    t.equal(components.port, undefined, 'port')
    t.equal(components.path, undefined, 'path')
    t.equal(components.query, undefined, 'query')
    t.equal(components.fragment, undefined, 'fragment')
    t.equal(components.resourceName, '/foo?bar=baz', 'resourceName')
    t.equal(components.secure, true, 'secure')

    components = URI.parse('wss://example.com/?bar=baz')
    t.equal(components.resourceName, '/?bar=baz', 'resourceName')

    t.end()
  })

  test('WSS Serialize', (t) => {
    t.equal(URI.serialize({ scheme: 'wss' }), 'wss:')
    t.equal(URI.serialize({ scheme: 'wss', host: 'example.com' }), 'wss://example.com')
    t.equal(URI.serialize({ scheme: 'wss', resourceName: '/' }), 'wss:')
    t.equal(URI.serialize({ scheme: 'wss', resourceName: '/foo' }), 'wss:/foo')
    t.equal(URI.serialize({ scheme: 'wss', resourceName: '/foo?bar' }), 'wss:/foo?bar')
    t.equal(URI.serialize({ scheme: 'wss', secure: false }), 'ws:')
    t.equal(URI.serialize({ scheme: 'wss', secure: true }), 'wss:')
    t.equal(URI.serialize({ scheme: 'wss', host: 'example.com', resourceName: '/foo' }), 'wss://example.com/foo')
    t.equal(URI.serialize({ scheme: 'wss', host: 'example.com', resourceName: '/foo?bar' }), 'wss://example.com/foo?bar')
    t.equal(URI.serialize({ scheme: 'wss', host: 'example.com', secure: false }), 'ws://example.com')
    t.equal(URI.serialize({ scheme: 'wss', host: 'example.com', secure: true }), 'wss://example.com')
    t.equal(URI.serialize({ scheme: 'wss', host: 'example.com', resourceName: '/foo?bar', secure: false }), 'ws://example.com/foo?bar')
    t.equal(URI.serialize({ scheme: 'wss', host: 'example.com', resourceName: '/foo?bar', secure: true }), 'wss://example.com/foo?bar')
    t.end()
  })

  test('WSS Equal', (t) => {
    t.equal(URI.equal('WSS://ABC.COM:443/chat#one', 'wss://abc.com/chat'), true)
    t.end()
  })

  test('WSS Normalize', (t) => {
    t.equal(URI.normalize('wss://example.com:443/foo#hash'), 'wss://example.com/foo')
    t.end()
  })
}

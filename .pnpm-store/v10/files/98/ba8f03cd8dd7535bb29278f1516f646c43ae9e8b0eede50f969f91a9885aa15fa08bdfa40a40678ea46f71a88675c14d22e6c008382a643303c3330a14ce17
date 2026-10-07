'use strict'

const tap = require('tap')
const test = tap.test
const URI = require('../')

test('URI parse', (t) => {
  let components

  // scheme
  components = URI.parse('uri:')
  t.equal(components.error, undefined, 'scheme errors')
  t.equal(components.scheme, 'uri', 'scheme')
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, "@", "authority");
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
  // t.equal(components.authority, "", "authority");
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
  // t.equal(components.authority, ":", "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, undefined, "authority");
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
  // t.equal(components.authority, "user:pass@example.com:123", "authority");
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

  // IPv4address with unformated 0
  components = URI.parse('//10.10.000.10')
  t.equal(components.error, undefined, 'IPv4address errors')
  t.equal(components.scheme, undefined, 'scheme')
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, '10.10.0.10', 'host')
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

  // invalid IPv6
  components = URI.parse('//[2001:dbZ::7]')
  t.equal(components.host, '[2001:dbz::7]')

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

  // UUID V1
  components = URI.parse('urn:uuid:b571b0bc-4713-11ec-81d3-0242ac130003')
  t.equal(components.error, undefined, 'errors')
  t.equal(components.scheme, 'urn', 'scheme')
  // t.equal(components.authority, undefined, "authority");
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, undefined, 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')
  t.equal(components.nid, 'uuid', 'nid')
  t.equal(components.nss, undefined, 'nss')
  t.equal(components.uuid, 'b571b0bc-4713-11ec-81d3-0242ac130003', 'uuid')

  // UUID v4
  components = URI.parse('urn:uuid:97a32222-89b7-420e-8507-4360723e2c2a')
  t.equal(components.uuid, '97a32222-89b7-420e-8507-4360723e2c2a', 'uuid')

  components = URI.parse('urn:uuid:notauuid-7dec-11d0-a765-00a0c91e6bf6')
  t.notSame(components.error, undefined, 'errors')

  components = URI.parse('urn:foo:a123,456')
  t.equal(components.error, undefined, 'errors')
  t.equal(components.scheme, 'urn', 'scheme')
  // t.equal(components.authority, undefined, "authority");
  t.equal(components.userinfo, undefined, 'userinfo')
  t.equal(components.host, undefined, 'host')
  t.equal(components.port, undefined, 'port')
  t.equal(components.path, undefined, 'path')
  t.equal(components.query, undefined, 'query')
  t.equal(components.fragment, undefined, 'fragment')
  t.equal(components.nid, 'foo', 'nid')
  t.equal(components.nss, 'a123,456', 'nss')

  components = URI.parse('//[2606:2800:220:1:248:1893:25c8:1946:43209]')
  t.equal(components.host, '[2606:2800:220:1:248:1893:25c8:1946:43209]')

  components = URI.parse('urn:foo:|\\24fpl')
  t.equal(components.error, 'URN can not be parsed.')
  t.end()
})

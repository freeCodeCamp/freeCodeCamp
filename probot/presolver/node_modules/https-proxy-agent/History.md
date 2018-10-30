
2.2.0 / 2018-03-03
==================

  * Add "engines" to package.json - requires Node.js >= 4.5.0
  * Use `Buffer.from()`

2.1.1 / 2017-11-28
==================

  * Update `debug` - Security Problems with Previous Version (#38)

2.1.0 / 2017-08-08
==================

  * only include the port number in the Host header when non-default port (#22)
  * set ALPN to "http 1.1" by default when using tlsproxy (#25)
  * only set `ALPNProtocols` when the property does not already exist
  * support SNI (#14)

2.0.0 / 2017-06-26
==================

  * rename https-proxy-agent.js to index.js
  * update dependencies and remove semver-specific test case
  * update `agent-base` to v4
  * remove `extend` dependency
  * :arrow_up: update minimum version of debug dependency
  * opts/options
  * drop Node versions < v4 from Travis-CI
  * test Node.js 5, 6, 7 and 8 on Travis-CI
  * README: remove outdated `secureEndpoint` reference
  * README: remove `secureEndpoint` docs, add `headers`
  * https-proxy-agent: add support for proxy "headers"

1.0.0 / 2015-07-10
==================

  * upgrade to "agent-base" v2 API
  * test: test case is fixed
  * use %o debug() formatter
  * README: use SVG for Travis-CI badge

0.3.6 / 2015-07-06
==================

  * package: update "extend" to v3
  * package: update "mocha" to v2
  * package: update "debug" to v2
  * travis: test node v0.8, v0.10, and v0.12
  * test: use ssl-cert-snakeoil self-signed SSL certs

0.3.5 / 2014-06-11
==================

  * package: update "debug" to v1.0.0

0.3.4 / 2014-04-09
==================

  * gitignore: ignore root level ?.js files
  * package: update outdated dependencies

0.3.3 / 2014-01-13
==================

  * https-proxy-agnet: use debug() instead of console.error()
  * https-proxy-agent: fix debug() call
  * History: fix whitespace

0.3.2 / 2013-11-18
==================

  * https-proxy-agent: allow "https" without trailing colon
  * README: fix typo

0.3.1 / 2013-11-16
==================

  * test: enable the HTTPS over HTTPS test on node v0.11.8
  * https-proxy-agent: create the proxy socket connection first
  * https-proxy-agent: delete `pathname` from the proxy opts as well
  * https-proxy-agent: remove dead "end"-emitting code

0.3.0 / 2013-09-16
==================

  * https-proxy-agent: use "debug" module
  * https-proxy-agent: update to the "agent-base" v1 API
  * https-proxy-agent: default the "port" to 443 if not set
  * https-proxy-agent: augment the `opts` object for the `tls.connect` function
  * https-proxy-agent: use "extend" module
  * https-proxy-agent: remove use of `this` as much as possible
  * https-proxy-agent: listen for the "error" event of the socket
  * test: refactor of tests to use "proxy" module
  * test: add "error" event catching test
  * test: add 407 proxy response test
  * test: use "semver" module, disable the HTTPS over HTTPS test for node >= v0.11.3

0.2.0 / 2013-09-03
==================

  * Add initial "Proxy-Authorization" Basic authentication support

0.1.0 / 2013-07-21
==================

  * rename `secure` to `secureProxy`
  * added `secureEndpoint` option
  * various optimizations
  * README improvements

0.0.2 / 2013-07-11
==================

  * test: add mocha tests
  * don't use `socket.ondata`, use the official API instead
  * throw an Error when no proxy info is given
  * add support for passing options to net/tls .connect()

0.0.1 / 2013-07-09
==================

  * Initial release

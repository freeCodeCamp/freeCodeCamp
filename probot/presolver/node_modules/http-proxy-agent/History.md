
2.1.0 / 2018-03-03
==================

  * Add "engines" to package.json
  * Use `Buffer.from()`
  * Update package.json - outdated debug version (#7)

2.0.0 / 2017-06-27
==================

  * drop support for Node.js < v4
  * update "mocha" to v3
  * update to "agent-base" v4
  * rename http-proxy-agent.js to index.js
  * remove `extend` dependency
  * test Node.js 4, 5, 6, 7 and 8 on Travis-CI

1.0.0 / 2015-07-10
==================

  * http-proxy-agent: use %o debug() formatter
  * http-proxy-agent: remove `defaults` merging logic
  * package: update "agent-base" to v2
  * test: add an assert() call
  * test: use ssl-cert-snakeoil self-signed SSL certs
  * README: add note about node-https-proxy-agent

0.2.7 / 2015-07-06
==================

  * travis: ensure latest npm before testing
  * travis: test node v0.8, v0.10, and v0.12
  * README: use SVG for Travis-CI badge
  * package: update "extend" to v3
  * package: update "mocha" to v2
  * package: update "debug" to v2

0.2.6 / 2014-06-11
==================

  * package: update "debug" to v1.0.0

0.2.5 / 2014-04-09
==================

  * package: update outdated deps

0.2.4 / 2014-01-12
==================

  * http-proxy-agent: fix using the agent after the first tick of creating the ClientRequest
  * http-proxy-agent: use "debug" module
  * History: fix whitespace

0.2.3 / 2013-11-18
==================

  * https-proxy-agent: allow "https" without trailing colon

0.2.2 / 2013-11-16
==================

  * http-proxy-agent: delete the `port` if it matches default port
  * http-proxy-agent: don't mix in the `proxy` opts to the endpoint opts
  * http-proxy-agent: delete `pathname` from the proxy opts as well

0.2.1 / 2013-10-28
==================

  * http-proxy-agent: properly proxy the query-string on request URLs (GH-1)

0.2.0 / 2013-09-16
==================

  * http-proxy-agent: update to `agent-base` v1.0.0 API
  * http-proxy-agent: rename `secure` option to `secureProxy`
  * http-proxy-agent: default the "port" to 80 if not set
  * http-proxy-agent: use "extend" module
  * test: refactor tests
  * test: add 407 auth test
  * test: add bad proxy info test
  * test: add "secureProxy" option tests

0.1.0 / 2013-09-03
==================

  * Add initial "Proxy-Authorization" Basic authentication support

0.0.2 / 2013-07-11
==================

  * test: make tests pass, ensure valid IP addresses are returned
  * test: add tests
  * throw an Error when no proxy info is given
  * add support for passing options to net/tls .connect()

0.0.1 / 2013-07-09
==================

  * Initial release

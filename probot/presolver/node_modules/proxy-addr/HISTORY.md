2.0.4 / 2018-07-26
==================

  * deps: ipaddr.js@1.8.0

2.0.3 / 2018-02-19
==================

  * deps: ipaddr.js@1.6.0

2.0.2 / 2017-09-24
==================

  * deps: forwarded@~0.1.2
    - perf: improve header parsing
    - perf: reduce overhead when no `X-Forwarded-For` header

2.0.1 / 2017-09-10
==================

  * deps: forwarded@~0.1.1
    - Fix trimming leading / trailing OWS
    - perf: hoist regular expression
  * deps: ipaddr.js@1.5.2

2.0.0 / 2017-08-08
==================

  * Drop support for Node.js below 0.10

1.1.5 / 2017-07-25
==================

  * Fix array argument being altered
  * deps: ipaddr.js@1.4.0

1.1.4 / 2017-03-24
==================

  * deps: ipaddr.js@1.3.0

1.1.3 / 2017-01-14
==================

  * deps: ipaddr.js@1.2.0

1.1.2 / 2016-05-29
==================

  * deps: ipaddr.js@1.1.1
    - Fix IPv6-mapped IPv4 validation edge cases

1.1.1 / 2016-05-03
==================

  * Fix regression matching mixed versions against multiple subnets

1.1.0 / 2016-05-01
==================

  * Fix accepting various invalid netmasks
    - IPv4 netmasks must be contingous
    - IPv6 addresses cannot be used as a netmask
  * deps: ipaddr.js@1.1.0

1.0.10 / 2015-12-09
===================

  * deps: ipaddr.js@1.0.5
    - Fix regression in `isValid` with non-string arguments

1.0.9 / 2015-12-01
==================

  * deps: ipaddr.js@1.0.4
    - Fix accepting some invalid IPv6 addresses
    - Reject CIDRs with negative or overlong masks
  * perf: enable strict mode

1.0.8 / 2015-05-10
==================

  * deps: ipaddr.js@1.0.1

1.0.7 / 2015-03-16
==================

  * deps: ipaddr.js@0.1.9
    - Fix OOM on certain inputs to `isValid`

1.0.6 / 2015-02-01
==================

  * deps: ipaddr.js@0.1.8

1.0.5 / 2015-01-08
==================

  * deps: ipaddr.js@0.1.6

1.0.4 / 2014-11-23
==================

  * deps: ipaddr.js@0.1.5
    - Fix edge cases with `isValid`

1.0.3 / 2014-09-21
==================

  * Use `forwarded` npm module

1.0.2 / 2014-09-18
==================

  * Fix a global leak when multiple subnets are trusted
  * Support Node.js 0.6
  * deps: ipaddr.js@0.1.3

1.0.1 / 2014-06-03
==================

  * Fix links in npm package

1.0.0 / 2014-05-08
==================

  * Add `trust` argument to determine proxy trust on
    * Accepts custom function
    * Accepts IPv4/IPv6 address(es)
    * Accepts subnets
    * Accepts pre-defined names
  * Add optional `trust` argument to `proxyaddr.all` to
    stop at first untrusted
  * Add `proxyaddr.compile` to pre-compile `trust` function
    to make subsequent calls faster

0.0.1 / 2014-05-04
==================

  * Fix bad npm publish

0.0.0 / 2014-05-04
==================

  * Initial release

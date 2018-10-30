1.6.16 / 2018-02-16
===================

  * deps: mime-types@~2.1.18
    - Add `application/raml+yaml` with extension `.raml`
    - Add `application/wasm` with extension `.wasm`
    - Add `text/shex` with extension `.shex`
    - Add extensions for JPEG-2000 images
    - Add extensions from IANA for `message/*` types
    - Add extension `.mjs` to `application/javascript`
    - Add extension `.wadl` to `application/vnd.sun.wadl+xml`
    - Add extension `.gz` to `application/gzip`
    - Add glTF types and extensions
    - Add new mime types
    - Update extensions `.md` and `.markdown` to be `text/markdown`
    - Update font MIME types
    - Update `text/hjson` to registered `application/hjson`

1.6.15 / 2017-03-31
===================

  * deps: mime-types@~2.1.15
    - Add new mime types

1.6.14 / 2016-11-18
===================

  * deps: mime-types@~2.1.13
    - Add new mime types

1.6.13 / 2016-05-18
===================

  * deps: mime-types@~2.1.11
    - Add new mime types

1.6.12 / 2016-02-28
===================

  * deps: mime-types@~2.1.10
    - Add new mime types
    - Fix extension of `application/dash+xml`
    - Update primary extension for `audio/mp4`

1.6.11 / 2016-01-29
===================

  * deps: mime-types@~2.1.9
    - Add new mime types

1.6.10 / 2015-12-01
===================

  * deps: mime-types@~2.1.8
    - Add new mime types

1.6.9 / 2015-09-27
==================

  * deps: mime-types@~2.1.7
    - Add new mime types

1.6.8 / 2015-09-04
==================

  * deps: mime-types@~2.1.6
    - Add new mime types

1.6.7 / 2015-08-20
==================

  * Fix type error when given invalid type to match against
  * deps: mime-types@~2.1.5
    - Add new mime types

1.6.6 / 2015-07-31
==================

  * deps: mime-types@~2.1.4
    - Add new mime types

1.6.5 / 2015-07-16
==================

  * deps: mime-types@~2.1.3
    - Add new mime types

1.6.4 / 2015-07-01
==================

  * deps: mime-types@~2.1.2
    - Add new mime types
  * perf: enable strict mode
  * perf: remove argument reassignment

1.6.3 / 2015-06-08
==================

  * deps: mime-types@~2.1.1
    - Add new mime types
  * perf: reduce try block size
  * perf: remove bitwise operations

1.6.2 / 2015-05-10
==================

  * deps: mime-types@~2.0.11
    - Add new mime types

1.6.1 / 2015-03-13
==================

  * deps: mime-types@~2.0.10
    - Add new mime types

1.6.0 / 2015-02-12
==================

  * fix false-positives in `hasBody` `Transfer-Encoding` check
  * support wildcard for both type and subtype (`*/*`)

1.5.7 / 2015-02-09
==================

  * fix argument reassignment
  * deps: mime-types@~2.0.9
    - Add new mime types

1.5.6 / 2015-01-29
==================

  * deps: mime-types@~2.0.8
    - Add new mime types

1.5.5 / 2014-12-30
==================

  * deps: mime-types@~2.0.7
    - Add new mime types
    - Fix missing extensions
    - Fix various invalid MIME type entries
    - Remove example template MIME types
    - deps: mime-db@~1.5.0

1.5.4 / 2014-12-10
==================

  * deps: mime-types@~2.0.4
    - Add new mime types
    - deps: mime-db@~1.3.0

1.5.3 / 2014-11-09
==================

  * deps: mime-types@~2.0.3
    - Add new mime types
    - deps: mime-db@~1.2.0

1.5.2 / 2014-09-28
==================

  * deps: mime-types@~2.0.2
    - Add new mime types
    - deps: mime-db@~1.1.0

1.5.1 / 2014-09-07
==================

  * Support Node.js 0.6
  * deps: media-typer@0.3.0
  * deps: mime-types@~2.0.1
    - Support Node.js 0.6

1.5.0 / 2014-09-05
==================

 * fix `hasbody` to be true for `content-length: 0`

1.4.0 / 2014-09-02
==================

 * update mime-types

1.3.2 / 2014-06-24
==================

 * use `~` range on mime-types

1.3.1 / 2014-06-19
==================

 * fix global variable leak

1.3.0 / 2014-06-19
==================

 * improve type parsing

   - invalid media type never matches
   - media type not case-sensitive
   - extra LWS does not affect results

1.2.2 / 2014-06-19
==================

 * fix behavior on unknown type argument

1.2.1 / 2014-06-03
==================

 * switch dependency from `mime` to `mime-types@1.0.0`

1.2.0 / 2014-05-11
==================

 * support suffix matching:

   - `+json` matches `application/vnd+json`
   - `*/vnd+json` matches `application/vnd+json`
   - `application/*+json` matches `application/vnd+json`

1.1.0 / 2014-04-12
==================

 * add non-array values support
 * expose internal utilities:

   - `.is()`
   - `.hasBody()`
   - `.normalize()`
   - `.match()`

1.0.1 / 2014-03-30
==================

 * add `multipart` as a shorthand

This package parses [SPDX license expression](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60) strings describing license terms, like [package.json license strings](https://docs.npmjs.com/files/package.json#license), into consistently structured ECMAScript objects.  The npm command-line interface depends on this package, as do many automatic license-audit tools.

In a nutshell:

```javascript
var parse = require('spdx-expression-parse')
var assert = require('assert')

assert.deepEqual(
  // Licensed under the terms of the Two-Clause BSD License.
  parse('BSD-2-Clause'),
  {license: 'BSD-2-Clause'}
)

assert.throws(function () {
  // An invalid SPDX license expression.
  // Should be `Apache-2.0`.
  parse('Apache 2')
})

assert.deepEqual(
  // Dual licensed under either:
  // - LGPL 2.1
  // - a combination of Three-Clause BSD and MIT
  parse('(LGPL-2.1 OR BSD-3-Clause AND MIT)'),
  {
    left: {license: 'LGPL-2.1'},
    conjunction: 'or',
    right: {
      left: {license: 'BSD-3-Clause'},
      conjunction: 'and',
      right: {license: 'MIT'}
    }
  }
)
```

The syntax comes from the [Software Package Data eXchange (SPDX)](https://spdx.org/), a standard from the [Linux Foundation](https://www.linuxfoundation.org) for shareable data about software package license terms.  SPDX aims to make sharing and auditing license data easy, especially for users of open-source software.

The bulk of the SPDX standard describes syntax and semantics of XML metadata files.  This package implements two lightweight, plain-text components of that larger standard:

1.  The [license list](https://spdx.org/licenses), a mapping from specific string identifiers, like `Apache-2.0`, to standard form license texts and bolt-on license exceptions.  The [spdx-license-ids](https://www.npmjs.com/package/spdx-exceptions) and [spdx-exceptions](https://www.npmjs.com/package/spdx-license-ids) packages implement the license list.  `spdx-expression-parse` depends on and `require()`s them.

    Any license identifier from the license list is a valid license expression:

    ```javascript
    var identifiers = []
      .concat(require('spdx-license-ids'))
      .concat(require('spdx-license-ids/deprecated'))

    identifiers.forEach(function (id) {
      assert.deepEqual(parse(id), {license: id})
    })
    ```

    So is any license identifier `WITH` a standardized license exception:

    ```javascript
    identifiers.forEach(function (id) {
      require('spdx-exceptions').forEach(function (e) {
        assert.deepEqual(
          parse(id + ' WITH ' + e),
          {license: id, exception: e}
        )
      })
    })
    ```

2.  The license expression language, for describing simple and complex license terms, like `MIT` for MIT-licensed and `(GPL-2.0 OR Apache-2.0)` for dual-licensing under GPL 2.0 and Apache 2.0.  `spdx-expression-parse` itself implements license expression language, exporting a parser.

    ```javascript
    assert.deepEqual(
      // Licensed under a combination of:
      // - the MIT License AND
      // - a combination of:
      //   - LGPL 2.1 (or a later version) AND
      //   - Three-Clause BSD
      parse('(MIT AND (LGPL-2.1+ AND BSD-3-Clause))'),
      {
        left: {license: 'MIT'},
        conjunction: 'and',
        right: {
          left: {license: 'LGPL-2.1', plus: true},
          conjunction: 'and',
          right: {license: 'BSD-3-Clause'}
        }
      }
    )
    ```

The Linux Foundation and its contributors license the SPDX standard under the terms of [the Creative Commons Attribution License 3.0 Unported (SPDX: "CC-BY-3.0")](http://spdx.org/licenses/CC-BY-3.0).  "SPDX" is a United States federally registered trademark of the Linux Foundation.  The authors of this package license their work under the terms of the MIT License.

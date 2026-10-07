html-entities
=============

Fastest HTML entities library.

Comes with both TypeScript and Flow types.

Installation
------------

```bash
$ npm install html-entities
```

Usage
-----

### encode(text, options)

Encodes text replacing HTML special characters (`<>&"'`) and/or other character ranges depending on `mode` option value.

```js
import {encode} from 'html-entities';

encode('< > " \' & © ∆');
// -> '&lt; &gt; &quot; &apos; &amp; © ∆'

encode('< ©', {mode: 'nonAsciiPrintable'});
// -> '&lt; &copy;'

encode('< ©', {mode: 'nonAsciiPrintable', level: 'xml'});
// -> '&lt; &#169;'

encode('< > " \' & ©', {mode: 'nonAsciiPrintableOnly', level: 'xml'});
// -> '< > " \' & &#169;'
```

Options:

#### level

 * `all` alias to `html5` (default).
 * `html5` uses `HTML5` named references.
 * `html4` uses `HTML4` named references.
 * `xml` uses `XML` named references.

#### mode

 * `specialChars` encodes only HTML special characters (default).
 * `nonAscii` encodes HTML special characters and everything outside the [ASCII character range](https://en.wikipedia.org/wiki/ASCII).
 * `nonAsciiPrintable` encodes HTML special characters and everything outiside of the [ASCII printable characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters).
 * `nonAsciiPrintableOnly` everything outiside of the [ASCII printable characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters) keeping HTML special characters intact.
 * `extensive` encodes all non-printable characters, non-ASCII characters and all characters with named references.

#### numeric

 * `decimal` uses decimal numbers when encoding html entities. i.e. `&#169;` (default).
 * `hexadecimal` uses hexadecimal numbers when encoding html entities. i.e. `&#xa9;`.


### decode(text, options)

Decodes text replacing entities to characters. Unknown entities are left as is.

```js
import {decode} from 'html-entities';

decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;');
// -> '< > " \' & © ∆'

decode('&copy;', {level: 'html5'});
// -> '©'

decode('&copy;', {level: 'xml'});
// -> '&copy;'
```

Options:

#### level

 * `all` alias to `html5` (default).
 * `html5` uses `HTML5` named references.
 * `html4` uses `HTML4` named references.
 * `xml` uses `XML` named references.

#### scope

 * `body` emulates behavior of browser when parsing tag bodies: entities without semicolon are also replaced (default).
 * `attribute` emulates behavior of browser when parsing tag attributes: entities without semicolon are replaced when not followed by equality sign `=`.
 * `strict` ignores entities without semicolon.

### decodeEntity(text, options)

Decodes a single HTML entity. Unknown entitiy is left as is.

```js
import {decodeEntity} from 'html-entities';

decodeEntity('&lt;');
// -> '<'

decodeEntity('&copy;', {level: 'html5'});
// -> '©'

decodeEntity('&copy;', {level: 'xml'});
// -> '&copy;'
```

Options:

#### level

 * `all` alias to `html5` (default).
 * `html5` uses `HTML5` named references.
 * `html4` uses `HTML4` named references.
 * `xml` uses `XML` named references.

Performance
-----------

Statistically significant comparison with other libraries using `benchmark.js`.
Results by this library are marked with `*`.
The source code of the benchmark is available at `benchmark/benchmark.ts`.

```
Common

    Initialization / Load speed

      * #1: html-entities x 2,632,942 ops/sec ±3.71% (72 runs sampled)
        #2: entities x 1,379,154 ops/sec ±5.87% (75 runs sampled)
        #3: he x 1,334,035 ops/sec ±3.14% (83 runs sampled)

HTML5

    Encode test

      * #1: html-entities.encode - html5, nonAscii x 415,806 ops/sec ±0.73% (85 runs sampled)
      * #2: html-entities.encode - html5, nonAsciiPrintable x 401,420 ops/sec ±0.35% (93 runs sampled)
        #3: entities.encodeNonAsciiHTML x 401,235 ops/sec ±0.41% (88 runs sampled)
        #4: entities.encodeHTML x 284,868 ops/sec ±0.45% (93 runs sampled)
      * #5: html-entities.encode - html5, extensive x 237,613 ops/sec ±0.42% (93 runs sampled)
        #6: he.encode x 91,459 ops/sec ±0.50% (84 runs sampled)

    Decode test

        #1: entities.decodeHTMLStrict x 614,920 ops/sec ±0.41% (89 runs sampled)
        #2: entities.decodeHTML x 577,698 ops/sec ±0.44% (90 runs sampled)
      * #3: html-entities.decode - html5, strict x 323,680 ops/sec ±0.39% (92 runs sampled)
      * #4: html-entities.decode - html5, body x 297,548 ops/sec ±0.45% (91 runs sampled)
      * #5: html-entities.decode - html5, attribute x 293,617 ops/sec ±0.37% (94 runs sampled)
        #6: he.decode x 145,383 ops/sec ±0.36% (94 runs sampled)

HTML4

    Encode test

      * #1: html-entities.encode - html4, nonAscii x 379,799 ops/sec ±0.29% (96 runs sampled)
      * #2: html-entities.encode - html4, nonAsciiPrintable x 350,003 ops/sec ±0.42% (92 runs sampled)
      * #3: html-entities.encode - html4, extensive x 169,759 ops/sec ±0.43% (90 runs sampled)

    Decode test

      * #1: html-entities.decode - html4, attribute x 291,048 ops/sec ±0.42% (92 runs sampled)
      * #2: html-entities.decode - html4, strict x 287,110 ops/sec ±0.56% (93 runs sampled)
      * #3: html-entities.decode - html4, body x 285,529 ops/sec ±0.57% (93 runs sampled)

XML

    Encode test

        #1: entities.encodeXML x 418,561 ops/sec ±0.80% (90 runs sampled)
      * #2: html-entities.encode - xml, nonAsciiPrintable x 402,868 ops/sec ±0.30% (89 runs sampled)
      * #3: html-entities.encode - xml, nonAscii x 403,669 ops/sec ±7.87% (83 runs sampled)
      * #4: html-entities.encode - xml, extensive x 237,766 ops/sec ±0.45% (93 runs sampled)

    Decode test

        #1: entities.decodeXML x 888,700 ops/sec ±0.48% (93 runs sampled)
      * #2: html-entities.decode - xml, strict x 353,127 ops/sec ±0.40% (92 runs sampled)
      * #3: html-entities.decode - xml, body x 355,796 ops/sec ±1.58% (86 runs sampled)
      * #4: html-entities.decode - xml, attribute x 369,454 ops/sec ±8.74% (84 runs sampled)

Escaping

    Escape test

        #1: entities.escapeUTF8 x 1,308,013 ops/sec ±0.37% (91 runs sampled)
      * #2: html-entities.encode - xml, specialChars x 1,258,760 ops/sec ±1.00% (93 runs sampled)
        #3: he.escape x 822,569 ops/sec ±0.24% (94 runs sampled)
        #4: entities.escape x 434,243 ops/sec ±0.34% (91 runs sampled)
```

License
-------

MIT

Security contact information
----------------------------

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security). Tidelift will
coordinate the fix and disclosure.

`html-entities` for enterprise
------------------------------

Available as part of the Tidelift Subscription

The maintainers of `html-entities` and thousands of other packages are working with
Tidelift to deliver commercial support and maintenance for the open source
dependencies you use to build your applications. Save time, reduce risk, and
improve code health, while paying the maintainers of the exact dependencies you
use.
[Learn more.](https://tidelift.com/subscription/pkg/npm-html-entities?utm_source=npm-html-entities&utm_medium=referral&utm_campaign=enterprise)

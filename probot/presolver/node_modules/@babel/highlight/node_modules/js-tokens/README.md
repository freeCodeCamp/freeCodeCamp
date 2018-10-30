Overview [![Build Status](https://travis-ci.org/lydell/js-tokens.svg?branch=master)](https://travis-ci.org/lydell/js-tokens)
========

A regex that tokenizes JavaScript.

```js
var jsTokens = require("js-tokens").default

var jsString = "var foo=opts.foo;\n..."

jsString.match(jsTokens)
// ["var", " ", "foo", "=", "opts", ".", "foo", ";", "\n", ...]
```


Installation
============

`npm install js-tokens`

```js
import jsTokens from "js-tokens"
// or:
var jsTokens = require("js-tokens").default
```


Usage
=====

### `jsTokens` ###

A regex with the `g` flag that matches JavaScript tokens.

The regex _always_ matches, even invalid JavaScript and the empty string.

The next match is always directly after the previous.

### `var token = matchToToken(match)` ###

```js
import {matchToToken} from "js-tokens"
// or:
var matchToToken = require("js-tokens").matchToToken
```

Takes a `match` returned by `jsTokens.exec(string)`, and returns a `{type:
String, value: String}` object. The following types are available:

- string
- comment
- regex
- number
- name
- punctuator
- whitespace
- invalid

Multi-line comments and strings also have a `closed` property indicating if the
token was closed or not (see below).

Comments and strings both come in several flavors. To distinguish them, check if
the token starts with `//`, `/*`, `'`, `"` or `` ` ``.

Names are ECMAScript IdentifierNames, that is, including both identifiers and
keywords. You may use [is-keyword-js] to tell them apart.

Whitespace includes both line terminators and other whitespace.

[is-keyword-js]: https://github.com/crissdev/is-keyword-js


ECMAScript support
==================

The intention is to always support the latest ECMAScript version whose feature
set has been finalized.

If adding support for a newer version requires changes, a new version with a
major verion bump will be released.

Currently, ECMAScript 2018 is supported.


Invalid code handling
=====================

Unterminated strings are still matched as strings. JavaScript strings cannot
contain (unescaped) newlines, so unterminated strings simply end at the end of
the line. Unterminated template strings can contain unescaped newlines, though,
so they go on to the end of input.

Unterminated multi-line comments are also still matched as comments. They
simply go on to the end of the input.

Unterminated regex literals are likely matched as division and whatever is
inside the regex.

Invalid ASCII characters have their own capturing group.

Invalid non-ASCII characters are treated as names, to simplify the matching of
names (except unicode spaces which are treated as whitespace). Note: See also
the [ES2018](#es2018) section.

Regex literals may contain invalid regex syntax. They are still matched as
regex literals. They may also contain repeated regex flags, to keep the regex
simple.

Strings may contain invalid escape sequences.


Limitations
===========

Tokenizing JavaScript using regexes—in fact, _one single regex_—won’t be
perfect. But that’s not the point either.

You may compare jsTokens with [esprima] by using `esprima-compare.js`.
See `npm run esprima-compare`!

[esprima]: http://esprima.org/

### Template string interpolation ###

Template strings are matched as single tokens, from the starting `` ` `` to the
ending `` ` ``, including interpolations (whose tokens are not matched
individually).

Matching template string interpolations requires recursive balancing of `{` and
`}`—something that JavaScript regexes cannot do. Only one level of nesting is
supported.

### Division and regex literals collision ###

Consider this example:

```js
var g = 9.82
var number = bar / 2/g

var regex = / 2/g
```

A human can easily understand that in the `number` line we’re dealing with
division, and in the `regex` line we’re dealing with a regex literal. How come?
Because humans can look at the whole code to put the `/` characters in context.
A JavaScript regex cannot. It only sees forwards. (Well, ES2018 regexes can also
look backwards. See the [ES2018](#es2018) section).

When the `jsTokens` regex scans throught the above, it will see the following
at the end of both the `number` and `regex` rows:

```js
/ 2/g
```

It is then impossible to know if that is a regex literal, or part of an
expression dealing with division.

Here is a similar case:

```js
foo /= 2/g
foo(/= 2/g)
```

The first line divides the `foo` variable with `2/g`. The second line calls the
`foo` function with the regex literal `/= 2/g`. Again, since `jsTokens` only
sees forwards, it cannot tell the two cases apart.

There are some cases where we _can_ tell division and regex literals apart,
though.

First off, we have the simple cases where there’s only one slash in the line:

```js
var foo = 2/g
foo /= 2
```

Regex literals cannot contain newlines, so the above cases are correctly
identified as division. Things are only problematic when there are more than
one non-comment slash in a single line.

Secondly, not every character is a valid regex flag.

```js
var number = bar / 2/e
```

The above example is also correctly identified as division, because `e` is not a
valid regex flag. I initially wanted to future-proof by allowing `[a-zA-Z]*`
(any letter) as flags, but it is not worth it since it increases the amount of
ambigous cases. So only the standard `g`, `m`, `i`, `y` and `u` flags are
allowed. This means that the above example will be identified as division as
long as you don’t rename the `e` variable to some permutation of `gmiyus` 1 to 6
characters long.

Lastly, we can look _forward_ for information.

- If the token following what looks like a regex literal is not valid after a
  regex literal, but is valid in a division expression, then the regex literal
  is treated as division instead. For example, a flagless regex cannot be
  followed by a string, number or name, but all of those three can be the
  denominator of a division.
- Generally, if what looks like a regex literal is followed by an operator, the
  regex literal is treated as division instead. This is because regexes are
  seldomly used with operators (such as `+`, `*`, `&&` and `==`), but division
  could likely be part of such an expression.

Please consult the regex source and the test cases for precise information on
when regex or division is matched (should you need to know). In short, you
could sum it up as:

If the end of a statement looks like a regex literal (even if it isn’t), it
will be treated as one. Otherwise it should work as expected (if you write sane
code).

### ES2018 ###

ES2018 added some nice regex improvements to the language.

- [Unicode property escapes] should allow telling names and invalid non-ASCII
  characters apart without blowing up the regex size.
- [Lookbehind assertions] should allow matching telling division and regex
  literals apart in more cases.
- [Named capture groups] might simplify some things.

These things would be nice to do, but are not critical. They probably have to
wait until the oldest maintained Node.js LTS release supports those features.

[Unicode property escapes]: http://2ality.com/2017/07/regexp-unicode-property-escapes.html
[Lookbehind assertions]: http://2ality.com/2017/05/regexp-lookbehind-assertions.html
[Named capture groups]: http://2ality.com/2017/05/regexp-named-capture-groups.html


License
=======

[MIT](LICENSE).

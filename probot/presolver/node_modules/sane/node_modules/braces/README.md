# braces [![NPM version](https://img.shields.io/npm/v/braces.svg?style=flat)](https://www.npmjs.com/package/braces) [![NPM monthly downloads](https://img.shields.io/npm/dm/braces.svg?style=flat)](https://npmjs.org/package/braces) [![NPM total downloads](https://img.shields.io/npm/dt/braces.svg?style=flat)](https://npmjs.org/package/braces) [![Linux Build Status](https://img.shields.io/travis/micromatch/braces.svg?style=flat&label=Travis)](https://travis-ci.org/micromatch/braces) [![Windows Build Status](https://img.shields.io/appveyor/ci/micromatch/braces.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/micromatch/braces)

> Bash-like brace expansion, implemented in JavaScript. Safer than other brace expansion libs, with complete support for the Bash 4.3 braces specification, without sacrificing speed.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save braces
```

## Why use braces?

Brace patterns are great for matching ranges. Users (and implementors) shouldn't have to think about whether or not they will break their application (or yours) from accidentally defining an aggressive brace pattern. _Braces is the only library that offers a [solution to this problem](#performance)_.

* **Safe(r)**: Braces isn't vulnerable to DoS attacks like [brace-expansion](https://github.com/juliangruber/brace-expansion), [minimatch](https://github.com/isaacs/minimatch) and [multimatch](https://github.com/sindresorhus/multimatch) (a different bug than the [other regex DoS bug](https://medium.com/node-security/minimatch-redos-vulnerability-590da24e6d3c#.jew0b6mpc)).
* **Accurate**: complete support for the [Bash 4.3 Brace Expansion](www.gnu.org/software/bash/) specification (passes all of the Bash braces tests)
* **[fast and performant](#benchmarks)**: Starts fast, runs fast and [scales well](#performance) as patterns increase in complexity.
* **Organized code base**: with parser and compiler that are eas(y|ier) to maintain and update when edge cases crop up.
* **Well-tested**: thousands of test assertions. Passes 100% of the [minimatch](https://github.com/isaacs/minimatch) and [brace-expansion](https://github.com/juliangruber/brace-expansion) unit tests as well (as of the writing of this).

## Usage

The main export is a function that takes one or more brace `patterns` and `options`.

```js
var braces = require('braces');
braces(pattern[, options]);
```

By default, braces returns an optimized regex-source string. To get an array of brace patterns, use `brace.expand()`.

The following section explains the difference in more detail. _(If you're curious about "why" braces does this by default, see [brace matching pitfalls](#brace-matching-pitfalls)_.

### Optimized vs. expanded braces

**Optimized**

By default, patterns are optimized for regex and matching:

```js
console.log(braces('a/{x,y,z}/b'));
//=> ['a/(x|y|z)/b']
```

**Expanded**

To expand patterns the same way as Bash or [minimatch](https://github.com/isaacs/minimatch), use the [.expand](#expand) method:

```js
console.log(braces.expand('a/{x,y,z}/b'));
//=> ['a/x/b', 'a/y/b', 'a/z/b']
```

Or use [options.expand](#optionsexpand):

```js
console.log(braces('a/{x,y,z}/b', {expand: true}));
//=> ['a/x/b', 'a/y/b', 'a/z/b']
```

## Features

* [lists](#lists): Supports "lists": `a/{b,c}/d` => `['a/b/d', 'a/c/d']`
* [sequences](#sequences): Supports alphabetical or numerical "sequences" (ranges): `{1..3}` => `['1', '2', '3']`
* [steps](#steps): Supports "steps" or increments: `{2..10..2}` => `['2', '4', '6', '8', '10']`
* [escaping](#escaping)
* [options](#options)

### Lists

Uses [fill-range](https://github.com/jonschlinkert/fill-range) for expanding alphabetical or numeric lists:

```js
console.log(braces('a/{foo,bar,baz}/*.js'));
//=> ['a/(foo|bar|baz)/*.js']

console.log(braces.expand('a/{foo,bar,baz}/*.js'));
//=> ['a/foo/*.js', 'a/bar/*.js', 'a/baz/*.js']
```

### Sequences

Uses [fill-range](https://github.com/jonschlinkert/fill-range) for expanding alphabetical or numeric ranges (bash "sequences"):

```js
console.log(braces.expand('{1..3}'));     // ['1', '2', '3']
console.log(braces.expand('a{01..03}b')); // ['a01b', 'a02b', 'a03b']
console.log(braces.expand('a{1..3}b'));   // ['a1b', 'a2b', 'a3b']
console.log(braces.expand('{a..c}'));     // ['a', 'b', 'c']
console.log(braces.expand('foo/{a..c}')); // ['foo/a', 'foo/b', 'foo/c']

// supports padded ranges
console.log(braces('a{01..03}b'));   //=> [ 'a(0[1-3])b' ]
console.log(braces('a{001..300}b')); //=> [ 'a(0{2}[1-9]|0[1-9][0-9]|[12][0-9]{2}|300)b' ]
```

### Steps

Steps, or increments, may be used with ranges:

```js
console.log(braces.expand('{2..10..2}'));
//=> ['2', '4', '6', '8', '10']

console.log(braces('{2..10..2}'));
//=> ['(2|4|6|8|10)']
```

When the [.optimize](#optimize) method is used, or [options.optimize](#optionsoptimize) is set to true, sequences are passed to [to-regex-range](https://github.com/jonschlinkert/to-regex-range) for expansion.

### Nesting

Brace patterns may be nested. The results of each expanded string are not sorted, and left to right order is preserved.

**"Expanded" braces**

```js
console.log(braces.expand('a{b,c,/{x,y}}/e'));
//=> ['ab/e', 'ac/e', 'a/x/e', 'a/y/e']

console.log(braces.expand('a/{x,{1..5},y}/c'));
//=> ['a/x/c', 'a/1/c', 'a/2/c', 'a/3/c', 'a/4/c', 'a/5/c', 'a/y/c']
```

**"Optimized" braces**

```js
console.log(braces('a{b,c,/{x,y}}/e'));
//=> ['a(b|c|/(x|y))/e']

console.log(braces('a/{x,{1..5},y}/c'));
//=> ['a/(x|([1-5])|y)/c']
```

### Escaping

**Escaping braces**

A brace pattern will not be expanded or evaluted if _either the opening or closing brace is escaped_:

```js
console.log(braces.expand('a\\{d,c,b}e'));
//=> ['a{d,c,b}e']

console.log(braces.expand('a{d,c,b\\}e'));
//=> ['a{d,c,b}e']
```

**Escaping commas**

Commas inside braces may also be escaped:

```js
console.log(braces.expand('a{b\\,c}d'));
//=> ['a{b,c}d']

console.log(braces.expand('a{d\\,c,b}e'));
//=> ['ad,ce', 'abe']
```

**Single items**

Following bash conventions, a brace pattern is also not expanded when it contains a single character:

```js
console.log(braces.expand('a{b}c'));
//=> ['a{b}c']
```

## Options

### options.maxLength

**Type**: `Number`

**Default**: `65,536`

**Description**: Limit the length of the input string. Useful when the input string is generated or your application allows users to pass a string, et cetera.

```js
console.log(braces('a/{b,c}/d', { maxLength: 3 }));  //=> throws an error
```

### options.expand

**Type**: `Boolean`

**Default**: `undefined`

**Description**: Generate an "expanded" brace pattern (this option is unncessary with the `.expand` method, which does the same thing).

```js
console.log(braces('a/{b,c}/d', {expand: true}));
//=> [ 'a/b/d', 'a/c/d' ]
```

### options.optimize

**Type**: `Boolean`

**Default**: `true`

**Description**: Enabled by default.

```js
console.log(braces('a/{b,c}/d'));
//=> [ 'a/(b|c)/d' ]
```

### options.nodupes

**Type**: `Boolean`

**Default**: `true`

**Description**: Duplicates are removed by default. To keep duplicates, pass `{nodupes: false}` on the options

### options.rangeLimit

**Type**: `Number`

**Default**: `250`

**Description**: When `braces.expand()` is used, or `options.expand` is true, brace patterns will automatically be [optimized](#optionsoptimize) when the difference between the range minimum and range maximum exceeds the `rangeLimit`. This is to prevent huge ranges from freezing your application.

You can set this to any number, or change `options.rangeLimit` to `Inifinity` to disable this altogether.

**Examples**

```js
// pattern exceeds the "rangeLimit", so it's optimized automatically
console.log(braces.expand('{1..1000}'));
//=> ['([1-9]|[1-9][0-9]{1,2}|1000)']

// pattern does not exceed "rangeLimit", so it's NOT optimized
console.log(braces.expand('{1..100}'));
//=> ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
```

### options.transform

**Type**: `Function`

**Default**: `undefined`

**Description**: Customize range expansion.

```js
var range = braces.expand('x{a..e}y', {
  transform: function(str) {
    return 'foo' + str;
  }
});

console.log(range);
//=> [ 'xfooay', 'xfooby', 'xfoocy', 'xfoody', 'xfooey' ]
```

### options.quantifiers

**Type**: `Boolean`

**Default**: `undefined`

**Description**: In regular expressions, quanitifiers can be used to specify how many times a token can be repeated. For example, `a{1,3}` will match the letter `a` one to three times.

Unfortunately, regex quantifiers happen to share the same syntax as [Bash lists](#lists)

The `quantifiers` option tells braces to detect when [regex quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers) are defined in the given pattern, and not to try to expand them as lists.

**Examples**

```js
var braces = require('braces');
console.log(braces('a/b{1,3}/{x,y,z}'));
//=> [ 'a/b(1|3)/(x|y|z)' ]
console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true}));
//=> [ 'a/b{1,3}/(x|y|z)' ]
console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true, expand: true}));
//=> [ 'a/b{1,3}/x', 'a/b{1,3}/y', 'a/b{1,3}/z' ]
```

### options.unescape

**Type**: `Boolean`

**Default**: `undefined`

**Description**: Strip backslashes that were used for escaping from the result.

## What is "brace expansion"?

Brace expansion is a type of parameter expansion that was made popular by unix shells for generating lists of strings, as well as regex-like matching when used alongside wildcards (globs).

In addition to "expansion", braces are also used for matching. In other words:

* [brace expansion](#brace-expansion) is for generating new lists
* [brace matching](#brace-matching) is for filtering existing lists

<details>
<summary><strong>More about brace expansion</strong> (click to expand)</summary>

There are two main types of brace expansion:

1. **lists**: which are defined using comma-separated values inside curly braces: `{a,b,c}`
2. **sequences**: which are defined using a starting value and an ending value, separated by two dots: `a{1..3}b`. Optionally, a third argument may be passed to define a "step" or increment to use: `a{1..100..10}b`. These are also sometimes referred to as "ranges".

Here are some example brace patterns to illustrate how they work:

**Sets**

```
{a,b,c}       => a b c
{a,b,c}{1,2}  => a1 a2 b1 b2 c1 c2
```

**Sequences**

```
{1..9}        => 1 2 3 4 5 6 7 8 9
{4..-4}       => 4 3 2 1 0 -1 -2 -3 -4
{1..20..3}    => 1 4 7 10 13 16 19
{a..j}        => a b c d e f g h i j
{j..a}        => j i h g f e d c b a
{a..z..3}     => a d g j m p s v y
```

**Combination**

Sets and sequences can be mixed together or used along with any other strings.

```
{a,b,c}{1..3}   => a1 a2 a3 b1 b2 b3 c1 c2 c3
foo/{a,b,c}/bar => foo/a/bar foo/b/bar foo/c/bar
```

The fact that braces can be "expanded" from relatively simple patterns makes them ideal for quickly generating test fixtures, file paths, and similar use cases.

## Brace matching

In addition to _expansion_, brace patterns are also useful for performing regular-expression-like matching.

For example, the pattern `foo/{1..3}/bar` would match any of following strings:

```
foo/1/bar
foo/2/bar
foo/3/bar
```

But not:

```
baz/1/qux
baz/2/qux
baz/3/qux
```

Braces can also be combined with [glob patterns](https://github.com/jonschlinkert/micromatch) to perform more advanced wildcard matching. For example, the pattern `*/{1..3}/*` would match any of following strings:

```
foo/1/bar
foo/2/bar
foo/3/bar
baz/1/qux
baz/2/qux
baz/3/qux
```

## Brace matching pitfalls

Although brace patterns offer a user-friendly way of matching ranges or sets of strings, there are also some major disadvantages and potential risks you should be aware of.

### tldr

**"brace bombs"**

* brace expansion can eat up a huge amount of processing resources
* as brace patterns increase _linearly in size_, the system resources required to expand the pattern increase exponentially
* users can accidentally (or intentially) exhaust your system's resources resulting in the equivalent of a DoS attack (bonus: no programming knowledge is required!)

For a more detailed explanation with examples, see the [geometric complexity](#geometric-complexity) section.

### The solution

Jump to the [performance section](#performance) to see how Braces solves this problem in comparison to other libraries.

### Geometric complexity

At minimum, brace patterns with sets limited to two elements have quadradic or `O(n^2)` complexity. But the complexity of the algorithm increases exponentially as the number of sets, _and elements per set_, increases, which is `O(n^c)`.

For example, the following sets demonstrate quadratic (`O(n^2)`) complexity:

```
{1,2}{3,4}      => (2X2)    => 13 14 23 24
{1,2}{3,4}{5,6} => (2X2X2)  => 135 136 145 146 235 236 245 246
```

But add an element to a set, and we get a n-fold Cartesian product with `O(n^c)` complexity:

```
{1,2,3}{4,5,6}{7,8,9} => (3X3X3) => 147 148 149 157 158 159 167 168 169 247 248 
                                    249 257 258 259 267 268 269 347 348 349 357 
                                    358 359 367 368 369
```

Now, imagine how this complexity grows given that each element is a n-tuple:

```
{1..100}{1..100}         => (100X100)     => 10,000 elements (38.4 kB)
{1..100}{1..100}{1..100} => (100X100X100) => 1,000,000 elements (5.76 MB)
```

Although these examples are clearly contrived, they demonstrate how brace patterns can quickly grow out of control.

**More information**

Interested in learning more about brace expansion?

* [linuxjournal/bash-brace-expansion](http://www.linuxjournal.com/content/bash-brace-expansion)
* [rosettacode/Brace_expansion](https://rosettacode.org/wiki/Brace_expansion)
* [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product)

</details>

## Performance

Braces is not only screaming fast, it's also more accurate the other brace expansion libraries.

### Better algorithms

Fortunately there is a solution to the ["brace bomb" problem](#brace-matching-pitfalls): _don't expand brace patterns into an array when they're used for matching_.

Instead, convert the pattern into an optimized regular expression. This is easier said than done, and braces is the only library that does this currently.

**The proof is in the numbers**

Minimatch gets exponentially slower as patterns increase in complexity, braces does not. The following results were generated using `braces()` and `minimatch.braceExpand()`, respectively.

| **Pattern** | **braces** | **[minimatch](https://github.com/isaacs/minimatch)** | 
| --- | --- | --- |
| `{1..9007199254740991}`<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> | `298 B` (5ms 459μs) | N/A (freezes) |
| `{1..1000000000000000}` | `41 B` (1ms 15μs) | N/A (freezes) |
| `{1..100000000000000}` | `40 B` (890μs) | N/A (freezes) |
| `{1..10000000000000}` | `39 B` (2ms 49μs) | N/A (freezes) |
| `{1..1000000000000}` | `38 B` (608μs) | N/A (freezes) |
| `{1..100000000000}` | `37 B` (397μs) | N/A (freezes) |
| `{1..10000000000}` | `35 B` (983μs) | N/A (freezes) |
| `{1..1000000000}` | `34 B` (798μs) | N/A (freezes) |
| `{1..100000000}` | `33 B` (733μs) | N/A (freezes) |
| `{1..10000000}` | `32 B` (5ms 632μs) | `78.89 MB` (16s 388ms 569μs) |
| `{1..1000000}` | `31 B` (1ms 381μs) | `6.89 MB` (1s 496ms 887μs) |
| `{1..100000}` | `30 B` (950μs) | `588.89 kB` (146ms 921μs) |
| `{1..10000}` | `29 B` (1ms 114μs) | `48.89 kB` (14ms 187μs) |
| `{1..1000}` | `28 B` (760μs) | `3.89 kB` (1ms 453μs) |
| `{1..100}` | `22 B` (345μs) | `291 B` (196μs) |
| `{1..10}` | `10 B` (533μs) | `20 B` (37μs) |
| `{1..3}` | `7 B` (190μs) | `5 B` (27μs) |

### Faster algorithms

When you need expansion, braces is still much faster.

_(the following results were generated using `braces.expand()` and `minimatch.braceExpand()`, respectively)_

| **Pattern** | **braces** | **[minimatch](https://github.com/isaacs/minimatch)** | 
| --- | --- | --- |
| `{1..10000000}` | `78.89 MB` (2s 698ms 642μs) | `78.89 MB` (18s 601ms 974μs) |
| `{1..1000000}` | `6.89 MB` (458ms 576μs) | `6.89 MB` (1s 491ms 621μs) |
| `{1..100000}` | `588.89 kB` (20ms 728μs) | `588.89 kB` (156ms 919μs) |
| `{1..10000}` | `48.89 kB` (2ms 202μs) | `48.89 kB` (13ms 641μs) |
| `{1..1000}` | `3.89 kB` (1ms 796μs) | `3.89 kB` (1ms 958μs) |
| `{1..100}` | `291 B` (424μs) | `291 B` (211μs) |
| `{1..10}` | `20 B` (487μs) | `20 B` (72μs) |
| `{1..3}` | `5 B` (166μs) | `5 B` (27μs) |

If you'd like to run these comparisons yourself, see [test/support/generate.js](test/support/generate.js).

## Benchmarks

### Running benchmarks

Install dev dependencies:

```bash
npm i -d && npm benchmark
```

### Latest results

```bash
Benchmarking: (8 of 8)
 · combination-nested
 · combination
 · escaped
 · list-basic
 · list-multiple
 · no-braces
 · sequence-basic
 · sequence-multiple

# benchmark/fixtures/combination-nested.js (52 bytes)
  brace-expansion x 4,756 ops/sec ±1.09% (86 runs sampled)
  braces x 11,202,303 ops/sec ±1.06% (88 runs sampled)
  minimatch x 4,816 ops/sec ±0.99% (87 runs sampled)

  fastest is braces

# benchmark/fixtures/combination.js (51 bytes)
  brace-expansion x 625 ops/sec ±0.87% (87 runs sampled)
  braces x 11,031,884 ops/sec ±0.72% (90 runs sampled)
  minimatch x 637 ops/sec ±0.84% (88 runs sampled)

  fastest is braces

# benchmark/fixtures/escaped.js (44 bytes)
  brace-expansion x 163,325 ops/sec ±1.05% (87 runs sampled)
  braces x 10,655,071 ops/sec ±1.22% (88 runs sampled)
  minimatch x 147,495 ops/sec ±0.96% (88 runs sampled)

  fastest is braces

# benchmark/fixtures/list-basic.js (40 bytes)
  brace-expansion x 99,726 ops/sec ±1.07% (83 runs sampled)
  braces x 10,596,584 ops/sec ±0.98% (88 runs sampled)
  minimatch x 100,069 ops/sec ±1.17% (86 runs sampled)

  fastest is braces

# benchmark/fixtures/list-multiple.js (52 bytes)
  brace-expansion x 34,348 ops/sec ±1.08% (88 runs sampled)
  braces x 9,264,131 ops/sec ±1.12% (88 runs sampled)
  minimatch x 34,893 ops/sec ±0.87% (87 runs sampled)

  fastest is braces

# benchmark/fixtures/no-braces.js (48 bytes)
  brace-expansion x 275,368 ops/sec ±1.18% (89 runs sampled)
  braces x 9,134,677 ops/sec ±0.95% (88 runs sampled)
  minimatch x 3,755,954 ops/sec ±1.13% (89 runs sampled)

  fastest is braces

# benchmark/fixtures/sequence-basic.js (41 bytes)
  brace-expansion x 5,492 ops/sec ±1.35% (87 runs sampled)
  braces x 8,485,034 ops/sec ±1.28% (89 runs sampled)
  minimatch x 5,341 ops/sec ±1.17% (87 runs sampled)

  fastest is braces

# benchmark/fixtures/sequence-multiple.js (51 bytes)
  brace-expansion x 116 ops/sec ±0.77% (77 runs sampled)
  braces x 9,445,118 ops/sec ±1.32% (84 runs sampled)
  minimatch x 109 ops/sec ±1.16% (76 runs sampled)

  fastest is braces
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [expand-brackets](https://www.npmjs.com/package/expand-brackets): Expand POSIX bracket expressions (character classes) in glob patterns. | [homepage](https://github.com/jonschlinkert/expand-brackets "Expand POSIX bracket expressions (character classes) in glob patterns.")
* [extglob](https://www.npmjs.com/package/extglob): Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob… [more](https://github.com/micromatch/extglob) | [homepage](https://github.com/micromatch/extglob "Extended glob support for JavaScript. Adds (almost) the expressive power of regular expressions to glob patterns.")
* [fill-range](https://www.npmjs.com/package/fill-range): Fill in a range of numbers or letters, optionally passing an increment or `step` to… [more](https://github.com/jonschlinkert/fill-range) | [homepage](https://github.com/jonschlinkert/fill-range "Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`")
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. | [homepage](https://github.com/micromatch/micromatch "Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.")
* [nanomatch](https://www.npmjs.com/package/nanomatch): Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash… [more](https://github.com/micromatch/nanomatch) | [homepage](https://github.com/micromatch/nanomatch "Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash 4.3 wildcard support only (no support for exglobs, posix brackets or braces)")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 188 | [jonschlinkert](https://github.com/jonschlinkert) |
| 4 | [doowb](https://github.com/doowb) |
| 1 | [es128](https://github.com/es128) |
| 1 | [eush77](https://github.com/eush77) |
| 1 | [hemanth](https://github.com/hemanth) |

### Author

**Jon Schlinkert**

* [linkedin/in/jonschlinkert](https://linkedin.com/in/jonschlinkert)
* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on February 17, 2018._

<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1"  class="footnote-item">this is the largest safe integer allowed in JavaScript. <a href="#fnref1" class="footnote-backref">↩</a>

</li>
</ol>
</section>
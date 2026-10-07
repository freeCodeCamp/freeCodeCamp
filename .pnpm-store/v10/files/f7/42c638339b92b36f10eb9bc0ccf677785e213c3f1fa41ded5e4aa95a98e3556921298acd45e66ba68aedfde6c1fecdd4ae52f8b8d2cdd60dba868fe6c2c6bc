<div align="center">
<h1>babel-plugin-preval</h1>

<p>Pre-evaluate code at build-time</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-24-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Babel Macro][macros-badge]][babel-plugin-macros]
[![Examples][examples-badge]][examples]
<!-- prettier-ignore-end -->

## The problem

You need to do some dynamic stuff, but don't want to do it at runtime. Or maybe
you want to do stuff like read the filesystem to get a list of files and you
can't do that in the browser.

## This solution

This allows you to specify some code that runs in Node and whatever you
`module.exports` in there will be swapped. For example:

```js
const x = preval`module.exports = 1`

//      ↓ ↓ ↓ ↓ ↓ ↓

const x = 1
```

Or, more interestingly:

```javascript
const x = preval`
  const fs = require('fs')
  const val = fs.readFileSync(__dirname + '/fixture1.md', 'utf8')
  module.exports = {
    val,
    getSplit: function(splitDelimiter) {
      return x.val.split(splitDelimiter)
    }
  }
`

//      ↓ ↓ ↓ ↓ ↓ ↓

const x = {
  val: '# fixture\n\nThis is some file thing...\n',
  getSplit: function getSplit(splitDelimiter) {
    return x.val.split(splitDelimiter)
  },
}
```

There's also `preval.require('./something')` and
`import x from /* preval */ './something'` (which can both take some arguments)
or add `// @preval` comment at the top of a file.

See more below.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [Template Tag](#template-tag)
  - [import comment](#import-comment)
  - [preval.require](#prevalrequire)
  - [preval file comment (`// @preval`)](#preval-file-comment--preval)
- [Exporting a function](#exporting-a-function)
- [Configure with Babel](#configure-with-babel)
  - [Via `.babelrc` (Recommended)](#via-babelrc-recommended)
  - [Via CLI](#via-cli)
  - [Via Node API](#via-node-api)
- [Use with `babel-plugin-macros`](#use-with-babel-plugin-macros)
- [Examples](#examples)
- [Notes](#notes)
- [FAQ](#faq)
  - [How is this different from prepack?](#how-is-this-different-from-prepack)
  - [How is this different from webpack loaders?](#how-is-this-different-from-webpack-loaders)
- [Inspiration](#inspiration)
- [Related Projects](#related-projects)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev babel-plugin-preval
```

## Usage

Important notes:

1.  All code run by `preval` is _not_ run in a sandboxed environment
2.  All code _must_ run synchronously.
3.  Code that is run by preval is not transpiled so it must run natively in the
    version of node you're running. (cannot use es modules).

> You may like to watch
> [this YouTube video](https://www.youtube.com/watch?v=1queadQ0048&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u)
> to get an idea of what preval is and how it can be used.

### Template Tag

**Before**:

```javascript
const greeting = preval`
  const fs = require('fs')
  module.exports = fs.readFileSync(require.resolve('./greeting.txt'), 'utf8')
`
```

**After** (assuming `greeting.txt` contains the text: `"Hello world!"`):

```javascript
const greeting = 'Hello world!'
```

`preval` can also handle _some_ simple dynamic values as well:

**Before**:

```javascript
const name = 'Bob Hope'
const person = preval`
  const [first, last] = require('./name-splitter')(${name})
  module.exports = {first, last}
`
```

**After** (assuming `./name-splitter` is a function that splits a name into
first/last):

```javascript
const name = 'Bob Hope'
const person = {first: 'Bob', last: 'Hope'}
```

### import comment

**Before**:

```javascript
import fileList from /* preval */ './get-list-of-files'
```

**After** (depending on what `./get-list-of-files does`, it might be something
like):

```javascript
const fileList = ['file1.md', 'file2.md', 'file3.md', 'file4.md']
```

You can also provide arguments which themselves are prevaled!

**Before**:

```javascript
import fileList from /* preval(3) */ './get-list-of-files'
```

**After** (assuming `./get-list-of-files` accepts an argument limiting how many
files are retrieved:

```javascript
const fileList = ['file1.md', 'file2.md', 'file3.md']
```

### preval.require

**Before**:

```javascript
const fileLastModifiedDate = preval.require('./get-last-modified-date')
```

**After**:

```javascript
const fileLastModifiedDate = '2017-07-05'
```

And you can provide _some_ simple dynamic arguments as well:

**Before**:

```javascript
const fileLastModifiedDate = preval.require(
  './get-last-modified-date',
  '../../some-other-file.js',
)
```

**After**:

```javascript
const fileLastModifiedDate = '2017-07-04'
```

### preval file comment (`// @preval`)

Using the preval file comment will update a whole file to be evaluated down to
an export.

Whereas the above usages (assignment/import/require) will only preval the scope
of the assignment or file being imported.

**Before**:

```javascript
// @preval

const id = require('./path/identity')
const one = require('./path/one')

const compose = (...fns) => fns.reduce((f, g) => a => f(g(a)))
const double = a => a * 2
const square = a => a * a

module.exports = compose(square, id, double)(one)
```

**After**:

```javascript
module.exports = 4
```

## Exporting a function

If you export a function from a module that you're prevaling (whether using
`preval.require` or the import comment), then that function will be called and
whatever is returned will be the prevaled value.

It's important to know this if you want to have the prevaled value itself be a
function:

**Example**:

```js
// example-module.js
const fn = message => `The message is: ${message}`
module.exports = () => fn
```

**Usage of preval**:

```js
const theFn = preval.require('./example-module.js')
```

**Generated code**:

```js
const theFn = message => `The message is: ${message}`
```

## Configure with Babel

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["preval"]
}
```

### Via CLI

```sh
babel --plugins preval script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['preval'],
})
```

## Use with `babel-plugin-macros`

Once you've
[configured `babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros/blob/main/other/docs/user.md)
you can import/require the preval macro at `babel-plugin-preval/macro`. For
example:

```javascript
import preval from 'babel-plugin-preval/macro'

const one = preval`module.exports = 1 + 2 - 1 - 1`
```

> You could also use [`preval.macro`][preval.macro] if you'd prefer to type less
> 😀

## Examples

- [Mastodon](https://github.com/tootsuite/mastodon/pull/4202) saved 40kb
  (gzipped) using `babel-plugin-preval`
- [glamorous-website](https://github.com/kentcdodds/glamorous-website/pull/235)
  uses [`preval.macro`][preval.macro] to determine Algolia options based on
  `process.env.LOCALE`. It also uses [`preval.macro`][preval.macro] to load an
  `svg` file as a string, `base64` encode it, and use it as a `background-url`
  for an input element.
- [Generate documentation for React components](https://gist.github.com/souporserious/575609dc5a5d52e167dd2236079eccc0)
- [Serverless with webpack](https://github.com/geovanisouza92/serverless-preval)
  build serverless functions using webpack and Babel for development and
  production with preval to replace (possible sensible) content in code.
- [Read files at build time (video)](https://www.youtube.com/watch?v=NhmrbpVKgdQ&feature=youtu.be)

## Notes

If you use `babel-plugin-transform-decorators-legacy`, there is a conflict
because both plugins must be placed at the top

Wrong:

```json
{
  "plugins": ["preval", "transform-decorators-legacy"]
}
```

Ok:

```json
{
  "plugins": ["preval", ["transform-decorators-legacy"]]
}
```

## FAQ

### How is this different from prepack?

[`prepack`][prepack] is intended to be run on your final bundle after you've run
your webpack/etc magic on it. It does a TON of stuff, but the idea is that your
code should work with or without prepack.

`babel-plugin-preval` is intended to let you write code that would _not_ work
otherwise. Doing things like reading something from the file system are not
possible in the browser (or with prepack), but `preval` enables you to do this.

### How is this different from webpack loaders?

This plugin was inspired by webpack's [val-loader][val-loader]. The benefit of
using this over that loader (or any other loader) is that it integrates with
your existing babel pipeline. This is especially useful for the server where
you're probably not bundling your code with [`webpack`][webpack], but you may be
using babel. (If you're not using either, configuring babel for this would be
easier than configuring webpack for `val-loader`).

In addition, you can implement pretty much any webpack loader using
`babel-plugin-preval`.

If you want to learn more, check `webpack` documentations about
[`loaders`][webpack-loaders].

## Inspiration

I needed something like this for the
[glamorous website](https://github.com/kentcdodds/glamorous-website). I
live-streamed developing the whole thing. If you're interested you can find
[the recording on my youtube channel](https://www.youtube.com/watch?v=3vxov5xUai8&index=19&list=PLV5CVI1eNcJh5CTgArGVwANebCrAh2OUE)
(note, screen only recording, no audio).

I was inspired by the [val-loader][val-loader] from webpack.

## Related Projects

- [`preval.macro`][preval.macro] - nicer integration with `babel-plugin-macros`
- [`define_macro-loader`](https://github.com/MrcSnm/define_macro-loader) -
  Integrate preval with C-Like macros, thus, increasing preval use cases.

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://mattphillips.io"><img src="https://avatars3.githubusercontent.com/u/5610087?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Matt Phillips</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=mattphillips" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=mattphillips" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=mattphillips" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://twitter.com/philipodev"><img src="https://avatars1.githubusercontent.com/u/28024000?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Philip Oliver</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/issues?q=author%3Aphilipodev" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://toot.cafe/@sorin"><img src="https://avatars2.githubusercontent.com/u/2109702?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Sorin Davidoi</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/issues?q=author%3Asorin-davidoi" title="Bug reports">🐛</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=sorin-davidoi" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=sorin-davidoi" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/infiniteluke"><img src="https://avatars4.githubusercontent.com/u/1127238?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luke Herrington</b></sub></a><br /><a href="#example-infiniteluke" title="Examples">💡</a></td>
    <td align="center"><a href="http://instagram.com/luftywiranda13"><img src="https://avatars4.githubusercontent.com/u/22868432?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lufty Wiranda</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=luftywiranda13" title="Code">💻</a></td>
    <td align="center"><a href="http://obartra.github.io"><img src="https://avatars0.githubusercontent.com/u/3877773?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Oscar</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=obartra" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=obartra" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/pro-nasa"><img src="https://avatars1.githubusercontent.com/u/14310216?v=4?s=100" width="100px;" alt=""/><br /><sub><b>pro-nasa</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=pro-nasa" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bekrin.me"><img src="https://avatars0.githubusercontent.com/u/9248479?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergey Bekrin</b></sub></a><br /></td>
    <td align="center"><a href="https://maurobringolf.ch"><img src="https://avatars0.githubusercontent.com/u/18613301?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mauro Bringolf</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=maurobringolf" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=maurobringolf" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://joelim.me"><img src="https://avatars1.githubusercontent.com/u/10875678?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joe Lim</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=xjlim" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/marzelin"><img src="https://avatars3.githubusercontent.com/u/13483453?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcin Zielinski</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=marzelin" title="Code">💻</a></td>
    <td align="center"><a href="http://www.tommyleunen.com"><img src="https://avatars3.githubusercontent.com/u/1972567?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tommy</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=tleunen" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/PlayMa256"><img src="https://avatars0.githubusercontent.com/u/831308?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matheus Gonçalves da Silva</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=PlayMa256" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://stackshare.io/jdorfman/decisions"><img src="https://avatars1.githubusercontent.com/u/398230?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Justin Dorfman</b></sub></a><br /><a href="#fundingFinding-jdorfman" title="Funding Finding">🔍</a></td>
    <td align="center"><a href="https://github.com/AndrewRot"><img src="https://avatars2.githubusercontent.com/u/12818861?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Rottier</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=AndrewRot" title="Documentation">📖</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=MichaelDeBoey" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nobrayner"><img src="https://avatars.githubusercontent.com/u/40751395?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Braydon Hall</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=nobrayner" title="Code">💻</a></td>
    <td align="center"><a href="https://dev.to/jacobmgevans"><img src="https://avatars.githubusercontent.com/u/27247160?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jacob M-G Evans</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=JacobMGEvans" title="Code">💻</a></td>
    <td align="center"><a href="http://juhanajauhiainen.com"><img src="https://avatars.githubusercontent.com/u/544386?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juhana Jauhiainen</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=juhanakristian" title="Code">💻</a></td>
    <td align="center"><a href="http://peter.hozak.info/"><img src="https://avatars.githubusercontent.com/u/1087670?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peter Hozák</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=Aprillion" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/mpeyper"><img src="https://avatars.githubusercontent.com/u/23029903?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Peyper</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=mpeyper" title="Code">💻</a></td>
    <td align="center"><a href="https://hipreme.itch.io/"><img src="https://avatars.githubusercontent.com/u/10136262?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcelo Silva Nascimento Mancini</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=MrcSnm" title="Documentation">📖</a> <a href="#plugin-MrcSnm" title="Plugin/utility libraries">🔌</a></td>
    <td align="center"><a href="https://github.com/NMinhNguyen"><img src="https://avatars.githubusercontent.com/u/2852660?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Minh Nguyen</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=NMinhNguyen" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-preval/commits?author=NMinhNguyen" title="Tests">⚠️</a> <a href="#infra-NMinhNguyen" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/babel-plugin-preval/validate?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/babel-plugin-preval/actions?query=workflow%3Avalidate
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/babel-plugin-preval.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/babel-plugin-preval
[version-badge]: https://img.shields.io/npm/v/babel-plugin-preval.svg?style=flat-square
[package]: https://www.npmjs.com/package/babel-plugin-preval
[downloads-badge]: https://img.shields.io/npm/dm/babel-plugin-preval.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/babel-plugin-preval
[license-badge]: https://img.shields.io/npm/l/babel-plugin-preval.svg?style=flat-square
[license]: https://github.com/kentcdodds/babel-plugin-preval/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/babel-plugin-preval/blob/main/other/CODE_OF_CONDUCT.md
[macros-badge]: https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square
[babel-plugin-macros]: https://github.com/kentcdodds/babel-plugin-macros
[examples-badge]: https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg?style=flat-square
[examples]: https://github.com/kentcdodds/babel-plugin-preval/blob/main/other/EXAMPLES.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[bugs]: https://github.com/kentcdodds/babel-plugin-preval/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/kentcdodds/babel-plugin-preval/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/kentcdodds/babel-plugin-preval/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[prepack]: https://github.com/facebook/prepack
[preval.macro]: https://github.com/kentcdodds/preval.macro
[webpack]: https://webpack.js.org
[webpack-loaders]: https://webpack.js.org/concepts/loaders
[val-loader]: https://github.com/webpack-contrib/val-loader
<!-- prettier-ignore-end -->

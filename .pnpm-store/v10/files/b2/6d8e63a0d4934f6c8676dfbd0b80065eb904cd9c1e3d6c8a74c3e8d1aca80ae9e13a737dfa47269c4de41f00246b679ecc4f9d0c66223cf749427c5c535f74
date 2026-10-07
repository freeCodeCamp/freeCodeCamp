<div align="center">
<h1>babel-plugin-macros 🎣</h1>

<p>Allows you to build simple compile-time libraries</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## The problem

Check out
[this guest post](https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros)
on the Babel.js blog for a complete write up on the problem, motivation, and
solution.

Currently, each babel plugin in the babel ecosystem requires that you configure
it individually. This is fine for things like language features, but can be
frustrating overhead for libraries that allow for compile-time code
transformation as an optimization.

## This solution

babel-plugin-macros defines a standard interface for libraries that want to use
compile-time code transformation without requiring the user to add a babel
plugin to their build system (other than `babel-plugin-macros`, which is ideally
already in place).

<details>

<summary>Expand for more details on the motivation</summary>

For instance, many css-in-js libraries have a css tagged template string
function:

```js
const styles = css`
  .red {
    color: red;
  }
`
```

The function compiles your css into (for example) an object with generated class
names for each of the classes you defined in your css:

```js
console.log(styles) // { red: "1f-d34j8rn43y587t" }
```

This class name can be generated at runtime (in the browser), but this has some
disadvantages:

- There is cpu usage/time overhead; the client needs to run the code to generate
  these classes every time the page loads
- There is code bundle size overhead; the client needs to receive a CSS parser
  in order to generate these class names, and shipping this makes the amount of
  js the client needs to parse larger.

To help solve those issues, many css-in-js libraries write their own babel
plugin that generates the class names at compile-time instead of runtime:

```js
// Before running through babel:
const styles = css`
  .red {
    color: red;
  }
`
// After running through babel, with the library-specific plugin:
const styles = {red: '1f-d34j8rn43y587t'}
```

If the css-in-js library supported babel-plugin-macros instead, then they
wouldn't need their own babel plugin to compile these out; they could instead
rely on babel-plugin-macros to do it for them. So if a user already had
`babel-plugin-macros` installed and configured with babel, then they wouldn't
need to change their babel configuration to get the compile-time benefits of the
library. This would be most useful if the boilerplate they were using came with
`babel-plugin-macros` out of the box, which is true for
[`create-react-app`][cra].

Although css-in-js is the most common example, there are lots of other things
you could use `babel-plugin-macros` for, like:

- Compiling GraphQL fragments into objects so that the client doesn't need a
  GraphQL parser
- Eval-ing out code at compile time that will be baked into the runtime code,
  for instance to get a list of directories in the filesystem (see
  [preval][preval])

</details>

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [User docs](#user-docs)
  - [Author docs](#author-docs)
  - [Caveats](#caveats)
- [FAQ](#faq)
  - [How do I find available macros?](#how-do-i-find-available-macros)
  - [What's the difference between babel plugins and macros?](#whats-the-difference-between-babel-plugins-and-macros)
  - [In what order are macros executed?](#in-what-order-are-macros-executed)
  - [Does it work with function calls only?](#does-it-work-with-function-calls-only)
  - [How about implicit optimizations at compile time?](#how-about-implicit-optimizations-at-compile-time)
- [Inspiration](#inspiration)
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
npm install --save-dev babel-plugin-macros
```

## Usage

> You may like to watch
> [this YouTube video](https://www.youtube.com/watch?v=1queadQ0048&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u)
> to get an idea of what macros is and how it can be used.

### User docs

Are you trying to use `babel-plugin-macros`? Go to
[`other/docs/user.md`](other/docs/user.md).

### Author docs

Are you trying to make your own macros that works with `babel-plugin-macros`? Go
to [`other/docs/author.md`](other/docs/author.md). (you should probably read the
user docs too).

### Caveats

#### Babel cache problem

> **Note:** This issue is not present when used in Create React App.

Most of the time you'll probably be using this with the babel cache enabled in
webpack to rebuild faster. If your macro function is **not pure** which gets
different output with same code (e.g., IO side effects) it will cause recompile
mechanism fail. Unfortunately you'll also experience this problem while
developing your macro as well. If there's not a change to the source code that's
being transpiled, then babel will use the cache rather than running your macro
again.

For now, to force recompile the code you can simply add a cache busting comment
in the file:

```diff
import macro from 'non-pure.macro';

-// Do some changes of your code or
+// add a cache busting comment to force recompile.
macro('parameters');
```

This problem is still being worked on and is not unique to
`babel-plugin-macros`. For more details and workarounds, please check related
issues below:

- babel-plugin-preval:
  [How to force recompile? #19](https://github.com/kentcdodds/babel-plugin-preval/issues/19)
- graphql.macro:
  [Recompile problem (babel cache) #6](https://github.com/evenchange4/graphql.macro/issues/6)
- twin.macro: 
  [Can't change taliwind config #37](https://github.com/ben-rogerson/twin.macro/discussions/37)

## FAQ

### How do I find available macros?

You can write your own without publishing them to `npm`, but if you'd like to
see existing macros you can add to your project, then take a look at the
[Awesome babel macros](https://github.com/jgierer12/awesome-babel-macros)
repository.

Please add any you don't see listed!

### What's the difference between babel plugins and macros?

Let's use
[`babel-plugin-console`](https://www.npmjs.com/package/babel-plugin-console) as
an example.

If we used `babel-plugin-console`, it would look like this:

1.  Add `babel-plugin-console` to `.babelrc`
2.  Use it in a code:

```js
function add100(a) {
  const oneHundred = 100
  console.scope('Add 100 to another number')
  return add(a, oneHundred)
}

function add(a, b) {
  return a + b
}
```

When that code is run, the `scope` function does some pretty nifty things:

**Browser:**

![Browser console scoping add100](https://github.com/mattphillips/babel-plugin-console/raw/53536cba919d5be49d4f66d957769c07ca7a4207/assets/add100-chrome.gif)

**Node:**

<img alt="Node console scoping add100" src="https://github.com/mattphillips/babel-plugin-console/raw/53536cba919d5be49d4f66d957769c07ca7a4207/assets/add100-node.png" width="372" />

Instead, let's use the macro it's shipped with like this:

1.  Add `babel-plugin-macros` to `.babelrc` (only once for all macros)
2.  Use it in a code:

```js
import scope from 'babel-plugin-console/scope.macro'
function add100(a) {
  const oneHundred = 100
  scope('Add 100 to another number')
  return add(a, oneHundred)
}

function add(a, b) {
  return a + b
}
```

The result is exactly the same, but this approach has a few advantages:

**Advantages:**

- requires only one entry in `.babelrc` for all macros used in project. Add that
  once and you can use all the macros you want
- toolkits (like [create-react-app][cra]) may already support
  `babel-plugin-macros`, so no configuration is needed at all
- it's explicit. With `console.scope` people may be fooled that it's just a
  normal `console` API when there's really a babel transpilation going on. When
  you import `scope`, it's obvious that it's macro and does something with the
  code at compile time. Some ESLint rules may also have issues with plugins that
  look for "global" variables
- macros are safer and easier to write, because they receive exactly the AST
  node to process
- If you misconfigure `babel-plugin-console` you wont find out until you run the
  code. If you misconfigure `babel-plugin-macros` you'll get a compile-time
  error.

**Drawbacks:**

- Cannot (should not) be used for implicit transpilations (like syntax plugins)
- Explicitness is more verbose. Which some people might consider a drawback...

### In what order are macros executed?

This is another advantage of `babel-plugin-macros` over regular plugins. The
user of the macro is in control of the ordering! The order of execution is the
same order as imported. The order of execution is clear, explicit and in full
control of the user:

```js
import preval from 'preval.macro'
import idx from 'idx.macro'

// preval macro is evaluated first, then idx
```

This differs from the current situation with babel plugins where it's
prohibitively difficult to control the order plugins run in a particular file.

### Does it work with function calls only?

No! Any AST node type is supported.

It can be tagged template literal:

```js
import eval from 'eval.macro'
const val = eval`7 * 6`
```

A function:

```js
import eval from 'eval.macro'
const val = eval('7 * 6')
```

JSX Element:

```js
import Eval from 'eval.macro'
const val = <Eval>7 * 6</Eval>
```

Really, anything...

See the [testing snapshot](src/__tests__/__snapshots__/index.js.snap) for more
examples.

### How about implicit optimizations at compile time?

All examples above were _explicit_ - a macro was imported and then evaluated
with a specific AST node.

Completely different story are _implicit_ babel plugins, like
[transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements/),
which process whole AST tree.

Explicit is often a better pattern than implicit because it requires others to
understand how things are globally configured. This is in this spirit are
`babel-plugin-macros` designed. However, some things _do_ need to be implicit,
and those kinds of babel plugins can't be turned into macros.

## Inspiration

- [threepointone/babel-plugin-macros](https://github.com/threepointone/babel-plugin-macros)
- [facebookincubator/create-react-app#2730][cra-issue]

Thank you to [@phpnode](https://github.com/phpnode) for donating the npm package
`babel-plugin-macros`.

## Other Solutions

- [sweetjs](http://sweetjs.org/)

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
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/threepointone"><img src="https://avatars1.githubusercontent.com/u/18808?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Sunil Pai</b></sub></a><br /><a href="#ideas-threepointone" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://suchipi.com"><img src="https://avatars0.githubusercontent.com/u/1341513?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lily Scott</b></sub></a><br /><a href="#question-suchipi" title="Answering Questions">💬</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=suchipi" title="Documentation">📖</a></td>
    <td align="center"><a href="http://twitter.com/dralletje"><img src="https://avatars1.githubusercontent.com/u/767261?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michiel Dral</b></sub></a><br /><a href="#ideas-dralletje" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/tkh44"><img src="https://avatars2.githubusercontent.com/u/662750?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kye Hohenberger</b></sub></a><br /><a href="#ideas-tkh44" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://hamil.town"><img src="https://avatars1.githubusercontent.com/u/11481355?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mitchell Hamilton</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=mitchellhamilton" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=mitchellhamilton" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/wKovacs64"><img src="https://avatars1.githubusercontent.com/u/1288694?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Justin Hall</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=wKovacs64" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/PiereDome"><img src="https://avatars3.githubusercontent.com/u/1903016?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brian Pedersen</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=PiereDome" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=PiereDome" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/apalm"><img src="https://avatars3.githubusercontent.com/u/4495237?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Palm</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=apalm" title="Code">💻</a></td>
    <td align="center"><a href="https://michaelhsu.tw/"><img src="https://avatars1.githubusercontent.com/u/1527371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Hsu</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=evenchange4" title="Documentation">📖</a> <a href="#plugin-evenchange4" title="Plugin/utility libraries">🔌</a></td>
    <td align="center"><a href="https://github.com/citycide"><img src="https://avatars2.githubusercontent.com/u/16605186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bo Lingen</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=citycide" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tylerthehaas"><img src="https://avatars1.githubusercontent.com/u/11150235?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Haas</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=tylerthehaas" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/FWeinb"><img src="https://avatars0.githubusercontent.com/u/1250430?v=4?s=100" width="100px;" alt=""/><br /><sub><b>FWeinb</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=FWeinb" title="Code">💻</a></td>
    <td align="center"><a href="http://www.tomasehrlich.cz"><img src="https://avatars2.githubusercontent.com/u/827862?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tomáš Ehrlich</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/issues?q=author%3Atricoder42" title="Bug reports">🐛</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=tricoder42" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jgierer12"><img src="https://avatars0.githubusercontent.com/u/4331946?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonas Gierer</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=jgierer12" title="Documentation">📖</a></td>
    <td align="center"><a href="http://loicpadier.com"><img src="https://avatars2.githubusercontent.com/u/4009640?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Loïc Padier</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=lPadier" title="Code">💻</a></td>
    <td align="center"><a href="https://www.pshrmn.com"><img src="https://avatars0.githubusercontent.com/u/1127037?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paul Sherman</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=pshrmn" title="Code">💻</a></td>
    <td align="center"><a href="http://burningpotato.com"><img src="https://avatars1.githubusercontent.com/u/540777?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Conrad Buck</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=conartist6" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=conartist6" title="Tests">⚠️</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=conartist6" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/InvictusMB"><img src="https://avatars3.githubusercontent.com/u/3091209?v=4?s=100" width="100px;" alt=""/><br /><sub><b>InvictusMB</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=InvictusMB" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://codefund.io"><img src="https://avatars2.githubusercontent.com/u/12481?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Berry</b></sub></a><br /><a href="#fundingFinding-coderberry" title="Funding Finding">🔍</a></td>
    <td align="center"><a href="http://futagoza.github.io/"><img src="https://avatars1.githubusercontent.com/u/1943570?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Futago-za Ryuu</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=futagoza" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=futagoza" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://luc.im"><img src="https://avatars3.githubusercontent.com/u/6616955?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luc</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=lucleray" title="Code">💻</a></td>
    <td align="center"><a href="http://wintercounter.me"><img src="https://avatars2.githubusercontent.com/u/963776?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Victor Vincent</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=wintercounter" title="Code">💻</a></td>
    <td align="center"><a href="http://mvasilkov.ovh"><img src="https://avatars3.githubusercontent.com/u/140257?v=4?s=100" width="100px;" alt=""/><br /><sub><b>я котик пур-пур</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=mvasilkov" title="Documentation">📖</a></td>
    <td align="center"><a href="http://armandososa.com"><img src="https://avatars0.githubusercontent.com/u/139577?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Armando Sosa</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=soska" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/matvp91"><img src="https://avatars3.githubusercontent.com/u/12699796?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matthias</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=matvp91" title="Code">💻</a></td>
    <td align="center"><a href="https://www.jovidecroock.com/"><img src="https://avatars3.githubusercontent.com/u/17125876?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jovi De Croock</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=JoviDeCroock" title="Code">💻</a> <a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=JoviDeCroock" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://victorarowo.com"><img src="https://avatars0.githubusercontent.com/u/25545108?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Victor Arowo</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=VictorArowo" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://twitter.com/alexandermchan"><img src="https://avatars.githubusercontent.com/u/1864372?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex Chan</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=alexanderchan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://probablyup.com"><img src="https://avatars.githubusercontent.com/u/570070?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Evan Jacobs</b></sub></a><br /><a href="https://github.com/kentcdodds/babel-plugin-macros/commits?author=probablyup" title="Code">💻</a></td>
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
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/babel-plugin-macros/validate?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/babel-plugin-macros/actions?query=workflow%3Avalidate
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/babel-plugin-macros.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/babel-plugin-macros
[version-badge]: https://img.shields.io/npm/v/babel-plugin-macros.svg?style=flat-square
[package]: https://www.npmjs.com/package/babel-plugin-macros
[downloads-badge]: https://img.shields.io/npm/dm/babel-plugin-macros.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/babel-plugin-macros
[license-badge]: https://img.shields.io/npm/l/babel-plugin-macros.svg?style=flat-square
[license]: https://github.com/kentcdodds/babel-plugin-macros/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/babel-plugin-macros/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/kentcdodds/babel-plugin-macros?color=orange&style=flat-square
[bugs]: https://github.com/kentcdodds/babel-plugin-macros/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/kentcdodds/babel-plugin-macros/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/kentcdodds/babel-plugin-macros/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
[preval]: https://github.com/kentcdodds/babel-plugin-preval
[cra]: https://github.com/facebook/create-react-app
[cra-issue]: https://github.com/facebook/create-react-app/issues/2730
<!-- prettier-ignore-end -->

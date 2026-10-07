[![Node](https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33)](https://www.npmjs.com/package/human-signals)
[![TypeScript](https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff)](/src/main.d.ts)
[![Codecov](https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040)](https://codecov.io/gh/ehmicky/human-signals)
[![Mastodon](https://img.shields.io/badge/-Mastodon-808080.svg?logo=mastodon&colorA=404040&logoColor=9590F9)](https://fosstodon.org/@ehmicky)
[![Medium](https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040)](https://medium.com/@ehmicky)

Human-friendly process signals.

This is a map of known process signals with some information about each signal.

Unlike
[`os.constants.signals`](https://nodejs.org/api/os.html#os_signal_constants)
this includes:

- human-friendly [descriptions](#description)
- [default actions](#action), including whether they [can be prevented](#forced)
- whether the signal is [supported](#supported) by the current OS

# Example

```js
import { signalsByName, signalsByNumber } from 'human-signals'

console.log(signalsByName.SIGINT)
// {
//   name: 'SIGINT',
//   number: 2,
//   description: 'User interruption with CTRL-C',
//   supported: true,
//   action: 'terminate',
//   forced: false,
//   standard: 'ansi'
// }

console.log(signalsByNumber[8])
// {
//   name: 'SIGFPE',
//   number: 8,
//   description: 'Floating point arithmetic error',
//   supported: true,
//   action: 'core',
//   forced: false,
//   standard: 'ansi'
// }
```

# Install

```bash
npm install human-signals
```

This package works in Node.js >=16.17.0.

This is an ES module. It must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`. If TypeScript is used, it must be configured to
[output ES modules](https://www.typescriptlang.org/docs/handbook/esm-node.html),
not CommonJS.

# Usage

## signalsByName

_Type_: `object`

Object whose keys are signal [names](#name) and values are
[signal objects](#signal).

## signalsByNumber

_Type_: `object`

Object whose keys are signal [numbers](#number) and values are
[signal objects](#signal).

## signal

_Type_: `object`

Signal object with the following properties.

### name

_Type_: `string`

Standard name of the signal, for example `'SIGINT'`.

### number

_Type_: `number`

Code number of the signal, for example `2`. While most `number` are
cross-platform, some are different between different OS.

### description

_Type_: `string`

Human-friendly description for the signal, for example
`'User interruption with CTRL-C'`.

### supported

_Type_: `boolean`

Whether the current OS can handle this signal in Node.js using
[`process.on(name, handler)`](https://nodejs.org/api/process.html#process_signal_events).

The list of supported signals
[is OS-specific](https://github.com/ehmicky/cross-platform-node-guide/blob/main/docs/6_networking_ipc/signals.md#cross-platform-signals).

### action

_Type_: `string`\
_Enum_: `'terminate'`, `'core'`, `'ignore'`, `'pause'`, `'unpause'`

What is the default action for this signal when it is not handled.

### forced

_Type_: `boolean`

Whether the signal's default action cannot be prevented. This is `true` for
`SIGTERM`, `SIGKILL` and `SIGSTOP`.

### standard

_Type_: `string`\
_Enum_: `'ansi'`, `'posix'`, `'bsd'`, `'systemv'`, `'other'`

Which standard defined that signal.

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

Thanks go to our wonderful contributors:

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://fosstodon.org/@ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt=""/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/human-signals/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/human-signals/commits?author=ehmicky" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.electrovir.com"><img src="https://avatars0.githubusercontent.com/u/1205860?v=4" width="100px;" alt=""/><br /><sub><b>electrovir</b></sub></a><br /><a href="https://github.com/ehmicky/human-signals/commits?author=electrovir" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

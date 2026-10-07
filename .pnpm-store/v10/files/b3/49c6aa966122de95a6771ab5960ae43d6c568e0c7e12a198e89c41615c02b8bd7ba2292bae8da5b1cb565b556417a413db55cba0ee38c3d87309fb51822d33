# obug

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Unit Test][unit-test-src]][unit-test-href]

A lightweight JavaScript debugging utility, forked from [debug](https://www.npmjs.com/package/debug), featuring TypeScript and ESM support.

> [!NOTE]
> obug v1 retains most of the compatibility with [debug](https://github.com/debug-js/debug), but drops support for older browsers and Node.js, making it a drop-in replacement.
>
> obug v2 refactors some API imports and usage for better support of ESM and TypeScript, easier customization, and an even smaller package size.

## Key Differences from `debug`

- ✨ Minimal footprint
  - 7.7 kB package size
  - 1.4 KB minified + gzipped for browsers
- 📦 Zero dependencies
- 📝 Full TypeScript support
- 🚀 Native ESM compatibility
- 🌐 Optimized for modern runtimes
  - ES2015+ browsers
  - Modern Node.js versions
- 🎨 Customizable formatting

## Installation

```bash
npm install obug
```

## Usage

```ts
import { createDebug, disable, enable, enabled, namespaces } from 'obug'

// Get the currently enabled namespaces
console.log(namespaces())

const debug = createDebug('my-namespace', {
  // All options are optional

  useColors: true, // false, true, undefined for auto-detect
  color: 2, // custom color
  // custom formatArgs
  formatArgs(args) {},
  formatters: {},
  // Node.js only
  inspectOpts: {},

  // custom log
  log: console.log,
})

debug('This is a debug message')
console.log(
  debug.namespace, // 'my-namespace'
  debug.enabled, // Check if enabled
  debug.useColors, // true
  debug.color, // 2
  debug.formatArgs, // custom formatArgs
  debug.formatters, // {}
  debug.inspectOpts, // {}
  debug.log, // implemented log function
)

// Create a sub-namespace, and it will inherit options from the parent debugger
const sub = debug.extend('sub-namespace')
sub('This is a sub-namespace debug message')
console.log(sub.namespace) // 'my-namespace:sub-namespace'
```

## Original Authors

As obug is a fork of debug with significant modifications, we would like to acknowledge the original authors:

- TJ Holowaychuk
- Nathan Rajlich
- Andrew Rhyne
- Josh Junon

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025-PRESENT [Kevin Deng](https://github.com/sxzz)

[The MIT License](./LICENSE) Copyright (c) 2014-2017 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

[The MIT License](./LICENSE) Copyright (c) 2018-2021 Josh Junon

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/obug.svg
[npm-version-href]: https://npmjs.com/package/obug
[npm-downloads-src]: https://img.shields.io/npm/dm/obug
[npm-downloads-href]: https://www.npmcharts.com/compare/obug?interval=30
[unit-test-src]: https://github.com/sxzz/obug/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/sxzz/obug/actions/workflows/unit-test.yml

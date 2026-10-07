# 🛣️ pathe

> Universal filesystem path utils

[![version][npm-v-src]][npm-v-href]
[![downloads][npm-d-src]][npm-d-href]
[![size][size-src]][size-href]

## ❓ Why

For [historical reasons](https://docs.microsoft.com/en-us/archive/blogs/larryosterman/why-is-the-dos-path-character), windows followed MS-DOS and used backslash for separating paths rather than slash used for macOS, Linux, and other Posix operating systems. Nowadays, [Windows](https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file?redirectedfrom=MSDN) supports both Slash and Backslash for paths. [Node.js's built-in `path` module](https://nodejs.org/api/path.html) in the default operation of the path module varies based on the operating system on which a Node.js application is running. Specifically, when running on a Windows operating system, the path module will assume that Windows-style paths are being used. **This makes inconsistent code behavior between Windows and POSIX.**

Compared to popular [upath](https://github.com/anodynos/upath), pathe provides **identical exports** of Node.js with normalization on **all operations** and is written in modern **ESM/TypeScript** and has **no dependency on Node.js**!

This package is a drop-in replacement of the Node.js's [path module](https://nodejs.org/api/path.html) module and ensures paths are normalized with slash `/` and work in environments including Node.js.

## 💿 Usage

Install using npm or yarn:

```bash
# npm
npm i pathe

# yarn
yarn add pathe

# pnpm
pnpm i pathe
```

Import:

```js
// ESM / Typescript
import { resolve, matchesGlob } from "pathe";

// CommonJS
const { resolve, matchesGlob } = require("pathe");
```

Read more about path utils from [Node.js documentation](https://nodejs.org/api/path.html) and rest assured behavior is consistently like POSIX regardless of your input paths format and running platform (the only exception is `delimiter` constant export, it will be set to `;` on windows platform).

### Extra utilities

Pathe exports some extra utilities that do not exist in standard Node.js [path module](https://nodejs.org/api/path.html).
In order to use them, you can import from `pathe/utils` subpath:

```js
import {
  filename,
  normalizeAliases,
  resolveAlias,
  reverseResolveAlias,
} from "pathe/utils";
```

## License

Made with 💛 Published under the [MIT](./LICENSE) license.

Some code was used from the Node.js project. Glob supported is powered by [zeptomatch](https://github.com/fabiospampinato/zeptomatch).

<!-- Refs -->

[npm-v-src]: https://img.shields.io/npm/v/pathe?style=flat-square
[npm-v-href]: https://npmjs.com/package/pathe
[npm-d-src]: https://img.shields.io/npm/dm/pathe?style=flat-square
[npm-d-href]: https://npmjs.com/package/pathe
[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/pathe/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/pathe/actions?query=workflow%3Aci
[size-src]: https://packagephobia.now.sh/badge?p=pathe
[size-href]: https://packagephobia.now.sh/result?p=pathe
